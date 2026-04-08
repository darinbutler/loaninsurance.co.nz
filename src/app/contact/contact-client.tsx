'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import HowItWorks from '@/components/HowItWorks';
import CTABanner from '@/components/CTABanner';
import {
  CheckCircle2,
  Phone,
  Shield,
  Lock,
  Zap,
  Users,
  BarChart3,
  Settings,
} from 'lucide-react';

export function ContactPageClient() {
  const whyChooseUs = [
    { icon: Shield, text: 'ICNZ Registered Broker Network' },
    { icon: CheckCircle2, text: 'No Hidden Broker Fees' },
    { icon: Lock, text: '256-bit SSL Secure' },
    { icon: Zap, text: '24-Hour Quote Response' },
    { icon: BarChart3, text: 'Compare Multiple Insurers' },
    { icon: Settings, text: 'Tailored Coverage Options' },
  ];

  return (
    <main>
      {/* Hero Section with Background Image */}
      <section
        className="relative min-h-[90vh] lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 flex items-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/75" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Get a Quote</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Get Your Free
                <span className="block bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                  Loan Insurance Quote
                </span>
              </h1>

              <p className="text-lg text-slate-200 mb-10 leading-relaxed">
                Complete our simple online form and get a personalised quote
                from New Zealand&apos;s leading loan insurance providers. No
                obligations, no broker fees.
              </p>

              {/* Phone Contact */}
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl border border-white/20 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/25">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">
                      Prefer to talk?
                    </p>
                    <a
                      href="tel:+64988595449"
                      className="text-2xl font-bold text-white hover:text-teal-300 transition-colors"
                    >
                      09 885 9549
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <QuoteForm mode="compact" />
            </div>
          </div>

          {/* USP Badges */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/15 text-center hover:bg-white/20 transition-all duration-200"
                >
                  <Icon className="w-7 h-7 text-teal-400 mx-auto mb-2" />
                  <p className="text-white font-medium text-xs leading-tight">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* CTA Banner */}
      <CTABanner
        variant="dark"
        title="Questions? We're Here to Help"
        description="Call us on 09 885 9549, Monday to Friday, 9am - 5pm NZST. Or fill out the form above for a free, no-obligation quote."
        buttonText="Back to Top"
        buttonHref="#"
      />
    </main>
  );
}
