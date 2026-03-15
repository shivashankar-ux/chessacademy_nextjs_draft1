'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-maroon text-white text-sm text-center py-2 px-4 font-body">
        <span>🎓 Fresh Batches Starting Soon — </span>
        <Link href="/contact" className="underline font-semibold hover:text-gold-light transition-colors">
          Book a Free Demo Today
        </Link>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream shadow-md backdrop-blur-sm'
            : 'bg-cream/95'
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Check vs Mate Chess Academy home">
            <div className="relative w-14 h-14 flex-shrink-0">
              {/*
                TODO: Replace with actual logo file.
                Place your logo as /public/images/logo.png
                The logo should be a PNG with transparent background.
              */}
              <div className="w-14 h-14 rounded-full bg-maroon flex items-center justify-center text-white font-display font-bold text-xl select-none">
                ♞
              </div>
            </div>
            <div>
              <span className="font-display font-bold text-maroon text-lg leading-tight block">
                Check vs Mate
              </span>
              <span className="font-body text-xs text-gray-500 tracking-wide uppercase">
                Chess Academy
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg font-body font-semibold text-sm transition-all duration-150 ${
                      isActive
                        ? 'text-maroon bg-maroon/10'
                        : 'text-gray-700 hover:text-maroon hover:bg-maroon/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li>
              <Link href="/contact" className="btn-primary ml-3 text-sm py-2">
                Book Free Demo
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-maroon hover:bg-maroon/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 border-t border-maroon/10' : 'max-h-0'
          }`}
          aria-hidden={!isOpen}
        >
          <ul className="bg-cream px-4 py-4 flex flex-col gap-1" role="list">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg font-body font-semibold transition-all ${
                      isActive
                        ? 'text-maroon bg-maroon/10'
                        : 'text-gray-700 hover:text-maroon hover:bg-maroon/5'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
            <li className="pt-2">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Book Free Demo
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}
