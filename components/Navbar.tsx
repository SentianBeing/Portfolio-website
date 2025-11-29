import React, { useState, useEffect, useRef } from 'react';
import { ShoppingBag, ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = React.memo(({ onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Determine visibility
          if (currentScrollY < 10) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY.current) {
            // Scrolling down
            setIsVisible(false);
          } else {
            // Scrolling up
            setIsVisible(true);
          }
          
          lastScrollY.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (link === 'About') {
      onNavigate('about');
      window.scrollTo(0, 0);
    } else if (link === 'Home') {
      onNavigate('home');
      window.scrollTo(0, 0);
    } else {
      // For other links, go to home and scroll to section
      if (currentPage !== 'home') {
        onNavigate('home');
        // Small timeout to allow render before scrolling
        setTimeout(() => {
          const element = document.getElementById(link.toLowerCase());
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(link.toLowerCase());
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = ['About', 'Project', 'Pricing', 'Store'];

  return (
    <nav 
      className={`sticky top-0 w-full py-6 px-6 md:px-12 flex items-center justify-between bg-white z-50 transition-transform duration-300 border-b border-transparent ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${window.scrollY > 10 ? 'shadow-sm border-gray-100' : ''}`}
    >
      {/* Left Links (Desktop) */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
        {navLinks.map((link) => (
          <a 
            key={link} 
            href={`#${link.toLowerCase()}`} 
            onClick={(e) => handleLinkClick(link, e)}
            className={`hover:text-black transition-colors ${currentPage === 'about' && link === 'About' ? 'text-black font-bold' : ''}`}
          >
            {link}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Logo */}
      <button 
        onClick={(e) => handleLinkClick('Home', e)}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
        aria-label="Go to home"
      >
        <div className="w-8 h-8 bg-brand-yellow rounded-lg transform -rotate-3 transition-transform hover:rotate-0"></div>
        <div className="flex flex-col leading-none font-bold text-sm tracking-tight text-left">
          <span>Karthik</span>
          <span>DS</span>
        </div>
      </button>

      {/* Right Actions */}
      <div className="hidden md:flex items-center gap-6">
        <button className="text-gray-800 hover:text-black" aria-label="Shopping Bag">
          <ShoppingBag className="w-5 h-5" />
        </button>
        <button className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black">
          Pages <ChevronDown className="w-4 h-4" />
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
          Book A Free Call
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={(e) => handleLinkClick(link, e)}
              className="text-lg font-medium text-gray-800"
            >
              {link}
            </a>
          ))}
          <hr className="border-gray-100" />
          <button className="flex items-center gap-2 text-gray-800">
             <ShoppingBag className="w-5 h-5" /> Store
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold w-full">
            Book A Free Call
          </button>
        </div>
      )}
    </nav>
  );
});

export default Navbar;