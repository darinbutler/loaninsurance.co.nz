'use client';

import { useState } from 'react';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import CTABanner from '@/components/CTABanner';
import { providers, type Provider } from '@/data/providers';
import {
  DollarSign,
  Shield,
  Clock,
  AlertCircle,
  FileCheck,
  Star,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  XCircle,
} from 'lucide-react';

type CategoryFilter = 'all' | 'life-insurer' | 'vehicle-finance' | 'general';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-3.5 h-3.5 ${
            star <= Math.floor(rating)
              ? 'text-amber-400 fill-amber-400'
              : star - 0.5 <= rating
                ? 'text-amber-400 fill-amber-200'
                : 'text-slate-300'
          }`}
        />
      ))}
      <span className="text-xs font-bold text-slate-700 ml-1">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

function ProviderCard({
  provider,
  expanded,
  onToggle,
}: {
  provider: Provider;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl border-2 border-slate-200 hover:border-teal-400 transition-all duration-300 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-start sm:items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex-1 text-left">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h3 className="text-lg font-bold text-slate-900">
              {provider.name}
            </h3>
            {provider.nzOwned && (
              <span className="text-xs font-semibold bg-teal-100 text-teal-700 px-2.5 py-0.5 rounded-full">
                NZ Owned
              </span>
            )}
            <span className="text-xs font-medium bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
              Est. {provider.established}
            </span>
          </div>
          <p className="text-sm text-slate-600 mb-3">{provider.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <StarRating rating={provider.rating} />
            <span className="text-xs text-slate-500">
              Financial Strength: {provider.financialStrength}
            </span>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform duration-300 ${
            expanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {expanded && (
        <div className="border-t-2 border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200">
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Max Benefit
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.maxBenefit}
              </p>
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Waiting Periods
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.waitingPeriods}
              </p>
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Benefit Periods
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.benefitPeriods}
              </p>
            </div>
            <div className="bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1">
                Best For
              </p>
              <p className="text-sm font-bold text-slate-900">
                {provider.bestFor}
              </p>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                Cover Types
              </h4>
              <div className="flex flex-wrap gap-2">
                {provider.coverTypes.map((type) => (
                  <span
                    key={type}
                    className="text-xs font-medium bg-sky-50 text-sky-700 px-3 py-1 rounded-full border border-sky-200"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {provider.keyFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="px-6 pb-5 flex flex-col sm:flex-row gap-3">
            <Link
              href="/#quote-form"
              className="bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 text-center text-sm shadow-lg shadow-teal-500/20 hover:-translate-y-0.5"
            >
              Get a Quote for {provider.name}
            </Link>
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-slate-200 hover:border-teal-400 text-slate-700 hover:text-teal-600 font-semibold py-2.5 px-6 rounded-xl transition-all duration-300 text-center text-sm inline-flex items-center justify-center gap-2"
            >
              Visit Website
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export function ComparePageClient() {
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filteredProviders =
    filter === 'all'
      ? providers
      : providers.filter((p) => p.category === filter);

  const comparisonFactors = [
    {
      icon: DollarSign,
      label: 'Premium Cost',
      description:
        'Monthly or annual insurance costs vary by provider, age, and cover level',
    },
    {
      icon: Shield,
      label: 'Cover Amount',
      description:
        'Most providers offer up to 115% of mortgage repayments',
    },
    {
      icon: Clock,
      label: 'Waiting Periods',
      description:
        'Ranges from 2 weeks to 104 weeks depending on provider',
    },
    {
      icon: AlertCircle,
      label: 'Exclusions',
      description:
        'Pre-existing conditions, hazardous activities, and more',
    },
    {
      icon: FileCheck,
      label: 'Claims Process',
      description:
        'How easy it is to claim and how quickly benefits are paid',
    },
    {
      icon: Star,
      label: 'Provider Rating',
      description:
        'Customer satisfaction, financial strength, and reputation',
    },
  ];

  const howToChoose = [
    {
      title: 'Price vs. Coverage',
      description:
        "Don't choose based on price alone. The cheapest policy might have higher waiting periods or lower coverage limits. Balance cost with the protection you actually need.",
    },
    {
      title: 'Waiting Period Impact',
      description:
        'Shorter waiting periods mean faster benefit payment but higher premiums. Consider your savings buffer when deciding — most providers offer 4 to 104 week options.',
    },
    {
      title: 'Policy Flexibility',
      description:
        'Look for policies that allow you to adjust coverage or pause payments temporarily. Some providers like Asteron Life let you increase cover up to 10% annually without medical reassessment.',
    },
    {
      title: 'Claims Support',
      description:
        'Choose insurers known for straightforward claims processes. Partners Life and AIA consistently rate well for claims support among advisers.',
    },
  ];

  // Cover type columns for the comparison matrix
  const coverCategories = [
    'Mortgage / Rent',
    'Income Protection',
    'Redundancy',
    'Death Cover',
    'Vehicle / GAP',
  ];

  function hasCoverType(provider: Provider, category: string): boolean {
    const types = provider.coverTypes.join(' ').toLowerCase();
    switch (category) {
      case 'Mortgage / Rent':
        return types.includes('mortgage') || types.includes('rent');
      case 'Income Protection':
        return types.includes('income');
      case 'Redundancy':
        return types.includes('redundancy');
      case 'Death Cover':
        return types.includes('death') || types.includes('life');
      case 'Vehicle / GAP':
        return types.includes('gap') || types.includes('vehicle') || types.includes('car');
      default:
        return false;
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[70vh] lg:min-h-[75vh] flex items-end"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 pt-32">
          <div className="mb-6 flex items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="hover:text-teal-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white font-medium">Compare</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Compare Loan
              <span className="block bg-gradient-to-r from-teal-400 to-sky-400 bg-clip-text text-transparent">
                Insurance Providers
              </span>
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed">
              Compare {providers.length} leading loan protection
              insurance providers side-by-side. See coverage, waiting periods,
              benefit limits, and key features.
            </p>
          </div>
        </div>
      </section>

      {/* ===== PROMINENT COMPARISON TABLE ===== */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Side-by-Side Provider Comparison
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Compare all key features across providers at a glance
            </p>
          </div>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className="w-full border-collapse rounded-2xl overflow-hidden border-2 border-slate-300 shadow-xl">
                {/* Header row with provider names */}
                <thead>
                  <tr className="bg-gradient-to-r from-slate-900 to-slate-800">
                    <th className="px-4 py-4 text-left text-sm font-bold text-white border-r border-slate-700 w-40 sticky left-0 bg-slate-900 z-10">
                      Feature
                    </th>
                    {providers.map((p) => (
                      <th
                        key={p.slug}
                        className="px-3 py-4 text-center text-xs font-bold text-white border-r border-slate-700 last:border-r-0 min-w-[130px]"
                      >
                        <div className="mb-1">{p.name}</div>
                        <StarRating rating={p.rating} />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Financial Strength */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 text-sm font-bold text-slate-900 border-r-2 border-slate-300 sticky left-0 bg-slate-50 z-10">
                      Financial Strength
                    </td>
                    {providers.map((p) => (
                      <td
                        key={p.slug}
                        className="px-3 py-3 text-center text-xs font-semibold text-slate-700 border-r border-slate-200 last:border-r-0"
                      >
                        {p.financialStrength.split(' ')[0]}
                      </td>
                    ))}
                  </tr>

                  {/* Max Benefit */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm font-bold text-slate-900 border-r-2 border-slate-300 sticky left-0 bg-white z-10">
                      Max Benefit
                    </td>
                    {providers.map((p) => (
                      <td
                        key={p.slug}
                        className="px-3 py-3 text-center text-xs text-slate-700 border-r border-slate-200 last:border-r-0"
                      >
                        {p.maxBenefit.length > 35
                          ? p.maxBenefit.split(' or ')[0]
                          : p.maxBenefit}
                      </td>
                    ))}
                  </tr>

                  {/* Minimum Wait */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 text-sm font-bold text-slate-900 border-r-2 border-slate-300 sticky left-0 bg-slate-50 z-10">
                      Min. Waiting Period
                    </td>
                    {providers.map((p) => (
                      <td
                        key={p.slug}
                        className="px-3 py-3 text-center text-xs text-slate-700 border-r border-slate-200 last:border-r-0"
                      >
                        {p.waitingPeriods.split(',')[0].trim()}
                      </td>
                    ))}
                  </tr>

                  {/* Benefit Period */}
                  <tr className="bg-white">
                    <td className="px-4 py-3 text-sm font-bold text-slate-900 border-r-2 border-slate-300 sticky left-0 bg-white z-10">
                      Benefit Period
                    </td>
                    {providers.map((p) => (
                      <td
                        key={p.slug}
                        className="px-3 py-3 text-center text-xs text-slate-700 border-r border-slate-200 last:border-r-0"
                      >
                        {p.benefitPeriods.split(',')[0].trim()}
                      </td>
                    ))}
                  </tr>

                  {/* NZ Owned */}
                  <tr className="bg-slate-50">
                    <td className="px-4 py-3 text-sm font-bold text-slate-900 border-r-2 border-slate-300 sticky left-0 bg-slate-50 z-10">
                      NZ Owned
                    </td>
                    {providers.map((p) => (
                      <td
                        key={p.slug}
                        className="px-3 py-3 text-center border-r border-slate-200 last:border-r-0"
                      >
                        {p.nzOwned ? (
                          <CheckCircle2 className="w-5 h-5 text-teal-600 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Cover type rows */}
                  <tr className="bg-gradient-to-r from-sky-600 to-teal-500">
                    <td
                      colSpan={providers.length + 1}
                      className="px-4 py-2.5 text-sm font-bold text-white"
                    >
                      Coverage Types
                    </td>
                  </tr>
                  {coverCategories.map((category, idx) => (
                    <tr
                      key={category}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                    >
                      <td
                        className={`px-4 py-3 text-sm font-medium text-slate-700 border-r-2 border-slate-300 sticky left-0 z-10 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                        }`}
                      >
                        {category}
                      </td>
                      {providers.map((p) => (
                        <td
                          key={p.slug}
                          className="px-3 py-3 text-center border-r border-slate-200 last:border-r-0"
                        >
                          {hasCoverType(p, category) ? (
                            <CheckCircle2 className="w-5 h-5 text-teal-600 mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-slate-300 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}

                  {/* Best For */}
                  <tr className="bg-gradient-to-r from-sky-50 to-teal-50">
                    <td className="px-4 py-3 text-sm font-bold text-slate-900 border-r-2 border-slate-300 sticky left-0 bg-sky-50 z-10">
                      Best For
                    </td>
                    {providers.map((p) => (
                      <td
                        key={p.slug}
                        className="px-3 py-3 text-center text-xs text-slate-700 border-r border-slate-200 last:border-r-0 font-medium"
                      >
                        {p.bestFor}
                      </td>
                    ))}
                  </tr>

                  {/* CTA row */}
                  <tr className="bg-white">
                    <td className="px-4 py-4 border-r-2 border-slate-300 sticky left-0 bg-white z-10" />
                    {providers.map((p) => (
                      <td
                        key={p.slug}
                        className="px-2 py-4 text-center border-r border-slate-200 last:border-r-0"
                      >
                        <Link
                          href="/#quote-form"
                          className="inline-block bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-xs shadow-md hover:shadow-lg"
                        >
                          Get Quote
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Provider information sourced from official websites and public
            disclosures. Premiums vary by individual circumstances. Last updated
            April 2026.
          </p>
        </div>
      </section>

      {/* Provider Detail Cards */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Provider Details
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Click on any provider to see full details including coverage,
              features, and how to get a quote
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { value: 'all' as CategoryFilter, label: 'All Providers' },
              {
                value: 'life-insurer' as CategoryFilter,
                label: 'Life Insurers',
              },
              {
                value: 'vehicle-finance' as CategoryFilter,
                label: 'Vehicle Finance',
              },
              { value: 'general' as CategoryFilter, label: 'General' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  filter === tab.value
                    ? 'bg-gradient-to-r from-sky-600 to-teal-500 text-white shadow-lg shadow-teal-500/25'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Provider Cards */}
          <div className="space-y-4">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.slug}
                provider={provider}
                expanded={expandedProvider === provider.slug}
                onToggle={() =>
                  setExpandedProvider(
                    expandedProvider === provider.slug ? null : provider.slug
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Factors */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Key Factors to Compare
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Look beyond the price tag when comparing loan insurance policies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonFactors.map((factor, idx) => {
              const Icon = factor.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center mb-5 shadow-lg shadow-teal-500/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {factor.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {factor.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              How to Choose the Right Policy
            </h2>
          </div>

          <div className="space-y-4">
            {howToChoose.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-slate-200 hover:border-teal-300 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-600 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20">
                    <span className="text-white font-bold text-sm">{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Quote Form */}
      <QuoteForm mode="full" />

      {/* CTA Banner */}
      <CTABanner
        title="Start Your Comparison Today"
        description="Get free quotes from multiple providers and compare side-by-side. No broker fees, no obligations."
        buttonText="Get Free Comparison Quotes"
      />
    </main>
  );
}
