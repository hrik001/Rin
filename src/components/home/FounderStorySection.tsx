import React from 'react';
import { Sparkles, ArrowRight, Instagram, Quote } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO } from '../../data/brand';

interface FounderStorySectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FounderStorySection: React.FC<FounderStorySectionProps> = ({ onNavigate }) => {
  return (
    <section id="founder-story-section" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Content (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3ECE1] text-xs font-mono text-[#8C2223] font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#F5C842]" />
              <span>Meet the Founder & Creator</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1611]">
                &ldquo;I started by steaming momos for empty tables. Kolkata taught me perseverance.&rdquo;
              </h2>
              <p className="text-sm font-mono text-[#8C2223] font-semibold">
                — Rinchen Wangdi Bhutia, Founder
              </p>
            </div>

            <p className="text-base text-[#66584C] font-sans-body leading-relaxed">
              In late 2023, Rinchen left the security of a corporate desk in Kolkata to pursue what made him feel truly alive:
              the honest, comforting Himalayan recipes he grew up with in Sikkim. In the first weeks of his small home cloud kitchen,
              orders were virtually zero. Rather than quitting, Rinchen walked the streets offering free momos to neighbors,
              began filming candid cooking videos showing how each wrapper was folded, and worked through the night experimenting
              with natural beetroot and spinach colors to create the signature Rose Momo.
            </p>

            <p className="text-base text-[#66584C] font-sans-body leading-relaxed">
              When his reels resonated with food lovers across India, the enthusiasm was electric. That groundswell of support
              led to his first quick-service counter at Entally Market in June 2024, followed by a warm 35-seat dine-in restaurant
              behind Lake Mall.
            </p>

            {/* Timeline Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 bg-white rounded-lg border border-[#E8DFD3]">
                <p className="text-xs font-mono font-bold text-[#8C2223]">2023</p>
                <p className="text-xs font-semibold text-[#1C1611] mt-0.5">Home Cloud Kitchen</p>
                <p className="text-[11px] text-[#66584C]">First steamer in Kolkata</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E8DFD3]">
                <p className="text-xs font-mono font-bold text-[#8C2223]">June 2024</p>
                <p className="text-xs font-semibold text-[#1C1611] mt-0.5">Entally QSR</p>
                <p className="text-[11px] text-[#66584C]">Physical counter debut</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-[#E8DFD3] col-span-2 sm:col-span-1">
                <p className="text-xs font-mono font-bold text-[#8C2223]">Late 2024</p>
                <p className="text-xs font-semibold text-[#1C1611] mt-0.5">Lake Market Dine-In</p>
                <p className="text-[11px] text-[#66584C]">35-seater restaurant</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="read-full-story-btn"
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1C1611] hover:bg-[#8C2223] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Read Full Founder Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C2223] hover:underline"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow Rinchen&apos;s journey on Instagram</span>
              </a>
            </div>
          </div>

          {/* Visual Showcase (Col 5) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="aspect-3/4 rounded-2xl overflow-hidden shadow-xl border border-[#E8DFD3] bg-[#241C15] relative">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
                  alt="Founder Rinchen Wangdi Bhutia preparing fresh handmade momos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1611]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#F5C842]">
                    Founder & Food Creator
                  </span>
                  <h3 className="font-serif-heading text-2xl font-bold">
                    Rinchen Wangdi Bhutia
                  </h3>
                  <p className="text-xs text-gray-300 leading-snug">
                    Originally from Sikkim. Brought authentic generational Himalayan cooking to the heart of Kolkata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
