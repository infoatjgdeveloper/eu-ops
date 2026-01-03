
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 eu-blue rounded-lg flex items-center justify-center text-white font-bold text-xl">
            JG
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-bold text-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Developer</span>
            <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-blue-600' : 'text-blue-200'}`}>EU Operations</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="eu-blue text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Contact EU Team
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} ${isScrolled ? 'text-slate-900' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-6 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-slate-800 border-b border-slate-100 pb-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="eu-blue text-white text-center py-3 rounded-xl font-semibold mt-2"
          >
            Contact EU Team
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
