'use client';

import { Play, Radio, BarChart3, Bot, ExternalLink, Cpu, Code2 } from 'lucide-react';
import { ENGINEERING_PROJECTS } from '@/data/portfolioData';

export default function EngineeringSystems() {
  return (
    <section id="engineering-systems" className="py-24 bg-[#080c14]/80 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <span>CS Architecture & Real-Time R&D</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Complex <span className="accent-text-gradient">Engineering Systems</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Real-Time WebSocket pipelines, Chart.js analytics systems, and Machine Learning / RAG explorations.
          </p>
        </div>

        {/* Systems Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ENGINEERING_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="p-7 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30">
                    {project.type}
                  </span>

                  {/* Icon */}
                  {project.id === 'smart-transport' && <Radio className="w-5 h-5 text-cyan-400 animate-pulse" />}
                  {project.id === 'smart-academy' && <BarChart3 className="w-5 h-5 text-purple-400" />}
                  {project.id === 'ai-rag-exploration' && <Bot className="w-5 h-5 text-emerald-400" />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Links & Stack */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-md text-[10px] font-semibold text-gray-300 bg-white/5 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Action CTAs */}
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all flex items-center justify-center gap-2"
                    >
                      <Code2 className="w-4 h-4 text-cyan-400" />
                      <span>Source Code</span>
                    </a>
                  )}

                  {project.videoUrl && (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Video Demo</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
