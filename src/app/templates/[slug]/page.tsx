'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { TemplateRenderer } from '@/components/templates/TemplateRenderer';
import { sampleGroomData, sampleBrideData } from '@/lib/samples';
import { TemplateId } from '@/types/biodata';
import { ArrowLeft, ArrowRight, Download, Sparkles, CheckCircle2 } from 'lucide-react';

export default function TemplateDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || 'classic';

  // Map slug to templateId
  let templateId: TemplateId = 'classic';
  if (slug === 'royal') templateId = 'royal';
  else if (slug === 'modern') templateId = 'modern';
  else if (slug === 'professional') templateId = 'professional';
  else if (slug === 'elegant') templateId = 'elegant';
  else if (slug === 'bangla' || slug === 'classic') templateId = 'classic';

  const previewData = templateId === 'elegant'
    ? { ...sampleBrideData, template: 'elegant' as TemplateId }
    : { ...sampleGroomData, template: templateId };

  const templateMeta: Record<string, { title: string; subtitle: string; desc: string }> = {
    classic: {
      title: 'ঐতিহ্যবাহী বাংলা বায়োডাটা ফরম্যাট (Classic Heritage)',
      subtitle: 'পারিবারিক আভিজাত্য ও ঐতিহ্যবাহী নান্দনিকতা',
      desc: 'পারিবারিক ঐতিহ্য, পিতা-মাতার সম্মান ও ভাইবোনদের পরিচয় সুস্পষ্টভাবে ফুটিয়ে তুলতে ঐতিহ্যবাহী মেরুন ও গোল্ডেন বর্ডার ডিজাইন।',
    },
    bangla: {
      title: 'ঐতিহ্যবাহী বাংলা বায়োডাটা ফরম্যাট (Classic Heritage)',
      subtitle: 'পারিবারিক আভিজাত্য ও ঐতিহ্যবাহী নান্দনিকতা',
      desc: 'পারিবারিক ঐতিহ্য, পিতা-মাতার সম্মান ও ভাইবোনদের পরিচয় সুস্পষ্টভাবে ফুটিয়ে তুলতে ঐতিহ্যবাহী মেরুন ও গোল্ডেন বর্ডার ডিজাইন।',
    },
    royal: {
      title: 'রয়েল গোল্ডেন হেরিটেজ বায়োডাটা (Royal Heritage)',
      subtitle: 'রাজকীয় লাক্সারি গোল্ডেন বর্ডার ও ক্রেস্ট ডিজাইন',
      desc: 'ভিআইপি প্রস্তাব ও আভিজাত্যপূর্ণ পারিবারিক উপস্থাপনার জন্য প্রিমিয়াম গোল্ডেন ফিনিশিং ও লাক্সারি মার্বেল ডাবল বর্ডার।',
    },
    modern: {
      title: 'মডার্ন মিনিমালিস্ট বায়োডাটা ফরম্যাট (Modern Clean)',
      subtitle: 'তরুণ চাকরিজীবী ও প্রফেশনালদের আধুনিক পছন্দ',
      desc: 'পরিচ্ছন্ন কার্ড স্ট্রাকচার ও মার্জিত সমসাময়িক টাইপোগ্রাফি সমৃদ্ধ আধুনিক বায়োডাটা ফরম্যাট।',
    },
    professional: {
      title: 'প্রফেশনাল এক্সিকিউটিভ সিভি বায়োডাটা (Executive CV)',
      subtitle: 'ক্যারিয়ার, উচ্চশিক্ষা ও অর্জন সম্বলিত ২-কলাম ফরম্যাট',
      desc: 'ডাক্তার, ইঞ্জিনিয়ার, ব্যাংকার ও বিসিএস ক্যাডারদের জন্য সুস্পষ্ট ক্যারিয়ার ও শিক্ষাগত যোগ্যতার প্রাধান্য।',
    },
    elegant: {
      title: 'মার্জিত এলিগেন্ট বায়োডাটা ফরম্যাট (Pastel & Rose Elegance)',
      subtitle: 'নরম আইভরি ও রোজ-গোল্ড আন্তর্জাতিক নান্দনিকতা (EN/BN)',
      desc: 'ইংরেজি এবং বাংলা উভয় প্রোফাইলের জন্য অত্যন্ত দৃষ্টিনন্দন মার্জিত লেআউট, যা আধুনিক পরিবারগুলোতে বহুল প্রশংসিত।',
    },
  };

  const meta = templateMeta[slug] || templateMeta.classic;

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6 lg:px-8 font-bangla space-y-10">
      
      {/* Header Bar */}
      <div className="max-w-5xl mx-auto space-y-4">
        <Link
          href="/templates"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>সকল টেমপ্লেট দেখুন</span>
        </Link>

        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
              {meta.subtitle}
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
              {meta.title}
            </h1>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {meta.desc}
            </p>
          </div>

          <Link
            href="/create"
            className="w-full md:w-auto px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition whitespace-nowrap"
          >
            <span>এই টেমপ্লেট ব্যবহার করুন</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Live Sample Render */}
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-8 border border-stone-200 shadow-lg">
        <TemplateRenderer data={previewData} />
      </div>

      {/* Bottom Action */}
      <div className="max-w-4xl mx-auto text-center pt-4">
        <Link
          href="/create"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-xl transition"
        >
          <span>বিনামূল্যে আপনার বায়োডাটা তৈরি করুন</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

    </div>
  );
}
