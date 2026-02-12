"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ValentineEnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

const ValentineEnvelope: React.FC<ValentineEnvelopeProps> = ({ onOpen, isOpen }) => {
  return (
    <div className="relative cursor-pointer group" onClick={onOpen}>
      <motion.div
        initial={false}
        animate={isOpen ? { y: 150, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-80 h-56 bg-rose-100 rounded-b-lg shadow-2xl flex items-center justify-center"
      >
        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-rose-200 rounded-t-lg origin-top"
          initial={false}
          animate={isOpen ? { rotateX: 180, zIndex: 0 } : { rotateX: 0, zIndex: 20 }}
          transition={{ duration: 0.6 }}
          style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }}
        />
        
        {/* Envelope Body */}
        <div className="absolute inset-0 bg-rose-100 rounded-b-lg z-10 shadow-inner" 
             style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%)' }} 
        />
        
        {/* Heart Seal */}
        <motion.div 
          className="z-30 text-rose-500"
          animate={isOpen ? { scale: 0 } : { scale: 1 }}
          whileHover={{ scale: 1.2 }}
        >
          <Heart fill="currentColor" size={48} />
        </motion.div>

        <div className="absolute bottom-4 text-rose-400 font-serif italic text-sm z-20">
          Clique pour ouvrir...
        </div>
      </motion.div>
    </div>
  );
};

export default ValentineEnvelope;