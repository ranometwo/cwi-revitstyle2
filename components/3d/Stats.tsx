import { motion } from 'framer-motion';

interface StatsProps {
  wallCount: number;
  timePerWall: number;
  timeSaved: number;
}

const Stats = ({ wallCount, timePerWall, timeSaved }: StatsProps) => {
  return (
    <motion.div 
      className="absolute top-4 left-4 z-10 bg-white p-4 rounded-lg text-gray-800 border border-gray-300 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-sm mb-1 font-medium">
        Walls Created: <span className="font-bold text-green-700">{wallCount}</span>
      </div>
      <div className="text-sm mb-1 font-medium">
        Time Saved Per Wall: <span className="font-bold text-blue-700">5 sec</span>
      </div>
      <div className="text-sm font-medium">
        Total Time Saved: <span className="font-bold text-blue-700">{timeSaved.toFixed(2)}</span> min
      </div>
    </motion.div>
  );
};

export default Stats;