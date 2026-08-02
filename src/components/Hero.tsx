"use client";

import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Terminal,
  Zap,
  Award,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const metrics = [
    {
      label: "Live Production Web Apps",
      value: "8+",
      highlight: "E-Commerce, EdTech, NGO",
    },
    {
      label: "Client Delivery Rate",
      value: "100%",
      highlight: "On-Time & On-Budget",
    },
    {
      label: "Competitive Programming",
      value: "500+",
      highlight: "LeetCode&Codeforce Solved",
    },
    {
      label: "Academic Foundation",
      value: "B.Sc ICT",
      highlight: "Jahangirnagar University",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Lighting Orbs */}
      <div className="bg-ambient-glow top-10 -left-40 opacity-40"></div>
      <div className="bg-ambient-glow bottom-0 right-0 opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Bio Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold backdrop-blur-md shadow-lg shadow-emerald-500/10">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for New Projects & Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Architecting{" "}
              <span className="accent-text-gradient">Production-Grade</span> Web
              Apps & Real-Time Systems.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
              Full-Stack Developer & Co-Founder at{" "}
              <Link
                href="https://nexovatelabs.com"
                className="text-white font-semibold underline decoration-cyan-500 decoration-2 underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nexovate Labs
              </Link>
              . Specializing in{" "}
              <span className="text-cyan-300">
                Next.js, React, Node.js, Express, PostgreSQL, Prisma, MongoDB
              </span>{" "}
              & Socket.IO. Delivered 8+ live web products for clients worldwide.
            </p>

            {/* Quick Tech Tag Cloud */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {[
                "React.js",
                "Next.js 15",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Prisma",
                "MongoDB",
                "Socket.IO",
                "VPS Deploy",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-gray-300 bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:text-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#production-apps"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white accent-bg-gradient shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>View 8+ Production Apps</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-gray-200 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 backdrop-blur-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Trust Guarantees */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-gray-400 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Verified Live Production Sites</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>End-to-End Scalable Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Large Profile Showcase & Code Window */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-500"></div>

              {/* Glass Card */}
              <div className="relative rounded-3xl bg-[#0c1017] border border-white/20 shadow-2xl p-6 sm:p-7 space-y-5 text-center">
                {/* Large Prominent Profile Frame */}
                <div className="relative w-52 h-52 sm:w-64 sm:h-64 mx-auto rounded-3xl overflow-hidden p-[3px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-emerald-400 shadow-2xl shadow-cyan-500/25 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="w-full h-full rounded-[21px] overflow-hidden relative bg-[#07090e]">
                    <Image
                      src="/naim-profile.jpg"
                      alt="Naim Hossain - Full-Stack Engineer & Founder"
                      fill
                      sizes="(max-width: 768px) 100vw, 300px"
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                      priority
                      quality={95}
                    />
                  </div>
                </div>

                {/* Founder Info */}
                <div className="space-y-1 pt-1">
                  <h3 className="text-2xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
                    <span>Naim Hossain</span>
                    <Award className="w-5 h-5 text-cyan-400" />
                  </h3>
                  <p className="text-xs font-semibold text-cyan-300">
                    Co-Founder & Full-Stack Developer @ Nexovate Labs
                  </p>
                  <p className="text-[11px] text-gray-400">
                    B.Sc. in ICT • Jahangirnagar University
                  </p>
                </div>

                {/* Code Config Box */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-gray-400 border-b border-white/10 pb-2">
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <Terminal className="w-3.5 h-3.5" />
                      naim-engineer.config.ts
                    </span>
                    <span className="text-emerald-400 font-semibold">
                      🟢 Open for Hire
                    </span>
                  </div>
                  <div className="font-mono text-xs text-gray-300 space-y-1 pt-1 leading-relaxed">
                    <p>
                      <span className="text-purple-400">const</span> founder =
                      &#123;
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">productionApps</span>:{" "}
                      <span className="text-emerald-300">
                        &apos;8+ Live&apos;
                      </span>
                      ,
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">coreStack</span>: [
                      <span className="text-amber-300">
                        &apos;Next.js&apos;
                      </span>
                      , <span className="text-amber-300">&apos;Node&apos;</span>
                      ,{" "}
                      <span className="text-amber-300">
                        &apos;PostgreSQL&apos;
                      </span>
                      ],
                    </p>
                    <p className="pl-4">
                      <span className="text-cyan-400">deliveryRate</span>:{" "}
                      <span className="text-emerald-400">
                        &apos;100% On-Time&apos;
                      </span>
                      ,
                    </p>
                    <p>&#125;;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl glass-panel glass-panel-hover text-left space-y-1 relative overflow-hidden group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold accent-text-gradient tracking-tight">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-white tracking-wide">
                {m.label}
              </div>
              <div className="text-xs text-gray-400">{m.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
