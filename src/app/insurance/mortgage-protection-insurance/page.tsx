import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, CheckCircle2, Zap, Lock, ArrowRight, Home, Car, Users, Briefcase } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Mortgage Protection Insurance NZ | Protect Your Home Loan',
  description:
    'Mortgage Protection Insurance safeguards your home loan repayments if you lose your job, become ill, or pass away. Coverage up to $500,000. Get a quote in 2 minutes.',
  keywords: [
    'mortgage protection insurance',
    'mortgage repayment insurance',
    'mortgage cover NZ',
    'home loan protection',
    'mortgage payment protection',
    'home insurance NZ',
  ],
  openGraph: {
    title: 'Mortgage Protection Insurance NZ | Protect Your Home Loan',
    description:
      'Protect your mortgage with comprehensive insurance. Coverage for job loss, illness, and death. Affordable premiums, no broker fees.',
    url: 'https://loaninsurance.co.nz/insurance/mortgage-protection-insurance',
    type: 'website',
  },
  alternates: {
    canonical: 'https://loaninsurance.co.nz/insurance/mortgage-protection-insurance',
  },
};

export default function MortgageProtectionInsurancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Mortgage Protection Insurance',
            description: 'Mortgage Protection Insurance to safeguard home loan repayments in New Zealand',
            url: 'https://loaninsurance.co.nz/insurance/mortgage-protection-insurance',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop)',
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
            <span className="text-slate-200">Mortgage Protection Insurance</span>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            {/* Left Column */}
            <div className="lg:col-span-3">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Mortgage Protection Insurance
              </h1>

              <p className="text-lg sm:text-xl text-slate-100 mb-6">
                Your home is your most valuable asset. Mortgage Protection Insurance ensures that your family can keep your home even if you lose your income due to job loss, illness, or unexpected life events.
              </p>

              <p className="text-base sm:text-lg text-slate-200 mb-8">
                Mortgage Protection Insurance provides peace of mind for New Zealand homeowners by covering your monthly mortgage payments when you&apos;re unable to work. With coverage options tailored to your needs and affordable premiums starting from as little as $8 per week, you can protect your family&apos;s future and the roof over their heads.
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
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Why Choose Mortgage Protection Insurance?</h2>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Coverage up to $500,000 - protection for mortgages of any size across New Zealand</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Affordable premiums starting from just $8 per week - less than a coffee per day</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Multiple coverage options - choose death, illness, redundancy, or terminal illness protection</span>
                  </li>
                  <li className="flex gap-3 text-white">
                    <CheckCircle2 className="w-5 h-5 text-teal-300 flex-shrink-0 mt-0.5" />
                    <span>Simple application with quick approval - no lengthy underwriting process required</span>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">What&apos;s Covered Under Mortgage Protection Insurance</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Death Cover */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 sm:p-8 border border-blue-200">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-2xl mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Death Cover</h3>
              <p className="text-slate-700 text-sm">
                If you pass away, your outstanding mortgage balance is paid in full, ensuring your family keeps their home free and clear without the burden of debt.
              </p>
            </div>

            {/* Illness & Injury */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 sm:p-8 border border-teal-200">
              <div className="flex items-center justify-center w-12 h-12 bg-teal-600 rounded-2xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Illness & Injury Cover</h3>
              <p className="text-slate-700 text-sm">
                If you&apos;re unable to work due to accident or illness, we cover your monthly mortgage payments until you return to work or your claim settles.
              </p>
            </div>

            {/* Redundancy Cover */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 border border-purple-200">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-2xl mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Redundancy Cover</h3>
              <p className="text-slate-700 text-sm">
                If you lose your job involuntarily, we cover your mortgage payments for up to 12 months while you find new employment and maintain your home.
              </p>
            </div>

            {/* Terminal Illness */}
            <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 sm:p-8 border border-rose-200">
              <div className="flex items-center justify-center w-12 h-12 bg-rose-600 rounded-2xl mb-4">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Terminal Illness</h3>
              <p className="text-slate-700 text-sm">
                If diagnosed with a terminal illness (less than 12 months to live), your mortgage is paid in full immediately, giving your family complete security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Homeowners Need It Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">Why New Zealand Homeowners Need Mortgage Protection</h2>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Protecting Your Family&apos;s Home</h3>
              <p className="text-slate-700 mb-4">
                Your home is more than just property - it&apos;s where your family builds memories, feels safe, and plans their future. A mortgage is typically the largest debt most New Zealand families carry. If something happens to the primary income earner, without mortgage protection, families could face losing their home.
              </p>
              <p className="text-slate-700">
                Mortgage Protection Insurance ensures that even during life&apos;s challenges, your family keeps their home. Whether it&apos;s redundancy during an economic downturn or unexpected illness, mortgage protection provides the financial stability to stay in your home.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">The Cost of Not Having Protection</h3>
              <p className="text-slate-700 mb-4">
                Without mortgage protection, a family facing job loss or serious illness could be forced to sell their home, potentially at unfavourable prices or with insufficient equity. This disrupts children&apos;s schooling, forces relocations, and creates long-term financial damage.
              </p>
              <p className="text-slate-700">
                Mortgage lenders require mortgages to be serviced or they take action. Unlike other debts that can be managed, mortgage defaults lead to property repossession. Mortgage Protection Insurance prevents this worst-case scenario from becoming reality.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Complementing Your Existing Insurance</h3>
              <p className="text-slate-700 mb-4">
                Many homeowners have home and contents insurance, but not income protection for their mortgage. Standard home insurance covers the building, not the repayment obligation. Mortgage Protection Insurance fills this critical gap by ensuring your payment obligation is covered if your income stops.
              </p>
              <p className="text-slate-700">
                Mortgage Protection Insurance works alongside life insurance. While life insurance provides a lump sum, mortgage protection specifically covers ongoing monthly payments, ensuring your family maintains their home during periods of financial stress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Key Benefits of Mortgage Protection Insurance</h2>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-2xl bg-teal-600">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Keep Your Family in Their Home</h3>
                  <p className="text-slate-700">
                    Your home is your family&apos;s sanctuary. Mortgage protection ensures they never face losing it due to job loss, illness, or other hardships.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Large Coverage Amounts</h3>
                  <p className="text-slate-700">
                    With coverage up to $500,000, mortgage protection covers even substantial NZ mortgages, whether in Auckland, Wellington, Christchurch, or elsewhere.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Direct Payment to Lender</h3>
                  <p className="text-slate-700">
                    When a claim is approved, we pay your mortgage directly to your lender. Your family is never in a position where they need to manage the process.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Payment Options</h3>
                  <p className="text-slate-700">
                    Choose from monthly, quarterly, or annual payment plans. Select coverage layers that match your risk profile and financial situation.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">No Medical Exam for Most Mortgages</h3>
                  <p className="text-slate-700">
                    For mortgages under $100,000, no medical exam is required. Get approved quickly without invasive health screening.
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
                    Claims are typically processed within 5-10 business days. Our team works quickly so you get the payment you need as soon as possible.
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
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Month-to-Month Flexibility</h3>
                  <p className="text-slate-700">
                    No long-term contracts required. Cancel anytime without penalties or hidden fees when you no longer need coverage.
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
                    Sleep soundly knowing your family&apos;s home is protected. One less worry about what happens if your income is interrupted.
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Mortgage Protection Insurance FAQ</h2>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Can I get mortgage protection on a mortgage I already have?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, absolutely. Many Kiwi homeowners add mortgage protection after taking out their mortgage. There&apos;s no requirement to purchase protection when you first get your home loan. You can apply for protection at any time during the loan&apos;s life.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>What happens if I&apos;ve refinanced my mortgage?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                If you refinance your mortgage with the same lender, your protection may continue automatically. If you refinance with a different lender, you&apos;ll need to update your policy details, but your coverage can transfer. Contact our team for assistance with refinance situations.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Are there waiting periods for mortgage protection claims?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, there&apos;s typically a 30-day waiting period from policy start date before claims can be made. Death cover is active immediately from day one. After the initial waiting period, you&apos;re fully covered for all eligible claims.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Can both spouses be covered under one policy?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Yes, if you have a joint mortgage with your spouse, both of you can be covered under a single mortgage protection policy. This is actually an excellent option for families where both partners contribute to mortgage payments.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>What if my mortgage amount decreases over time?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Your coverage amount stays at the original amount unless you request to reduce it. You can reduce your coverage as your mortgage decreases, which will lower your premiums. You can also increase coverage if needed, subject to underwriting approval.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 cursor-pointer">
              <summary className="flex items-center justify-between font-semibold text-slate-900 text-lg">
                <span>Does mortgage protection cover mortgage interest rate increases?</span>
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="text-slate-700 mt-4">
                Mortgage protection covers your actual mortgage payment amount. If your interest rate increases and your payment increases, your coverage automatically adjusts to your new payment amount (up to your policy limit), ensuring you remain fully protected.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Suitable For Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Who Should Get Mortgage Protection Insurance?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">First-Time Homebuyers</h3>
              </div>
              <p className="text-slate-700">
                Stretching your budget to afford your first home? Mortgage protection ensures you keep it even if circumstances change unexpectedly.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Families with Children</h3>
              </div>
              <p className="text-slate-700">
                If your children depend on the stability of your home, mortgage protection prevents disruption to their schooling and routines.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Self-Employed Homeowners</h3>
              </div>
              <p className="text-slate-700">
                Variable income makes mortgage protection invaluable. Cover your mortgage during slow business periods or unexpected downturns.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-100 rounded-2xl flex items-center justify-center">
                  <Car className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Single Mortgage Earners</h3>
              </div>
              <p className="text-slate-700">
                If you&apos;re the sole income supporter of your family&apos;s mortgage, protection is essential to keep your home secure.
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
              { title: 'Income Protection Insurance', href: '/insurance/income-protection-insurance', desc: 'Replace your income during periods of illness or injury.' },
              { title: 'Mortgage Repayment Cover', href: '/insurance/mortgage-repayment-cover', desc: 'Monthly mortgage payment protection for NZ homeowners.' },
              { title: 'Best Loan Insurance NZ', href: '/insurance/best-loan-insurance-nz', desc: 'Compare the top-rated loan insurance providers in New Zealand.' },
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
        title="Protect Your Family&apos;s Home Today"
        description="Get mortgage protection insurance in 2 minutes. Coverage up to $500,000, affordable premiums, and approval within 24 hours. Keep your home secure."
      />
    </>
  );
}
