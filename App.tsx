import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ImpactSection from './components/ImpactSection';
import ServicesGrid from './components/ServicesGrid';
import AboutPage from './components/AboutPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  return (
    <div className="min-h-screen bg-white font-sans text-brand-black selection:bg-brand-yellow selection:text-black">
      {/* Container for the bordered layout effect usually seen in design tools/modern sites */}
      <div className="max-w-[1600px] mx-auto border-x border-dashed border-gray-200 min-h-screen shadow-sm flex flex-col">
        <Navbar onNavigate={(page) => setCurrentPage(page as 'home' | 'about')} currentPage={currentPage} />
        
        <main className="flex-grow">
          {currentPage === 'home' ? (
            <div className="animate-in fade-in duration-500">
              <Hero />
              <StatsBar />
              <ImpactSection />
              <div id="project"></div> {/* Anchor for scrolling */}
              <ServicesGrid />
            </div>
          ) : (
            <AboutPage />
          )}
        </main>
        
        {/* Simple Footer Placeholder */}
        <footer className="py-12 text-center text-sm text-gray-400 border-t border-dashed border-gray-200">
          <div className="mb-4 flex justify-center gap-6">
            <span className="cursor-pointer hover:text-black transition-colors" onClick={() => setCurrentPage('home')}>Home</span>
            <span className="cursor-pointer hover:text-black transition-colors" onClick={() => setCurrentPage('about')}>About</span>
            <span className="cursor-pointer hover:text-black transition-colors">Twitter</span>
            <span className="cursor-pointer hover:text-black transition-colors">LinkedIn</span>
          </div>
          <p>© {new Date().getFullYear()} Karthik DS. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
