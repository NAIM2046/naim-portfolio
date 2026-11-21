import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductionApps from '@/components/ProductionApps';
import EngineeringSystems from '@/components/EngineeringSystems';
import TechStack from '@/components/TechStack';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Suspense fallback={null}>
          <ProductionApps />
        </Suspense>
        <EngineeringSystems />
        <TechStack />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
