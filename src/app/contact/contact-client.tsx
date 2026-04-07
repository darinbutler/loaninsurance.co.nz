'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2, Phone } from 'lucide-react';

export function ContactPageClient() {
  const whyChooseUs = [
    'ICNZ Registered Broker',
    'No Hidden Broker Fees',
    '256-bit SSL Secure',
    '24-Hour Quote Response',
    'Compare Multiple Insurers',
    'Tailored Coverage Options',
  ];

  const trustBadges = [
    { label: 'ICNZ Member', icon: '✓' },
    { label: 'NZD Compliant', icon: '✓' },
    { label: 'Free Service', icon: '✓' },
    { label: 'Expert Support', icon: '✓' },
  ];

  const howItWorks = [
    {
      number: '1',
      title: 'Complete the Form',
      description:
        'Tell us about your loan and coverage needs. Takes just 2 minutes.',
    },
    {
      number: '2',
      title: 'We Compare Options',
      description:
        'We search our network of 10+ NZ insurers to find your best rates.',
    },
    {
      number: '3',
      title: 'Get Protected',
      description:
        'Receive your personalized quote and activate coverage within 24 hours.',
    },
  ];

  return (
    <main>
      {/* Hero Section with Form */}
      <section className="lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Get a Quote</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Get Your Free Loan Insurance Quote
              </h1>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Complete our simple online form and get a personalized quote
                from New Zealand's leading loan insurance providers. No
                obligations, no broker fees.
              </p>

              {/* Why Choose Us */}
              <div className="bg-white p-6 rounded-lg border border-slate-200 mb-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  Why Choose Us
                </h3>
                <ul className="space-y-3">
                  {whyChooseUs.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div>
                <p className="text-sm font-semibold text-slate-600 uppercase tracking-wide mb-3">
                  Why we're trusted
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {trustBadges.map((badge, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200"
                    >
                      <span className="text-teal-600 font-bold text-lg">
                        {badge.icon}
                      </span>
                      <span className="text-slate-700 font-medium text-sm">
                        {badge.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <QuoteForm mode="full" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, idx) => (
              <div
                key={idx}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-2xl flex items-center justify-center mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>

                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 lg:-right-8 w-8 h-0.5 bg-gradient-to-r from-sky-600 to-teal-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Stats & Contact Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Stats */}
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8">
                Why NZ Families Trust Us
              </h2>

              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    10+
                  </div>
                  <p className="text-slate-300">Leading NZ Insurers</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    $500M+
                  </div>
                  <p className="text-slate-300">Cover Arranged</p>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text text-transparent mb-2">
                    24hr
                  </div>
                  <p className="text-slate-300">Quote Response Time</p>
                </div>
              </div>
            </div>

            {/* Contact & CTA */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">
                Questions? We're Here to Help
              </h3>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="w-6 h-6 text-teal-400" />
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wide">
                      Call us
                    </p>
                    <p className="text-2xl font-bold">09 885 9549</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm">
                  Available Monday - Friday, 9am - 5pm NZST
                </p>
              </div>

              <Link
                href="/contact"
                className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                Complete a Quote Form
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
