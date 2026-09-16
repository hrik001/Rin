import React, { useState, useMemo } from 'react';
import { Search, MapPin, Sparkles } from 'lucide-react';
import { MenuCategory, DietaryType, PageRoute } from '../types';
import { MENU_ITEMS } from '../data/brand';

interface MenuPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedDietary, setSelectedDietary] = useState<'all' | DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Items' },
    { id: 'signature', label: 'Rose Momos & Signatures' },
    { id: 'momos', label: 'Handcrafted Momos' },
    { id: 'tibetan-specialties', label: 'Tibetan & Faley' },
    { id: 'noodles-rice', label: 'Noodles & Meifoon' },
    { id: 'soups-starters', label: 'Soups & Appetizers' },
    { id: 'beverages', label: 'Coolers & Tea' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (selectedDietary !== 'all' && item.dietary !== selectedDietary) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesHighlights = item.highlights?.some((h) => h.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesHighlights) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  return (
    <div id="digital-menu-page" className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Header Banner */}
      <div className="bg-[#1C1611] text-[#FAF7F2] py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-eyebrow text-[#D4C7BA] border-b border-[#B42318] pb-1 inline-block">
            Kitchen Menu
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF7F2]">
            The Menu
          </h1>

          <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl leading-relaxed">
            Himalayan momos steamed fresh daily, signature Rose Momos folded with naturally colored dough, pan-fried faley, and comforting Tibetan broths.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#8B7C6E]">
            <span>Lake Market Dine-In (1:30 PM – 11:00 PM)</span>
            <span>•</span>
            <span>Entally Delivery Hub (12:30 PM – 10:30 PM)</span>
          </div>
        </div>
      </div>

      {/* Sticky Control Bar: Search & Dietary Switch */}
      <div className="sticky top-[61px] z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E6DDD2] py-3.5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#66584C]" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dumplings, broth, thukpa..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white border border-[#E6DDD2] text-sm text-[#1C1611] placeholder-[#8B7C6E] focus:border-[#B42318] focus:outline-none transition-colors"
              />
            </div>

            {/* Dietary Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#66584C]">Dietary:</span>
              <div className="flex bg-white p-1 rounded-lg border border-[#E6DDD2] text-xs">
                <button
                  onClick={() => setSelectedDietary('all')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer font-medium ${
                    selectedDietary === 'all'
                      ? 'bg-[#1C1611] text-white'
                      : 'text-[#66584C] hover:text-[#1C1611]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedDietary('veg')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer font-medium ${
                    selectedDietary === 'veg'
                      ? 'bg-emerald-700 text-white'
                      : 'text-[#66584C] hover:text-[#1C1611]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Veg</span>
                </button>
                <button
                  onClick={() => setSelectedDietary('non-veg')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer font-medium ${
                    selectedDietary === 'non-veg'
                      ? 'bg-[#B42318] text-white'
                      : 'text-[#66584C] hover:text-[#1C1611]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-rose-300" />
                  <span>Non-Veg</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#B42318] text-white font-semibold'
                    : 'bg-white text-[#66584C] border border-[#E6DDD2] hover:border-[#1C1611]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-6 text-xs text-[#66584C]">
          <span>Showing {filteredItems.length} dishes</span>
          {(searchQuery || selectedCategory !== 'all' || selectedDietary !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDietary('all');
              }}
              className="text-[#B42318] hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-[#E6DDD2] space-y-3">
            <p className="text-base font-bold text-[#1C1611]">No dishes match your filter</p>
            <p className="text-xs text-[#66584C]">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDietary('all');
              }}
              className="px-4 py-2 rounded-lg bg-[#B42318] text-white font-semibold text-xs transition-colors cursor-pointer"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                id={`dish-card-${dish.id}`}
                className="bg-white rounded-xl border border-[#E6DDD2] overflow-hidden flex flex-col justify-between hover:border-[#B42318]/50 transition-all duration-200"
              >
                <div>
                  {/* Food Image */}
                  <div className="aspect-16/10 relative overflow-hidden bg-[#251F1A]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />

                    {/* Dietary badge */}
                    <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 shadow-xs">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          dish.dietary === 'veg' ? 'bg-emerald-600' : 'bg-[#B42318]'
                        }`}
                      />
                      <span className="text-[#1C1611] font-semibold">
                        {dish.dietary === 'veg' ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    {/* Signature / Rose Momo Badges */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                      {dish.isRoseMomo && (
                        <span className="bg-[#B42318] text-white px-2.5 py-1 rounded-md text-[11px] font-semibold flex items-center gap-1 shadow-xs">
                          <Sparkles className="w-3 h-3" />
                          <span>Rose Momo</span>
                        </span>
                      )}
                      {dish.isSignature && !dish.isRoseMomo && (
                        <span className="bg-[#1C1611] text-white px-2.5 py-1 rounded-md text-[11px] font-semibold">
                          Signature
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-2.5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-[#B42318] font-semibold">
                          {dish.categoryLabel}
                        </span>
                        <h3 className="font-bold text-base text-[#1C1611] leading-snug mt-0.5">
                          {dish.name}
                        </h3>
                      </div>
                    </div>

                    <p className="text-body-sm text-[#66584C] line-clamp-2">
                      {dish.description}
                    </p>

                    {/* Highlights tags */}
                    {dish.highlights && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {dish.highlights.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] px-2 py-0.5 rounded bg-[#F3ECE1] text-[#66584C]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Pairing */}
                    {dish.pairing && (
                      <div className="text-[11px] text-[#66584C] bg-[#FAF7F2] p-2 rounded-md border border-[#E6DDD2] flex items-center gap-1.5">
                        <span className="font-medium text-[#1C1611]">Best Paired:</span>
                        <span>{dish.pairing}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer of card */}
                <div className="px-5 pb-4 pt-3 border-t border-[#E6DDD2] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-base font-extrabold text-[#1C1611]">
                      {dish.priceNote || `₹${dish.price}`}
                    </span>
                    <span className="text-[11px] text-[#8B7C6E] block">
                      Lake Market &amp; Entally
                    </span>
                  </div>

                  <button
                    onClick={() => onNavigate('locations')}
                    className="text-[#B42318] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Outlets</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Informational Notes */}
        <div className="mt-14 p-6 rounded-xl bg-[#F3ECE1] border border-[#E6DDD2] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#66584C]">
          <div>
            <h4 className="font-bold text-sm text-[#1C1611] mb-1">
              Natural Colorings
            </h4>
            <p className="leading-relaxed">
              Our signature colored wrappers use 100% boiled beetroot juice and fresh spinach puree. No synthetic dyes or artificial pastes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#1C1611] mb-1">
              Lake Market Seating
            </h4>
            <p className="leading-relaxed">
              Our 35-seat dining room behind Lake Mall welcomes walk-in guests daily from 1:30 PM to 11:00 PM. No advance reservations required.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-[#1C1611] mb-1">
              Delivery Across Kolkata
            </h4>
            <p className="leading-relaxed">
              Fresh hot orders can be delivered across Kolkata via Swiggy and Zomato from our Entally dispatch kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
