"use client";

import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FaPhone, FaCheck, FaStar, FaClock, FaUserMd, FaLeaf, FaShieldAlt, FaGift } from 'react-icons/fa';
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa6';

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

// Countdown Timer Hook
const useCountdown = (endDate: Date) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return timeLeft;
};

const SummerSpecialLanding = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const phoneNumber = '+4915150616959';
  const whatsappNumber = '4915150616959';
  const whatsappMessage = 'Hallo, ich interessiere mich für das Summer Special für Faltenbehandlung.';
  
  // Countdown bis 14 Tage ab heute
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 14);
  const timeLeft = useCountdown(endDate);

  // Parallax Effect
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);

  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page_title: 'Summer Special Landing Page KW',
      page_location: window.location.href,
      campaign: 'summer_special'
    });

    // Handle sticky buttons
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
      
      // Track 50% scroll
      if (window.scrollY > document.documentElement.scrollHeight * 0.5) {
        trackEvent('scroll_50_percent', {
          event_category: 'engagement',
          event_label: 'summer_special_scroll_50'
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    trackEvent('call_click', {
      event_category: 'engagement',
      event_label: 'summer_special_call',
      event_value: 179
    });
    
    // Google Ads Conversion
    trackEvent('conversion', {
      'send_to': 'AW-17275818810/CALL_CONVERSION',
      'value': 179.0,
      'currency': 'EUR'
    });
    
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsappClick = () => {
    trackEvent('wa_click', {
      event_category: 'engagement',
      event_label: 'summer_special_whatsapp'
    });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const handleBookingClick = () => {
    trackEvent('booking_click', {
      event_category: 'conversion',
      event_label: 'summer_special_booking',
      event_value: 179
    });
    
    // Google Ads Conversion
    trackEvent('conversion', {
      'send_to': 'AW-17275818810/BOOKING_CONVERSION',
      'value': 179.0,
      'currency': 'EUR'
    });
    
    window.open('https://www.planity.com/de-DE/glam-glow-beauty-15711-konigs-wusterhausen#service-name-10-0', '_blank');
  };

  const faqs = [
    {
      question: "Wie funktioniert die Faltenbehandlung?",
      answer: "Unsere minimalinvasiven Verfahren glätten Falten durch gezielte Muskelentspannung oder Volumenaufbau. Die Behandlung dauert nur 15-30 Minuten und zeigt nach wenigen Tagen sichtbare Ergebnisse."
    },
    {
      question: "Wie lange halten die Ergebnisse?",
      answer: "Je nach Behandlungsart und individuellen Faktoren halten die Ergebnisse zwischen 3-18 Monaten. Bei regelmäßiger Anwendung kann sich die Wirkdauer verlängern."
    },
    {
      question: "Ist die Behandlung sicher?",
      answer: "Absolut. Alle Behandlungen werden von Saskia Heer, einer erfahrenen Ärztin, durchgeführt. Wir verwenden ausschließlich zugelassene Präparate höchster Qualität."
    },
    {
      question: "Was ist im Summer Special enthalten?",
      answer: "Das Special umfasst eine professionelle Faltenbehandlung Ihrer Wahl zum reduzierten Preis, inklusive Beratung und kostenloser Nachbehandlung bei Bedarf."
    }
  ];

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 opacity-60"></div>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-yellow-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-pink-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Summer Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full mb-8 shadow-xl"
              >
                <FaGift className="text-xl" />
                <span className="font-bold text-lg">SUMMER SPECIAL 2024</span>
                <FaGift className="text-xl" />
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 text-primary">
                Falten <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">glätten</span>
                <br />
                <span className="text-3xl md:text-5xl">in Königs Wusterhausen</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-primary/80 mb-10 max-w-3xl mx-auto">
                Nutzen Sie jetzt unsere limitierte Sommer-Aktion für strahlend glatte Haut
              </p>

              {/* Countdown Timer */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto mb-10"
              >
                <p className="text-lg font-medium text-primary mb-4">Angebot endet in:</p>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { value: timeLeft.days, label: 'Tage' },
                    { value: timeLeft.hours, label: 'Stunden' },
                    { value: timeLeft.minutes, label: 'Minuten' },
                    { value: timeLeft.seconds, label: 'Sekunden' }
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl md:text-4xl font-bold text-primary bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-3">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-sm text-primary/60 mt-1">{item.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Price & Trust Elements */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 md:p-10 shadow-2xl max-w-4xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="text-5xl md:text-6xl font-bold mb-2">ab 179 €</div>
                    <div className="text-xl opacity-90">statt regulär ab 299 €</div>
                    <div className="text-lg mt-2 flex items-center justify-center md:justify-start gap-2">
                      <FaGift />
                      <span>Sie sparen bis zu 40%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { icon: FaUserMd, text: "Behandlung durch Ärztin" },
                      { icon: FaShieldAlt, text: "MwSt-freie ärztl. Leistung" },
                      { icon: FaStar, text: "Kostenlose Nachbehandlung" },
                      { icon: FaClock, text: "Termine noch diese Woche" }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + i * 0.1 }}
                        className="flex items-center gap-3 text-lg"
                      >
                        <item.icon className="text-2xl" />
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBookingClick}
                    className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    Jetzt Termin sichern
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCallClick}
                    className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
                  >
                    <FaPhone className="inline mr-2" />
                    Sofort anrufen
                  </motion.button>
                </div>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-12"
              >
                <FaArrowDown className="text-3xl text-primary/40 animate-bounce mx-auto" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
              Ihre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Behandlungsoptionen</span>
            </h2>
            <p className="text-xl text-primary/70 max-w-3xl mx-auto">
              Wählen Sie aus unseren bewährten Verfahren für natürlich glatte Haut
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Muskelentspannung",
                price: "ab 179 €",
                description: "Gezielte Faltenglättung durch Muskelrelaxation",
                features: ["Zornesfalte", "Stirnfalten", "Krähenfüße"],
                duration: "3-4 Monate",
                gradient: "from-purple-500 to-purple-700"
              },
              {
                title: "Hyaluron-Filler",
                price: "ab 224 €",
                description: "Volumenaufbau mit körpereigenem Stoff",
                features: ["Nasolabialfalten", "Lippen", "Wangen"],
                duration: "6-18 Monate",
                gradient: "from-pink-500 to-pink-700"
              },
              {
                title: "PRP Eigenblut",
                price: "ab 300 €",
                description: "Natürliche Hautverjüngung mit Wachstumsfaktoren",
                features: ["Hautstraffung", "Regeneration", "Anti-Aging"],
                duration: "3-6 Monate",
                gradient: "from-orange-500 to-orange-700"
              }
            ].map((treatment, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all">
                  <div className={`w-16 h-16 bg-gradient-to-r ${treatment.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <FaLeaf className="text-white text-2xl" />
                  </div>
                  
                  <h3 className="text-2xl font-medium mb-2 text-primary">{treatment.title}</h3>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
                    {treatment.price}
                  </p>
                  <p className="text-primary/70 mb-6">{treatment.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {treatment.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-primary/80">
                        <FaCheck className="text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-sm text-primary/60 mb-6">
                    Wirkdauer: {treatment.duration}
                  </div>
                  
                  <button
                    onClick={handleBookingClick}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all"
                  >
                    Auswählen
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
              Was unsere <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Kunden sagen</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Anna K.", text: "Fantastisches Ergebnis! Sehr natürlich und genau was ich wollte.", rating: 5 },
              { name: "Michael S.", text: "Professionelle Beratung und schmerzfreie Behandlung. Top!", rating: 5 },
              { name: "Sarah L.", text: "Die Ärztin nimmt sich Zeit und erklärt alles genau. Sehr vertrauenswürdig.", rating: 5 }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <FaStar key={j} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-primary/80 mb-4 italic">"{review.text}"</p>
                <p className="font-medium text-primary">{review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6 text-primary">
              Häufige <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Fragen</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/50 transition-colors"
                >
                  <h3 className="font-medium text-lg text-primary pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: activeAccordion === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-600"
                  >
                    <FaArrowDown />
                  </motion.div>
                </button>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: activeAccordion === i ? 'auto' : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-primary/70">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Sichern Sie sich Ihren Termin
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nur noch wenige Termine in der Aktionswoche verfügbar
            </p>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-10">
              <div className="text-3xl font-bold mb-4">
                Nur noch {Math.floor(Math.random() * 5) + 3} Termine diese Woche frei!
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookingClick}
                  className="px-10 py-5 bg-white text-purple-600 rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all"
                >
                  Jetzt online buchen
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleWhatsappClick}
                  className="px-10 py-5 bg-green-500 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3"
                >
                  <FaWhatsapp className="text-2xl" />
                  WhatsApp Termin
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Sticky Buttons */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: isSticky ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white shadow-2xl border-t border-gray-200"
      >
        <div className="grid grid-cols-2 gap-2 p-3">
          <button
            onClick={handleCallClick}
            className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-medium"
          >
            <FaPhone />
            Anrufen
          </button>
          <button
            onClick={handleWhatsappClick}
            className="flex items-center justify-center gap-2 py-3 bg-green-500 text-white rounded-xl font-medium"
          >
            <FaWhatsapp />
            WhatsApp
          </button>
        </div>
      </motion.div>

      {/* Desktop Sticky Contact */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: isSticky ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleCallClick}
          className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center"
          aria-label="Anrufen"
        >
          <FaPhone className="text-2xl" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleWhatsappClick}
          className="w-16 h-16 bg-green-500 text-white rounded-full shadow-xl hover:shadow-2xl flex items-center justify-center"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </motion.button>
      </motion.div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Medestetique - Summer Special",
            "description": "Professionelle Faltenbehandlung in Königs Wusterhausen",
            "url": "https://medestetique.de/summer-special-kw",
            "telephone": phoneNumber,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Königs Wusterhausen",
              "addressRegion": "Brandenburg",
              "addressCountry": "DE"
            },
            "priceRange": "€€",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "18:00"
            }
          })
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </>
  );
};

export default SummerSpecialLanding;