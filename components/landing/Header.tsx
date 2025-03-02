import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onDetailsClick: () => void;
  onROIClick: () => void;
  onEnterpriseClick: () => void;
  onTestimonialsClick: () => void;
  onPricingClick: () => void;
}

const Header = ({ 
  onDetailsClick, 
  onROIClick, 
  onEnterpriseClick, 
  onTestimonialsClick, 
  onPricingClick 
}: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div 
            className="text-blue-700 font-bold text-xl mr-2"
            whileHover={{ scale: 1.05 }}
          >
            CreateWalls
          </motion.div>
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Enterprise</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={onDetailsClick}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={onROIClick}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            ROI Calculator
          </button>
          <button 
            onClick={onEnterpriseClick}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Enterprise
          </button>
          <button 
            onClick={onTestimonialsClick}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Testimonials
          </button>
          <button 
            onClick={onPricingClick}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Pricing
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
            Free Trial
          </button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => {
                onDetailsClick();
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
            >
              Features
            </button>
            <button 
              onClick={() => {
                onROIClick();
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
            >
              ROI Calculator
            </button>
            <button 
              onClick={() => {
                onEnterpriseClick();
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
            >
              Enterprise
            </button>
            <button 
              onClick={() => {
                onTestimonialsClick();
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
            >
              Testimonials
            </button>
            <button 
              onClick={() => {
                onPricingClick();
                setMobileMenuOpen(false);
              }}
              className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
            >
              Pricing
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors">
              Free Trial
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;