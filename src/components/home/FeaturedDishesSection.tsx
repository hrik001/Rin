import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { PageRoute } from '../../types';
import { MENU_ITEMS } from '../../data/brand';

interface FeaturedDishesSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FeaturedDishesSection: React.FC<FeaturedDishesSectionProps> = ({ onNavigate }) => {
  const featured = MENU_ITEMS.filter((item) => item.isSignature || item.isPopular).slice(0, 6);

  return (
    <section id="featured-dishes-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E6DDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-eyebrow text-[#B42318]">
              The Daily Steamer
            </span>
            <h2 className="text-h2 text-[#1C1611]">
              Featured Dishes
            </h2>
            <p className="text-body text-[#66584C] max-w-xl">
              Hand-rolled daily in small batches with Himalayan mountain spices, thin wrappers, and stone-ground sesame achar.
            </p>
          </div>

          <button
            id="view-all-dishes-btn"
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white text-xs font-semibold transition-colors self-start md:self-auto cursor-pointer shadow-xs"
          >
            <span>View Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.id}
              id={`featured-dish-${item.id}`}
              className="group bg-white rounded-xl border border-[#E6DDD2] overflow-hidden flex flex-col justify-between hover:border-[#B42318]/50 transition-all duration-200"
            >
              {/* Image Container */}
              <div className="aspect-16/10 relative overflow-hidden bg-[#251F1A]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  loading="lazy"
                />

                {/* Dietary Badge */}
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 shadow-xs">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      item.dietary === 'veg' ? 'bg-emerald-600' : 'bg-[#B42318]'
                    }`}
                  />
                  <span className="text-[#1C1611] font-semibold">
                    {item.dietary === 'veg' ? 'Veg' : 'Non-Veg'}
                  </span>
                </div>

                {/* Signature Tag */}
                {item.isSignature && (
                  <div className="absolute top-3 right-3 bg-[#B42318] text-white px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide">
                    Signature
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-bold text-[#1C1611] group-hover:text-[#B42318] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-sm font-extrabold text-[#1C1611] shrink-0">
                      {item.priceNote || (item.price ? `₹${item.price}` : '')}
                    </span>
                  </div>

                  <span className="text-[11px] font-semibold text-[#B42318] block">
                    {item.categoryLabel}
                  </span>

                  <p className="text-body-sm text-[#66584C] leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6DDD2] flex items-center justify-between text-xs text-[#8B7C6E]">
                  <span className="bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#E6DDD2] font-medium">
                    {item.category === 'signature' || item.category === 'momos' ? 'Plate of 6' : 'Individual Serving'}
                  </span>
                  {item.spiciness && item.spiciness > 1 && (
                    <span className="flex items-center gap-1 text-[#B42318] font-medium">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{item.spiciness === 3 ? 'Fiery' : 'Spicy'}</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner to Menu */}
        <div className="mt-10 p-5 rounded-xl bg-[#F3ECE1] border border-[#E6DDD2] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-bold text-sm text-[#1C1611]">
              Looking for steamed, kothey, cheese, or jhol momos?
            </p>
            <p className="text-xs text-[#66584C] mt-0.5">
              Explore our full digital menu with complete dietary details and pricing.
            </p>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="shrink-0 px-5 py-2.5 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Open Digital Menu →
          </button>
        </div>
      </div>
    </section>
  );
};
