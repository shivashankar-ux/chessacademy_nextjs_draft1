import Link from 'next/link'
import { Mail, Phone, Instagram, Facebook, Youtube, MapPin } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://instagram.com/checkvsmateacademy', // TODO: update with real handle
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: 'https://facebook.com/checkvsmateacademy', // TODO: update with real URL
    label: 'Facebook',
    icon: Facebook,
  },
  {
    href: 'https://youtube.com/@checkvsmateacademy', // TODO: update with real channel
    label: 'YouTube',
    icon: Youtube,
  },
]

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-white" aria-label="Site footer">
      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                ♞
              </div>
              <div>
                <p className="font-display font-bold text-lg leading-tight">Check vs Mate</p>
                <p className="text-xs text-white/60 uppercase tracking-wide">Chess Academy</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed font-body">
              Where young minds sharpen their chess skills through expert coaching and real tournament experience. Est. 2013.
            </p>
            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold transition-colors duration-200 flex items-center justify-center"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-bold text-gold mb-5">Quick Links</h3>
            <ul className="space-y-3" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-display font-bold text-gold mb-5">Get In Touch</h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:checkvsmate@gmail.com"
                  className="text-white/70 hover:text-gold text-sm font-body transition-colors"
                >
                  checkvsmate@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+919810436745"
                  className="text-white/70 hover:text-gold text-sm font-body transition-colors"
                >
                  +91 98104 36745
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm font-body">
                  {/* TODO: Add full academy address */}
                  Delhi / NCR, India
                </span>
              </li>
            </ul>

            <Link
              href="/contact"
              className="btn-gold mt-6 inline-flex text-sm"
            >
              Book Free Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-xs font-body">
            © {new Date().getFullYear()} Check vs Mate Chess Academy. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-white/50 hover:text-white/80 text-xs font-body transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
