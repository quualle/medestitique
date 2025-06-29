"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaDiamond, FaStar } from 'react-icons/fa6';
import Image from 'next/image';

const pricingPlans = [
  {
    title: 'Botox Behandlung',
    description: 'Gezielte Faltenreduktion',
    price: '€12',
    priceDetail: 'pro Einheit',
    features: [
      'Beratung inklusive',
      'Gesichtszone: ca. €200 - €350',
      'Hält 3-4 Monate',
      'Schnelle 15-minütige Behandlung',
      'Nachuntersuchung'
    ],
    popular: true,
    natural: false,
    icon: '/images/logo.jpg'
  },
  {
    title: 'Hyaluronsäure Filler',
    description: 'Volumenwiederherstellung & -verbesserung',
    price: '€299',
    priceDetail: 'pro ml',
    features: [
      'Premium Filler Produkte',
      'Ergebnisse halten 6-18 Monate',
      '30-minütige Behandlung',
      'Natürlich aussehende Ergebnisse',
      'Verfügbar für alle Behandlungszonen'
    ],
    popular: false,
    natural: false,
    icon: '/images/logo.jpg'
  },
  {
    title: 'Exklusives Anti-Aging Konzept',
    description: '4x 3-Stufen Intensivbehandlung + Analyse',
    price: '€1899',
    priceDetail: 'Gesamtpaket',
    features: [
      '4 Sitzungen (PRP + Infusion + Creme)',
      'Inkl. Nährstoffanalyse (Haarprobe + Besprechung)',
      'Individuelle Infusionstherapie basierend auf Analyseergebnissen',
      'Maximale Hauterneuerung & -gesundheit',
      '100% natürliche, individuelle PRP-Creme inklusive',
      'Langfristige Optimierung der Hautgesundheit'
    ],
    popular: false,
    natural: true,
    icon: '/images/logo.jpg'
  },
  {
    title: 'PRP Behandlung',
    description: 'Intensive Hautregeneration',
    price: '€550',
    priceDetail: '(2 Sitzungen enthalten)',
    features: [
      'Inklusive Blutentnahme & Verarbeitung',
      'Zwei Sitzungen für optimale Ergebnisse',
      'Ergänzende Einzelbehandlung für €300 möglich',
      'Pro Lebensdekade eine PRP Behandlung empfohlen',
      '45-60 minütige Behandlung',
      'Progressive Ergebnisse über 2-3 Monate'
    ],
    popular: false,
    natural: true,
    icon: '/images/logo.jpg'
  }
];

