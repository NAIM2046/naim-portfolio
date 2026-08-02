'use client';

import { Code2, Layout, Server, Database, Cloud } from 'lucide-react';
import { TECHNICAL_SKILLS } from '@/data/portfolioData';

export default function TechStack() {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages & Core CS': <Code2 className="w-5 h-5 text-cyan-400" />,
    'Frontend Engineering': <Layout className="w-5 h-5 text-purple-400" />,
    'Backend & APIs': <Server className="w-5 h-5 text-emerald-400" />,
    'Databases & ORM': <Database className="w-5 h-5 text-amber-400" />,
    'DevOps & Tools': <Cloud className="w-5 h-5 text-blue-400" />,
  };

  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering <span className="accent-text-gradient">Tech Stack</span> & Tools
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Proficient across modern frontend frameworks, scalable backends, relational & NoSQL databases, and cloud infrastructure.
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl glass-panel glass-panel-hover space-y-5 relative group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {categoryIcons[group.category]}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {group.category}
                </h3>
              </div>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl text-xs font-semibold text-gray-200 bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-950/30 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
