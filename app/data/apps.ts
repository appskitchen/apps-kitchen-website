export interface App {
  id: string
  emoji: string
  category: string
  name: string
  desc: string
  stack: string[]
  android?: string
  ios?: string
  image?: string
  downloads?: string
  badge?: string
  status: string
  featured?: boolean
}

export const apps: App[] = [
  {
    id: 'first-edge',
    emoji: '💹',
    category: 'Investment Management',
    name: 'First Edge',
    desc: 'A robust wealth and investment management app for First Asset Management. Clients can monitor portfolios, track performance across multiple asset classes, and manage investments on the go.',
    stack: ['Flutter', 'NestJS', 'PostgreSQL'],
    android: 'https://play.google.com/store/apps/details?id=com.first_assetmanagement.firstedge',
    ios: 'https://apps.apple.com/fi/app/first-edge/id6759828990',
    image: '/firstasset-dashboard.jpg',
    downloads: '10K+',
    badge: 'New',
    status: 'Live',
    featured: true,
  },
  {
    id: 'norrenworld',
    emoji: '🏦',
    category: 'Financial Services',
    name: 'NorrenWorld',
    desc: "Full-service financial application for Norrenberger Financial Group — one of Nigeria's leading investment houses. Covers portfolio management, fixed income, and equity trading.",
    stack: ['Flutter', 'Laravel', 'REST API'],
    android: 'https://play.google.com/store/apps/details?id=com.norrenberger.nicmlmobile',
    ios: 'https://apps.apple.com/ie/app/norrenworld/id6502291999',
    image: '/norren-dashboard.jpg',
    downloads: '5K+',
    status: 'Live',
  },
  {
    id: 'corper-invest',
    emoji: '🎖️',
    category: 'Investment Platform',
    name: 'Corper Invest',
    desc: 'Dedicated investment platform designed for NYSC corps members — making wealth-building accessible from day one of national service. Clean onboarding, wallet management, and investment tracking.',
    stack: ['Flutter', 'Laravel', 'Paystack'],
    android: 'https://play.google.com/store/apps/details?id=com.corperinvest.app',
    ios: 'https://apps.apple.com/app/corper-invest-mobile/id6467129788',
    downloads: '1K+',
    status: 'Live',
  },
  {
    id: 'zinary',
    emoji: '💳',
    category: 'Digital Finance',
    name: 'Zinary Mobile',
    desc: 'Digital financial services platform providing modern banking and payment features to underserved markets. Includes wallet, transfers, and bill payments.',
    stack: ['Flutter', 'NestJS', 'PostgreSQL'],
    android: 'https://www.zinary.com',
    ios: 'https://www.zinary.com',
    image: '/zinary-dashboard.png',
    status: 'Live',
  },
  {
    id: 'peerpay',
    emoji: '🌍',
    category: 'Cross-border Payments',
    name: 'Peerpay Networks',
    desc: 'Cross-border payment solution connecting users across Africa with fast, compliant international money transfer capabilities. Multi-currency wallets with real-time FX.',
    stack: ['Flutter', 'NestJS', 'TypeORM'],
    badge: 'Coming Soon',
    status: 'Coming Soon',
  },
  {
    id: 'cape',
    emoji: '📊',
    category: 'Wealth Management',
    name: 'Cape by Cordros',
    desc: "Modern wealth and investment management app for Cordros Capital — Nigeria's leading capital market operator. Full suite of mutual funds, equities, and fixed income products.",
    stack: ['Flutter', 'Figma', 'REST API'],
    badge: 'Design Ongoing',
    status: 'Design Ongoing',
  },
  {
    id: 'agrovesto',
    emoji: '🌱',
    category: 'Agricultural Technology',
    name: 'AgroVesto',
    desc: 'Field agent app for agricultural operations, enabling offline-capable beneficiary registration, farmer onboarding, and activity tracking for rural field teams.',
    stack: ['Flutter', 'MVVM', 'SQLite'],
    status: 'Delivered',
  },
  {
    id: 'acresal',
    emoji: '🗺️',
    category: 'GIS / Field Operations',
    name: 'ACReSAL MIS',
    desc: 'Offline-first field operations platform with GPS, GIS mapping, and background sync for government land restoration programmes. MVP delivered and production-ready.',
    stack: ['Flutter', 'GIS', 'Background Sync'],
    status: 'MVP Delivered',
  },
  {
    id: 'lets-speak-french',
    emoji: '🇫🇷',
    category: 'EdTech / Language Learning',
    name: "Let's Speak French",
    desc: 'French language learning app with audio-lyrics sync (Spotify-style), TTS modes, freemium paywall with Paystack, and a Laravel/Strapi backend.',
    stack: ['Flutter', 'Laravel', 'Strapi CMS', 'Paystack'],
    status: 'Live',
  },
]

export const featuredApps = apps.slice(0, 6)
