"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLeaf } from 'react-icons/fa';

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
    natural: false
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
    natural: false
  },
  {
    title: 'Exklusives Anti-Aging Konzept',
    description: '4x 3-Stufen Intensivbehandlung + Analyse',
    price: '€1899',
    priceDetail: 'Gesamtpaket',
    features: [
      '4 Sitzungen (PRP + Infusion + Creme)',
      'Inkl. Nährstoffanalyse (Haarprobe + Besprechung)',
      'Maximale Hauterneuerung & -gesundheit',
      '100% natürliche, individuelle PRP-Creme inklusive',
      'Langfristige Optimierung der Hautgesundheit'
    ],
    popular: false,
    natural: true
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
    natural: true
  }
];

const Pricing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="pricing" className="py-24 bg-primary/20">
      <div className="section-container !pt-0 !pb-0">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 mb-4">Behandlungs<span className="text-[#C0A080]">preise</span></h2>
          <p className="paragraph max-w-3xl mx-auto">
            Wir bieten transparente Preise für unsere Premium-Behandlungen. Alle Verfahren werden von Saskia Heer mit ausschließlich hochwertigen Produkten durchgeführt.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`price-card relative ${plan.popular ? 'ring-2 ring-[#C0A080]' : ''} ${plan.natural ? 'border-2 border-green-300' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C0A080] text-white px-4 py-1 rounded-full text-sm font-bold shadow-md z-10">
                  Beliebteste Wahl
                </div>
              )}
              {plan.natural && !plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md z-10 flex items-center">
                  <FaLeaf className="mr-1" /> Besonders Natürlich
                </div>
              )}
              {plan.natural && plan.popular && (
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-0.5 rounded-full text-xs font-bold shadow-md z-10 flex items-center">
                  <FaLeaf className="mr-1" /> Natürlich
                </div>
              )}
              
              <div className="text-center pt-8 pb-6">
                <h3 className="heading-3 mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#C0A080]">{plan.price}</span>
                  <span className="text-gray-500 ml-1">{plan.priceDetail}</span>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8 px-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className={`h-6 w-6 ${plan.natural ? 'text-green-500' : 'text-[#C0A080]'} flex-shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-center pb-8">
                <a href="#contact" className={plan.popular ? 'button-primary' : 'button-secondary'}>
                  Jetzt Buchen
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto"
        >
          <h4 className="font-serif text-xl font-semibold mb-2">Individuelle Behandlungspakete</h4>
          <p className="mb-4">Suchen Sie einen personalisierten Ansatz? Wir bieten maßgeschneiderte Behandlungskombinationen zu Sonderkonditionen an.</p>
          <a href="#contact" className="button-secondary">
            Individuelles Angebot Anfordern
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;