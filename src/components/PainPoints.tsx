'use client';

import { Zap, Radio, Server, Brain, CheckCircle } from 'lucide-react';
import { CLIENT_PAIN_POINTS } from '@/data/portfolioData';

export default function PainPoints() {
  const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
    Radio: <Radio className="w-6 h-6 text-cyan-400" />,
    Server: <Server className="w-6 h-6 text-purple-400" />,
    Brain: <Brain className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section className="py-20 bg-[#090d14]/70 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <span>Engineering Strengths</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Engineering <span className="accent-text-gradient">Capabilities</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Four key technical pillars that define my engineering background and real-world system architecture capabilities.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel glass-panel-hover flex flex-col justify-between space-y-4 relative group"
            >
              <div className="space-y-3">
                {/* Icon Container & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.icon]}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Solved Badge */}
              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Capability</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
