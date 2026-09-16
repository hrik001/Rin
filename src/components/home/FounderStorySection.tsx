import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageRoute } from '../../types';

interface FounderStorySectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const FounderStorySection: React.FC<FounderStorySectionProps> = ({ onNavigate }) => {
  return (
    <section id="founder-story-section" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E6DDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Editorial Content (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-eyebrow text-[#B42318]">
              The Founder
            </span>

            <div className="space-y-2">
              <h2 className="text-h2 text-[#1C1611]">
                &ldquo;I started by steaming momos for empty tables. Kolkata taught me perseverance.&rdquo;
              </h2>
              <p className="text-xs font-semibold text-[#B42318]">
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
              <div className="p-3.5 bg-white rounded-lg border border-[#E6DDD2]">
                <p className="text-xs font-semibold text-[#B42318]">2023</p>
                <p className="text-xs font-bold text-[#1C1611] mt-0.5">Home Kitchen</p>
                <p className="text-[11px] text-[#66584C]">First bamboo steamer</p>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-[#E6DDD2]">
                <p className="text-xs font-semibold text-[#B42318]">June 2024</p>
                <p className="text-xs font-bold text-[#1C1611] mt-0.5">Entally Counter</p>
                <p className="text-[11px] text-[#66584C]">Takeaway &amp; delivery hub</p>
              </div>
              <div className="p-3.5 bg-white rounded-lg border border-[#E6DDD2]">
                <p className="text-xs font-semibold text-[#B42318]">Late 2024</p>
                <p className="text-xs font-bold text-[#1C1611] mt-0.5">Lake Market</p>
                <p className="text-[11px] text-[#66584C]">35-seat dine-in restaurant</p>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="read-full-story-btn"
                onClick={() => onNavigate('story')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs"
              >
                <span>Read the Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Photographic Profile (Col 5) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-[#E6DDD2] bg-white shadow-xs">
              <div className="aspect-4/5 relative overflow-hidden bg-[#251F1A]">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=85"
                  alt="Rinchen Wangdi Bhutia folding dumplings in the kitchen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs text-[#D4C7BA] uppercase tracking-wider font-semibold">Founder &amp; Head Cook</p>
                  <p className="text-lg font-bold">Rinchen Wangdi Bhutia</p>
                  <p className="text-xs text-[#D4C7BA] mt-0.5">From Sikkim to South Kolkata</p>
                </div>
              </div>

              <div className="p-4 bg-[#F3ECE1] border-t border-[#E6DDD2] text-xs text-[#66584C] flex items-center justify-between">
                <span>Handcrafting momos daily</span>
                <span className="font-semibold text-[#1C1611]">Walk-ins Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
