import React from 'react';
import { UtensilsCrossed, MapPin, Instagram, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO } from '../../data/brand';

interface FinalCtaSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section id="final-cta-section" className="py-20 bg-[#1C1611] text-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-md bg-[#2B231B] text-xs font-medium text-[#F5C842]">
          Lake Market & Entally · Kolkata
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
          Your next momo stop is in Kolkata.
        </h2>

        <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl mx-auto leading-relaxed">
          Join us for hand-pleated rose momos, fragrant thukpa bowls, crisp kothey, and authentic Himalayan warmth.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <button
            id="final-cta-explore-menu"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore the Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="final-cta-find-locations"
            onClick={() => onNavigate('locations')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2B231B] hover:bg-[#382E24] text-[#FAF7F2] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#F5C842]" />
            <span>Find Our Outlets</span>
          </button>

          <a
            id="final-cta-instagram"
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg text-xs font-semibold text-[#D4C7BA] hover:text-[#FAF7F2] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#F5C842]" />
            <span>{BRAND_INFO.instagramHandle}</span>
          </a>
        </div>

        <p className="text-xs text-[#9E8E81] pt-4">
          Lake Market Dine-In (1:30 PM – 11:00 PM) · Entally Kitchen (12:30 PM – 10:30 PM) · Walk-ins welcome
        </p>
      </div>
    </section>
  );
};
