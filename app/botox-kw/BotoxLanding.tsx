"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaCheck, FaStar, FaClock, FaUserMd, FaShieldAlt, FaAward, FaSyringe, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';
import { FaCircleCheck, FaWandMagicSparkles } from 'react-icons/fa6';

// GA4 Event Tracking
declare global {
  interface Window {
    gtag: any;
  }
}

const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Testimonials Data
const testimonials = [
  {
    name: "Sarah M.",
    age: 42,
    text: "Endlich keine Zornesfalte mehr! Saskia hat das so natürlich gemacht, dass es niemandem auffällt.",
    rating: 5
  },
  {
    name: "Michael K.",
    age: 38,
    text: "Sehr professionell und die Preise sind wirklich fair. Bin jetzt Stammkunde!",
    rating: 5
  },
  {
    name: "Anna L.",
    age: 45,
    text: "Die Beratung war super ehrlich. Keine unnötigen Behandlungen, nur das was wirklich hilft.",
    rating: 5
  }
];

const BotoxLanding = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const phoneNumber = '+4915150616959';
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page_title: 'Botox Landing Page KW',
      page_location: window.location.href,
      campaign: 'botox_sprint'
    });

    // Handle sticky buttons
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Testimonial rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleCallClick = () => {
    trackEvent('call_click', {
      event_category: 'engagement',
      event_label: 'header_call_button'
    });
    
    // Google Ads Conversion Event
    trackEvent('conversion', {
      'send_to': 'AW-17275818810/AbCdEF1GhI',
      'value': 1.0,
      'currency': 'EUR'
    });
    
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleBookingClick = () => {
    trackEvent('booking_start', {
      event_category: 'conversion',
      event_label: 'botox_booking_start'
    });
    
    // Google Ads Conversion Event
    trackEvent('conversion', {
      'send_to': 'AW-17275818810/JkLmNO2PqR',
      'value': 179.0,
      'currency': 'EUR'
    });
    
    // Direct link to Planity Botox service
    window.open('https://www.planity.com/de-DE/glam-glow-beauty-15711-konigs-wusterhausen#service-name-10-0', '_blank');
  };

  return (
    <>
      {/* Enhanced Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-light via-white to-light">
        {/* Animated Background Elements */}
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        </motion.div>
        
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 text-secondary/20"
        >
          <FaSyringe className="text-6xl rotate-45" />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 right-20 text-accent/20"
        >
          <FaWandMagicSparkles className="text-5xl" />
        </motion.div>
        
        <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Trust Badge */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-lg"
                >
                  <FaUserMd className="text-secondary text-xl" />
                  <span className="font-medium text-primary">Saskia Heer, Ärztin</span>
                  <FaShieldAlt className="text-green-500 text-xl" />
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-primary leading-tight">
                  Botox in <br/>
                  <span className="text-secondary font-medium">Königs Wusterhausen</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-primary/80 mb-8 leading-relaxed">
                  Natürliche Faltenbehandlung vom Profi.<br/>
                  <span className="text-lg">Faire Preise. Sichtbare Ergebnisse.</span>
                </p>

                {/* Price Signal Enhanced */}
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-secondary/20 to-accent/20 backdrop-blur-sm rounded-3xl p-8 mb-10 shadow-xl border border-secondary/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-4xl md:text-6xl font-light text-secondary mb-2">
                        ab 179 €
                      </div>
                      <div className="text-sm text-primary/70">
                        Zornesfalte (Glabella) • MwSt-frei
                      </div>
                    </div>
                    <FaSyringe className="text-5xl text-secondary/30 rotate-12" />
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookingClick}
                    className="px-8 py-4 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Jetzt Termin buchen
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCallClick}
                    className="px-8 py-4 bg-white hover:bg-light text-primary border-2 border-secondary/30 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaPhone className="inline mr-2" />
                    Direkt anrufen
                  </motion.button>
                </div>
                
                {/* New Button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <Link 
                    href="/"
                    className="inline-flex items-center gap-2 text-primary/70 hover:text-secondary transition-colors duration-300 group"
                  >
                    <span className="underline underline-offset-4">Mehr erfahren über Medestetique</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right Content - Trust Elements Grid */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 gap-4"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaUserMd className="text-3xl text-secondary mb-3" />
                  <div className="font-medium text-primary text-lg">Ärztin mit Erfahrung</div>
                  <div className="text-sm text-primary/70 mt-1">Medizinische Expertise seit Jahren</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaCheck className="text-3xl text-green-500 mb-3" />
                  <div className="font-medium text-primary text-lg">MwSt-frei</div>
                  <div className="text-sm text-primary/70 mt-1">Ärztliche Leistung</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaStar className="text-3xl text-secondary mb-3" />
                  <div className="font-medium text-primary text-lg">Touch-up inklusive</div>
                  <div className="text-sm text-primary/70 mt-1">Nachbehandlung gratis</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaAward className="text-3xl text-secondary mb-3" />
                  <div className="font-medium text-primary text-lg">Premium Produkte</div>
                  <div className="text-sm text-primary/70 mt-1">Nur Original Botox®</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-20 bg-gradient-to-b from-white to-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
              So einfach zu Ihrem <span className="text-secondary">neuen Look</span>
            </h2>
            <p className="text-lg text-primary/70 max-w-2xl mx-auto">
              In nur 3 Schritten zur natürlichen Verjüngung
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Beratung",
                description: "Persönliches Gespräch über Ihre Wünsche und Möglichkeiten",
                icon: <FaUserMd className="text-3xl" />
              },
              {
                step: "2",
                title: "Behandlung",
                description: "Schmerzfreie 15-minütige Behandlung mit feinen Nadeln",
                icon: <FaSyringe className="text-3xl" />
              },
              {
                step: "3",
                title: "Ergebnis",
                description: "Sichtbare Resultate nach 3-5 Tagen, volle Wirkung nach 14 Tagen",
                icon: <FaWandMagicSparkles className="text-3xl" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {item.step}
                  </div>
                  <div className="text-secondary mb-4 mt-4">{item.icon}</div>
                  <h3 className="text-2xl font-medium mb-3 text-primary">{item.title}</h3>
                  <p className="text-primary/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
              Das sagen unsere <span className="text-secondary">Kunden</span>
            </h2>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-2xl text-yellow-400" />
              ))}
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gradient-to-br from-light to-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
              <FaQuoteLeft className="absolute top-8 left-8 text-6xl text-secondary/10" />
              
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="text-center"
              >
                <p className="text-xl md:text-2xl text-primary/80 italic mb-6 leading-relaxed">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="font-medium text-primary">
                  {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].age} Jahre
                </div>
              </motion.div>

              {/* Testimonial Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'w-8 bg-secondary' : 'bg-secondary/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-light to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light text-center mb-16 text-primary">
              Transparente <span className="text-secondary">Preise</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Individual Treatments */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-medium text-primary">Einzelbehandlungen</h3>
                  <FaSyringe className="text-3xl text-secondary/30" />
                </div>
                
                <div className="space-y-6">
                  {[
                    { name: 'Zornesfalte', subtitle: 'Glabella', price: '179' },
                    { name: 'Stirn quer', subtitle: 'Horizontale Falten', price: '134' },
                    { name: 'Krähenfüße', subtitle: 'Beidseitig', price: '215' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-center py-4 border-b border-gray-100 hover:bg-light/50 px-2 rounded-lg transition-colors"
                    >
                      <div>
                        <div className="font-medium text-lg text-primary">{item.name}</div>
                        <div className="text-sm text-primary/60">{item.subtitle}</div>
                      </div>
                      <div className="text-2xl font-light text-secondary">€{item.price}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Package Deals Enhanced */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-2 rounded-bl-2xl font-medium">
                  SPARE BIS ZU €79
                </div>
                
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-medium text-primary">Vorteilspakete</h3>
                  <FaWandMagicSparkles className="text-3xl text-secondary" />
                </div>
                
                <div className="space-y-6">
                  {[
                    { zones: '2 Zonen', desc: 'Stirn + Glabella', price: '314', save: '44' },
                    { zones: '3 Zonen', desc: '+ Krähenfüße', price: '449', save: '79' }
                  ].map((pkg, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/50 rounded-2xl p-6 hover:bg-white/70 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-xl text-primary mb-1">{pkg.zones}</div>
                          <div className="text-sm text-primary/60 mb-2">{pkg.desc}</div>
                          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            <FaCheck />
                            Sie sparen €{pkg.save}
                          </div>
                        </div>
                        <div className="text-3xl font-light text-secondary">€{pkg.price}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookingClick}
                  className="w-full mt-8 px-6 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Paket buchen & sparen
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
                Warum <span className="text-secondary">Medestetique</span>?
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <FaShieldAlt className="text-4xl" />,
                  title: "Sicherheit garantiert",
                  description: "Ausschließlich zugelassene Originalprodukte und sterile Einwegmaterialien"
                },
                {
                  icon: <FaAward className="text-4xl" />,
                  title: "Expertise & Erfahrung",
                  description: "Ärztin Saskia Heer mit jahrelanger Erfahrung in ästhetischer Medizin"
                },
                {
                  icon: <FaCircleCheck className="text-4xl" />,
                  title: "Natürliche Ergebnisse",
                  description: "Subtile Verbesserungen, die Ihre natürliche Schönheit unterstreichen"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-full mb-6 text-secondary">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-primary">{item.title}</h3>
                  <p className="text-primary/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Booking Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 via-white to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6"
                >
                  <FaClock className="text-3xl text-green-600" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-serif font-light mb-4 text-primary">
                  Freie Termine <span className="text-secondary">diese Woche</span>
                </h2>
                
                <p className="text-lg text-primary/70 mb-8 max-w-2xl mx-auto">
                  Sichern Sie sich jetzt Ihren Wunschtermin und starten Sie mit einem frischen Look ins neue Jahr
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookingClick}
                    className="px-10 py-5 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white rounded-full font-medium text-xl shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Termin online buchen
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCallClick}
                    className="px-10 py-5 bg-white hover:bg-light text-primary border-2 border-secondary/30 rounded-full font-medium text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaPhone className="inline mr-2" />
                    Anrufen
                  </motion.button>
                </div>
                
                <p className="mt-6 text-sm text-primary/60">
                  ✓ Sofortige Terminbestätigung • ✓ Keine Wartezeiten • ✓ Flexible Umbuchu
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section Enhanced */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-serif font-light text-center mb-16 text-primary"
            >
              Häufige <span className="text-secondary">Fragen</span>
            </motion.h2>
            
            <div className="space-y-4">
              {[
                {
                  q: "Wie lange hält Botox?",
                  a: "Die Wirkung hält in der Regel 3-4 Monate. Bei regelmäßiger Anwendung kann sich die Wirkdauer verlängern."
                },
                {
                  q: "Ist die Behandlung schmerzhaft?",
                  a: "Die Behandlung ist nahezu schmerzfrei. Es wird eine sehr feine Nadel verwendet, die kaum spürbar ist."
                },
                {
                  q: "Wann sehe ich erste Ergebnisse?",
                  a: "Erste Ergebnisse zeigen sich nach 3-5 Tagen, die volle Wirkung entfaltet sich nach etwa 14 Tagen."
                },
                {
                  q: "Kann ich direkt nach der Behandlung arbeiten?",
                  a: "Ja, Sie sind sofort gesellschaftsfähig. Kleine Rötungen verschwinden meist innerhalb weniger Stunden."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-light rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-medium text-xl mb-3 text-primary flex items-start gap-3">
                    <FaCircleCheck className="text-secondary mt-1 flex-shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-primary/70 ml-8">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/20 via-accent/20 to-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-primary">
            Bereit für Ihre <span className="text-secondary">Verwandlung</span>?
          </h2>
          
          <p className="text-xl text-primary/80 mb-10 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute Ihren persönlichen Beratungstermin in Königs Wusterhausen
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookingClick}
            className="px-12 py-5 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white rounded-full font-medium text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
          >
            Jetzt Botox-Termin sichern
          </motion.button>
          
          <div className="mt-12">
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-primary/70 hover:text-secondary transition-colors duration-300 group text-lg"
            >
              <span className="underline underline-offset-4">Zurück zu Medestetique</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mobile Sticky Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isSticky ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white shadow-2xl border-t border-gray-200"
      >
        <div className="p-3 grid grid-cols-2 gap-3">
          <button
            onClick={handleBookingClick}
            className="py-4 bg-secondary text-white rounded-xl font-medium text-lg"
          >
            Termin buchen
          </button>
          <button
            onClick={handleCallClick}
            className="py-4 bg-primary text-white rounded-xl font-medium text-lg flex items-center justify-center gap-2"
          >
            <FaPhone />
            Anrufen
          </button>
        </div>
      </motion.div>

      {/* Desktop Sticky Contact */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: isSticky ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleBookingClick}
          className="w-16 h-16 bg-secondary text-white rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300"
          aria-label="Termin buchen"
        >
          <FaCircleCheck className="text-2xl" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCallClick}
          className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl hover:shadow-3xl flex items-center justify-center transition-all duration-300"
          aria-label="Anrufen"
        >
          <FaPhone className="text-2xl" />
        </motion.button>
      </motion.div>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Wie lange hält Botox?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die Wirkung hält in der Regel 3-4 Monate. Bei regelmäßiger Anwendung kann sich die Wirkdauer verlängern."
              }
            }, {
              "@type": "Question",
              "name": "Ist die Behandlung schmerzhaft?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Die Behandlung ist nahezu schmerzfrei. Es wird eine sehr feine Nadel verwendet, die kaum spürbar ist."
              }
            }, {
              "@type": "Question",
              "name": "Wann sehe ich erste Ergebnisse?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Erste Ergebnisse zeigen sich nach 3-5 Tagen, die volle Wirkung entfaltet sich nach etwa 14 Tagen."
              }
            }, {
              "@type": "Question",
              "name": "Kann ich direkt nach der Behandlung arbeiten?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, Sie sind sofort gesellschaftsfähig. Kleine Rötungen verschwinden meist innerhalb weniger Stunden."
              }
            }]
          })
        }}
      />
    </>
  );
};

export default BotoxLanding;