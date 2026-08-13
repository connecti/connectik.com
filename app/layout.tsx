import type { Metadata } from 'next';
import { Manrope, Cormorant_Garamond } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-serif', weight: ['500','600'] });

export const metadata: Metadata = {
  title: 'Élan — Coaching en développement personnel',
  description: 'Un accompagnement sur mesure pour retrouver votre élan et construire une vie pleinement alignée.',
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="fr"><body className={`${manrope.variable} ${cormorant.variable}`}>{children}</body></html>;
}
