import React from 'react';
import { PageRoute } from '../../types';

interface AnnouncementStripProps {
  onNavigate: (page: PageRoute) => void;
}

export const AnnouncementStrip: React.FC<AnnouncementStripProps> = ({ onNavigate }) => {
  return (
    <div
      id="announcement-strip"
      className="bg-[#F3ECE1] border-b border-[#E6DDD2] py-2 px-4 text-xs"
    >
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-[#66584C]">
          <span className="w-2 h-2 rounded-full bg-[#B42318] shrink-0" />
          <span className="font-medium text-[#1C1611]">
            Now serving Kolkata from Lake Market &amp; Entally
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('locations')}
            className="text-xs font-semibold text-[#B42318] hover:text-[#8F1D18] hover:underline flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Learn more</span>
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};
