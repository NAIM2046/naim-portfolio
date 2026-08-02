'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import ProductionApps from '@/components/ProductionApps';
import EngineeringSystems from '@/components/EngineeringSystems';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('cyan');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  return (
    <div className="min-h-screen bg-[#07090e] text-gray-100 selection:bg-cyan-500 selection:text-black">
      {/* Fixed Sticky Header */}
      <Navbar currentTheme={currentTheme} setTheme={setCurrentTheme} />

      {/* Main Page Layout Sections */}
      <main className="relative z-10 space-y-0">
        <Hero />
        <PainPoints />
        <ProductionApps />
        <EngineeringSystems />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
