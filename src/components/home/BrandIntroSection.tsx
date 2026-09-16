import React from 'react';
import { Sparkles, Mountain, Utensils, Heart } from 'lucide-react';
import { PageRoute } from '../../types';

interface BrandIntroSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const BrandIntroSection: React.FC<BrandIntroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="brand-intro-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE1] text-[#8C2223] text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#F5C842]" />
            <span>The Rinchen Philosophy</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1611]">
            What is Rinchen&apos;s Momo?
          </h2>

          <p className="text-base sm:text-lg text-[#66584C] font-sans-body leading-relaxed">
            Rinchen&apos;s Momo is an authentic Himalayan culinary destination founded by{' '}
            <strong className="text-[#1C1611]">Rinchen Wangdi Bhutia</strong>. Born from a quiet home
            cloud kitchen in 2023, the brand brought Sikkim&apos;s generational momo craft to Kolkata
            with honest ingredients, hand-rolled dough, vibrant vegetable colorings, and heartfelt storytelling.
          </p>
        </div>

        {/* 3 Balanced Editorial Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-[#E8DFD3] shadow-xs hover:border-[#8C2223]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center text-[#8C2223] mb-4">
              <Mountain className="w-5 h-5" />
            </div>
            <h3 className="font-serif-heading text-lg font-bold text-[#1C1611] mb-2">
              Sikkimese & Himalayan Roots
            </h3>
            <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
              Recipes inspired by the hills of Sikkim and Darjeeling — where dough is kneaded with care,
              meat is seasoned with mountain ginger and spring onion, and broths are simmered slow.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8DFD3] shadow-xs hover:border-[#8C2223]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center text-[#8C2223] mb-4">
              <Utensils className="w-5 h-5" />
            </div>
            <h3 className="font-serif-heading text-lg font-bold text-[#1C1611] mb-2">
              Folded by Hand, Steamed Fresh
            </h3>
            <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
              No industrial machines or frozen shortcuts. Every single dumpling is rolled paper-thin,
              hand-pleated, and steamed to order in traditional tiered bamboo baskets.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8DFD3] shadow-xs hover:border-[#8C2223]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] flex items-center justify-center text-[#8C2223] mb-4">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-serif-heading text-lg font-bold text-[#1C1611] mb-2">
              Embraced by Kolkata
            </h3>
            <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
              From giving free momos to neighbors when orders were zero to welcoming food lovers into our
              cozy 35-seat Lake Market dining room and Entally express counter.
            </p>
          </div>
        </div>

        {/* Story discovery link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('story')}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#8C2223] hover:underline cursor-pointer"
          >
            <span>Read Rinchen&apos;s full journey from Sikkim to Kolkata</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
