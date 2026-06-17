import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ClientEffects from '@/components/ClientEffects';

export const metadata = {
  title: 'FORNACE — Artisan Wood-Fired Pizza, Milano',
  description: "FORNACE is Milano's premier artisan pizza restaurant. Wood-fired in a 480°C dome oven, crafted from a 15-year-old mother yeast.",
  themeColor: '#070503',
  openGraph: {
    type: 'website',
    title: 'FORNACE — Artisan Wood-Fired Pizza, Milano',
    description: 'Wood-fired artisan pizza crafted with two centuries of Italian tradition. Michelin Bib Gourmand 2023.',
    images: ['https://images.unsplash.com/photo-1599588967784-e5449357dda3?w=1200&q=80'],
    url: 'https://fornace.it',
    locale: 'en_IT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FORNACE — Artisan Wood-Fired Pizza, Milano',
    description: 'Wood-fired artisan pizza. Milano. Est. 2009.',
    images: ['https://images.unsplash.com/photo-1599588967784-e5449357dda3?w=1200&q=80'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="cursor"></div>
        <div className="cursor-ring"></div>
        <Nav />
        {children}
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}
