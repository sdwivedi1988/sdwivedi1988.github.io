import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
          SD<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`text-sm font-medium hover:text-blue-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors shadow-lg shadow-blue-600/30"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-blue-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-slate-600 font-medium py-2 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;