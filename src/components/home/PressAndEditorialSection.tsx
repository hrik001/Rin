import React from 'react';
import { ExternalLink, Award, Newspaper } from 'lucide-react';
import { PRESS_MENTIONS } from '../../data/brand';

export const PressAndEditorialSection: React.FC = () => {
  return (
    <section id="press-editorial-section" className="py-16 sm:py-20 bg-[#F3ECE1]/70 border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-xs font-mono text-[#8C2223] font-semibold border border-[#E8DFD3]">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Editorial & Media Coverage</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1611]">
            Recognized by Kolkata&apos;s Food Voices
          </h2>
          <p className="text-sm text-[#66584C]">
            Independent editorial features celebrating the craft, the viral rose momos, and Rinchen&apos;s journey.
          </p>
        </div>

        {/* Publication Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRESS_MENTIONS.map((mention) => (
            <a
              key={mention.id}
              href={mention.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-white border border-[#E8DFD3] shadow-xs hover:border-[#8C2223] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8C2223]">
                    {mention.publication}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#66584C] group-hover:text-[#8C2223] transition-colors" />
                </div>

                <h3 className="font-serif-heading font-bold text-base text-[#1C1611] group-hover:text-[#8C2223] transition-colors leading-snug">
                  &ldquo;{mention.headline}&rdquo;
                </h3>

                <p className="text-xs text-[#66584C] leading-relaxed">
                  {mention.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#E8DFD3]/60 flex items-center justify-between text-[11px] font-mono text-[#66584C]">
                <span>{mention.verifiedLabel}</span>
                <span className="text-[#8C2223] font-semibold group-hover:underline">Read Article →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
