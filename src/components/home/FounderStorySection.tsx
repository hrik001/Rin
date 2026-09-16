import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { PageRoute } from '../../types';
import { BRAND_INFO } from '../../data/brand';

interface FounderStorySectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FounderStorySection: React.FC<FounderStorySectionProps> = ({ onNavigate }) => {
  return (
    <section id="founder-story-section" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E7DFD4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Content (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-eyebrow text-[#8C2223]">
              The Founder
            </span>

            <div className="space-y-2">
              <h2 className="text-h2 text-[#1C1611]">
                &ldquo;I started by steaming momos for empty tables. Kolkata taught me perseverance.&rdquo;
              </h2>
              <p className="text-xs font-semibold text-[#8C2223]">
                — Rinchen Wangdi Bhutia
              </p>
            </div>

            <p className="text-body text-[#66584C] content-readable">
              In late 2023, Rinchen left corporate work in Kolkata to pursue the food of his childhood in Sikkim. During the earliest days in a modest home kitchen, orders were few and far between. Rather than giving up, Rinchen stepped out to share freshly steamed momos with neighbors, began sharing quiet videos of his hand-folding technique, and spent long nights perfecting naturally tinted vegetable wrappers.
            </p>

            <p className="text-body text-[#66584C] content-readable">
              When Kolkata discovered his dedication, the response was warm and genuine. That support allowed him to open his first counter at Entally in June 2024, followed by our 35-seat dine-in restaurant near Lake Mall.
            </p>

            {/* Timeline Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-lg border border-[#E7DFD4]">
                <p className="text-xs font-semibold text-[#8C2223]">2023</p>
                <p className="text-xs font-bold text-[#1C1611] mt-0.5">Home Kitchen</p>
                <p className="text-[11px] text-[#66584C]">First bamboo steamer</p>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-[#E7DFD4]">
                <p className="text-xs font-semibold text-[#8C2223]">June 2024</p>
                <p className="text-xs font-bold text-[#1C1611] mt-0.5">Entally Counter</p>
                <p className="text-[11px] text-[#66584C]">Takeaway & delivery debut</p>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-[#E7DFD4]">
                <p className="text-xs font-semibold text-[#8C2223]">Late 2024</p>
                <p className="text-xs font-bold text-[#1C1611] mt-0.5">Lake Market</p>
                <p className="text-[11px] text-[#66584C]">35-seat dine-in restaurant</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="read-full-story-btn"
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1C1611] hover:bg-[#8C2223] text-white text-xs font-semibold transition-colors cursor-pointer"
              >
                <span>Read Rinchen&apos;s Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C2223] hover:underline"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {BRAND_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Portrait (Col 5) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#E7DFD4] bg-white shadow-sm">
              <div className="aspect-3/4 relative overflow-hidden bg-[#251E17]">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
                  alt="Founder Rinchen Wangdi Bhutia preparing fresh handmade momos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute bottom-3 left-3 right-3 bg-[#1C1611]/90 backdrop-blur-xs text-white p-3 rounded-lg">
                  <p className="text-xs font-semibold text-[#FAF7F2]">Rinchen Wangdi Bhutia</p>
                  <p className="text-[11px] text-[#D4C7BA]">Founder & Momo Maker · Kolkata</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
