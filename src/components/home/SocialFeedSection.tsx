import React from 'react';
import { Instagram, Play, ExternalLink } from 'lucide-react';
import { BRAND_INFO, SOCIAL_GALLERY } from '../../data/brand';

export const SocialFeedSection: React.FC = () => {
  return (
    <section id="social-feed-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E7DFD4]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-eyebrow text-[#8C2223]">
              Community & Craft
            </span>
            <h2 className="text-h2 text-[#1C1611]">
              Folded, Steamed & Shared Daily
            </h2>
            <p className="text-body text-[#66584C] max-w-xl">
              Behind-the-scenes momo folding, hot bamboo steamer reveals, and guests enjoying their first Rose Momo.
            </p>
          </div>

          <a
            id="instagram-gallery-follow-btn"
            href={BRAND_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#8C2223] hover:bg-[#721B1C] text-white text-xs font-semibold transition-colors self-start md:self-auto"
          >
            <Instagram className="w-4 h-4 text-[#F5C842]" />
            <span>Follow {BRAND_INFO.instagramHandle}</span>
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SOCIAL_GALLERY.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden bg-[#251E17] aspect-square block border border-[#E7DFD4]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1611]/90 via-[#1C1611]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Tag / Type */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-xs flex items-center gap-1">
                  {post.type === 'reel' && <Play className="w-2.5 h-2.5 fill-white" />}
                  <span>{post.tag}</span>
                </span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold line-clamp-1 group-hover:text-[#F5C842] transition-colors">
                  {post.title}
                </p>
                <p className="text-[11px] text-gray-300 line-clamp-2 mt-0.5 leading-tight">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#66584C]">
            Follow our daily kitchen prep and tag <span className="font-semibold text-[#8C2223]">{BRAND_INFO.instagramHandle}</span> to be featured.
          </p>
        </div>
      </div>
    </section>
  );
};
