import React from 'react';
import { Layers, Flame, Utensils, Timer } from 'lucide-react';
import { PageRoute } from '../../types';

interface CraftAndHeritageSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const CraftAndHeritageSection: React.FC<CraftAndHeritageSectionProps> = ({ onNavigate }) => {
  const pillars = [
    {
      tag: "Hand-Rolled",
      title: "Translucent Wrappers",
      desc: "Every wrapper is rolled individually with small wooden rolling pins. Thin edges allow the dough to pleat neatly without thick, gummy joints, ensuring a delicate bite that yields immediately to the filling.",
      icon: Layers
    },
    {
      tag: "Sikkimese Hearth",
      title: "Clean Himalayan Seasoning",
      desc: "We avoid heavy store-bought spice mixes. The fillings are seasoned the traditional way: finely chopped ginger, mountain scallions, fresh coriander, pure butter, and coarse black pepper.",
      icon: Utensils
    },
    {
      tag: "Traditional Woven",
      title: "Tiered Bamboo Steaming",
      desc: "Momos are steamed in multi-tiered woven bamboo baskets. Natural bamboo allows steam to circulate and escape gently without dripping moisture back onto the dumplings, keeping wrappers firm and glossy.",
      icon: Timer
    },
    {
      tag: "Stone-Ground",
      title: "Fire-Roasted Sesame Achar",
      desc: "Our iconic dip is crafted by blistering whole ripe tomatoes over open flames, stone-grinding them with toasted white sesame seeds, garlic cloves, and fresh Himalayan green chilies into a rich, smoky chutney.",
      icon: Flame
    }
  ];

  return (
    <section id="craft-heritage-section" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8C2223]">
            Culinary Craft & Heritage
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1611]">
            Why Our Momos Taste Different
          </h2>
          <p className="text-base text-[#66584C] font-sans-body leading-relaxed">
            In Kolkata, momos are everywhere. But making dumplings that taste like a crisp morning in Gangtok
            requires unhurried technique, natural ingredients, and respecting the craft at every single fold.
          </p>
        </div>

        {/* 4 Craft Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8C2223]/50 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#8C2223] px-2.5 py-1 rounded bg-[#8C2223]/8">
                      {pillar.tag}
                    </span>
                    <Icon className="w-4 h-4 text-[#66584C] group-hover:text-[#8C2223] transition-colors" />
                  </div>

                  <h3 className="font-serif-heading font-bold text-lg text-[#1C1611] leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#E8DFD3]/60 text-[11px] font-mono text-[#8C2223] font-medium">
                  Fresh Batch Daily
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
