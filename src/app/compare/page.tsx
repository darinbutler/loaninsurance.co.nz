import type { Metadata } from 'next';
import { ComparePageClient } from './compare-client';

export const metadata: Metadata = {
  title: 'Compare Loan Insurance Providers | LoanInsurance.co.nz',
  description:
    'Compare loan insurance policies from multiple NZ providers. See premiums, coverage amounts, waiting periods, and more to find the best deal for you.',
  keywords: ['compare insurance', 'loan insurance comparison', 'best rates'],
  openGraph: {
    title: 'Compare Loan Insurance Providers',
    description: 'Compare coverage and pricing from leading NZ insurers.',
    url: 'https://loaninsurance.co.nz/compare',
    type: 'website',
  },
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ComparisonChart',
            name: 'Loan Insurance Provider Comparison',
            url: 'https://loaninsurance.co.nz/compare',
          }),
        }}
      />
      <ComparePageClient />
    </>
  );
}
