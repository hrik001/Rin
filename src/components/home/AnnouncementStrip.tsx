import React from 'react';
import { Sparkles, MapPin } from 'lucide-react';
import { PageRoute } from '../../types';

interface AnnouncementStripProps {
  onNavigate: (page: PageRoute) => void;
}

export const AnnouncementStrip: React.FC<AnnouncementStripProps> = ({ onNavigate }) => {
  return (
    <div id="announcement-strip" className="bg-[#FAF7F2] border-b border-[#E8DFD3] py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[#66584C]">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8C2223] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8C2223]"></span>
          </span>
          <span className="font-medium text-[#1C1611]">
            From a home kitchen to Kolkata&apos;s tables:
          </span>
          <span className="hidden sm:inline">Handmade Himalayan momos steamed fresh daily.</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('locations')}
            className="text-[#8C2223] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <MapPin className="w-3 h-3" />
            <span>Visit Lake Market (35 Seats)</span>
          </button>
          <span className="text-[#66584C]/40 hidden sm:inline">•</span>
          <button
            onClick={() => onNavigate('menu')}
            className="text-[#1C1611] font-semibold hover:text-[#8C2223] transition-colors cursor-pointer hidden sm:inline"
          >
            Explore Digital Menu →
          </button>
        </div>
      </div>
    </div>
  );
};
