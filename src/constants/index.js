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
  coverhunt,
  dcc,
  luutaShot,
  goctruyenShot,
  projectManagerShot,
  fundTrackerShot,
  bachDangShot,
  wtfFoodShot,
  vinhomesShot,
  vinafishShot,
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
    id: 'luuta',
    name: 'LUUTA Garment Workshop',
    category: 'Business system',
    description:
      'Production management for a garment workshop. Orders move through 11 stages — cutting, sewing, QC, packing, delivery — across 6 departments, with role-based access, Kanban boards and piece-rate payroll exported to Excel.',
    tags: ['Next.js 16', 'PostgreSQL', 'TypeScript', 'dnd-kit'],
    image: luutaShot,
    demo: 'https://luu-order.wtfdev.qzz.io/',
    repo: 'https://github.com/long-dr03/lu-order',
  },
  {
    id: 'goctruyen',
    name: 'Góc Truyện',
    category: 'Content platform',
    description:
      'A platform to read and listen to stories online: featured and trending lists, genres, ratings, audio chapters and an admin area for managing stories.',
    tags: ['Next.js 16', 'MongoDB', 'TypeScript', 'Tailwind'],
    image: goctruyenShot,
    demo: 'https://goctruyen.wtfdev.qzz.io/',
    repo: 'https://github.com/long-dr03/WTF-Novel-new-',
  },
  {
    id: 'project-manager',
    name: 'Dragonccm Project Manager',
    category: 'Productivity',
    description:
      'Plan projects, track tasks on drag-and-drop boards with real-time updates, and export work reports to PDF.',
    tags: ['Next.js', 'MongoDB', 'Socket.IO', 'Zustand'],
    image: projectManagerShot,
    demo: 'https://dragonccm-word.vercel.app/',
    repo: 'https://github.com/dragonccm/Project_manager',
  },
  {
    id: 'fund-tracker',
    name: 'Nhật Ký Quỹ — Fund Tracker',
    category: 'Fintech',
    description:
      'Personal tracker for mutual fund and ETF portfolios: log transactions, set goals, and see allocation and annualised returns (XIRR). Built on Material Design 3.',
    tags: ['Next.js 15', 'MongoDB', 'Material 3', 'Recharts'],
    image: fundTrackerShot,
    demo: 'https://wtf-fund-tracker.vercel.app/',
    repo: 'https://github.com/dragonccm/wtf-FundTracker',
  },
  {
    id: 'bach-dang',
    name: 'Sử Việt Hùng Ca — Bạch Đằng 938',
    category: 'Game',
    description:
      'Interactive history game retelling the Battle of Bạch Đằng (938). A branching story of 18 tactical scenes leads to 10 different endings.',
    tags: ['React 19', 'Vite', 'TypeScript', 'Tailwind 4'],
    image: bachDangShot,
    demo: 'https://wtfgame.wtfdev.qzz.io/',
    repo: 'https://github.com/dragonccm/visual_game',
  },
  {
    id: 'wtf-food',
    name: 'WTF Food',
    category: 'E-commerce',
    description:
      'Food delivery storefront: browse restaurants and categories, daily deals, a cart and account sign-in, with light and dark themes.',
    tags: ['Next.js 14', 'Redux Toolkit', 'NextAuth', 'MongoDB'],
    image: wtfFoodShot,
    demo: 'https://wtfshop.vercel.app/',
    repo: 'https://github.com/dragonccm/WTF-SHOP',
  },
];

// Sites built for clients at Delta Labs JSC that are still online.
const clientWebsites = [
  {
    name: 'Vinhomes Hạ Long Xanh',
    category: 'Real estate landing page',
    description:
      'Sales site for a 4,100 ha resort city project: location, products, amenities, video tour and lead-capture forms.',
    tags: ['WordPress', 'Responsive', 'Lead forms'],
    image: vinhomesShot,
    url: 'https://canhovinhomeshalong.vn/',
  },
  {
    name: 'VinaFish',
    category: 'Corporate website',
    description:
      'Bilingual (VI/EN) site for a seafood exporter: company profile, product catalogue, news and recruitment.',
    tags: ['WordPress', 'Bilingual', 'Product catalogue'],
    image: vinafishShot,
    url: 'https://vinafish.vn/',
  },
];

export { services, technologies, experiences, projects, clientWebsites };
