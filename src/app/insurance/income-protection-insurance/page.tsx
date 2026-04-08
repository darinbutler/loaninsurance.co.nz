import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Income Protection Insurance NZ | Salary Protection Cover',
  description:
    'Income Protection Insurance replaces your income if you cannot work due to illness or injury. Protect your family&apos;s lifestyle. Get a free quote in 2 minutes.',
  keywords: [
    'income protection insurance',
    'income cover NZ',
    'salary protection',
    'income protection cover',
    'disabled benefits insurance',
    'salary protection insurance NZ',
  ],
  openGraph: {
    title: 'Income Protection Insurance NZ | Salary Protection Cover',
    description:
      'Income Protection Insurance replaces your salary if you cannot work. Coverage for illness and injury. Affordable premiums, no broker fees.',
    url: 'https://loaninsurance.co.nz/insurance/income-protection-insurance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/income-protection-insurance',
  },
};

export default function IncomeProtectionInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Income Protection Insurance',
            description: 'Income Protection Insurance to replace salary if unable to work in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/income-protection-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Income Protection Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Income Protection Insurance
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Income Protection Insurance replaces your salary when you&apos;re unable to work due to illness or injury. Protect your family&apos;s lifestyle and financial security during periods when you can&apos;t earn.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Most New Zealanders live paycheck to paycheck. Without income protection, a serious illness or injury can quickly lead to financial hardship. Income protection insurance ensures your family can continue paying bills, keeping your home, and maintaining their quality of life while you recover.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Income Protection Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Replace up to 75% of your salary - ensure your family&apos;s lifestyle continues during recovery</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Coverage for accident, illness, and injury - comprehensive protection for all medical situations</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Flexible benefit periods - choose coverage that lasts until age 65, 2 years, or 1 year of disability</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>NZ-based support team - fast claims processing and local understanding of market conditions</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Income Protection Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Illness Cover */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Illness Cover</h3>
              <p className="text-slate-700 text-sm">
                Whether it&apos;s flu, cancer, heart disease, or any medical condition preventing you from work, income protection replaces your salary throughout recovery.
              </p>
            </div>

            {/* Injury Cover */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Injury Cover</h3>
              <p className="text-slate-700 text-sm">
                Accidents happen. Whether from a workplace incident, car accident, or sports injury, we replace your income while you recover and rehabilitate.
              </p>
            </div>

            {/* Mental Health */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Mental Health Cover</h3>
              <p className="text-slate-700 text-sm">
                Depression, anxiety, and other mental health conditions are covered the same as physical illness. Get the support you need without stigma.
              </p>
            </div>

            {/* Surgery & Recovery */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Surgery & Recovery</h3>
              <p className="text-slate-700 text-sm">
                Planned surgery and post-operative recovery time is covered. Receive your salary replacement while you heal and return to full capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Income Protection Matters Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Why Income Protection Insurance Matters in New Zealand</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">The Reality of Income Loss</h3>
              <p className="text-slate-700 mb-4">
                Statistics show that one in three New Zealanders will experience a period of disability lasting more than 90 days during their working life. Most people aren&apos;t prepared for what happens when that income stops unexpectedly.
              </p>
              <p className="text-slate-700">
                Without income protection, families face difficult choices: deplete savings, sell assets, reduce living standards, or accumulate debt. Income protection insurance prevents these scenarios by replacing your income during periods when you&apos;re medically unable to work.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">More Than Just Mortgages</h3>
              <p className="text-slate-700 mb-4">
                While income protection helps with mortgages and loans, it covers all your living expenses. Your family needs to eat, pay utilities, cover medical costs, maintain transport, and continue school fees. Income protection ensures these essentials are covered.
              </p>
              <p className="text-slate-700">
                Unlike specific loan protections, income protection covers your entire lifestyle needs. This comprehensive approach means your family maintains their standard of living and you can focus entirely on recovery without financial stress.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Government Support Isn&apos;t Enough</h3>
              <p className="text-slate-700 mb-4">
                ACC covers work injuries, but not illnesses. The Supported Living Payment exists but typically comes with long wait times and provides basic support only. New Zealand doesn&apos;t have comprehensive income replacement for all disability situations.
              </p>
              <p className="text-slate-700">
                Income protection insurance fills this gap by providing up to 75% of your normal salary, ensuring you and your family aren&apos;t forced to survive on minimal government assistance during a medical crisis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Income Protection Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Maintain Your Lifestyle</h3>
                  <p className="text-slate-700">
                    Replace up to 75% of your salary, ensuring your family can maintain their standard of living while you recover from illness or injury.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Benefit Periods</h3>
                  <p className="text-slate-700">
                    Choose how long you want coverage: until age 65, 2 years of disability, or 1 year - select the option that matches your needs.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Covers All Occupations</h3>
                  <p className="text-slate-700">
                    Whether you&apos;re a builder, nurse, teacher, accountant, or tradesperson, income protection is available tailored to your occupation.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast Claim Assessment</h3>
                  <p className="text-slate-700">
                    Claims are reviewed quickly and you&apos;ll receive benefits within days of approval. No lengthy waiting periods between payments.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Focus on Recovery</h3>
                  <p className="text-slate-700">
                    With bills covered, you can concentrate entirely on your health and rehabilitation without financial stress or worry.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Protection for All Illnesses</h3>
                  <p className="text-slate-700">
                    All illnesses and injuries are covered equally - from common conditions to serious diseases. No limitations on type of disability.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Tax-Free Benefits</h3>
                  <p className="text-slate-700">
                    Income protection benefits are paid tax-free, meaning you receive the full replacement amount without deductions or complications.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Works Alongside ACC</h3>
                  <p className="text-slate-700">
                    Income protection complements ACC cover. You can receive both benefits, ensuring comprehensive income replacement for any disability.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Income Protection Insurance FAQ</h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>What&apos;s the difference between waiting period and benefit period?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                The waiting period (usually 30, 60, or 90 days) is how long after disability starts before benefits begin. The benefit period is how long you receive benefits - could be 1 year, 2 years, or until age 65. Shorter waiting periods cost more but provide faster benefit access.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Can I get income protection if I&apos;m self-employed?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, self-employed individuals can get income protection. Underwriting requires evidence of income through tax returns or business accounts. Self-employed people sometimes find waiting periods longer, but comprehensive coverage is available.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Is income protection the same as disability insurance?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                They&apos;re similar but different. Income protection replaces lost income from disability. Disability insurance is a lump sum payment for permanent disability. Many people have both - income protection for temporary disability, disability insurance for permanent situations.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>How are benefits calculated?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Benefits are typically calculated at 60-75% of your pre-disability income, subject to underwriting limits. The exact amount depends on your salary, occupation, and the maximum benefit amount you applied for when getting coverage.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Does income protection cover redundancy?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Standard income protection covers disability from illness and injury, not redundancy. For redundancy cover, you need separate job loss insurance. Some people have both policies to cover all income loss scenarios.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Can I claim for partial disability?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, some policies include partial disability cover. If you can return to work part-time before full recovery, you receive a proportional benefit. This encourages early return-to-work while still providing income support.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Income Protection Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Employed Professionals</h3>
              </div>
              <p className="text-slate-700">
                If your family depends on your salary to maintain their lifestyle, income protection is essential to prevent financial crisis during illness or injury.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Primary Earners</h3>
              </div>
              <p className="text-slate-700">
                If you&apos;re the sole or main income earner, your family relies entirely on your ability to work. Protection ensures they survive hardship.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Mortgage Holders</h3>
              </div>
              <p className="text-slate-700">
                If you carry a mortgage, income protection ensures you can continue paying while disabled, preventing home loss or financial stress.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Car className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Young Families</h3>
              </div>
              <p className="text-slate-700">
                Young families with dependent children and limited savings need income protection to survive periods of parental disability.
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
              { title: 'Payment Protection Insurance', href: '/insurance/payment-protection-insurance', desc: 'Protect your loan repayments if you can\'t work due to illness, injury, or job loss.' },
              { title: 'Mortgage Protection Insurance', href: '/insurance/mortgage-protection-insurance', desc: 'Ensure your mortgage is covered if you become unable to work.' },
              { title: 'Redundancy Insurance', href: '/insurance/redundancy-insurance', desc: 'Keep your loan repayments covered if you\'re made redundant.' },
              { title: 'Loan Repayment Insurance', href: '/insurance/loan-repayment-insurance', desc: 'Cover your regular loan repayments during unexpected life events.' },
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
        title="Protect Your Family&apos;s Income"
        description="Get Income Protection Insurance in 2 minutes. Replace up to 75% of your salary if you cannot work. Affordable premiums, no broker fees, fast approval."
      />
    </>
  );
}
