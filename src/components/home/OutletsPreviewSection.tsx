import React from 'react';
import { MapPin, Clock, ExternalLink, ArrowRight, Phone, ShoppingBag, Utensils } from 'lucide-react';
import { PageRoute } from '../../types';
import { OUTLETS } from '../../data/brand';

interface OutletsPreviewSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const OutletsPreviewSection: React.FC<OutletsPreviewSectionProps> = ({ onNavigate }) => {
  return (
    <section id="outlets-preview-section" className="py-16 sm:py-24 bg-[#FAF7F2] border-b border-[#E8DFD3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3ECE1] text-xs font-mono text-[#8C2223] font-semibold mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Where to Experience Us</span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1611]">
              Find Us in Kolkata
            </h2>
            <p className="text-sm sm:text-base text-[#66584C] mt-1 max-w-xl">
              Dine at our cozy 35-seater in Lake Market or pick up fresh orders from our Entally dispatch hub.
            </p>
          </div>

          <button
            id="view-all-outlets-link"
            onClick={() => onNavigate('locations')}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-[#1C1611]/20 hover:border-[#1C1611] text-xs font-semibold uppercase tracking-wider text-[#1C1611] transition-all cursor-pointer self-start md:self-auto shadow-xs"
          >
            <span>All Outlet Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#8C2223]" />
          </button>
        </div>

        {/* 2 Outlets Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              className="rounded-2xl bg-white border border-[#E8DFD3] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Image Banner */}
                <div className="aspect-16/9 relative overflow-hidden bg-[#241C15]">
                  <img
                    src={outlet.image}
                    alt={outlet.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-[#1C1611]/90 text-white text-xs font-mono font-medium backdrop-blur-xs border border-white/10">
                      {outlet.serviceType}
                    </span>
                  </div>
                  {outlet.seatingCapacity && (
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded-md bg-[#F5C842] text-[#1C1611] text-xs font-bold shadow-md">
                      {outlet.seatingCapacity}
                    </div>
                  )}
                </div>

                {/* Body Details */}
                <div className="p-6 sm:p-8 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-[#8C2223] font-semibold uppercase">
                      {outlet.area}
                    </span>
                    <h3 className="font-serif-heading text-2xl font-bold text-[#1C1611]">
                      {outlet.name}
                    </h3>
                    <p className="text-xs text-[#66584C]">
                      {outlet.serviceSummary}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm text-[#66584C] pt-2 border-t border-[#E8DFD3]/80">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#8C2223] shrink-0 mt-0.5" />
                      <span className="text-[#1C1611] font-medium">{outlet.address}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#8C2223] shrink-0" />
                      <span>{outlet.timings} · {outlet.daysOpen}</span>
                    </div>
                  </div>

                  {/* Feature checklist */}
                  <div className="pt-2">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#66584C]">
                      {outlet.features.slice(0, 4).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8C2223]" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-6 sm:px-8 sm:pb-8 pt-0 flex flex-wrap items-center gap-3">
                <a
                  href={outlet.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                {outlet.zomatoUrl && (
                  <a
                    href={outlet.zomatoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#1C1611]/20 hover:border-[#1C1611] bg-white text-[#1C1611] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#8C2223]" />
                    <span>Order Online</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                )}

                <button
                  onClick={() => onNavigate('locations')}
                  className="text-xs font-semibold text-[#8C2223] hover:underline ml-auto"
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
