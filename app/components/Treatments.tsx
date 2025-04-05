// @ts-nocheck

"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaSyringe, FaWater, FaTint, FaChevronDown, FaSmile, FaAngry, FaGrinAlt, FaUserAlt, FaTeeth, 
         FaColumns, FaChartPie, FaCircle, FaBrain, FaSnowflake, FaGrimace, FaBabyCarriage, 
         FaAddressCard, FaLaughBeam, FaSun, FaEye, FaHeartbeat, FaSmileWink, FaSadTear, FaArrowUp,
         FaLeaf, FaFlask, FaVial, FaWind, FaDna, FaVials } from 'react-icons/fa';
import React from 'react';

// Sub-treatments for Botox
const botoxSubTreatments = [
  {
    id: 'eyebrowLift',
    title: 'AUGENBRAUENLIFTING',
    icon: <FaEye />,
    description: 'Natürliches Anheben der Augenbrauen für einen offeneren, wacheren Blick.'
  },
  {
    id: 'barbieBotox',
    title: 'BARBIE BOTOX®',
    icon: <FaBabyCarriage />,
    description: 'Gezielte Behandlung für einen schlanken, definierten Hals und Nackenbereich.'
  },
  {
    id: 'migraineBotox',
    title: 'BOTOX® GEGEN MIGRÄNE',
    icon: <FaBrain />,
    description: 'Lindert chronische Migränesymptome durch gezielte Muskelentspannung im Kopf- und Nackenbereich.'
  },
  {
    id: 'hyperhidrosisBotox',
    title: 'BOTOX® GEGEN SCHWITZEN',
    icon: <FaSnowflake />,
    description: 'Blockiert Schweißdrüsen zur Reduzierung übermäßigen Schwitzens in Achseln, Händen oder Füßen.'
  },
  {
    id: 'bruxismBotox',
    title: 'BOTOX® GEGEN ZÄHNEKNIRSCHEN',
    icon: <FaGrimace />,
    description: 'Entspannt die Kiefermuskulatur und reduziert nächtliches Zähneknirschen und dessen Folgebeschwerden.'
  },
  {
    id: 'bunnyLines',
    title: 'BUNNY LINES',
    icon: <FaSmileWink />,
    description: 'Glättet feine Nasenfalten, die beim Lächeln oder Naserümpfen entstehen.'
  },
  {
    id: 'slimming',
    title: 'GESICHTSVERSCHMÄLERUNG',
    icon: <FaAddressCard />,
    description: 'Formt das Gesicht durch gezielte Masseteren-Entspannung für eine schlankere Kieferpartie.'
  },
  {
    id: 'gummySmile',
    title: 'GUMMY SMILE',
    icon: <FaLaughBeam />,
    description: 'Reduziert übermäßiges Zahnfleischzeigen beim Lächeln für ein harmonischeres Erscheinungsbild.'
  },
  {
    id: 'crowsFeet',
    title: 'KRÄHENFÜSSE ENTFERNEN',
    icon: <FaEye />,
    description: 'Glättet feine Fältchen an den äußeren Augenwinkeln für einen jugendlicheren Blick.'
  },
  {
    id: 'lipFlip',
    title: 'LIP FLIP',
    icon: <FaSmile />,
    description: 'Subtile Anhebung der Oberlippe ohne Filler für einen volleren Lippeneffekt.'
  },
  {
    id: 'mouthCorners',
    title: 'MUNDWINKEL ANHEBEN',
    icon: <FaSmile />,
    description: 'Entspannt die Muskeln, die Mundwinkel nach unten ziehen, für ein freundlicheres Erscheinungsbild.'
  },
  {
    id: 'microBotox',
    title: 'MICRO–BOTOX®',
    icon: <FaSun />,
    description: 'Oberflächliche Mikro-Injektionen zur Verfeinerung der Hautstruktur und Porenverkleinerung.'
  },
  {
    id: 'noseTip',
    title: 'NASENSPITZE ANHEBEN',
    icon: <FaArrowUp />,
    description: 'Nicht-chirurgische Anhebung der Nasenspitze durch gezielte Muskelentspannung.'
  },
  {
    id: 'foreheadLines',
    title: 'STIRNFALTEN UNTERSPRITZEN',
    icon: <FaSadTear />,
    description: 'Glättung horizontaler Stirnfalten für ein entspannteres, jugendlicheres Erscheinungsbild.'
  },
  {
    id: 'touchUp',
    title: 'NACHSPRITZEN / MEHRAUFWAND',
    icon: <FaSyringe />,
    description: 'Ausbesserung oder Intensivierung der Botox-Behandlung für optimale und länger anhaltende Ergebnisse.'
  }
];

