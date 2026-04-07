import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { notFound } from 'next/navigation';
import { BlogPostClient } from './blog-post-client';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: number;
}

export async function generateStaticParams() {
  return (blogPosts as BlogPost[]).map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: `${post.title} | LoanInsurance.co.nz Blog`,
    description: post.excerpt,
    keywords: [post.category, 'loan insurance', 'New Zealand'],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://loaninsurance.co.nz/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: BlogPostPageProps) {
  const { slug } = await params;
  const post = (blogPosts as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = (blogPosts as BlogPost[])
    .filter((p) => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: post.image,
            datePublished: post.date,
            author: {
              '@type': 'Person',
              name: post.author,
            },
            description: post.excerpt,
          }),
        }}
      />

      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}
