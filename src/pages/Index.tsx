"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ValentineEnvelope from '@/components/ValentineEnvelope';
import ValentineCard from '@/components/ValentineCard';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-pink-50 overflow-hidden p-4">
      {/* Background Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              y: Math.random() * 1000, 
              x: Math.random() * 1000,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [null, Math.random() * -500],
              rotate: [0, 360]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute text-rose-200"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              <h1 className="text-4xl md:text-5xl font-serif text-rose-600 font-bold text-center mb-8">
                Un petit message pour toi...
              </h1>
              <ValentineEnvelope isOpen={isOpen} onOpen={() => setIsOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="w-full flex justify-center"
            >
              <ValentineCard />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <div className="fixed bottom-4 w-full">
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;