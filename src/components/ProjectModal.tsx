'use client';

import { X, ExternalLink, Cpu, Layers, Target, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';
import { ProductionApp } from '@/data/portfolioData';

interface ProjectModalProps {
  app: ProductionApp | null;
  onClose: () => void;
}

export default function ProjectModal({ app, onClose }: ProjectModalProps) {
  if (!app) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pt-24 sm:pt-28 pb-8 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-[#0c1017] border border-white/20 shadow-2xl p-6 sm:p-8 space-y-6 z-10 overflow-y-auto max-h-[82vh] my-auto">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-4">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-2">
              {app.category} • Production Release Case Study
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {app.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live URL Callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/40 to-blue-950/40 border border-emerald-500/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <p className="text-xs text-gray-300 font-medium">Live Production Domain</p>
              <p className="text-sm font-bold text-white">{app.liveUrl}</p>
            </div>
          </div>
          <a
            href={app.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-500 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-1.5"
          >
            <span>Visit Live Product</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Overview */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
            <Target className="w-4 h-4 text-cyan-400" />
            <span>Project & System Scope</span>
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            {app.description}
          </p>
        </div>

        {/* Key Engineering Features Highlight Box */}
        {app.caseStudy.keyTechnicalFeatures && app.caseStudy.keyTechnicalFeatures.length > 0 && (
          <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-3">
            <h4 className="text-xs font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Key Technical & Engineering Implementations</span>
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {app.caseStudy.keyTechnicalFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technical Challenge & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Engineering Challenge</span>
            </h5>
            <p className="text-xs text-gray-300 leading-relaxed">
              {app.caseStudy.challenge}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
            <h5 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Architectural Solution</span>
            </h5>
            <p className="text-xs text-gray-300 leading-relaxed">
              {app.caseStudy.solution}
            </p>
          </div>
        </div>

        {/* System Architecture */}
        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
          <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <Cpu className="w-4 h-4" />
            <span>Architecture Breakdown</span>
          </h4>
          <p className="text-xs text-gray-300 font-mono leading-relaxed">
            {app.caseStudy.architecture}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-4 h-4 text-purple-400" />
            <span>Technologies & Queue Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {app.stack.map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-lg text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
