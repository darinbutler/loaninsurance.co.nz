import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, DollarSign, TrendingDown, BarChart3, Calculator } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Loan Insurance Cost NZ | How Much Does Loan Protection Cost?',
  description:
    'How much does loan insurance cost in New Zealand? See loan protection premiums, pricing factors, and cost breakdowns. Affordable coverage from $3.99/week.',
  keywords: [
    'loan insurance cost',
    'how much does loan insurance cost',
    'loan protection premiums NZ',
    'loan insurance price',
    'affordable loan insurance cost',
  ],
  openGraph: {
    title: 'Loan Insurance Cost NZ | How Much Does Loan Protection Cost?',
    description:
      'Discover loan insurance costs in New Zealand. Understand pricing factors and see what you&apos;ll pay for comprehensive protection.',
    url: 'https://loaninsurance.co.nz/insurance/loan-insurance-cost',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/loan-insurance-cost',
  },
};

export default function LoanInsuranceCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Loan Insurance Cost Information',
            description: 'Comprehensive information about loan insurance costs and pricing in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/loan-insurance-cost',
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
            <Link href="/insurance" className="hover:text-white transition-colors">
              Insurance
            </Link>
            <span className="text-slate-500">/</span>
            <span className="text-slate-200">Loan Insurance Cost</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                How Much Does Loan Insurance Cost?
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Loan insurance in New Zealand is more affordable than most people think. Comprehensive protection typically costs less than $5 per week, depending on your loan amount, age, and the coverage you choose.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Understanding loan insurance costs helps you make informed decisions about protecting your financial future. We&apos;ll break down pricing factors, show you real cost examples, and help you understand what you&apos;ll actually pay for peace of mind.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">From $3.99/week</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Transparent Pricing</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">No Broker Fees</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Get Your Quote</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">What Affects Your Loan Insurance Cost?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Loan amount - larger loans typically have higher premiums but better value per dollar borrowed</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Your age - younger borrowers generally pay lower premiums than older applicants</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Coverage options - death cover, illness, redundancy, and terminal illness all affect the total cost</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Your employment status - permanent employees may pay less than contractors or self-employed individuals</span>
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

      {/* Cost Examples Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Real Loan Insurance Cost Examples</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Here are typical monthly costs for loan insurance across different loan amounts and ages. Actual premiums may vary based on individual circumstances and chosen coverage types.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Example 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">$10,000 Loan</h3>
              <div className="space-y-3 mb-6 text-slate-700">
                <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span>Age 25-30</span>
                  <span className="font-bold">$5-7/month</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span>Age 31-40</span>
                  <span className="font-bold">$8-11/month</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-blue-200">
                  <span>Age 41-50</span>
                  <span className="font-bold">$12-16/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Age 51-60</span>
                  <span className="font-bold">$18-24/month</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">Death + Illness cover included</p>
            </div>

            {/* Example 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">$25,000 Loan</h3>
              <div className="space-y-3 mb-6 text-slate-700">
                <div className="flex justify-between items-center pb-2 border-b border-teal-200">
                  <span>Age 25-30</span>
                  <span className="font-bold">$12-15/month</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-teal-200">
                  <span>Age 31-40</span>
                  <span className="font-bold">$18-23/month</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-teal-200">
                  <span>Age 41-50</span>
                  <span className="font-bold">$28-35/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Age 51-60</span>
                  <span className="font-bold">$42-52/month</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">Includes redundancy cover</p>
            </div>

            {/* Example 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">$50,000 Loan</h3>
              <div className="space-y-3 mb-6 text-slate-700">
                <div className="flex justify-between items-center pb-2 border-b border-purple-200">
                  <span>Age 25-30</span>
                  <span className="font-bold">$22-28/month</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-purple-200">
                  <span>Age 31-40</span>
                  <span className="font-bold">$32-42/month</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-purple-200">
                  <span>Age 41-50</span>
                  <span className="font-bold">$52-68/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Age 51-60</span>
                  <span className="font-bold">$80-105/month</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">Full coverage + terminal illness</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 mt-8 text-center">
            These are estimated ranges based on typical policies. Your actual premium depends on health, employment, and coverage choices. Get a personalised quote for exact pricing.
          </p>
        </div>
      </section>

      {/* Monthly Cost Breakdown */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Understanding Your Loan Insurance Cost Breakdown</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Cost Drivers */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">What Goes Into Your Premium?</h3>

              <div className="space-y-6">
                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Coverage Type (40%)</h4>
                  <p className="text-slate-700 text-sm">
                    Death cover is typically the least expensive. Adding illness, redundancy, or terminal illness cover increases your premium. You can mix and match covers to fit your budget.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Loan Amount (30%)</h4>
                  <p className="text-slate-700 text-sm">
                    Larger loans cost more to insure because payouts are larger. However, the cost per $1,000 borrowed often decreases as loan sizes increase, providing better value.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Your Age & Health (20%)</h4>
                  <p className="text-slate-700 text-sm">
                    Younger borrowers pay less because they statistically have fewer claims. Health status may affect premiums for loans over $100,000, which require medical assessment.
                  </p>
                </div>

                <div className="border-l-4 border-teal-600 pl-4">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">Employment Type (10%)</h4>
                  <p className="text-slate-700 text-sm">
                    Permanent full-time employment typically qualifies for lower premiums. Casual, contract, or self-employed workers may pay slightly higher rates due to redundancy risk.
                  </p>
                </div>
              </div>
            </div>

            {/* Cost Comparison */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Annual Costs Comparison</h3>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">$10,000 Loan (Age 30)</span>
                    <span className="text-xl font-bold text-teal-600">$108/year</span>
                  </div>
                  <p className="text-sm text-slate-700">Only $2.07 per week</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">$25,000 Loan (Age 30)</span>
                    <span className="text-xl font-bold text-teal-600">$180/year</span>
                  </div>
                  <p className="text-sm text-slate-700">Only $3.46 per week</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">$50,000 Loan (Age 30)</span>
                    <span className="text-xl font-bold text-teal-600">$312/year</span>
                  </div>
                  <p className="text-sm text-slate-700">Only $6 per week</p>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-4 border border-teal-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold text-slate-900">$100,000 Loan (Age 30)</span>
                    <span className="text-xl font-bold text-teal-600">$600/year</span>
                  </div>
                  <p className="text-sm text-slate-700">Only $11.54 per week</p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mt-6 pt-6 border-t border-slate-200">
                These are typical costs for basic death and illness cover. Actual costs vary based on individual health and employment circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Save Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Ways to Reduce Your Loan Insurance Cost</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Choose Selective Coverage</h3>
              <p className="text-slate-700 text-sm">
                You don&apos;t need every cover option. If you&apos;re in a secure permanent job, you might skip redundancy. Customise your coverage to reduce costs.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Compare Multiple Quotes</h3>
              <p className="text-slate-700 text-sm">
                Premiums vary between providers. Get quotes from multiple companies to find the best rate for your circumstances without affecting your credit.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Borrow Less, Pay Less</h3>
              <p className="text-slate-700 text-sm">
                Smaller loans cost less to insure. Consider whether you can reduce the loan amount to lower both the loan payments and insurance premiums.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Apply While Young</h3>
              <p className="text-slate-700 text-sm">
                Younger applicants qualify for lower premiums. If you&apos;re planning a loan, applying sooner rather than later keeps your insurance costs down.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Maintain Good Health</h3>
              <p className="text-slate-700 text-sm">
                For loans over $100,000, medical underwriting applies. Maintaining good health and fitness may help you qualify for better premium rates.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Review Regularly</h3>
              <p className="text-slate-700 text-sm">
                As your loan balance decreases, your insurance need reduces. Review your coverage and premium regularly to ensure you&apos;re not overpaying.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Is Loan Insurance Worth the Cost?</h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <p className="text-lg text-slate-700 mb-6">
              For most borrowers, loan insurance represents outstanding value. Consider these factors:
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-2xl font-bold text-teal-600 flex-shrink-0">1.</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Low Cost Relative to Loan Size</h3>
                  <p className="text-slate-700">
                    Insurance premiums typically cost less than 1% annually of your loan amount. For a $50,000 loan costing $300 per year to insure, that&apos;s only 0.6% of the borrowed amount for complete protection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-teal-600 flex-shrink-0">2.</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Protects Your Family From Debt</h3>
                  <p className="text-slate-700">
                    If you pass away or become unable to work, your family won&apos;t inherit your loan debt. The insurance payout eliminates a significant financial burden during an already difficult time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-teal-600 flex-shrink-0">3.</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Covers Multiple Risk Scenarios</h3>
                  <p className="text-slate-700">
                    One premium covers death, illness, redundancy, and terminal illness. You get comprehensive protection for various circumstances with a single monthly payment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-teal-600 flex-shrink-0">4.</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Prevents Financial Crisis</h3>
                  <p className="text-slate-700">
                    Without insurance, a job loss or serious illness could lead to missing loan payments, damaging your credit, or losing assets. Insurance prevents this financial catastrophe.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl font-bold text-teal-600 flex-shrink-0">5.</div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Peace of Mind Is Valuable</h3>
                  <p className="text-slate-700">
                    Knowing your loan is protected gives you confidence and reduces financial stress. That peace of mind is worth the modest weekly cost of insurance premiums.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-slate-700 font-semibold">
                Bottom line: At less than $5 per week for a $50,000 loan, loan insurance is one of the most affordable forms of financial protection available. Most financial advisors recommend it as essential coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions About Loan Insurance Cost</h2>

          <div className="space-y-4">
            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Why do premiums vary between providers?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Different providers use different risk assessment models, claims experience, and profit margins. Shopping around can save you $5-20 per month, making comparison critical.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Does your premium increase as you get older?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Most policies have fixed premiums for the loan term. However, if you renew or apply for new insurance after getting older, the new premium will reflect your age at that time.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Can I get a discount for paying annually instead of monthly?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Some providers offer small discounts (2-5%) for annual payments instead of monthly. Check with your insurer to see if they offer this option.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Do costs change if my loan balance decreases?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Your premium typically remains fixed throughout the loan term, even as your balance decreases. This is actually good value - you&apos;re paying the same amount for decreasing cover as your loan shrinks.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">What happens to my insurance cost if I refinance my loan?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                If you refinance, you&apos;ll need to apply for new insurance on the new loan. Your premium will be based on the new loan amount and your current age. This is actually an opportunity to shop around and find a better rate.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Are there any hidden costs in loan insurance premiums?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                No broker fees with loaninsurance.co.nz. Your quoted premium is your total cost - there are no hidden charges, processing fees, or additional costs when you claim.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <CTABanner
        title="Get Your Personalised Loan Insurance Cost Quote"
        description="Find out exactly what loan insurance costs for your situation. Free quote in 2 minutes with no obligation. See your actual premium before you decide."
      />
    </>
  );
}
