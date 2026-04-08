import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { Calendar, Clock } from 'lucide-react';
import CTABanner from '@/components/CTABanner';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: number;
  date: string;
}

export const metadata: Metadata = {
  title: 'Loan Insurance Blog | LoanInsurance.co.nz',
  description:
    'Read expert articles and guides about loan protection insurance in New Zealand. Tips, advice, and insights for borrowers.',
  keywords: ['blog', 'loan insurance', 'financial advice'],
  openGraph: {
    title: 'Loan Insurance Blog',
    description: 'Expert advice and guides for loan protection insurance in NZ.',
    url: 'https://loaninsurance.co.nz/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const posts = blogPosts as BlogPost[];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-NZ', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'LoanInsurance.co.nz Blog',
            url: 'https://loaninsurance.co.nz/blog',
            description:
              'Expert articles and guides about loan protection insurance.',
          }),
        }}
      />

      <main>
        {/* Hero Section with Image */}
        <section
          className="relative min-h-[65vh] lg:min-h-[70vh] flex items-end"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1920&h=1080&fit=crop)',
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
              <span className="text-white font-medium">Blog</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Loan Insurance Blog
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl">
              Expert advice, guides, and insights about loan protection insurance
              in New Zealand
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-teal-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full border border-teal-200">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-1 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner
          title="Ready to Protect Your Loans?"
          description="Get a free quote today and discover how affordable loan protection insurance can be for your situation."
        />
      </main>
    </>
  );
}
