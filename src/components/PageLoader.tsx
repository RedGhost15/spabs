import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PageLoaderProps {
  setLoading: (loading: boolean) => void;
}

const PageLoader: React.FC<PageLoaderProps> = ({ setLoading }) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 40); // Adjust timing to complete in ~4 seconds (100 steps * 40ms = 4000ms)

    return () => clearInterval(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'reverse' as const
          }}
          className="mb-4"
        >
          <svg
            className="w-16 h-16 mx-auto text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        </motion.div>
        
        <h2 className="text-xl font-semibold text-white mb-2">Loading Performance</h2>
        
        <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>
        
        <p className="text-gray-400 mt-2">{progress}%</p>
      </div>
    </div>
  );
};

export default PageLoader;