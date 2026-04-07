import Link from 'next/link';
import Logo from './Logo';

const footerLinks = {
  company: {
    title: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
  types: {
    title: 'Insurance Types',
    links: [
      { label: 'Personal Loan', href: '/types/personal-loan' },
      { label: 'Car Finance', href: '/types/car-finance' },
      { label: 'Home Loan', href: '/types/home-loan' },
      { label: 'GAP Insurance', href: '/types/gap-insurance' },
      { label: 'Redundancy Cover', href: '/types/redundancy-cover' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Coverage Guide', href: '/coverage-guide' },
      { label: 'Compare Providers', href: '/compare' },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms & Conditions', href: '/terms' },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Contact Column */}
          <div className="lg:col-span-1">
            <Logo variant="white" />
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Phone</p>
                <a
                  href="tel:+64988595449"
                  className="text-white font-semibold hover:text-teal-300 transition-colors"
                >
                  09 885 9549
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:hello@cover4you.co.nz"
                  className="text-white font-semibold hover:text-teal-300 transition-colors break-all text-sm"
                >
                  hello@cover4you.co.nz
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.company.title}</h3>
            <ul className="space-y-2">
              {footerLinks.company.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.types.title}</h3>
            <ul className="space-y-2">
              {footerLinks.types.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.resources.title}</h3>
            <ul className="space-y-2">
              {footerLinks.resources.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-4">{footerLinks.legal.title}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-300 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} LoanInsurance.co.nz. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Proudly ICNZ Registered Insurance Intermediary
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
