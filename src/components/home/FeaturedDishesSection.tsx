import React from 'react';
import { UtensilsCrossed, ArrowRight, Flame, Sparkles } from 'lucide-react';
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
    <section id="featured-dishes-section" className="py-16 sm:py-24 bg-[#F3ECE1]/60 border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DFD3] text-xs font-mono text-[#8C2223] font-semibold mb-2">
              <UtensilsCrossed className="w-3.5 h-3.5 text-[#F5C842]" />
              <span>Handcrafted Selections</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1611]">
              Dishes You Can&apos;t Miss
            </h2>
            <p className="text-sm sm:text-base text-[#66584C] mt-1 max-w-xl">
              From our famous rose petal folds to crackling pan-fried kothey and hearty Tibetan noodle bowls.
            </p>
          </div>

          <button
            id="featured-view-all-menu-btn"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-[#1C1611]/20 hover:border-[#1C1611] text-xs font-semibold uppercase tracking-wider text-[#1C1611] transition-all cursor-pointer self-start md:self-auto shadow-xs"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8C2223]" />
          </button>
        </div>

        {/* Food Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E8DFD3] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Image box */}
              <div className="aspect-16/10 relative overflow-hidden bg-[#241C15]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Dietary badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1 shadow-xs">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.dietary === 'veg' ? 'bg-green-600' : 'bg-[#8C2223]'
                    }`}
                  />
                  <span className="uppercase text-[#1C1611]">
                    {item.dietary === 'veg' ? 'Pure Veg' : 'Non-Veg'}
                  </span>
                </div>

                {/* Signature Tag */}
                {item.isSignature && (
                  <div className="absolute top-3 right-3 bg-[#F5C842] text-[#1C1611] px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider shadow-xs">
                    Signature
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif-heading font-bold text-lg text-[#1C1611] group-hover:text-[#8C2223] transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#66584C] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Highlights tags */}
                {item.highlights && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.highlights.slice(0, 2).map((hl, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF7F2] text-[#66584C] border border-[#E8DFD3]"
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer of Card */}
                <div className="pt-2 border-t border-[#E8DFD3] flex items-center justify-between text-xs">
                  <span className="text-[#66584C] font-mono text-[11px]">
                    {item.priceNote || item.categoryLabel}
                  </span>
                  <button
                    onClick={() => onNavigate('menu')}
                    className="text-[#8C2223] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1C1611] text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="font-serif-heading text-lg font-bold text-[#FAF7F2]">
              Looking for more? Discover Wok Noodles, Thukpa & Appetizers
            </h4>
            <p className="text-xs text-[#D4C7BA]">
              Our full menu features authentic Himalayan, Tibetan, and Kolkata Chinese specialties.
            </p>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Explore Complete Menu →
          </button>
        </div>
      </div>
    </section>
  );
};
