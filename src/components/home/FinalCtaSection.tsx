import React from 'react';
import { UtensilsCrossed, MapPin, Instagram, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO } from '../../data/brand';

interface FinalCtaSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section id="final-cta-section" className="py-20 sm:py-28 bg-[#1A130E] text-[#FAF7F2] relative overflow-hidden">
      {/* Subtle warm glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#8C2223]/25 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#F5C842]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FAF7F2]/10 border border-white/10 text-xs font-mono font-medium text-[#F5C842] uppercase tracking-wider">
          Lake Market & Entally · Kolkata
        </span>

        <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          Your next momo stop is in{' '}
          <span className="text-[#F5C842] italic font-serif">Kolkata.</span>
        </h2>

        <p className="text-base sm:text-lg text-[#D4C7BA] max-w-2xl mx-auto leading-relaxed font-sans-body">
          Come hungry for hand-pleated rose momos, fragrant thukpa, crisp kothey, and the warmth of genuine Himalayan hospitality.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            id="final-cta-explore-menu"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1A130E] font-semibold text-sm sm:text-base tracking-wide transition-colors cursor-pointer shadow-lg"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore the Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="final-cta-find-locations"
            onClick={() => onNavigate('locations')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#241C15] hover:bg-[#2F241C] border border-[#3A2E24] text-[#FAF7F2] font-semibold text-sm sm:text-base tracking-wide transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#F5C842]" />
            <span>Find Our Outlets</span>
          </button>

          <a
            id="final-cta-instagram"
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#D4C7BA] hover:text-[#F5C842] transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>{BRAND_INFO.instagramHandle}</span>
          </a>
        </div>

        <p className="text-xs text-[#9E8E81] pt-6 font-mono">
          Lake Market Dine-in (1:30 PM – 11:00 PM) · Entally Delivery Hub · Walk-in Tables
        </p>
      </div>
    </section>
  );
};
