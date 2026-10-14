// One-time helper to get a Gmail refresh token for the contact form.
//
//   node scripts/google-oauth.mjs            prints the consent URL
//   node scripts/google-oauth.mjs <url|code> exchanges the code and writes
//                                            GOOGLE_* values to .env.local
//
// Reads the OAuth client from client_secret*.json in the project root
// (never committed).
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(new URL('..', import.meta.url).pathname);
const file = fs.readdirSync(root).find((f) => /^client_secret.*\.json$/.test(f));
if (!file) {
  console.error('No client_secret*.json found in the project root.');
  process.exit(1);
}
const client = Object.values(JSON.parse(fs.readFileSync(path.join(root, file), 'utf8')))[0];
const redirectUri = client.redirect_uris[0];
const SCOPE = 'https://www.googleapis.com/auth/gmail.send';

const arg = process.argv[2];

if (!arg) {
  const url = new URL(client.auth_uri);
  url.search = new URLSearchParams({
    client_id: client.client_id,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope: SCOPE,
    access_type: 'offline',
    prompt: 'consent',
  });
  console.log(url.toString());
  process.exit(0);
}

const code = arg.startsWith('http') ? new URL(arg).searchParams.get('code') : arg;
const res = await fetch(client.token_uri, {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    code,
    client_id: client.client_id,
    client_secret: client.client_secret,
    redirect_uri: redirectUri,
    grant_type: 'authorization_code',
  }),
});
const data = await res.json();
if (!res.ok || !data.refresh_token) {
  console.error('Token exchange failed:', data.error, data.error_description || '');
  process.exit(1);
}

const envFile = path.join(root, '.env.local');
const lines = fs.existsSync(envFile)
  ? fs.readFileSync(envFile, 'utf8').split('\n').filter((l) => l && !l.startsWith('GOOGLE_'))
  : [];
lines.push(
  `GOOGLE_CLIENT_ID=${client.client_id}`,
  `GOOGLE_CLIENT_SECRET=${client.client_secret}`,
  `GOOGLE_REFRESH_TOKEN=${data.refresh_token}`
);
fs.writeFileSync(envFile, lines.join('\n') + '\n', { mode: 0o600 });
console.log(`Saved GOOGLE_* to ${envFile} (scope: ${data.scope}).`);
