'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';

const insuranceTypes = [
  { label: 'Personal Loan', href: '/types/personal-loan' },
  { label: 'Car Finance', href: '/types/car-finance' },
  { label: 'Home Loan', href: '/types/home-loan' },
  { label: 'GAP Insurance', href: '/types/gap-insurance' },
  { label: 'Redundancy Cover', href: '/types/redundancy-cover' },
  { label: 'Payment Protection', href: '/insurance/payment-protection-insurance' },
  { label: 'Mortgage Protection', href: '/insurance/mortgage-protection-insurance' },
  { label: 'Income Protection', href: '/insurance/income-protection-insurance' },
];

const navLinks = [
  { label: 'Coverage', href: '/coverage' },
  { label: 'Compare', href: '/compare' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typesDropdownOpen, setTypesDropdownOpen] = useState(false);

  return (
    <>
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 hover:opacity-80 transition-opacity py-2 -ml-1 pl-1 pr-3 min-h-[44px] flex items-center">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Insurance Types Dropdown */}
              <div className="relative group">
                <button className="text-slate-700 font-medium hover:text-teal-600 transition-colors flex items-center gap-2">
                  Insurance Types
                  <svg
                    className="w-4 h-4 group-hover:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                  {insuranceTypes.map((type) => (
                    <Link
                      key={type.href}
                      href={type.href}
                      className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-600 transition-colors"
                    >
                      {type.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Nav Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 font-medium hover:text-teal-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button (Desktop) */}
            <div className="hidden lg:block">
              <Link href="/#quote-form" className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 -mr-1 hover:bg-slate-100 rounded-lg transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-slate-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden pb-5 border-t border-slate-200">
              <div className="pt-4 space-y-0.5">
                {/* Mobile Insurance Types */}
                <button
                  onClick={() => setTypesDropdownOpen(!typesDropdownOpen)}
                  className="w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors flex items-center justify-between"
                >
                  Insurance Types
                  <svg
                    className={`w-4 h-4 transition-transform ${typesDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </button>

                {typesDropdownOpen && (
                  <div className="pl-4 space-y-1">
                    {insuranceTypes.map((type) => (
                      <Link
                        key={type.href}
                        href={type.href}
                        className="block px-4 py-2.5 text-slate-600 hover:bg-teal-50 hover:text-teal-600 rounded-lg transition-colors text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {type.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Mobile Nav Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 text-slate-700 font-medium hover:bg-slate-100 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile CTA */}
                <div className="pt-4 px-2">
                  <Link href="/#quote-form" className="block w-full text-center bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md text-base" onClick={() => setMobileMenuOpen(false)}>
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
