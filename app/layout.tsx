import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import GoogleAnalytics from '@/components/GoogleAnalytics'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Check vs Mate Chess Academy',
    template: '%s | Check vs Mate Chess Academy',
  },
  description:
    'Check vs Mate Chess Academy — where young minds sharpen their chess skills through expert coaching and real tournament experience. Group classes, online sessions & home coaching in Delhi/NCR.',
  keywords: [
    'chess academy',
    'chess coaching for kids',
    'chess classes Delhi',
    'junior chess training',
    'tournament chess prep',
    'Check vs Mate',
    'Puneet Manchanda chess',
  ],
  authors: [{ name: 'Check vs Mate Chess Academy' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Check vs Mate Chess Academy',
    description:
      'Expert chess coaching for children — group, online & home sessions. 100+ kids trained. 4.9★ on Google.',
    type: 'website',
    url: 'https://checkvsmateacademy.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-body antialiased">
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
