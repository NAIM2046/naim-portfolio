export interface ProductionApp {
  id: string;
  title: string;
  category: 'E-Commerce' | 'EdTech' | 'NGO' | 'News';
  description: string;
  liveUrl: string;
  stack: string[];
  highlights: string[];
  metrics: string;
  iconName: string;
  caseStudy: {
    challenge: string;
    solution: string;
    architecture: string;
    keyTechnicalFeatures: string[];
  };
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
  nexovateLabs: 'https://www.nexovatelabs.com/',
  leetcode: 'https://leetcode.com/u/NAIM1111/',
  codeforces: 'https://codeforces.com/profile/naim_2046',
  codechef: 'https://www.codechef.com/users/naim2046',
  bio: 'Full-Stack Web Developer and Co-Founder of Nexovate Labs with experience delivering 8+ production web applications. Currently pursuing B.Sc. in ICT at Jahangirnagar University while exploring AI, FastAPI, and scalable software architectures.',
};

export const PRODUCTION_APPS: ProductionApp[] = [
  {
    id: 'elumpu',
    title: 'Elumpu',
    category: 'E-Commerce',
    description: 'An enterprise-grade multi-vendor e-commerce platform engineered for scale, featuring secure multi-seller verification, real-time inventory management, dedicated seller analytics dashboards, high-concurrency order processing, and RabbitMQ async invoice messaging.',
    liveUrl: 'https://elumpu.com',
    stack: ['Next.js', 'React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'RabbitMQ', 'Tailwind CSS'],
    highlights: ['Multi-Vendor Architecture', 'RabbitMQ Invoice Queue', 'Secure Seller Verification', 'Business Analytics Dashboard'],
    metrics: 'Multi-Vendor Scale',
    iconName: 'ShoppingBag',
    caseStudy: {
      challenge: 'Managing high-concurrency simultaneous orders across hundreds of vendors, preventing inventory race conditions, verifying seller identity credentials, and sending instant customer invoice notifications without blocking main HTTP threads.',
      solution: 'Architected relational PostgreSQL database schemas with Prisma ORM and decoupled heavy tasks into an asynchronous RabbitMQ message queue service for instantaneous invoice SMS/Email dispatching and seller inventory locking.',
      architecture: 'Next.js App Router SSR + Node.js/Express API Gateway + PostgreSQL DB + Prisma ORM + RabbitMQ Asynchronous Worker + Redis Caching.',
      keyTechnicalFeatures: [
        'RabbitMQ Asynchronous Queue for instant invoice notifications & message dispatching without API bottleneck',
        'Secure Multi-Seller Verification Pipeline with document verification, KYC workflows & role-based RBAC access',
        'Real-Time Seller Inventory Management with optimistic lock handling for concurrent order spikes',
        'Dedicated Business Analytics Dashboard for vendors (revenue tracking, sales trends, inventory alerts)',
        'High-Concurrency Checkout Gateway handling peak buyer transactions concurrently',
      ],
    },
  },
  {
    id: 'admission-warrior',
    title: 'Admission Warrior',
    category: 'EdTech',
    description: 'A premium online LMS for board & admission examinees featuring custom distraction-free Plyr.js video streaming, automated BulkSMSBD + Redis TTL OTP authentication, PostgreSQL on Neon DB, AWS S3 storage, and dynamic key-rebound DOM crash prevention.',
    liveUrl: 'https://admissionwarrior.com',
    stack: ['Next.js 16 (App Router)', 'React 19', 'Node.js', 'Express', 'TypeScript', 'PostgreSQL (Neon DB)', 'Prisma ORM', 'Redis', 'AWS S3', 'Plyr.js', 'BulkSMSBD API'],
    highlights: ['Distraction-Free Plyr.js Player', 'BulkSMSBD + Redis TTL OTP', 'React & Plyr DOM Crash Fix', 'Neon DB & AWS S3 Storage'],
    metrics: 'Zero-Crash Video LMS',
    iconName: 'GraduationCap',
    caseStudy: {
      challenge: 'Preventing YouTube title/avatar click-through distractions during lecture streaming, resolving fatal React vs Plyr.js `removeChild` DOM unmount crashes, preventing mobile layout clipping on non-video cards, and managing high-priority mobile OTPs.',
      solution: 'Decoupled frontend (Next.js 16/React 19) from Express/TypeScript backend. Integrated Plyr.js with absolute overlay pointers, solved DOM unmount crashes via dynamic `key={videoId}` re-mounting, engineered conditional mobile viewport min-heights, and stored Redis TTL OTP keys with BulkSMSBD API.',
      architecture: 'Next.js 16 App Router (Client/Server Hydration) + Express Node.js API + PostgreSQL on Neon DB + Prisma ORM + Redis Session/OTP Store + AWS S3 Storage.',
      keyTechnicalFeatures: [
        'Distraction-Free Plyr.js Media Player: Custom dynamic Plyr.js wrapper (ssr: false) with absolute overlay pointer-event masking to block YouTube avatar & title click-throughs',
        'Solved React & Plyr.js DOM `removeChild` Fatal Crash: Bound dynamic React `key={videoId}` and `suppressHydrationWarning` to force clean re-mounting when switching lectures without DOM unmount exceptions',
        'Secure Mobile OTP Auth (BulkSMSBD API + Redis TTL): Integrated BulkSMSBD gateway with Redis high-speed TTL keys (`otp:phone:NUMBER`) expiring in 5 minutes',
        'Mobile Viewport Layout Clipping Fix: Conditional aspect-ratio engine (`contentType === "VIDEO" ? "aspect-video" : "min-h-[260px] sm:aspect-video"`) eliminating mobile card truncation',
        'Dynamic Curriculum Preview Modal Drawer: Instant backdrop overlay popup for free demo video lectures (`isFree: true`) without breaking user flow',
        'Expandable Mobile Header Search Engine: Contextual slide-down search bar with mobile touch "খুঁজুন" trigger maximizing active screen area',
      ],
    },
  },
  {
    id: 'masud-physics',
    title: 'Masud Physics',
    category: 'EdTech',
    description: 'A premium, feature-rich Learning Management System (LMS) designed for HSC and admission-seeking physics students, featuring 100% automated shurjoPay/bKash billing, real-time video progress tracking, Sharp image compression on Cloudflare R2, KaTeX math equation rendering, and session-based device limits.',
    liveUrl: 'https://masud-physics.com',
    stack: ['Next.js 16 (App Router)', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma ORM', 'Cloudflare R2', 'shurjoPay API', 'bKash API', 'Sharp', 'KaTeX/LaTeX'],
    highlights: ['100% Automated Billing', 'Cloudflare R2 & Sharp Compression', 'KaTeX Math Equations', 'Active Device Limit Control'],
    metrics: '95% Less Admin Overhead',
    iconName: 'BookOpen',
    caseStudy: {
      challenge: 'Handling manual billing activations for thousands of monthly/direct subscription students, preventing 48MP camera photo upload failures, protecting accounts against multi-device sharing, and rendering complex physics KaTeX equations without page lag.',
      solution: 'Integrated shurjoPay & bKash Merchant APIs with automated cron jobs for monthly billing, built a Sharp image compression pipeline converting raw photos to WebP on Cloudflare R2 (97% size reduction), implemented refresh token device limit tracking, and client progress timestamp persistence.',
      architecture: 'Next.js 16 App Router + Server Actions + PostgreSQL Database + Prisma ORM + Cloudflare R2 Storage + shurjoPay/bKash Payment Gateways + Sharp Engine + KaTeX Renderer.',
      keyTechnicalFeatures: [
        '100% Automated Billing & Cron Reminders: Integrated shurjoPay & bKash Merchant APIs with automated 15th/21st monthly cron jobs for instant invoice generation & overdue enrollment suspension',
        'Real-Time Video Progress Saver & Resume Prompt: Tracks video timestamps with dynamic single-click "Resume Last Watched" prompts when entering course pages',
        'Sharp Image Compression on Cloudflare R2: Server Action FormData pipeline compressing 48MP/HEIC camera photos into optimized WebP formats on R2 (avatar size reduced from 8MB to <200KB - 97% reduction)',
        'KaTeX/LaTeX Mathematical Equation Rendering: High-performance client-side physics equation rendering without page layout shifts',
        'Secure OTP Auth & Active Device Limit Control: 5-minute OTP expiration timer with active refresh token device tracking to block multi-student account sharing',
        'Multi-Tiered Curriculum Navigation UX: Chapter ➔ Section ➔ Sub-section accordion navigation rendering dynamic elements on click to eliminate visual clutter',
      ],
    },
  },
  {
    id: 'rongbela-bd',
    title: 'Rongbela BD',
    category: 'E-Commerce',
    description: 'A scalable modest fashion D2C e-commerce platform featuring decoupled catalog & stock tables for 120ms category loading, a unified online & POS sales ledger, dual-layer stable unique SKU auto-generation, zero-dependency client HTML5 canvas image compression, and custom Bangladeshi campus delivery workflows.',
    liveUrl: 'https://rongbelabd.com',
    stack: ['Next.js (App Router)', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL (Neon DB)', 'Prisma ORM', 'Cloudflare R2', 'HTML5 Canvas API', 'Tailwind CSS'],
    highlights: ['Decoupled Stock Architecture', 'Unified E-Commerce & POS Ledger', 'HTML5 Canvas Image Compression', 'Campus Delivery Workflow'],
    metrics: '<120ms Category Loading',
    iconName: 'Shirt',
    caseStudy: {
      challenge: 'High-volume concurrent stock locking during promotional sales, database P2002 SKU collision across color/size variants, inventory discrepancies between online e-commerce and offline Messenger/event POS sales, 6MB mobile photo upload timeouts, and complex Bangladeshi campus delivery address formats.',
      solution: 'Decoupled static Product Catalog metadata from real-time Stock tables, created a Unified Sales Log Ledger combining e-commerce checkouts with an offline POS interface, engineered a dual-layer SKU auto-generator with stable UUID/random suffixes, shifted 1200px max-width image compression to client-side HTML5 Canvas (95% size reduction to 220KB), and built specialized university campus delivery workflows.',
      architecture: 'Next.js App Router + Express Node.js API + Decoupled PostgreSQL (Neon DB) Catalog/Stock Schemas + Prisma ORM + Cloudflare R2 Storage + HTML5 Canvas Compression Engine.',
      keyTechnicalFeatures: [
        'Decoupled Catalog & Independent Stock Architecture: Separates static product metadata from real-time inventory count tables, enabling sub-120ms category page loads and eliminating database row locks during peak checkout spikes',
        'Unified Sales Log Ledger & POS Offline Entry: Integrated online checkout decrements with a dedicated admin POS interface for Messenger, phone, and pop-up shop sales, establishing a single source of truth for total turnover',
        'Stable Dual-Layer SKU Auto-Generator: Client-side generator attaching stable UUID suffixes on Add and random 4-digit suffixes (e.g. RB-BLACK-XL-3948) on Update, eliminating database P2002 SKU collision',
        'Zero-Dependency HTML5 Canvas Image Compression: Client-side browser canvas scaling to 1200px max-width at 82% JPEG quality, shrinking 6MB camera photos to 220KB on-the-fly and cutting cloud R2 storage costs by 95%',
        'Custom Bangladeshi Campus Delivery Workflow: Specialized shipping address flow supporting university campus deliveries (University Name, Hall Name, Room Number) alongside standard Home/Office routes',
        'Coupon Analytics & Marketing Influencer ROI Dashboard: Real-time analytics tracking coupon code usage count, influencer promo campaign ROI, and customer margin impacts',
      ],
    },
  },
  {
    id: 'willow-basket',
    title: 'Willow Basket',
    category: 'E-Commerce',
    description: 'A boutique retail & fashion e-commerce web application featuring an in-memory Hybrid Fuzzy Search Engine (Levenshtein Distance + Bengali-English Tokenization), three-layer atomic Prisma transaction stock guards, zero-latency optimistic admin UI status badges, window.history URL debouncing, and automated GitHub Actions CI/CD to VPS with PM2.',
    liveUrl: 'https://willow-basket.com',
    stack: ['Next.js 16 (App Router)', 'TypeScript', 'Node.js', 'Express v5', 'Prisma 7', 'PostgreSQL (Neon Serverless)', 'Cloudflare R2', 'PM2', 'GitHub Actions', 'Tailwind CSS'],
    highlights: ['Hybrid Fuzzy & Bengali Search', 'Three-Layer Atomic Stock Guard', 'Optimistic UI Admin Badges', 'GitHub Actions CI/CD to VPS'],
    metrics: 'Zero Stock Discrepancy',
    iconName: 'ShoppingBasket',
    caseStudy: {
      challenge: 'Handling customer typo searches in Bengali/English without 3rd-party search services, preventing negative stock or over-confirming during COD checkouts, resolving production search lag caused by Next.js `router.replace` server component re-execution, calculating server-side area-based shipping costs, and automating VPS CI/CD deployments.',
      solution: 'Engineered an in-memory Hybrid Search Engine combining Prisma substring queries with Levenshtein Distance & Bengali `SYNONYM_MAP` tokenization, implemented a 3-Layer Prisma `$transaction` stock guard with Bengali error alerts & auto-restoration, replaced `router.replace` with `window.history.replaceState` for instant silent URL typing sync, and automated VPS SSH deployments via GitHub Actions + PM2.',
      architecture: 'Next.js 16 App Router (SSR + Client UI) + Express v5 Node.js API + Prisma 7 ORM + PostgreSQL on Neon Serverless DB + Cloudflare R2 Storage + GitHub Actions CI/CD + PM2 Process Manager.',
      keyTechnicalFeatures: [
        'In-Memory Hybrid Fuzzy Search Engine: Two-layer search pipeline combining Prisma PostgreSQL substring queries with Levenshtein Distance edit scoring, prefix match bonuses, and a custom Bengali-English phonetic `SYNONYM_MAP` (zero external search dependencies)',
        'Three-Layer Atomic Stock Management Guard: Prisma `$transaction` guard enforcing pre-check validation with descriptive Bengali stock error toasts (`❌ "Cotton Romper" এর পর্যাপ্ত স্টক নেই...`), atomic deduction on confirmation, auto-restoration on cancellation, and low-stock warning alerts (≤5 remaining)',
        'Production Search Lag Fix (`window.history.replaceState`): Solved production search latency by replacing Next.js `router.replace()` with `window.history.replaceState()` for live debounced URL bar updates without re-triggering Next.js server components',
        'Optimistic Admin UI Status Callbacks: Implemented `onStatusUpdated(orderId, newStatus)` callbacks propagating instant Badge UI updates without requiring page reloads or `router.refresh()`',
        'Area-Based Server-Calculated Shipping Engine: Server-side calculation resolving DB-driven district areas to zone types (`INSIDE_DHAKA`, `DHAKA_SUBURBS`, `OUTSIDE_DHAKA`), overriding client-sent costs inside Prisma transactions',
        'Automated GitHub Actions CI/CD Pipeline: Seamless `git push origin naim-dev` workflow triggering SSH deployment to VPS, Prisma migrations, asset compilation, and zero-downtime PM2 server restarts',
      ],
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
      challenge: 'Optimizing high-volume news articles for Google search indexability while managing fast editorial publishing workflows.',
      solution: 'Leveraged Next.js Dynamic SSR & Incremental Static Revalidation (ISR) for instant search indexing and Cloudflare CDN caching.',
      architecture: 'Next.js ISR + Node.js API + PostgreSQL + Prisma ORM + Cloudflare CDN.',
      keyTechnicalFeatures: [
        'Incremental Static Revalidation (ISR) for instant news publishing',
        'Google News SEO Optimization & OpenGraph Social Sharing',
        'Editorial CMS Dashboard for Article & Media Management',
      ],
    },
  },
  {
    id: 'rdf-bd',
    title: 'RDF Bangladesh',
    category: 'NGO',
    description: 'An official corporate web portal for Resource Development Foundation (RDF), showcasing social impact initiatives, donor transparency, and news.',
    liveUrl: 'https://rdfbd.org',
    stack: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'cPanel Hosting', 'Tailwind CSS'],
    highlights: ['Social Impact Showcase', 'Interactive Project Gallery', 'Donor & News Portal', 'cPanel Hosted'],
    metrics: 'Official NGO Portal',
    iconName: 'HeartHandshake',
    caseStudy: {
      challenge: 'Communicating NGO achievements, project metrics, financial transparency, and donor reports with reliable 99.9% uptime on cPanel web hosting infrastructure.',
      solution: 'Built a responsive React single-page portal backed by Node.js/Express APIs with MongoDB database storage, deployed seamlessly on cPanel shared hosting.',
      architecture: 'React Frontend + Express Node.js API + MongoDB Database + cPanel Web Server Hosting.',
      keyTechnicalFeatures: [
        'Interactive Social Impact & Project Gallery Showcase with responsive image grid layout',
        'Donor Transparency & News Publishing Hub backed by MongoDB data pipelines',
        'cPanel Web Hosting Deployment configured with Node.js Passenger application manager for high availability',
      ],
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
    skills: ['React.js', 'Next.js 16 (App Router)', 'Tailwind CSS', 'Redux / Context API', 'HTML5 Canvas API', 'Plyr.js Player', 'Framer Motion', 'Responsive UI/UX'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Node.js', 'Express.js v5', 'RESTful APIs', 'Server Actions', 'RabbitMQ', 'shurjoPay / bKash APIs', 'BulkSMSBD API', 'JWT Authentication', 'Socket.IO', 'FastAPI'],
  },
  {
    category: 'Databases & Storage',
    skills: ['PostgreSQL (Neon DB)', 'MongoDB', 'Mongoose', 'Prisma 7 ORM', 'Cloudflare R2', 'AWS S3', 'Redis Store'],
  },
  {
    category: 'DevOps & Tools',
    skills: ['Git / GitHub', 'GitHub Actions CI/CD', 'PM2 Manager', 'cPanel Hosting', 'Postman API Testing', 'Cloudflare', 'Vercel Deployment', 'Linux VPS Server Management'],
  },
  
];

export const CLIENT_PAIN_POINTS = [
  {
    icon: 'Zap',
    title: '8+ Production-Grade Web Apps',
    description: 'Delivered 8+ live web products across E-Commerce, EdTech, NGO & News using React, Next.js & Node.js with 100% on-time deployment.',
    tag: 'Next.js & Full-Stack',
  },
  {
    icon: 'Radio',
    title: 'Real-Time Systems & Socket.IO',
    description: 'Architecting dynamic real-time tracking, live location mapping, multi-role dashboards, and low-latency WebSocket communication pipelines.',
    tag: 'WebSockets & Live Data',
  },
  {
    icon: 'Server',
    title: 'Scalable Databases & REST APIs',
    description: 'Designing relational PostgreSQL & MongoDB schemas with Prisma ORM, cPanel hosting & VPS management, Cloudflare R2, Redis stores, RabbitMQ queues, and payment APIs.',
    tag: 'MongoDB & cPanel Hosting',
  },
  {
    icon: 'Brain',
    title: 'CS Rigor & Next-Gen AI R&D',
    description: 'B.Sc. in ICT at JU, 50+ LeetCode algorithmic problems solved, and actively exploring Python, FastAPI & RAG AI pipelines.',
    tag: 'Algorithms & AI R&D',
  },
];
