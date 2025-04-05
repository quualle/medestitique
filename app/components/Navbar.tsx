"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Startseite', href: '/' },
    { name: 'Behandlungen', href: '#treatments' },
    { name: 'Preise', href: '#pricing' },
    { name: 'Über Uns', href: '#about' },
    { name: 'Kontakt', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}
    >
      <div className="w-full h-px bg-gradient-to-r from-[#333333]/10 via-[#C0A080]/20 to-[#D0D0D0]/10"></div>
      <nav className="section-container !py-0 flex flex-col items-center">
        <Link href="/" className="relative z-50">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mr-5 flex-shrink-0 overflow-hidden" style={{boxShadow: "0 0 20px rgba(138, 110, 80, 0.35), 0 0 6px rgba(138, 110, 80, 0.65), inset 0 0 3px rgba(192, 160, 128, 0.6)"}}>
              <Image src="/images/logo.jpg" alt="MedEstetique Logo" width={112} height={112} className="w-full h-full object-cover" />
            </div>
            {/* Ersetztes Text durch Bild (ohne Cropping) */}
            <Image 
              src="/images/Medestetique.png" 
              alt="MedEstetique Schriftzug" 
              width={450} 
              height={90} 
              className="h-auto" 
              style={{ 
                maxWidth: 'clamp(300px, 40vw, 500px)',
                transform: 'translateY(4px)'
              }} 
            />
          </motion.div>
        </Link>
        
        <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#C0A080]/40 to-transparent my-4"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 justify-center">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="relative font-semibold text-[#3B312F] hover:text-[#C0A080] transition-colors group"
            >
              {link.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#C0A080] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden relative z-50 text-2xl absolute top-6 right-6" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 p-4"
          >
            {navLinks.map(link => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xl font-semibold text-[#3B312F] hover:text-[#C0A080] transition-colors"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              className="button-primary mt-4"
              onClick={toggleMenu}
            >
              Termin Buchen
            </Link>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;