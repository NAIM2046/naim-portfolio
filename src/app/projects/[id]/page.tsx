import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Target,
  AlertTriangle,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import { PRODUCTION_APPS } from '@/data/portfolioData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PRODUCTION_APPS.map((app) => ({ id: app.id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const app = PRODUCTION_APPS.find((item) => item.id === id);

  if (!app) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${app.title} — Case Study`,
    description: app.description,
    alternates: {
      canonical: `/projects/${app.id}`,
    },
    openGraph: {
      title: `${app.title} | Naim Hossain Case Study`,
      description: app.description,
      url: `https://naim.nexovatelabs.com/projects/${app.id}`,
      type: 'article',
      ...(app.image ? { images: [{ url: app.image, alt: app.title }] } : {}),
    },
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const app = PRODUCTION_APPS.find((item) => item.id === id);

  if (!app) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Top Navigation */}
          <div>
            <Link
              href="/#production-apps"
              className="inline-flex items-center gap-2 px-3.5 min-h-[44px] rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>
          </div>

          {/* Header */}
          <header className="space-y-5 border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
                {app.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                {app.metrics}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {app.title}
            </h1>

            {app.subtitle && (
              <p className="text-base sm:text-lg font-medium text-blue-600">
                {app.subtitle}
              </p>
            )}

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
              {app.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              {app.liveUrl && (
                <a
                  href={app.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 min-h-[44px] rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  <span>Visit Live Product</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-5 min-h-[44px] rounded-lg text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
              >
                <span>Discuss a Similar Project</span>
              </Link>
            </div>
          </header>

          {/* Project Showcase Banner */}
          {app.image && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xs">
              <Image
                src={app.image}
                alt={`${app.title} showcase mockup`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
                priority
                quality={95}
              />
            </div>
          )}

          {/* Scope Table (if available) */}
          {app.scope && (
            <section className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">Project Scope</h2>
              <div className="rounded-xl border border-slate-200 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-slate-50/70">
                      <th className="py-3.5 px-4 font-semibold text-slate-700 w-44">Role</th>
                      <td className="py-3.5 px-4 text-slate-900">{app.scope.role}</td>
                    </tr>
                    <tr>
                      <th className="py-3.5 px-4 font-semibold text-slate-700">Status</th>
                      <td className="py-3.5 px-4 text-slate-900">{app.scope.timeline}</td>
                    </tr>
                    <tr className="bg-slate-50/70">
                      <th className="py-3.5 px-4 font-semibold text-slate-700">Target Users</th>
                      <td className="py-3.5 px-4 text-slate-900">{app.scope.targetUsers}</td>
                    </tr>
                    <tr>
                      <th className="py-3.5 px-4 font-semibold text-slate-700">Platforms</th>
                      <td className="py-3.5 px-4 text-slate-900">{app.scope.platforms}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Problems & Opportunity (if available) */}
          {app.problems && app.problems.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blue-600" />
                <span>The Problem &amp; Opportunity</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {app.problems.map((problem) => (
                  <div
                    key={problem.title}
                    className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
                  >
                    <h3 className="text-sm font-bold text-slate-900">{problem.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {problem.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenge, Solution & Architecture */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              <span>Challenge, Solution &amp; Architecture</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-rose-700">
                  The Challenge
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {app.caseStudy.challenge}
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  The Solution
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {app.caseStudy.solution}
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                <span>System Architecture Flow</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 font-mono leading-relaxed break-words">
                {app.caseStudy.architecture}
              </p>
            </div>

            {app.architectureDetails && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="p-5 rounded-xl surface-card space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">Frontend Architecture</h3>
                  <ul className="space-y-2">
                    {app.architectureDetails.frontend.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl surface-card space-y-3">
                  <h3 className="text-sm font-bold text-slate-900">Backend &amp; Database Architecture</h3>
                  <ul className="space-y-2">
                    {app.architectureDetails.backend.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </section>

          {/* Key Engineering Highlights */}
          {app.engineeringHighlights && app.engineeringHighlights.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Key Engineering &amp; Design Highlights
              </h2>
              <div className="space-y-4">
                {app.engineeringHighlights.map((block) => (
                  <div key={block.title} className="p-5 sm:p-6 rounded-xl surface-card space-y-3">
                    <h3 className="text-base font-bold text-slate-900">{block.title}</h3>
                    {block.challenge && (
                      <p className="text-xs sm:text-sm text-slate-600">
                        <span className="font-semibold text-slate-800">Challenge: </span>
                        {block.challenge}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {block.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="text-blue-600 font-bold">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Impact Metrics Table */}
          {app.impactMetrics && app.impactMetrics.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                <span>Key Results &amp; Impact</span>
              </h2>
              <div className="rounded-xl border border-slate-200 overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[540px]">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4 font-bold text-slate-800">Metric</th>
                      <th className="py-3 px-4 font-bold text-slate-800">Before</th>
                      <th className="py-3 px-4 font-bold text-slate-800">After</th>
                      <th className="py-3 px-4 font-bold text-slate-800">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {app.impactMetrics.map((row) => (
                      <tr key={row.metric}>
                        <td className="py-3 px-4 font-semibold text-slate-900">{row.metric}</td>
                        <td className="py-3 px-4 text-slate-600">{row.before}</td>
                        <td className="py-3 px-4 font-semibold text-slate-900">{row.after}</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">{row.improvement}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Standout Points */}
          {app.standoutPoints && app.standoutPoints.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>Engineering Differentiators</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {app.standoutPoints.map((point) => (
                  <div key={point.title} className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{point.detail}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Technologies Used</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {app.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
