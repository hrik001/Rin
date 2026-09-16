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
      className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E6DDD2]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Visual Showcase (Col 6) */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden border border-[#E6DDD2] bg-white shadow-xs">
              <div className="aspect-4/3 sm:aspect-square relative overflow-hidden bg-[#251F1A]">
                <img
                  src="https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=85"
                  alt="Signature hand-pleated Rose Momo naturally coloured with beetroot and spinach extracts"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Integrity Statement Strip */}
              <div className="p-4 bg-[#F3ECE1] border-t border-[#E6DDD2] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#B42318]" />
                  <span className="text-xs font-semibold text-[#1C1611]">
                    Never artificial. Zero synthetic dyes.
                  </span>
                </div>
                <span className="text-xs text-[#66584C]">
                  Steamed in woven bamboo
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content (Col 6) */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-eyebrow text-[#B42318]">
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
            <div className="space-y-3 pt-1">
              <div className="p-3.5 bg-white rounded-lg border border-[#E6DDD2] flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F8E8E5] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#B42318]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1C1611]">
                    Ruby Red Petals · Fresh Beetroot Extract
                  </h3>
                  <p className="text-xs text-[#66584C] mt-0.5">
                    Fresh whole beetroots boiled and reduced down in-house to produce a rich natural crimson hue without changing the delicate dough texture.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#E6DDD2] flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1C1611]">
                    Himalayan Green Petals · Pureed Spinach Leaves
                  </h3>
                  <p className="text-xs text-[#66584C] mt-0.5">
                    Blanched young spinach leaves strained through muslin cloth, giving the herbal green wrappers a fresh aroma and silky finish.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-lg border border-[#E6DDD2] flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F3ECE1] flex items-center justify-center shrink-0 mt-0.5">
                  <Flame className="w-4 h-4 text-[#B42318]" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#1C1611]">
                    Accompaniment · Fire-Roasted Sesame Achar
                  </h3>
                  <p className="text-xs text-[#66584C] mt-0.5">
                    Served with our signature stone-ground dip: charred local tomatoes, toasted white sesame seeds, garlic, and Sikkimese green chilies.
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="pt-2">
              <button
                id="order-rose-momo-cta"
                onClick={() => onNavigate('menu')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white font-semibold text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>Order Rose Momo on the Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
