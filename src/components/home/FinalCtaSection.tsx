import React from 'react';
import { UtensilsCrossed, MapPin, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { SOCIAL_LINKS } from '../../data/brand';
import { SocialIcon } from '../common/SocialIcons';

interface FinalCtaSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onNavigate }) => {
  return (
    <section id="final-cta-section" className="py-20 bg-[#1C1611] text-[#FAF7F2] relative border-b border-[#251F1A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="inline-block px-3 py-1 rounded-md bg-[#251F1A] text-xs font-semibold text-[#D4C7BA] border border-[#382D23]">
          Lake Market &amp; Entally · Kolkata
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF7F2]">
          Your next momo stop is in Kolkata.
        </h2>

        <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl mx-auto leading-relaxed">
          Join us for hand-pleated rose momos, fragrant thukpa bowls, crisp kothey, and authentic Himalayan warmth.
        </p>

        <div className="pt-3 flex flex-wrap items-center justify-center gap-3.5">
          {/* Primary CTA */}
          <button
            id="final-cta-explore-menu"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Explore the Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Secondary CTA */}
          <button
            id="final-cta-find-locations"
            onClick={() => onNavigate('locations')}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-lg bg-[#251F1A] hover:bg-[#382D23] text-[#FAF7F2] border border-[#382D23] font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#B42318]" />
            <span>Find Our Outlets</span>
          </button>

          {/* WhatsApp Action */}
          <a
            id="final-cta-whatsapp"
            href={SOCIAL_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-[#251F1A] hover:bg-[#382D23] text-xs font-semibold text-[#D4C7BA] hover:text-[#FAF7F2] border border-[#382D23] transition-colors"
          >
            <SocialIcon platform="whatsapp" size={16} className="text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        <p className="text-xs text-[#8B7C6E] pt-4">
          Lake Market Dine-In (1:30 PM – 11:00 PM) · Entally Hub (12:30 PM – 10:30 PM) · Walk-ins welcome
        </p>
      </div>
    </section>
  );
};
