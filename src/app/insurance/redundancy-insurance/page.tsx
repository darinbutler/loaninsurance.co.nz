import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase, TrendingDown, AlertCircle } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Redundancy Insurance NZ | Job Loss Protection for Your Loans',
  description:
    'Redundancy insurance protects your loan and bill payments if you lose your job unexpectedly. Get comprehensive job loss cover for New Zealand. Quote in 2 minutes.',
  keywords: [
    'redundancy insurance NZ',
    'job loss insurance',
    'redundancy cover NZ',
    'unemployment insurance',
    'income protection redundancy',
  ],
  openGraph: {
    title: 'Redundancy Insurance NZ | Job Loss Protection for Your Loans',
    description:
      'Protect your loan and bill payments against redundancy. Comprehensive job loss insurance coverage available across New Zealand.',
    url: 'https://loaninsurance.co.nz/insurance/redundancy-insurance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/redundancy-insurance',
  },
};

export default function RedundancyInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Redundancy Insurance',
            description: 'Job loss insurance protection for loan and bill payments in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/redundancy-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1507679799987-c73b7079e962?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Redundancy Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Redundancy Insurance NZ
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Lose your job unexpectedly and worry about paying your loans and bills? Redundancy insurance keeps your payments covered for up to 12 months if you&apos;re made redundant. Peace of mind costs just $8 per week.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                In today&apos;s changing employment landscape, redundancy can happen to anyone. Our comprehensive redundancy cover protects your personal loans, car finance, mortgage, credit cards, and household bills—giving you breathing room while you find your next opportunity without financial stress.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Redundancy Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers up to 12 months of loan payments - your full monthly amount reimbursed during job search</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Protects multiple debts - personal loans, car finance, mortgages, and credit card payments covered</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Affordable from $8 per week - scalable coverage that fits your budget and debt level</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>14-day waiting period only - quick activation so you&apos;re protected from day one</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Redundancy Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Loan Repayments */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Loan Repayments</h3>
              <p className="text-slate-700 text-sm">
                Personal loans, car finance, and other secured loans fully covered. Monthly payments reimbursed directly to protect your credit rating.
              </p>
            </div>

            {/* Mortgage Payments */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mortgage Payments</h3>
              <p className="text-slate-700 text-sm">
                Your home is protected. Mortgage payments covered up to 12 months, so redundancy doesn&apos;t mean losing your house.
              </p>
            </div>

            {/* Credit Card Debt */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Credit Card Debt</h3>
              <p className="text-slate-700 text-sm">
                Credit card minimum payments covered. Protects your credit score while you recover from job loss.
              </p>
            </div>

            {/* Bills & Utilities */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Bills & Utilities</h3>
              <p className="text-slate-700 text-sm">
                Essential household bills covered including power, water, internet, and phone. Stay connected while job hunting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Redundancy Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">12-Month Income Replacement</h3>
                  <p className="text-slate-700">
                    Up to 12 months of loan payments covered. Enough time to find a new job without financial desperation affecting your decision-making.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Covers Involuntary Job Loss Only</h3>
                  <p className="text-slate-700">
                    Protection applies to genuine redundancy, company closure, or genuine illness-related job termination. Voluntary resignation isn&apos;t covered.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Job Change Restrictions</h3>
                  <p className="text-slate-700">
                    You can accept any job to re-enter the workforce. Insurance doesn&apos;t require you to take specific positions to avoid losing coverage.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Direct Payment Protection</h3>
                  <p className="text-slate-700">
                    We pay creditors directly. Your loans are protected automatically, preventing missed payments and credit score damage.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Works With Multiple Creditors</h3>
                  <p className="text-slate-700">
                    Protection covers all your debts simultaneously. No juggling payments—everything is managed for you across all loans and bills.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Medical Exam Required</h3>
                  <p className="text-slate-700">
                    Simple online application. We assess job stability and income, not medical history. Approval within 24 hours for most applications.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How Redundancy Insurance Works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Get a Quote & Apply Online</h3>
                <p className="text-slate-700">
                  Tell us about your loans and employment. Get an instant quote based on your debts and the cover you need. Application takes 5 minutes online.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">Coverage Activates Immediately</h3>
                <p className="text-slate-700">
                  After approval (usually same day), your policy becomes active. A 14-day waiting period applies before you can claim. Premium payments begin immediately.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">If Redundancy Happens, Submit a Claim</h3>
                <p className="text-slate-700">
                  Lost your job? Contact our NZ claims team with your redundancy notice and proof of termination. We&apos;ll assess and approve your claim within 5-10 business days.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">Payments Made Directly to Creditors</h3>
                <p className="text-slate-700">
                  We pay your loans and bills directly. Your creditors receive payments on schedule. You stay protected while job hunting. Coverage continues for up to 12 months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Exclusions Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">What&apos;s Not Covered</h2>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
            <p className="text-slate-700 mb-6">
              Redundancy insurance has specific exclusions to maintain affordability and ensure claims are genuine. Understanding these helps you make the right decision:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Voluntary resignation or quitting your job</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Termination for misconduct or poor performance</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Self-employed or contract workers (unless specifically underwritten)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Redundancy due to voluntary restructure or early retirement schemes</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Claims within 14 days of policy start (waiting period)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Job loss in another person&apos;s name or on fraudulent grounds</span>
              </li>
            </ul>

            <p className="text-sm text-slate-600 mt-6 pt-6 border-t border-amber-200">
              Full policy terms and conditions are available upon request. We recommend reviewing these carefully to understand coverage details, maximum monthly benefits, and specific exclusions for your situation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What if I get a new job before 12 months?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Claims coverage continues until 12 months from the redundancy date or when you return to full-time employment, whichever comes first. Once employed, remaining payments stop, but you can reactivate coverage if needed later.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I claim if I&apos;m made redundant multiple times?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. Each redundancy event is treated separately. If you return to work and are made redundant again, you can claim again for another 12-month period. Policy covers multiple claims over the coverage period.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Does it cover self-employed redundancy?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Standard policies don&apos;t cover self-employed individuals due to the different nature of business closure versus employment redundancy. However, we can arrange special underwriting for self-employed workers. Contact us to discuss your specific situation.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What if I&apos;m already unemployed when I apply?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Redundancy insurance requires you to be employed when you apply. If you&apos;ve already been made redundant, you won&apos;t qualify for a new policy. However, existing policyholders remain covered during unemployment periods from covered events.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>How much does redundancy insurance cost?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Premiums start from $8 per week and vary based on your total debt, age, and employment type. Get a personalised quote online in 2 minutes. No hidden fees or broker commissions—what you see is what you pay monthly.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I cancel the policy anytime?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. Redundancy insurance is month-to-month with no long-term contracts. Cancel anytime with no penalties or exit fees. Some policies have a minimum 30-day notice period, but you&apos;re never locked in.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What happens to my policy if I return to work?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Your policy remains active and premiums continue unless you cancel. You&apos;re protected immediately if you&apos;re made redundant again. Some policies offer optional suspension if you prefer to pause payments and resume later—just ask when you return to work.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Redundancy Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Industry Downturn Risk</h3>
              </div>
              <p className="text-slate-700">
                If your industry faces regular restructuring, redundancy waves, or economic sensitivity (retail, hospitality, construction), redundancy insurance is essential protection for your financial stability.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Contract & Temporary Workers</h3>
              </div>
              <p className="text-slate-700">
                On fixed-term contracts or temporary arrangements? You face higher redundancy risk. Insurance bridges the gap between contracts and provides security while finding your next role.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">High Debt Levels</h3>
              </div>
              <p className="text-slate-700">
                Multiple loans, mortgage, and credit cards? The more debt you carry, the more catastrophic redundancy becomes. Insurance protects assets while unemployment income is lowest.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Solo Earner Families</h3>
              </div>
              <p className="text-slate-700">
                If you&apos;re the family&apos;s only income source and your job loss would create hardship, redundancy insurance is critical. Keeps essential bills paid while finding new employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Types Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Explore Other Insurance Types</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/insurance/car-loan-insurance"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Car className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Car Loan Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Protect your vehicle finance with comprehensive coverage.</p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>

            <Link
              href="/insurance/debt-protection-insurance"
              className="group bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-teal-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Debt Protection Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Comprehensive debt cover for all your financial commitments.</p>
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
              <p className="text-slate-700 text-sm mb-4">Protect your home and mortgage payments from unexpected events.</p>
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
              <p className="text-slate-700 text-sm mb-4">Comprehensive personal loan protection and peace of mind.</p>
              <div className="flex items-center gap-2 text-rose-600 font-semibold group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <CTABanner
        title="Protect Your Income from Redundancy"
        description="Get a free quote in just 2 minutes. From $8 per week you can cover up to 12 months of loan payments. No medical exam, approval in 24 hours."
      />
    </>
  );
}
