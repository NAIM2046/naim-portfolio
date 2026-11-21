export interface ProductionApp {
  id: string;
  title: string;
  subtitle?: string;
  category: 'E-Commerce' | 'EdTech' | 'FinTech' | 'NGO' | 'News';
  description: string;
  liveUrl?: string;
  image?: string;
  stack: string[];
  highlights: string[];
  metrics: string;
  iconName: string;
  scope?: {
    role: string;
    timeline: string;
    targetUsers: string;
    platforms: string;
  };
  problems?: {
    title: string;
    detail: string;
  }[];
  caseStudy: {
    challenge: string;
    solution: string;
    architecture: string;
  };
  architectureDetails?: {
    frontend: string[];
    backend: string[];
  };
  engineeringHighlights?: {
    title: string;
    challenge?: string;
    points: string[];
  }[];
  impactMetrics?: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
  }[];
  standoutPoints?: {
    title: string;
    detail: string;
  }[];
}

export interface EngineeringProject {
  id: string;
  title: string;
  description: string;
  githubUrl?: string;
  videoUrl?: string;
  stack: string[];
  type: 'Real-Time System' | 'Analytics & Management' | 'AI & R&D';
  keyFeatures: string[];
}

export const PERSONAL_INFO = {
  name: 'Naim Hossain',
  title: 'Full-Stack Web Developer & Co-Founder @ Nexovate Labs',
  email: 'naim2046juiit@gmail.com',
  phone: '+880 1575606194',
  location: 'Dhaka, Bangladesh',
  education: {
    degree: 'B.Sc. in Information & Communication Technology (ICT)',
    institution: 'Institute of Information Technology (IIT), Jahangirnagar University',
  },
  github: 'https://github.com/NAIM2046',
  linkedin: 'https://www.linkedin.com/in/naimju/',
  upwork: 'https://www.upwork.com',
  leetcode: 'https://leetcode.com/u/NAIM1111/',
  codeforces: 'https://codeforces.com/profile/naim_2046',
  codechef: 'https://www.codechef.com/users/naim2046',
  bio: 'Full-Stack Web Developer and Co-Founder of Nexovate Labs with experience delivering 8+ production web applications. Currently pursuing B.Sc. in ICT at Jahangirnagar University while exploring AI, FastAPI, and scalable software architectures.',
};