const Pricing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-radial opacity-70"></div>
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: `radial-gradient(circle, ${hexToRGBA('#D2B48C', 0.7)} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}>
      </div>
      
      <div className="section-container relative !pt-0 !pb-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: '80px' } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-px bg-secondary/50 mx-auto mb-8"
          />
          
          <h2 className="heading-2 mb-6">
            <span className="inline text-primary">Behandlungs</span><span className="text-secondary font-medium">preise</span>
          </h2>
          
          <p className="paragraph max-w-3xl mx-auto text-primary/80">
            Wir bieten transparente Preise für unsere Premium-Behandlungen. Alle Verfahren werden von Saskia Heer mit ausschließlich hochwertigen Produkten durchgeführt.
          </p>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={inView ? { width: '80px' } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="h-px bg-secondary/50 mx-auto mt-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              custom={index}
              variants={fadeUpVariant}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden group flex flex-col rounded-2xl backdrop-blur-lg transition-all duration-500 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-secondary/20 via-secondary/10 to-transparent border-2 border-secondary/40 shadow-2xl shadow-secondary/20' 
                  : plan.natural
                  ? 'bg-gradient-to-br from-green-500/10 via-transparent to-transparent border-2 border-green-500/30 shadow-xl shadow-green-500/10'
                  : 'bg-white/40 border border-secondary/20 shadow-xl hover:shadow-2xl hover:border-secondary/40'
              }`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-transparent animate-gradient-shift"></div>
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700"></div>
              </div>
              
              {/* Badge */}
              {plan.popular && (
                <div className="absolute -top-px -right-px">
                  <div className="relative bg-gradient-to-r from-secondary to-secondary/80 text-white px-6 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                    <FaStar className="inline-block h-4 w-4 mr-1 mb-1" />
                    <span className="text-xs font-medium uppercase tracking-wider">Beliebt</span>
                  </div>
                </div>
              )}
              
              {plan.natural && (
                <div className="absolute -top-px -right-px">
                  <div className="relative bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                    <FaLeaf className="inline-block h-4 w-4 mr-1 mb-1" />
                    <span className="text-xs font-medium uppercase tracking-wider">Natürlich</span>
                  </div>
                </div>
              )}
              
              <div className="relative text-center pt-12 pb-8 px-8">
                {/* Icon with glow effect */}
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl scale-150 group-hover:scale-[2] transition-transform duration-700"></div>
                  <div className="relative w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60 shadow-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                    <FaDiamond className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-medium mb-3 text-primary group-hover:text-secondary transition-colors duration-300">{plan.title}</h3>
                
                {/* Animated underline */}
                <div className="relative h-px w-16 mx-auto mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <div className="absolute inset-0 bg-secondary/20"></div>
                </div>
                
                <p className="text-primary/70 text-sm leading-relaxed mb-8">{plan.description}</p>
                
                {/* Price with animated background */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/10 to-transparent rounded-full blur-xl scale-y-75 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="relative">
                    <span className="text-5xl font-light bg-gradient-to-r from-secondary via-secondary/90 to-secondary bg-clip-text text-transparent">{plan.price}</span>
                    <span className="text-primary/60 ml-2 text-sm font-light">{plan.priceDetail}</span>
                  </div>
                </div>
              </div>
              
              {/* Features with stagger animation */}
              <ul className="space-y-3 mb-10 px-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start text-sm group/item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                  >
                    <div className={`h-5 w-5 mt-0.5 ${plan.natural ? 'text-green-500' : 'text-secondary'} flex-shrink-0 transform group-hover/item:scale-110 transition-transform duration-300`}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-primary/80 group-hover/item:text-primary transition-colors duration-300">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <div className="relative text-center pb-10 px-8 mt-auto">
                <a 
                  href="#contact" 
                  className={`relative inline-block px-8 py-4 rounded-full font-light tracking-wider uppercase text-sm overflow-hidden transition-all duration-500 ${
                    plan.popular || plan.natural 
                      ? 'bg-gradient-to-r from-secondary to-secondary/90 text-white shadow-lg hover:shadow-xl hover:scale-105' 
                      : 'bg-white/60 backdrop-blur-sm border border-secondary/30 text-secondary hover:bg-secondary hover:text-white hover:border-secondary hover:scale-105'
                  }`}
                >
                  <span className="relative z-10">Jetzt Termin Buchen</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 text-center p-10 max-w-3xl mx-auto relative"
        >
          <div className="absolute inset-0 bg-light shadow-elegant rounded-none border border-secondary/20"></div>
          
          <div className="relative">
            <div className="gold-circle mb-6"></div>
            <h4 className="font-serif text-2xl font-light mb-3 text-secondary">Individuelle Behandlungspakete</h4>
            <p className="mb-8 max-w-lg mx-auto">
              Suchen Sie einen personalisierten Ansatz für Ihre ästhetischen Ziele? 
              Wir kreieren maßgeschneiderte Behandlungskombinationen, die perfekt auf Ihre individuellen Bedürfnisse zugeschnitten sind.
            </p>
            <a href="#contact" className="button-secondary hover:shadow-gold">
              Individuelles Angebot Anfordern
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Helper function to convert hex color to rgba
function hexToRGBA(hex: string, alpha: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default Pricing;