import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Scale, BarChart3, PieChart, Columns3, DollarSign } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Loan Insurance Comparison NZ | Compare Coverage & Providers',
  description:
    'Compare loan insurance in New Zealand. Side-by-side comparison of coverage types, costs, providers, and features. Find the right protection for your loan.',
  keywords: [
    'loan insurance comparison',
    'compare loan insurance',
    'loan protection comparison NZ',
    'loan insurance comparison NZ',
    'best loan insurance comparison',
  ],
  openGraph: {
    title: 'Loan Insurance Comparison NZ | Compare Coverage & Providers',
    description:
      'Compare loan insurance options in New Zealand. Detailed side-by-side comparison of providers, costs, and coverage features.',
    url: 'https://loaninsurance.co.nz/insurance/loan-insurance-comparison',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/loan-insurance-comparison',
  },
};

export default function LoanInsuranceComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ComparisonChart',
            name: 'Loan Insurance Comparison',
            description: 'Comprehensive comparison of loan insurance options and providers in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/loan-insurance-comparison',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Loan Insurance Comparison</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Loan Insurance Comparison NZ
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Making the right insurance choice means understanding how different coverage types and providers compare. Our detailed comparison guides help you evaluate options side-by-side and choose the best protection.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                From death cover to redundancy protection, from individual providers to coverage combinations, we&apos;ll show you how different insurance options stack up. Find the solution that matches your needs and budget.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-12">
                <div className="flex items-start gap-3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Unbiased Comparison</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Side-by-Side Analysis</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Real Provider Data</span>
                </div>
                <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <Columns3 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-300 flex-shrink-0 mt-1" />
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">Multiple Categories</span>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Compare Loan Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Understand different coverage types and which ones suit your situation best</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Save money by finding the best value option rather than accepting the first quote</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Evaluate key differences like claims processing speed and customer support</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Make confident decisions based on comprehensive information, not marketing hype</span>
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

      {/* Coverage Types Comparison Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 text-center">Loan Insurance Coverage Types: Which is Right for You?</h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Different coverage types protect you against different risks. Here&apos;s how they compare and why each matters.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-700">
                  <th className="px-6 py-4 text-left text-white font-semibold">Coverage Type</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">What It Covers</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Average Cost</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Death Cover</td>
                  <td className="px-6 py-4 text-slate-700">Loan paid if you die. Up to $500,000 protection for your family.</td>
                  <td className="px-6 py-4 text-slate-700">$2-5/week</td>
                  <td className="px-6 py-4 text-slate-700">Everyone - most affordable cover</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Illness & Injury</td>
                  <td className="px-6 py-4 text-slate-700">Covers payments if unable to work due to accident or sickness.</td>
                  <td className="px-6 py-4 text-slate-700">$1-3/week</td>
                  <td className="px-6 py-4 text-slate-700">Those dependent on income</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Redundancy Cover</td>
                  <td className="px-6 py-4 text-slate-700">Payments covered for up to 12 months if made redundant.</td>
                  <td className="px-6 py-4 text-slate-700">$1-3/week</td>
                  <td className="px-6 py-4 text-slate-700">Employees in changing industries</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-6 py-4 font-bold text-slate-900">Terminal Illness</td>
                  <td className="px-6 py-4 text-slate-700">Loan paid immediately if diagnosed with &lt;12 months to live.</td>
                  <td className="px-6 py-4 text-slate-700">$0.50-1.50/week</td>
                  <td className="px-6 py-4 text-slate-700">Optional but recommended</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison Scenarios Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Loan Insurance: Different Scenarios Compared</h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Scenario 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scenario 1: Single Earner with Family</h3>
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-slate-700 text-sm mb-3"><strong>Your Situation:</strong> Primary income earner, spouse and children dependent on your income</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Recommended Coverage</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>✓ Death Cover (essential)</li>
                    <li>✓ Illness & Injury Cover (critical)</li>
                    <li>✓ Redundancy Cover (very important)</li>
                    <li>✓ Terminal Illness (optional)</li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">Typical Cost</p>
                  <p className="text-slate-700 text-sm">~$5-7 per week for $50k loan</p>
                </div>
              </div>
            </div>

            {/* Scenario 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scenario 2: Dual Income Couple, No Kids</h3>
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-slate-700 text-sm mb-3"><strong>Your Situation:</strong> Both partners earning, financially independent, lower financial impact if one person can&apos;t work</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Recommended Coverage</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>✓ Death Cover (important)</li>
                    <li>✓ Illness & Injury Cover (important)</li>
                    <li>~ Redundancy Cover (optional)</li>
                    <li>~ Terminal Illness (optional)</li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">Typical Cost</p>
                  <p className="text-slate-700 text-sm">~$3-4 per week for $50k loan</p>
                </div>
              </div>
            </div>

            {/* Scenario 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scenario 3: Self-Employed Professional</h3>
              <div className="mb-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-slate-700 text-sm mb-3"><strong>Your Situation:</strong> Self-employed with fluctuating income and high job insecurity, no employer support</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Recommended Coverage</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>✓ Death Cover (essential)</li>
                    <li>✓ Illness & Injury Cover (very important)</li>
                    <li>~ Redundancy Cover (doesn&apos;t apply)</li>
                    <li>✓ Terminal Illness (recommended)</li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">Typical Cost</p>
                  <p className="text-slate-700 text-sm">~$5-6 per week for $50k loan</p>
                </div>
              </div>
            </div>

            {/* Scenario 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Scenario 4: Young, Single, Good Job Security</h3>
              <div className="mb-6 p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-slate-700 text-sm mb-3"><strong>Your Situation:</strong> Young, permanent employment, excellent health, no dependents, financially independent</p>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Recommended Coverage</p>
                  <ul className="text-slate-700 text-sm space-y-1">
                    <li>✓ Death Cover (essential)</li>
                    <li>✓ Illness & Injury Cover (important)</li>
                    <li>~ Redundancy Cover (optional)</li>
                    <li>~ Terminal Illness (optional)</li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <p className="font-semibold text-slate-900 mb-1">Typical Cost</p>
                  <p className="text-slate-700 text-sm">~$2.50-3.50 per week for $50k loan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Comparison Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Provider Comparison: What to Look For</h2>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Factor 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Price Competitiveness</h3>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Premium Range:</strong> Compare quotes from multiple providers for identical coverage.</p>
                <p><strong>Value:</strong> Don&apos;t just look at lowest price - consider coverage breadth and claims reputation.</p>
                <p><strong>Hidden Costs:</strong> Ensure quoted price is the total with no broker fees or admin charges.</p>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Claims Processing Speed</h3>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Response Time:</strong> 24-hour initial response is standard for quality providers.</p>
                <p><strong>Processing:</strong> Straightforward claims should settle within 5-10 business days.</p>
                <p><strong>Support:</strong> Local NZ-based support during business hours is valuable.</p>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">Coverage Options & Flexibility</h3>
              <div className="space-y-3 text-slate-700 text-sm">
                <p><strong>Mix & Match:</strong> Can you choose which covers you want?</p>
                <p><strong>Coverage Limits:</strong> Maximum cover amount relative to your loan size needs.</p>
                <p><strong>Customisation:</strong> Options to tailor protection to your specific situation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Head-to-Head Comparison Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Loan Insurance: Full Provider Comparison</h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-700">
                  <th className="px-4 sm:px-6 py-4 text-left text-white font-semibold text-sm sm:text-base">Criteria</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-white font-semibold text-sm sm:text-base">Provider A</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-white font-semibold text-sm sm:text-base">Provider B</th>
                  <th className="px-4 sm:px-6 py-4 text-left text-white font-semibold text-sm sm:text-base">Provider C</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                <tr className="hover:bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">Base Premium ($25k loan, age 35)</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">$18/month</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">$16/month</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">$22/month</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">All Covers Included</td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                  <td className="px-4 sm:px-6 py-3">Selective</td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">Claims Response Time</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">24 hours</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">48 hours</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">24 hours</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">Processing Time</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">5-10 days</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">7-14 days</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">5-10 days</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">NZ-Based Support</td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">Online Application</td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                  <td className="px-4 sm:px-6 py-3"><CheckCircle2 className="w-5 h-5 text-green-600" /></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">Max Cover Amount</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">$500,000</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">$500,000</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">$500,000</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50">
                  <td className="px-4 sm:px-6 py-3 font-semibold text-slate-900">Medical Exam Required</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">Over $100k</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">Over $100k</td>
                  <td className="px-4 sm:px-6 py-3 text-slate-700">Over $100k</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-600 mt-8 text-center">
            Comparison based on typical policies. Actual terms, conditions, and premiums vary. Always read the product disclosure statement before purchasing.
          </p>
        </div>
      </section>

      {/* Decision Matrix Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Choosing the Right Loan Insurance: Decision Framework</h2>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">1</span>
                Assess Your Risk Profile
              </h3>
              <p className="text-slate-700 ml-10">
                Are you the sole earner? Do you have dependents? Is your job secure? Different situations require different coverage. Understanding your risks helps you choose appropriate protection.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">2</span>
                Determine Coverage Needs
              </h3>
              <p className="text-slate-700 ml-10">
                Based on your risks, which covers matter most? Everyone needs death cover. Sole earners need redundancy and illness protection. Determine your must-haves and nice-to-haves.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">3</span>
                Get Multiple Quotes
              </h3>
              <p className="text-slate-700 ml-10">
                Get quotes from at least 3 providers for the same coverage. This reveals pricing differences and helps you understand the range. Premiums vary significantly between providers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">4</span>
                Compare Beyond Price
              </h3>
              <p className="text-slate-700 ml-10">
                The cheapest option isn&apos;t always best. Compare claims processing speed, customer service reputation, coverage breadth, and provider reliability. Read independent reviews.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">5</span>
                Review Policy Details
              </h3>
              <p className="text-slate-700 ml-10">
                Read the product disclosure statement carefully. Check waiting periods, exclusions, maximum benefits, and claims conditions. Understand what you&apos;re buying completely.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 bg-teal-600 text-white font-bold rounded-full">6</span>
                Make Your Decision
              </h3>
              <p className="text-slate-700 ml-10">
                Choose the provider offering the best balance of price, coverage, claims reputation, and customer service for your needs. Get started with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions: Loan Insurance Comparison</h2>

          <div className="space-y-4">
            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Should I buy insurance from my lender or a separate provider?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Separate providers often offer better value and more coverage options than lender-provided insurance. Always compare quotes before buying the lender&apos;s product.
              </div>
            </details>

            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">What&apos;s the difference between group insurance and individual policies?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Group insurance (often through employers) is sometimes cheaper but offers less customisation. Individual policies let you tailor coverage to your specific needs and are portable if you change jobs.
              </div>
            </details>

            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Can I increase my coverage later if my loan amount increases?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Most providers allow coverage adjustments if your loan amount changes. Some allow increases without re-assessment if done within certain timeframes. Always ask about this when comparing.
              </div>
            </details>

            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Is it better to bundle insurance with my loan or keep them separate?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Bundling may seem convenient but often costs more. Separate insurance usually offers better value and flexibility. Bundled policies can be harder to cancel independently.
              </div>
            </details>

            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">How do online-only providers compare to traditional insurers?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Online-only providers typically offer faster, simpler application processes and competitive pricing. However, ensure they have established claims processes and reliable customer support before choosing.
              </div>
            </details>

            <details className="bg-white border border-slate-200 rounded-lg overflow-hidden group">
              <summary className="flex items-center justify-between w-full p-6 cursor-pointer hover:bg-slate-50 transition-colors">
                <h3 className="text-lg font-semibold text-slate-900">Why do premiums vary so much between providers for the same coverage?</h3>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold group-open:hidden">+</span>
                <span className="ml-2 flex-shrink-0 text-teal-600 font-bold hidden group-open:block">−</span>
              </summary>
              <div className="px-6 pb-6 text-slate-700">
                Providers use different risk assessment models, have different claims experiences, and set different profit margins. This variation is why comparing quotes is essential to finding the best value.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <CTABanner
        title="Ready to Compare Loan Insurance Options?"
        description="Get side-by-side quotes from multiple providers in 2 minutes. See exactly what you'll pay for different coverage combinations."
      />
    </>
  );
}
