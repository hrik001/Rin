import React from 'react';
import { UtensilsCrossed, MapPin, Instagram, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO, OUTLETS } from '../../data/brand';

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden bg-[#FAF7F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E8DFD3]"
    >
      {/* Subtle organic background tint */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#F5C842]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#8C2223]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE1] border border-[#E7DFD4] text-xs font-mono text-[#8C2223] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C842]" />
              <span>Sikkimese & Himalayan Heritage · Kolkata</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#1C1611] leading-[1.1]">
                Handmade momos.
                <span className="block text-[#8C2223] italic font-serif">
                  Big Himalayan soul.
                </span>
              </h1>
            </div>

            {/* Editorial Subtitle */}
            <p className="text-base sm:text-lg text-[#66584C] font-sans-body leading-relaxed max-w-xl">
              From a quiet Kolkata home kitchen to social media fame and physical outlets in Entally and Lake Market. 
              Folded by hand, steamed fresh in bamboo baskets, and served with fiery mountain achar by founder <strong className="text-[#1C1611] font-semibold">Rinchen Wangdi Bhutia</strong>.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                id="hero-primary-menu-btn"
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] font-semibold text-sm sm:text-base tracking-wide shadow-sm hover:shadow transition-all cursor-pointer"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Explore the Menu</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </button>

              <button
                id="hero-secondary-find-btn"
                onClick={() => onNavigate('locations')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#1C1611]/25 hover:border-[#1C1611] bg-white/80 hover:bg-white text-[#1C1611] font-semibold text-sm sm:text-base tracking-wide transition-all cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#8C2223]" />
                <span>Find Us in Kolkata</span>
              </button>

              <a
                id="hero-instagram-btn"
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#66584C] hover:text-[#8C2223] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#8C2223]" />
                <span>Follow {BRAND_INFO.instagramHandle}</span>
              </a>
            </div>

            {/* Trust Badges Strip */}
            <div className="pt-6 border-t border-[#E8DFD3] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C2223] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1611]">Signature Rose Momo</p>
                  <p className="text-[#66584C] text-[11px]">Beetroot & spinach purées</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8C2223] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1611]">Lake Market Dine-In</p>
                  <p className="text-[#66584C] text-[11px]">35-seater cozy restaurant</p>
                </div>
              </div>

              <div className="flex items-start gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#8C2223] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1C1611]">750K+ Community</p>
                  <p className="text-[#66584C] text-[11px]">Loved across social media</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase / Image Hero (Col 5) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative framing */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-[#F5C842]/30 via-transparent to-[#8C2223]/20 blur-md transform -rotate-1" />

              {/* Main Food Card */}
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#E8DFD3] bg-white">
                <div className="aspect-4/3 sm:aspect-square relative overflow-hidden bg-[#241C15]">
                  <img
                    src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
                    alt="Rinchen's signature handmade momos steaming in bamboo basket with red tomato sesame dip"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  
                  {/* Floating badge top-left */}
                  <div className="absolute top-4 left-4 bg-[#1C1611]/90 text-[#FAF7F2] backdrop-blur-md px-3 py-1.5 rounded-md text-xs font-mono flex items-center gap-1.5 border border-white/10 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#F5C842]"></span>
                    <span>Hand-Folded Daily</span>
                  </div>

                  {/* Floating badge bottom-right */}
                  <div className="absolute bottom-4 right-4 bg-[#8C2223] text-white px-3 py-1.5 rounded-md text-xs font-semibold shadow-lg">
                    Meet the Rose Momo →
                  </div>
                </div>

                {/* Sub-card info bar */}
                <div className="p-4 bg-[#FAF7F2] border-t border-[#E8DFD3] flex items-center justify-between">
                  <div>
                    <h3 className="font-serif-heading font-bold text-sm text-[#1C1611]">
                      The Signature Rose Momo
                    </h3>
                    <p className="text-xs text-[#66584C]">
                      Hand-pleated into blooming rose petals with natural vegetable dough.
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('menu')}
                    className="shrink-0 text-xs font-semibold text-[#8C2223] hover:underline"
                  >
                    View
                  </button>
                </div>
              </div>

              {/* Secondary floating accent card */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-lg border border-[#E8DFD3] items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-[#F5C842]/20 flex items-center justify-center text-[#8C2223] font-bold text-sm">
                  35
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1611]">Lake Market Dine-In</p>
                  <p className="text-[11px] text-[#66584C]">Walk-in tables · 1:30 PM to 11 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
