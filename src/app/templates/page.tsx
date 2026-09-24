import React from 'react';
import Link from 'next/link';
import { Layout, Sparkles, Check, ArrowRight, Heart, Star, Crown } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'বিয়ের বায়োডাটা টেমপ্লেট গ্যালারি — BiyePorichoy',
  description: 'ঐতিহ্যবাহী বাংলা, প্রিমিয়াম রয়েল, মডার্ন, এক্সিকিউটিভ ও মার্জিত এলিগেন্ট বায়োডাটা ফরম্যাট ও ডিজাইন টেমপ্লেট সংগ্রহ।',
};

export default function TemplatesPage() {
  const templates = [
    {
      slug: 'classic',
      name: 'ঐতিহ্যবাহী বাংলা (Classic Heritage)',
      category: 'পারিবারিক ও রুচিশীল',
      description: 'ঐতিহ্যবাহী মেরুন ও গোল্ডেন বর্ডার, আলপনা কর্নার ও পারিবারিক আভিজাত্যের সুস্পষ্ট প্রকাশ। ঐতিহ্যপ্রেমী পরিবারের প্রথম পছন্দ।',
      features: ['রয়েল কর্নার অলংকার', 'পারিবারিক আভিজাত্য', 'সুস্পষ্ট শিক্ষাগত টেবিল', 'শালীন ছবি ফ্রেম'],
      badge: 'Traditional Heritage',
      color: 'from-[#2a040d] via-[#4c0519] to-amber-700',
    },
    {
      slug: 'royal',
      name: 'রয়েল হেরিটেজ (Royal Gold)',
      category: 'প্রিমিয়াম লাক্সারি',
      description: 'রয়েল গোল্ডেন ক্রেস্ট ও লাক্সারি ডাবল মার্বেল গোল্ড বর্ডার সম্বলিত উচ্চমানের রাজকীয় ফরম্যাট।',
      features: ['রয়েল গোল্ডেন ক্রেস্ট', 'ডাবল গোল্ড বর্ডার', 'প্রিমিয়াম টাইপোগ্রাফি', 'ভিআইপি প্রপোজাল লুক'],
      badge: 'VIP / Luxury',
      color: 'from-amber-700 via-amber-600 to-yellow-600',
    },
    {
      slug: 'modern',
      name: 'মডার্ন মিনিমালিস্ট (Modern Clean)',
      category: 'আধুনিক ও মার্জিত',
      description: 'কার্ড ভিত্তিক সমসাময়িক ইন্টারফেস, প্যাস্টেল ব্যাজ এবং পরিচ্ছন্ন ইনফোগ্রাফিক লুক তরুণ প্রফেশনালদের জন্য সেরা।',
      features: ['মিনিমালিস্ট কার্ড', 'ইনফোগ্রাফিক লুক', 'সংক্ষিপ্ত ও স্পষ্ট', 'মোবাইল অপ্টিমাইজড'],
      badge: 'Modern Clean',
      color: 'from-stone-900 via-brand-950 to-stone-900',
    },
    {
      slug: 'professional',
      name: 'প্রফেশনাল এক্সিকিউটিভ (CV Style)',
      category: 'কর্পোরেট ও ক্যারিয়ার ফোকাসড',
      description: 'টু-কলাম এক্সিকিউটিভ সিভি কাঠামো। ডাক্তার, ইঞ্জিনিয়ার, বিসিএস ক্যাডার ও কর্পোরেট প্রফেশনালদের উপযোগী।',
      features: ['২-কলাম সিভি লেআউট', 'ক্যারিয়ার ও ডিগ্রি ফোকাস', 'সাইডবার প্রোফাইল', 'এক্সিকিউটিভ হেডার'],
      badge: 'Executive',
      color: 'from-[#20030a] via-[#3b0513] to-stone-900',
    },
    {
      slug: 'elegant',
      name: 'মার্জিত এলিগেন্ট (Pastel & Rose Elegance)',
      category: 'সৌন্দর্য ও আভিজাত্য (EN/BN)',
      description: 'নরম আইভরি ও রোজ-গোল্ড নান্দনিকতা। মার্জিত বাংলা এবং ইংরেজি উভয় ভাষার প্রোফাইলের জন্য অত্যন্ত দৃষ্টিনন্দন ও সমাদৃত।',
      features: ['সফট রোজ ও আইভরি প্যালেট', 'আন্তর্জাতিক মানের টাইপোগ্রাফি', 'ইংরেজি ও বাংলায় নিখুঁত', 'মার্জিত জেন্টল ডিজাইন'],
      badge: 'Trending / Popular',
      color: 'from-rose-900 via-rose-700 to-amber-700',
    },
  ];

  return (
    <div className="min-h-screen bg-matrimonial-pattern py-16 px-4 sm:px-6 lg:px-8 font-bangla space-y-16">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold shadow-xs">
          <Crown className="w-4 h-4 text-amber-600" />
          <span>প্রিমিয়াম রয়্যাল বায়োডাটা টেমপ্লেট গ্যালারি</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-bangla text-stone-950 leading-snug">
          আপনার ব্যক্তিত্বের সাথে মানানসই <span className="text-royal-gradient">সেরা টেমপ্লেটটি</span> বেছে নিন
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
          আমাদের প্রতিটি টেমপ্লেট বাংলাদেশের সমাজ ও সংস্কৃতি মাথায় রেখে ডিজাইন করা হয়েছে। একই তথ্য সকল ডিজাইনে স্বয়ংক্রিয়ভাবে রূপান্তর হয়।
        </p>
      </div>

      {/* Grid of Templates */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((tpl) => (
          <div
            key={tpl.slug}
            className="bg-[#fffdfa] rounded-3xl overflow-hidden border-2 border-amber-200/80 shadow-royal-card hover:shadow-royal-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Visual Top Card */}
            <div className={`p-6 bg-gradient-to-br ${tpl.color} text-white relative border-b border-amber-400/30`}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20">
                  {tpl.badge}
                </span>
                <Sparkles className="w-4 h-4 text-amber-300 opacity-90" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white tracking-wide">{tpl.name}</h3>
              <p className="text-xs text-amber-100/90 mt-1 font-medium">{tpl.category}</p>
            </div>

            {/* Content & Features */}
            <div className="p-6 space-y-5 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {tpl.description}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-amber-100">
                <span className="text-xs font-bold text-amber-900 uppercase tracking-wider block font-serif">
                  মূল বৈশিষ্ট্যসমূহ:
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-700">
                  {tpl.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex items-center gap-3">
                <Link
                  href={`/create`}
                  className="flex-1 py-3 px-4 rounded-xl btn-shimmer text-white font-bold text-xs flex items-center justify-center gap-2 shadow-gold-glow border border-amber-300/40 transition"
                >
                  <span>বায়োডাটা তৈরি করুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/create`}
                  className="py-3 px-4 rounded-xl border border-amber-300 hover:bg-amber-50 text-stone-800 font-bold text-xs transition"
                >
                  প্রিভিউ
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
