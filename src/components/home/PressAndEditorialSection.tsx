import React from 'react';
import { ExternalLink } from 'lucide-react';
import { PRESS_MENTIONS } from '../../data/brand';

export const PressAndEditorialSection: React.FC = () => {
  return (
    <section id="press-editorial-section" className="py-16 sm:py-20 bg-[#F3ECE1] border-b border-[#E7DFD4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-2 mb-10">
          <span className="text-eyebrow text-[#8C2223]">
            Editorial Notes
          </span>
          <h2 className="text-h2 text-[#1C1611]">
            Featured in Kolkata&apos;s Food Conversations
          </h2>
          <p className="text-body text-[#66584C]">
            Independent editorial reviews covering our handcraft, the Rose Momo, and Rinchen&apos;s story.
          </p>
        </div>

        {/* Publication Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRESS_MENTIONS.map((mention) => (
            <a
              key={mention.id}
              href={mention.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-white border border-[#E7DFD4] hover:border-[#1C1611] transition-colors flex flex-col justify-between group"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#8C2223]">
                    {mention.publication}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66584C] group-hover:text-[#1C1611] transition-colors" />
                </div>

                <h3 className="text-sm font-bold text-[#1C1611] leading-snug">
                  &ldquo;{mention.headline}&rdquo;
                </h3>

                <p className="text-body-sm text-[#66584C] line-clamp-3">
                  {mention.summary}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-[#E7DFD4] flex items-center justify-between text-xs text-[#66584C]">
                <span>{mention.verifiedLabel}</span>
                <span className="text-[#8C2223] font-medium group-hover:underline">Read →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
