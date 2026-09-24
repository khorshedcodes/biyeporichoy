import type { Metadata } from 'next';
import Script from 'next/script';
import { Hind_Siliguri, Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const hindSiliguri = Hind_Siliguri({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['bengali', 'latin'],
  variable: '--font-hind-siliguri',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'বিয়েপরিচয় (BiyePorichoy) — সুন্দর বিয়ের বায়োডাটা তৈরি ও শেয়ার করুন',
  description: '৫ মিনিটে বিনামূল্যে প্রফেশনাল ও ইসলামিক বিয়ের বায়োডাটা তৈরি করুন। লাইভ প্রিভিউ, তাৎক্ষণিক PDF ও ইমেজ ডাউনলোড এবং প্রাইভেট লিঙ্ক শেয়ারিং সুবিধা।',
  keywords: [
    'বিয়ের বায়োডাটা',
    'marriage biodata bangladesh',
    'biye biodata format',
    'islamic marriage biodata',
    'biye biodata maker',
    'biodata pdf download',
    'বিয়েপরিচয়',
    'biyeporichoy'
  ],
  authors: [{ name: 'BiyePorichoy Team' }],
  openGraph: {
    title: 'বিয়েপরিচয় — ফ্রি বিয়ের বায়োডাটা মেকার বাংলাদেশ',
    description: 'কোনো একাউন্ট ছাড়াই ৫ মিনিটে তৈরি করুন আকর্ষণীয় বিয়ের বায়োডাটা।',
    url: 'https://biyeporichoy.com',
    siteName: 'BiyePorichoy.com',
    locale: 'bn_BD',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${hindSiliguri.variable} ${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NQW76WR1TV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NQW76WR1TV');
          `}
        </Script>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
