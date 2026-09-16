import React from 'react';
import { Sparkles, Mountain, Heart, ArrowRight, Instagram, CheckCircle2 } from 'lucide-react';
import { PageRoute } from '../types';
import { BRAND_INFO, STORY_MILESTONES } from '../data/brand';

interface StoryPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ onNavigate }) => {
  return (
    <div id="brand-story-page" className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Editorial Story Header */}
      <div className="bg-[#1C1611] text-[#FAF7F2] py-16 sm:py-24 border-b border-[#33261D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/10 text-xs font-mono text-[#F5C842]">
            <Mountain className="w-3.5 h-3.5" />
            <span>The Founder&apos;s Journey · Sikkim to Kolkata</span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            From an Empty Steamer to{' '}
            <span className="text-[#F5C842] italic font-serif">Kolkata&apos;s Heart.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#D4C7BA] max-w-2xl mx-auto font-sans-body leading-relaxed">
            The personal story of Rinchen Wangdi Bhutia — a corporate professional who risked it all
            to bring honest Himalayan flavors, hand-rolled dumplings, and genuine hospitality to Bengal.
          </p>
        </div>
      </div>

      {/* Main Narrative Article */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Intro Block */}
        <div className="prose prose-stone max-w-none text-[#1C1611] space-y-6 text-base sm:text-lg leading-relaxed">
          <p className="font-serif-heading text-2xl sm:text-3xl font-semibold text-[#8C2223] leading-snug">
            &ldquo;In Sikkim, momos aren&apos;t fast food. They are what family gathers around on cold mountain evenings.
            I wanted to bring that exact feeling to Kolkata.&rdquo;
          </p>

          <p className="text-[#66584C]">
            Growing up surrounded by the misty hills of Sikkim, food was an emotional anchor for Rinchen Wangdi Bhutia.
            Every festival and family evening centered around kneading dough, mincing seasoned meat with mountain herbs,
            and gathering around whistling aluminum steamers. But like many young professionals, life carried him into a corporate
            career in Kolkata.
          </p>

          <p className="text-[#66584C]">
            By late 2023, the calling was impossible to ignore. Rinchen resigned from his corporate job, invested his savings
            into basic cookware and bamboo steamers, and launched a small cloud kitchen directly out of his apartment.
          </p>
        </div>

        {/* Feature Image with Caption */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E8DFD3] bg-[#241C15]">
          <div className="aspect-16/9 relative">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
              alt="Rinchen preparing handmade momo wrappers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs sm:text-sm">
              <p className="font-semibold font-serif-heading text-base">Rinchen Wangdi Bhutia</p>
              <p className="text-gray-300 text-xs">Founder, chef, and content creator behind Rinchen&apos;s Momo.</p>
            </div>
          </div>
        </div>

        {/* Chapter 2: The Struggle & The Breakthrough */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[#66584C]">
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1C1611]">
            The Early Struggle: Zero Orders & Free Samples
          </h2>

          <p>
            The initial days were humbling. Days would pass with zero notifications on food delivery apps.
            Steaming batches of freshly made momos risked going cold and untouched.
          </p>

          <p>
            Instead of giving up, Rinchen packed the warm momos in boxes, walked down to neighborhood markets,
            and offered free tastings to shopkeepers, taxi drivers, and passersby. He asked for honest feedback on the taste,
            the dough thickness, and the chili level.
          </p>

          <p>
            At the same time, he set up his phone on a simple tripod and documented the entire process on Instagram.
            He shared the highs, the struggles, and the craft behind rolling paper-thin dough. People didn&apos;t just see dumplings;
            they saw a hardworking individual putting his soul onto the plate.
          </p>
        </div>

        {/* Chapter 3: The Birth of the Rose Momo */}
        <div className="p-8 rounded-2xl bg-white border border-[#E8DFD3] shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#8C2223]/10 text-[#8C2223] text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Innovation</span>
          </div>

          <h3 className="font-serif-heading text-2xl font-bold text-[#1C1611]">
            How the Rose Momo Came to Be
          </h3>

          <p className="text-sm sm:text-base text-[#66584C] leading-relaxed">
            Rinchen wanted to create something unforgettable that celebrated the botanical colors of the eastern Himalayas.
            Rejecting synthetic chemical food dyes, he experimented with boiling fresh beetroots for natural deep ruby and coral tones,
            and pureeing tender spinach leaves for herbal jade wrappers.
          </p>

          <p className="text-sm sm:text-base text-[#66584C] leading-relaxed">
            By rolling circular wrappers, overlapping them in a delicate petal sequence with spiced filling, and coiling them into a bloom,
            the <strong>Rose Momo</strong> was born. When he shared the folding technique on social media, the video quickly garnered
            millions of views. Soon, patrons were traveling across Kolkata just to taste the blooming dumpling in person.
          </p>
        </div>

        {/* Chronological Milestones */}
        <div className="space-y-6">
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1C1611]">
            Milestones of the Journey
          </h2>

          <div className="relative border-l-2 border-[#E8DFD3] ml-4 pl-6 space-y-8">
            {STORY_MILESTONES.map((mile, idx) => (
              <div key={idx} className="relative group">
                {/* Marker point */}
                <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#FAF7F2] border-2 border-[#8C2223] group-hover:scale-125 transition-transform" />

                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#8C2223] font-bold uppercase">
                    {mile.year} · {mile.stage}
                  </span>
                  <h4 className="font-serif-heading text-xl font-bold text-[#1C1611]">
                    {mile.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
                    {mile.description}
                  </p>
                  <p className="text-xs font-mono text-[#1C1611] font-medium pt-1 italic">
                    Key takeaway: &ldquo;{mile.takeaway}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chapter 4: Roots & Vision */}
        <div className="space-y-6 text-base sm:text-lg leading-relaxed text-[#66584C]">
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1C1611]">
            Honoring Himalayan Heritage
          </h2>

          <p>
            Rinchen&apos;s food is an authentic dialogue between the culinary traditions of Sikkim, Nepal, and Tibet,
            intertwined with Kolkata&apos;s century-old love for street food. While the Rose Momo is famous on social media,
            dishes like authentic <em>Chicken Faley</em> (Tibetan meat bread), slow-steamed <em>Kothey</em>, and bone-broth <em>Thukpa</em>
            remain the heart of the kitchen.
          </p>

          <p>
            &ldquo;My dream,&rdquo; Rinchen often shares, &ldquo;is to build something honest here in Kolkata, take our food
            to fellow cities, and one day open a flagship Rinchen&apos;s Momo back home in Sikkim.&rdquo;
          </p>
        </div>

        {/* Bottom Call to Action */}
        <div className="p-8 rounded-2xl bg-[#1C1611] text-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-heading text-xl font-bold text-[#FAF7F2]">
              Taste the story in person
            </h4>
            <p className="text-xs text-[#D4C7BA]">
              Our Lake Market restaurant is open daily from 1:30 PM to 11:00 PM.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('locations')}
              className="px-5 py-2.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Find Outlets
            </button>
            <button
              onClick={() => onNavigate('menu')}
              className="px-5 py-2.5 rounded-lg border border-white/20 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
