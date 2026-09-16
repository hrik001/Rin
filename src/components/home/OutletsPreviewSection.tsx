import React from 'react';
import { MapPin, Clock, ExternalLink, Navigation } from 'lucide-react';
import { PageRoute } from '../../types';
import { OUTLETS } from '../../data/brand';

interface OutletsPreviewSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const OutletsPreviewSection: React.FC<OutletsPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section id="outlets-preview-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E6DDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-eyebrow text-[#B42318]">
              Where To Find Us
            </span>
            <h2 className="text-h2 text-[#1C1611]">
              Two Kitchens in Kolkata
            </h2>
            <p className="text-body text-[#66584C] max-w-xl">
              Dine-in at our 35-seat Lake Market restaurant, or order fresh delivery from our Entally hub.
            </p>
          </div>

          <button
            id="view-all-outlets-btn"
            onClick={() => onNavigate('locations')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#E6DDD2] bg-white hover:border-[#1C1611] text-[#1C1611] text-xs font-semibold transition-colors self-start md:self-auto cursor-pointer"
          >
            <span>View Outlet Details &amp; Directions</span>
            <span>→</span>
          </button>
        </div>

        {/* 2 Outlets Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              id={`outlet-preview-${outlet.id}`}
              className="bg-white rounded-xl border border-[#E6DDD2] overflow-hidden flex flex-col justify-between hover:border-[#B42318]/50 transition-all duration-200"
            >
              <div>
                {/* Image Banner */}
                <div className="aspect-16/9 relative overflow-hidden bg-[#251F1A]">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#1C1611]/90 text-white text-xs font-medium">
                      {outlet.statusBadge}
                    </span>
                  </div>
                  {outlet.seatingCapacity && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-[#B42318] text-white text-xs font-semibold">
                      {outlet.seatingCapacity}
                    </div>
                  )}
                </div>

                {/* Body Details */}
                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-xs font-semibold text-[#B42318]">
                      {outlet.area}
                    </span>
                    <h3 className="text-2xl font-bold text-[#1C1611] mt-0.5">
                      {outlet.name}
                    </h3>
                    <p className="text-body-sm text-[#66584C] mt-1">
                      {outlet.serviceSummary}
                    </p>
                  </div>

                  {/* Operational Notes */}
                  <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E6DDD2] space-y-2.5 text-xs">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#B42318] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-[#1C1611]">{outlet.address}</span>
                        <span className="text-[#8B7C6E] block text-[11px] mt-0.5">Landmark: {outlet.landmark}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-[#E6DDD2]">
                      <Clock className="w-4 h-4 text-[#B42318] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#1C1611]">{outlet.timings}</span>
                        <span className="text-[#8B7C6E] ml-1.5">({outlet.daysOpen})</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8B7C6E]">
                      Highlights
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {outlet.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-[#F3ECE1] text-[11px] font-medium text-[#66584C]"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3">
                <a
                  href={outlet.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <div className="flex items-center gap-2">
                  {outlet.swiggyUrl && (
                    <a
                      href={outlet.swiggyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-[#FAF7F2] border border-[#E6DDD2] text-xs font-medium text-[#1C1611] hover:border-[#B42318] transition-colors flex items-center gap-1"
                    >
                      <span>Swiggy</span>
                      <ExternalLink className="w-3 h-3 text-[#8B7C6E]" />
                    </a>
                  )}
                  {outlet.zomatoUrl && (
                    <a
                      href={outlet.zomatoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-lg bg-[#FAF7F2] border border-[#E6DDD2] text-xs font-medium text-[#1C1611] hover:border-[#B42318] transition-colors flex items-center gap-1"
                    >
                      <span>Zomato</span>
                      <ExternalLink className="w-3 h-3 text-[#8B7C6E]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
