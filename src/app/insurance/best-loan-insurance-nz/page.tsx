import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase, Star, TrendingUp } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Best Loan Insurance NZ | Top Providers & Comparison',
  description:
    'Find the best loan insurance in New Zealand. Compare top providers, coverage options, and rates. Get comprehensive protection for your personal loans with no broker fees.',
  keywords: [
    'best loan insurance NZ',
    'top loan insurance providers',
    'loan insurance comparison NZ',
    'best personal loan cover',
    'loan protection insurance',
  ],
  openGraph: {
    title: 'Best Loan Insurance NZ | Top Providers & Comparison',
    description:
      'Discover the best loan insurance providers in New Zealand. Compare coverage, premiums, and claims services to find the right protection.',
    url: 'https://loaninsurance.co.nz/insurance/best-loan-insurance-nz',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/best-loan-insurance-nz',
  },
};

export default function BestLoanInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Best Loan Insurance NZ',
            description: 'Comprehensive comparison and selection of top loan insurance providers in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/best-loan-insurance-nz',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Best Loan Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Best Loan Insurance in New Zealand
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Finding the right loan insurance protection doesn&apos;t have to be complicated. Our comprehensive guide helps you identify the best providers, understand coverage options, and make an informed decision about protecting your loan repayments.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Whether you&apos;re looking for death cover, redundancy protection, or illness coverage, New Zealand has excellent loan insurance solutions available. We&apos;ve researched and compared the leading providers to help you find coverage that matches your needs and budget.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Rated Top Providers</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">256-bit SSL Encrypted</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">No Broker Fees</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Compare & Save</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">What Makes the Best Loan Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Competitive premiums that won&apos;t blow your budget - affordability is key to sustainable protection</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Comprehensive coverage options including death, illness, redundancy, and terminal illness protection</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Fast and fair claims processing with transparent assessment and quick payouts</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>NZ-based customer support and dedicated claims teams you can trust</span>
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

      {/* Top Providers Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Top Loan Insurance Providers in NZ</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            These providers stand out for their competitive rates, comprehensive coverage, and excellent customer service. Each offers different strengths depending on your situation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Provider 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Premium Provider A</h3>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-slate-700 text-sm">Competitive premiums from $4.50/week</p>
                <p className="text-slate-700 text-sm">Death cover up to $500,000</p>
                <p className="text-slate-700 text-sm">12-month redundancy cover included</p>
                <p className="text-slate-700 text-sm">Fast 24-hour claims response</p>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Get Quote
              </button>
            </div>

            {/* Provider 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Value Leader B</h3>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-slate-700 text-sm">Budget-friendly from $3.99/week</p>
                <p className="text-slate-700 text-sm">Flexible coverage combinations</p>
                <p className="text-slate-700 text-sm">No medical exam under $100k</p>
                <p className="text-slate-700 text-sm">Online claims submission available</p>
              </div>
              <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Get Quote
              </button>
            </div>

            {/* Provider 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">Service Champion C</h3>
                <Star className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="space-y-3 mb-6">
                <p className="text-slate-700 text-sm">Premium service from $5.50/week</p>
                <p className="text-slate-700 text-sm">NZ-based claims team</p>
                <p className="text-slate-700 text-sm">Terminal illness cover included</p>
                <p className="text-slate-700 text-sm">Dedicated relationship managers</p>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Feature Comparison: Best NZ Loan Insurance</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Provider A</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Provider B</th>
                  <th className="px-6 py-4 text-center text-white font-semibold">Provider C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Starting Premium</td>
                  <td className="px-6 py-4 text-center text-slate-700">$4.50/week</td>
                  <td className="px-6 py-4 text-center text-slate-700">$3.99/week</td>
                  <td className="px-6 py-4 text-center text-slate-700">$5.50/week</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Max Cover Amount</td>
                  <td className="px-6 py-4 text-center text-slate-700">$500,000</td>
                  <td className="px-6 py-4 text-center text-slate-700">$500,000</td>
                  <td className="px-6 py-4 text-center text-slate-700">$500,000</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Death Cover</td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Illness & Injury</td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Redundancy Cover</td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Terminal Illness</td>
                  <td className="px-6 py-4 text-center">Optional</td>
                  <td className="px-6 py-4 text-center">Optional</td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-600 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Medical Exam Required</td>
                  <td className="px-6 py-4 text-center">Over $100k</td>
                  <td className="px-6 py-4 text-center">Over $100k</td>
                  <td className="px-6 py-4 text-center">Over $100k</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-semibold text-slate-900">Claims Processing</td>
                  <td className="px-6 py-4 text-center">24 hours</td>
                  <td className="px-6 py-4 text-center">48 hours</td>
                  <td className="px-6 py-4 text-center">24 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 mt-8 text-center">
            Premiums vary based on age, loan amount, and coverage selections. Get personalised quotes from multiple providers to find the best rate.
          </p>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Why Invest in the Best Loan Insurance?</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Financial Security for Your Family</h3>
                  <p className="text-slate-700">
                    If something unexpected happens, your family won&apos;t be burdened with your loan debt. The best insurance ensures your loved ones are protected.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Peace of Mind Through Quality Coverage</h3>
                  <p className="text-slate-700">
                    Top-rated providers offer comprehensive coverage options you can understand and trust. Knowing you&apos;re protected makes life easier.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Straightforward Claims Process</h3>
                  <p className="text-slate-700">
                    The best loan insurance providers have streamlined claims processes with fast payouts. When you need support, it&apos;s there quickly.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Affordable Premiums You Can Afford</h3>
                  <p className="text-slate-700">
                    Top providers offer competitive rates that don&apos;t break the bank. Quality protection shouldn&apos;t cost a fortune with premiums starting under $5 per week.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Coverage Combinations</h3>
                  <p className="text-slate-700">
                    The best insurance providers let you choose exactly which covers you need. Customise your protection to match your personal situation.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">NZ-Based Support You Can Trust</h3>
                  <p className="text-slate-700">
                    Leading providers have local teams based in New Zealand who understand your market and can provide support during business hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">How to Choose the Best Loan Insurance for You</h2>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">1</span>
                Assess Your Coverage Needs
              </h3>
              <p className="text-slate-700">
                Consider which types of cover matter most to you. Do you need death protection, illness cover, redundancy protection, or a combination? Your loan amount and personal situation determine what you need.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">2</span>
                Compare Multiple Quotes
              </h3>
              <p className="text-slate-700">
                Don&apos;t settle for the first quote. Get quotes from multiple top-rated providers. Premiums vary based on age, health, employment, and loan amount, so shopping around saves you money.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">3</span>
                Check Claims Processing Speed
              </h3>
              <p className="text-slate-700">
                When you need to claim, fast processing matters. Look for providers with 24-hour response times and streamlined claims assessment. Check customer reviews about claims experience.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">4</span>
                Verify Coverage Limits
              </h3>
              <p className="text-slate-700">
                Make sure the provider offers coverage for your full loan amount. Check maximum cover limits and any restrictions. You want to ensure you can cover your complete outstanding balance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">5</span>
                Review Exclusions Carefully
              </h3>
              <p className="text-slate-700">
                Every policy has exclusions. Review what&apos;s not covered before applying. Look for any pre-existing condition limitations or specific situations where the cover doesn&apos;t apply.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">6</span>
                Check Customer Support Quality
              </h3>
              <p className="text-slate-700">
                Look for providers with responsive customer service. Read independent reviews about how they handle customer queries and claims. Local, NZ-based support is a major advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions About Best Loan Insurance</h2>

          <div className="space-y-4">
            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">What makes one loan insurance provider better than another?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                The best providers offer competitive premiums, comprehensive coverage options, fast claims processing, and excellent customer support. Look for ICNZ-registered brokers with positive customer reviews and transparent policy terms.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Is the cheapest loan insurance always the best?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Not necessarily. While price matters, the best insurance balances affordability with quality coverage, fast claims processing, and responsive customer service. A slightly higher premium might be worth it for better cover or faster payouts.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">How long does claims processing typically take with the best providers?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Top providers typically respond within 24 hours and process straightforward claims within 5-10 business days. Some complex claims may take longer, but quality providers keep you informed throughout the process.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Can I get quotes from multiple providers without affecting my credit?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Yes. Loan insurance quotes use soft credit checks that don&apos;t affect your credit score. You can safely compare quotes from multiple providers without any impact on your creditworthiness.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">What should I look for in customer reviews of loan insurance providers?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Focus on claims experience, customer service responsiveness, communication clarity, and premium value for money. Look for consistent patterns in reviews rather than isolated comments. Positive feedback about claims processing is particularly important.
              </div>
            </details>

            <details className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Do the best loan insurance providers offer online application processes?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Yes, modern providers offer entirely online applications with fast processing. You can get quotes, apply, and often complete underwriting without visiting an office or speaking to a broker.
              </div>
            </details>
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
              { title: 'Compare Loan Insurance', href: '/insurance/loan-insurance-comparison', desc: 'Side-by-side comparison of NZ loan insurance policies.' },
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
        title="Find Your Best Loan Insurance Match"
        description="Compare top providers and get personalised quotes in 2 minutes. No broker fees, no medical exam for loans under $100,000."
      />
    </>
  );
}
