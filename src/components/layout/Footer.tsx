import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { PageRoute } from '../../types';
import { SOCIAL_LINKS, OUTLETS } from '../../data/brand';
import { SocialIcon } from '../common/SocialIcons';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="brand-footer" className="bg-[#1C1611] text-[#FAF7F2] pt-16 pb-20 border-t border-[#251F1A]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2E241C]">
          {/* Column 1: Brand & Emotional Description (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-2xl font-extrabold tracking-tight text-[#FAF7F2] block">
              RINCHEN&apos;S MOMO
            </span>
            <p className="text-sm sm:text-[15px] text-[#D4C7BA] leading-relaxed max-w-sm font-normal">
              Hand-folded momos, Himalayan comfort, and a table in Kolkata.
            </p>
            <p className="text-xs text-[#8B7C6E] leading-relaxed max-w-sm">
              Authentic Sikkimese and Tibetan food craft by Rinchen Wangdi Bhutia. Rolled thin, naturally colored, and steamed to order.
            </p>
          </div>

          {/* Column 2: Explore (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-[#D4C7BA]">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-[#B42318] transition-colors cursor-pointer text-left font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('menu'); scrollToTop(); }}
                  className="hover:text-[#B42318] transition-colors cursor-pointer text-left font-medium"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('story'); scrollToTop(); }}
                  className="hover:text-[#B42318] transition-colors cursor-pointer text-left font-medium"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('locations'); scrollToTop(); }}
                  className="hover:text-[#B42318] transition-colors cursor-pointer text-left font-medium"
                >
                  Locations
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="hover:text-[#B42318] transition-colors cursor-pointer text-left font-medium"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Visit (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
              Visit
            </h3>
            <div className="space-y-4 text-xs">
              {OUTLETS.map((outlet) => (
                <div key={outlet.id} className="space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-sm text-[#FAF7F2]">
                    <MapPin className="w-3.5 h-3.5 text-[#B42318] shrink-0" />
                    <span>{outlet.name}</span>
                  </div>
                  <p className="text-[#8B7C6E] pl-5 leading-snug">
                    {outlet.address}
                  </p>
                  <p className="text-[#8B7C6E] pl-5 text-[11px]">
                    {outlet.timings} · {outlet.daysOpen}
                  </p>
                  <div className="pl-5 pt-0.5">
                    <a
                      href={outlet.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-[#B42318] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Directions</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Follow (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#FAF7F2]">
              Follow
            </h3>
            <p className="text-xs text-[#8B7C6E]">
              Daily kitchen videos, behind-the-scenes momo folds, and updates.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                title="Chat on WhatsApp"
                className="w-10 h-10 rounded-lg bg-[#251F1A] border border-[#382D23] flex items-center justify-center text-[#D4C7BA] hover:text-[#B42318] hover:border-[#B42318] transition-all cursor-pointer"
              >
                <SocialIcon platform="whatsapp" size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Follow on Instagram"
                className="w-10 h-10 rounded-lg bg-[#251F1A] border border-[#382D23] flex items-center justify-center text-[#D4C7BA] hover:text-[#B42318] hover:border-[#B42318] transition-all cursor-pointer"
              >
                <SocialIcon platform="instagram" size={18} />
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Follow on Facebook"
                className="w-10 h-10 rounded-lg bg-[#251F1A] border border-[#382D23] flex items-center justify-center text-[#D4C7BA] hover:text-[#B42318] hover:border-[#B42318] transition-all cursor-pointer"
              >
                <SocialIcon platform="facebook" size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Area */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B7C6E]">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© 2026 Rinchen&apos;s Momo.</span>
            <span>·</span>
            <span>Kolkata, West Bengal, India</span>
          </div>

          <button
            id="back-to-top-button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#D4C7BA] hover:text-[#B42318] transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
