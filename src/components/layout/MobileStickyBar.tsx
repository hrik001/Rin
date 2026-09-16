import React, { useState } from 'react';
import { UtensilsCrossed, MapPin, ShoppingBag, X, ExternalLink } from 'lucide-react';
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
      {/* Streamlined Sticky Bottom Bar */}
      <aside
        id="mobile-bottom-bar"
        aria-label="Mobile quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1C1611]/95 backdrop-blur-md border-t border-[#2E241C] px-4 py-2 shadow-lg"
      >
        <div className="grid grid-cols-3 gap-2 text-center max-w-sm mx-auto">
          <button
            id="mobile-sticky-menu"
            onClick={() => {
              onNavigate('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-colors ${
              currentPage === 'menu'
                ? 'text-[#F5C842] bg-white/10 font-semibold'
                : 'text-[#D4C7BA] hover:text-[#FAF7F2]'
            }`}
          >
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Menu</span>
          </button>

          <button
            id="mobile-sticky-find-us"
            onClick={() => {
              onNavigate('locations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-medium transition-colors ${
              currentPage === 'locations'
                ? 'text-[#F5C842] bg-white/10 font-semibold'
                : 'text-[#D4C7BA] hover:text-[#FAF7F2]'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-[#F5C842]" />
            <span>Find Us</span>
          </button>

          <button
            id="mobile-sticky-order"
            onClick={() => setShowOrderSheet(true)}
            className="flex items-center justify-center gap-1.5 py-2 px-2 rounded-lg text-xs font-semibold text-[#1C1611] bg-[#F5C842] active:bg-[#E8BC38] transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order</span>
          </button>
        </div>
      </aside>

      {/* Clean Order Sheet */}
      {showOrderSheet && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-[#FAF7F2] text-[#1C1611] rounded-2xl w-full max-w-sm p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-[#E7DFD4] pb-3">
              <div>
                <h3 className="text-base font-bold text-[#1C1611]">
                  Order Online
                </h3>
                <p className="text-xs text-[#66584C]">
                  Select your preferred delivery platform
                </p>
              </div>
              <button
                onClick={() => setShowOrderSheet(false)}
                className="p-1.5 rounded-lg hover:bg-[#F3ECE1] text-[#1C1611] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              <a
                href={OUTLETS[1].zomatoUrl || OUTLETS[0].zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#E7DFD4] bg-white hover:border-[#8C2223] transition-colors"
              >
                <div>
                  <p className="font-semibold text-sm text-[#1C1611]">Zomato</p>
                  <p className="text-xs text-[#66584C]">Entally & Lake Market delivery</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#8C2223]" />
              </a>

              <a
                href={OUTLETS[0].swiggyUrl || "https://www.swiggy.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl border border-[#E7DFD4] bg-white hover:border-[#F5C842] transition-colors"
              >
                <div>
                  <p className="font-semibold text-sm text-[#1C1611]">Swiggy</p>
                  <p className="text-xs text-[#66584C]">Central & South Kolkata dispatch</p>
                </div>
                <ExternalLink className="w-4 h-4 text-[#1C1611]" />
              </a>

              <button
                onClick={() => {
                  setShowOrderSheet(false);
                  onNavigate('locations');
                }}
                className="w-full text-center py-2 text-xs font-medium text-[#8C2223] hover:underline"
              >
                Or visit our 35-seat Lake Market restaurant →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
