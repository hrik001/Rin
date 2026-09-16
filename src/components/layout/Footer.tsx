import React from 'react';
import { Instagram, ArrowUp, ExternalLink, MapPin } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO, OUTLETS } from '../../data/brand';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="brand-footer" className="bg-[#1C1611] text-[#FAF7F2] pt-16 pb-20 border-t border-[#2E241C]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2E241C]">
          {/* Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FAF7F2] block">
              RINCHEN&apos;S MOMO
            </span>
            <p className="text-base text-[#F5C842] font-medium">
              Handmade momos. Big Himalayan soul.
            </p>
            <p className="text-sm text-[#D4C7BA] leading-relaxed max-w-md font-normal">
              Founded by Rinchen Wangdi Bhutia. Fresh wrappers rolled thin by hand, pure vegetable-extracted colours, and slow-simmered mountain broths served daily in Kolkata.
            </p>

            <div className="pt-2">
              <a
                id="footer-instagram-link"
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#1C1611] bg-[#F5C842] hover:bg-[#E8BC38] rounded-lg transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {BRAND_INFO.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            </div>
          </div>

          {/* Explore Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5C842]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D4C7BA]">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('menu'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left font-medium"
                >
                  Menu & Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('story'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left font-medium"
                >
                  Rinchen&apos;s Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('locations'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left font-medium"
                >
                  Locations & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left font-medium"
                >
                  Contact & Enquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Locations & Outlets (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5C842]">
              Visit Us in Kolkata
            </h4>
            <div className="space-y-3 text-xs">
              {OUTLETS.map((outlet) => (
                <div key={outlet.id} className="p-3.5 rounded-lg bg-[#251E17] border border-[#382D23] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#FAF7F2]">
                      {outlet.name}
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#FAF7F2]/10 text-[#F5C842] font-medium">
                      {outlet.statusBadge}
                    </span>
                  </div>
                  <p className="text-[#B8A89A] flex items-start gap-1.5 leading-snug">
                    <MapPin className="w-3.5 h-3.5 text-[#F5C842] shrink-0 mt-0.5" />
                    <span>{outlet.address}</span>
                  </p>
                  <p className="text-[#9E8E81]">
                    {outlet.timings} · {outlet.daysOpen}
                  </p>
                  <div className="pt-1 flex items-center gap-3">
                    <a
                      href={outlet.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5C842] hover:underline flex items-center gap-1 font-medium"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    {outlet.zomatoUrl && (
                      <a
                        href={outlet.zomatoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D4C7BA] hover:text-[#FAF7F2] hover:underline flex items-center gap-1 font-medium"
                      >
                        <span>Zomato</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8E81]">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Rinchen&apos;s Momo.</span>
            <span>·</span>
            <span>Kolkata, West Bengal, India</span>
          </div>

          <button
            id="back-to-top-button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#D4C7BA] hover:text-[#F5C842] transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
