import React from 'react';
import { PageRoute } from '../../types';

interface BrandIntroSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const BrandIntroSection: React.FC<BrandIntroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="brand-intro-section" className="py-16 sm:py-20 bg-[#F3ECE1] border-b border-[#E6DDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-eyebrow text-[#B42318]">
            Our Story &amp; Craft
          </span>

          <h2 className="text-h2 text-[#1C1611]">
            Rinchen&apos;s Momo started with one kitchen, one steamer, and an obsession with handmade food.
          </h2>

          <p className="text-body-lg text-[#66584C] content-readable pt-1">
            In a city that loves momos deeply, founder <strong className="text-[#1C1611] font-semibold">Rinchen Wangdi Bhutia</strong> set out to make dumplings the way they are prepared in Himalayan homes across Sikkim—with thin translucent wrappers, clean mountain seasoning, and patience at every single fold.
          </p>
        </div>

        {/* 3 Grounded Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white p-6 rounded-xl border border-[#E6DDD2] hover:border-[#B42318]/50 transition-colors">
            <span className="text-xs font-semibold text-[#B42318] uppercase tracking-wider block mb-2">
              The Seasoning
            </span>
            <h3 className="text-base font-bold text-[#1C1611] mb-2">
              Clean Himalayan Seasoning
            </h3>
            <p className="text-body-sm text-[#66584C]">
              Fresh mountain ginger, scallions, coriander, coarse black pepper, and butter. We let the quality of fresh meats and vegetables speak without heavy store pastes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E6DDD2] hover:border-[#B42318]/50 transition-colors">
            <span className="text-xs font-semibold text-[#B42318] uppercase tracking-wider block mb-2">
              The Technique
            </span>
            <h3 className="text-base font-bold text-[#1C1611] mb-2">
              Rolled Thin &amp; Bamboo Steamed
            </h3>
            <p className="text-body-sm text-[#66584C]">
              Every wrapper is rolled individually with small wooden pins to ensure thin edges and no gummy joints. Multi-tiered bamboo baskets allow steam to circulate gently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E6DDD2] hover:border-[#B42318]/50 transition-colors">
            <span className="text-xs font-semibold text-[#B42318] uppercase tracking-wider block mb-2">
              The City
            </span>
            <h3 className="text-base font-bold text-[#1C1611] mb-2">
              Rooted in Kolkata
            </h3>
            <p className="text-body-sm text-[#66584C]">
              From steaming momos in a quiet home kitchen to serving hungry diners at our 35-seat Lake Market restaurant and Entally delivery hub.
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-start">
          <button
            onClick={() => onNavigate('story')}
            className="text-xs font-semibold text-[#B42318] hover:text-[#8F1D18] hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>Read how Rinchen brought Himalayan dumplings to Kolkata</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