export const PRODUCTION_APPS: ProductionApp[] = [
  {
    id: 'ju-hall-token',
    title: 'JU Hall Dining Token & Management System (আমারকুপন)',
    subtitle: 'Next-Gen University Dining Automation, Digital Wallet & Offline-Ready Token Verification',
    category: 'FinTech',
    description:
      'An enterprise-grade, mobile-first dining management and campus fintech platform built for Jahangirnagar University’s residential halls. Replaces paper meal tokens, inaccurate kitchen estimation, and manual bookkeeping with real-time digital pre-ordering, digital wallets, sub-second QR token validation, and automated dining analytics.',
    liveUrl: 'https://amarcoupon.com',
    image: '/projects/ju-hall-token.jpg',
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Shadcn UI',
      'TanStack React Query',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'IndexedDB',
      'WebRTC',
    ],
    highlights: [
      'Sub-300ms WebRTC QR Token Scanner',
      'Offline-First IndexedDB Sync Queue',
      'Digital Wallet (bKash / Nagad) & Failed Trx Desk',
      '4-Tier RBAC for 10,000+ Residential Students',
    ],
    metrics: '10,000+ Target Users',
    iconName: 'Utensils',
    scope: {
      role: 'Full Stack Software Engineer & UI/UX Architect',
      timeline: 'Production-Deployed & Actively Used',
      targetUsers: '10,000+ University Residential Students, Hall Dining Staff, Hall Administrators & Super Admins',
      platforms: 'Mobile-First Progressive Web App (PWA) & Cloud Management Portal',
    },
    problems: [
      {
        title: 'Extreme Dining Hall Congestion',
        detail:
          'During peak lunch (1:00 PM – 2:30 PM) and dinner (8:00 PM – 9:30 PM) windows, manual paper coupon stamping caused line delays of 15–25 minutes per student.',
      },
      {
        title: 'Food Wastage & Shortages',
        detail:
          'Kitchen managers lacked accurate pre-service headcounts, leading to either drastic food shortages or expensive meal wastage daily.',
      },
      {
        title: 'Financial Leakage & Token Fraud',
        detail:
          'Paper tokens were prone to duplication, sharing, and manual accounting errors.',
      },
      {
        title: 'Network Dropouts in Dining Basements',
        detail:
          'Dining halls frequently suffer from weak cellular and Wi-Fi reception, causing traditional online-only verification systems to fail.',
      },
    ],
    caseStudy: {
      challenge:
        'Peak dining bursts cannot tolerate 2-second cloud roundtrips or basement Wi-Fi dropouts while serving hundreds of students within a 60-minute window.',
      solution:
        'Built a unified 4-tier role-based PWA with a sub-300ms WebRTC QR scanner, pre-cached offline token verification via IndexedDB, time-locked dynamic meal cutoffs, and a Super Admin Failed Transaction Resolution Desk.',
      architecture:
        'Next.js App Router + TypeScript + TanStack Query PWA <-> Node.js / Express.js REST Microservices + JWT RBAC <-> PostgreSQL + Prisma ORM + IndexedDB Offline Sync Queue.',
    },
    architectureDetails: {
      frontend: [
        'Next.js App Router (Server & Client Components) with 100% strict TypeScript',
        'Tailwind CSS + Shadcn UI with mobile-first bottom navigation & safe-area inset protection',
        'TanStack React Query for optimistic UI updates and smart background revalidation',
        'WebRTC camera stream QR scanner with 1-tap segmented mode switcher (Camera, Manual Code, Offline Sync)',
      ],
      backend: [
        'Node.js & Express.js RESTful microservices with payload rate-limiting',
        'PostgreSQL relational schema managed with Prisma ORM',
        'JWT Authentication, 4-tier Role-Based Access Control (RBAC), and bcrypt password hashing',
        'IndexedDB client queue with conflict-resolution timestamps for automatic background sync',
      ],
    },
    engineeringHighlights: [
      {
        title: '1. Sub-Second QR Token Validation & Offline Resilience',
        challenge: 'Peak dining periods cannot tolerate 2-second cloud roundtrips or Wi-Fi drops.',
        points: [
          'Token scanner operates at sub-300ms verification speed via WebRTC camera streams.',
          'Staff devices pre-cache authorized daily tokens; offline scans verify against local storage and flush asynchronously once connectivity resumes.',
          '1-tap segmented mode switcher toggles between Camera Scan, Manual Code Entry, and Offline Sync status without scrolling.',
        ],
      },
      {
        title: '2. Time-Locked Dynamic Meal Booking',
        points: [
          'Automated cutoff timers lock meal sales before preparation begins (e.g., 10:00 AM for lunch, 4:00 PM for dinner).',
          'Kitchen managers receive an exact buyer roster and headcount breakdown with 1-click printable and PDF export formats, eliminating food wastage.',
        ],
      },
      {
        title: '3. Student Digital Wallet & Failed Transaction Recovery',
        points: [
          'Students recharge balances seamlessly via mobile financial services (bKash, Nagad).',
          'Dedicated Failed Transaction Resolution Desk in the Super Admin dashboard lets admins verify and credit unmatched payment gateway callbacks with one click.',
        ],
      },
      {
        title: '4. Native Mobile Ergonomics & Localization',
        points: [
          'Replaced cluttered top hamburger menus with native-style status pills and single-thumb bottom navigation tabs.',
          'Full Bengali language localization alongside accessible high-contrast UI surfaces.',
        ],
      },
    ],
    impactMetrics: [
      { metric: 'Meal Queue Wait Time', before: '15–25 minutes', after: '< 3 seconds', improvement: '~85% Reduction' },
      { metric: 'Daily Kitchen Food Wastage', before: '12–18% unserved', after: '< 2%', improvement: 'Over 80% Saved' },
      { metric: 'Token Verification Speed', before: 'Manual paper checking', after: 'Sub-300ms scan', improvement: 'Instant' },
      { metric: 'Offline Downtime Incidents', before: 'Kitchen stopped', after: 'Zero downtime', improvement: '100% Uptime' },
    ],
    standoutPoints: [
      {
        title: 'High-Stress Real-World Domain',
        detail: 'Handles high-concurrency peak bursts where hundreds of students scan tokens within a narrow 60-minute window.',
      },
      {
        title: 'True Offline-First Thinking',
        detail: 'Engineered for unstable campus Wi-Fi environments using client-side cache synchronization.',
      },
      {
        title: 'Production Polish',
        detail: 'Complete Bengali localization, accessible contrast ratios, multi-tier RBAC, and mobile-first ergonomics.',
      },
    ],
  },
  {
    id: 'elumpu',
    title: 'Elumpu',
    subtitle: 'Multi-Vendor Bangladeshi Digital Marketplace — Seller KYC, Variant Catalog & Event-Driven Architecture',
    category: 'E-Commerce',
    description:
      'A multi-vendor e-commerce platform purpose-built for the Bangladeshi digital marketplace. Engineered the core pre-order marketplace architecture: 3-tier role-based access, verified seller KYC onboarding, full product variant management, subscription-gated features, zone-based shipping, and flash deals.',
    liveUrl: 'https://elumpu.com',
    image: '/projects/elumpu.jpg',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'RabbitMQ',
      'Docker',
      'Redux Toolkit',
      'TanStack Query',
      'Zod',
      'Socket.IO',
      'AWS S3',
      'Sharp',
      'Google OAuth 2.0',
    ],
    highlights: [
      'Structured Seller Onboarding with KYC',
      'Full Product Variant & Storefront Engine',
      'Subscription-Gated API & UI Access',
      'RabbitMQ, Redis & AWS S3 Presigned Uploads',
    ],
    metrics: '30+ DB Models • 3-Tier Roles',
    iconName: 'ShoppingBag',
    scope: {
      role: 'Full-Stack Engineer (Core Marketplace, Seller KYC, Catalog, Subscriptions & Pre-Order Flow)',
      timeline: 'Production-Deployed',
      targetUsers: 'Marketplace Shoppers, Verified Sellers & Platform Administrators (3-Tier Role Architecture)',
      platforms: 'Web Storefront, Seller Dashboard & Admin Panel',
    },
    problems: [
      {
        title: 'Multi-Tenant Role Boundaries',
        detail:
          'Every feature had to cleanly separate Customers (browsing across stores), Sellers (managing storefronts & inventory), and Admins (governing KYC & subscriptions) within one unified codebase.',
      },
      {
        title: 'Bangladeshi Marketplace Constraints',
        detail:
          'Seller verification required government-issued National ID or Trade License documents, alongside sharp shipping rate differences across same-district, Dhaka inter-district, and cross-country zones.',
      },
      {
        title: 'Subscription-Driven Sustainability',
        detail:
          'The platform needed Base and Add-on subscription tiers to gate merchant capabilities (product limits, branding, flash sale access) rather than relying solely on per-transaction fees.',
      },
    ],
    caseStudy: {
      challenge:
        'Architecting a scalable 3-tier multi-vendor foundation—covering verified KYC onboarding, complex product variants, media optimization, subscription gating, and zone-based shipping—up to the cart and checkout boundary.',
      solution:
        'Built an event-driven Next.js + Node.js/Express + PostgreSQL/Prisma system with Redis caching, RabbitMQ background workers, AWS S3 presigned uploads with Sharp processing, and strict API/UI subscription enforcement.',
      architecture:
        'Next.js (Redux Toolkit + TanStack Query + Zod) <-> Node.js / Express REST APIs + Socket.IO <-> PostgreSQL (Prisma, 30+ Models) + Redis + RabbitMQ + AWS S3.',
    },
    architectureDetails: {
      frontend: [
        'Next.js, React, TypeScript & Tailwind CSS across Storefront, Seller Dashboard, and Admin Panel',
        'Redux Toolkit & TanStack Query for persistent multi-seller cart state and server-state caching',
        'React Hook Form with Zod schemas for strict multi-step KYC and product variant validation',
        'Google OAuth 2.0 authentication and Socket.IO real-time event updates',
      ],
      backend: [
        'Node.js & Express REST APIs (20+ endpoint groups) with PostgreSQL and Prisma ORM (30+ models)',
        'AWS S3 presigned uploads with Sharp image optimization pipeline',
        'RabbitMQ topic exchange decoupling notifications, SMS dispatching, and subscription lifecycle jobs',
        'Redis caching and Dockerized deployment architecture',
      ],
    },
    engineeringHighlights: [
      {
        title: '1. Structured Seller Onboarding with KYC',
        points: [
          'Aspiring sellers register their brand, upload National ID or Trade License documents via AWS S3 presigned URLs, and complete a step-by-step verification flow.',
          'Admin review and approval workflow gates merchant dashboard access until verification passes.',
        ],
      },
      {
        title: '2. Multi-Vendor Catalog, Variants & Persistent Cart',
        points: [
          'Built full product and variant management (size, color, stock, pricing) for sellers alongside a multi-store browsing experience for customers.',
          'Implemented persistent multi-seller cart state ahead of the order-splitting and checkout pipeline.',
        ],
      },
      {
        title: '3. Subscription-Gated Feature Access',
        points: [
          'Sellers choose from Base and Add-on plans unlocking higher product limits, flash sale access, and branding features.',
          'Plan entitlements are enforced consistently at both the Express API middleware and Next.js UI layers.',
        ],
      },
      {
        title: '4. Event-Driven Backend, Zone Shipping & Flash Deals',
        points: [
          'RabbitMQ topic exchange decouples notifications, SMS dispatching, and subscription jobs from HTTP requests.',
          'Configured custom seller shipping rates across 3 geographic zones with weight-based pricing and live-countdown flash deals.',
        ],
      },
    ],
    impactMetrics: [
      { metric: 'Database Schema Scale', before: 'Single-store concept', after: '30+ Relational Models', improvement: 'Full Multi-Vendor Data Model' },
      { metric: 'Role Architecture', before: 'No tenant isolation', after: '3-Tier RBAC', improvement: 'Customer, Seller & Admin' },
      { metric: 'API Surface', before: 'Greenfield', after: '20+ Endpoint Groups', improvement: 'Modular & Event-Driven' },
    ],
    standoutPoints: [
      {
        title: 'Unified 3-Tier Codebase',
        detail: 'Storefront, Seller Dashboard, and Admin Panel engineered cleanly within a single cohesive architecture.',
      },
      {
        title: 'Production Media & Queue Pipeline',
        detail: 'AWS S3 presigned uploads + Sharp image processing + RabbitMQ workers keep API responses fast under load.',
      },
      {
        title: 'Clear Scope Ownership',
        detail: 'Architected and delivered the entire pre-order marketplace foundation—KYC, catalog, variants, shipping, flash deals, and subscriptions.',
      },
    ],
  },
  {
    id: 'admission-warrior',
    title: 'Admission Warriors',
    subtitle: 'High-Concurrency EdTech LMS, Automated SMS Payment Verification & Distraction-Free Classroom',
    category: 'EdTech',
    description:
      'A high-concurrency e-learning platform engineered for HSC examinees and university admission seekers (DU, JU, RU, Medical, Engineering) across Bangladesh—featuring a distraction-free Plyr.js classroom, zero-merchant-cost SMS payment reconciliation, and mobile-first ergonomics.',
    liveUrl: 'https://admissionwarrior.com',
    image: '/projects/admission-warrior.jpg',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Plyr.js',
      'BulkSMSBD API',
    ],
    highlights: [
      'Distraction-Free Plyr.js Video Classroom',
      'Sub-3s Automated SMS Payment Reconciliation',
      '1-Click Free Course Enrollment & Redis OTP',
      'Mobile-First Viewport & In-App Browser Guard',
    ],
    metrics: '< 3s Payment Activation',
    iconName: 'GraduationCap',
    scope: {
      role: 'Full-Stack Software Engineer & System Architect',
      timeline: 'Production-Deployed',
      targetUsers: 'HSC Examinees & University Admission Seekers (DU, JU, RU, Medical, Engineering)',
      platforms: 'Mobile-First Web LMS, Student Dashboard & Admin Course Portal',
    },
    problems: [
      {
        title: 'Third-Party Video Distractions',
        detail:
          'Standard embedded YouTube players expose external video recommendations and share links, breaking student focus during high-stakes exam prep.',
      },
      {
        title: 'High Payment Gateway Overhead',
        detail:
          'Commercial merchant gateways impose heavy fees and slow approvals, while manual bKash/Nagad SMS verification caused hours-long enrollment delays.',
      },
      {
        title: 'Fragile Mobile Viewing Experience',
        detail:
          'Over 85% of students access courses on smartphones, where rigid desktop aspect ratios clipped exam/note buttons and Facebook in-app browsers dropped auth sessions.',
      },
    ],
    caseStudy: {
      challenge:
        'Delivering a distraction-free React 19 video classroom without DOM reconciliation crashes, paired with instant zero-fee bKash/Nagad payment verification and reliable mobile access.',
      solution:
        'Built an isolated Plyr.js classroom with pointer shields, an automated Android SMS webhook + regex reconciliation engine inside atomic Prisma transactions, Redis-backed OTP rate limiting, and Facebook in-app browser detection.',
      architecture:
        'Next.js 16 (App Router, React 19, Tailwind CSS, Plyr.js) <-> Node.js / Express.js REST APIs + SMS Webhook <-> PostgreSQL (Neon DB, Prisma) + Redis + BulkSMSBD.',
    },
    architectureDetails: {
      frontend: [
        'Next.js 16 App Router & React 19 with Server Components for SEO-optimized course landing pages',
        'Tailwind CSS & Framer Motion mobile-first UI with content-aware wrappers preventing clipping on <640px screens',
        'Isolated Plyr.js video classroom with pointer-blocking shields and dedicated 10s rewind/forward controls',
        'Facebook in-app webview detector guiding users to open in Chrome/Safari to preserve auth cookies',
      ],
      backend: [
        'Node.js & Express.js REST APIs handling high-concurrency webhooks and enrollments',
        'Serverless PostgreSQL (Neon DB) with Prisma ORM for ACID-compliant atomic payment matching',
        'Redis in-memory store for 5-minute TTL OTP verification and API rate limiting',
        'BulkSMSBD API integration for reliable cellular OTP delivery',
      ],
    },
    engineeringHighlights: [
      {
        title: '1. Distraction-Free Classroom & React 19 DOM Isolation',
        points: [
          'Added a transparent pointer-blocking shield over YouTube title/share areas while keeping custom playback controls intact.',
          'Isolated the Plyr instance with dynamic keys and hydration boundaries to eliminate React 19 removeChild DOM crashes during rapid lecture switching.',
        ],
      },
      {
        title: '2. Zero-Merchant-Cost Automated Payment Verification',
        points: [
          'Built a real-time SMS webhook endpoint capturing forwarded bKash/Nagad SMS receipts and extracting payment method, amount, and TrxID via regex.',
          'Atomic Prisma database transactions verify unused TrxIDs and activate student course enrollments in under 3 seconds.',
        ],
      },
      {
        title: '3. Frictionless Free Enrollment & Mobile Ergonomics',
        points: [
          'Free (৳0) courses bypass checkout entirely via a 1-click enrollment endpoint and redirect straight to My Courses.',
          'Removed rigid aspect locks on exams/PDF notes and hid redundant mobile volume sliders to maximize seek timeline space.',
        ],
      },
      {
        title: '4. Granular Admin Draft & Course Control',
        points: [
          'Unified course service enforces active-only visibility on public pages while allowing admins to preview and toggle draft courses in the dashboard.',
        ],
      },
    ],
    impactMetrics: [
      { metric: 'Payment Activation Time', before: 'Hours (manual check)', after: '< 3 seconds', improvement: 'Zero Manual Delay' },
      { metric: 'Course Engagement', before: 'YouTube drop-offs', after: '+35% Increase', improvement: 'Distraction-Free Focus' },
      { metric: 'Mobile Viewport Stability', before: 'Clipped exam/note buttons', after: '100% Responsive', improvement: '20+ Viewports Verified' },
      { metric: 'Lecture Switching Stability', before: 'DOM removeChild crashes', after: 'Zero crashes', improvement: 'Key-Isolated Mounting' },
    ],
    standoutPoints: [
      {
        title: 'Lean FinTech Automation',
        detail: 'Replaced expensive merchant gateway overhead with SMS pattern extraction and atomic database transactions.',
      },
      {
        title: 'React 19 Stability',
        detail: 'Solved third-party media player DOM mutation conflicts cleanly using key-based remount isolation.',
      },
      {
        title: 'Built for Bangladeshi Mobile Users',
        detail: 'Addressed real-world constraints including Facebook in-app webview session drops and small-screen control ergonomics.',
      },
    ],
  },
  {
    id: 'masud-physics',
    title: 'Masud Physics',
    subtitle: 'Full-Stack Hybrid EdTech LMS with AI-Assisted STEM Assessments, Redis Anti-Piracy & Automated Tuition Billing',
    category: 'EdTech',
    description:
      'A production-grade, Bengali-first Hybrid EdTech LMS & PWA unifying online video courses, offline physical coaching batches, KaTeX/MathLive STEM exams, dual payment gateways (bKash & ShurjoPay), and automated recurring monthly tuition billing.',
    liveUrl: 'https://masud-physics.com',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS',
      'Express 5',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'Gemini AI',
      'bKash',
      'ShurjoPay',
      'HLS.js',
      'KaTeX',
      'AWS S3',
      'GitHub Actions',
    ],
    highlights: [
      'AI Bulk Question Parser (Gemini AI) & KaTeX/MathLive',
      'Redis Single-Device Anti-Piracy Enforcement',
      'bKash & ShurjoPay Dual Gateways + Monthly Billing Sync',
      'Zero-Downtime PM2 & GitHub Actions VPS CI/CD',
    ],
    metrics: '27+ DB Models • 18 API Modules',
    iconName: 'BookOpen',
    scope: {
      role: 'Full-Stack Software Engineer (Architecture, Backend, Frontend & DevOps)',
      timeline: 'Production-Deployed SaaS / Hybrid LMS',
      targetUsers: 'Online, Offline & Hybrid Physics Students, Teachers & Coaching Administrators',
      platforms: 'Next.js Web App, PWA, Teacher Grading Workspace & Admin Portal',
    },
    problems: [
      {
        title: 'Fragmented Hybrid Coaching Operations',
        detail:
          'Managing online courses, offline physical batches, and hybrid students across separate spreadsheets and tools caused enrollment mismatches and revenue leakage.',
      },
      {
        title: 'Account Sharing & Content Piracy',
        detail:
          'Students frequently shared credentials across multiple devices, reducing paid course conversions.',
      },
      {
        title: 'Complex STEM Assessments & Manual Billing',
        detail:
          'Physics exams required LaTeX formula authoring, auto-graded MCQs, handwritten CQ PDF grading, and offline mark merging—alongside recurring monthly tuition tracking.',
      },
    ],
    caseStudy: {
      challenge:
        'Unifying online/offline/hybrid coaching workflows, tamper-resistant STEM exams with LaTeX equations, strict single-device anti-piracy, and recurring monthly billing on a cost-effective self-hosted VPS.',
      solution:
        'Built a decoupled Next.js 16 + Express 5 + PostgreSQL (Prisma, 27+ models) platform with Redis single-device session eviction, Gemini AI bulk question parsing, KaTeX/MathLive rendering, bKash & ShurjoPay billing sync, and zero-downtime GitHub Actions PM2 deployments.',
      architecture:
        'Next.js 16 (React 19, PWA, HLS.js, KaTeX/MathLive) <-> Express 5 + TypeScript (18 API Modules) <-> PostgreSQL (Prisma 7, 27+ Models) + Redis + AWS S3 (Sharp WebP) + Gemini AI.',
    },
    architectureDetails: {
      frontend: [
        'Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Shadcn/Radix UI & PWA support',
        'MathLive interactive equation authoring + KaTeX rendering for Physics exams and printable PDFs',
        'Adaptive HLS.js video playback with persistent per-student WatchProgress tracking',
        'Dedicated teacher PDF grading workspace, printable exam papers, and batch transcript generator',
      ],
      backend: [
        'Node.js & Express 5 TypeScript REST API across 18 modules with Zod validation and node-cron',
        'PostgreSQL with Prisma ORM 7 (27+ relational models) and Redis (ioredis) session/device control',
        'Google Gemini AI bulk question parser, AWS S3 SDK + Sharp on-the-fly WebP compression',
        'bKash & ShurjoPay dual payment gateways + GitHub Actions SSH CI/CD with PM2 zero-downtime reload',
      ],
    },
    engineeringHighlights: [
      {
        title: '1. End-to-End Hybrid STEM Exam Engine & AI Question Parser',
        points: [
          'Built a centralized Question Bank supporting MCQ, CQ, and Short questions with MathLive formula input and KaTeX rendering.',
          'Integrated Google Gemini AI bulk parsing so teachers can paste raw text and generate structured Question Bank entries automatically.',
          'Enforced server-side startTime/endTime in PostgreSQL with idempotent auto-save and auto-submit to prevent timer manipulation, plus instant MCQ grading and teacher PDF script evaluation.',
        ],
      },
      {
        title: '2. Redis Single-Device Anti-Piracy & Media Pipeline',
        points: [
          'Engineered DeviceLimitService backed by Redis Sets to enforce a strict 1-device-per-student policy, evicting prior sessions on new login without PostgreSQL overhead.',
          'Secured auth with httpOnly/Secure/SameSite JWT cookies and built an automated Sharp WebP compression pipeline to S3 storage.',
        ],
      },
      {
        title: '3. Dual Payment Gateways & Automated Monthly Tuition Sync',
        points: [
          'Integrated bKash and ShurjoPay with callback verification, transaction auditing, and a Failed Transactions recovery dashboard.',
          'Built a transactional monthly billing sync engine that backfills 1st-of-month invoices for offline/hybrid batches, ignores abandoned attempts, and auto-suspends overdue accounts until paid.',
        ],
      },
      {
        title: '4. Zero-Downtime Self-Hosted VPS CI/CD',
        points: [
          'Solved VPS out-of-memory Next.js builds via tuned GitHub Actions SSH pipelines (NODE_OPTIONS memory cap, safe Prisma schema sync, and zero-downtime pm2 reload).',
        ],
      },
    ],
    impactMetrics: [
      { metric: 'Backend & Data Scale', before: 'Fragmented spreadsheets', after: '27+ Models • 18 APIs', improvement: 'Unified Hybrid Platform' },
      { metric: 'Account Sharing Prevention', before: 'Unlimited logins', after: '1 Active Device', improvement: 'Redis-Enforced Anti-Piracy' },
      { metric: 'Billing & Exam Grading', before: 'Manual tracking & checks', after: 'Automated Sync & MCQ', improvement: 'Major Admin Time Saved' },
      { metric: 'Deployment Reliability', before: 'Manual VPS OOM crashes', after: 'GitHub Actions + PM2', improvement: 'Zero-Downtime Releases' },
    ],
    standoutPoints: [
      {
        title: 'True Hybrid SaaS Architecture',
        detail: 'Unifies Online, Offline, and Hybrid coaching batches, recurring monthly billing, and offline+online exam marks in one system.',
      },
      {
        title: 'AI + STEM Engineering Depth',
        detail: 'Combines Gemini AI bulk question parsing with MathLive/KaTeX Physics typography and tamper-resistant exam timers.',
      },
      {
        title: 'Production DevOps Mastery',
        detail: 'Runs full-stack Next.js 16 + Express 5 + PostgreSQL + Redis reliably on self-hosted Linux VPS with automated CI/CD.',
      },
    ],
  },
  {
    id: 'rongbela-bd',
    title: 'Rongbela BD',
    category: 'E-Commerce',
    description: 'A modern fashion e-commerce storefront delivering seamless product discovery, visual variants, coupon processing, and checkout.',
    liveUrl: 'https://rongbelabd.com',
    stack: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    highlights: ['High-Conversion UI', 'Dynamic Product Variants', 'Cart & Coupon Engine', 'Admin Inventory Manager'],
    metrics: 'High Conversion Rate',
    iconName: 'Shirt',
    caseStudy: {
      challenge: 'Providing instant visual feedback for color/size variants while maintaining minimal payload size.',
      solution: 'Created optimized client state management and server-side image optimization pipeline.',
      architecture: 'React Frontend + Express REST API + Prisma ORM + PostgreSQL.',
    },
  },
  {
    id: 'willow-basket',
    title: 'Willow Basket',
    category: 'E-Commerce',
    description: 'An elegant fashion e-commerce web application focused on curated collections, swift cart operations, and streamlined checkout.',
    liveUrl: 'https://willow-basket.com',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    highlights: ['Curated Collections Layout', 'Fast Checkout Flow', 'Responsive Mobile Design', 'Order Tracking'],
    metrics: 'Production Storefront',
    iconName: 'ShoppingBasket',
    caseStudy: {
      challenge: 'Ensuring seamless shopping experience on low-bandwidth mobile networks.',
      solution: 'Utilized aggressive static assets caching, lazy loading, and minimal payload API responses.',
      architecture: 'React Single Page App + Node REST API + MongoDB Cloud.',
    },
  },
  {
    id: 'daily-shilpobangla',
    title: 'Daily ShilpoBangla',
    category: 'News',
    description: 'A high-traffic online news portal designed for real-time news publishing, category breaking news alerts, and ad space management.',
    liveUrl: 'https://dailyshilpobangla.com',
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    highlights: ['SEO Optimized SSR', 'Instant Article Publishing', 'Category Tagging', 'High-Traffic Ready'],
    metrics: 'High-Traffic News Portal',
    iconName: 'Newspaper',
    caseStudy: {
      challenge: 'Optimizing news articles for search engines while managing dynamic editorial content publishing.',
      solution: 'Leveraged Next.js Dynamic Route SSR & Incremental Static Revalidation (ISR) for instant search indexing.',
      architecture: 'Next.js ISR + PostgreSQL + Prisma ORM + Cloudflare CDN.',
    },
  },
  {
    id: 'rdf-bd',
    title: 'RDF Bangladesh',
    category: 'NGO',
    description: 'An official corporate web portal for Resource Development Foundation (RDF), showcasing social impact initiatives, donor transparency, and news.',
    liveUrl: 'https://rdfbd.org',
    stack: ['React.js', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    highlights: ['Social Impact Showcase', 'Interactive Project Gallery', 'Donor & News Portal', 'Corporate UI/UX'],
    metrics: 'Official NGO Portal',
    iconName: 'HeartHandshake',
    caseStudy: {
      challenge: 'Communicating NGO achievements and project metrics with maximum trust and accessibility.',
      solution: 'Designed clean corporate typography, semantic HTML structure, and fast responsive media galleries.',
      architecture: 'React Frontend + Express API + PostgreSQL + Cloudflare VPS host.',
    },
  },
];

