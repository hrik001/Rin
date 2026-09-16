import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Flame } from 'lucide-react';
import { PageRoute } from '../../types';

interface SignatureRoseMomoSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const SignatureRoseMomoSection: React.FC<SignatureRoseMomoSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="signature-rose-momo-section"
      className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E7DFD4]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase (Col 6) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden border border-[#E7DFD4] bg-white shadow-sm">
              <div className="aspect-4/3 sm:aspect-square relative overflow-hidden bg-[#251E17]">
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
                  alt="Signature hand-pleated Rose Momo naturally coloured with beetroot and spinach extracts"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Integrity Statement Strip */}
              <div className="p-4 bg-[#F3ECE1] border-t border-[#E7DFD4] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#8C2223]" />
                  <span className="text-xs font-semibold text-[#1C1611]">
                    Never artificial. Zero synthetic dyes.
                  </span>
                </div>
                <span className="text-xs text-[#66584C]">
                  Steamed in bamboo
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content (Col 6) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-eyebrow text-[#8C2223]">
              Signature Creation
            </span>

            <div className="space-y-3">
              <h2 className="text-h2 text-[#1C1611]">
                The Rose Momo: Hand-pleated petals, 100% natural color.
              </h2>
              <p className="text-body text-[#66584C] content-readable">
                When Rinchen first rolled circular dough rounds and folded them into a blossoming floral arrangement, he wanted to bring the organic warmth of the Sikkim hills to Kolkata. Every piece is rolled and pleated by hand daily.
              </p>
            </div>

            {/* Natural Ingredients Breakdown */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E7DFD4]">
                <div className="flex items-center gap-2 mb-1">
                  <Leaf className="w-4 h-4 text-[#8C2223]" />
                  <h3 className="text-sm font-bold text-[#1C1611]">
                    Pure Beetroot & Spinach Reductions
                  </h3>
                </div>
                <p className="text-body-sm text-[#66584C]">
                  Deep crimson and soft pink petals come from pure boiled beetroot juice, while radiant green herb wrappers are kneaded with fresh spinach puree. We never use artificial food coloring.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E7DFD4]">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="w-4 h-4 text-[#8C2223]" />
                  <h3 className="text-sm font-bold text-[#1C1611]">
                    Roasted Sesame & Fire-Charred Tomato Achar
                  </h3>
                </div>
                <p className="text-body-sm text-[#66584C]">
                  Accompanied by our signature mountain dip made by stone-grinding fire-roasted tomatoes, toasted white sesame, garlic, and fiery mountain chilies.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="rose-momo-menu-cta"
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>Order on Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('locations')}
                className="text-sm font-semibold text-[#8C2223] hover:underline cursor-pointer"
              >
                Visit Lake Market to taste in person →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
