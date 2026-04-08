import Link from 'next/link';

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonHref?: string;
  variant?: 'default' | 'dark';
}

export default function CTABanner({
  title = 'Ready to Protect Your Loan Repayments?',
  description = 'Get personalised loan protection insurance quotes from NZ\u0027s top providers.',
  buttonText = 'Get a Free Quote',
  buttonLink = '/contact',
  buttonHref,
  variant = 'default',
}: CTABannerProps) {
  const href = buttonHref || buttonLink;
  const isDark = variant === 'dark';

  return (
    <section className={`w-full py-16 px-4 ${isDark ? 'bg-slate-900' : 'bg-gradient-to-r from-emerald-600 to-teal-600'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-white'}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 ${isDark ? 'text-slate-300' : 'text-emerald-50'}`}>
          {description}
        </p>
        <Link
          href={href}
          className={`inline-block px-8 py-3 font-semibold rounded-lg transition-colors duration-300 ${
            isDark
              ? 'bg-teal-600 text-white hover:bg-teal-700'
              : 'bg-white text-emerald-600 hover:bg-emerald-50'
          }`}
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
