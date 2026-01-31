
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  onNavigateAbout: () => void;
  onNavigateHome: () => void;
  onNavigateContact: () => void;
  onNavigateJobs: () => void;
  onNavigateServices: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled, onNavigateAbout, onNavigateHome, onNavigateContact, onNavigateJobs, onNavigateServices }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Leistungen', href: '#', action: onNavigateServices },
    { name: 'Über uns', href: '#', action: onNavigateAbout },
    { name: 'Stellenangebote', href: '#', action: onNavigateJobs },
    { name: 'Kontakt', href: '#', action: onNavigateContact },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    if (link.action) {
      e.preventDefault();
      link.action();
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 border-b ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-100 py-3' : 'bg-white border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button onClick={onNavigateHome} className="flex flex-col group select-none text-left">
            <span className="text-[26px] font-bold leading-tight tracking-tight">
              <span className="text-[#1e3a8a]">KFO</span> <span className="text-[#2563eb]">Walter</span>
            </span>
            <span className="text-[11px] text-slate-500 font-medium uppercase tracking-[0.25em] -mt-0.5 ml-0.5">
              Wittenberg
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-8 mr-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => handleLinkClick(e, link)}
                  className="text-[15px] font-medium text-slate-700 hover:text-[#2563eb] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <a 
              href="tel:03491409390" 
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#2563eb] text-white text-[15px] font-bold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              <Phone size={18} fill="currentColor" stroke="none" />
              03491 409390
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2 rounded-lg text-slate-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col p-6 gap-5">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link)}
              className="text-lg font-semibold text-slate-800 border-b border-slate-50 pb-2"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:03491409390" 
            className="flex items-center justify-center gap-3 bg-[#2563eb] text-white py-4 rounded-2xl font-bold mt-2 shadow-lg"
          >
            <Phone size={20} fill="currentColor" stroke="none" />
            03491 409390
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
