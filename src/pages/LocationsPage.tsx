import React from 'react';
import { MapPin, Clock, ExternalLink, ShoppingBag, CheckCircle2, AlertCircle, Navigation } from 'lucide-react';
import { PageRoute } from '../types';
import { OUTLETS, FAQ_ITEMS } from '../data/brand';

interface LocationsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const LocationsPage: React.FC<LocationsPageProps> = ({ onNavigate }) => {
  return (
    <div id="locations-page" className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Header */}
      <div className="bg-[#1C1611] text-[#FAF7F2] py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-eyebrow text-[#D4C7BA] border-b border-[#B42318] pb-1 inline-block">
            Outlets &amp; Dining
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF7F2]">
            Find Us in Kolkata
          </h1>

          <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl leading-relaxed">
            Visit our 35-seat Lake Market dining room for hot steamers right off the stove, or order from our Entally delivery hub.
          </p>
        </div>
      </div>

      {/* Outlets Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {/* Outlets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {OUTLETS.map((outlet) => (
            <div
              key={outlet.id}
              id={`outlet-card-${outlet.id}`}
              className="bg-white rounded-xl border border-[#E6DDD2] overflow-hidden flex flex-col justify-between hover:border-[#B42318]/50 transition-all duration-200"
            >
              <div>
                {/* Photo */}
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

                {/* Details */}
                <div className="p-6 space-y-5">
                  <div>
                    <span className="text-xs font-semibold text-[#B42318]">
                      {outlet.area}
                    </span>
                    <h2 className="text-2xl font-bold text-[#1C1611] mt-0.5">
                      {outlet.name}
                    </h2>
                    <p className="text-body-sm text-[#66584C] mt-1">
                      {outlet.serviceSummary}
                    </p>
                  </div>

                  {/* Operational Details */}
                  <div className="p-4 rounded-lg bg-[#FAF7F2] border border-[#E6DDD2] space-y-3 text-xs sm:text-sm">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#B42318] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-[#1C1611]">{outlet.address}</p>
                        <p className="text-xs text-[#8B7C6E] mt-0.5">Landmark: {outlet.landmark}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 pt-2 border-t border-[#E6DDD2]">
                      <Clock className="w-4 h-4 text-[#B42318] shrink-0" />
                      <div>
                        <span className="font-semibold text-[#1C1611]">{outlet.timings}</span>
                        <span className="text-xs text-[#8B7C6E] ml-1.5">({outlet.daysOpen})</span>
                      </div>
                    </div>
                  </div>

                  {/* Features / Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-[#66584C]">
                      Location Highlights
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#66584C]">
                      {outlet.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B42318] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Seating policy note for Lake Market */}
                  {outlet.id === 'lake-market' && (
                    <div className="p-3 rounded-lg bg-[#F8E8E5] border border-[#E6DDD2] flex items-start gap-2 text-xs text-[#66584C]">
                      <AlertCircle className="w-4 h-4 text-[#B42318] shrink-0 mt-0.5" />
                      <p>
                        <strong className="text-[#1C1611]">Walk-in Seating:</strong> We do not take advance table reservations. Tables are seated on a friendly first-come, first-served walk-in basis.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="p-6 pt-0 flex flex-wrap items-center gap-3">
                <a
                  href={outlet.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white text-xs font-semibold transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-80" />
                </a>

                {outlet.zomatoUrl && (
                  <a
                    href={outlet.zomatoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#E6DDD2] hover:border-[#1C1611] bg-white text-[#1C1611] text-xs font-semibold transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#B42318]" />
                    <span>Zomato</span>
                  </a>
                )}

                {outlet.swiggyUrl && (
                  <a
                    href={outlet.swiggyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#E6DDD2] hover:border-[#1C1611] bg-white text-[#1C1611] text-xs font-semibold transition-colors"
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
        <div className="mt-14 pt-10 border-t border-[#E6DDD2]">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="text-eyebrow text-[#B42318]">
                FAQ
              </span>
              <h2 className="text-h2 text-[#1C1611]">
                Frequently Asked Questions
              </h2>
              <p className="text-body text-[#66584C]">
                Helpful details regarding dining, locations, and ordering.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {FAQ_ITEMS.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-[#E6DDD2] space-y-1.5"
                >
                  <h3 className="text-sm font-bold text-[#1C1611]">
                    {faq.question}
                  </h3>
                  <p className="text-body-sm text-[#66584C] leading-relaxed">
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
