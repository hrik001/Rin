import React from 'react';
import { PageRoute } from '../types';
import { STORY_MILESTONES } from '../data/brand';

interface StoryPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div id="brand-story-page" className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Editorial Story Header */}
      <div className="bg-[#1C1611] text-[#FAF7F2] py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-eyebrow text-[#D4C7BA] border-b border-[#B42318] pb-1 inline-block">
            Founder&apos;s Journey · Sikkim to Kolkata
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF7F2] leading-tight">
            From a home kitchen to Kolkata&apos;s tables.
          </h1>

          <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl leading-relaxed">
            The story of Rinchen Wangdi Bhutia — leaving a corporate career to bring authentic Himalayan dumplings and warmth to South Kolkata.
          </p>
        </div>
      </div>

      {/* Main Narrative Article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Intro Block */}
        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-[#1C1611]">
          <blockquote className="border-l-3 border-[#B42318] pl-4 italic text-lg sm:text-xl font-medium text-[#1C1611]">
            &ldquo;In Sikkim, momos aren&apos;t fast food. They are what family gathers around on cold mountain evenings. I wanted to bring that exact feeling to Kolkata.&rdquo;
          </blockquote>

          <p className="text-body text-[#66584C]">
            Growing up surrounded by the misty hills of Sikkim, food was an emotional anchor for Rinchen Wangdi Bhutia. Every festival and family evening centered around kneading dough, mincing seasoned meat with mountain herbs, and gathering around whistling aluminum steamers. But like many young professionals, life carried him into a corporate career in Kolkata.
          </p>

          <p className="text-body text-[#66584C]">
            By late 2023, the calling was impossible to ignore. Rinchen resigned from his corporate job, invested his personal savings into basic cookware and steamers, and launched a small cloud kitchen out of his apartment.
          </p>
        </div>

        {/* Feature Image with Caption */}
        <div className="rounded-xl overflow-hidden border border-[#E6DDD2] bg-[#251F1A]">
          <div className="aspect-16/9 relative">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
              alt="Rinchen preparing handmade momo wrappers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
              <p className="font-semibold text-sm">Rinchen Wangdi Bhutia</p>
              <p className="text-[#D4C7BA] text-xs">Founder and head cook at Rinchen&apos;s Momo.</p>
            </div>
          </div>
        </div>

        {/* Chapter 2: The Early Days */}
        <div className="space-y-4 text-base leading-relaxed text-[#66584C]">
          <h2 className="text-2xl font-bold text-[#1C1611]">
            The Early Struggle: Zero Orders &amp; Free Tastings
          </h2>

          <p className="text-body text-[#66584C]">
            The initial weeks were humbling. Days would pass with zero notifications on delivery apps. Rather than waiting idly, Rinchen packed fresh, warm momos into boxes, stepped onto the streets of South Kolkata, and offered free tastings to local shopkeepers, cab drivers, and neighbors, asking for their honest feedback on wrapper thickness, fillings, and chili balance.
          </p>

          <p className="text-body text-[#66584C]">
            He also turned his camera on himself, documenting every stage of rolling thin dough, balancing spice levels, and keeping the kitchen spotless. Audiences responded to the genuine dedication, and word quickly spread.
          </p>
        </div>

        {/* Chapter 3: The Birth of the Rose Momo */}
        <div className="p-6 rounded-xl bg-white border border-[#E6DDD2] space-y-3">
          <span className="text-xs font-semibold text-[#B42318]">
            Natural Ingredients
          </span>

          <h3 className="text-xl font-bold text-[#1C1611]">
            The Rose Momo: Natural Colors, No Food Dyes
          </h3>

          <p className="text-body-sm text-[#66584C] leading-relaxed">
            Rinchen wanted to craft a dish honoring the Himalayan landscape without ever resorting to artificial chemical dyes. He tested boiling fresh beetroots to achieve a deep ruby and coral tone, and pureeing tender spinach leaves for herbal green wrappers.
          </p>

          <p className="text-body-sm text-[#66584C] leading-relaxed">
            By layering circular wrappers into overlapping petals around seasoned chicken and vegetable fillings, the Rose Momo was born. Customers appreciated both the visual craft and the clean, natural ingredient list.
          </p>
        </div>

        {/* Chronological Milestones */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1C1611]">
            Milestones of the Journey
          </h2>

          <div className="relative border-l-2 border-[#E6DDD2] ml-3 pl-6 space-y-7">
            {STORY_MILESTONES.map((mile, idx) => (
              <div key={idx} className="relative">
                {/* Marker point */}
                <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#B42318]" />

                <div className="space-y-1">
                  <span className="text-xs font-semibold text-[#B42318]">
                    {mile.year} · {mile.stage}
                  </span>
                  <h4 className="text-base font-bold text-[#1C1611]">
                    {mile.title}
                  </h4>
                  <p className="text-body-sm text-[#66584C] leading-relaxed">
                    {mile.description}
                  </p>
                  <p className="text-xs text-[#1C1611] font-medium pt-0.5">
                    Takeaway: &ldquo;{mile.takeaway}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter 4: Roots & Vision */}
        <div className="space-y-4 text-base leading-relaxed text-[#66584C]">
          <h2 className="text-2xl font-bold text-[#1C1611]">
            Honoring Himalayan Heritage
          </h2>

          <p className="text-body text-[#66584C]">
            While the Rose Momo brought public attention, Rinchen&apos;s kitchen remains grounded in classic comfort food: pan-fried chicken faley, slow-steamed kothey, clear bone broths, and hand-tossed meifoon.
          </p>

          <p className="text-body text-[#66584C]">
            &ldquo;My priority is to remain consistent with every plate we serve here in Kolkata, take good care of our kitchen staff, and keep the cooking honest,&rdquo; says Rinchen.
          </p>
        </div>

        {/* Bottom Call to Action */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#1C1611] text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-[#FAF7F2]">
              Visit Lake Market or order delivery
            </h4>
            <p className="text-xs text-[#D4C7BA]">
              Our dining room is open daily from 1:30 PM to 11:00 PM.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('locations')}
              className="px-4 py-2.5 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
            >
              Find Outlets
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="px-4 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-semibold transition-colors cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
