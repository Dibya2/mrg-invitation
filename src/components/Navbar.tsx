import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';
import { WEDDING_DATA } from '../config/weddingData';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'haldi', label: 'Haldi' },
    { id: 'mehendi', label: 'Mehendi' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'reception', label: 'Reception' },
    { id: 'venue', label: 'Venue' },
    { id: 'rsvp', label: 'RSVP' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Header Navigation (Desktop & Mobile header bar) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3E2C4A]/95 backdrop-blur-md shadow-lg border-b border-[#D4AF70]/20 py-3'
            : 'bg-gradient-to-b from-[#3E2C4A]/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Couple Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left"
          >
            <Sparkles className="w-5 h-5 text-[#D4AF70] group-hover:rotate-12 transition-transform" />
            <span className="font-script text-2xl sm:text-3xl text-[#F5E6C8] tracking-wide">
              {WEDDING_DATA.couple.title}
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs lg:text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-[#5A456E] text-[#D4AF70] border border-[#D4AF70]/50 shadow-sm'
                      : 'text-[#E9DDF0] hover:text-[#D4AF70] hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Mobile Hamburger Drawer Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF70]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {/* Mobile Top Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#3E2C4A] border-b border-[#D4AF70]/30 px-4 py-6 shadow-2xl space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#5A456E] text-[#D4AF70] font-bold border border-[#D4AF70]/40'
                    : 'text-[#E9DDF0] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
