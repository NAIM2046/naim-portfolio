'use client';

import { useState } from 'react';
import { Calculator, Check, Copy, Sparkles, Briefcase, Clock, Layers, Send } from 'lucide-react';

export default function UpworkEstimator() {
  const [service, setService] = useState('Full-Stack Web App');
  const [stack, setStack] = useState('Next.js + PostgreSQL + Prisma');
  const [timeline, setTimeline] = useState('3-4 Weeks (Standard)');
  const [copied, setCopied] = useState(false);

  const services = [
    'Full-Stack Web App',
    'Multi-Vendor E-Commerce',
    'EdTech Learning Platform',
    'Custom API & DB System',
    'VPS Cloud Server Setup',
  ];

  const stacks = [
    'Next.js + PostgreSQL + Prisma',
    'React + Node.js + MongoDB',
    'TypeScript + RESTful APIs',
    'Real-Time Socket.IO Engine',
  ];

  const timelines = [
    '1-2 Weeks (Rapid Launch)',
    '3-4 Weeks (Standard)',
    'Ongoing Retainer',
  ];

  const generatedSummary = `Hi Naim, I checked your portfolio and want to discuss a project on Upwork:
- Project Type: ${service}
- Tech Stack: ${stack}
- Target Timeline: ${timeline}
Please let me know your availability for a quick call/chat on Upwork!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedSummary);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="upwork-estimator" className="py-24 bg-[#090d14]/90 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Upwork Client Widget</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Estimate Project <span className="accent-text-gradient">Scope & Timeline</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Planning to hire me on Upwork? Select your project options to generate a ready-to-send proposal summary.
          </p>
        </div>

        {/* Widget Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-7 p-7 rounded-3xl glass-panel space-y-6">
            
            {/* Step 1: Service */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-400" />
                <span>1. Select Project Type</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((item) => (
                  <button
                    key={item}
                    onClick={() => setService(item)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      service === item
                        ? 'text-white accent-bg-gradient shadow-lg shadow-cyan-500/20 scale-105'
                        : 'text-gray-400 bg-white/5 border border-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Stack */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-400" />
                <span>2. Preferred Tech Stack</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {stacks.map((item) => (
                  <button
                    key={item}
                    onClick={() => setStack(item)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      stack === item
                        ? 'text-white accent-bg-gradient shadow-lg shadow-cyan-500/20 scale-105'
                        : 'text-gray-400 bg-white/5 border border-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Timeline */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>3. Target Delivery Timeline</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {timelines.map((item) => (
                  <button
                    key={item}
                    onClick={() => setTimeline(item)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                      timeline === item
                        ? 'text-white accent-bg-gradient shadow-lg shadow-cyan-500/20 scale-105'
                        : 'text-gray-400 bg-white/5 border border-white/10 hover:text-white'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Generated Proposal Output */}
          <div className="lg:col-span-5 p-7 rounded-3xl bg-[#0c1017] border border-white/15 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                <Sparkles className="w-4 h-4" />
                <span>Upwork Proposal Summary</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">Ready to Copy</span>
            </div>

            {/* Code Textarea Preview */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-gray-200 leading-relaxed whitespace-pre-wrap">
              {generatedSummary}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleCopy}
                className="w-full py-3.5 rounded-xl font-bold text-sm text-white accent-bg-gradient shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Copied Proposal Summary!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Upwork Scope Text</span>
                  </>
                )}
              </button>

              <a
                href="#contact"
                className="w-full py-3.5 rounded-xl font-semibold text-xs text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Direct Inquiry to Naim</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
