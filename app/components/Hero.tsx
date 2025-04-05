"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showBackground, setShowBackground] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Intro animation sequence
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);

    // Show background after intro fades
    const backgroundTimer = setTimeout(() => {
      setShowBackground(true);
    }, 3000);

    // Show content after background appears
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => {
      clearTimeout(introTimer);
      clearTimeout(backgroundTimer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen h-screen flex items-center justify-center">
      {/* Fixed background that stays in place when scrolling */}
      {showBackground && (
        <div className="fixed inset-0 w-full h-full z-0">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/images/logo.jpg')] bg-cover bg-fixed bg-center bg-no-repeat w-full h-full"
          style={{ 
            minHeight: '100vh' 
          }} 
        />
        <div className="absolute inset-0 w-full h-full">
          {/* Dezente Ausrichtungslinien - reduziert auf das Wesentliche */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-1/2 h-px bg-[#C0A080]/10"
          />
        </div>
      </div>
      )}
      
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#FFFBF6] z-50 flex items-center justify-center"
          >
            <motion.h1 
              initial={{ letterSpacing: "0.1em", scale: 0.8 }}
              animate={{ letterSpacing: "0.4em", scale: 1.2 }}
              exit={{ letterSpacing: "0.8em", opacity: 0, y: -50 }}
              transition={{ duration: 1.8 }}
              className="font-serif text-6xl md:text-8xl text-[#C0A080] tracking-widest"
            >
              MedEstetique
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      
      {showContent && (
        <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h1 className="heading-1 mb-6">
              <span 
                className="block font-medium tracking-wide text-[#3B312F]" 
              >
                Entdecken Sie Ihre
              </span>
              <span 
                className="text-[#C0A080] font-bold tracking-wider drop-shadow-md text-shadow-sm" 
                style={{textShadow: "0px 0px 1px rgba(0,0,0,0.2), 0px 1px 2px rgba(0,0,0,0.1)"}} 
              >
                Natürliche Schönheit
              </span>
            </h1>
            <p 
              className="text-base leading-relaxed mb-8 max-w-xl mx-auto text-[#3B312F] font-medium"
            >
              Premium Schönheitsbehandlungen von Ärzten. <br className="hidden md:block" /> 
              Erleben Sie die perfekte Verbindung von Wissenschaft und Schönheit.  
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center mx-16">
              <a 
                href="#treatments" 
                className="button-primary font-semibold text-[#FFFBF6]" 
              >
                Unsere Behandlungen
              </a>
              <a 
                href="#contact" 
                className="button-secondary font-semibold text-[#C0A080]" 
              >
                Termin buchen
              </a>
            </div>
          </motion.div>
        </div>
      )}
      
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#treatments" 
            className="flex flex-col items-center text-[#C0A080]/80 hover:text-[#C0A080] transition-colors" 
            aria-label="Scroll down"
          >
            <div className="w-px h-8 bg-current opacity-50"></div>
            <div className="w-1 h-1 bg-current rounded-full mt-1 animate-bounce"></div>
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;