import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase, TrendingDown, AlertCircle } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Debt Protection Insurance NZ | Credit Protection Coverage',
  description:
    'Debt protection insurance covers all your debts if you lose your job, become ill, or pass away. Protect personal loans, car finance, mortgages, credit cards. Quote in 2 minutes.',
  keywords: [
    'debt protection insurance NZ',
    'debt cover NZ',
    'credit protection insurance',
    'multi-debt insurance',
    'loan payment protection',
  ],
  openGraph: {
    title: 'Debt Protection Insurance NZ | Credit Protection Coverage',
    description:
      'Comprehensive debt protection covering all your loans and debts. Job loss, illness, and death coverage available. Get protected today.',
    url: 'https://loaninsurance.co.nz/insurance/debt-protection-insurance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/debt-protection-insurance',
  },
};

export default function DebtProtectionInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Debt Protection Insurance',
            description: 'Comprehensive debt and credit protection insurance in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/debt-protection-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Debt Protection Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Debt Protection Insurance NZ
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Multiple debts keeping you up at night? Debt protection insurance covers all your loans and bills if you lose your job, become ill, or pass away. One policy. Complete protection. Peace of mind.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Most New Zealand households carry multiple debts—personal loans, car finance, mortgage, credit cards, and bills. Debt protection insurance manages all of these simultaneously, covering monthly payments across every creditor. From just $12 per week, you get comprehensive protection that keeps your finances secure when life throws challenges your way.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Debt Protection Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers all debts simultaneously - personal loans, car finance, mortgage, credit cards, and bills in one policy</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive protection - death, terminal illness, accident, illness, and redundancy cover included</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Direct payments to creditors - all your debts are paid automatically, protecting your credit rating</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Affordable from $12 per week - comprehensive multi-debt protection costs less than managing payments alone</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Debt Protection Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* All Loans */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">All Loans Protected</h3>
              <p className="text-slate-700 text-sm">
                Personal loans, car finance, boat loans, and any other outstanding debts covered. All your borrowings under one comprehensive policy.
              </p>
            </div>

            {/* Mortgages & Home Loans */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mortgages & Home Loans</h3>
              <p className="text-slate-700 text-sm">
                Mortgage payments protected. Your home is secure even if redundancy or illness means you can&apos;t work.
              </p>
            </div>

            {/* Credit Cards & Revolving Debt */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Credit Cards & Revolving Debt</h3>
              <p className="text-slate-700 text-sm">
                Credit card payments and store card minimums covered. All revolving credit protected simultaneously.
              </p>
            </div>

            {/* Household Bills */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Household Bills</h3>
              <p className="text-slate-700 text-sm">
                Power, water, internet, and essential utilities covered. Your family stays connected and comfortable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Debt Protection Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">One Policy, All Debts</h3>
                  <p className="text-slate-700">
                    Stop managing multiple insurance policies. One comprehensive policy covers your entire debt portfolio—mortgages, loans, cards, and utilities.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Complete Risk Coverage</h3>
                  <p className="text-slate-700">
                    Death, terminal illness, accident, illness, and redundancy all covered. You&apos;re protected from every major financial risk.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Automatic Creditor Payments</h3>
                  <p className="text-slate-700">
                    Claims payments go straight to creditors. Your debts stay current, your credit rating stays intact, and you avoid late fees and penalties.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Simplifies Your Life</h3>
                  <p className="text-slate-700">
                    No need to call multiple creditors, negotiate payment holidays, or manage a financial crisis. Insurance handles everything while you recover.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Protects Your Credit Score</h3>
                  <p className="text-slate-700">
                    Automatic payments mean no missed instalments, defaults, or credit damage. Your financial reputation stays pristine even during hardship.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Cost-Effective Peace of Mind</h3>
                  <p className="text-slate-700">
                    From just $12 per week, debt protection insurance covers everything. Cheaper than individual policies and more comprehensive.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How Debt Protection Insurance Works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">List All Your Debts</h3>
                <p className="text-slate-700">
                  Tell us about your mortgages, loans, credit cards, and bills. We calculate your total monthly obligations and provide a customised quote for comprehensive protection.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get Approved & Start Coverage</h3>
                <p className="text-slate-700">
                  Simple online application with no medical exam for standard policies. Approval within 24 hours. Your policy becomes active with a short waiting period.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">Pay One Monthly Premium</h3>
                <p className="text-slate-700">
                  Single monthly payment covers all your debts. No juggling multiple policies or premiums. Everything consolidated into one manageable payment.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">When You Need Help, We Pay Your Debts</h3>
                <p className="text-slate-700">
                  If a covered event happens, submit your claim. We verify and pay all your creditors directly. You stay protected while you recover and rebuild.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Scenarios Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Example Coverage Scenarios</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Sarah: Job Loss Protection</h3>
              <p className="text-slate-700 mb-4">
                Sarah owns a home, has a car loan, and carries credit card debt. When she&apos;s made redundant, her debt protection policy covers her $2,800 monthly obligations (mortgage $1,800, car $600, credit cards $400) for up to 12 months while she finds new employment. She stays in her home and keeps her car.
              </p>
              <p className="text-sm text-teal-600 font-semibold">Her monthly premium: $18</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Michael: Illness Protection</h3>
              <p className="text-slate-700 mb-4">
                Michael is hospitalised for three months with complications. Unable to work, his debt protection insurance covers all debt payments ($1,200/month across three loans and utilities). His family stays secure, and when he returns to work, coverage ends automatically.
              </p>
              <p className="text-sm text-teal-600 font-semibold">His monthly premium: $14</p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3">The Wong Family: Comprehensive Security</h3>
              <p className="text-slate-700 mb-4">
                The Wongs have a mortgage, two car loans, and multiple credit cards totalling $4,100 monthly. Their debt protection policy provides death cover (protecting their family from inherited debt) and redundancy cover for both spouses. If anything happens, all debts stay current.
              </p>
              <p className="text-sm text-teal-600 font-semibold">Their monthly premium: $28</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Exclusions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">What&apos;s Not Covered</h2>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <p className="text-slate-700 mb-6">
              Debt protection insurance has specific exclusions to maintain affordability. Here&apos;s what typically isn&apos;t covered:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Debts in someone else&apos;s name or fraudulent borrowing</span>
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
                <span>Claims within waiting period of policy start (14-30 days)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Debts incurred after policy cancellation</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Self-employed or contract workers without special underwriting</span>
              </li>
            </ul>

            <p className="text-sm text-slate-600 mt-6 pt-6 border-t border-amber-200">
              Full policy terms and conditions available upon request. Review carefully to understand maximum monthly benefits and exclusions specific to your debts and situation.
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
                <span>Can I add new debts to my policy later?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. When you take on new debts, you can update your policy to include them. Contact us to add a new mortgage, car loan, or credit card. Your premium adjusts accordingly.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What if I pay off one of my debts?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Excellent. Notify us when a debt is repaid. Your premium reduces accordingly. Keep your overall protection while paying only for active debts.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Do you cover debts I already have bad credit on?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. Your credit history doesn&apos;t disqualify you. We cover debts regardless of past payment issues. However, very recent defaults may require special underwriting.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What if my employment situation changes?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Tell us if you change jobs, go part-time, or shift to contract work. We&apos;ll assess whether your coverage continues or needs adjustment based on your new employment status.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>How much does debt protection insurance cost?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Premiums start from $12 per week depending on your total debts and age. Personalised quotes available online in 2 minutes. One payment covers all your debts.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I claim multiple times?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. Each event (redundancy, illness recovery, return to work, redundancy again) is treated separately. Coverage continues for multiple claims as long as your policy remains active.
              </p>
            </details>

            <details className="group bg-white rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I cancel anytime without penalties?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Absolutely. Month-to-month policies with no long-term contracts. Cancel anytime with no exit fees or penalties. Just give notice and you&apos;re done.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Debt Protection Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">High Debt Households</h3>
              </div>
              <p className="text-slate-700">
                If you carry multiple debts or have total monthly obligations over $2,000, one comprehensive policy is more affordable and simpler than covering each debt separately.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Mortgage & Loan Owners</h3>
              </div>
              <p className="text-slate-700">
                Homeowners with mortgages plus additional debts benefit from comprehensive protection covering everything in one policy. Keeps your home and lifestyle secure.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Families with Dependents</h3>
              </div>
              <p className="text-slate-700">
                Families depending on your income are protected from the cascade of problems that come from debt defaults. Keep your family secure during hardship.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Limited Emergency Savings</h3>
              </div>
              <p className="text-slate-700">
                If you don&apos;t have significant savings for emergencies, comprehensive debt protection becomes critical insurance against financial disaster.
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
              href="/insurance/mortgage-repayment-cover"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-purple-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Mortgage Repayment Cover</h3>
              <p className="text-slate-700 text-sm mb-4">Protect your home and mortgage payments.</p>
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

      {/* Related Insurance Guides */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 text-center">
            Related Insurance Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Payment Protection Insurance', href: '/insurance/payment-protection-insurance', desc: 'Protect your loan repayments if you can\'t work due to illness, injury, or job loss.' },
              { title: 'Loan Repayment Insurance', href: '/insurance/loan-repayment-insurance', desc: 'Cover your regular loan repayments during unexpected life events.' },
              { title: 'Redundancy Insurance', href: '/insurance/redundancy-insurance', desc: 'Keep your loan repayments covered if you\'re made redundant.' },
              { title: 'Car Loan Insurance', href: '/insurance/car-loan-insurance', desc: 'Protect your vehicle finance repayments with specialist car loan cover.' },
              { title: 'Best Loan Insurance NZ', href: '/insurance/best-loan-insurance-nz', desc: 'Compare the top-rated loan insurance providers in New Zealand.' },
              { title: 'Compare Loan Insurance', href: '/insurance/loan-insurance-comparison', desc: 'Side-by-side comparison of NZ loan insurance policies.' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="block bg-white rounded-xl p-6 border border-slate-200 hover:border-teal-300 hover:shadow-md transition-all duration-200">
                <h3 className="font-bold text-slate-900 mb-2">{link.title}</h3>
                <p className="text-sm text-slate-600">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <CTABanner
        title="Protect All Your Debts Today"
        description="Get a free quote in just 2 minutes. From $12 per week you can cover all your loans, mortgage, and bills. No medical exam, approval in 24 hours."
      />
    </>
  );
}
