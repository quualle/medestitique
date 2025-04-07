// @ts-nocheck

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    id: 'erdbeerkinn',
    title: 'ERDBEERKINN',
    icon: <FaAngry />,
    description: 'Glättet die charakteristische Orangenhaut-Struktur am Kinn für ein ebenmäßigeres Erscheinungsbild.'
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
    id: 'zornesfalte',
    title: 'ZORNESFALTE',
    icon: <FaAngry />,
    description: 'Gezielte Behandlung der vertikalen Falten zwischen den Augenbrauen für einen entspannteren Gesichtsausdruck.'
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
    id: 'barcode',
    title: 'BARCODE (LIPPENLINIEN)',
    icon: <FaColumns />,
    description: 'Gezielte Behandlung der vertikalen Linien oberhalb der Lippen für ein glatteres, jüngeres Erscheinungsbild.'
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
    id: 'fullface',
    title: 'FULL FACE',
    icon: <FaUserAlt />,
    description: 'Ganzheitliche Gesichtsbehandlung, die mehrere Bereiche harmonisch kombiniert für ein natürlich verjüngtes Erscheinungsbild.'
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
          Unsere Premium-Hyaluronsäure-Filler stellen verlorenes Volumen wieder her, verbessern die Gesichtskonturen und erhöhen die Hautfeuchtigkeit. Saskia Heer verwendet fortschrittliche Techniken, um Filler präzise dort zu platzieren, wo sie für natürlich aussehende Ergebnisse benötigt werden.
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
    title: 'PRP Therapie (inklusive Microneedling)',
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
    title: 'Mesotherapie (inklusive Microneedling)',
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
    id: 'micronutrient',
    title: 'Mikronährstoffanalyse & Vitamininfusion',
    icon: <FaFlask className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Umfassende Analyse und gezielte Nährstoffversorgung für optimale Hautgesundheit.',
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Unsere Mikronährstoffanalyse ist ein umfassender diagnostischer Ansatz, um den individuellen Nährstoffstatus zu ermitteln. Durch eine präzise Analyse können wir Ungleichgewichte und Defizite identifizieren, die die Hautgesundheit und das allgemeine Wohlbefinden beeinträchtigen könnten.
        </p>
        <p className="paragraph mb-4">
          Nach der Auswertung erfolgt eine maßgeschneiderte Vitamininfusion, die genau auf Ihre persönlichen Bedürfnisse abgestimmt ist. Diese hochdosierte intravenöse Zufuhr stellt sicher, dass die lebenswichtigen Nährstoffe direkt in den Blutkreislauf gelangen und optimal vom Körper aufgenommen werden können.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Wissenschaftlich fundierte Analyse Ihres individuellen Nährstoffbedarfs</li>
          <li>Maßgeschneiderte Nährstoffversorgung für optimale Wirksamkeit</li>
          <li>Deutlich verbesserte Hautqualität durch gezielte Nährstoffzufuhr</li>
          <li>Stärkung des Immunsystems und Steigerung der Vitalität</li>
          <li>Unterstützung der natürlichen Regenerationsprozesse des Körpers</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Ausführliche Anamnese und Entnahme einer Probe für die Mikronährstoffanalyse</li>
          <li>Detaillierte Auswertung und Erstellung eines personalisierten Infusionsplans</li>
          <li>Individuelle Zusammenstellung der Nährstofflösung basierend auf den Analyseergebnissen</li>
          <li>Verabreichung der personalisierten Vitamininfusion (30-60 Minuten)</li>
          <li>Ausführliche Besprechung der Ergebnisse und Empfehlungen für die Zukunft</li>
        </ol>
      </>
    )
  },
  {
    id: 'lipolysis',
    title: 'Lipolyse (Fettwegspritze)',
    icon: <FaSyringe className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Gezielte Reduzierung von Fettdepots ohne Operation für eine definierte Silhouette.',
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Die Lipolyse, auch als Fettwegspritze bekannt, ist eine nicht-chirurgische Methode zur gezielten Reduzierung lokaler Fettdepots. Bei dieser Behandlung wird eine spezielle Lösung injiziert, die die Fettzellen auflöst und deren natürlichen Abbau durch den Körper fördert.
        </p>
        <p className="paragraph mb-4">
          Besonders effektiv ist die Lipolyse bei der Behandlung von hartnäckigen kleinen bis mittelgroßen Fettdepots wie Doppelkinn, Bauchschwarte oder Cellulite. Die Behandlung ermöglicht eine präzise Konturierung ohne die Risiken und Ausfallzeiten einer Operation.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Anwendungsbereiche:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li><span className="font-semibold">Doppelkinn:</span> Definierte Kiefer- und Halslinie für ein schlankeres Profil</li>
          <li><span className="font-semibold">Bauchschwarte:</span> Gezielte Reduktion hartnäckiger Fettpolster am Bauch</li>
          <li><span className="font-semibold">Cellulite:</span> Verbesserung des Hautbildes und Minderung der Orangenhaut-Struktur</li>
          <li>Lokale Fettdepots an Oberschenkeln, Hüften und Rücken</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Nicht-invasive Alternative zur Fettabsaugung</li>
          <li>Gezielte Behandlung problematischer Bereiche</li>
          <li>Minimale Ausfallzeit und Risiken</li>
          <li>Natürlich wirkende, schrittweise Ergebnisse</li>
          <li>Dauerhafte Ergebnisse bei gleichbleibender Lebensweise</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Eingehende Beratung und Analyse der Problemzonen</li>
          <li>Präzise Markierung der zu behandelnden Bereiche</li>
          <li>Anwendung eines lokalen Betäubungsmittels für maximalen Komfort</li>
          <li>Gezielte Injektion der lipolytischen Lösung in die Fettschicht</li>
          <li>Typischerweise 2-4 Behandlungen im Abstand von 3-4 Wochen für optimale Ergebnisse</li>
        </ol>
      </>
    )
  },
  {
    id: 'exosomes',
    title: 'Exosomentherapie (inklusive Microneedling)',
    icon: <FaDna className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Modernste regenerative Therapie mit zellulären Botenstoffen für intensive Hautregeneration.',
    fullDescription: (
      <>
        <p className="paragraph mb-4">
          Die Exosomentherapie repräsentiert den neuesten Stand der regenerativen Medizin. Exosomen sind winzige Vesikel, die von Stammzellen freigesetzt werden und als Botenstoffe fungieren, die zelluläre Regenerationsprozesse aktivieren und koordinieren. Diese innovativen Signalmoleküle enthalten Wachstumsfaktoren, Proteine, mRNA und weitere bioaktive Substanzen, die die Hautverjüngung auf zellulärer Ebene fördern.
        </p>
        <p className="paragraph mb-4">
          Die Kombination mit Microneedling verstärkt die Wirkung der Exosomen deutlich, da die mikroskopisch kleinen Kanäle in der Haut eine optimale Aufnahme der regenerativen Botenstoffe ermöglichen. Diese Synergie bewirkt eine umfassende Hauterneuerung, die weit über herkömmliche Behandlungen hinausgeht.
        </p>
        <h4 className="font-serif text-xl font-semibold mb-2">Vorteile:</h4>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Fortschrittlichste Form der regenerativen Hauttherapie</li>
          <li>Intensive Stimulation der körpereigenen Kollagen- und Elastinproduktion</li>
          <li>Signifikante Verbesserung von Hautstruktur, -festigkeit und -elastizität</li>
          <li>Effektive Behandlung von feinen Linien, Aknenarben und unregelmäßiger Pigmentierung</li>
          <li>Maximale Hautregeneration mit minimalen Nebenwirkungen und Ausfallzeiten</li>
        </ul>
        <h4 className="font-serif text-xl font-semibold mb-2">Behandlungsablauf:</h4>
        <ol className="list-decimal list-inside mb-4 space-y-1">
          <li>Gründliche Hautanalyse und Beratungsgespräch</li>
          <li>Reinigung und Vorbereitung der Haut</li>
          <li>Auftragen einer anästhesierenden Creme für maximalen Komfort</li>
          <li>Präzises Microneedling zur Schaffung mikroskopischer Kanäle in der Haut</li>
          <li>Applizierung der hochkonzentrierten Exosomenlösung für optimale Penetration</li>
          <li>Abschließende beruhigende Behandlung und individuelle Nachsorgeanweisungen</li>
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
  },
  {
    id: 'antiAgingKonzept',
    title: 'Exklusives Anti-Aging Konzept',
    icon: <FaLeaf className="text-4xl text-[#C0A080]" />,
    shortDescription: 'Ein 3-stufiges Intensivprogramm über 4 Behandlungen, inkl. Nährstoffanalyse.',
    fullDescription: (
      <>
        <h3 className="heading-3 text-[#C0A080] mb-6 text-center">Unser Revolutionäres 4-Stufen Anti-Aging Konzept</h3>
        <p className="paragraph mb-6 text-center">
          Erleben Sie eine tiefgreifende Hautverjüngung mit unserem exklusiven 4-Sitzungs-Paket für 1.899 €. Jede der vier Behandlungen kombiniert drei hochwirksame Methoden, ergänzt durch eine abschließende Nährstoffanalyse für langanhaltende Ergebnisse. Dauer pro Sitzung (Schritt 1-3): ca. 1,5 - 2 Stunden.
        </p>

        {/* Schritt 1: PRP-Injektion */}
        <div className="mb-8 p-6 bg-[#F9F0E6]/50 rounded-lg border border-[#C0A080]/20">
          <h4 className="font-serif text-xl font-semibold mb-3 text-[#805A36] flex items-center">
            <span className="bg-[#C0A080] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">1</span>
            PRP-Injektion: Natürliche Hauterneuerung
          </h4>
          <p className="paragraph mb-4">
            Die PRP (Platelet-Rich Plasma)-Therapie, auch als Vampir-Lifting bekannt, nutzt die regenerativen Eigenschaften Ihres eigenen Blutes. Wir entnehmen eine kleine Menge Blut, isolieren das plättchenreiche Plasma und injizieren es gezielt, um die Kollagenproduktion maximal anzukurbeln und die Hautstruktur nachhaltig zu verbessern.
          </p>
          <h5 className="font-semibold mb-2">Vorteile der PRP-Behandlung:</h5>
          <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
            <li>Natürliche Verjüngung durch körpereigenes Material (risikoarm, sehr verträglich).</li>
            <li>Sichtbare Verbesserung der Hauttextur: Reduziert Linien/Falten, strafft die Haut.</li>
            <li>Vielfältige Anwendungsbereiche: Gesicht, Hals, Dekolleté, Hände.</li>
          </ul>
           <h5 className="font-semibold mb-2">Ablauf:</h5>
           <ol className="list-decimal list-inside space-y-1 pl-4">
             <li>Blutentnahme (kleine Menge).</li>
             <li>Aufbereitung und Plasma-Isolierung mittels Zentrifugation.</li>
             <li>Präzise Injektion des Plasmas mit feinen Nadeln.</li>
           </ol>
        </div>

        {/* Schritt 2: Nährstoff-Infusion */}
        <div className="mb-8 p-6 bg-[#F9F0E6]/50 rounded-lg border border-[#C0A080]/20">
          <h4 className="font-serif text-xl font-semibold mb-3 text-[#805A36] flex items-center">
             <span className="bg-[#C0A080] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">2</span>
             Nährstoff-Infusion: Tiefenversorgung
          </h4>
          <p className="paragraph mb-4">
            Im Anschluss an die PRP-Behandlung versorgen wir Ihre Haut über eine individuell zusammengestellte Infusion mit essentiellen Vitaminen, Mineralstoffen und Antioxidantien. Diese Nährstoffe gelangen direkt in den Blutkreislauf, unterstützen die Regeneration von innen und fördern ein gesundes, strahlendes Hautbild maximal.
          </p>
          <h5 className="font-semibold mb-2">Vorteile der Nährstoff-Infusion:</h5>
          <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
            <li>Optimale Nährstoffaufnahme durch direkte intravenöse Zufuhr.</li>
            <li>Steigerung der Hautelastizität und Kollagenbildung.</li>
            <li>Förderung des allgemeinen Wohlbefindens und Energielevels.</li>
          </ul>
           <h5 className="font-semibold mb-2">Ablauf:</h5>
           <ol className="list-decimal list-inside space-y-1 pl-4">
             <li>Anamnese zur Ermittlung des individuellen Bedarfs.</li>
             <li>Langsame Verabreichung der Nährstofflösung (ca. 30–60 Minuten).</li>
           </ol>
        </div>

        {/* Schritt 3: Individuelle PRP-Creme */}
        <div className="mb-8 p-6 bg-[#F9F0E6]/50 rounded-lg border border-[#C0A080]/20">
          <h4 className="font-serif text-xl font-semibold mb-3 text-[#805A36] flex items-center">
             <span className="bg-[#C0A080] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">3</span>
             Plasmatrix Plasmabooster Creme: Personalisierte Nachsorge
          </h4>
          <p className="paragraph mb-4">
            Zum Abschluss stellen wir aus Ihrem gewonnenen Plasma und einer speziellen Basiscreme die 100% natürliche Plasmatrix Plasmabooster Creme her. Diese maßgeschneiderte Pflege unterstützt die Hautregeneration optimal und verlängert die positiven Effekte der Behandlung. Sie steht Ihnen für ca. 2 Wochen zur Verfügung.
          </p>
          <h5 className="font-semibold mb-2">Vorteile der individuellen PRP-Creme:</h5>
          <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
            <li>Perfekt auf die Bedürfnisse Ihrer Haut abgestimmt.</li>
            <li>100% natürlich, ohne künstliche Zusätze oder Konservierungsstoffe.</li>
            <li>Fördert die Regeneration und sorgt für ein langanhaltend frisches Hautgefühl.</li>
          </ul>
           <h5 className="font-semibold mb-2">Anwendung:</h5>
           <p className="paragraph pl-4">Zweimal täglich auf die gereinigte Haut auftragen. Haltbarkeit ca. 2 Wochen.</p>
        </div>
        
        {/* Schritt 4: Nährstoffanalyse - angepasst auf Haarprobe */}
        <div className="mb-8 p-6 bg-[#E6F4F9]/60 rounded-lg border border-[#80A0C0]/20"> 
          <h4 className="font-serif text-xl font-semibold mb-3 text-[#365A80] flex items-center">
             <span className="bg-[#80A0C0] text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">4</span>
             Nährstoffanalyse per Haarprobe: Langfristige Optimierung
          </h4>
          <p className="paragraph mb-4">
            Als abschließender, essenzieller Schritt unseres Programms findet eine umfassende Nährstoffanalyse mittels einer Haarprobe statt. Wir entnehmen eine kleine, unauffällige Haarprobe und senden diese an ein spezialisiertes Labor. Die detaillierten Ergebnisse besprechen wir anschließend gemeinsam – entweder persönlich vor Ort oder bequem per Videotermin.
          </p>
          <h5 className="font-semibold mb-2">Vorteile der Haaranalyse:</h5>
          <ul className="list-disc list-inside mb-4 space-y-1 pl-4">
            <li>Identifiziert individuelle Nährstoffmängel oder -ungleichgewichte über einen längeren Zeitraum.</li>
            <li>Ermöglicht gezieltes Auffüllen von Defiziten für optimale Hautgesundheit von innen.</li>
            <li>Bietet eine Grundlage für langfristige Strategien zur Erhaltung Ihrer Hautqualität.</li>
            <li>Fördert ein ganzheitliches Verständnis für die Bedürfnisse Ihres Körpers und Ihrer Haut.</li>
          </ul>
           <h5 className="font-semibold mb-2">Ablauf:</h5>
           <ol className="list-decimal list-inside space-y-1 pl-4">
             <li>Entnahme einer kleinen Haarprobe (im Rahmen einer der letzten Sitzungen oder separat).</li>
             <li>Versand der Probe an ein spezialisiertes Labor.</li>
             <li>Ausführliche Besprechung der Laborergebnisse und individueller Empfehlungen (vor Ort oder Video).</li>
           </ol>
        </div>

        {/* Allgemeine Hinweise - angepasst */}
        <div className="mt-8 border-t border-[#C0A080]/30 pt-6">
          <h4 className="font-serif text-xl font-semibold mb-3 text-[#805A36]">Das Konzept im Überblick:</h4>
           <ul className="list-disc list-inside space-y-2">
            <li><span className="font-semibold">Umfang:</span> 4 umfassende Behandlungssitzungen (Schritte 1-3 wiederholt) + 1 abschließende Nährstoffanalyse (Schritt 4).</li>
            <li><span className="font-semibold">Empfohlener Abstand:</span> Jeweils 2 bis 4 Wochen zwischen den Sitzungen 1-3. Analyse nach Sitzung 3 oder 4.</li>
            <li><span className="font-semibold">Dauer pro Sitzung (1-3):</span> Ca. 1,5 - 2 Stunden.</li>
            <li><span className="font-semibold">Ergebnis:</span> Sofort sichtbare Frische, langfristige Strukturverbesserung und optimierte Nährstoffversorgung für nachhaltige Hautgesundheit.</li>
            <li><span className="font-semibold">Gesamtpaket-Preis:</span> 1.899 €</li>
          </ul>
        </div>
      </>
    )
  }
];

const Treatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(treatments[0]);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectedSubTreatment, setSelectedSubTreatment] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Neue Ref für den Behandlungsbeschreibungsbereich
  const treatmentDescriptionRef = React.useRef(null);
  
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
    if (isAnimating) return;
    
    setIsAnimating(true);
    setSelectedTreatment(treatment);
    
    // If the clicked treatment doesn't have a submenu or is different from the current one, hide submenu
    if (!treatment.hasSubMenu || treatment.id !== selectedTreatment.id) {
      setShowSubMenu(false);
      setSelectedSubTreatment(null);
    } else {
      // Toggle submenu for the same treatment
      setShowSubMenu(!showSubMenu);
    }
    
    // Scroll zur Behandlungsbeschreibung nach einer kurzen Verzögerung
    setTimeout(() => {
      if (treatmentDescriptionRef.current) {
        treatmentDescriptionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
      setIsAnimating(false);
    }, 300);
  };

  // Handle selection of a sub-treatment
  const handleSubTreatmentClick = (subTreatment: any) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedSubTreatment(subTreatment);
    
    // Scroll zur Behandlungsbeschreibung nach einer kurzen Verzögerung
    setTimeout(() => {
      if (treatmentDescriptionRef.current) {
        treatmentDescriptionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start'
        });
      }
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="treatments" className="pt-32 pb-24 bg-gradient-to-b from-[#F9F0E6] to-[#FFFBF6] relative overflow-hidden">
      {/* Eleganter Übergangsbereich zwischen Titelseite und Behandlungen */}
      <div className="absolute top-0 left-0 right-0 -mt-32 z-20 overflow-hidden">
        {/* Sanfte Wellenform */}
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
        
        {/* Fließender zentraler Effekt */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Schwebende goldene Kreise */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute -right-10 top-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#C0A080]/30 to-[#C0A080]/10 blur-sm"
            ></motion.div>
            
            <motion.div
              animate={{ 
                y: [0, 20, 0],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute -left-20 top-20 w-24 h-24 rounded-full bg-gradient-to-tl from-[#C0A080]/20 to-[#C0A080]/5 blur-sm"
            ></motion.div>
            
            {/* Zentrales Logo-Element */}
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              className="w-32 h-32 relative"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-[#C0A080]/30"
              ></motion.div>
              
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-[#C0A080]/20"
                style={{ margin: "-5px" }}
              ></motion.div>
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C0A080]/90 to-[#C0A080]/70 flex items-center justify-center shadow-[0_0_30px_rgba(192,160,128,0.3)]">
                <span className="text-white font-serif text-2xl font-bold tracking-wider">ME</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Subtile horizontale Linie */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C0A080]/20 to-transparent"></div>
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
      
      <div className="section-container !pt-0 !pb-0 relative z-10" ref={ref}>
        <motion.div 
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
            <h2 className="heading-2 mb-4 relative inline-block">
              Unsere Premium <span className="text-[#C0A080]">Behandlungen</span>
              <motion.div 
                initial={{ width: 0 }}
                animate={inView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-transparent via-[#C0A080] to-transparent"
              ></motion.div>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="paragraph max-w-3xl mx-auto"
          >
            Wir bieten medizinisch geprüfte ästhetische Verfahren nach neuesten wissenschaftlichen Standards an. Unser Fokus liegt auf der Unterstützung der körpereigenen Regeneration für natürliche Schönheit ohne künstliches Erscheinungsbild. Alle Behandlungen sind klinisch erprobt und fördern die Revitalisierung Ihrer Haut auf natürliche Weise.
          </motion.p>
        </motion.div>

        {/* Horizontales Layout mit Karten oben und Erklärung darunter */}
        <div>
          {/* Main treatment selection - Behandlungskarten */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {treatments.map((treatment, index) => (
              <motion.div 
                key={treatment.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? 
                  { opacity: 1, y: 0 } : 
                  { opacity: 0, y: 50 }
                }
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15, 
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 25px -5px rgba(192, 160, 128, 0.2), 0 8px 10px -6px rgba(192, 160, 128, 0.1)" 
                }}
                className={`p-8 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm
                  ${selectedTreatment.id === treatment.id 
                  ? 'bg-gradient-to-br from-[#C0A080] to-[#805A36] text-white shadow-lg' 
                  : 'bg-white/80 hover:bg-[#F3E8DD]/80 border border-[#C0A080]/10'}
                `}
                onClick={() => handleTreatmentClick(treatment)}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 
                    ${selectedTreatment.id === treatment.id 
                    ? 'bg-white/20' 
                    : 'bg-[#F3E8DD]'}`}
                  >
                    {selectedTreatment.id === treatment.id 
                      ? React.cloneElement(treatment.icon, { className: "text-4xl text-white" })
                      : treatment.icon}
                  </div>
                  <h3 className={`heading-3 mb-3 ${selectedTreatment.id === treatment.id ? 'text-white' : ''}`}>
                    {treatment.title}
                  </h3>
                  <p className={`mb-5 ${selectedTreatment.id === treatment.id ? 'text-white/90' : 'text-gray-600'}`}>
                    {treatment.shortDescription}
                  </p>
                  
                  {/* Show dropdown indicator if this treatment has a submenu */}
                  {treatment.hasSubMenu && (
                    <div className={`mt-2 flex items-center px-4 py-2 rounded-full 
                      ${selectedTreatment.id === treatment.id 
                      ? 'bg-white/20' 
                      : 'bg-[#F3E8DD]'}`}
                    >
                      <span className={`mr-2 text-sm font-medium ${selectedTreatment.id === treatment.id ? 'text-white' : 'text-[#805A36]'}`}>
                        Alle Behandlungen entdecken
                      </span>
                      <FaChevronDown className={`transition-all duration-300 ${showSubMenu && selectedTreatment.id === treatment.id ? 'rotate-180' : ''} ${selectedTreatment.id === treatment.id ? 'text-white' : 'text-[#C0A080]'}`} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Submenu for selected treatments */}
          <AnimatePresence>
            {showSubMenu && selectedTreatment.hasSubMenu && (
              <motion.div 
                initial={{ opacity: 0, height: 0, y: -20 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mb-8 rounded-2xl overflow-hidden shadow-xl bg-white border border-[#C0A080]/20"
              >
                <div className="p-5 bg-gradient-to-r from-[#C0A080] to-[#805A36]">
                  <h4 className="font-serif text-xl text-white text-center font-semibold">
                    {selectedTreatment.id === 'botox' ? 'Unsere Botox Behandlungen' : 'Unsere Hyaluronsäure Behandlungen'}
                  </h4>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 p-8">
                  {selectedTreatment.subTreatments.map((subTreatment, index) => (
                    <motion.div
                      key={subTreatment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(192, 160, 128, 0.1), 0 4px 6px -2px rgba(192, 160, 128, 0.05)" }}
                      className={`p-5 rounded-xl cursor-pointer transition-all duration-300 flex flex-col items-center text-center
                        ${selectedSubTreatment && selectedSubTreatment.id === subTreatment.id 
                          ? 'bg-gradient-to-br from-[#C0A080] to-[#805A36] text-white shadow-lg border-2 border-white' 
                          : 'bg-[#F9F5F0] hover:bg-[#F3E8DD] border border-transparent'}
                      `}
                      onClick={() => handleSubTreatmentClick(subTreatment)}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3
                        ${selectedSubTreatment && selectedSubTreatment.id === subTreatment.id 
                          ? 'bg-white/20' 
                          : 'bg-white'}
                      `}>
                        <div className={`text-2xl
                          ${selectedSubTreatment && selectedSubTreatment.id === subTreatment.id 
                            ? 'text-white' 
                            : 'text-[#C0A080]'}
                        `}>
                          {subTreatment.icon}
                        </div>
                      </div>
                      <h5 className="font-medium text-sm leading-tight">
                        {subTreatment.title}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Behandlungsbeschreibung - jetzt mit besserem Erscheinen von oben */}
          <div ref={treatmentDescriptionRef}>
            <AnimatePresence mode="wait">
              <motion.div
                ref={contentRef}
                key={selectedTreatment.id + (selectedSubTreatment ? selectedSubTreatment.id : '')}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white p-10 rounded-2xl shadow-xl border border-[#C0A080]/10 relative overflow-hidden"
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#C0A080]/5 rounded-full -mr-20 -mt-20"></div>
                <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#F3E8DD]/50 rounded-full -ml-20 -mb-20"></div>
                
                <div className="relative z-10">
                  {/* Animated accent bar */}
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-1 bg-gradient-to-r from-[#F3E8DD] via-[#C0A080] to-[#F3E8DD]"
                  ></motion.div>
                  
                  {/* Show selected sub-treatment info if available */}
                  {selectedSubTreatment ? (
                    <>
                      <div className="flex items-center mb-6">
                        <button 
                          onClick={() => setSelectedSubTreatment(null)} 
                          className="flex items-center text-[#C0A080] hover:text-[#805A36] transition-colors bg-[#F9F5F0] px-4 py-2 rounded-full"
                        >
                          <FaChevronDown className="rotate-90 mr-2" />
                          <span className="font-medium">
                            {selectedTreatment.id === 'botox' 
                              ? 'Zurück zu allen Botox-Behandlungen' 
                              : 'Zurück zu allen Hyaluronsäure-Behandlungen'}
                          </span>
                        </button>
                      </div>
                      <div className="flex flex-col md:flex-row md:items-center mb-8 gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C0A080] to-[#805A36] flex items-center justify-center flex-shrink-0">
                          <div className="text-3xl text-white">{selectedSubTreatment.icon}</div>
                        </div>
                        <h3 className="heading-3 text-[#805A36] mb-0">{selectedSubTreatment.title}</h3>
                      </div>
                      <div className="prose prose-lg max-w-none">
                        <p className="paragraph mb-6 text-gray-700">{selectedSubTreatment.description}</p>
                        <div className="p-6 rounded-xl bg-[#F9F5F0] border-l-4 border-[#C0A080] mb-8">
                          <p className="paragraph mb-0 italic">
                            {selectedTreatment.id === 'botox' 
                              ? `Unsere Spezialisten für ${selectedSubTreatment.title} verwenden nur hochwertige Botox®-Produkte und präzise Injektionstechniken, um natürlich aussehende Ergebnisse zu erzielen, die Ihr Erscheinungsbild verbessern und gleichzeitig Ihre natürliche Ausdrucksfähigkeit bewahren.`
                              : `Unsere Spezialisten für ${selectedSubTreatment.title} verwenden nur hochwertige Hyaluronsäure-Produkte und fortschrittliche Techniken, um natürlich aussehende Ergebnisse zu erzielen, die Ihre Gesichtszüge harmonisch ergänzen und betonen.`
                            }
                          </p>
                        </div>
                        
                        {/* Special cases for certain treatments */}
                        {selectedSubTreatment.id === 'hyaluronidase' && (
                          <div className="bg-white p-6 rounded-xl shadow-md border border-[#C0A080]/10">
                            <h4 className="font-serif text-xl font-semibold mb-4 text-[#805A36]">Wann wird Hyaluronidase eingesetzt?</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                              {['Korrektur überfüllter Bereiche', 'Behandlung asymmetrischer Ergebnisse', 
                                'Auflösung von Hyaluronsäure-Ansammlungen', 'Management von Komplikationen nach Filler-Behandlungen'].map((item, i) => (
                                <li key={i} className="flex items-center bg-[#F9F5F0] p-3 rounded-lg">
                                  <svg className="h-5 w-5 text-[#C0A080] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  <span className="ml-2">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* Spezialfälle für bestimmte Behandlungen */}
                        {selectedSubTreatment.id === 'bruxismBotox' && (
                          <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-[#C0A080]/10">
                              <h4 className="font-serif text-xl font-semibold mb-3 text-[#805A36]">Wie wirkt Botox® gegen Zähneknirschen?</h4>
                              <p className="paragraph mb-0">
                                Bei der Behandlung von Zähneknirschen wird Botox® in spezifische Punkte im Kieferbereich injiziert. Es blockiert die Freisetzung von Muskelaktivitäten, die Zähneknirschen auslösen oder verschlimmern können.
                              </p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-md border border-[#C0A080]/10">
                              <h4 className="font-serif text-xl font-semibold mb-4 text-[#805A36]">Vorteile:</h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                                {['Reduziert Häufigkeit und Schwere von Zähneknirschen', 'Kann die Anzahl von Kopfschmerztagen deutlich verringern', 
                                  'Wirkt präventiv, nicht nur symptomatisch', 'Effekt hält typischerweise 3-6 Monate'].map((item, i) => (
                                  <li key={i} className="flex items-center bg-[#F9F5F0] p-3 rounded-lg">
                                    <svg className="h-5 w-5 text-[#C0A080] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-2">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                        
                        {selectedSubTreatment.id === 'hyperhidrosisBotox' && (
                          <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-[#C0A080]/10">
                              <h4 className="font-serif text-xl font-semibold mb-3 text-[#805A36]">Botox® bei übermäßigem Schwitzen</h4>
                              <p className="paragraph mb-0">
                                Bei der Behandlung von Hyperhidrose (übermäßiges Schwitzen) blockiert Botox® temporär die Nervenenden, die die Schweißdrüsen aktivieren. Dadurch wird die Schweißproduktion in den behandelten Bereichen deutlich reduziert, ohne die natürliche Regulation der Körpertemperatur zu beeinträchtigen.
                              </p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-md border border-[#C0A080]/10">
                              <h4 className="font-serif text-xl font-semibold mb-4 text-[#805A36]">Einsatzgebiete:</h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-0">
                                {['Achseln', 'Handinnenflächen', 'Fußsohlen', 'Stirn und Kopfhaut'].map((item, i) => (
                                  <li key={i} className="flex items-center bg-[#F9F5F0] p-3 rounded-lg">
                                    <svg className="h-5 w-5 text-[#C0A080] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="ml-2">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col md:flex-row md:items-center mb-8 gap-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C0A080] to-[#805A36] flex items-center justify-center flex-shrink-0">
                          {React.cloneElement(selectedTreatment.icon, { className: "text-3xl text-white" })}
                        </div>
                        <h3 className="heading-3 mb-0 text-[#805A36]">{selectedTreatment.title}</h3>
                      </div>
                      <div className="prose prose-lg max-w-none">
                        {selectedTreatment.fullDescription}
                      </div>
                    </>
                  )}
                  
                  <div className="mt-10 text-center">
                    <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#C0A080] to-[#805A36] text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                      Behandlung Buchen
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments;