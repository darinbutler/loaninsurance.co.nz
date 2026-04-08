import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase, TrendingDown, AlertCircle } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Mortgage Repayment Cover NZ | Home Loan Protection',
  description:
    'Mortgage repayment cover protects your home and mortgage payments if you lose your job, become ill, or pass away. Keep your home secure. Quote in 2 minutes.',
  keywords: [
    'mortgage repayment cover NZ',
    'mortgage payment protection',
    'home loan cover NZ',
    'mortgage insurance',
    'home loan insurance',
  ],
  openGraph: {
    title: 'Mortgage Repayment Cover NZ | Home Loan Protection',
    description:
      'Protect your home with comprehensive mortgage repayment cover. Job loss, illness, and death coverage available for New Zealand homeowners.',
    url: 'https://loaninsurance.co.nz/insurance/mortgage-repayment-cover',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/mortgage-repayment-cover',
  },
};

export default function MortgageRepaymentCoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Mortgage Repayment Cover',
            description: 'Home loan and mortgage payment protection insurance in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/mortgage-repayment-cover',
            provider: {
              '@type': 'Organization',
              name: 'LoanInsurance.co.nz',
              url: 'https://loaninsurance.co.nz',
            },
            areaServed: 'NZ',
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative lg:min-h-[100vh] pt-28 pb-12 sm:pt-28 sm:pb-16 lg:py-28 overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Mortgage Repayment Cover</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Mortgage Repayment Cover NZ
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Your home is your most valuable asset. Mortgage repayment cover ensures you&apos;ll never lose it to unexpected circumstances. If you lose your job, become ill, or pass away, your mortgage payments are protected up to $500,000.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                For most Kiwi families, a mortgage represents decades of financial commitment. Mortgage repayment cover gives you absolute peace of mind that your home is protected against redundancy, illness, accident, and death. From just $15 per week, you ensure your family keeps the roof over their heads no matter what life throws at you.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">ICNZ Registered Broker Network</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">256-bit SSL Encrypted</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">No Broker Fees Ever</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">24 Hour Response Time</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Mortgage Repayment Cover?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers up to $500,000 - protection for mortgages of any size across New Zealand</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>12-month income replacement for redundancy - full mortgage payments covered while finding work</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Death cover for entire loan - if you pass away, mortgage is paid in full and your family keeps the home</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>From just $15 per week - comprehensive home protection at affordable cost</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Quote Form */}
            <div className="lg:col-span-2">
              <QuoteForm mode="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* What's Covered Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Mortgage Repayment Cover</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Redundancy & Job Loss */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Redundancy & Job Loss</h3>
              <p className="text-slate-700 text-sm">
                If you&apos;re made redundant, your mortgage payments are covered for up to 12 months. Gives you time to find new employment without losing your home.
              </p>
            </div>

            {/* Illness & Disability */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Illness & Disability</h3>
              <p className="text-slate-700 text-sm">
                Unable to work due to serious illness or accident? Mortgage payments are covered while you recover. Your home is secure during medical hardship.
              </p>
            </div>

            {/* Death Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                If you pass away, your entire mortgage is paid in full. Your family keeps the home, mortgage-free. No inherited debt, complete security.
              </p>
            </div>

            {/* Terminal Illness */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Terminal Illness</h3>
              <p className="text-slate-700 text-sm">
                If diagnosed with terminal illness (less than 12 months to live), your mortgage is paid immediately. Full protection for your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Mortgage Repayment Cover</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Keeps Your Home in Your Family</h3>
                  <p className="text-slate-700">
                    Your greatest asset stays yours. If something happens, your family doesn&apos;t have to sell the home to pay the bank. They keep the house.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Works with All Mortgage Types</h3>
                  <p className="text-slate-700">
                    Fixed rate, floating, or revolving mortgages all covered. Whether through ANZ, Westpac, BNZ, Kiwibank or private lenders, we protect your home loan.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Covers High Mortgages</h3>
                  <p className="text-slate-700">
                    Protection scales from $50,000 mortgages to $500,000+. Whatever your loan amount, we can structure cover that matches your home&apos;s value.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Direct Payment to Lender</h3>
                  <p className="text-slate-700">
                    Payments go straight to your bank or mortgage lender. Your mortgage stays current, protecting your credit history and avoiding late fees.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Medical Exam for Most Policies</h3>
                  <p className="text-slate-700">
                    Simple online application. We assess your income and employment, not your medical history. Approval usually within 24 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Affordable from $15 per Week</h3>
                  <p className="text-slate-700">
                    Complete home protection starts from just $15 weekly depending on your mortgage amount and age. No hidden fees or broker commissions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How Mortgage Repayment Cover Works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tell Us About Your Mortgage</h3>
                <p className="text-slate-700">
                  Provide your current mortgage balance, monthly payment, and lender details. Get an instant quote for comprehensive home loan protection.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Apply Online & Get Approved</h3>
                <p className="text-slate-700">
                  Fast online application with no medical exam. Approval usually within 24 hours. Start protecting your home immediately after acceptance.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Coverage Becomes Active</h3>
                <p className="text-slate-700">
                  Your mortgage repayment cover activates with a 14-day waiting period. Premium payments begin immediately. Your home is now protected.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">If You Need to Claim, We Pay Your Lender</h3>
                <p className="text-slate-700">
                  Redundancy or illness occurs? Submit proof to our NZ claims team. We verify and pay your mortgage lender directly, keeping your home secure while you recover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Homeowners Need It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Why Homeowners Need Mortgage Repayment Cover</h2>

          <div className="space-y-6 mb-8">
            <p className="text-slate-700 text-lg">
              Your home likely represents 25-30 years of financial commitment and is probably your largest asset. The consequences of not being able to pay your mortgage are devastating:
            </p>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 space-y-4">
              <div className="flex gap-4">
                <span className="text-amber-600 font-bold text-xl">•</span>
                <p className="text-slate-700">
                  <strong>Forced Sale:</strong> Banks will force-sell your home if payments aren&apos;t made, often at less than market value, leaving you with nothing.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-amber-600 font-bold text-xl">•</span>
                <p className="text-slate-700">
                  <strong>Family Displacement:</strong> Your children lose their home, schools are disrupted, and family stability collapses during an already difficult time.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-amber-600 font-bold text-xl">•</span>
                <p className="text-slate-700">
                  <strong>Credit Damage:</strong> Mortgage default creates credit damage lasting 7+ years, making future borrowing difficult and expensive.
                </p>
              </div>

              <div className="flex gap-4">
                <span className="text-amber-600 font-bold text-xl">•</span>
                <p className="text-slate-700">
                  <strong>Cascade of Problems:</strong> Missing mortgage payments creates a domino effect—missed rent obligations, unpaid debts, potential legal action.
                </p>
              </div>
            </div>

            <p className="text-slate-700 text-lg">
              For less than $20 per week, mortgage repayment cover eliminates this risk entirely. Your home stays yours regardless of what happens to your income.
            </p>
          </div>
        </div>
      </section>

      {/* Common Exclusions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">What&apos;s Not Covered</h2>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <p className="text-slate-700 mb-6">
              Mortgage repayment cover has specific exclusions to maintain affordability and ensure genuine claims. Here&apos;s what typically isn&apos;t covered:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Mortgages in someone else&apos;s name or fraudulent borrowing</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Voluntary job resignation (redundancy cover only)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Pre-existing medical conditions with exclusion periods</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Claims within 14-30 days of policy start (waiting period)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Job loss due to gross misconduct or poor performance</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Self-employed or contract workers without special underwriting</span>
              </li>
            </ul>

            <p className="text-sm text-slate-600 mt-6 pt-6 border-t border-amber-200">
              Full policy terms and exclusions available upon request. We recommend reviewing these carefully to understand coverage details and maximum monthly benefits under your specific mortgage agreement.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I cover a mortgage that&apos;s not yet settled?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. You can apply for mortgage repayment cover for a home you&apos;re about to purchase. Get the policy in place before settlement for immediate protection from day one of homeownership.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What if I have a rental property mortgage?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Standard policies cover owner-occupied homes only. If you have a mortgage on an investment property, contact us for special underwriting and available options for rental income protection.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I cover a fixed-rate mortgage?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. All mortgage types are covered—fixed rate, floating rate, and revolving mortgages. Your protection applies regardless of rate structure or lender.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What if I refinance my mortgage?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Let us know when you refinance. Your policy can be updated to reflect your new loan amount and lender. Coverage continues without any gap.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can my spouse be covered too?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. Joint mortgage holders can both be covered on a single policy. If either loses employment or becomes ill, the mortgage is protected. Just one premium covers both.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>How much does mortgage repayment cover cost?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Premiums start from $15 per week depending on your mortgage amount and age. Personalised quotes available online in 2 minutes. Monthly costs are completely transparent with no hidden fees.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I cancel anytime?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Absolutely. Month-to-month coverage with no long-term contracts or lock-in periods. Cancel anytime with no exit fees or penalties. Just give notice and you&apos;re done.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Mortgage Repayment Cover?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">First-Time Homebuyers</h3>
              </div>
              <p className="text-slate-700">
                If you&apos;ve just purchased your first home, mortgage repayment cover is essential protection. Stretches of tight budgets make insurance even more critical.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Sole Earner Families</h3>
              </div>
              <p className="text-slate-700">
                If you&apos;re the only income earner supporting a family and mortgage, mortgage cover is critical. Protects your family&apos;s home and financial security.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Contract & Seasonal Workers</h3>
              </div>
              <p className="text-slate-700">
                If your employment is irregular, contract-based, or seasonal, mortgage cover bridges gaps between jobs and protects your home during uncertain income periods.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Recently Employed</h3>
              </div>
              <p className="text-slate-700">
                If you&apos;re in a new job, particularly one still in probation, mortgage protection safeguards your home during the period before job security stabilises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Explore Other Insurance Types</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/insurance/redundancy-insurance"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Redundancy Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Job loss protection for all your debts and bills.</p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/insurance/car-loan-insurance"
              className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-teal-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Car Loan Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Vehicle finance protection and mobility coverage.</p>
              <div className="flex items-center gap-2 text-teal-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/insurance/debt-protection-insurance"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-purple-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Debt Protection Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Comprehensive debt cover for all your debts.</p>
              <div className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/types/personal-loan"
              className="group bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-rose-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Personal Loan Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Comprehensive personal loan protection.</p>
              <div className="flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <CTABanner
        title="Protect Your Home Today"
        description="Get a free quote in just 2 minutes. From $15 per week you can protect your mortgage against redundancy, illness, and death. No medical exam, approval in 24 hours."
      />
    </>
  );
}
