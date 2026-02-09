import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { QuickLinks } from './components/QuickLinks';
import { Projects } from './components/Projects';
import { CodingStats } from './components/CodingStats';
import { Quote } from './components/Quote';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-4 sm:mb-6 md:mb-8">
            <div className="lg:col-span-2">
              <Hero />
            </div>
            <div>
              <TechStack />
            </div>
          </div>
          
          <QuickLinks />
          
          <Projects />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
            <div className="lg:col-span-2">
              <CodingStats />
            </div>
            <div>
              <Quote />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}