This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Setup & Skills Demonstration

This README provides exact instructions to replicate this website setup, demonstrating the following skills and technologies:

### Technologies & Versions
- **Framework**: Next.js 16.2.6 with App Router
- **Frontend**: React 19.2.4 with TypeScript 5.x
- **Styling**: Tailwind CSS v4 with PostCSS
- **Icons**: Lucide React 1.14.0
- **Animations**: Anime.js 4.4.1
- **Linting**: ESLint 9.x with Next.js config
- **Build Tool**: Turbopack (Next.js built-in)
- **Package Manager**: pnpm
- **Node Types**: @types/node 20.x, @types/react 19.x

### Prerequisites
- Node.js (compatible with Next.js 16.2.6)
- pnpm package manager
- Git

### Exact Installation Steps

1. **Initialize Project**:
   ```bash
   npx create-next-app@16.2.6 appskitchen --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   cd appskitchen
   ```

2. **Install Dependencies**:
   ```bash
   pnpm install
   pnpm add animejs@^4.4.1 lucide-react@^1.14.0
   ```

3. **Project Structure** (after setup):
   ```
   appskitchen/
   ├── app/
   │   ├── components/
   │   │   ├── Footer.tsx
   │   │   ├── Nav.tsx
   │   │   ├── Preloader.tsx
   │   ├── globals.css
   │   ├── layout.tsx
   │   ├── page.tsx
   │   ├── about/page.tsx
   │   ├── contact/page.tsx
   │   └── work/page.tsx
   ├── public/
   │   ├── logo.svg
   │   └── [other assets]
   ├── next.config.ts
   ├── package.json
   ├── tailwind.config.ts
   ├── postcss.config.mjs
   ├── eslint.config.mjs
   └── tsconfig.json
   ```

### Configuration Files

**next.config.ts**:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  allowedDevOrigins: ['192.168.0.31'], // For cross-origin dev access
};

export default nextConfig;
```

**package.json** (key sections):
```json
{
  "name": "appskitchen",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "animejs": "^4.4.1",
    "lucide-react": "^1.14.0",
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}
```

### Custom Components

**Preloader Component** (`app/components/Preloader.tsx`):
```typescript
'use client';

import { useEffect, useState } from 'react';
import anime from 'animejs';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 2000,
    });

    // Animate logo in
    timeline
      .add({
        targets: '.preloader-logo',
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
      })
      .add({
        targets: '.progress-bar',
        width: ['0%', '100%'],
        duration: 1500,
        easing: 'easeInOutQuad',
      }, '-=400')
      .add({
        targets: '.preloader',
        opacity: [1, 0],
        duration: 600,
        complete: () => setIsVisible(false),
      });

    return () => {
      timeline.pause();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="preloader fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <img
        src="/logo.svg"
        alt="Logo"
        className="preloader-logo w-24 h-24 mb-8"
      />
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="progress-bar h-full bg-blue-500 rounded-full"></div>
      </div>
    </div>
  );
}
```

**Layout Integration** (`app/layout.tsx`):
```typescript
import type { Metadata } from 'next'
import './globals.css'
import Preloader from './components/Preloader'

export const metadata: Metadata = {
  title: 'Apps Kitchen — We Build What Grows',
  description: 'Apps Kitchen is a product studio specialising in fintech and asset management applications.',
  openGraph: {
    title: 'Apps Kitchen — We Build What Grows',
    description: 'Mobile app studio specialising in fintech and asset management applications.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  )
}
```

### Key Features Implemented

1. **Responsive Design**: Tailwind CSS utility classes for mobile-first responsive layout
2. **Animated Preloader**: 
   - Logo scales in with opacity fade
   - Progress bar fills with easeInOutQuad easing
   - Entire preloader fades out after completion
   - Uses anime.js timeline for sequenced animations
3. **Cross-Origin Configuration**: `allowedDevOrigins` in next.config.ts for network access during development
4. **TypeScript Integration**: Full type safety with Next.js and React
5. **Font Optimization**: Next.js automatic font loading with Geist font family
6. **ESLint Configuration**: Code quality enforcement with Next.js recommended rules

### Running the Project

1. **Start Development Server**:
   ```bash
   pnpm dev
   ```

2. **Access the Site**:
   - Local: http://localhost:3000
   - Network: http://[your-ip]:3000 (with allowedDevOrigins configured)

3. **Build for Production**:
   ```bash
   pnpm build
   pnpm start
   ```

### Troubleshooting

- **Cross-Origin Errors**: Ensure `allowedDevOrigins` in `next.config.ts` includes your network IP
- **Animation Issues**: Verify anime.js is installed and imported correctly
- **TypeScript Errors**: Check @types packages are installed for React and Node

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
