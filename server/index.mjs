// Serves the built site and the contact endpoint, which forwards each
// message to Gmail and Telegram. No dependencies: Node 22+ only.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = Number(process.env.PORT) || 3000;
const DIST = path.resolve(fileURLToPath(new URL('../dist', import.meta.url)));

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.otf': 'font/otf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
  '.bin': 'application/octet-stream',
  '.gltf': 'model/gltf+json',
  '.txt': 'text/plain; charset=utf-8',
};

// ---------- notifications ----------

let gmailToken = { value: null, expiresAt: 0 };

async function getGmailAccessToken() {
  if (gmailToken.value && Date.now() < gmailToken.expiresAt - 60_000) {
    return gmailToken.value;
  }
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Google token: ${data.error} ${data.error_description || ''}`);
  gmailToken = { value: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
  return gmailToken.value;
}

const encodeHeader = (text) => `=?UTF-8?B?${Buffer.from(text).toString('base64')}?=`;

async function sendGmail({ name, email, message }) {
  const to = process.env.CONTACT_TO_EMAIL;
  const raw = [
    `To: ${to}`,
    `Reply-To: ${encodeHeader(name)} <${email}>`,
    `Subject: ${encodeHeader(`[Portfolio] Tin nhắn mới từ ${name}`)}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: base64',
    '',
    Buffer.from(
      `Tên: ${name}\nEmail: ${email}\n\n${message}\n\n— Gửi từ form liên hệ trên portfolio. Trả lời email này để phản hồi trực tiếp.`
    ).toString('base64'),
  ].join('\r\n');

  const res = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${await getGmailAccessToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: Buffer.from(raw).toString('base64url') }),
  });
  if (!res.ok) throw new Error(`Gmail send: ${res.status} ${await res.text()}`);
}

async function sendTelegram({ name, email, message }) {
  const res = await fetch(
    `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: `📬 Tin nhắn mới từ portfolio\n\n👤 ${name}\n✉️ ${email}\n\n${message}`,
        disable_web_page_preview: true,
      }),
    }
  );
  const data = await res.json();
  if (!data.ok) throw new Error(`Telegram: ${data.description}`);
}

const channels = [
  {
    name: 'gmail',
    enabled: () =>
      ['GOOGLE_CLIENT_ID', 'GOOGLE_CLIENT_SECRET', 'GOOGLE_REFRESH_TOKEN', 'CONTACT_TO_EMAIL'].every(
        (key) => process.env[key]
      ),
    send: sendGmail,
  },
  {
    name: 'telegram',
    enabled: () => process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID,
    send: sendTelegram,
  },
];

// ---------- contact endpoint ----------

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_WINDOW_MS = 10 * 60_000;
const RATE_MAX = 5;
const hits = new Map();

function clientIp(req) {
  return (
    req.headers['cf-connecting-ip'] ||
    req.headers['x-forwarded-for']?.split(',')[0].trim() ||
    req.socket.remoteAddress
  );
}

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

function readJson(req, limit = 16 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error('too large'));
        req.destroy();
      } else chunks.push(chunk);
    });
    req.on('end', () => {
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch {
        reject(new Error('invalid json'));
      }
    });
    req.on('error', reject);
  });
}

function sendJson(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
  res.end(JSON.stringify(body));
}

async function handleContact(req, res) {
  let body;
  try {
    body = await readJson(req);
  } catch {
    return sendJson(res, 400, { error: 'Invalid request.' });
  }

  // Header-safe single-line fields; the message keeps its line breaks.
  const name = String(body.name ?? '').replace(/[\r\n]+/g, ' ').trim();
  const email = String(body.email ?? '').replace(/[\r\n]+/g, '').trim();
  const message = String(body.message ?? '').trim();

  // Honeypot field: real visitors never see or fill it.
  if (body.website) return sendJson(res, 200, { ok: true });

  if (!name || name.length > 100) return sendJson(res, 400, { error: 'Please enter your name.' });
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return sendJson(res, 400, { error: 'Please enter a valid email address.' });
  }
  if (message.length < 2 || message.length > 5000) {
    return sendJson(res, 400, { error: 'Please write a message (up to 5000 characters).' });
  }
  if (rateLimited(clientIp(req))) {
    return sendJson(res, 429, { error: 'Too many messages. Please try again later.' });
  }

  const active = channels.filter((c) => c.enabled());
  const results = await Promise.allSettled(active.map((c) => c.send({ name, email, message })));
  results.forEach((r, i) => {
    if (r.status === 'rejected') console.error(`[contact] ${active[i].name} failed:`, r.reason.message);
  });

  if (!results.some((r) => r.status === 'fulfilled')) {
    return sendJson(res, 502, { error: 'Could not send your message. Please try again later.' });
  }
  return sendJson(res, 200, { ok: true });
}

// ---------- static files ----------

function serveStatic(req, res) {
  const urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  let file = path.join(DIST, urlPath);
  if (!file.startsWith(DIST)) {
    res.writeHead(403);
    return res.end();
  }

  let stat = fs.statSync(file, { throwIfNoEntry: false });
  if (stat?.isDirectory()) {
    file = path.join(file, 'index.html');
    stat = fs.statSync(file, { throwIfNoEntry: false });
  }
  if (!stat) {
    // Missing hashed assets are real 404s; everything else is the SPA.
    if (urlPath.startsWith('/assets/')) {
      res.writeHead(404);
      return res.end('Not found');
    }
    file = path.join(DIST, 'index.html');
    stat = fs.statSync(file);
  }

  const immutable = file.startsWith(path.join(DIST, 'assets') + path.sep);
  res.writeHead(200, {
    'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream',
    'Content-Length': stat.size,
    'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
    'X-Content-Type-Options': 'nosniff',
  });
  if (req.method === 'HEAD') return res.end();
  fs.createReadStream(file).pipe(res);
}

const server = http.createServer((req, res) => {
  const { pathname } = new URL(req.url, 'http://x');

  if (pathname === '/api/health') return sendJson(res, 200, { ok: true });
  if (pathname === '/api/contact') {
    if (req.method !== 'POST') return sendJson(res, 405, { error: 'Method not allowed.' });
    return handleContact(req, res).catch((err) => {
      console.error('[contact]', err);
      sendJson(res, 500, { error: 'Server error.' });
    });
  }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405);
    return res.end();
  }
  serveStatic(req, res);
});

server.listen(PORT, '0.0.0.0', () => {
  const enabled = channels.filter((c) => c.enabled()).map((c) => c.name);
  console.log(`Portfolio on :${PORT} — contact channels: ${enabled.join(', ') || 'none configured'}`);
});
