import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | LoanInsurance.co.nz',
  description: 'Important disclaimers about the information and services provided by LoanInsurance.co.nz.',
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-slate prose-lg">
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>

          <p className="text-slate-600 leading-relaxed">
            LoanInsurance.co.nz is a free comparison and lead-generation service. We are not an insurer, underwriter, or financial adviser. The information on this website is provided for general informational purposes only and does not constitute financial advice.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">No Financial Advice</h2>
          <p className="text-slate-600 leading-relaxed">
            The content on this website should not be taken as a recommendation or endorsement of any particular insurance product, provider, or policy. All insurance products mentioned are subject to their own terms, conditions, and exclusions. You should read the relevant Product Disclosure Statement (PDS) before making any decisions.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">How We Work</h2>
          <p className="text-slate-600 leading-relaxed">
            When you submit a quote request through our website, your details are forwarded to one or more ICNZ-registered insurance brokers or advisers who may contact you to discuss your needs and provide tailored quotes. We may receive a referral fee or commission from these partners. This does not affect the price you pay for your insurance.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Accuracy of Information</h2>
          <p className="text-slate-600 leading-relaxed">
            While we make every effort to ensure the information on this website is accurate and up to date, we make no warranties or representations about the accuracy, completeness, or suitability of any information. Insurance products, prices, and features change regularly. Always confirm details directly with the insurer or your adviser.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">External Links</h2>
          <p className="text-slate-600 leading-relaxed">
            This website may contain links to external websites. We are not responsible for the content, privacy practices, or availability of those sites. Linking to an external site does not imply endorsement.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Limitation of Liability</h2>
          <p className="text-slate-600 leading-relaxed">
            To the fullest extent permitted by New Zealand law, LoanInsurance.co.nz and its operators shall not be liable for any loss, damage, or expense arising from the use of this website or reliance on any information provided herein.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Contact Us</h2>
          <p className="text-slate-600 leading-relaxed">
            If you have any questions about this disclaimer, please contact us at{' '}
            <a href="mailto:hello@cover4you.co.nz" className="text-teal-600 hover:text-teal-700">
              hello@cover4you.co.nz
            </a>.
          </p>
        </div>
      </section>
    </main>
  );
}
