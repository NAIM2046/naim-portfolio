import { Building2, GraduationCap, Trophy, ExternalLink, CheckCircle, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Experience() {
  const internships = [
    {
      role: 'Software Engineer Intern',
      company: 'Bangladesh Research & Education Network (BdREN)',
      period: 'Sep 2026 – Present',
      mode: 'Dhaka • Hybrid',
    },
    {
      role: 'Software Engineer Intern',
      company: 'TechKnowGram Limited',
      period: 'Aug 2026 – Present',
      mode: 'Dhaka • Hybrid',
    },
  ];

  const agencyHighlights = [
    'Co-founded software agency delivering custom web applications for global clients.',
    'Shipped 8+ production web applications across EdTech, E-Commerce, NGO, and News sectors.',
    'Architected REST APIs, JWT authentication, admin panels, and PostgreSQL schemas.',
  ];

  const profiles = [
    {
      name: 'LeetCode',
      handle: 'Handle: NAIM1111 (50+ Solved)',
      url: PERSONAL_INFO.leetcode,
    },
    {
      name: 'Codeforces',
      handle: 'Handle: naim_2046',
      url: PERSONAL_INFO.codeforces,
    },
    {
      name: 'CodeChef',
      handle: 'Handle: naim2046',
      url: PERSONAL_INFO.codechef,
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 bg-white border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2.5 mb-12">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
            Background
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Experience &amp; <span className="text-blue-600">Education</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Software engineering internships, agency leadership, and academic foundation in ICT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Work Experience (Internships + Agency) */}
          <div className="lg:col-span-7 space-y-5">
            {/* Internships */}
            {internships.map((item) => (
              <div key={item.company} className="p-6 rounded-xl surface-card surface-card-interactive">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                      <Briefcase className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-blue-600">
                        {item.company}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        {item.period} • {item.mode}
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80 shrink-0">
                    Internship
                  </span>
                </div>
              </div>
            ))}

            {/* Co-Founder Role */}
            <div className="p-6 sm:p-7 rounded-xl surface-card space-y-5">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200/80 pb-4">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Co-Founder &amp; Full-Stack Web Developer
                    </h3>
                    <p className="text-sm font-semibold text-blue-600">
                      Nexovate Labs
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Mar 2025 – Present • Dhaka • On-site
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 shrink-0">
                  Agency Lead
                </span>
              </div>

              <ul className="space-y-2.5">
                {agencyHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Education & Competitive Programming */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-xl surface-card space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {PERSONAL_INFO.education.degree}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    {PERSONAL_INFO.education.institution}
                  </p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Focusing on Information &amp; Communication Technology, Algorithm Analysis, Software Engineering Principles, and Scalable Systems.
              </p>
            </div>

            {/* Competitive Programming Card */}
            <div className="p-6 rounded-xl surface-card space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Competitive Programming</h3>
                  <p className="text-xs text-slate-600">50+ Algorithmic Problems Solved</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {profiles.map((profile) => (
                  <a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 min-h-[56px] rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 transition-colors flex items-center justify-between gap-3 group"
                  >
                    <div className="space-y-0.5 min-w-0">
                      <p className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {profile.name}
                      </p>
                      <p className="text-xs text-slate-600 truncate">{profile.handle}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-700 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
