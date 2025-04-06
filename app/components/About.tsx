"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="section-container !pt-0 !pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-[url('/images/saskia.jpg')] bg-cover bg-center"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <h4 className="font-serif text-xl font-bold mb-2">Ausbildung</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Medizinstudium, Charité Berlin</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Spezialisierung in Ästhetischer Medizin</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">Fortgeschrittene Ausbildung in Injektionstechniken</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-2 mb-6">Über <span className="text-[#C0A080]">Saskia Heer</span></h2>
            
            <p className="paragraph mb-4">
              Saskia Heer ist eine Ärztin, die sich auf ästhetische Medizin spezialisiert hat, mit einer Leidenschaft dafür, Patienten zu natürlich aussehenden Ergebnissen zu verhelfen, die ihr Selbstvertrauen und Wohlbefinden steigern.
            </p>
            
            <p className="paragraph mb-6">
              Nach Abschluss ihres Medizinstudiums an der renommierten Charité Medizinischen Hochschule in Berlin im Jahr 2024 spezialisierte sich Saskia auf ästhetische Medizin mit Fokus auf nicht-chirurgische Gesichtsverjüngungstechniken. Ihr Ansatz verbindet wissenschaftliche Expertise mit einem künstlerischen Auge für Gesichtsharmonie und -proportion.
            </p>
            
            <div className="bg-primary/30 p-6 rounded-xl mb-8">
              <h4 className="font-serif text-xl font-semibold mb-3">Meine Philosophie</h4>
              <p className="italic">
                "Schönheit bedeutet, das zu verbessern, was bereits vorhanden ist. Ich glaube an subtile, natürlich aussehende Ergebnisse, die meinen Patienten helfen, erfrischt auszusehen und sich in ihrer eigenen Haut wohlzufühlen. Jedes Gesicht erzählt eine einzigartige Geschichte, und meine Aufgabe ist es, seine besten Eigenschaften hervorzuheben."</p>
              <p className="text-right font-medium mt-2">— Saskia Heer</p>
            </div>
            
            <p className="paragraph mb-6">
              Als Gründerin von MedEstetique hat Saskia Heer eine Luxusklinik geschaffen, in der Wissenschaft und Schönheit in einer komfortablen, einladenden Umgebung aufeinandertreffen. Sie bleibt durch kontinuierliche Weiterbildung und Schulungen in den neuesten Techniken und Produkten an der Spitze der ästhetischen Medizin.
            </p>
            
            <a href="#contact" className="button-primary inline-block">
              Beratungstermin Vereinbaren
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;