// Sub-treatments for Hyaluron
const hyaluronSubTreatments = [
  {
    id: 'hyaluronidase',
    title: 'HYALURONIDASE (HYLASE)',
    icon: <FaSyringe />,
    description: 'Enzym zur Abbau von unerwünschten oder überschüssigen Hyaluronsäure-Fillern.'
  },
  {
    id: 'jawline',
    title: 'JAWLINE',
    icon: <FaTeeth />,
    description: 'Definieren und konturieren der Kieferlinie für ein harmonisches Profil.'
  },
  {
    id: 'chin',
    title: 'KINNAUFBAU',
    icon: <FaUserAlt />,
    description: 'Verbesserung der Kinnform und -projektion für ein ausgewogenes Gesichtsprofil.'
  },
  {
    id: 'lips',
    title: 'LIPPENAUFBAU',
    icon: <FaSmile />,
    description: 'Natürliche Volumenverbesserung und Definition der Lippen.'
  },
  {
    id: 'marionette',
    title: 'MARIONETTENFALTEN',
    icon: <FaAngry />,
    description: 'Korrektur der abwärts verlaufenden Falten zwischen Mundwinkeln und Kinn.'
  },
  {
    id: 'mouth',
    title: 'MUNDFALTEN ENTFERNEN',
    icon: <FaSmile />,
    description: 'Glättung von Falten rund um den Mund für einen jugendlicheren Ausdruck.'
  },
  {
    id: 'corners',
    title: 'MUNDWINKEL ANHEBEN',
    icon: <FaGrinAlt />,
    description: 'Anheben herabhängender Mundwinkel für einen freundlicheren Gesichtsausdruck.'
  },
  {
    id: 'nose',
    title: 'NASENKORREKTUR MIT HYALURONSÄURE',
    icon: <FaUserAlt />,
    description: 'Nicht-chirurgische Nasenformung für eine harmonischere Gesichtsbalance.'
  },
  {
    id: 'nasolabial',
    title: 'NASOLABIALFALTE',
    icon: <FaColumns />,
    description: 'Milderung der Falten zwischen Nase und Mundwinkeln.'
  },
  {
    id: 'tearTrough',
    title: 'TRÄNENRINNE UNTERSPRITZEN',
    icon: <FaWater />,
    description: 'Auffüllung von Tränenrinnen zur Reduzierung von Augenringen und müdem Aussehen.'
  },
  {
    id: 'vLift',
    title: 'V-LIFT – FACELIFT OHNE OP',
    icon: <FaChartPie />,
    description: 'Natürliche Gesichtsstraffung für eine definierte V-förmige Gesichtskontur ohne Chirurgie.'
  },
  {
    id: 'cheeks',
    title: 'WANGENAUFBAU',
    icon: <FaCircle />,
    description: 'Wiederherstellung von Wangenvolumen für jugendliches Aussehen und Konturierung.'
  }
];

