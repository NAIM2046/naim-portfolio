'use client';

import { ArrowUp, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-white text-xs text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Naim Hossain</p>
              <p className="text-xs text-slate-600">
                Co-Founder @ Nexovate Labs • Jahangirnagar University
              </p>
            </div>
          </div>

          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Naim Hossain. Built with Next.js &amp; Tailwind CSS.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="px-4 min-h-[44px] rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1.5 font-semibold text-xs"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
