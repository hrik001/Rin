import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { StoryPage } from './pages/StoryPage';
import { LocationsPage } from './pages/LocationsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const getInitialRoute = (): PageRoute => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
    if (path === 'menu') return 'menu';
    if (path === 'story' || path === 'about') return 'story';
    if (path === 'locations' || path === 'outlets') return 'locations';
    if (path === 'contact' || path === 'catering') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
      if (path === 'menu') setCurrentPage('menu');
      else if (path === 'story' || path === 'about') setCurrentPage('story');
      else if (path === 'locations' || path === 'outlets') setCurrentPage('locations');
      else if (path === 'contact' || path === 'catering') setCurrentPage('contact');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    const newPath = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== newPath) {
      window.history.pushState({}, '', newPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic title updates
    const baseTitle = "Rinchen's Momo | Handmade Himalayan Momos in Kolkata";
    if (page === 'menu') {
      document.title = "The Digital Menu | Rinchen's Momo Kolkata";
    } else if (page === 'story') {
      document.title = "Our Story & Rinchen Wangdi Bhutia | Rinchen's Momo";
    } else if (page === 'locations') {
      document.title = "Kolkata Outlets (Lake Market & Entally) | Rinchen's Momo";
    } else if (page === 'contact') {
      document.title = "Contact & Catering Inquiries | Rinchen's Momo";
    } else {
      document.title = baseTitle;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1C1611]">
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:p-2 focus:bg-[#8C2223] focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      {/* Main Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Primary Page Content */}
      <main id="main-content" className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'menu' && <MenuPage onNavigate={handleNavigate} />}
        {currentPage === 'story' && <StoryPage onNavigate={handleNavigate} />}
        {currentPage === 'locations' && <LocationsPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}
