import React, { useState } from 'react';
import { UtensilsCrossed, MapPin, ShoppingBag, Phone, X, ExternalLink } from 'lucide-react';
import { PageRoute } from '../../types';
import { OUTLETS } from '../../data/brand';

interface MobileStickyBarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ currentPage, onNavigate }) => {
  const [showOrderSheet, setShowOrderSheet] = useState(false);

  return (
    <>
      {/* Sticky Bottom Bar */}
      <aside
        id="mobile-bottom-bar"
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1A130E]/95 backdrop-blur-md border-t border-[#33261D] px-2 py-2 safe-area-pb shadow-2xl"
      >
        <div className="grid grid-cols-4 gap-1 text-center">
          <button
            id="mobile-sticky-menu"
            onClick={() => {
              onNavigate('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-[11px] font-medium transition-colors ${
              currentPage === 'menu'
                ? 'text-[#F5C842] bg-white/10 font-semibold'
                : 'text-[#D4C7BA] hover:text-[#FAF7F2]'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 mb-0.5" />
            <span>Menu</span>
          </button>

          <a
            id="mobile-sticky-directions"
            href={OUTLETS[0].googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-[11px] font-medium text-[#D4C7BA] hover:text-[#FAF7F2]"
          >
            <MapPin className="w-4 h-4 mb-0.5 text-[#F5C842]" />
            <span>Directions</span>
          </a>

          <button
            id="mobile-sticky-order"
            onClick={() => setShowOrderSheet(true)}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-[11px] font-medium text-[#1A130E] bg-[#F5C842] font-semibold active:bg-[#E8BC38]"
          >
            <ShoppingBag className="w-4 h-4 mb-0.5" />
            <span>Order</span>
          </button>

          <button
            id="mobile-sticky-outlets"
            onClick={() => {
              onNavigate('locations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-md text-[11px] font-medium transition-colors ${
              currentPage === 'locations'
                ? 'text-[#F5C842] bg-white/10 font-semibold'
                : 'text-[#D4C7BA] hover:text-[#FAF7F2]'
            }`}
          >
            <Phone className="w-4 h-4 mb-0.5" />
            <span>Outlets</span>
          </button>
        </div>
      </aside>

      {/* Quick Order Modal for Mobile */}
      {showOrderSheet && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-[#FAF7F2] text-[#1C1611] rounded-t-2xl sm:rounded-2xl w-full max-w-sm p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E8DFD3] pb-3">
              <div>
                <h3 className="font-serif-heading text-lg font-bold text-[#1C1611]">
                  Order Rinchen&apos;s Momo
                </h3>
                <p className="text-xs text-[#66584C]">
                  Select your preferred delivery platform
                </p>
              </div>
              <button
                onClick={() => setShowOrderSheet(false)}
                className="p-1.5 rounded-full hover:bg-[#E8DFD3] text-[#1C1611]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              <a
                href={OUTLETS[1].zomatoUrl || OUTLETS[0].zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E8DFD3] hover:border-[#8C2223] bg-white transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#E23744] text-white flex items-center justify-center font-bold text-xs">
                    Z
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Zomato</p>
                    <p className="text-[11px] text-[#66584C]">Order from Entally or Lake Market</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8C2223]" />
              </a>

              <a
                href={OUTLETS[0].swiggyUrl || "https://www.swiggy.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-[#E8DFD3] hover:border-[#FC8019] bg-white transition-all shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-[#FC8019] text-white flex items-center justify-center font-bold text-xs">
                    S
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Swiggy</p>
                    <p className="text-[11px] text-[#66584C]">Fresh dispatch across Central & South Kolkata</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#FC8019]" />
              </a>

              <button
                onClick={() => {
                  setShowOrderSheet(false);
                  onNavigate('locations');
                }}
                className="w-full text-center py-2.5 text-xs font-semibold text-[#8C2223] hover:underline"
              >
                Or visit us for Dine-In at Lake Market →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
