'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  ArrowRight,
  ShoppingBag,
  GraduationCap,
  BookOpen,
  Shirt,
  ShoppingBasket,
  Newspaper,
  HeartHandshake,
  ArrowUpRight,
  Layers,
  Utensils,
} from 'lucide-react';
import { PRODUCTION_APPS } from '@/data/portfolioData';

const CATEGORIES = ['All', 'FinTech', 'E-Commerce', 'EdTech', 'NGO', 'News'] as const;

export default function ProductionApps() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const categoryParam = searchParams.get('category');
  const activeCategory =
    categoryParam && CATEGORIES.includes(categoryParam as (typeof CATEGORIES)[number])
      ? categoryParam
      : 'All';

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (cat && cat !== 'All') {
      params.set('category', cat);
    } else {
      params.delete('category');
    }
    const query = params.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  };

  const filteredApps =
    activeCategory === 'All'
      ? PRODUCTION_APPS
      : PRODUCTION_APPS.filter((app) => app.category === activeCategory);

  const getAppIcon = (iconName: string) => {
    switch (iconName) {
      case 'Utensils':
        return <Utensils className="w-5 h-5 text-blue-600" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-5 h-5 text-blue-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-blue-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-blue-600" />;
      case 'Shirt':
        return <Shirt className="w-5 h-5 text-blue-600" />;
      case 'ShoppingBasket':
        return <ShoppingBasket className="w-5 h-5 text-blue-600" />;
      case 'Newspaper':
        return <Newspaper className="w-5 h-5 text-blue-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-blue-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="production-apps" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 gap-6">
          <div className="space-y-2.5 max-w-2xl text-left">
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
              Production Work
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              8+ Live <span className="text-blue-600">Production Applications</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Verified production deployments and enterprise case studies. Open any project for full architecture details.
            </p>
          </div>

          {/* Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter production applications by category"
            className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-white border border-slate-200"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 min-h-[44px] rounded-lg text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        {filteredApps.length === 0 ? (
          <div className="p-10 rounded-xl surface-card text-center space-y-4">
            <p className="text-sm text-slate-600">No applications found in this category.</p>
            <button
              type="button"
              onClick={() => handleCategoryChange('All')}
              className="px-4 min-h-[44px] rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApps.map((app) => (
              <article
                key={app.id}
                className="rounded-xl surface-card surface-card-interactive flex flex-col justify-between overflow-hidden"
              >
                {app.image && (
                  <Link href={`/projects/${app.id}`} className="block relative aspect-video w-full bg-slate-100 border-b border-slate-200/80 overflow-hidden">
                    <Image
                      src={app.image}
                      alt={`${app.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </Link>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                          {getAppIcon(app.iconName)}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">
                            {app.title}
                          </h3>
                          <span className="text-xs font-medium text-slate-500">
                            {app.category}
                          </span>
                        </div>
                      </div>

                      {app.liveUrl ? (
                        <a
                          href={app.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${app.title} live website`}
                          className="px-3 min-h-[44px] rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-800 hover:bg-emerald-100 transition-colors inline-flex items-center gap-1 text-xs font-semibold shrink-0"
                        >
                          <span>Live</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-[11px] font-bold uppercase tracking-wider shrink-0">
                          Production
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                      {app.description}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-slate-200/80 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {app.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-700 bg-slate-100 border border-slate-200/80"
                        >
                          {tech}
                        </span>
                      ))}
                      {app.stack.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200/80">
                          +{app.stack.length - 4} more
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/projects/${app.id}`}
                      className="w-full min-h-[44px] rounded-lg text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
