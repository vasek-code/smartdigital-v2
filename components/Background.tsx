
import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-dark overflow-hidden pointer-events-none">
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating Orbs / Gradients */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"
      />
      
      <motion.div 
        animate={{ 
          x: [0, -100, 50, 0],
          y: [0, 100, -50, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.3, 0.8, 1]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"
      />

      <motion.div 
        animate={{ 
          x: [-50, 50, -50],
          y: [-20, 20, -20],
          opacity: [0.1, 0.3, 0.1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-900/5 rounded-full blur-[150px]"
      />
    </div>
  );
};

export default Background;
