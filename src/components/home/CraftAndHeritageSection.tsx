import React from 'react';
import { Layers, Flame, Utensils, Timer } from 'lucide-react';
import { PageRoute } from '../../types';

interface CraftAndHeritageSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const CraftAndHeritageSection: React.FC<CraftAndHeritageSectionProps> = ({ onNavigate }) => {
  const steps = [
    {
      num: "01",
      title: "Hand-Rolled Translucent Wrappers",
      desc: "Every wrapper is rolled individually with small wooden rolling pins. Thin edges allow the dough to pleat neatly without thick, doughy joints, ensuring a delicate bite that yields immediately to the filling.",
      icon: Layers
    },
    {
      num: "02",
      title: "Clean Himalayan Seasoning",
      desc: "We avoid heavy store-bought spice pastes. The fillings are seasoned the traditional Sikkimese way: finely chopped ginger, mountain scallions, fresh coriander, light butter, and coarse black pepper.",
      icon: Utensils
    },
    {
      num: "03",
      title: "The Gentle Bamboo Steam",
      desc: "Momos are steamed in multi-tiered woven bamboo baskets. Bamboo allows moisture to escape evenly without dripping back onto the dumplings, keeping wrappers firm, glossy, and bursting with broth.",
      icon: Timer
    },
    {
      num: "04",
      title: "Fire-Roasted Sesame Achar",
      desc: "Our iconic dip is made by blistering whole ripe tomatoes over open flames, stone-grinding them with toasted white sesame seeds, garlic, and fresh green chilies into a creamy, smoky chutney.",
      icon: Flame
    }
  ];

  return (
    <section id="craft-heritage-section" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8C2223]">
            Culinary Craft & Method
          </span>
          <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1611]">
            Why Our Momos Taste Different
          </h2>
          <p className="text-base text-[#66584C] font-sans-body leading-relaxed">
            In Kolkata, momos are everywhere. But making dumplings that taste like a crisp morning in Gangtok
            requires unhurried technique, natural ingredients, and respecting the craft at every step.
          </p>
        </div>

        {/* 4 Craft Step Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-6 rounded-xl bg-white border border-[#E8DFD3] shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8C2223]/50 transition-all group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#8C2223] px-2 py-0.5 rounded bg-[#8C2223]/10">
                      STEP {step.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#66584C] group-hover:text-[#8C2223] transition-colors" />
                  </div>

                  <h3 className="font-serif-heading font-bold text-lg text-[#1C1611] leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
                    {step.desc}
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
