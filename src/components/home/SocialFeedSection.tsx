import React from 'react';
import { Play } from 'lucide-react';
import { BRAND_INFO, SOCIAL_LINKS, SOCIAL_GALLERY } from '../../data/brand';
import { SocialIcon } from '../common/SocialIcons';

export const SocialFeedSection: React.FC = () => {
  return (
    <section id="social-feed-section" className="py-16 sm:py-20 bg-[#FAF7F2] border-b border-[#E6DDD2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-eyebrow text-[#B42318]">
              Community &amp; Craft
            </span>
            <h2 className="text-h2 text-[#1C1611]">
              See what we&apos;re folding today.
            </h2>
            <p className="text-body text-[#66584C] max-w-xl">
              Behind-the-scenes momo pleating, morning dough rolling, and hot bamboo steamer reveals right from our Kolkata kitchen.
            </p>
          </div>

          {/* Social Platforms Row */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <a
              id="social-section-instagram-btn"
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#B42318] hover:bg-[#8F1D18] text-white text-xs font-semibold transition-colors shadow-xs"
            >
              <SocialIcon platform="instagram" size={15} />
              <span>Instagram</span>
            </a>

            <a
              id="social-section-whatsapp-btn"
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#E6DDD2] hover:border-[#B42318] text-[#1C1611] text-xs font-semibold transition-colors"
            >
              <SocialIcon platform="whatsapp" size={15} className="text-[#25D366]" />
              <span>WhatsApp</span>
            </a>

            <a
              id="social-section-facebook-btn"
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#E6DDD2] hover:border-[#B42318] text-[#1C1611] text-xs font-semibold transition-colors"
            >
              <SocialIcon platform="facebook" size={15} className="text-[#1877F2]" />
              <span>Facebook</span>
            </a>
          </div>
        </div>

        {/* 6 Grid items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {SOCIAL_GALLERY.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl overflow-hidden bg-[#251F1A] aspect-square block border border-[#E6DDD2] hover:border-[#B42318] transition-colors"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                loading="lazy"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1611]/90 via-[#1C1611]/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Tag / Type */}
              <div className="absolute top-2.5 left-2.5">
                <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/20 text-white backdrop-blur-xs flex items-center gap-1">
                  {post.type === 'reel' && <Play className="w-2.5 h-2.5 fill-white" />}
                  <span>{post.tag}</span>
                </span>
              </div>

              {/* Bottom Title & Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                <p className="text-xs font-bold line-clamp-1 group-hover:text-[#F8E8E5] transition-colors">
                  {post.title}
                </p>
                <p className="text-[10px] text-[#D4C7BA] line-clamp-1 mt-0.5 opacity-90">
                  {post.caption}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Social Follow Footnote */}
        <div className="mt-6 text-center text-xs text-[#8B7C6E]">
          <span>Tag </span>
          <span className="font-semibold text-[#1C1611]">{BRAND_INFO.instagramHandle}</span>
          <span> in your stories when you visit Lake Market or enjoy delivery at home.</span>
        </div>
      </div>
    </section>
  );
};
