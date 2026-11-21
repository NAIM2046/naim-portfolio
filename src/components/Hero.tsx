import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  FileText,
  MapPin,
  GraduationCap,
  Building2,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Hero() {
  const metrics = [
    {
      label: "Production Web Apps",
      value: "8+",
      detail: "E-Commerce, EdTech, NGO & News",
    },
    {
      label: "On-Time Delivery",
      value: "100%",
      detail: "End-to-End Client Deployment",
    },
    {
      label: "Academic Track",
      value: "B.Sc. ICT",
      detail: "Jahangirnagar University",
    },
  ];

  const coreSkills = [
    "Next.js 16",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Prisma",
    "MongoDB",
    "Socket.IO",
  ];

  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
              Full-Stack Engineer Building{" "}
              <span className="text-blue-600">Production-Grade</span> Web
              Applications.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Core Stack Tags */}
            <div className="flex flex-wrap items-center gap-2">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200/80"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Primary Actions */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#production-apps"
                className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] rounded-lg font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View Production Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/cv"
                className="inline-flex items-center justify-center gap-2 px-6 min-h-[44px] rounded-lg font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-blue-600" />
                <span>View / Download CV</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Clean Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-7 space-y-5">
              <div className="flex flex-col sm:flex-row lg:flex-col items-center gap-5 text-center sm:text-left lg:text-center">
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-slate-200 bg-white shrink-0 shadow-2xs">
                  <Image
                    src="/naim-profile.jpg"
                    alt="Naim Hossain - Full-Stack Web Developer"
                    fill
                    sizes="(max-width: 768px) 144px, 176px"
                    className="object-cover object-top"
                    priority
                    quality={95}
                  />
                </div>

                <div className="space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {PERSONAL_INFO.name}
                  </h2>
                  <p className="text-sm font-semibold text-blue-600">
                    Full-Stack Developer &amp; Co-Founder
                  </p>
                  <p className="text-xs text-slate-600">Nexovate Labs</p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 space-y-2.5 text-xs text-slate-700">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Co-Founder @ Nexovate Labs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>B.Sc. in ICT, Jahangirnagar University</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Concise Metrics Row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-xl surface-card surface-card-interactive text-left space-y-1"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight">
                {m.value}
              </div>
              <div className="text-sm font-semibold text-slate-900">
                {m.label}
              </div>
              <div className="text-xs text-slate-600">{m.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
