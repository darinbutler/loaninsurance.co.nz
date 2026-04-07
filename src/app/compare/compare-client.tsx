'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import {
  DollarSign,
  Shield,
  Clock,
  AlertCircle,
  FileCheck,
  Star,
  CheckCircle2,
} from 'lucide-react';

export function ComparePageClient() {
  const comparisonFactors = [
    { icon: DollarSign, label: 'Premium Cost', description: 'Monthly or annual insurance costs' },
    { icon: Shield, label: 'Cover Amount', description: 'Maximum protection available' },
    { icon: Clock, label: 'Waiting Periods', description: 'Time before benefits start' },
    { icon: AlertCircle, label: 'Exclusions', description: 'What\'s not covered' },
    { icon: FileCheck, label: 'Claims Process', description: 'How easy to claim benefits' },
    { icon: Star, label: 'Provider Rating', description: 'Customer satisfaction & reputation' },
  ];

  const howToChoose = [
    {
      title: 'Price vs. Coverage',
      description:
        'Don\'t choose based on price alone. The cheapest policy might have higher waiting periods or lower coverage limits. Balance cost with the protection you actually need.',
    },
    {
      title: 'Waiting Period Impact',
      description:
        'Shorter waiting periods mean faster benefit payment but higher premiums. Consider your savings buffer when deciding.',
    },
    {
      title: 'Policy Flexibility',
      description:
        'Look for policies that allow you to adjust coverage or pause payments temporarily if your circumstances change.',
    },
    {
      title: 'Claims Support',
      description:
        'Choose insurers known for straightforward claims processes and responsive customer support. Read customer reviews.',
    },
  ];

  const providerApproach = [
    {
      number: '1',
      title: 'Get a Free Quote',
      description:
        'Complete our simple form with your loan and personal details.',
    },
    {
      number: '2',
      title: 'We Compare Providers',
      description:
        'We get quotes from 10+ leading NZ insurance companies automatically.',
    },
    {
      number: '3',
      title: 'Review Your Options',
      description:
        'Compare side-by-side pricing, coverage, and terms from all providers.',
    },
    {
      number: '4',
      title: 'Choose Your Policy',
      description:
        'Select the best option and we\'ll activate your coverage within 24 hours.',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-slate-600">
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">Compare</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Left Column - Content */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Compare Loan Insurance Providers
              </h1>

              <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                Finding the right loan protection insurance means comparing
                more than just price. We help you understand what to look for
                when choosing from New Zealand's leading insurers.
              </p>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Our Advantage</h3>
                <p className="text-slate-700 mb-4">
                  We compare quotes from 10+ leading NZ insurance providers
                  automatically. You see all your options side-by-side so you
                  can make the best decision for your situation.
                </p>
                <p className="text-sm text-slate-600">
                  No broker fees, no hidden costs, completely free.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* What to Compare */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-4">
            Key Factors to Compare
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Look beyond the price tag when comparing loan insurance policies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:border-teal-500 hover:shadow-lg transition-all duration-200"
                >
                  <Icon className="w-10 h-10 text-teal-600 mb-4" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {factor.label}
                  </h3>
                  <p className="text-slate-600 text-sm">{factor.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            How to Choose the Right Policy
          </h2>

          <div className="space-y-6">
            {howToChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border border-slate-200 hover:border-teal-500 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Comparison Approach */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Our Comparison Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {providerApproach.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-sky-50 to-teal-50 p-6 rounded-lg border border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-sky-600 to-teal-500 text-white font-bold text-lg flex items-center justify-center mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-700 text-sm">{step.description}</p>
                </div>

                {idx < providerApproach.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-sky-600 to-teal-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-12">
            Common Comparison Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">
                Why does waiting period matter?
              </h4>
              <p className="text-slate-700">
                The waiting period is how long you must wait after claiming
                before benefits begin. Shorter waiting periods are better but
                cost more. Choose based on your savings buffer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">
                Is the cheapest policy always the best?
              </h4>
              <p className="text-slate-700">
                No. A cheaper policy with a longer waiting period and lower
                coverage may not protect you adequately. Compare the full
                package, not just the premium.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-2">
                Can I switch providers later?
              </h4>
              <p className="text-slate-700">
                Yes. Most policies allow you to switch providers if you find
                better terms. However, check for any exclusions that might
                apply to pre-existing conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-600 to-teal-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Start Your Comparison Today
          </h2>
          <p className="text-lg text-sky-100 mb-8 max-w-2xl mx-auto">
            Get free quotes from multiple providers and compare side-by-side.
            No broker fees, no obligations.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white hover:bg-slate-50 text-sky-600 font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Free Comparison Quotes
          </Link>
        </div>
      </section>
    </main>
  );
}
