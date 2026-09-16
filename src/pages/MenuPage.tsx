import React, { useState, useMemo } from 'react';
import { Search, Filter, Flame, Sparkles, ExternalLink, MapPin, ShoppingBag } from 'lucide-react';
import { MenuCategory, DietaryType, PageRoute } from '../types';
import { MENU_ITEMS, OUTLETS } from '../data/brand';

interface MenuPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedDietary, setSelectedDietary] = useState<'all' | DietaryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'all', label: 'All Dishes' },
    { id: 'signature', label: 'Signatures & Rose Momos' },
    { id: 'momos', label: 'Handmade Momos' },
    { id: 'tibetan-specialties', label: 'Tibetan & Faley' },
    { id: 'noodles-rice', label: 'Noodles, Meifoon & Rice' },
    { id: 'soups-starters', label: 'Soups & Appetizers' },
    { id: 'beverages', label: 'Coolers & Tea' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary match
      if (selectedDietary !== 'all' && item.dietary !== selectedDietary) {
        return false;
      }
      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesHighlights = item.highlights?.some(h => h.toLowerCase().includes(query));
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
      <div className="bg-[#1C1611] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#33261D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/10 text-xs font-mono text-[#F5C842]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handmade Fresh Daily</span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            The Digital Menu
          </h1>

          <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl mx-auto font-sans-body">
            Explore authentic Himalayan momos, signature Rose Momos naturally tinted with beetroot and spinach,
            crispy chicken faley, wok-tossed meifoon, and restorative thukpa.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-[#9E8E81] font-mono">
            <span>Dine-In at Lake Market (1:30 PM – 11:00 PM)</span>
            <span>•</span>
            <span>Delivery via Swiggy & Zomato</span>
          </div>
        </div>
      </div>

      {/* Control Bar: Search & Filters */}
      <div className="sticky top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3] py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#66584C]" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search momos, thukpa, noodles, ingredients..."
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-white border border-[#E8DFD3] focus:border-[#8C2223] focus:outline-hidden text-[#1C1611] placeholder-[#9E8E81]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#66584C] hover:text-[#1C1611]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter */}
            <div className="flex items-center gap-2 self-start md:self-auto">
              <span className="text-xs font-mono text-[#66584C] hidden sm:inline">Dietary:</span>
              <div className="inline-flex p-1 rounded-lg bg-white border border-[#E8DFD3] text-xs">
                <button
                  onClick={() => setSelectedDietary('all')}
                  className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                    selectedDietary === 'all'
                      ? 'bg-[#1C1611] text-white font-semibold'
                      : 'text-[#66584C] hover:text-[#1C1611]'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setSelectedDietary('veg')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                    selectedDietary === 'veg'
                      ? 'bg-green-700 text-white font-semibold'
                      : 'text-[#66584C] hover:text-[#1C1611]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Pure Veg</span>
                </button>
                <button
                  onClick={() => setSelectedDietary('non-veg')}
                  className={`px-3 py-1 rounded-md flex items-center gap-1 transition-colors cursor-pointer ${
                    selectedDietary === 'non-veg'
                      ? 'bg-[#8C2223] text-white font-semibold'
                      : 'text-[#66584C] hover:text-[#1C1611]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span>Non-Veg</span>
                </button>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#8C2223] text-white font-semibold shadow-xs'
                    : 'bg-white text-[#66584C] border border-[#E8DFD3] hover:border-[#8C2223]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-6 text-xs text-[#66584C] font-mono">
          <span>Showing {filteredItems.length} dishes</span>
          {(searchQuery || selectedCategory !== 'all' || selectedDietary !== 'all') && (
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDietary('all');
              }}
              className="text-[#8C2223] hover:underline font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#E8DFD3] space-y-3">
            <p className="font-serif-heading text-xl text-[#1C1611]">No dishes match your filter</p>
            <p className="text-sm text-[#66584C]">Try clearing your search query or selecting a different category.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDietary('all');
              }}
              className="px-4 py-2 rounded-lg bg-[#F5C842] text-[#1C1611] font-semibold text-xs uppercase tracking-wider"
            >
              Show All Dishes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                id={`dish-card-${dish.id}`}
                className="bg-white rounded-xl border border-[#E8DFD3] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Food Image */}
                  <div className="aspect-16/10 relative overflow-hidden bg-[#241C15]">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Dietary badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded text-[10px] font-mono font-bold flex items-center gap-1 shadow-xs">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          dish.dietary === 'veg' ? 'bg-green-600' : 'bg-[#8C2223]'
                        }`}
                      />
                      <span className="uppercase text-[#1C1611]">
                        {dish.dietary === 'veg' ? 'Pure Veg' : 'Non-Veg'}
                      </span>
                    </div>

                    {/* Rose Momo / Signature Badges */}
                    <div className="absolute top-3 right-3 flex flex-col items-end gap-1">
                      {dish.isRoseMomo && (
                        <span className="bg-[#8C2223] text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs">
                          Rose Momo
                        </span>
                      )}
                      {dish.isSignature && !dish.isRoseMomo && (
                        <span className="bg-[#F5C842] text-[#1C1611] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs">
                          Signature
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-[#8C2223] uppercase tracking-wider font-semibold">
                          {dish.categoryLabel}
                        </span>
                        <h3 className="font-serif-heading font-bold text-lg text-[#1C1611] leading-tight mt-0.5">
                          {dish.name}
                        </h3>
                      </div>

                      {/* Spice level icons */}
                      {dish.spiciness && dish.spiciness > 1 && (
                        <div
                          className="flex items-center text-[#8C2223] shrink-0"
                          title={`Spiciness Level: ${dish.spiciness}/3`}
                        >
                          {Array.from({ length: dish.spiciness }).map((_, i) => (
                            <Flame key={i} className="w-3.5 h-3.5 fill-[#8C2223]" />
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
                      {dish.description}
                    </p>

                    {/* Highlights tags */}
                    {dish.highlights && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {dish.highlights.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FAF7F2] text-[#66584C] border border-[#E8DFD3]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Recommended Pairing */}
                    {dish.pairing && (
                      <div className="text-[11px] text-[#66584C] bg-[#FAF7F2] p-2 rounded border border-[#E8DFD3]/60 flex items-center gap-1.5">
                        <span className="font-semibold text-[#1C1611]">Best Paired With:</span>
                        <span>{dish.pairing}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer of card */}
                <div className="px-5 pb-5 pt-2 border-t border-[#E8DFD3] flex items-center justify-between text-xs">
                  <span className="font-mono text-[#66584C] text-[11px]">
                    {dish.priceNote || 'Lake Market & Entally'}
                  </span>

                  <button
                    onClick={() => onNavigate('locations')}
                    className="text-[#8C2223] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <MapPin className="w-3 h-3" />
                    <span>Find Outlet</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Informational Note Box */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#F3ECE1] border border-[#E8DFD3] grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#66584C]">
          <div>
            <h4 className="font-serif-heading font-bold text-sm text-[#1C1611] mb-1">
              Natural Ingredients
            </h4>
            <p className="leading-relaxed">
              Our signature colored wrappers use 100% boiled beetroot juice and fresh spinach puree. No synthetic food colors are used.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-sm text-[#1C1611] mb-1">
              Walk-in Table Seating
            </h4>
            <p className="leading-relaxed">
              Our 35-seat Lake Market dining room operates on a walk-in basis. No reservation is required; tables rotate efficiently.
            </p>
          </div>

          <div>
            <h4 className="font-serif-heading font-bold text-sm text-[#1C1611] mb-1">
              Delivery Platforms
            </h4>
            <p className="leading-relaxed">
              For online delivery to your doorstep, search for &apos;Rinchen&apos;s Momo&apos; on Swiggy and Zomato across Kolkata.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
