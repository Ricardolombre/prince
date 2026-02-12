"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, X } from 'lucide-react';
import confetti from 'canvas-confetti';

const ValentineCard = () => {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isAccepted, setIsAccepted] = useState(false);

  const handleNoHover = () => {
    const newX = (Math.random() - 0.5) * 400;
    const newY = (Math.random() - 0.5) * 400;
    setNoButtonPos({ x: newX, y: newY });
  };

  const handleAccept = () => {
    setIsAccepted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fb7185', '#f43f5e', '#ec4899', '#ffffff']
    });
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-rose-100 max-w-md w-full text-center space-y-6"
    >
      {!isAccepted ? (
        <>
          <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-rose-200 shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=500&auto=format&fit=crop" 
              alt="Romantique"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-3xl font-serif text-rose-600 font-bold">
              Ma précieuse...
            </h2>
            <p className="text-rose-500 text-lg font-medium">
              Chaque moment avec toi est un cadeau.
            </p>
            <p className="text-2xl text-rose-700 font-bold pt-4">
              Veux-tu être ma Valentine ?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative h-32">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAccept}
              className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 transition-colors z-10"
            >
              Accepter <Heart fill="currentColor" size={20} />
            </motion.button>

            <motion.button
              animate={{ x: noButtonPos.x, y: noButtonPos.y }}
              onMouseEnter={handleNoHover}
              className="bg-gray-100 text-gray-500 px-8 py-3 rounded-full font-bold shadow-sm flex items-center gap-2 border border-gray-200"
            >
              Refuser <X size={20} />
            </motion.button>
          </div>
        </>
      ) : (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="py-12 space-y-6"
        >
          <div className="flex justify-center">
            <div className="relative">
              <Heart className="text-rose-500 animate-pulse" size={80} fill="currentColor" />
              <Heart className="text-rose-400 absolute top-0 left-0 animate-ping" size={80} />
            </div>
          </div>
          <h2 className="text-4xl font-serif text-rose-600 font-bold">
            OUI ! ❤️
          </h2>
          <p className="text-rose-500 text-xl">
            Tu viens de me rendre le plus heureux !<br/>
            Je t'aime infiniment.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ValentineCard;