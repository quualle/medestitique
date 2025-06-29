import BotoxLanding from './BotoxLanding';

export const metadata = {
  title: 'Botox Königs Wusterhausen ab 179€ | Saskia Heer',
  description: 'Botox-Behandlung in Königs Wusterhausen ✓ Ab 179€ ✓ Ärztin mit Erfahrung ✓ MwSt-frei ✓ Kostenlose Touch-ups. Jetzt Termin buchen!',
  keywords: 'Botox Königs Wusterhausen, Botox KW, Faltenbehandlung, Botox Preis',
  openGraph: {
    title: 'Botox Königs Wusterhausen ab 179€ | Medestetique',
    description: 'Professionelle Botox-Behandlung in KW. Faire Preise, erfahrene Ärztin.',
    url: 'https://medestetique.de/botox-kw',
    siteName: 'Medestetique',
    locale: 'de_DE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://medestetique.de/botox-kw'
  }
};

export default function BotoxKWPage() {
  return <BotoxLanding />;
}