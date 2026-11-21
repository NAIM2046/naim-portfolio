import { Play, Radio, BarChart3, Bot, Code2 } from 'lucide-react';
import { ENGINEERING_PROJECTS } from '@/data/portfolioData';

export default function EngineeringSystems() {
  return (
    <section id="engineering-systems" className="py-16 sm:py-24 bg-white border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2.5 mb-12">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
            Systems &amp; R&amp;D
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Engineering <span className="text-blue-600">Systems</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Real-time WebSocket architectures, analytics platforms, and Python/FastAPI RAG research.
          </p>
        </div>

        {/* Systems Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ENGINEERING_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="p-6 sm:p-7 rounded-xl surface-card surface-card-interactive flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/80">
                    {project.type}
                  </span>

                  {project.id === 'smart-transport' && <Radio className="w-5 h-5 text-blue-600" />}
                  {project.id === 'smart-academy' && <BarChart3 className="w-5 h-5 text-blue-600" />}
                  {project.id === 'ai-rag-exploration' && <Bot className="w-5 h-5 text-blue-600" />}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-1.5">
                    {project.keyFeatures.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-700 bg-slate-100 border border-slate-200/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {(project.githubUrl || project.videoUrl) && (
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-h-[44px] px-4 rounded-lg text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 transition-colors flex items-center justify-center gap-2"
                      >
                        <Code2 className="w-4 h-4 text-blue-600" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-h-[44px] px-4 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        <span>Video Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
