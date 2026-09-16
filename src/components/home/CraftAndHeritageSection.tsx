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
      icon: Layers,
    },
    {
      tag: "Sikkimese Hearth",
      title: "Clean Himalayan Seasoning",
      desc: "We avoid heavy store-bought spice mixes. The fillings are seasoned the traditional way: finely chopped ginger, mountain scallions, fresh coriander, pure butter, and coarse black pepper.",
      icon: Utensils,
    },
    {
      tag: "Traditional Woven",
      title: "Tiered Bamboo Steaming",
      desc: "Momos are steamed in multi-tiered woven bamboo baskets. Natural bamboo allows steam to circulate and escape gently without dripping moisture back onto the dumplings, keeping wrappers firm and glossy.",
      icon: Timer,
    },
    {
      tag: "Stone-Ground",
      title: "Fire-Roasted Sesame Achar",
      desc: "Our iconic dip is crafted by blistering whole ripe tomatoes over open flames, stone-grinding them with toasted white sesame seeds, garlic cloves, and fresh Himalayan green chilies into a rich, smoky chutney.",
      icon: Flame,
    },
  ];

  return (
    <section id="craft-heritage-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E6DDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3 mb-12">
          <span className="text-eyebrow text-[#B42318]">
            Culinary Craft &amp; Heritage
          </span>
          <h2 className="text-h2 text-[#1C1611]">
            Why Our Momos Taste Different
          </h2>
          <p className="text-body text-[#66584C] leading-relaxed">
            In Kolkata, momos are everywhere. But making dumplings that taste like a crisp morning in Sikkim
            requires unhurried technique, natural ingredients, and respecting the craft at every single fold.
          </p>
        </div>

        {/* 4 Craft Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-[#E6DDD2] flex flex-col justify-between space-y-4 hover:border-[#B42318]/50 transition-all duration-200 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-[#F8E8E5] flex items-center justify-center text-[#B42318] group-hover:bg-[#B42318] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[11px] font-semibold text-[#B42318] uppercase tracking-wider block">
                    {pillar.tag}
                  </span>

                  <h3 className="text-base font-bold text-[#1C1611]">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-[#66584C] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6DDD2] text-[11px] text-[#8B7C6E] flex items-center gap-1 font-medium">
                  <span>Traditional Method</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
