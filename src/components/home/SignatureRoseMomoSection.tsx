import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Flame, Leaf } from 'lucide-react';
import { PageRoute } from '../../types';

interface SignatureRoseMomoSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const SignatureRoseMomoSection: React.FC<SignatureRoseMomoSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="signature-rose-momo-section"
      className="py-16 sm:py-24 bg-[#FAF7F2] relative overflow-hidden border-b border-[#E8DFD3]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase (Col 6) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Artistic background backdrop */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-[#8C2223]/15 via-[#F5C842]/20 to-transparent blur-lg" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#E8DFD3] bg-[#1C1611]">
                <div className="aspect-4/3 sm:aspect-square relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
                    alt="Signature hand-pleated Rose Momo naturally coloured with beetroot and spinach"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1611]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#8C2223] text-white text-xs font-semibold uppercase tracking-wider">
                      <Sparkles className="w-3 h-3 text-[#F5C842]" />
                      <span>Signature Creation</span>
                    </div>
                    <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold">
                      The Hand-Pleated Rose Momo
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-200">
                      Crafted daily in limited batches at Lake Market & Entally.
                    </p>
                  </div>
                </div>

                {/* Craft Stats Strip */}
                <div className="p-4 bg-[#241C15] grid grid-cols-3 gap-2 text-center text-white border-t border-white/10">
                  <div className="border-r border-white/10 pr-2">
                    <p className="text-xs text-[#F5C842] font-mono uppercase">Colors</p>
                    <p className="text-xs font-semibold">100% Plant Extracts</p>
                  </div>
                  <div className="border-r border-white/10 pr-2">
                    <p className="text-xs text-[#F5C842] font-mono uppercase">Folds</p>
                    <p className="text-xs font-semibold">Petal Layered</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#F5C842] font-mono uppercase">Broth</p>
                    <p className="text-xs font-semibold">Hot Herbal Soup</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Content (Col 6) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8C2223]/10 text-[#8C2223] text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Iconic Signature Dish</span>
            </div>

            <div className="space-y-3">
              <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#1C1611] leading-tight">
                Meet the momo that made people{' '}
                <span className="text-[#8C2223] italic font-serif">stop scrolling.</span>
              </h2>
              <p className="text-base sm:text-lg text-[#66584C] leading-relaxed">
                When Rinchen first rolled circular dough rounds and folded them into a blossoming floral arrangement,
                he wasn&apos;t following a textbook. He was looking for a way to express the beauty of the Himalayan mountains
                and make Kolkata fall in love with handmade food all over again.
              </p>
            </div>

            {/* Natural Ingredients Breakdown */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8DFD3]">
                <div className="w-8 h-8 rounded-full bg-[#8C2223]/15 text-[#8C2223] flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1611]">
                    Natural Beetroot & Spinach Colors
                  </h4>
                  <p className="text-xs text-[#66584C] mt-0.5 leading-relaxed">
                    Zero chemical dyes or artificial additives. Deep crimson and soft pink petals come from pure boiled
                    beetroot juice, while radiant green herb wrappers are kneaded with fresh spinach puree.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8DFD3]">
                <div className="w-8 h-8 rounded-full bg-[#F5C842]/25 text-[#1C1611] flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 text-[#8C2223]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1611]">
                    House Roasted Sesame & Tomato Achar
                  </h4>
                  <p className="text-xs text-[#66584C] mt-0.5 leading-relaxed">
                    Served with our signature mountain dip made by stone-grinding fire-roasted tomatoes,
                    toasted white sesame, garlic cloves, and fiery Himalayan green chilies.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-white border border-[#E8DFD3]">
                <div className="w-8 h-8 rounded-full bg-[#FAF7F2] text-[#8C2223] flex items-center justify-center shrink-0 mt-0.5 border border-[#E8DFD3]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1C1611]">
                    Available in Chicken & Paneer-Vegetable
                  </h4>
                  <p className="text-xs text-[#66584C] mt-0.5 leading-relaxed">
                    Choose seasoned chicken mince or delicate paneer with shredded cabbage and herbs. Both folded
                    with the same exacting artisanal care.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                id="rose-momo-menu-cta"
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#8C2223] hover:bg-[#A81E16] text-[#FAF7F2] font-semibold text-sm tracking-wide shadow-xs transition-colors cursor-pointer"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('locations')}
                className="text-xs sm:text-sm font-semibold text-[#1C1611] hover:text-[#8C2223] underline underline-offset-4 cursor-pointer"
              >
                Find Nearest Outlet to Taste →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
