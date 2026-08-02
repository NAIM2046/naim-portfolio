'use client';

import { useState } from 'react';
import { ExternalLink, CheckCircle2, ShoppingBag, GraduationCap, BookOpen, Shirt, ShoppingBasket, Newspaper, HeartHandshake, ArrowUpRight, Layers } from 'lucide-react';
import { PRODUCTION_APPS, ProductionApp } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProductionApps() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedApp, setSelectedApp] = useState<ProductionApp | null>(null);

  const categories = ['All', 'E-Commerce', 'EdTech', 'NGO', 'News'];

  const filteredApps = activeCategory === 'All'
    ? PRODUCTION_APPS
    : PRODUCTION_APPS.filter((app) => app.category === activeCategory);

  const getAppIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5 text-cyan-400" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-emerald-400" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-purple-400" />;
      case 'Shirt': return <Shirt className="w-5 h-5 text-rose-400" />;
      case 'ShoppingBasket': return <ShoppingBasket className="w-5 h-5 text-amber-400" />;
      case 'Newspaper': return <Newspaper className="w-5 h-5 text-blue-400" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-emerald-400" />;
      default: return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="production-apps" className="py-20 sm:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span>Agency & Client Work</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              8+ Live <span className="accent-text-gradient">Production Applications</span>
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              Deploys delivered for Nexovate Labs clients. Click any live domain to verify real-world scale and performance.
            </p>
          </div>

          {/* Touch-Friendly Horizontally Scrollable Filter Tabs */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md overflow-x-auto no-scrollbar max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat
                    ? 'text-white accent-bg-gradient shadow-lg shadow-cyan-500/20 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="p-5 sm:p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-5 relative group"
            >
              {/* Card Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {getAppIcon(app.iconName)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {app.title}
                      </h3>
                      <span className="text-[11px] font-semibold text-gray-400">
                        {app.category}
                      </span>
                    </div>
                  </div>

                  {/* Live Status Badge */}
                  <a
                    href={app.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-1 text-xs font-bold flex-shrink-0"
                    title={`Visit ${app.liveUrl}`}
                  >
                    <span>Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">
                  {app.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-1.5 pt-1">
                  {app.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className="truncate">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Tech Stack & Case Study Opener */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {app.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold text-gray-300 bg-white/5 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {app.stack.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold text-cyan-400 bg-cyan-950/40">
                      +{app.stack.length - 4} more
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setSelectedApp(app)}
                  className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Case Study</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal app={selectedApp} onClose={() => setSelectedApp(null)} />
    </section>
  );
}
