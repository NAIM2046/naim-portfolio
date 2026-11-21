'use client';

import { useState, useEffect } from 'react';
import { Briefcase, Menu, X, Code2 } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Live Apps', href: '#production-apps' },
    { name: 'Engineering', href: '#engineering-systems' },
    { name: 'Skills', href: '#tech-stack' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-2xs'
          : 'bg-white/80 backdrop-blur-xs border-b border-slate-200/60'
      }`}
    >
      <nav aria-label="Primary Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 min-h-[44px] group">
            <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <Code2 className="w-5 h-5 text-blue-600" />
            </div>
            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              Naim Hossain
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 min-h-[44px] inline-flex items-center rounded-lg text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 min-h-[44px] rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Briefcase className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Mobile Menu Button (44x44px minimum touch target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-5 bg-white border-b border-slate-200 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center min-h-[44px] px-3 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[44px] rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
