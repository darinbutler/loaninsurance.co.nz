'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  slug: string;
  question: string;
  answer: string;
}

interface FAQsClientProps {
  faqs: FAQ[];
}

export function FAQsClient({ faqs }: FAQsClientProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.slug}
          className="bg-white border border-slate-200 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-200"
        >
          <button
            onClick={() =>
              setExpandedFAQ(expandedFAQ === faq.slug ? null : faq.slug)
            }
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
          >
            <h3 className="font-bold text-slate-900 text-left">
              {faq.question}
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-teal-600 flex-shrink-0 transition-transform ${
                expandedFAQ === faq.slug ? 'rotate-180' : ''
              }`}
            />
          </button>

          {expandedFAQ === faq.slug && (
            <div className="px-6 py-4 border-t border-slate-200 bg-slate-50">
              <div className="prose prose-sm max-w-none">
                <p className="text-slate-700 whitespace-pre-wrap">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
