import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { PageRoute } from '../../types';

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[82vh] sm:min-h-[86vh] lg:min-h-[88vh] flex items-center bg-[#1C1611] overflow-hidden border-b border-[#E6DDD2]"
    >
      {/* Dominant Food Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=2000&q=88"
          alt="Freshly steamed handmade momos in bamboo basket served with house sesame-tomato dip"
          className="w-full h-full object-cover object-[70%_center] sm:object-[center_60%] lg:object-[right_center]"
          loading="eager"
          fetchPriority="high"
        />
        {/* Controlled Directional Scrim — Keeps food subject vibrant while text remains ultra-legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1611]/95 via-[#1C1611]/70 to-transparent sm:bg-gradient-to-r sm:from-[#1C1611]/95 sm:via-[#1C1611]/75 sm:to-transparent lg:w-[65%]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl space-y-6">
          {/* Eyebrow */}
          <div className="inline-block">
            <span className="text-xs sm:text-[13px] font-semibold tracking-[0.14em] uppercase text-[#FAF7F2]/90 border-b border-[#B42318] pb-1">
              KOLKATA&apos;S MOMO KITCHEN
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-[40px] sm:text-[54px] lg:text-[68px] font-extrabold text-[#FAF7F2] leading-[1.0] sm:leading-[0.98] tracking-[-0.035em]">
            Some stories<br />
            <span className="text-[#FAF7F2]">are folded by hand.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-[19px] text-[#D4C7BA] font-normal leading-[1.6] max-w-lg">
            Recipes that travelled from home,<br className="hidden sm:inline" />
            and found a new table in Kolkata.
          </p>

          {/* Action CTAs */}
          <div className="pt-3 flex flex-wrap items-center gap-3.5 sm:gap-4">
            {/* Primary CTA (Dominant Red) */}
            <button
              id="hero-primary-menu-btn"
              onClick={() => onNavigate('menu')}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 h-12 sm:h-13 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white font-semibold text-sm sm:text-base transition-all duration-150 cursor-pointer shadow-sm hover:shadow-md"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Secondary CTA (Subtle Border) */}
            <button
              id="hero-secondary-find-btn"
              onClick={() => onNavigate('locations')}
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 h-12 sm:h-13 rounded-lg border border-white/40 hover:border-white text-[#FAF7F2] hover:bg-white/10 font-semibold text-sm sm:text-base transition-all duration-150 cursor-pointer backdrop-blur-xs"
            >
              <MapPin className="w-4 h-4 text-[#B42318]" />
              <span>Find Us</span>
              <span className="text-xs text-[#D4C7BA]">→</span>
            </button>
          </div>

          {/* Verified Quick Proofs */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#D4C7BA]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B42318]" />
              <span>Lake Market Dine-In (35 Seats)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B42318]" />
              <span>Entally Takeaway &amp; Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B42318]" />
              <span>Natural Beetroot &amp; Spinach Colors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
