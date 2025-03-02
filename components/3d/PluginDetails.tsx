import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PluginDetailsProps {
  visible: boolean;
}

const PluginDetails = ({ visible }: PluginDetailsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (visible) {
      setIsVisible(true);
    }
  }, [visible]);
  
  const handleDownload = () => {
    alert('Download started! In a real application, this would download the Revit plugin.');
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">Revit Wall Creator Plugin</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your BIM workflow with our revolutionary wall creation tool
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl p-8 border border-gray-300 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">Key Benefits</h3>
            <ul className="space-y-4">
              {[
                { title: "93% Time Reduction", description: "Create walls in a fraction of the time compared to traditional methods" },
                { title: "Seamless Integration", description: "Works directly within your existing Revit environment" },
                { title: "Automatic Wall Joining", description: "Walls automatically join with existing architecture" },
                { title: "Parametric Control", description: "Easily adjust wall properties after creation" }
              ].map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-gray-800">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-xl p-8 border border-gray-300 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-4">ROI Calculator</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Time Savings</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Traditional Method</p>
                      <p className="text-gray-800 font-bold">3 minutes / wall</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">With Plugin</p>
                      <p className="text-green-700 font-bold">12 seconds / wall</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-4 mb-1">
                    <div className="bg-green-500 h-4 rounded-full" style={{ width: '93%' }}></div>
                  </div>
                  <p className="text-right text-sm text-green-700 font-bold">93% faster</p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Project Impact</h4>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <p className="text-gray-600 text-sm">Average Project</p>
                      <p className="text-gray-800 font-bold">800 walls</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Time Saved</p>
                      <p className="text-blue-700 font-bold">40+ hours</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm italic">Based on typical commercial project metrics</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md shadow-lg text-lg flex items-center mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Revit Plugin
          </motion.button>
          <p className="text-gray-500 mt-4">Compatible with Revit 2020-2025</p>
        </motion.div>
      </div>
    </div>
  );
};

export default PluginDetails;