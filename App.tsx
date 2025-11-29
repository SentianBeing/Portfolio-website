import React, { useState, Suspense, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import ImpactSection from './components/ImpactSection';
import ServicesGrid from './components/ServicesGrid';

// Lazy load the AboutPage to improve initial load time (Code Splitting)
const AboutPage = React.lazy(() => import('./components/AboutPage'));

// Lightweight loading fallback component
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center w-full">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-gray-100 border-t-brand-yellow rounded-full animate-spin"></div>
      <p className="text-sm text-gray-400 font-medium">Loading content...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');

  // Memoize navigation handler to prevent prop drilling re-renders
  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page as 'home' | 'about');
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-brand-black selection:bg-brand-yellow selection:text-black">
      {/* Container for the bordered layout effect */}
      <div className="max-w-[1600px] mx-auto border-x border-dashed border-gray-200 min-h-screen shadow-sm flex flex-col">
        <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
        
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
            <Suspense fallback={<PageLoader />}>
              <AboutPage />
            </Suspense>
          )}
        </main>
        
        {/* Simple Footer Placeholder */}
        <footer className="py-12 text-center text-sm text-gray-400 border-t border-dashed border-gray-200">
          <div className="mb-4 flex justify-center gap-6">
            <button className="hover:text-black transition-colors" onClick={() => handleNavigate('home')}>Home</button>
            <button className="hover:text-black transition-colors" onClick={() => handleNavigate('about')}>About</button>
            <a href="#" className="hover:text-black transition-colors" onClick={(e) => e.preventDefault()}>Twitter</a>
            <a href="#" className="hover:text-black transition-colors" onClick={(e) => e.preventDefault()}>LinkedIn</a>
          </div>
          <p>© {new Date().getFullYear()} Karthik DS. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;