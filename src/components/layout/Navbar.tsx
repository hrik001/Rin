import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, ExternalLink, Instagram, Phone, UtensilsCrossed } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO, OUTLETS } from '../../data/brand';

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

  const navLinks: { label: string; page: PageRoute; badge?: string }[] = [
    { label: 'Menu', page: 'menu' },
    { label: 'Our Story', page: 'story' },
    { label: 'Outlets', page: 'locations', badge: '2 Locations' },
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
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-[#E8DFD3]'
          : 'bg-[#FAF7F2] border-b border-[#E8DFD3]/60'
      }`}
    >
      {/* Top micro-banner */}
      <div className="bg-[#1C1611] text-[#FAF7F2] text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#F5C842] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Lake Market Dine-In (35 Seats) & Entally Delivery Hub
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-[#FAF7F2]/80">
            <span>Open Daily: 1:30 PM – 11:00 PM</span>
            <span className="text-[#F5C842]/40">•</span>
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5C842] flex items-center gap-1 transition-colors"
            >
              <Instagram className="w-3 h-3 text-[#F5C842]" />
              <span>@rinchen_momo</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo / Wordmark */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick('home')}
            className="flex flex-col text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1611] group-hover:text-[#8C2223] transition-colors">
                RINCHEN&apos;S MOMO
              </span>
              <span className="inline-block px-1.5 py-0.5 text-[10px] uppercase font-mono font-medium tracking-wider bg-[#F5C842] text-[#1C1611] rounded">
                Kolkata
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-[#66584C] font-mono tracking-wider uppercase">
              Handmade Himalayan Momos · By Rinchen Wangdi
            </span>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-all rounded-md cursor-pointer ${
                    isActive
                      ? 'text-[#8C2223] font-semibold bg-[#8C2223]/8'
                      : 'text-[#2B231D] hover:text-[#8C2223] hover:bg-[#FAF7F2]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {link.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 text-[10px] font-mono rounded-full bg-[#E8DFD3] text-[#1C1611]">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#8C2223] rounded-full" />
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
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#1C1611] border border-[#1C1611]/20 rounded-md hover:border-[#1C1611] hover:bg-white/60 transition-all cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#8C2223]" />
              <span>Find Us</span>
            </button>

            <button
              id="nav-primary-menu-cta"
              onClick={() => handleLinkClick('menu')}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#F5C842] text-[#1C1611] rounded-md shadow-xs hover:bg-[#E8BC38] transition-all cursor-pointer"
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
              className="px-2.5 py-1.5 text-xs font-semibold bg-[#F5C842] text-[#1C1611] rounded"
            >
              Menu
            </button>
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1C1611] rounded-md hover:bg-[#E8DFD3]/40 focus:outline-hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden border-b border-[#E8DFD3] bg-[#FAF7F2] px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-1">
            <button
              id="mobile-nav-home"
              onClick={() => handleLinkClick('home')}
              className={`text-left px-3 py-2.5 rounded-md text-base font-medium ${
                currentPage === 'home'
                  ? 'bg-[#8C2223]/10 text-[#8C2223] font-semibold'
                  : 'text-[#1C1611] hover:bg-[#E8DFD3]/50'
              }`}
            >
              Home
            </button>
            {navLinks.map((link) => (
              <button
                key={link.page}
                id={`mobile-nav-${link.page}`}
                onClick={() => handleLinkClick(link.page)}
                className={`flex items-center justify-between text-left px-3 py-2.5 rounded-md text-base font-medium ${
                  currentPage === link.page
                    ? 'bg-[#8C2223]/10 text-[#8C2223] font-semibold'
                    : 'text-[#1C1611] hover:bg-[#E8DFD3]/50'
                }`}
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#F5C842] text-[#1C1611]">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8DFD3] space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                id="mobile-nav-find-outlets"
                onClick={() => handleLinkClick('locations')}
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#1C1611] border border-[#1C1611]/30 rounded-md bg-white/70"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8C2223]" />
                <span>Outlets</span>
              </button>
              <a
                id="mobile-nav-instagram"
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[#1C1611] bg-[#F5C842] rounded-md"
              >
                <Instagram className="w-3.5 h-3.5 text-[#8C2223]" />
                <span>Instagram</span>
              </a>
            </div>

            <p className="text-[11px] text-[#66584C] text-center pt-1 font-mono">
              Lake Market: 1:30 PM – 11:00 PM · Walk-in Dining
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
