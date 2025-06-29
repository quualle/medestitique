"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaCheck, FaStar, FaClock, FaUserMd } from 'react-icons/fa';

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

const BotoxLanding = () => {
  const [isSticky, setIsSticky] = useState(false);
  const phoneNumber = '+4915150616959';

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
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-light via-white to-light">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
                <FaUserMd className="text-secondary" />
                <span className="text-sm font-medium text-primary">Saskia Heer, Ärztin</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-light mb-6 text-primary">
                Botox in <span className="text-secondary">Königs Wusterhausen</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary/80 mb-8">
                Professionelle Faltenbehandlung zum fairen Preis
              </p>

              {/* Price Signal */}
              <div className="inline-block bg-secondary/10 backdrop-blur-sm rounded-2xl p-6 mb-8">
                <div className="text-3xl md:text-5xl font-light text-secondary mb-2">
                  ab 179 €
                </div>
                <div className="text-sm text-primary/70">
                  Zornesfalte (Glabella) • MwSt-frei
                </div>
              </div>

              {/* Trust Elements */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <FaUserMd className="text-2xl text-secondary mx-auto mb-2" />
                  <div className="font-medium text-primary">Ärztin mit Erfahrung</div>
                  <div className="text-sm text-primary/70">Medizinische Expertise</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <FaCheck className="text-2xl text-secondary mx-auto mb-2" />
                  <div className="font-medium text-primary">MwSt-frei</div>
                  <div className="text-sm text-primary/70">Ärztliche Leistung</div>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4 shadow-sm">
                  <FaStar className="text-2xl text-secondary mx-auto mb-2" />
                  <div className="font-medium text-primary">Touch-up inklusive</div>
                  <div className="text-sm text-primary/70">Nachbehandlung gratis</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBookingClick}
                  className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Jetzt Termin buchen
                </button>
                <button
                  onClick={handleCallClick}
                  className="px-8 py-4 bg-white hover:bg-light text-primary border-2 border-secondary/30 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <FaPhone className="inline mr-2" />
                  Direkt anrufen
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12 text-primary">
              Transparente <span className="text-secondary">Preise</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Individual Treatments */}
              <div className="bg-light rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-6 text-primary">Einzelbehandlungen</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-secondary/20">
                    <div>
                      <div className="font-medium text-primary">Zornesfalte</div>
                      <div className="text-sm text-primary/60">Glabella</div>
                    </div>
                    <div className="text-xl font-light text-secondary">179 €</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-secondary/20">
                    <div>
                      <div className="font-medium text-primary">Stirn quer</div>
                      <div className="text-sm text-primary/60">Horizontale Falten</div>
                    </div>
                    <div className="text-xl font-light text-secondary">134 €</div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-secondary/20">
                    <div>
                      <div className="font-medium text-primary">Krähenfüße</div>
                      <div className="text-sm text-primary/60">Beidseitig</div>
                    </div>
                    <div className="text-xl font-light text-secondary">215 €</div>
                  </div>
                </div>
              </div>

              {/* Package Deals */}
              <div className="bg-secondary/10 rounded-2xl p-8">
                <h3 className="text-xl font-medium mb-6 text-primary">Vorteilspakete</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-secondary/20">
                    <div>
                      <div className="font-medium text-primary">2 Zonen</div>
                      <div className="text-sm text-primary/60">Stirn + Glabella</div>
                    </div>
                    <div>
                      <div className="text-xl font-light text-secondary">314 €</div>
                      <div className="text-xs text-green-600">Sie sparen 44 €</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-secondary/20">
                    <div>
                      <div className="font-medium text-primary">3 Zonen</div>
                      <div className="text-sm text-primary/60">+ Krähenfüße</div>
                    </div>
                    <div>
                      <div className="text-xl font-light text-secondary">449 €</div>
                      <div className="text-xs text-green-600">Sie sparen 79 €</div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleBookingClick}
                  className="w-full mt-6 px-6 py-3 bg-secondary hover:bg-secondary/90 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Paket buchen
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Widget Section */}
      <section className="py-20 bg-gradient-to-br from-light via-white to-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 text-primary">
              Einfache <span className="text-secondary">Online-Buchung</span>
            </h2>
            <p className="text-lg text-primary/70 mb-10">
              Wählen Sie Ihren Wunschtermin – schnell und unkompliziert
            </p>
            
            {/* Planity Booking Button */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <FaClock className="text-2xl text-secondary" />
                <span className="text-lg text-primary">Verfügbare Termine diese Woche</span>
              </div>
              <button
                onClick={handleBookingClick}
                className="px-10 py-5 bg-gradient-to-r from-secondary to-secondary/90 hover:from-secondary/90 hover:to-secondary text-white rounded-full font-medium text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Zur Online-Terminbuchung
              </button>
              <p className="mt-4 text-sm text-primary/60">
                Sichere Buchung über Planity • Sofortige Bestätigung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-center mb-12 text-primary">
              Häufige <span className="text-secondary">Fragen</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-medium text-lg mb-2 text-primary">Wie lange hält Botox?</h3>
                <p className="text-primary/70">Die Wirkung hält in der Regel 3-4 Monate. Bei regelmäßiger Anwendung kann sich die Wirkdauer verlängern.</p>
              </div>
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-medium text-lg mb-2 text-primary">Ist die Behandlung schmerzhaft?</h3>
                <p className="text-primary/70">Die Behandlung ist nahezu schmerzfrei. Es wird eine sehr feine Nadel verwendet, die kaum spürbar ist.</p>
              </div>
              <div className="bg-light rounded-xl p-6">
                <h3 className="font-medium text-lg mb-2 text-primary">Wann sehe ich erste Ergebnisse?</h3>
                <p className="text-primary/70">Erste Ergebnisse zeigen sich nach 3-5 Tagen, die volle Wirkung entfaltet sich nach etwa 14 Tagen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Button */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isSticky ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white shadow-2xl border-t border-gray-200"
      >
        <div className="p-3">
          <button
            onClick={handleCallClick}
            className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-xl font-medium text-lg"
          >
            <FaPhone />
            Jetzt anrufen
          </button>
        </div>
      </motion.div>

      {/* Desktop Sticky Contact */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: isSticky ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:block"
      >
        <button
          onClick={handleCallClick}
          className="w-16 h-16 bg-primary text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Anrufen"
        >
          <FaPhone className="text-2xl" />
        </button>
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
            }]
          })
        }}
      />
    </>
  );
};

export default BotoxLanding;