const treatments = [
  {
    id: 'botox',
    title: 'Botox Behandlung',
    icon: <FaSyringe className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Reduzieren Sie feine Linien und Falten mit unseren Premium-Botox-Behandlungen.',
    hasSubMenu: true,
    subTreatments: botoxSubTreatments,
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Botox (Botulinumtoxin) ist ein gereinigtes Protein, das vorübergehend die Gesichtsmuskeln entspannt, die Falten verursachen. Es wird hauptsächlich bei dynamischen Falten eingesetzt – jenen, die bei Gesichtsausdrücken entstehen.
        </p>
        <p className="paragraph mb-4">
          Unsere Botox-Behandlungen werden mit Präzision durchgeführt, um natürlich aussehende Ergebnisse zu erzielen, die Ihr Erscheinungsbild verbessern und gleichzeitig Ihre Ausdrucksfähigkeit bewahren. Saskia Heer analysiert sorgfältig Ihre Gesichtsstruktur, um einen personalisierten Behandlungsplan zu entwickeln.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Glättet Stirnfalten, Krähenfüße und Zornesfalten</li>
          <li>Verhindert die Vertiefung bestehender Falten</li>
          <li>Schnelle Behandlung mit minimaler Ausfallzeit</li>
          <li>Ergebnisse halten typischerweise 3-4 Monate</li>
          <li>Kann mit anderen Behandlungen für eine umfassende Verjüngung kombiniert werden</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Beratung und Gesichtsanalyse</li>
          <li>Präzise Markierung der Injektionspunkte</li>
          <li>Schnelles Injektionsverfahren (15-20 Minuten)</li>
          <li>Ergebnisse entwickeln sich über 3-14 Tage</li>
          <li>Nachsorgetermin zur Ergebnisbewertung</li>
        </ol>
      </>
    )
  },
  {
    id: 'hyaluronic',
    title: 'Hyaluronsäure Filler',
    icon: <FaWater className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Stellen Sie Volumen und Feuchtigkeit mit Hyaluronsäure-Fillern wieder her.',
    hasSubMenu: true,
    subTreatments: hyaluronSubTreatments,
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Hyaluronsäure ist eine natürlich vorkommende Substanz in Ihrem Körper, die hilft, die Hautfeuchtigkeit und das Volumen zu erhalten. Mit zunehmendem Alter nimmt unsere natürliche Hyaluronsäure ab, was zu Volumenverlust und Faltenbildung führt.
        </p>
        <p className="paragraph mb-4">
          Unsere Premium-Hyaluronsäure-Filler stellen verlorenes Volumen wieder her, verbessern die Gesichtskonturen und erhöhen die Hautfeuchtigkeit. Dr. Heer verwendet fortschrittliche Techniken, um Filler präzise dort zu platzieren, wo sie für natürlich aussehende Ergebnisse benötigt werden.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Stellt sofort verlorenes Volumen in Wangen, Schläfen und Kieferlinie wieder her</li>
          <li>Glättet tiefe Falten und Nasolabialfalten</li>
          <li>Verbessert Lippenvolumen und -kontur</li>
          <li>Erhöht die Hautfeuchtigkeit und -textur</li>
          <li>Ergebnisse halten je nach behandeltem Bereich 6-18 Monate</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Umfassende Gesichtsanalyse</li>
          <li>Auftragen von lokaler Betäubung auf Wunsch</li>
          <li>Strategische Injektion von Premium-Fillern</li>
          <li>Sanfte Massage zur optimalen Platzierung</li>
          <li>Sofortige Ergebnisse mit möglichen kleinen Nachbesserungen</li>
        </ol>
      </>
    )
  },
  {
    id: 'prp',
    title: 'PRP Therapie',
    icon: <FaTint className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Nutzen Sie die natürlichen Heilkräfte Ihres Körpers mit der PRP-Therapie.',
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Die Platelet-Rich Plasma (PRP) Therapie nutzt die Heilungseigenschaften Ihres eigenen Blutes, um die Haut zu verjüngen und die natürliche Kollagenproduktion zu stimulieren. Bei dieser fortschrittlichen Behandlung wird zunächst eine kleine Menge Ihres Blutes entnommen, die dann aufbereitet wird, um das plättchenreiche Plasma zu isolieren.
        </p>
        <p className="paragraph mb-4">
          Das konzentrierte PRP, reich an Wachstumsfaktoren, wird dann durch Mikroinjektionen in Ihre Haut eingebracht oder mit Microneedling für verstärkte Ergebnisse kombiniert. Dieser natürliche Ansatz zur Hautverjüngung fördert die Zellerneuerung und Geweberegeneration.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Verbessert Hauttextur, -ton und -festigkeit</li>
          <li>Reduziert feine Linien und Falten</li>
          <li>Minimiert Aknenarben und Dehnungsstreifen</li>
          <li>Stimuliert das Haarwachstum bei Anwendung zur Haarregeneration</li>
          <li>Nutzt den natürlichen Heilungsprozess Ihres Körpers mit minimalem Allergierisiko</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Blutentnahme (ähnlich einer Routineblutuntersuchung)</li>
          <li>Aufbereitung des Blutes zur Isolierung von PRP</li>
          <li>Auftragen einer lokalen Betäubung</li>
          <li>Verabreichung von PRP durch Injektion oder Microneedling</li>
          <li>Mehrere Sitzungen im Abstand von 4-6 Wochen für optimale Ergebnisse</li>
        </ol>
      </>
    )
  },
  {
    id: 'mesotherapy',
    title: 'Mesotherapie',
    icon: <FaVials className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Injizierte Nährstoffcocktails für strahlende, revitalisierte Haut.',
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Die Mesotherapie ist ein minimal-invasives Verfahren, bei dem spezielle Wirkstoffkombinationen aus Vitaminen, Mineralien, Aminosäuren und Hyaluronsäure direkt in die mittlere Hautschicht (Mesoderm) injiziert werden, um die Zellerneuerung anzuregen und die Hautqualität zu verbessern.
        </p>
        <p className="paragraph mb-4">
          Diese maßgeschneiderten Cocktails werden individuell auf Ihre Hautbedürfnisse abgestimmt und mit feinen Nadeln präzise in die zu behandelnden Bereiche eingebracht, wodurch die Wirkstoffe direkt dort wirken können, wo sie am meisten benötigt werden.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Verbessert Hautfeuchtigkeit, Elastizität und Festigkeit</li>
          <li>Reduziert feine Linien und erste Anzeichen der Hautalterung</li>
          <li>Revitalisiert müde, fahle Haut und verleiht einen natürlichen Glow</li>
          <li>Stimuliert die Kollagenproduktion für langanhaltende Ergebnisse</li>
          <li>Kann gezielt auf Problemzonen wie dunkle Augenringe oder Halsfalten angewendet werden</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Ausführliche Hautanalyse und Besprechung Ihrer individuellen Ziele</li>
          <li>Reinigung und Vorbereitung der Behandlungsbereiche</li>
          <li>Präzise Injektion der maßgeschneiderten Wirkstoffcocktails</li>
          <li>Kurze Ruhezeit und Anwendung beruhigender Produkte</li>
          <li>Mehrere Sitzungen im Abstand von 2-4 Wochen für optimale Ergebnisse</li>
        </ol>
      </>
    )
  },
  {
    id: 'polynucleotides',
    title: 'Polynukleotide',
    icon: <FaDna className="text-4xl text-[#C0A080]" />,
    shortDescription: 'DNA-basierte Hautregeneration für tiefgreifende Verjüngungseffekte.',
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Polynukleotide sind hochreine, natürliche DNA-Fragmente, die aus Lachsspermien gewonnen werden und eine intensive biostimulatorische Wirkung auf die Haut haben. Diese innovative Behandlung wirkt auf zellulärer Ebene, um die Hautregeneration zu beschleunigen und das Hautgewebe zu revitalisieren.
        </p>
        <p className="paragraph mb-4">
          Die Polynukleotid-Therapie aktiviert die Fibroblasten, die für die Produktion von Kollagen, Elastin und Hyaluronsäure verantwortlich sind, und verbessert so die Hautqualität von innen heraus. Dieses fortschrittliche Verfahren wird häufig als "biologisches Anti-Aging" bezeichnet, da es die natürlichen Erneuerungsprozesse der Haut unterstützt.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Fördert die Hautregeneration und Gewebereparatur</li>
          <li>Stimuliert die Neubildung von Kollagen und Elastin</li>
          <li>Verbessert die Hautfestigkeit und -elastizität</li>
          <li>Reduziert Falten und Linien nachhaltig</li>
          <li>Verringert Entzündungen und fördert die Wundheilung</li>
          <li>Natürlicher Ansatz mit minimalen Nebenwirkungen</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Ausführliche Hautanalyse und Beratung</li>
          <li>Reinigung und Vorbereitung der zu behandelnden Bereiche</li>
          <li>Präzise Injektion der Polynukleotid-Lösung in die entsprechenden Hautschichten</li>
          <li>Sanfte Massage zur gleichmäßigen Verteilung der Wirkstoffe</li>
          <li>Typischerweise 3-4 Behandlungen im Abstand von 2-3 Wochen für optimale Ergebnisse</li>
        </ol>
      </>
    )
  },
  {
    id: 'infusion',
    title: 'Infusionstherapie',
    icon: <FaFlask className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Hochdosierte Vitamin- und Nährstoffinfusionen für Ihr Wohlbefinden.',
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Die Infusionstherapie ist eine medizinische Methode, bei der hochkonzentrierte Vitamine, Mineralien, Aminosäuren und Antioxidantien direkt in den Blutkreislauf verabreicht werden. Durch die Umgehung des Verdauungssystems erreichen die Nährstoffe eine höhere Bioverfügbarkeit und können ihre optimale Wirkung entfalten.
        </p>
        <p className="paragraph mb-4">
          Unsere individuell zusammengestellten Infusionen werden an Ihre spezifischen Bedürfnisse angepasst, sei es zur Stärkung des Immunsystems, zur Steigerung der Energie, zur Förderung der Hautgesundheit oder zur allgemeinen Vitalitätssteigerung. Die Behandlung ist ein effektiver Weg, um Nährstoffdefizite auszugleichen und Ihr Wohlbefinden zu steigern.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Sofortige Verfügbarkeit von essentiellen Nährstoffen</li>
          <li>Gesteigertes Energieniveau und verbesserte Vitalität</li>
          <li>Stärkung des Immunsystems und der allgemeinen Gesundheit</li>
          <li>Verbesserte Hautqualität und -ausstrahlung</li>
          <li>Unterstützung bei der Erholung nach körperlicher Belastung</li>
          <li>Reduzierung von oxidativem Stress und Entzündungen</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Ausführliche Anamnese und Beratungsgespräch</li>
          <li>Individuelles Zusammenstellen der Infusionslösung</li>
          <li>Vorbereitung und Einleitung der Infusion durch medizinisches Fachpersonal</li>
          <li>Ruhige, entspannte Atmosphäre während der 30-60 minütigen Infusion</li>
          <li>Nachbesprechung und Empfehlungen für Folgebehandlungen</li>
        </ol>
      </>
    )
  }
];

const Treatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedSubTreatment, setSelectedSubTreatment] = useState(null);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  // Handle selection of a treatment
  const handleTreatmentClick = (treatment: any) => {
    setSelectedTreatment(treatment);
    
    // If the treatment has sub-treatments and it's the hyaluronic one, show the submenu
    if (treatment.hasSubMenu) {
      setShowSubMenu(true);
      // Default to first sub-treatment if none is selected
      if (!selectedSubTreatment) {
        setSelectedSubTreatment(treatment.subTreatments[0]);
      }
    } else {
      setShowSubMenu(false);
      setSelectedSubTreatment(null);
    }
  };

  // Handle selection of a sub-treatment
  const handleSubTreatmentClick = (subTreatment: any) => {
    setSelectedSubTreatment(subTreatment);
  };

  return (
    <section id="treatments" className="pt-32 pb-24 bg-gradient-to-b from-[#F9F0E6] to-[#FFFBF6] relative overflow-hidden">
      {/* DRAMATISCHES LUXUS-TRENNUNGSELEMENT */}
      <div className="absolute top-0 left-0 right-0 -mt-80 z-20 overflow-visible">
        {/* Große geschwungene Wellenform */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="goldWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F9F0E6" />
              <stop offset="50%" stopColor="#F9F0E6" />
              <stop offset="100%" stopColor="#F9F0E6" />
            </linearGradient>
          </defs>
          <path 
            fill="url(#goldWaveGradient)" 
            d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,213.3C672,235,768,245,864,218.7C960,192,1056,128,1152,122.7C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
        
        {/* Dramatisches zentrales Element */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-full">
          <motion.div 
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Leuchtender Hintergrund */}
            <div className="absolute w-60 h-60 rounded-full bg-[#C0A080]/10 blur-2xl"></div>
            
            {/* Rotierendes äußeres Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-56 h-56 rounded-full border border-[#C0A080]/30"
            ></motion.div>
            
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-64 h-64 rounded-full border-2 border-dashed border-[#C0A080]/20"
            ></motion.div>
            
            {/* Leuchtender zentraler Kreis */}
            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#C0A080] to-[#E8C090] flex items-center justify-center shadow-[0_0_30px_10px_rgba(192,160,128,0.4)]">
              {/* Innerer Kreis */}
              <div className="w-32 h-32 rounded-full border-2 border-white/50 flex items-center justify-center relative overflow-hidden">
                {/* Glitzereffekte */}
                <motion.div 
                  animate={{ 
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                  }}
                  className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"
                ></motion.div>
                
                {/* Logo Text */}
                <span className="text-white font-serif text-3xl font-bold z-10 tracking-wider">ME</span>
              </div>
            </div>
            
            {/* Strahl-Effekte */}
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="absolute top-1/2 left-1/2 w-1 h-16 bg-gradient-to-b from-[#C0A080] to-transparent"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  transformOrigin: "center 0",
                }}
              ></motion.div>
            ))}
            
            {/* Schwebende Akzente */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 right-5 w-16 h-16 backdrop-blur-sm bg-gradient-to-tr from-[#C0A080]/20 to-[#C0A080]/5 rounded-full"
            ></motion.div>
            
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-10 -left-10 w-20 h-20 backdrop-blur-sm bg-gradient-to-bl from-[#C0A080]/20 to-[#C0A080]/5 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
        
        {/* Dramatische Bottom-Border */}
        <div className="absolute bottom-0 left-0 w-full h-6">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0A080]/30 to-transparent h-px top-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0A080]/20 to-transparent h-px top-2"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C0A080]/10 to-transparent h-px top-4"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ background: "radial-gradient(circle, #C0A080 0%, transparent 70%)" }}
        className="absolute top-40 -right-32 w-96 h-96 rounded-full"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={inView ? { opacity: 0.05, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        style={{ background: "radial-gradient(circle, #C0A080 0%, transparent 70%)" }}
        className="absolute bottom-40 -left-32 w-80 h-80 rounded-full"
      />
      
      <div className="section-container !pt-0 !pb-0 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 mt-32"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="heading-2 mb-4">Unsere Premium <span className="text-[#C0A080]">Behandlungen</span></h2>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="paragraph max-w-3xl mx-auto"
          >
            Wir bieten modernste ästhetische Verfahren, die Ihre natürliche Schönheit mit minimaler Ausfallzeit und maximalen Ergebnissen verbessern.
          </motion.p>
        </motion.div>

        {/* Main treatment selection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {treatments.map((treatment, index) => (
            <motion.div 
              key={treatment.id}
              initial={{ opacity: 0, y: 50, rotateY: 30 }}
              animate={inView ? 
                { opacity: 1, y: 0, rotateY: 0 } : 
                { opacity: 0, y: 50, rotateY: 30 }
              }
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15, 
                ease: "easeOut" 
              }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 10px 25px -5px rgba(192, 160, 128, 0.1), 0 8px 10px -6px rgba(192, 160, 128, 0.1)" 
              }}
              className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${selectedTreatment.id === treatment.id ? 'bg-[#C0A080] shadow-lg' : 'bg-white hover:bg-[#C0A080]/10'}`}
              onClick={() => handleTreatmentClick(treatment)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {selectedTreatment.id === treatment.id 
                    ? React.cloneElement(treatment.icon, { className: "text-4xl text-light" })
                    : treatment.icon}
                </div>
                <h3 className={`heading-3 mb-2 ${selectedTreatment.id === treatment.id ? 'text-light' : ''}`}>{treatment.title}</h3>
                <p className={`${selectedTreatment.id === treatment.id ? 'text-light/80' : 'text-gray-600'}`}>{treatment.shortDescription}</p>
                
                {/* Show dropdown indicator if this treatment has a submenu */}
                {treatment.hasSubMenu && (
                  <div className="mt-3 flex items-center">
                    <span className={`mr-2 ${selectedTreatment.id === treatment.id ? 'text-light' : 'text-[#C0A080]'}`}>
                      Entdecken Sie alle Behandlungen
                    </span>
                    <FaChevronDown className={`transition-all ${showSubMenu && selectedTreatment.id === treatment.id ? 'rotate-180' : ''} ${selectedTreatment.id === treatment.id ? 'text-light' : 'text-[#C0A080]'}`} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Submenu for selected treatments */}
        {showSubMenu && selectedTreatment.hasSubMenu && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10 rounded-xl overflow-hidden shadow-lg bg-gradient-to-r from-[#F3E8DD] via-white to-[#F3E8DD]"
          >
            <div className="p-4 bg-[#C0A080]/20">
              <h4 className="font-serif text-xl text-[#805A36] text-center font-semibold">
                {selectedTreatment.id === 'botox' ? 'Unsere Botox Behandlungen' : 'Unsere Hyaluronsäure Behandlungen'}
              </h4>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-6">
              {selectedTreatment.subTreatments.map((subTreatment) => (
                <motion.div
                  key={subTreatment.id}
                  whileHover={{ scale: 1.03 }}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                    selectedSubTreatment && selectedSubTreatment.id === subTreatment.id 
                      ? 'bg-[#C0A080] text-white' 
                      : 'bg-white hover:bg-[#C0A080]/10'
                  }`}
                  onClick={() => handleSubTreatmentClick(subTreatment)}
                >
                  <div className={`text-3xl mb-2 ${
                    selectedSubTreatment && selectedSubTreatment.id === subTreatment.id 
                      ? 'text-white' 
                      : 'text-[#C0A080]'
                  }`}>
                    {subTreatment.icon}
                  </div>
                  <h5 className="font-medium text-sm mb-2">{subTreatment.title}</h5>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Main treatment description */}
        <motion.div
          ref={contentRef}
          key={selectedTreatment.id + (selectedSubTreatment ? selectedSubTreatment.id : '')}
          initial={{ opacity: 0, y: 30 }}
          animate={contentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-2xl shadow-lg border border-[#C0A080]/10 relative"
        >
          <motion.div 
            initial={{ width: "0%" }}
            animate={contentInView ? { width: "100%" } : { width: "0%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#C0A080] to-transparent"
          ></motion.div>
          {/* Show selected sub-treatment info if available */}
          {selectedSubTreatment ? (
            <>
              <div className="flex items-center mb-4">
                <button 
                  onClick={() => setSelectedSubTreatment(null)} 
                  className="flex items-center text-[#C0A080] hover:text-[#805A36] transition-colors"
                >
                  <FaChevronDown className="rotate-90 mr-2" />
                  <span>
                    {selectedTreatment.id === 'botox' 
                      ? 'Zurück zu allen Botox-Behandlungen' 
                      : 'Zurück zu allen Hyaluronsäure-Behandlungen'}
                  </span>
                </button>
              </div>
              <div className="flex items-center mb-6">
                <div className="text-4xl text-[#C0A080] mr-4">{selectedSubTreatment.icon}</div>
                <h3 className="heading-3 text-[#C0A080]">{selectedSubTreatment.title}</h3>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="paragraph mb-6">{selectedSubTreatment.description}</p>
                <p className="paragraph mb-6">
                  {selectedTreatment.id === 'botox' 
                    ? `Unsere Spezialisten für ${selectedSubTreatment.title} verwenden nur hochwertige Botox®-Produkte und präzise Injektionstechniken, um natürlich aussehende Ergebnisse zu erzielen, die Ihr Erscheinungsbild verbessern und gleichzeitig Ihre natürliche Ausdrucksfähigkeit bewahren.`
                    : `Unsere Spezialisten für ${selectedSubTreatment.title} verwenden nur hochwertige Hyaluronsäure-Produkte und fortschrittliche Techniken, um natürlich aussehende Ergebnisse zu erzielen, die Ihre Gesichtszüge harmonisch ergänzen und betonen.`
                  }
                </p>
                {/* Special cases for certain treatments */}
                {selectedSubTreatment.id === 'hyaluronidase' && (
                  <>
                    <h4 className="font-serif text-xl font-semibold mb-2">Wann wird Hyaluronidase eingesetzt?</h4>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Korrektur überfüllter Bereiche</li>
                      <li>Behandlung asymmetrischer Ergebnisse</li>
                      <li>Auflösung von Hyaluronsäure-Ansammlungen</li>
                      <li>Management von Komplikationen nach Filler-Behandlungen</li>
                    </ul>
                  </>
                )}
                
                {selectedSubTreatment.id === 'barbieBotox' && (
                  <>
                    <h4 className="font-serif text-xl font-semibold mb-2">Was ist Barbie Botox®?</h4>
                    <p className="paragraph mb-4">
                      Barbie Botox®, auch als "Trapeziusreduktion" bekannt, ist eine spezialisierte Botox-Behandlung, die den Trapezmuskel im Nacken- und Schulterbereich gezielt entspannt. Dies schafft einen optisch längeren, schlankeren Hals und definierte Schultern – ähnlich der ikonischen Silhouette der Barbie-Puppe.
                    </p>
                    <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Schafft einen längeren, eleganteren Hals</li>
                      <li>Definiert die Schulterkontur</li>
                      <li>Reduziert Verspannungen im Nacken- und Schulterbereich</li>
                      <li>Effekt hält typischerweise 3-4 Monate</li>
                    </ul>
                  </>
                )}
                
                {selectedSubTreatment.id === 'migraineBotox' && (
                  <>
                    <h4 className="font-serif text-xl font-semibold mb-2">Wie wirkt Botox® gegen Migräne?</h4>
                    <p className="paragraph mb-4">
                      Bei der Migränebehandlung wird Botox® in spezifische Punkte im Kopf-, Nacken- und Schulterbereich injiziert. Es blockiert die Freisetzung von Schmerzneurotransmittern und entspannt überaktive Muskeln, die Migräneanfälle auslösen oder verschlimmern können.
                    </p>
                    <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Reduziert Häufigkeit und Schwere von Migräneanfällen</li>
                      <li>Kann die Anzahl von Kopfschmerztagen deutlich verringern</li>
                      <li>Wirkt präventiv, nicht nur symptomatisch</li>
                      <li>Effekt hält typischerweise 3-6 Monate</li>
                    </ul>
                  </>
                )}
                
                {selectedSubTreatment.id === 'hyperhidrosisBotox' && (
                  <>
                    <h4 className="font-serif text-xl font-semibold mb-2">Botox® bei übermäßigem Schwitzen</h4>
                    <p className="paragraph mb-4">
                      Bei der Behandlung von Hyperhidrose (übermäßiges Schwitzen) blockiert Botox® temporär die Nervenenden, die die Schweißdrüsen aktivieren. Dadurch wird die Schweißproduktion in den behandelten Bereichen deutlich reduziert, ohne die natürliche Regulation der Körpertemperatur zu beeinträchtigen.
                    </p>
                    <h4 className="font-serif text-xl font-semibold mb-2">Einsatzgebiete:</h4>
                    <ul className="list-disc list-inside mb-4 space-y-1">
                      <li>Achseln</li>
                      <li>Handinnenflächen</li>
                      <li>Fußsohlen</li>
                      <li>Stirn und Kopfhaut</li>
                    </ul>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <h3 className="heading-3 mb-6 text-[#C0A080]">{selectedTreatment.title}</h3>
              <div className="prose prose-lg max-w-none">
                {selectedTreatment.fullDescription}
              </div>
            </>
          )}
          <div className="mt-8 text-center">
            <a href="#contact" className="button-primary">
              Behandlung Buchen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Treatments;