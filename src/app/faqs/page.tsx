import type { Metadata } from 'next';
import Link from 'next/link';
import { faqs } from '@/data/faqs';
import { FAQsClient } from '@/components/FAQsClient';
import CTABanner from '@/components/CTABanner';

interface FAQItem {
  slug: string;
  question: string;
  answer: string;
}

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | LoanInsurance.co.nz',
  description:
    'Answers to common questions about loan protection insurance in New Zealand. Find information about coverage, costs, claims, and more.',
  keywords: ['FAQ', 'frequently asked questions', 'loan insurance'],
  openGraph: {
    title: 'Frequently Asked Questions',
    description: 'Everything you need to know about loan insurance.',
    url: 'https://loaninsurance.co.nz/faqs',
    type: 'website',
  },
};

export default function FAQsPage() {
  const faqItems = faqs as FAQItem[];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer.replace(/<[^>]*>/g, ''),
              },
            })),
          }),
        }}
      />

      <main>
        {/* Hero Section with Image */}
        <section
          className="relative min-h-[65vh] lg:min-h-[70vh] flex items-end"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=1080&fit=crop)',
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
              <span className="text-white font-medium">FAQs</span>
            </div>

            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Find answers to common questions about loan protection
                insurance in New Zealand. Can&apos;t find what you need? Contact us.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <FAQsClient faqs={faqItems} />
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our team of loan insurance experts is here to help. Contact us for
              personalised advice and a free, no-obligation quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-teal-500 hover:from-sky-700 hover:to-teal-600 text-white font-bold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                Get a Free Quote
                <span>→</span>
              </Link>
              <Link
                href="tel:098859549"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 font-bold py-3.5 px-8 rounded-xl transition-all duration-300 border border-slate-200 hover:border-teal-300"
              >
                Call Us: 09 885 9549
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />
      </main>
    </>
  );
}
