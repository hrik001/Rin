import React from 'react';
import { UtensilsCrossed, MapPin, Instagram, ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO } from '../../data/brand';

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero-section"
      className="bg-[#FAF7F2] pt-10 pb-16 lg:pt-16 lg:pb-20 border-b border-[#E7DFD4]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Editorial Content (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F3ECE1] border border-[#E7DFD4] text-xs font-semibold text-[#8C2223] uppercase tracking-wider">
              <span>Sikkimese & Himalayan Craft · Kolkata</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-display text-[#1C1611]">
              Handmade momos.
              <span className="block text-[#8C2223]">
                Big Himalayan soul.
              </span>
            </h1>

            {/* Editorial Subtitle */}
            <p className="text-body-lg text-[#66584C] content-readable">
              Folded by hand daily in Kolkata. Real Himalayan craft, unhurried mountain seasoning, and our signature naturally tinted Rose Momos crafted by founder <strong className="text-[#1C1611] font-semibold">Rinchen Wangdi Bhutia</strong>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-primary-menu-btn"
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] font-semibold text-sm transition-colors cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                id="hero-secondary-find-btn"
                onClick={() => onNavigate('locations')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#E7DFD4] bg-white hover:border-[#1C1611] text-[#1C1611] font-semibold text-sm transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#8C2223]" />
                <span>Find Us</span>
              </button>

              <a
                id="hero-instagram-btn"
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-3 text-xs font-medium text-[#66584C] hover:text-[#8C2223] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#8C2223]" />
                <span>Follow {BRAND_INFO.instagramHandle}</span>
              </a>
            </div>

            {/* Grounded Highlights Strip */}
            <div className="pt-6 border-t border-[#E7DFD4] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-0.5">
                <p className="font-semibold text-sm text-[#1C1611]">The Rose Momo</p>
                <p className="text-[#66584C]">Natural beetroot & spinach extracts</p>
              </div>

              <div className="space-y-0.5">
                <p className="font-semibold text-sm text-[#1C1611]">Lake Market Dine-In</p>
                <p className="text-[#66584C]">35-seat walk-in restaurant</p>
              </div>

              <div className="space-y-0.5">
                <p className="font-semibold text-sm text-[#1C1611]">Entally Dispatch</p>
                <p className="text-[#66584C]">Takeaway & hot delivery hub</p>
              </div>
            </div>
          </div>

          {/* Visual Showcase (Col 5) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#E7DFD4] bg-white shadow-sm">
              <div className="aspect-4/3 sm:aspect-square relative overflow-hidden bg-[#251E17]">
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
                  alt="Rinchen's signature handmade momos steaming in bamboo basket with red tomato sesame dip"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Clean caption badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#1C1611]/90 backdrop-blur-xs text-white p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-xs text-[#FAF7F2]">Fresh from the Bamboo Steamer</p>
                    <p className="text-[11px] text-[#D4C7BA]">Hand-rolled thin skins, bursting with broth</p>
                  </div>
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-xs font-semibold text-[#F5C842] hover:underline shrink-0 ml-2"
                  >
                    View Menu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
