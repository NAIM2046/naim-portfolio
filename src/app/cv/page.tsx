import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, Globe, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import PrintCvButton from '@/components/PrintCvButton';

export const metadata: Metadata = {
  title: 'Resume / CV',
  description:
    'Updated ATS-friendly Resume / CV of Naim Hossain — Full-Stack Software Engineer, Software Engineer Intern at BdREN & TechKnowGram, and Co-Founder at Nexovate Labs.',
  alternates: {
    canonical: '/cv',
  },
};

export default function CvPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 sm:px-6 print:bg-white print:p-0">
      {/* Top Action Bar (hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-lg text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>

        <PrintCvButton />
      </div>

      {/* ATS-Friendly Resume Sheet */}
      <article className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-xl shadow-xs p-6 sm:p-10 text-slate-900 space-y-6 print:border-0 print:rounded-none print:shadow-none print:p-0 print:space-y-4">
        {/* Header */}
        <header className="border-b-2 border-slate-900 pb-4 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              {PERSONAL_INFO.name.toUpperCase()}
            </h1>
            <p className="text-sm font-semibold text-blue-700">
              Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-700">
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              {PERSONAL_INFO.location}
            </span>
            <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="inline-flex items-center gap-1 hover:text-blue-700">
              <Phone className="w-3.5 h-3.5 text-slate-500" />
              {PERSONAL_INFO.phone}
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-1 hover:text-blue-700">
              <Mail className="w-3.5 h-3.5 text-slate-500" />
              {PERSONAL_INFO.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-blue-700 font-medium">
            <a href="https://naim.nexovatelabs.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline">
              <Globe className="w-3.5 h-3.5" />
              naim.nexovatelabs.com
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/NAIM2046
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/naimju
            </a>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Full-Stack Software Engineer and Co-Founder of Nexovate Labs with hands-on experience delivering 8+ production web applications across FinTech, E-Commerce, EdTech, NGO, and News domains. Proficient in Next.js, React, TypeScript, Node.js, Express, PostgreSQL, Prisma, Redis, and RabbitMQ, with a strong focus on mobile-first ergonomics, offline resilience, and scalable backend architecture.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
            Technical Skills
          </h2>
          <div className="space-y-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <p>
              <strong className="text-slate-900">Languages:</strong> JavaScript (ES6+), TypeScript, Python, Java (OOP), C, C++, HTML5, CSS3
            </p>
            <p>
              <strong className="text-slate-900">Frontend:</strong> Next.js (App Router), React.js, Tailwind CSS, Shadcn UI, Redux Toolkit, TanStack Query, Framer Motion, PWA, Zod
            </p>
            <p>
              <strong className="text-slate-900">Backend &amp; Architecture:</strong> Node.js, Express.js, RESTful APIs, Microservices, JWT, OAuth 2.0, RBAC, Socket.IO, RabbitMQ, WebRTC, FastAPI
            </p>
            <p>
              <strong className="text-slate-900">Databases &amp; Storage:</strong> PostgreSQL, Prisma ORM, MongoDB, Mongoose, Redis, IndexedDB, AWS S3, Sharp
            </p>
            <p>
              <strong className="text-slate-900">DevOps &amp; Engineering:</strong> Git, GitHub, CI/CD (GitHub Actions), Docker, Linux VPS, Nginx, PM2, Cloudflare, Vercel, Postman, System Design, Agile
            </p>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
            Professional Experience
          </h2>

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
              <h3 className="text-sm font-bold text-slate-900">
                Software Engineer Intern — <span className="font-semibold text-blue-700">Bangladesh Research &amp; Education Network (BdREN)</span>
              </h3>
              <span className="text-xs font-medium text-slate-600">Sep 2026 – Present • Dhaka (Hybrid)</span>
            </div>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-0.5">
              <li>Contributing to full-stack web application engineering and institutional software systems supporting Bangladesh&apos;s national research and education network.</li>
            </ul>
          </div>

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
              <h3 className="text-sm font-bold text-slate-900">
                Software Engineer Intern — <span className="font-semibold text-blue-700">TechKnowGram Limited</span>
              </h3>
              <span className="text-xs font-medium text-slate-600">Aug 2026 – Present • Dhaka (Hybrid)</span>
            </div>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-0.5">
              <li>Collaborating with the engineering team on full-stack web features, RESTful API integrations, and production software delivery.</li>
            </ul>
          </div>

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
              <h3 className="text-sm font-bold text-slate-900">
                Co-Founder &amp; Full-Stack Web Developer — <span className="font-semibold text-blue-700">Nexovate Labs</span>
              </h3>
              <span className="text-xs font-medium text-slate-600">Mar 2025 – Present • Dhaka (On-site)</span>
            </div>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-0.5">
              <li>Co-founded a software agency and delivered 8+ production web applications end-to-end across FinTech, E-Commerce, EdTech, NGO, and News sectors.</li>
              <li>Architected relational PostgreSQL/Prisma and MongoDB schemas, secure JWT/OAuth 2.0 auth, admin dashboards, and Linux VPS/Cloudflare deployments.</li>
            </ul>
          </div>
        </section>

        {/* Key Production Projects */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
            Key Production Projects
          </h2>

          {/* Project 1: AmarCoupon */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
              <h3 className="text-sm font-bold text-slate-900">
                JU Hall Dining Token &amp; Management System (AmarCoupon) —{' '}
                <a href="https://amarcoupon.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
                  amarcoupon.com
                </a>
              </h3>
              <span className="text-xs font-medium text-slate-600">Next.js • TypeScript • Node.js • PostgreSQL • IndexedDB • WebRTC</span>
            </div>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-0.5">
              <li>Engineered a mobile-first PWA and 4-tier RBAC campus fintech platform targeting 10,000+ Jahangirnagar University residential students.</li>
              <li>Built a sub-300ms WebRTC QR scanner with an IndexedDB offline-first verification queue, reducing queue wait time from 15–25 minutes to under 3 seconds (~85% reduction) and daily food wastage to &lt;2%.</li>
              <li>Implemented time-locked meal cutoffs, bKash/Nagad digital wallet recharge, and a Super Admin Failed Transaction Resolution Desk.</li>
            </ul>
          </div>

          {/* Project 2: Masud Physics */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
              <h3 className="text-sm font-bold text-slate-900">
                Masud Physics (Hybrid EdTech LMS &amp; SaaS) —{' '}
                <a href="https://masud-physics.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
                  masud-physics.com
                </a>
              </h3>
              <span className="text-xs font-medium text-slate-600">Next.js 16 • Express 5 • PostgreSQL • Prisma 7 • Redis • Gemini AI</span>
            </div>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-0.5">
              <li>Built a Hybrid EdTech LMS &amp; PWA (18 API modules, 27+ Prisma models) unifying online HLS video courses, offline batches, and KaTeX/MathLive STEM assessments with a Google Gemini AI bulk question parser.</li>
              <li>Engineered Redis Sets single-device anti-piracy session eviction, server-enforced tamper-resistant exam timers, and an automated Sharp WebP compression pipeline to AWS S3.</li>
              <li>Integrated bKash &amp; ShurjoPay dual gateways with automated recurring monthly tuition billing sync and zero-downtime GitHub Actions + PM2 VPS CI/CD.</li>
            </ul>
          </div>

          {/* Project 3: Elumpu */}
          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5">
              <h3 className="text-sm font-bold text-slate-900">
                Elumpu (Multi-Vendor E-Commerce Platform) —{' '}
                <a href="https://elumpu.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-semibold hover:underline">
                  elumpu.com
                </a>
              </h3>
              <span className="text-xs font-medium text-slate-600">Next.js • Node.js • PostgreSQL • Prisma • Redis • RabbitMQ • AWS S3</span>
            </div>
            <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 space-y-0.5">
              <li>Architected the pre-order multi-vendor marketplace foundation (30+ Prisma models, 20+ API endpoint groups, 3-tier Customer/Seller/Admin RBAC).</li>
              <li>Implemented verified Seller KYC onboarding (AWS S3 presigned uploads + Sharp), full product variant management, subscription-gated access, zone-based shipping, flash deals, and RabbitMQ workers.</li>
            </ul>
          </div>

          {/* Other Live Deployments & Engineering Projects */}
          <div className="pt-1 text-xs sm:text-sm text-slate-700 space-y-1">
            <p>
              <strong className="text-slate-900">Other Live Client Deployments:</strong>{' '}
              Admission Warriors (<a href="https://admissionwarrior.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">admissionwarrior.com</a>),
              Rongbela BD (<a href="https://rongbelabd.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">rongbelabd.com</a>),
              Willow Basket (<a href="https://willow-basket.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">willow-basket.com</a>),
              Daily ShilpoBangla (<a href="https://dailyshilpobangla.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">dailyshilpobangla.com</a>),
              RDF Bangladesh (<a href="https://rdfbd.org" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">rdfbd.org</a>).
            </p>
            <p>
              <strong className="text-slate-900">Engineering Systems (GitHub):</strong>{' '}
              Smart University Transport System (Real-time Socket.IO GPS tracking) &amp; Smart Academy Management System (Attendance &amp; Chart.js analytics).
            </p>
          </div>
        </section>

        {/* Education (100% Single-Column ATS Layout) */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-0.5 text-xs sm:text-sm text-slate-700">
            <p>
              <strong className="text-slate-900">{PERSONAL_INFO.education.degree}</strong> — {PERSONAL_INFO.education.institution}
            </p>
            <span className="text-xs font-medium text-slate-600 shrink-0">Ongoing • Dhaka, Bangladesh</span>
          </div>
        </section>

        {/* Competitive Programming (100% Single-Column ATS Layout) */}
        <section className="space-y-1.5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1">
            Competitive Programming
          </h2>
          <p className="text-xs sm:text-sm text-slate-700">
            <strong className="text-slate-900">LeetCode:</strong>{' '}
            <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              NAIM1111
            </a>{' '}
            (50+ Solved) •{' '}
            <strong className="text-slate-900">Codeforces:</strong>{' '}
            <a href={PERSONAL_INFO.codeforces} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              naim_2046
            </a>{' '}
            •{' '}
            <strong className="text-slate-900">CodeChef:</strong>{' '}
            <a href={PERSONAL_INFO.codechef} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
              naim2046
            </a>
          </p>
        </section>
      </article>
    </div>
  );
}
