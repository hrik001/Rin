import React from 'react';
import { MapPin, Clock, Phone, ExternalLink, ShoppingBag, Utensils, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageRoute } from '../types';
import { OUTLETS, FAQ_ITEMS, BRAND_INFO } from '../data/brand';

interface LocationsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate }) => {
  return (
    <div id="locations-page" className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Header */}
      <div className="bg-[#1C1611] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#33261D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/10 text-xs font-mono text-[#F5C842]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Kolkata Outlets</span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Find Us in Kolkata
          </h1>

          <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl mx-auto font-sans-body">
            Experience our handmade momos fresh from the steamer at our 35-seat Lake Market dining room,
            or order from our Entally quick-service delivery hub.
          </p>
        </div>
      </div>

      {/* Outlets Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Outlets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              id={`outlet-card-${outlet.id}`}
              className="bg-white rounded-2xl border border-[#E8DFD3] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
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

                {/* Details */}
                <div className="p-6 sm:p-8 space-y-6">
                  <div>
                    <span className="text-xs font-mono text-[#8C2223] font-bold uppercase tracking-wider">
                      {outlet.area}
                    </span>
                    <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1C1611] mt-1">
                      {outlet.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#66584C] mt-1">
                      {outlet.serviceSummary}
                    </p>
                  </div>

                  {/* Operational Details */}
                  <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] space-y-3 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#8C2223] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#1C1611]">{outlet.address}</p>
                        <p className="text-xs text-[#66584C] mt-0.5">Landmark: {outlet.landmark}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 pt-1 border-t border-[#E8DFD3]/60">
                      <Clock className="w-4 h-4 text-[#8C2223] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#1C1611]">{outlet.timings}</span>
                        <span className="text-xs text-[#66584C] ml-1.5">({outlet.daysOpen})</span>
                      </div>
                    </div>
                  </div>

                  {/* Features / Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#66584C] font-semibold">
                      Location Features & Notes
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#66584C]">
                      {outlet.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8C2223] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seating policy note for Lake Market */}
                  {outlet.id === 'lake-market' && (
                    <div className="p-3 rounded-lg bg-[#F3ECE1] border border-[#E8DFD3] flex items-start gap-2 text-xs text-[#66584C]">
                      <AlertCircle className="w-4 h-4 text-[#8C2223] shrink-0 mt-0.5" />
                      <p>
                        <strong className="text-[#1C1611]">Walk-in Table Policy:</strong> We do not take reservations.
                        Tables are seated on a friendly first-come, first-served walk-in basis.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-6 sm:p-8 pt-0 flex flex-wrap items-center gap-3">
                <a
                  href={outlet.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#F5C842] hover:bg-[#E8BC38] text-[#1C1611] text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
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
                    <span>Zomato</span>
                  </a>
                )}

                {outlet.swiggyUrl && (
                  <a
                    href={outlet.swiggyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#1C1611]/20 hover:border-[#1C1611] bg-white text-[#1C1611] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#FC8019]" />
                    <span>Swiggy</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div className="mt-16 pt-12 border-t border-[#E8DFD3]">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8C2223]">
                Helpful Information
              </span>
              <h2 className="font-serif-heading text-3xl font-bold text-[#1C1611]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-[#66584C]">
                Clear answers regarding dining, locations, and ordering.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {FAQ_ITEMS.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E8DFD3] shadow-xs space-y-2"
                >
                  <h3 className="font-serif-heading font-bold text-base text-[#1C1611]">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
