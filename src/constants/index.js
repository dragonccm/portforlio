import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  coverhunt,
  dcc,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'clientwork',
    title: 'Client Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Website Design',
    icon: ux,
  },
  {
    title: 'N8N Automation',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Web Designer & Frontend Developer',
    company_name: 'Delta Labs JSC',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
    points: [
      'Designed and developed 60+ client websites including DeFi platforms, investment apps, and meme token landing pages.',
      'Built responsive, pixel-perfect UIs using React, Next.js, and Tailwind CSS.',
      'Transformed design mockups (Figma) into fully functional, production-ready websites.',
      'Maintained and updated existing web projects, ensuring performance and cross-browser compatibility.',
    ],
  },
  {
    title: 'N8N Automation Developer',
    company_name: 'Delta Labs JSC',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2025 - Present',
    points: [
      'Built automated workflows using n8n to streamline internal and client business operations.',
      'Integrated third-party APIs (webhooks, email, Telegram, databases) via n8n pipelines.',
      'Automated data collection, notification, and reporting workflows, reducing manual effort significantly.',
      'Designed and maintained multi-step automation flows for crypto and fintech client projects.',
    ],
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Social Media App',
    description: 'a social media app for sharing and viewing images.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'mongodb', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: komikult,
    repo: 'https://github.com/dragonccm/test_deploy.git',
    demo: 'https://wtfsocial.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Light novel website',
    description:
      'Light novel website that allows users to view and rate light novels.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'restapi', color: 'green-text-gradient' },
      { name: 'scss', color: 'pink-text-gradient' },
    ],
    image: leaderboard,
    repo: 'https://github.com/dawn1810/LightNovelWeb.git',
    demo: 'https://wtfsocial.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Conduct score',
    description: 'conduct score evaluation website for students.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: math,
    repo: 'https://github.com/phat-612/newCDRL.git',
    demo: 'https://wtfsocial.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Music website',
    description: `Music website that allows users to search for any Music or show's ratings and its details.`,
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: movie,
    repo: 'https://github.com/dragonccm/Wtf-music-Fontend.git',
    demo: 'https://wtf-music-fontend.vercel.app/',
  },
  {
    id: 'project-5',
    name: 'Chat Website',
    description: 'Chat website that allows users to chat with each other.',
    tags: [
      { name: 'nextjs', color: 'blue-text-gradient' },
      { name: 'supabase', color: 'green-text-gradient' },
      { name: 'css', color: 'pink-text-gradient' },
    ],
    image: nyeusi,
    repo: 'https://github.com/Hung-Thinhh/WTFChat.git',
    demo: 'https://wtfsocial.vercel.app/',
  },
];

const clientWebsites = [
  {
    category: 'DeFi & Investment Platforms',
    sites: [
      { name: 'VoltCity', url: 'https://voltcity.vn' },
      { name: 'TrustX Labs', url: 'https://trustxlabs.com/' },
      { name: 'MetaCare', url: 'https://metacare.live/' },
      { name: 'TokPos', url: 'https://tokpos.io/' },
      { name: 'DNEX AI', url: 'https://dnex.ai/' },
      { name: 'FundGo Cinema', url: 'https://fundgocinema.com/' },
      { name: 'XBank App (COM)', url: 'https://xbankapp.com' },
      { name: 'XBank App (VN)', url: 'https://xbankapp.vn' },
      { name: 'TriViet', url: 'https://triviet.io' },
      { name: 'TaoToken', url: 'https://taotoken.vn' },
      { name: 'ETH Chain VN', url: 'http://ethchain.vn' },
      { name: 'BNB Chain VN', url: 'https://bnbchain.vn' },
      { name: 'Sol Invest', url: 'https://solinvest.vn' },
      { name: 'Viet Futures', url: 'https://viet-futures.com' },
      { name: 'TON Chain VN', url: 'http://tonchain.vn/' },
      { name: 'BiZen AI', url: 'https://bizen.ai/' },
      { name: 'Demo DAMT', url: 'https://demo-damt.deltalabsjsc.com/' },
      { name: 'DA Holding', url: 'https://daholding.vn/' },
      { name: 'Demo USDT JSC', url: 'https://demo-usdtjsc.deltalabsjsc.com/' },
      { name: 'LiveTrade', url: 'https://livetrade.vn/' },
      { name: 'VinaFish', url: 'http://vinafish.vn/' },
      { name: 'Doge Invest', url: 'https://dogeinvest.vn' },
      { name: 'RWA Chain', url: 'https://rwachain.vn/' },
      { name: 'DAVN', url: 'https://davn.vn/' },
      { name: 'ADA Invest', url: 'https://adainvest.vn' },
      { name: 'FinLedger', url: 'http://finledger.vn/' },
      { name: 'XPR Invest', url: 'https://xprinvest.vn/' },
      { name: 'CPASS', url: 'https://cpass.vn/' },
      { name: 'AI FinTech JP', url: 'https://aifintech.jp/' },
      { name: 'Canhò Vinhomes Hạ Long', url: 'https://canhovinhomeshalong.vn/' },
    ],
  },
  {
    category: 'Meme Token Websites',
    sites: [
      { name: 'DogsOut Meme', url: 'https://dogsoutmeme.com' },
      { name: 'Pugs Meme', url: 'https://pugsmeme.com' },
      { name: 'Lynx Meme', url: 'https://lynxmeme.fun' },
      { name: 'Baby3', url: 'https://baby3.fun' },
      { name: 'Santa Meme', url: 'https://santameme.fun' },
      { name: 'Squid2 Meme', url: 'https://squid2meme.com' },
      { name: 'Apteu', url: 'https://apteu.fun' },
      { name: 'Aff Meme', url: 'https://affmeme.com' },
      { name: 'Ducks Meme', url: 'https://ducksmeme.com' },
      { name: 'Pikachu Meme', url: 'https://pikachumeme.com' },
      { name: 'Golden Snake', url: 'https://goldensnake.fun' },
      { name: 'Labubu Meme', url: 'https://labubumeme.store' },
      { name: 'Temu Meme', url: 'https://temumeme.com' },
      { name: 'Fortune Meme', url: 'https://fortunememe.com' },
      { name: 'Crab Meme', url: 'https://crabmeme.com' },
      { name: 'Tank Meme', url: 'https://tankmeme.com' },
      { name: 'Gorilla on Base', url: 'https://gorillaonbase.fun' },
      { name: 'Tom Meme', url: 'https://tommeme.fun' },
      { name: 'Basa Meme', url: 'https://basameme.fun' },
      { name: 'UAV Meme', url: 'https://uavmeme.fun' },
      { name: 'Pickleball Meme', url: 'https://pickleballmeme.fun' },
      { name: 'Conan Meme', url: 'https://conanmeme.fun' },
      { name: 'Wolfu Meme', url: 'https://wolfumeme.fun' },
      { name: 'Sirius Meme', url: 'https://siriusmeme.fun' },
      { name: 'GPT5 Meme', url: 'https://gpt5meme.com' },
      { name: 'Natra Meme', url: 'https://natrameme.fun' },
      { name: 'Z2 Meme', url: 'https://z2meme.fun' },
      { name: 'MoonFun', url: 'https://moonfun.io' },
      { name: 'VQueen', url: 'https://vqueen.fun' },
      { name: 'Crane Meme', url: 'https://cranememe.com' },
      { name: 'Horse Gold', url: 'https://horsegold.fun' },
      { name: 'Tulkun', url: 'https://tulkun.fun' },
    ],
  },
];

export { services, technologies, experiences, projects, clientWebsites };
