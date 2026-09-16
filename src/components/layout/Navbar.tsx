import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, MapPin, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { SOCIAL_LINKS } from '../../data/brand';
import { SocialIcon } from '../common/SocialIcons';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      className={`sticky top-0 z-50 transition-all duration-200 bg-[#FAF7F2] ${
        isScrolled
          ? 'border-b border-[#E6DDD2] py-2.5 sm:py-3 shadow-xs'
          : 'border-b border-[#E6DDD2] py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <button
            id="brand-logo-button"
            onClick={() => handleLinkClick('home')}
            className="flex items-center group cursor-pointer focus:outline-none text-left"
            aria-label="Rinchen's Momo Home"
          >
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#1C1611] group-hover:text-[#B42318] transition-colors">
              RINCHEN&apos;S MOMO
            </span>
          </button>

          {/* Desktop Center Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative py-1 text-[15px] transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#B42318] font-semibold'
                      : 'text-[#1C1611]/85 hover:text-[#B42318] font-medium'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#B42318] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Social Icons + CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Social Icons with real brand SVG */}
            <div className="flex items-center gap-2 text-[#66584C] pr-2 border-r border-[#E6DDD2]">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Rinchen's Momo on WhatsApp"
                title="WhatsApp"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#66584C] hover:text-[#B42318] hover:bg-[#F3ECE1] transition-colors"
              >
                <SocialIcon platform="whatsapp" size={17} />
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Rinchen's Momo on Instagram"
                title="Instagram"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#66584C] hover:text-[#B42318] hover:bg-[#F3ECE1] transition-colors"
              >
                <SocialIcon platform="instagram" size={17} />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Rinchen's Momo on Facebook"
                title="Facebook"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#66584C] hover:text-[#B42318] hover:bg-[#F3ECE1] transition-colors"
              >
                <SocialIcon platform="facebook" size={17} />
              </a>
            </div>

            {/* Secondary CTA: Find Us */}
            <button
              id="nav-quick-directions"
              onClick={() => handleLinkClick('locations')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#1C1611] border border-[#E6DDD2] bg-white rounded-lg hover:border-[#1C1611] transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#B42318]" />
              <span>Find Us</span>
            </button>

            {/* Primary CTA: Explore Menu (Red) */}
            <button
              id="nav-primary-menu-cta"
              onClick={() => handleLinkClick('menu')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#B42318] hover:bg-[#8F1D18] text-white rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Right: Menu button only */}
          <div className="flex lg:hidden items-center">
            <button
              id="mobile-menu-toggle-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#1C1611] rounded-lg hover:bg-[#F3ECE1] transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
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
          className="lg:hidden border-t border-[#E6DDD2] bg-[#FAF7F2] px-5 pt-4 pb-6 space-y-5 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* Menu Items */}
          <div className="flex flex-col space-y-1">
            <button
              id="mobile-nav-home"
              onClick={() => handleLinkClick('home')}
              className={`text-left px-3 py-3 rounded-lg text-base min-h-[44px] flex items-center transition-colors ${
                currentPage === 'home'
                  ? 'text-[#B42318] font-bold bg-[#F8E8E5]'
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
                className={`text-left px-3 py-3 rounded-lg text-base min-h-[44px] flex items-center transition-colors ${
                  currentPage === link.page
                    ? 'text-[#B42318] font-bold bg-[#F8E8E5]'
                    : 'text-[#1C1611] font-medium hover:bg-[#F3ECE1]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social Links Row */}
          <div className="pt-3 border-t border-[#E6DDD2]">
            <p className="text-xs text-[#8B7C6E] font-medium px-3 mb-2.5">
              Connect on Social
            </p>
            <div className="grid grid-cols-3 gap-2">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white border border-[#E6DDD2] text-[#1C1611] text-xs font-semibold hover:border-[#B42318] transition-colors min-h-[44px]"
                aria-label="WhatsApp"
              >
                <SocialIcon platform="whatsapp" size={16} className="text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white border border-[#E6DDD2] text-[#1C1611] text-xs font-semibold hover:border-[#B42318] transition-colors min-h-[44px]"
                aria-label="Instagram"
              >
                <SocialIcon platform="instagram" size={16} className="text-[#E1306C]" />
                <span>Instagram</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-white border border-[#E6DDD2] text-[#1C1611] text-xs font-semibold hover:border-[#B42318] transition-colors min-h-[44px]"
                aria-label="Facebook"
              >
                <SocialIcon platform="facebook" size={16} className="text-[#1877F2]" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-3 border-t border-[#E6DDD2] flex flex-col gap-2.5">
            <button
              id="mobile-drawer-explore-menu"
              onClick={() => handleLinkClick('menu')}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#B42318] text-white font-semibold text-sm transition-colors min-h-[44px] cursor-pointer"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="mobile-drawer-find-us"
              onClick={() => handleLinkClick('locations')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-[#E6DDD2] bg-white text-[#1C1611] font-semibold text-xs transition-colors min-h-[44px] cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#B42318]" />
              <span>Find Us (Lake Market &amp; Entally)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
