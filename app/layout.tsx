import './globals.css';
import { Montserrat, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
});

export const metadata: Metadata = {
  title: 'MedEstetique | Saskia Heer',
  description: 'Premium Schönheitsbehandlungen mit Botox, Hyaluronsäure und PRP von Saskia Heer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <body className="bg-white text-[#333333]">{children}</body>
    </html>
  );
}
