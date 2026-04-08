'use client';

import Link from 'next/link';
import AnimatedStats from '@/components/AnimatedStats';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';
import { CheckCircle2, Users, Zap, Award, Shield, FileText, BarChart3, ShieldCheck } from 'lucide-react';

export function AboutPageClient() {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description:
        'Your financial security and peace of mind are our top priority. We focus on finding solutions that work for you.',
    },
    {
      icon: Zap,
      title: 'Transparency',
      description:
        "No hidden fees, no confusing terms. We explain everything clearly so you understand exactly what you're getting.",
    },
    {
      icon: Award,
      title: 'Expert Support',
      description:
        "Our team has deep expertise in loan insurance. We're here to answer your questions and guide your decisions.",
    },
    {
      icon: CheckCircle2,
      title: 'Trust & Integrity',
      description:
        'Our broker network is ICNZ registered and committed to the highest ethical standards in insurance brokerage.',
    },
  ];

  const howWeWork = [
    {
      icon: FileText,
      number: '1',
      title: 'Tell Us About Your Loan',
      description:
        'Share your loan details, amount, and the level of cover you need. Takes less than 2 minutes.',
    },
    {
      icon: BarChart3,
      number: '2',
      title: 'We Compare Insurers',
      description:
        'We access quotes from leading NZ insurers to find the best coverage at competitive rates.',
    },
    {
      icon: ShieldCheck,
      number: '3',
      title: 'Get Protected',
      description:
        'Choose your preferred insurer and get covered. Our broker network handles the paperwork.',
    },
  ];

  return (
    <main>
      {/* Hero Section with Image */}
      <section
        className="relative min-h-[70vh] lg:min-h-[75vh] flex items-end"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=1080&fit=crop)',
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
            <span className="text-white font-medium">About</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Protecting Kiwi
              <span className="block bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                Families & Loans
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              LoanInsurance.co.nz is New Zealand&apos;s leading loan protection
              insurance comparison service, connecting Kiwis with ICNZ-registered brokers.
            </p>
          </div>
        </div>
      </section>

      {/* Animated Stats */}
      <AnimatedStats />

      {/* Mission Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                To make loan protection insurance accessible, understandable,
                and affordable for every New Zealand family. We believe that
                financial protection shouldn&apos;t be complicated or expensive.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                By providing transparent comparisons and connecting you with trusted brokers,
                we help you find the right coverage at the right
                price. No broker fees. No hidden costs.
              </p>

              {/* Key Fact callout */}
              <div className="bg-gradient-to-r from-sky-50 to-teal-50 border border-teal-200 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Our Promise</h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      We will never pressure you into a policy. Our role is to educate, compare, and connect — the decision is always yours.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Work Steps */}
            <div className="space-y-6">
              {howWeWork.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-teal-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center mb-5 shadow-lg shadow-teal-500/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ICNZ & Compliance */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Trusted Broker Network
          </h2>

          <div className="bg-gradient-to-r from-sky-50 to-teal-50 p-8 sm:p-10 rounded-2xl border border-teal-200 mb-8">
            <p className="text-lg text-slate-700 mb-4 leading-relaxed">
              LoanInsurance.co.nz connects you with a network of insurance
              brokers and advisers registered with the Insurance Council
              of New Zealand (ICNZ), committed to the highest standards of
              professional conduct and customer service.
            </p>
            <p className="text-slate-600">
              Our broker network complies with all relevant NZ insurance
              regulations and best practice standards to ensure your protection
              and confidence.
            </p>
          </div>

          <Link
            href="https://www.icnz.org.nz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            Learn About ICNZ
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Full Quote Form */}
      <QuoteForm mode="full" />

      {/* CTA Banner */}
      <CTABanner
        title="Join Thousands of Protected Families"
        description="Get a free quote today and see how loan protection insurance can give you peace of mind."
      />
    </main>
  );
}
