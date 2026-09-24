import React from 'react';
import Link from 'next/link';
import { articlesData } from '@/lib/articles';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'বিয়ের বায়োডাটা গাইড ও ব্লগ — BiyePorichoy Articles',
  description: 'বিয়ের বায়োডাটা লেখার টিপস, নিয়মাবলি, ইসলামিক নিকাহ গাইড এবং পাত্র/পাত্রীর ফরম্যাট সংগ্রহ।',
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-bangla space-y-12">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-800 text-xs font-semibold">
          <BookOpen className="w-4 h-4" />
          <span>বায়োডাটা গাইড ও তথ্যভাণ্ডার</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900">
          বিয়ের বায়োডাটা লেখার <span className="text-rose-600">জরুরি টিপস ও গাইড</span>
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
          একটি নিখুঁত ও মার্জিত বায়োডাটা প্রস্তুত করার প্রয়োজনীয় পরামর্শ, নমুনা ও ইসলামিক দিকনির্দেশনা।
        </p>
      </div>

      {/* Grid of Articles */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articlesData.map((art) => (
          <article
            key={art.slug}
            className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-lg transition flex flex-col justify-between p-6 space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span className="font-semibold text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded-md">
                  {art.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {art.readTime}
                </span>
              </div>

              <h2 className="text-lg font-bold text-stone-900 font-serif line-clamp-2 hover:text-rose-600 transition">
                <Link href={`/blog/${art.slug}`}>
                  {art.title}
                </Link>
              </h2>

              <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                {art.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
              <span className="text-xs text-stone-400">{art.date}</span>
              <Link
                href={`/blog/${art.slug}`}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 inline-flex items-center gap-1 transition"
              >
                <span>পড়ুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
}
