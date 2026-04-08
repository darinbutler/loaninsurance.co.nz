import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Wallet, TrendingDown, Lightbulb, PiggyBank } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Cheap Loan Insurance NZ | Affordable Loan Protection Coverage',
  description:
    'Find affordable loan insurance in New Zealand. Budget-friendly protection from $3.99/week. Quality coverage without breaking the bank. Compare cheap loan protection options.',
  keywords: [
    'cheap loan insurance',
    'affordable loan insurance',
    'budget loan protection NZ',
    'low cost loan insurance',
    'cheap personal loan cover',
  ],
  openGraph: {
    title: 'Cheap Loan Insurance NZ | Affordable Loan Protection Coverage',
    description:
      'Get affordable loan insurance in New Zealand. Quality protection from just $3.99 per week with no broker fees.',
    url: 'https://loaninsurance.co.nz/insurance/cheap-loan-insurance-nz',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/cheap-loan-insurance-nz',
  },
};

export default function CheapLoanInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Affordable Loan Insurance NZ',
            description: 'Budget-friendly loan insurance and protection options available in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/cheap-loan-insurance-nz',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1553729459-afe8f2e2882d?w=1920&h=1080&fit=crop)',
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
            <Link href="/insurance" className="hover:text-white transition-colors">
              Insurance
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Cheap Loan Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Cheap Loan Insurance in New Zealand
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Quality loan protection doesn&apos;t have to be expensive. Get comprehensive insurance coverage for less than $4 per week. Affordable protection that fits your budget without compromising on coverage quality or claims support.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Many Kiwis think loan insurance is unaffordable, but that&apos;s a myth. For less than the cost of a daily coffee, you can protect your loan repayments against job loss, illness, or death. We&apos;ll show you how to get the best value protection.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <PiggyBank className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">From $3.99/week</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Best Value Options</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">No Broker Fees</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Smart Budget Tips</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Can You Really Get Cheap Loan Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Yes - affordability is a key feature of modern loan insurance. Quality protection costs less than you think.</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Budget-friendly doesn&apos;t mean low-quality. Top providers offer cheap rates with excellent claims support.</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Customisable coverage means you only pay for protection you need, reducing costs further.</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>No broker fees means more of your money goes to actual insurance protection, not middlemen.</span>
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

      {/* Budget Options Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Affordable Loan Insurance: Budget Plans Explained</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            You don&apos;t need to sacrifice coverage to save money. Here&apos;s how to get excellent protection on a budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Plan 1: Essentials */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 sm:p-8 border border-green-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Essentials Plan</h3>
                <span className="text-2xl font-bold text-green-600">$3.99</span>
              </div>
              <p className="text-slate-700 text-sm mb-4">/week for $10k loan*</p>
              <div className="space-y-3 mb-6 border-t border-green-200 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Death Cover</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Illness & Injury</span>
                </div>
                <div className="flex items-start gap-2">
                  <Lock className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-500 text-sm line-through">Redundancy Cover</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4">Perfect for secure employment</p>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Get This Plan
              </button>
            </div>

            {/* Plan 2: Standard */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border-2 border-blue-600 hover:shadow-lg transition-shadow ring-2 ring-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Standard Plan</h3>
                <span className="text-2xl font-bold text-blue-600">$5.99</span>
              </div>
              <p className="text-slate-700 text-sm mb-4">/week for $10k loan*</p>
              <div className="space-y-3 mb-6 border-t border-blue-200 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Death Cover</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Illness & Injury</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Redundancy Cover</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4 font-semibold">Most popular choice</p>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Get This Plan
              </button>
            </div>

            {/* Plan 3: Complete */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Complete Plan</h3>
                <span className="text-2xl font-bold text-purple-600">$7.49</span>
              </div>
              <p className="text-slate-700 text-sm mb-4">/week for $10k loan*</p>
              <div className="space-y-3 mb-6 border-t border-purple-200 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Death Cover</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Illness & Injury</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Redundancy Cover</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm">Terminal Illness</span>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-4">Maximum protection</p>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Get This Plan
              </button>
            </div>
          </div>

          <p className="text-sm text-slate-600 mt-8 text-center">
            *Estimated costs for basic coverage. Actual premiums vary based on age, health, employment, and provider. Get a personalised quote to see your exact cost.
          </p>
        </div>
      </section>

      {/* Money Saving Tips Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">10 Ways to Save Money on Loan Insurance</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Pick Selective Coverage</h3>
                  <p className="text-slate-700 text-sm">
                    You don&apos;t need every option. If you&apos;re in a secure permanent job, redundancy cover is optional. Choose only the covers you genuinely need.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Compare Multiple Providers</h3>
                  <p className="text-slate-700 text-sm">
                    Premiums vary significantly between providers for identical cover. Get quotes from at least 3 providers. You might save $5-20 per month.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Reduce Loan Amount</h3>
                  <p className="text-slate-700 text-sm">
                    Smaller loans cost less to insure. Consider whether you can borrow less to reduce both loan payments and insurance premiums simultaneously.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Apply Young</h3>
                  <p className="text-slate-700 text-sm">
                    Younger applicants automatically get lower premiums. If planning a large loan, applying sooner keeps your insurance costs down for the entire loan term.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Avoid Lender Insurance</h3>
                  <p className="text-slate-700 text-sm">
                    Banks and lenders often charge more for their insurance. Third-party providers typically offer better value. Always compare before accepting lender insurance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Maintain Good Health</h3>
                  <p className="text-slate-700 text-sm">
                    For loans over $100,000, medical assessment applies. Good health means lower premiums. Exercise, maintain healthy weight, and quit smoking for better rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">7</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Pay Annually Not Monthly</h3>
                  <p className="text-slate-700 text-sm">
                    Some providers offer 2-5% discounts for annual payments. Over the loan term, this small discount adds up to significant savings.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">8</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Skip Bundling</h3>
                  <p className="text-slate-700 text-sm">
                    Bundling loan insurance with other products usually costs more. Buy separate insurance for better rates and flexibility to cancel independently.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">9</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Use Online Providers</h3>
                  <p className="text-slate-700 text-sm">
                    Online-only insurers have lower overhead costs and pass savings to customers. Online applications also mean no broker fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 flex-shrink-0">
                  <span className="text-lg font-bold text-teal-600">10</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Review Regularly</h3>
                  <p className="text-slate-700 text-sm">
                    As your loan balance decreases, your insurance need reduces. Review your coverage annually and reduce protection amounts accordingly to lower premiums.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Budget Examples Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">How Affordable Is Cheap Loan Insurance? Real Examples</h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">20-Year-Old with $10,000 Personal Loan</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-600">Monthly Cost (Essentials)</p>
                  <p className="text-2xl font-bold text-teal-600">$17</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Annual Cost</p>
                  <p className="text-2xl font-bold text-teal-600">$204</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Protected Amount</p>
                  <p className="text-2xl font-bold text-teal-600">$10,000</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                That&apos;s less than a coffee per day to protect your entire loan. If something happens, your family doesn&apos;t inherit the debt.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">35-Year-Old with $50,000 Car Finance Loan</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-600">Monthly Cost (Standard)</p>
                  <p className="text-2xl font-bold text-teal-600">$35</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Annual Cost</p>
                  <p className="text-2xl font-bold text-teal-600">$420</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Protected Amount</p>
                  <p className="text-2xl font-bold text-teal-600">$50,000</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                Just $1.17 per day covers full death, illness, and redundancy protection. If you lose your job, your car payments are covered for 12 months.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4">40-Year-Old with $150,000 Mortgage Loan</h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-slate-600">Monthly Cost (Complete)</p>
                  <p className="text-2xl font-bold text-teal-600">$115</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Annual Cost</p>
                  <p className="text-2xl font-bold text-teal-600">$1,380</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600">Protected Amount</p>
                  <p className="text-2xl font-bold text-teal-600">$150,000</p>
                </div>
              </div>
              <p className="text-slate-700 text-sm">
                Only 0.92% of your loan amount annually provides complete family protection. If you pass away, your family keeps the house debt-free.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-700 font-semibold">
              As you can see, affordable loan insurance is completely within reach. The question isn&apos;t whether you can afford it - it&apos;s whether you can afford NOT to have it.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Budget-Friendly Doesn&apos;t Mean Low-Quality</h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <p className="text-lg text-slate-700 mb-6">
              Cheap loan insurance doesn&apos;t mean you&apos;re getting inferior protection. Here&apos;s why budget options deliver excellent value:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Same Coverage, Lower Cost</h3>
                  <p className="text-slate-700">
                    Cheap providers offer identical coverage types (death, illness, redundancy, terminal illness). The difference is their operational efficiency, not coverage quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Fast Claims Processing</h3>
                  <p className="text-slate-700">
                    Budget providers still process straightforward claims within 5-10 business days. Many offer 24-hour initial response times. Cost doesn&apos;t equal service quality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Regulated & Reliable</h3>
                  <p className="text-slate-700">
                    All NZ loan insurance providers must be regulated by the Financial Markets Authority. Cheap options have the same regulatory oversight as premium-priced competitors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">NZ-Based Support</h3>
                  <p className="text-slate-700">
                    Most budget providers have NZ-based claims and support teams. You get local assistance during business hours, not offshore call centres.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Compromises on Payouts</h3>
                  <p className="text-slate-700">
                    Budget doesn&apos;t mean reduced benefits. You get full coverage amounts, no waiting periods shorter than premium options, and no hidden claim limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions About Cheap Loan Insurance</h2>

          <div className="space-y-4">
            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Why is some loan insurance so much cheaper than others?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Cheap providers have lower operational costs, minimal marketing expenses, and efficient online processes. They pass these savings to customers rather than spending money on advertising or fancy offices.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Is cheap loan insurance really as good as expensive options?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                In terms of coverage, absolutely yes. Cheap options provide the same protection types and claim the same maximum benefits. The price difference is usually due to different business models, not inferior coverage.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Will cheap insurance providers deny my claim?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Any insurer can deny claims that fall outside policy terms. This applies equally to cheap and expensive providers. What matters is reading your policy carefully before buying to understand exactly what&apos;s covered.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Are there any hidden charges in cheap loan insurance?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Quality cheap providers are transparent about costs. Your quoted premium should be your total cost with no broker fees, admin charges, or hidden additions. Always confirm the quoted price is the total you&apos;ll pay.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Can I get better rates by paying for a longer policy term?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Most loan insurance is issued for the loan term, so this isn&apos;t an option. However, some providers offer discounts for paying annual premiums upfront instead of monthly payments.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Is there a minimum loan amount to qualify for cheap insurance?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                No, there&apos;s typically no minimum loan amount. Even small loans of $5,000-$10,000 can be insured at affordable rates. Smaller loans cost less to insure, making them very budget-friendly.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <CTABanner
        title="Find Your Affordable Loan Insurance Today"
        description="Get a cheap loan insurance quote in 2 minutes. Coverage from just $3.99/week with no broker fees. Compare quotes and see your exact cost now."
      />
    </>
  );
}
