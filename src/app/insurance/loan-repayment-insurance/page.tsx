import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Loan Repayment Insurance NZ | Protect Your Loan Payments',
  description:
    'Loan Repayment Insurance protects your monthly loan payments if you lose your job, become ill, or pass away. Coverage up to $500,000. Get a quote in 2 minutes.',
  keywords: [
    'loan repayment insurance',
    'loan repayment cover',
    'loan payment protection NZ',
    'loan protection insurance',
    'personal loan protection',
    'repayment protection insurance',
  ],
  openGraph: {
    title: 'Loan Repayment Insurance NZ | Protect Your Loan Payments',
    description:
      'Protect your loan repayments with comprehensive insurance. Coverage for job loss, illness, and death. Affordable protection, no broker fees.',
    url: 'https://loaninsurance.co.nz/insurance/loan-repayment-insurance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/loan-repayment-insurance',
  },
};

export default function LoanRepaymentInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Loan Repayment Insurance',
            description: 'Loan Repayment Insurance to protect your loan payments in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/loan-repayment-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Loan Repayment Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Loan Repayment Insurance
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Loan Repayment Insurance provides peace of mind by protecting your monthly loan payments when unexpected life events prevent you from earning. From car loans to personal loans, holiday financing to home improvements, this insurance covers it all.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                New Zealand borrowers juggle multiple loans simultaneously. A single income disruption can create a cascade of financial problems. Loan Repayment Insurance ensures that all your loans are covered during difficult periods, protecting both your credit rating and your family&apos;s financial security.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Licensed Broker</span>
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Loan Repayment Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers all types of loans - personal, car, boat, holiday, home improvement, and more in one policy</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Coverage up to $500,000 - comprehensive protection for every loan on your portfolio</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Affordable premiums starting from $5 per week - less expensive than you might think</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Covers death, illness, injury, and redundancy - protection against all major life disruptions</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Loan Repayment Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Death Cover */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                If you pass away, all your covered loan balances are paid in full, ensuring your family doesn&apos;t inherit your debt obligations.
              </p>
            </div>

            {/* Illness & Injury */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Illness & Injury Cover</h3>
              <p className="text-slate-700 text-sm">
                If you&apos;re unable to work due to accident, illness, or injury, we cover all your loan repayments until you return to work.
              </p>
            </div>

            {/* Redundancy Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Redundancy Cover</h3>
              <p className="text-slate-700 text-sm">
                If you lose your job involuntarily, we cover your loan payments for up to 12 months while you search for new employment.
              </p>
            </div>

            {/* Terminal Illness */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Terminal Illness</h3>
              <p className="text-slate-700 text-sm">
                If diagnosed with a terminal illness (less than 12 months to live), all your loans are paid in full immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Loans Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Which Loans Can Loan Repayment Insurance Cover?</h2>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Personal Loans</h3>
              <p className="text-slate-700">
                Whether it&apos;s a loan for debt consolidation, holiday, home improvements, education, or general financial needs - personal loan insurance protects all your personal credit from disruption.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Car Finance</h3>
              <p className="text-slate-700">
                Protect your car loan from lenders like DFC, Instant Finance, and other automotive finance companies. If you can&apos;t work, your car payments continue protected.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Boat and Recreational Loans</h3>
              <p className="text-slate-700">
                Financed a boat, caravan, motorbike, or other recreational vehicle? Loan repayment insurance protects these assets by covering payments during hardship.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Home Improvement Loans</h3>
              <p className="text-slate-700">
                Home renovations financed through loans are covered. Whether you borrowed for kitchen upgrades, bathrooms, or major renovations, payments are protected.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Education Loans</h3>
              <p className="text-slate-700">
                If you&apos;ve financed education for yourself or dependents through a private loan, loan repayment insurance protects those payments during employment disruption.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Multiple Loans Portfolio</h3>
              <p className="text-slate-700">
                Have several loans running simultaneously? One comprehensive loan repayment insurance policy can cover your entire loan portfolio up to $500,000 total coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Loan Repayment Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Multi-Loan Coverage</h3>
                  <p className="text-slate-700">
                    Cover multiple loans with one policy. Whether you have 2 loans or 5, one comprehensive policy protects them all at significant savings.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Protects Your Credit Rating</h3>
                  <p className="text-slate-700">
                    When loan repayment insurance covers your payments, your credit history stays clean. No missed payments, no defaults, no damage to your credit score.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Affordable Premiums</h3>
                  <p className="text-slate-700">
                    With premiums starting from just $5 per week, loan repayment insurance is remarkably affordable protection for comprehensive peace of mind.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Simple Application</h3>
                  <p className="text-slate-700">
                    No medical exam for loans under $100,000. Get a quote online in 2 minutes and approval within 24 hours. Completely hassle-free.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Direct Lender Payment</h3>
                  <p className="text-slate-700">
                    When your claim is approved, we pay your lenders directly. You never need to manage payments or negotiate with creditors during hardship.
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
                    Claims are typically processed within 5-10 business days once documentation is provided. Lenders receive payment quickly so you avoid defaults.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Peace of Mind</h3>
                  <p className="text-slate-700">
                    Knowing all your loans are protected takes enormous stress off your shoulders. Face hardship without worrying about mounting debt obligations.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Coverage Options</h3>
                  <p className="text-slate-700">
                    Choose which coverage types you need. Add death, illness, injury, and redundancy protection in any combination that suits your situation.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Loan Repayment Insurance FAQ</h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Can I insure loans I haven&apos;t told the lender about?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, you can insure any loan you personally guarantee. When you claim, we pay your lender directly, so lenders learn about your insurance when they receive payment. You don&apos;t need to inform them beforehand.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>What if I have a joint loan with my partner?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Joint loans can be insured in either partner&apos;s name. You might insure your name for your income, and your partner might insure theirs. Or one policy could cover both if you want comprehensive protection for the entire household.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Can I add more loans to my policy later?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, absolutely. You can add newly acquired loans to your existing policy at any time. Contact us with details of your new loan and we&apos;ll adjust your coverage and premium accordingly.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>What happens if I pay off a loan early?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                When you pay off a loan, you can remove it from your policy, which reduces your premium. Insurance for that loan ends, and your remaining loans remain protected. You may receive a refund for any unused premium.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Does loan repayment insurance cover refinancing?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                When you refinance a loan, we can update your policy to cover the new lender. The process is simple - just let us know the refinance details and we&apos;ll adjust your coverage and premium if needed.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Is there a maximum number of loans I can insure?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                No maximum limit on the number of loans, as long as total coverage doesn&apos;t exceed $500,000. Most people find one comprehensive policy for all their loans is simpler and more cost-effective than individual policies per loan.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Loan Repayment Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Car className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Multi-Loan Borrowers</h3>
              </div>
              <p className="text-slate-700">
                If you have a car loan, personal loan, and other debts, comprehensive loan repayment insurance protects your entire portfolio in one policy.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Self-Employed People</h3>
              </div>
              <p className="text-slate-700">
                Variable income makes loan defaults risky. Loan repayment insurance protects your debts during quiet business periods or unexpected downturns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Homeowners with Debts</h3>
              </div>
              <p className="text-slate-700">
                Stretching your budget for mortgages and loans? Loan repayment insurance ensures your other loans don&apos;t default if hardship strikes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Young Professionals</h3>
              </div>
              <p className="text-slate-700">
                Just starting out with multiple debts? Loan repayment insurance protects your credit and financial future while you build your career.
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
              { title: 'Income Protection Insurance', href: '/insurance/income-protection-insurance', desc: 'Replace your income during periods of illness or injury.' },
              { title: 'Debt Protection Insurance', href: '/insurance/debt-protection-insurance', desc: 'Comprehensive cover for all your debt obligations.' },
              { title: 'Loan Insurance Cost', href: '/insurance/loan-insurance-cost', desc: 'Understand how much loan protection insurance costs in NZ.' },
              { title: 'Cheap Loan Insurance NZ', href: '/insurance/cheap-loan-insurance-nz', desc: 'Find affordable loan insurance options in New Zealand.' },
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
        title="Protect All Your Loan Payments"
        description="Get Loan Repayment Insurance in 2 minutes. Cover multiple loans with one policy. Affordable premiums, no broker fees, fast approval within 24 hours."
      />
    </>
  );
}
