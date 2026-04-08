'use client';

import { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  location: string;
  loanType: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Auckland',
    loanType: 'Home Loan Protection',
    text: "When I was diagnosed with a serious illness, the last thing I wanted to worry about was my mortgage. My loan protection policy covered all my repayments for six months while I recovered. I can\u0027t recommend it enough.",
    rating: 5,
  },
  {
    name: 'James T.',
    location: 'Wellington',
    loanType: 'Car Finance Protection',
    text: 'I was made redundant unexpectedly and my car loan protection kicked in immediately. The broker made the whole claims process straightforward and stress-free. Worth every cent of the premiums.',
    rating: 5,
  },
  {
    name: 'Priya K.',
    location: 'Christchurch',
    loanType: 'Personal Loan Cover',
    text: 'The comparison service saved me hours of research. I was connected with a broker who found me better cover at a lower premium than what my bank had offered. Great experience overall.',
    rating: 5,
  },
  {
    name: 'David R.',
    location: 'Hamilton',
    loanType: 'Mortgage Repayment Cover',
    text: 'After a workplace accident, my income protection covered my mortgage repayments for the entire recovery period. My family had complete peace of mind during a very difficult time.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Real stories from New Zealanders who protected their loans
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <Quote className="w-8 h-8 text-teal-500/30 mb-4" />
              <p className="text-slate-700 leading-relaxed mb-6 text-[15px]">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.location} &middot; {testimonial.loanType}
                  </p>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
