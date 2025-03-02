import { useState } from 'react';
import { motion } from 'framer-motion';
import WallCreatorContainer from '@/components/3d/WallCreatorContainer';

const HeroSection = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  return (
    <section className="w-full min-h-screen relative">
      <div className={`flex flex-col md:flex-row ${isFullscreen ? 'fixed inset-0 z-50 bg-white' : ''}`}>
        {/* Left side content - only show when not in fullscreen mode */}
        {!isFullscreen && (
          <motion.div 
            className="w-full md:w-2/5 p-8 md:p-12 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Create Walls
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="font-bold">Enterprise-grade</span> Revit plugin that reduces wall creation time by 80%
            </motion.p>
            
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="text-lg font-semibold text-blue-700 mb-3">How it works:</h2>
              <ul className="space-y-2">
                {[
                  "Click between parallel lines to create a wall",
                  "Plugin automatically detects wall width",
                  "Walls join automatically with existing architecture",
                  "Save hours on every project"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 + (index * 0.1) }}
                  >
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 flex items-center justify-center mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-2 text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-lg transition-all duration-300">
                Start Free Trial
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md shadow-sm transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img 
                      src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                      alt="User avatar" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-blue-700">50+ enterprise firms</span> trust CreateWalls
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
        
        {/* Right side 3D animation */}
        <div className={`relative ${isFullscreen ? 'w-full h-screen' : 'w-full md:w-3/5 h-screen'}`}>
          {/* Controls for the 3D view */}
          <div className="absolute top-4 right-4 z-10 flex space-x-2">
            <button 
              onClick={toggleFullscreen}
              className="bg-white p-2 rounded-md shadow-md hover:bg-gray-100 transition-colors"
              aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                </svg>
              )}
            </button>
            
            <button 
              className="bg-white p-2 rounded-md shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Reset view"
              onClick={() => {
                // This will be handled by the WallCreatorContainer component
                const resetEvent = new CustomEvent('resetCamera');
                window.dispatchEvent(resetEvent);
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          
          {/* Instruction overlay */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 bg-white bg-opacity-90 px-4 py-2 rounded-md shadow-md text-center">
            <p className="text-sm text-gray-700">Click between parallel lines to create walls</p>
          </div>
          
          {/* The 3D wall creator component */}
          <WallCreatorContainer />
        </div>
      </div>
      
      {/* Fullscreen exit button for mobile - only shown in fullscreen mode */}
      {isFullscreen && (
        <button 
          onClick={toggleFullscreen}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg md:hidden"
        >
          Exit Fullscreen
        </button>
      )}
    </section>
  );
};

export default HeroSection;