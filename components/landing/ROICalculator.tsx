import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ROICalculator = () => {
  const [wallsPerProject, setWallsPerProject] = useState(800);
  const [projectsPerYear, setProjectsPerYear] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(85);
  const [teamSize, setTeamSize] = useState(5);
  
  // Calculated values
  const [timeSavedPerYear, setTimeSavedPerYear] = useState(0);
  const [moneySavedPerYear, setMoneySavedPerYear] = useState(0);
  const [roi, setRoi] = useState(0);
  
  // Constants
  const TRADITIONAL_TIME_PER_WALL = 3 * 60; // 3 minutes in seconds
  const PLUGIN_TIME_PER_WALL = 12; // 12 seconds
  const TIME_SAVED_PER_WALL = TRADITIONAL_TIME_PER_WALL - PLUGIN_TIME_PER_WALL; // in seconds
  const PLUGIN_COST_PER_USER = 499; // Annual cost per user
  
  // Calculate ROI whenever inputs change
  useEffect(() => {
    // Total walls per year
    const totalWalls = wallsPerProject * projectsPerYear * teamSize;
    
    // Time saved in hours
    const timeSavedSeconds = totalWalls * TIME_SAVED_PER_WALL;
    const timeSavedHours = timeSavedSeconds / 3600;
    setTimeSavedPerYear(Math.round(timeSavedHours));
    
    // Money saved
    const moneySaved = timeSavedHours * hourlyRate;
    setMoneySavedPerYear(Math.round(moneySaved));
    
    // ROI calculation (Return / Investment)
    const totalInvestment = PLUGIN_COST_PER_USER * teamSize;
    const calculatedRoi = (moneySaved / totalInvestment) * 100;
    setRoi(Math.round(calculatedRoi));
  }, [wallsPerProject, projectsPerYear, hourlyRate, teamSize]);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">ROI Calculator</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how much time and money your firm can save with the CreateWalls plugin
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <motion.div 
              className="p-8 bg-blue-700 text-white"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-6">Input Your Numbers</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Average Walls Per Project
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={wallsPerProject}
                    onChange={(e) => setWallsPerProject(Number(e.target.value))}
                    className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>100</span>
                    <span className="font-bold">{wallsPerProject}</span>
                    <span>2000</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Projects Per Year
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={projectsPerYear}
                    onChange={(e) => setProjectsPerYear(Number(e.target.value))}
                    className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>1</span>
                    <span className="font-bold">{projectsPerYear}</span>
                    <span>50</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Hourly Rate (USD)
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="200"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>$50</span>
                    <span className="font-bold">${hourlyRate}</span>
                    <span>$200</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Team Size (Number of Users)
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={teamSize}
                    onChange={(e) => setTeamSize(Number(e.target.value))}
                    className="w-full h-2 bg-blue-500 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm mt-1">
                    <span>1</span>
                    <span className="font-bold">{teamSize}</span>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="p-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Your Results</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-gray-600 mb-2">Time Saved Per Year</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-blue-700">{timeSavedPerYear}</span>
                    <span className="ml-2 text-gray-600">hours</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    That's {Math.round(timeSavedPerYear / 40)} weeks of full-time work
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-2">Money Saved Per Year</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-green-600">${moneySavedPerYear.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Based on your hourly rate of ${hourlyRate}
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-2">Return on Investment</p>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-blue-700">{roi}%</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Investment: ${PLUGIN_COST_PER_USER * teamSize} (${PLUGIN_COST_PER_USER} per user)
                  </p>
                </div>
                
                <div className="pt-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
                    Get Enterprise Quote
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;