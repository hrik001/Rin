import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, Instagram, UtensilsCrossed } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO } from '../../data/brand';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Menu', page: 'menu' },
    { label: 'Our Story', page: 'story' },
    { label: 'Locations', page: 'locations' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E7DFD4]'
          : 'bg-[#FAF7F2] border-b border-[#E7DFD4]/60'
      }`}
    >
      {/* Concise Brand Announcement Strip */}
      <div className="bg-[#1C1611] text-[#FAF7F2] text-xs py-2 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F5C842]"></span>
            <span className="font-normal text-[#FAF7F2]/90 tracking-normal text-xs sm:text-[13px]">
              Handmade Himalayan momos in Kolkata · Lake Market Dine-In & Entally Takeaway
            </span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-[#FAF7F2]/80">
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5C842] flex items-center gap-1.5 transition-colors font-medium"
            >
              <Instagram className="w-3.5 h-3.5 text-[#F5C842]" />
              <span>{BRAND_INFO.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Wordmark */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick('home')}
            className="flex flex-col text-left group cursor-pointer focus:outline-none"
          >
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1C1611] group-hover:text-[#8C2223] transition-colors leading-none">
              RINCHEN&apos;S MOMO
            </span>
            <span className="text-[11px] text-[#66584C] font-normal tracking-wide mt-1">
              Handmade in Kolkata · By Rinchen Wangdi Bhutia
            </span>
          </button>

          {/* Desktop Center Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1.5 text-sm transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#8C2223] font-semibold'
                      : 'text-[#1C1611]/80 hover:text-[#8C2223] font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8C2223] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              id="nav-quick-directions"
              onClick={() => handleLinkClick('locations')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1C1611] border border-[#E7DFD4] bg-white rounded-lg hover:border-[#1C1611] transition-all cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8C2223]" />
              <span>Find Us</span>
            </button>

            <button
              id="nav-primary-menu-cta"
              onClick={() => handleLinkClick('menu')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#F5C842] text-[#1C1611] rounded-lg hover:bg-[#E8BC38] transition-colors cursor-pointer"
            >
              <UtensilsCrossed className="w-3.5 h-3.5" />
              <span>Explore Menu</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-quick-menu-btn"
              onClick={() => handleLinkClick('menu')}
              className="px-3 py-1.5 text-xs font-semibold bg-[#F5C842] text-[#1C1611] rounded-lg"
            >
              Menu
            </button>
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1611] rounded-lg hover:bg-[#F3ECE1] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-[#E7DFD4] bg-[#FAF7F2] px-5 pt-3 pb-8 space-y-4 shadow-sm"
        >
          <div className="flex flex-col space-y-1">
            <button
              id="mobile-nav-home"
              onClick={() => handleLinkClick('home')}
              className={`text-left px-3 py-3 rounded-lg text-base ${
                currentPage === 'home'
                  ? 'text-[#8C2223] font-semibold bg-[#8C2223]/8'
                  : 'text-[#1C1611] font-medium hover:bg-[#F3ECE1]'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.page}
                id={`mobile-nav-${link.page}`}
                onClick={() => handleLinkClick(link.page)}
                className={`text-left px-3 py-3 rounded-lg text-base ${
                  currentPage === link.page
                    ? 'text-[#8C2223] font-semibold bg-[#8C2223]/8'
                    : 'text-[#1C1611] font-medium hover:bg-[#F3ECE1]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E7DFD4] space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <button
                id="mobile-nav-find-outlets"
                onClick={() => handleLinkClick('locations')}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#1C1611] border border-[#E7DFD4] rounded-lg bg-white"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C2223]" />
                <span>Find Us</span>
              </button>
              <a
                id="mobile-nav-instagram"
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#1C1611] bg-[#F5C842] rounded-lg"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>

            <p className="text-xs text-[#66584C] text-center pt-1 font-normal">
              Lake Market: 1:30 PM – 11:00 PM · Entally: 12:30 PM – 10:30 PM
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
