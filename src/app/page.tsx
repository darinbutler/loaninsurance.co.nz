'use client';

import Link from 'next/link';
import { useState } from 'react';
import AnimatedStats from '@/components/AnimatedStats';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';
import { faqs } from '@/data/faqs';
import {
  Briefcase,
  Car,
  Home as HomeIcon,
  Shield,
  TrendingUp,
  ChevronDown,
  CheckCircle2,
  Lock,
  Zap,
  MessageCircle,
  AlertTriangle,
  Heart,
  Wallet,
  Users,
} from 'lucide-react';

interface FAQItem {
  slug: string;
  question: string;
  answer: string;
}

export default function HomePage() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const loanTypes = [
    {
      icon: Briefcase,
      title: 'Personal Loans',
      description:
        'Protect repayments on personal loans for any purpose — from debt consolidation to home improvements.',
      href: '/types/personal-loan',
    },
    {
      icon: Car,
      title: 'Car Finance',
      description:
        'Coverage for vehicle financing and car loans, including GAP protection for total loss.',
      href: '/types/car-finance',
    },
    {
      icon: HomeIcon,
      title: 'Home Loans',
      description:
        'Mortgage and home loan repayment protection — keep your family home safe if you cannot work.',
      href: '/types/home-loan',
    },
    {
      icon: Shield,
      title: 'GAP Insurance',
      description:
        'Guaranteed asset protection covers the gap between your vehicle value and finance balance.',
      href: '/types/gap-insurance',
    },
    {
      icon: TrendingUp,
      title: 'Redundancy Cover',
      description:
        'Income protection if you lose your job involuntarily — keep loan repayments on track.',
      href: '/types/redundancy-cover',
    },
  ];

  const whyEssential = [
    {
      icon: AlertTriangle,
      title: 'Unexpected Job Loss',
      description:
        'Redundancy can happen to anyone. Loan protection covers your repayments while you search for a new role.',
    },
    {
      icon: Heart,
      title: 'Illness or Injury',
      description:
        'If sickness or injury stops you working, your policy pays your loan repayments so you can focus on recovery.',
    },
    {
      icon: Wallet,
      title: 'Financial Security',
      description:
        'Protect your credit rating and avoid default. Loan insurance keeps your financial future intact.',
    },
    {
      icon: Users,
      title: 'Family Protection',
      description:
        'Give your family peace of mind knowing loan commitments are covered no matter what life throws at you.',
    },
  ];

  const displayedFAQs = (faqs as FAQItem[]).slice(0, 5);

  return (
    <>
      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'LoanInsurance.co.nz',
            url: 'https://loaninsurance.co.nz',
            potentialAction: {
              '@type': 'SearchAction',
              target:
                'https://loaninsurance.co.nz/contact?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: displayedFAQs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer.replace(/<[^>]*>/g, ''),
              },
            })),
          }),
        }}
      />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[90vh] lg:min-h-[100vh] flex items-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 lg:pt-0 lg:pb-0">
            <div className="max-w-3xl">
              {/* Trust pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <Shield className="w-4 h-4 text-teal-400" />
                <span className="text-sm text-white font-medium">
                  Partnered with Licensed Insurance Brokers
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect Your Loan
                <span className="block bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                  Repayments
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                Compare top NZ loan protection insurers in minutes. If you lose
                your job, suffer an illness, or face unexpected hardship —
                we&apos;ve got your loan payments covered.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: Shield, text: 'Licensed Insurance Brokers' },
                  { icon: CheckCircle2, text: 'No Broker Fees' },
                  { icon: Lock, text: '256-bit SSL Secure' },
                  { icon: Zap, text: '24hr Response' },
                  { icon: MessageCircle, text: 'Free Consultation' },
                ].map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.text}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/15"
                    >
                      <Icon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                      <span className="text-sm text-white font-medium">
                        {badge.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#quote-form"
                  className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5"
                >
                  Get a Free Quote
                  <span>→</span>
                </Link>
                <Link
                  href="/compare"
                  className="bg-white/15 hover:bg-white/25 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 border border-white/30 inline-flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  Compare Providers
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Stats */}
        <AnimatedStats />

        {/* How It Works */}
        <HowItWorks />

        {/* Insurance Types Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Insurance for Every Loan Type
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Whether you have a personal loan, car finance, home loan, or
                business loan, we have protection tailored for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loanTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <Link
                    key={type.href}
                    href={type.href}
                    className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center mb-5 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {type.description}
                    </p>
                    <span className="text-teal-600 font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn more <span>→</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Loan Protection is Essential */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Why Loan Protection is Essential
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Life is unpredictable. Loan protection insurance ensures your
                financial commitments are covered when the unexpected happens.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyEssential.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center mb-5 shadow-lg shadow-teal-500/20">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Key Fact callout */}
            <div className="mt-12 bg-gradient-to-r from-sky-50 to-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Key Fact</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    New Zealand&apos;s life insurance industry pays out over $3.8 billion in claims annually. Yet many Kiwis with loans remain unprotected. If you were unable to work for three months or more, could you keep up with your loan repayments?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-lg">
                Find answers to common questions about loan protection insurance
              </p>
            </div>

            <div className="space-y-3">
              {displayedFAQs.map((faq) => (
                <div
                  key={faq.slug}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-teal-300 transition-all duration-200"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(
                        expandedFAQ === faq.slug ? null : faq.slug
                      )
                    }
                    className="w-full px-6 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900 text-left">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-teal-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                        expandedFAQ === faq.slug ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expandedFAQ === faq.slug && (
                    <div className="px-6 py-5 border-t border-slate-100 bg-slate-50/50">
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/faqs"
                className="text-teal-600 font-semibold hover:text-teal-700 transition-colors inline-flex items-center gap-2"
              >
                View all FAQs <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Insurance Guides Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Loan Insurance Guides
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Explore our comprehensive guides to find the right loan protection for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Payment Protection Insurance', href: '/insurance/payment-protection-insurance', desc: 'Cover your loan repayments against redundancy, illness, and more' },
                { title: 'Mortgage Protection Insurance', href: '/insurance/mortgage-protection-insurance', desc: 'Keep your family home safe if you can&apos;t work' },
                { title: 'Income Protection Insurance', href: '/insurance/income-protection-insurance', desc: 'Replace 60-80% of your lost income when you need it most' },
                { title: 'Loan Repayment Insurance', href: '/insurance/loan-repayment-insurance', desc: 'Ensure your loan payments are met no matter what happens' },
                { title: 'Redundancy Insurance', href: '/insurance/redundancy-insurance', desc: 'Protection against involuntary job loss' },
                { title: 'Car Loan Insurance', href: '/insurance/car-loan-insurance', desc: 'Protect your vehicle finance commitments' },
                { title: 'Best Loan Insurance NZ', href: '/insurance/best-loan-insurance-nz', desc: 'Compare the top loan insurance providers' },
                { title: 'Loan Insurance Cost', href: '/insurance/loan-insurance-cost', desc: 'Understand what loan protection costs' },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-teal-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-1.5 group-hover:text-teal-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{guide.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Full Quote Form */}
        <QuoteForm mode="full" />

        {/* CTA Banner */}
        <CTABanner />
      </main>
    </>
  );
}
