'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useCallback, useState, useEffect } from 'react';
import * as THREE from 'three';
import { Wall } from '@/types/wall';
import Scene from './Scene';
import Stats from './Stats';
import Celebration from './Celebration';
import BenefitsPanel from './BenefitsPanel';
import PluginPrompt from './PluginPrompt';

// Main component that sets up the Canvas
export default function WallCreator() {
  const [walls, setWalls] = useState<Wall[]>([]);
  const [timePerWall, setTimePerWall] = useState<number>(0.2); // Default time per wall
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationPosition, setCelebrationPosition] = useState<{ x: string, y: string } | undefined>(undefined);
  const [timeSaved, setTimeSaved] = useState(0);
  const [showClickHint, setShowClickHint] = useState(true);
  const [timeSpent, setTimeSpent] = useState(0);
  
  // Track time spent on the page
  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimeSpent(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Time saved calculation (5 seconds per wall)
  useEffect(() => {
    const savedSeconds = walls.length * 5;
    setTimeSaved(savedSeconds / 60); // Convert to minutes
  }, [walls]);
  
  // Handle wall changes from the Scene component
  const handleWallsChange = useCallback((updatedWalls: Wall[]) => {
    setWalls(updatedWalls);
  }, []);
  
  // Handle wall creation celebration
  const handleWallCreated = useCallback((position?: THREE.Vector3) => {
    // Calculate screen position for celebration if we have the 3D position
    if (position) {
      // This is a simplified calculation - in a real app you'd project the 3D position to 2D
      // For now we'll just use a position near the center
      setCelebrationPosition({
        x: `${50 + (position.x * 5)}%`,
        y: `${50 - (position.z * 5)}%`
      });
    } else {
      setCelebrationPosition(undefined); // Use default position
    }
    
    setShowCelebration(true);
    
    // Hide celebration after 1.5 seconds
    setTimeout(() => {
      setShowCelebration(false);
    }, 1500);
  }, []);
  
  return (
    <>
      <Stats wallCount={walls.length} timePerWall={timePerWall} timeSaved={timeSaved} />
      <Celebration show={showCelebration} position={celebrationPosition} />
      <BenefitsPanel />
      <PluginPrompt wallCount={walls.length} timeSaved={timeSaved} timeSpent={timeSpent} />
      
      <Canvas shadows style={{ background: '#ffffff' }}>
        <PerspectiveCamera makeDefault position={[0, 7, 10]} />
        <OrbitControls 
          enableDamping 
          dampingFactor={0.05} 
          rotateSpeed={0.5}
          minPolarAngle={0} 
          maxPolarAngle={Math.PI / 2} 
        />
        <Scene onWallsChange={handleWallsChange} onWallCreated={handleWallCreated} />
        <fog attach="fog" args={['#f0f0f0', 15, 30]} />
      </Canvas>
    </>
  );
}