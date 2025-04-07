"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf, FaDiamond, FaStar } from 'react-icons/fa6';
import Image from 'next/image';

const pricingPlans = [
  {
    title: 'Botox Behandlung',
    description: 'Gezielte Faltenreduktion',
    price: '€14',
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
    price: '€300',
    priceDetail: 'pro ml',
    features: [
      'Premium Filler Produkte',
      'Ergebnisse halten 6-18 Monate',
      '30-minütige Behandlung',
      'Natürlich aussehende Ergebnisse',
      'Verfügbar für Lippen, Wangen und Nasolabialfalten'
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
    title: 'PRP Therapie (Einzeln)',
    description: 'Natürliche Hautregeneration',
    price: '€320',
    priceDetail: 'pro Sitzung',
    features: [
      'Inklusive Blutentnahme & Verarbeitung',
      'Einzelne Sitzung zur Auffrischung oder Kennenlernen',
      '45-60 minütige Behandlung',
      'Progressive Ergebnisse über 2-3 Monate',
      'Gut kombinierbar mit Microneedling (+€150)'
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
              className={`price-card relative overflow-hidden group flex flex-col ${
                plan.popular ? 'shadow-gold border-secondary/30' : ''
              } ${
                plan.natural ? 'border-green-400/30' : ''
              }`}
            >
              {/* Top corner decoration */}
              <div className="absolute -top-12 -right-12 w-24 h-24 opacity-20 transform rotate-45 bg-gradient-to-br from-secondary to-transparent"></div>
              
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-6 right-6 text-secondary">
                  <FaStar className="h-6 w-6" />
                </div>
              )}
              
              {/* Natural badge */}
              {plan.natural && (
                <div className="absolute top-6 right-6 text-green-500">
                  <FaLeaf className="h-5 w-5" />
                </div>
              )}
              
              <div className="text-center pt-10 pb-6">
                <div className="w-12 h-12 mx-auto mb-6 rounded-full overflow-hidden shadow-elegant">
                  <div className="w-full h-full bg-gradient-luxury rounded-full flex items-center justify-center">
                    <div className="text-light text-opacity-90">
                      <FaDiamond className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                
                <h3 className="heading-3 mb-2 group-hover:text-secondary transition-colors duration-300">{plan.title}</h3>
                <div className="w-12 h-px bg-secondary/30 mx-auto my-3"></div>
                <p className="text-primary/70 text-sm px-4 mb-6">{plan.description}</p>
                
                <div className="mb-8 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-4xl font-light text-secondary">{plan.price}</span>
                  <span className="text-primary/70 ml-2 text-sm">{plan.priceDetail}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-10 px-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <div className={`h-5 w-5 ${plan.natural ? 'text-green-500' : 'text-secondary'} flex-shrink-0 opacity-80`}>
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-primary/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center pb-10 mt-auto">
                <a 
                  href="#contact" 
                  className={`inline-block ${
                    plan.popular || plan.natural 
                      ? 'button-primary text-light/95' 
                      : 'button-secondary'
                  } transform transition-all duration-500 hover:shadow-gold hover:translate-y-[-4px]`}
                >
                  Termin Vereinbaren
                </a>
              </div>
              
              {/* Subtle hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
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