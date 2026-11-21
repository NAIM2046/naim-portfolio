import { Code2, Layout, Server, Database, Cloud } from 'lucide-react';
import { TECHNICAL_SKILLS } from '@/data/portfolioData';

export default function TechStack() {
  const categoryIcons: Record<string, React.ReactNode> = {
    'Languages & Core CS': <Code2 className="w-5 h-5 text-blue-600" />,
    'Frontend Engineering': <Layout className="w-5 h-5 text-blue-600" />,
    'Backend & APIs': <Server className="w-5 h-5 text-blue-600" />,
    'Databases & ORM': <Database className="w-5 h-5 text-blue-600" />,
    'DevOps & Tools': <Cloud className="w-5 h-5 text-blue-600" />,
  };

  return (
    <section id="tech-stack" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2.5 mb-12">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
            Technical Stack
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Core <span className="text-blue-600">Technologies</span> &amp; Tools
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Production experience across modern frontend frameworks, backend APIs, databases, and cloud deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNICAL_SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl surface-card surface-card-interactive space-y-5"
            >
              <div className="flex items-center gap-3 border-b border-slate-200/80 pb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  {categoryIcons[group.category]}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200/80"
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
