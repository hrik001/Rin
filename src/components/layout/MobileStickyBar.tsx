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
        aria-label="Mobile quick navigation"
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1C1611]/95 backdrop-blur-md border-t border-[#2E241C] px-3 py-2 shadow-lg"
      >
        <div className="grid grid-cols-3 gap-2 text-center max-w-sm mx-auto">
          <button
            id="mobile-sticky-menu"
            onClick={() => {
              onNavigate('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs transition-colors min-h-[44px] ${
              currentPage === 'menu'
                ? 'text-white bg-[#B42318] font-semibold'
                : 'text-[#D4C7BA] hover:text-white'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4" />
            <span>Menu</span>
          </button>

          <button
            id="mobile-sticky-find-us"
            onClick={() => {
              onNavigate('locations');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs transition-colors min-h-[44px] ${
              currentPage === 'locations'
                ? 'text-white bg-[#B42318] font-semibold'
                : 'text-[#D4C7BA] hover:text-white'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Find Us</span>
          </button>

          <button
            id="mobile-sticky-order"
            onClick={() => setShowOrderSheet(true)}
            className="flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-lg text-xs font-semibold text-white bg-[#8F1D18] hover:bg-[#B42318] transition-colors min-h-[44px]"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order</span>
          </button>
        </div>
      </aside>

      {/* Online Delivery Bottom Sheet */}
      {showOrderSheet && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end justify-center p-4">
          <div className="bg-[#FAF7F2] rounded-2xl max-w-md w-full p-6 space-y-4 border border-[#E6DDD2] animate-in slide-in-from-bottom-4 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-[#E6DDD2]">
              <div>
                <h3 className="text-base font-bold text-[#1C1611]">Order Online in Kolkata</h3>
                <p className="text-xs text-[#66584C]">Fast delivery via partner delivery apps</p>
              </div>
              <button
                onClick={() => setShowOrderSheet(false)}
                className="p-1 rounded-md text-[#66584C] hover:text-[#1C1611] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              {OUTLETS.map((outlet) => (
                <div key={outlet.id} className="p-3.5 rounded-xl border border-[#E6DDD2] bg-white space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#1C1611]">{outlet.name}</span>
                    <span className="text-[10px] text-[#8B7C6E]">{outlet.timings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {outlet.swiggyUrl && (
                      <a
                        href={outlet.swiggyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 rounded-lg bg-[#F8E8E5] text-[#B42318] hover:bg-[#B42318] hover:text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1 min-h-[44px]"
                      >
                        <span>Swiggy</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {outlet.zomatoUrl && (
                      <a
                        href={outlet.zomatoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 px-3 rounded-lg bg-[#FAF7F2] border border-[#E6DDD2] text-[#1C1611] hover:border-[#B42318] hover:text-[#B42318] font-semibold text-xs transition-colors flex items-center justify-center gap-1 min-h-[44px]"
                      >
                        <span>Zomato</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setShowOrderSheet(false)}
              className="w-full py-2.5 rounded-lg border border-[#E6DDD2] text-xs font-medium text-[#66584C] hover:text-[#1C1611] transition-colors min-h-[44px]"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
