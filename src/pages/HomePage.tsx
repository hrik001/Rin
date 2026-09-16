import React from 'react';
import { PageRoute } from '../types';
import { AnnouncementStrip } from '../components/home/AnnouncementStrip';
import { HeroSection } from '../components/home/HeroSection';
import { BrandIntroSection } from '../components/home/BrandIntroSection';
import { SignatureRoseMomoSection } from '../components/home/SignatureRoseMomoSection';
import { FeaturedDishesSection } from '../components/home/FeaturedDishesSection';
import { CraftAndHeritageSection } from '../components/home/CraftAndHeritageSection';
import { FounderStorySection } from '../components/home/FounderStorySection';
import { PressAndEditorialSection } from '../components/home/PressAndEditorialSection';
import { OutletsPreviewSection } from '../components/home/OutletsPreviewSection';
import { SocialFeedSection } from '../components/home/SocialFeedSection';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div id="home-page" className="min-h-screen">
      <AnnouncementStrip onNavigate={onNavigate} />
      <HeroSection onNavigate={onNavigate} />
      <BrandIntroSection onNavigate={onNavigate} />
      <SignatureRoseMomoSection onNavigate={onNavigate} />
      <FeaturedDishesSection onNavigate={onNavigate} />
      <CraftAndHeritageSection onNavigate={onNavigate} />
      <FounderStorySection onNavigate={onNavigate} />
      <PressAndEditorialSection />
      <OutletsPreviewSection onNavigate={onNavigate} />
      <SocialFeedSection />
      <FinalCtaSection onNavigate={onNavigate} />
    </div>
  );
};
