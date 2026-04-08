import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase, TrendingDown, AlertCircle } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Car Loan Insurance NZ | Vehicle Finance Protection',
  description:
    'Car loan insurance protects your vehicle finance payments if you lose your job, become ill, or pass away. Get comprehensive protection for your car finance. Quote in 2 minutes.',
  keywords: [
    'car loan insurance NZ',
    'vehicle finance protection',
    'car finance insurance NZ',
    'motor loan cover',
    'car payment protection',
  ],
  openGraph: {
    title: 'Car Loan Insurance NZ | Vehicle Finance Protection',
    description:
      'Protect your vehicle finance payments against job loss, illness, and more. Comprehensive car loan insurance coverage across New Zealand.',
    url: 'https://loaninsurance.co.nz/insurance/car-loan-insurance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/car-loan-insurance',
  },
};

export default function CarLoanInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Car Loan Insurance',
            description: 'Vehicle finance protection and car loan insurance in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/car-loan-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Car Loan Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Car Loan Insurance NZ
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Your car is more than transport—it&apos;s often essential for work and family life. Car loan insurance protects your vehicle finance if you lose your job, become ill, or pass away. Keep your car even if life gets difficult.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Whether you&apos;ve financed a new car through a dealership or taken out a personal loan for a vehicle, car loan insurance ensures you won&apos;t lose your transport if your circumstances change. Monthly payments as low as $6 per week give you complete peace of mind that your vehicle is protected.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Car Loan Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Protects dealership and personal car loans - covers any vehicle finance arrangement</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers up to $80,000 - protection for new cars, used vehicles, and imported motors</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>From just $6 per week - affordable protection for your vehicle investment</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Quick claims process - payment made directly to your lender in 5-10 business days</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Car Loan Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Involuntary Job Loss */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Redundancy & Job Loss</h3>
              <p className="text-slate-700 text-sm">
                If you&apos;re made redundant or lose employment, your car payments are covered for up to 12 months. Keep your vehicle while finding new work.
              </p>
            </div>

            {/* Accident & Illness */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Accident & Illness</h3>
              <p className="text-slate-700 text-sm">
                Unable to work due to injury or illness? Your vehicle finance is protected while you recover and get back on your feet.
              </p>
            </div>

            {/* Death Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                If you pass away, your outstanding car loan is paid in full. Your family won&apos;t inherit vehicle debt and can keep or sell the car.
              </p>
            </div>

            {/* Terminal Illness */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Terminal Illness</h3>
              <p className="text-slate-700 text-sm">
                If diagnosed with terminal illness (less than 12 months to live), your car loan is paid out immediately. Full protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Car Loan Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Keeps You Mobile</h3>
                  <p className="text-slate-700">
                    Your car is essential for work, family, and independence. Car insurance keeps you mobile even if redundancy or illness strikes unexpectedly.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Works with Dealership & Bank Loans</h3>
                  <p className="text-slate-700">
                    Whether you financed through a dealership, bank, or took a personal loan for your vehicle, we provide comprehensive protection for all arrangements.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Covers New & Used Vehicles</h3>
                  <p className="text-slate-700">
                    Brand new car, second-hand vehicle, imported motor—all eligible. Protection applies to any car you&apos;ve financed up to $80,000.
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
                    We pay your loan provider directly. Your car payments are made automatically, preventing missed payments and protecting your credit rating.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast Claims Processing</h3>
                  <p className="text-slate-700">
                    Submit claim with proof of redundancy or medical records. We assess and approve within 5-10 business days with no lengthy delays.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Affordable from $6 per Week</h3>
                  <p className="text-slate-700">
                    Premiums start as low as $6 weekly and scale with your vehicle&apos;s loan amount. No hidden fees or broker commissions. Cancel anytime.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">How Car Loan Insurance Works</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-teal-600 text-white font-bold text-lg">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Tell Us About Your Car Loan</h3>
                <p className="text-slate-700">
                  Provide details of your vehicle, loan amount, and monthly payment. Get an instant quote based on your specific car finance arrangement.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">Apply Online in Minutes</h3>
                <p className="text-slate-700">
                  Simple online application requires no medical exam for cars under $80,000. Approval usually within 24 hours with minimal documentation.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">Start Your Coverage Immediately</h3>
                <p className="text-slate-700">
                  Once approved, your car loan insurance becomes active with a 14-day waiting period. Premium payments begin. You&apos;re now protected.
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
                <h3 className="text-xl font-bold text-slate-900 mb-2">If You Need to Claim, We&apos;ve Got You</h3>
                <p className="text-slate-700">
                  Lost your job or become ill? Submit a claim with supporting documents. We verify and pay your lender directly, keeping your car payments on track.
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
              Car loan insurance has specific exclusions to keep premiums affordable and ensure claims are legitimate. Here&apos;s what typically isn&apos;t covered:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Vehicles in someone else&apos;s name or fraudulent loans</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Voluntary job resignation (redundancy cover only)</span>
              </li>
              <li className="flex gap-3 text-slate-700">
                <span className="text-amber-600 font-bold">•</span>
                <span>Pre-existing medical conditions with waiting periods</span>
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
              Full policy terms and exclusions are available upon request. We recommend reviewing these carefully to understand what&apos;s covered and maximum monthly benefits under your specific policy.
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
                <span>What car values can I insure?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Car loan insurance covers vehicles financed up to $80,000. This includes new cars, used vehicles, and imported motors. If your car&apos;s loan exceeds this amount, contact us for special underwriting.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I add car loan insurance to an existing loan?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. Whether your car is brand new or you&apos;ve had it for years, you can apply for car loan insurance anytime during the loan term. As long as you&apos;re the registered owner, we can cover it.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>What if I refinance or swap vehicles?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                If you refinance to a different lender, contact us to update your policy. If you buy a new car, you can transfer coverage to the new vehicle&apos;s loan. Full flexibility for changing circumstances.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Does it cover rental cars or commercial vehicles?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Standard policies cover private passenger vehicles only. Commercial vehicles, rental cars, or vehicles used for business purposes need special underwriting. Contact us to discuss your specific vehicle use.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I claim multiple times if I lose my job twice?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Yes. Each redundancy event is treated separately. If you return to work and are made redundant again, you can claim again for another 12-month period, provided your policy remains active.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>How much does car loan insurance cost?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Premiums start from $6 per week depending on your vehicle&apos;s loan amount and your age. Personalised quotes are available online in 2 minutes. Monthly costs are completely transparent with no hidden fees.
              </p>
            </details>

            <details className="group bg-slate-50 rounded-lg border border-slate-200 p-6 cursor-pointer hover:border-teal-300 transition-colors">
              <summary className="flex items-center justify-between font-semibold text-slate-900 cursor-pointer list-none">
                <span>Can I cancel anytime without penalty?</span>
                <span className="transition-transform group-open:rotate-180">▶</span>
              </summary>
              <p className="text-slate-700 mt-4 text-sm">
                Absolutely. Car loan insurance is month-to-month with no long-term contracts. Cancel anytime with no exit fees or penalties. Just give notice and your policy ends cleanly.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Car Loan Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Car className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Car-Dependent Workers</h3>
              </div>
              <p className="text-slate-700">
                If your job depends on having a car (delivery, trades, transport), losing your vehicle means losing income. Insurance protects both your transport and your job security.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Rural & Regional Families</h3>
              </div>
              <p className="text-slate-700">
                In areas with limited public transport, losing your car is a genuine hardship. Insurance ensures your family stays mobile even during financial stress.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Multi-Child Families</h3>
              </div>
              <p className="text-slate-700">
                Families with multiple children relying on a single vehicle for school runs and daily needs benefit from the security of car loan insurance coverage.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">High-Debt Households</h3>
              </div>
              <p className="text-slate-700">
                If you already manage multiple loans and debt, losing your car creates a spiral of problems. Insurance breaks that cycle by keeping transport secure.
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
              href="/insurance/redundancy-insurance"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-blue-200"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Redundancy Insurance</h3>
              <p className="text-slate-700 text-sm mb-4">Protect your income if you lose your job unexpectedly.</p>
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
        title="Protect Your Car & Stay Mobile"
        description="Get a free quote in just 2 minutes. From $6 per week you can protect your vehicle finance. No medical exam, approval in 24 hours."
      />
    </>
  );
}
