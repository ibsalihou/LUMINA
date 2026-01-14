
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          LUMINA<span className="text-indigo-600">.</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <a href="#services" className="hover:text-indigo-600 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-indigo-600 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          <a 
            href="#contact" 
            className="bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-indigo-700 transition-all transform active:scale-95"
          >
            Lancer un Projet
          </a>
        </nav>

        <button className="md:hidden text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
