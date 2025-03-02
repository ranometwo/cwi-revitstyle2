'use client';

import { useEffect, useState, useRef } from 'react';
import WallCreatorContainer from '@/components/3d/WallCreatorContainer';
import { motion, AnimatePresence } from 'framer-motion';
import PluginDetails from '@/components/3d/PluginDetails';
import EnterpriseSection from '@/components/landing/EnterpriseSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import PricingSection from '@/components/landing/PricingSection';
import ROICalculator from '@/components/landing/ROICalculator';
import CTASection from '@/components/landing/CTASection';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import HeroSection from '@/components/landing/HeroSection';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);
  const roiRef = useRef<HTMLDivElement>(null);
  const enterpriseRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);

  // Prevent hydration errors by only rendering the 3D component on the client
  useEffect(() => {
    setIsMounted(true);
    
    // Add scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowDetails(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-0 bg-white overflow-y-auto">
      <Header 
        onDetailsClick={() => scrollToSection(detailsRef)}
        onROIClick={() => scrollToSection(roiRef)}
        onEnterpriseClick={() => scrollToSection(enterpriseRef)}
        onTestimonialsClick={() => scrollToSection(testimonialsRef)}
        onPricingClick={() => scrollToSection(pricingRef)}
      />
      
      {isMounted && <HeroSection />}
      
      <div ref={detailsRef} className="min-h-screen w-full">
        <PluginDetails visible={showDetails} />
      </div>
      
      <div ref={roiRef} className="w-full">
        <ROICalculator />
      </div>
      
      <div ref={enterpriseRef} className="w-full">
        <EnterpriseSection />
      </div>
      
      <div ref={testimonialsRef} className="w-full">
        <TestimonialsSection />
      </div>
      
      <div ref={pricingRef} className="w-full">
        <PricingSection />
      </div>
      
      <CTASection />
      
      <Footer />
    </main>
  );
}