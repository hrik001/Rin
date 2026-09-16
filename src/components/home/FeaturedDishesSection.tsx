import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';
import { MENU_ITEMS } from '../../data/brand';

interface FeaturedDishesSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FeaturedDishesSection: React.FC<FeaturedDishesSectionProps> = ({ onNavigate }) => {
  // Select top 6 curated highlights
  const featured = MENU_ITEMS.filter(
    (item) => item.isSignature || item.id === 'chicken-kothey-momo' || item.id === 'chicken-faley' || item.id === 'hakka-non-veg-meifoon'
  ).slice(0, 6);

  return (
    <section id="featured-dishes-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E7DFD4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-eyebrow text-[#8C2223]">
              Featured Dishes
            </span>
            <h2 className="text-h2 text-[#1C1611]">
              Dishes You Shouldn&apos;t Miss
            </h2>
            <p className="text-body text-[#66584C] max-w-xl">
              From our famous rose petal folds to crackling pan-fried kothey and comforting Tibetan meifoon.
            </p>
          </div>

          <button
            id="featured-view-all-menu-btn"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white border border-[#E7DFD4] hover:border-[#1C1611] text-xs font-semibold text-[#1C1611] transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8C2223]" />
          </button>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E7DFD4] overflow-hidden flex flex-col group transition-all"
            >
              {/* Image box */}
              <div className="aspect-16/10 relative overflow-hidden bg-[#251E17]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* Dietary badge */}
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 shadow-xs">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.dietary === 'veg' ? 'bg-emerald-600' : 'bg-[#8C2223]'
                    }`}
                  />
                  <span className="text-[#1C1611]">
                    {item.dietary === 'veg' ? 'Veg' : 'Non-Veg'}
                  </span>
                </div>

                {/* Signature Tag */}
                {item.isSignature && (
                  <div className="absolute top-3 right-3 bg-[#F5C842] text-[#1C1611] px-2.5 py-1 rounded-md text-[11px] font-semibold">
                    Signature
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-[#1C1611] group-hover:text-[#8C2223] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#66584C] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights tags */}
                {item.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.highlights.slice(0, 2).map((hl, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-[#F3ECE1] text-[#66584C]"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer of Card */}
                <div className="pt-3 border-t border-[#E7DFD4] flex items-center justify-between text-xs">
                  <span className="font-semibold text-sm text-[#1C1611]">
                    {item.priceNote || `₹${item.price}`}
                  </span>
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-[#8C2223] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View on Menu</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-10 p-6 rounded-xl bg-[#1C1611] text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base font-bold text-[#FAF7F2]">
              Explore Wok Meifoon, Pan-Fried Faley & Mountain Soups
            </h4>
            <p className="text-xs text-[#D4C7BA]">
              Our full menu features authentic Himalayan, Tibetan, and Kolkata Chinese specialties.
            </p>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] text-xs font-semibold transition-colors cursor-pointer"
          >
            Explore Complete Menu →
          </button>
        </div>
      </div>
    </section>
  );
};
