import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { articlesData } from '@/lib/articles';
import { ArrowLeft, Clock, Calendar, ArrowRight, Share2, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) return { title: 'Article Not Found — BiyePorichoy' };
  return {
    title: `${article.title} — BiyePorichoy গাইড`,
    description: article.excerpt,
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = articlesData.find((a) => a.slug === params.slug);
  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-bangla space-y-12">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-stone-200 shadow-sm space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>সকল ব্লগ আর্টিকেল</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4 border-b border-stone-200 pb-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <span className="font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-md">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime} পাঠ
            </span>
            <span>•</span>
            <span>{article.date}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            {article.title}
          </h1>

          <p className="text-sm text-stone-600 italic bg-stone-50 p-4 rounded-xl border border-stone-200/80">
            {article.excerpt}
          </p>
        </div>

        {/* Article Body */}
        <div className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-4">
          <div dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }} />
        </div>

        {/* In-Article Call to Action */}
        <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-rose-200 text-center space-y-4 mt-8">
          <Sparkles className="w-8 h-8 text-rose-600 mx-auto" />
          <h3 className="text-xl font-bold text-stone-900 font-serif">
            পড়া শেষ? এবার নিজের সুন্দর বায়োডাটা তৈরি করুন!
          </h3>
          <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
            বিয়েপরিচয়ে কোনো চার্জ ছাড়া মাত্র ৫ মিনিটে সম্পূর্ণ রেডিমেড টেমপ্লেটে বায়োডাটা তৈরি করা যায়।
          </p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow transition"
          >
            <span>ফ্রি বায়োডাটা মেকারে যান</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
