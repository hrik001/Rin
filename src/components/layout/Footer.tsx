import React from 'react';
import { Instagram, MapPin, Clock, ArrowUp, ExternalLink, Utensils, Heart } from 'lucide-react';
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
    <footer id="brand-footer" className="bg-[#1A130E] text-[#FAF7F2] pt-16 pb-24 md:pb-16 border-t border-[#33261D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#33261D]">
          {/* Col 1: Brand & Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif-heading text-2xl sm:text-3xl font-bold tracking-tight text-[#FAF7F2]">
                RINCHEN&apos;S MOMO
              </span>
              <span className="px-2 py-0.5 text-[10px] uppercase font-mono font-medium tracking-wider bg-[#F5C842] text-[#1A130E] rounded">
                Kolkata
              </span>
            </div>
            
            <p className="text-sm sm:text-base text-[#D4C7BA] leading-relaxed max-w-md font-sans-body">
              {BRAND_INFO.tagline} Rooted in authentic Sikkimese and Himalayan craft, 
              bringing slow-steamed handmade momos, naturally coloured Rose Momos, and heartfelt hospitality to Kolkata.
            </p>

            <div className="pt-2">
              <a
                id="footer-instagram-link"
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#8C2223] hover:bg-[#A81E16] text-[#FAF7F2] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#F5C842]" />
                <span>Follow {BRAND_INFO.instagramHandle}</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
              <p className="text-xs text-[#9E8E81] mt-2 font-mono">
                {BRAND_INFO.communityStats}
              </p>
            </div>
          </div>

          {/* Col 2: Outlets (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F5C842]">
              Our Kolkata Locations
            </h4>
            <div className="space-y-4 text-xs">
              {OUTLETS.map((outlet) => (
                <div key={outlet.id} className="p-3 rounded-lg bg-[#241C15] border border-[#3A2E24] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm text-[#FAF7F2]">
                      {outlet.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#FAF7F2]/10 text-[#F5C842]">
                      {outlet.serviceType}
                    </span>
                  </div>
                  <p className="text-[#B8A89A] flex items-start gap-1.5 leading-snug">
                    <MapPin className="w-3.5 h-3.5 text-[#F5C842] shrink-0 mt-0.5" />
                    <span>{outlet.address}</span>
                  </p>
                  <p className="text-[#9E8E81] flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#F5C842]" />
                    <span>{outlet.timings} ({outlet.daysOpen})</span>
                  </p>
                  <div className="pt-1 flex items-center gap-3">
                    <a
                      href={outlet.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F5C842] hover:underline flex items-center gap-1"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    {outlet.zomatoUrl && (
                      <a
                        href={outlet.zomatoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#D4C7BA] hover:text-[#FAF7F2] hover:underline flex items-center gap-1"
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

          {/* Col 3: Navigation & Discover (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-widest text-[#F5C842]">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-[#D4C7BA]">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('menu'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left"
                >
                  Digital Menu & Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('story'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left"
                >
                  Rinchen&apos;s Story & Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('locations'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left"
                >
                  Outlets & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="hover:text-[#F5C842] transition-colors cursor-pointer text-left"
                >
                  Contact & Collaborations
                </button>
              </li>
            </ul>

            <div className="pt-2">
              <p className="text-[11px] text-[#9E8E81] leading-relaxed">
                <span className="text-[#F5C842] font-semibold">Walk-in Dining:</span> We host guests on a first-come, first-served walk-in basis at Lake Market. No advance booking is required or processed on this website.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8E81]">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Rinchen&apos;s Momo. All rights reserved.</span>
            <span>•</span>
            <span>Founded by Rinchen Wangdi Bhutia, Kolkata.</span>
          </div>

          <button
            id="back-to-top-button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#D4C7BA] hover:text-[#F5C842] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
