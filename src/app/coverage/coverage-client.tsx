'use client';

import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import {
  Heart,
  Zap,
  AlertCircle,
  Briefcase,
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
} from 'lucide-react';

export function CoveragePageClient() {
  const coverageTypes = [
    {
      icon: Heart,
      title: 'Death Cover',
      description:
        'Remaining loan balance cleared if the insured person passes away, protecting your family from debt.',
    },
    {
      icon: AlertCircle,
      title: 'Terminal Illness',
      description:
        'Coverage triggered by diagnosis of a terminal condition — loan paid out immediately.',
    },
    {
      icon: Zap,
      title: 'Total Disablement',
      description:
        'Benefits if you become permanently unable to work due to illness or injury.',
    },
    {
      icon: TrendingDown,
      title: 'Redundancy',
      description:
        'Loan repayments covered if you lose your job through involuntary redundancy.',
    },
    {
      icon: Clock,
      title: 'Temporary Disability',
      description:
        'Income protection during temporary illness or injury recovery periods.',
    },
    {
      icon: Briefcase,
      title: 'Business Interruption',
      description:
        'Coverage for self-employed borrowers during forced business closure.',
    },
  ];

  const typicallyIncluded = [
    'Loan repayment protection',
    'Involuntary unemployment coverage',
    'Accidental injury protection',
    'Illness and disability benefits',
    'Death benefit (varies by policy)',
    'Optional terminal illness rider',
  ];

  const commonExclusions = [
    'Pre-existing conditions (unless waived)',
    'Self-inflicted injury',
    'Voluntary redundancy',
    'Substance abuse related claims',
    'Claims within waiting period',
    'High-risk occupations (unless specified)',
  ];

  const coverageGuide = [
    {
      title: 'Assess Your Loan Amount',
      description:
        'Your coverage should match your outstanding loan balance and monthly repayments.',
    },
    {
      title: 'Consider Your Income',
      description:
        'Coverage limits are typically capped at your monthly income for sustainability.',
    },
    {
      title: 'Evaluate Your Risk',
      description:
        'Job security, health status, and savings determine your coverage needs.',
    },
    {
      title: 'Compare Waiting Periods',
      description:
        'Shorter waiting periods cost more but provide faster benefit payment.',
    },
  ];

  return (
    <main>
      {/* Hero Section with Image */}
      <section
        className="relative min-h-[70vh] lg:min-h-[75vh] flex items-end"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 pt-32">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Coverage</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Loan Insurance
              <span className="block bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                Coverage Options
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Understand exactly what your loan protection insurance covers
              and how it protects you and your family in New Zealand.
            </p>
          </div>
        </div>
      </section>

      {/* Coverage info callout */}
      <div className="bg-gradient-to-r from-sky-50 to-teal-50 border-b border-teal-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">
              <span className="font-bold">Coverage varies by policy.</span> The
              specific benefits depend on your chosen insurer and policy type.
              Get a personalised quote to see exact coverage details.
            </p>
          </div>
        </div>
      </div>

      {/* Coverage Types Grid */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Common Coverage Types
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Most loan insurance policies include some or all of these coverage options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center mb-5 shadow-lg shadow-teal-500/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Covered & Exclusions */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Typically Covered */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What&apos;s Typically Covered
              </h3>
              <div className="space-y-4">
                {typicallyIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Exclusions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Common Exclusions
              </h3>
              <div className="space-y-4">
                {commonExclusions.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Much Cover Do You Need */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How Much Cover Do You Need?
            </h2>
            <p className="text-slate-600 text-lg">
              Determining the right coverage level depends on several factors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coverageGuide.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-teal-200 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 text-white font-bold flex items-center justify-center mb-4 shadow-lg shadow-teal-500/20">
                  {idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Fact */}
          <div className="mt-10 bg-gradient-to-r from-sky-50 to-teal-50 border border-teal-200 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Pro Tip</h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  A good rule of thumb is to ensure your coverage matches at least 12-24 months
                  of your outstanding loan balance. This provides sufficient protection during
                  unemployment or recovery periods while remaining affordable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Quote Form */}
      <QuoteForm mode="full" />

      {/* CTA Banner */}
      <CTABanner
        title="Find the Right Coverage for You"
        description="Compare coverage options from leading NZ insurers and get personalised recommendations based on your situation."
      />
    </main>
  );
}