export const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    id: 'smart-transport',
    title: 'Smart University Transport System',
    type: 'Real-Time System',
    description: 'A real-time university bus tracking and management platform featuring dynamic route mapping, live location broadcasts via Socket.IO, and multi-role dashboards for Students, Drivers, and Admins.',
    githubUrl: 'https://github.com/NAIM2046/JU_Smart_Transport',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Tailwind CSS'],
    keyFeatures: [
      'Real-time bus GPS tracking using WebSockets (Socket.IO)',
      'Multi-role authentication (Student, Driver, Admin)',
      'Live route updates & estimated time of arrival (ETA)',
      'Admin control panel for schedule management',
    ],
  },
  {
    id: 'smart-academy',
    title: 'Smart Academy Management System',
    type: 'Analytics & Management',
    description: 'A comprehensive education management platform providing automated student attendance tracking, exam administration, performance analytics charts, and administrative reporting.',
    githubUrl: 'https://github.com/NAIM2046/projectEducation',
    videoUrl: 'https://drive.google.com/file/d/1LdI4QAS3XLnoiIAV7gaP0G2PXt1TW6N5/view?usp=sharing',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js', 'Tailwind CSS'],
    keyFeatures: [
      'Interactive student performance analytics with Chart.js',
      'Automated attendance tracking & grade report generation',
      'Exam schedule management & result publishing',
      'Role-based security for Teachers, Admins & Students',
    ],
  },
  {
    id: 'ai-rag-exploration',
    title: 'Scalable AI & RAG Pipeline R&D',
    type: 'AI & R&D',
    description: 'Active research and development exploring retrieval-augmented generation (RAG), vector search pipelines, and high-performance microservices using Python and FastAPI.',
    stack: ['Python', 'FastAPI', 'Machine Learning', 'Vector DBs', 'RAG'],
    keyFeatures: [
      'FastAPI async microservice architecture',
      'Retrieval-Augmented Generation (RAG) experimentation',
      'Vector database indexing & similarity search',
      'Integrating LLMs with custom enterprise datasets',
    ],
  },
];

export const TECHNICAL_SKILLS = [
  {
    category: 'Languages & Core CS',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'Java (OOP)', 'C', 'C++', 'HTML5', 'CSS3', 'Data Structures & Algorithms'],
  },
  {
    category: 'Frontend Engineering',
    skills: ['React.js', 'Next.js (App Router)', 'Tailwind CSS', 'Redux / Context API', 'Responsive UI/UX', 'Glassmorphism Design'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Authentication', 'Socket.IO (Real-Time)', 'FastAPI (Learning)'],
  },
  {
    category: 'Databases & ORM',
    skills: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Mongoose', 'Database Indexing & Schema Design'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git / GitHub', 'Postman API Testing', 'Cloudflare', 'Vercel Deployment', 'Linux VPS Server Management'],
  },
];
