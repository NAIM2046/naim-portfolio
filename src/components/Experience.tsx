"use client";

import {
  Building2,
  GraduationCap,
  Trophy,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
            <span>Career Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &{" "}
            <span className="accent-text-gradient">Academic Background</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Co-Founding a software agency, academic rigor at Jahangirnagar
            University, and active competitive programming.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Work Experience */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-7 rounded-3xl glass-panel space-y-6">
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Co-Founder & Full-Stack Developer
                    </h3>
                    <p className="text-xs text-cyan-400 font-semibold">
                      Nexovate Labs • 2025 – Present
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                  Agency Lead
                </span>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-3">
                {[
                  "Co-founded software development agency delivering custom web solutions for global clients.",
                  "Developed and deployed 8+ production web applications across EdTech, E-commerce, NGO, and News sectors.",
                  "Architected REST APIs, JWT authentication, custom admin control panels, and optimized PostgreSQL database schemas.",
                  "Direct client interaction from initial requirement gathering to production cloud/VPS deployment.",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs text-gray-300 leading-relaxed"
                  >
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Card */}
            <div className="p-7 rounded-3xl glass-panel space-y-4">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <p className="text-xs text-purple-300 font-semibold">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Focusing on Information & Communication Technology, Algorithm
                Analysis, Software Engineering Principles, and Scalable Systems.
              </p>
            </div>
          </div>

          {/* Competitive Programming Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-3xl bg-[#0c1017] border border-white/15 shadow-2xl space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Competitive Programming
                  </h3>
                  <p className="text-xs text-amber-300">
                    500+ Algorithmic Problems Solved
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* LeetCode */}
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                      LeetCode
                    </p>
                    <p className="text-xs text-gray-400">
                      Handle: NAIM1111 (83+ Solved)
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>

                {/* Codeforces */}
                <a
                  href={PERSONAL_INFO.codeforces}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                      Codeforces
                    </p>
                    <p className="text-xs text-gray-400">Handle: naim_2046</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>

                {/* CodeChef */}
                <a
                  href={PERSONAL_INFO.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center justify-between group"
                >
                  <div className="space-y-0.5">
                    <p className="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                      CodeChef
                    </p>
                    <p className="text-xs text-gray-400">Handle: naim2046</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
