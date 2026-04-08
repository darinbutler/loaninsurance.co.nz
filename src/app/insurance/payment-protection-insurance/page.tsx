import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Payment Protection Insurance NZ | PPI Cover for Loans',
  description:
    'Payment Protection Insurance (PPI) protects your loan repayments if you lose your job, become ill, or pass away. Affordable coverage starting from $5/week. Get a free quote today.',
  keywords: [
    'payment protection insurance',
    'PPI NZ',
    'payment protection',
    'loan payment protection',
    'PPI cover',
    'payment cover NZ',
  ],
  openGraph: {
    title: 'Payment Protection Insurance NZ | PPI Cover for Loans',
    description:
      'Protect your loan repayments with Payment Protection Insurance. Coverage for job loss, illness, and death. Fast approval, no broker fees.',
    url: 'https://loaninsurance.co.nz/insurance/payment-protection-insurance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/payment-protection-insurance',
  },
};

export default function PaymentProtectionInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Payment Protection Insurance',
            description: 'Payment Protection Insurance (PPI) to protect loan repayments in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/payment-protection-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Payment Protection Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Payment Protection Insurance
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Payment Protection Insurance (PPI) provides essential coverage for your loan repayments when life&apos;s unexpected events occur. Whether you lose your job, face illness, or experience a significant life change, PPI ensures your financial obligations are covered.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                In New Zealand, thousands of households rely on loans to finance essential purchases. PPI gives you peace of mind by protecting those payments when your income is interrupted. With no broker fees and quick approval in 24 hours, you can get comprehensive coverage for as little as $5 per week.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">ICNZ Registered Broker</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Secure & Encrypted</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">No Broker Fees Ever</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">24 Hour Response</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Payment Protection Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive coverage starting from just $5 per week - affordable protection for all budgets</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers job loss, illness, injury, and death - multiple protection layers in one policy</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>No medical exam required for loans under $100,000 - simple online application process</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>NZ-based claims support available during business hours - helpful local assistance when you need it</span>
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

      {/* What&apos;s Covered Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Payment Protection Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Job Loss Cover */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Job Loss Protection</h3>
              <p className="text-slate-700 text-sm">
                If you&apos;re made redundant or lose your job involuntarily, we cover your loan payments for up to 12 months while you find new employment.
              </p>
            </div>

            {/* Illness & Injury */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Illness & Injury Cover</h3>
              <p className="text-slate-700 text-sm">
                Covered for accident, illness, or injury that prevents you from working. Payments continue until you return to work or your claim settles.
              </p>
            </div>

            {/* Death Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                Your outstanding loan balance is paid in full if you pass away, protecting your family from inheriting the debt burden.
              </p>
            </div>

            {/* Terminal Illness */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Terminal Illness</h3>
              <p className="text-slate-700 text-sm">
                If diagnosed with a terminal illness (less than 12 months to live), your loan is paid in full immediately - no waiting period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding PPI Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Understanding Payment Protection Insurance in New Zealand</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">What is PPI?</h3>
              <p className="text-slate-700 mb-4">
                Payment Protection Insurance is a type of loan protection that covers your loan repayments when you&apos;re unable to pay due to unforeseen circumstances. It&apos;s designed to provide financial security during difficult periods, ensuring you don&apos;t fall behind on payments or damage your credit rating if your income is disrupted.
              </p>
              <p className="text-slate-700">
                PPI is particularly valuable in New Zealand where many households carry multiple debts. Whether you have a car loan, personal loan, or other credit obligations, PPI ensures these payments continue even when your income stops temporarily.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">How Does PPI Work?</h3>
              <p className="text-slate-700 mb-4">
                When you purchase Payment Protection Insurance, you pay a small monthly premium based on your loan amount. If one of the covered events occurs (such as redundancy or illness), you submit a claim to us with supporting documentation.
              </p>
              <p className="text-slate-700 mb-4">
                Our NZ-based claims team reviews your claim and, if approved, begins paying your loan repayments directly to your lender. This continues for the period specified in your policy or until you return to work, whichever comes first.
              </p>
              <p className="text-slate-700">
                The beauty of PPI is that it works in the background - you simply pay your premium each month, and we&apos;re here if you need us. There&apos;s no stress or worry about how you&apos;ll manage your loan payments during tough times.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">PPI vs Other Insurance Types</h3>
              <p className="text-slate-700 mb-4">
                Payment Protection Insurance differs from other loan protection products because it&apos;s specifically designed for payment coverage. Unlike general income protection, PPI is linked to your specific loan and covers the monthly repayment amount.
              </p>
              <p className="text-slate-700 mb-4">
                PPI also differs from loan protection insurance in that it can be added after you&apos;ve taken out your loan, whereas mortgage protection is typically arranged at the time of borrowing. This flexibility makes PPI an excellent option for borrowers who want to add protection later.
              </p>
              <p className="text-slate-700">
                The key advantage of PPI is its simplicity and affordability. You know exactly what you&apos;re paying and what you&apos;re protected for, without complex underwriting or extensive medical examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Payment Protection Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Affordable Premiums</h3>
                  <p className="text-slate-700">
                    Starting from just $5 per week, PPI fits any budget. Premiums are calculated based on your loan amount, so you only pay for the coverage you need.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast Application Process</h3>
                  <p className="text-slate-700">
                    Get a quote in 2 minutes and approval within 24 hours. No lengthy medical exams or paperwork for loans under $100,000. Apply online instantly.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Coverage</h3>
                  <p className="text-slate-700">
                    Customise your coverage by selecting which protections you need. Choose death, illness, redundancy, or all of the above depending on your situation.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Coverage</h3>
                  <p className="text-slate-700">
                    Once approved, your coverage starts immediately. There&apos;s no long waiting period for most claims, and death cover is active from day one.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Local Support Team</h3>
                  <p className="text-slate-700">
                    Our claims team is based in New Zealand and available Monday-Friday, 9am-5pm. Get personal support from people who understand the local market.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Broker Fees</h3>
                  <p className="text-slate-700">
                    Unlike traditional insurance, we don&apos;t charge broker fees or hidden costs. Your money goes directly to your coverage, not intermediaries.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Protects Your Credit</h3>
                  <p className="text-slate-700">
                    When PPI covers your payments during difficult times, it protects your credit rating from damage caused by missed loan payments or defaults.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Cancel Anytime</h3>
                  <p className="text-slate-700">
                    Month-to-month policies with no lock-in period. Cancel whenever you like without penalties or hidden fees. Complete flexibility and control.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions About PPI</h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Is Payment Protection Insurance tax-deductible in New Zealand?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                PPI premiums are generally not tax-deductible for personal loans, as they&apos;re considered personal insurance. However, if you have a loan for business purposes, the insurance may be deductible. We recommend consulting with a tax professional to understand your specific situation.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Can I get PPI if I&apos;m self-employed?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, self-employed individuals can get PPI, though some coverage options may have additional requirements. Redundancy cover typically isn&apos;t available for self-employed borrowers, but death, illness, and injury cover are usually available subject to underwriting.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>What happens to my PPI if I pay off my loan early?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                If you pay off your loan ahead of schedule, your PPI policy will typically end on the loan settlement date. You can cancel your policy at any time without penalties, and any remaining premium credits may be refunded depending on your policy terms.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>How quickly will my claim be processed?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Most claims are processed within 5-10 business days once we receive all supporting documentation. We&apos;ll contact you within 24 hours of receiving your claim to let you know what information we need. Priority claims may be processed faster.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Does PPI cover pre-existing health conditions?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                PPI generally excludes claims arising from pre-existing medical conditions within the first 12 months. However, coverage may be available after the waiting period or with specific underwriting. We recommend discussing your medical history during the application process for clarity.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>What if my loan amount increases after I&apos;ve purchased PPI?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                If your loan amount increases, your PPI coverage remains at the original amount. You can contact us to increase your coverage, which may require additional underwriting. This flexibility allows you to adjust your protection as your financial circumstances change.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Who Needs It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Payment Protection Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Primary Income Earners</h3>
              </div>
              <p className="text-slate-700">
                If your family depends on your income, PPI ensures loan payments continue even when you can&apos;t work due to job loss or illness.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Homeowners with Loans</h3>
              </div>
              <p className="text-slate-700">
                If you carry a mortgage and personal loans, PPI provides backup protection for your loan payments when facing financial hardship.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Contract & Casual Workers</h3>
              </div>
              <p className="text-slate-700">
                Without permanent employment, you face higher redundancy risk. PPI covers gaps between contracts and provides security during lean periods.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Car className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Multiple Loan Borrowers</h3>
              </div>
              <p className="text-slate-700">
                Managing multiple loans increases your risk. PPI on each loan ensures comprehensive coverage across all your major payment obligations.
              </p>
            </div>
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
              { title: 'Mortgage Protection Insurance', href: '/insurance/mortgage-protection-insurance', desc: 'Ensure your mortgage is covered if you become unable to work.' },
              { title: 'Income Protection Insurance', href: '/insurance/income-protection-insurance', desc: 'Replace your income during periods of illness or injury.' },
              { title: 'Loan Repayment Insurance', href: '/insurance/loan-repayment-insurance', desc: 'Cover your regular loan repayments during unexpected life events.' },
              { title: 'Redundancy Insurance', href: '/insurance/redundancy-insurance', desc: 'Keep your loan repayments covered if you\'re made redundant.' },
              { title: 'Loan Insurance Cost', href: '/insurance/loan-insurance-cost', desc: 'Understand how much loan protection insurance costs in NZ.' },
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
        title="Ready to Protect Your Loan Payments?"
        description="Get Payment Protection Insurance in just 2 minutes. Affordable premiums from $5/week, no broker fees, and quick approval within 24 hours."
      />
    </>
  );
}
