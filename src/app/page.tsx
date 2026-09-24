'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Heart, Sparkles, ShieldCheck, Download, Share2, Eye, 
  CheckCircle2, ArrowRight, FileText, Smartphone, Lock, 
  HelpCircle, ChevronDown, ChevronUp, Star, Users, Layout, Zap,
  Crown, HeartHandshake, User, UserCheck
} from 'lucide-react';
import { TemplateRenderer } from '@/components/templates/TemplateRenderer';
import { sampleGroomData, sampleBrideData } from '@/lib/samples';
import { TemplateId } from '@/types/biodata';

export default function HomePage() {
  const [activeTemplate, setActiveTemplate] = useState<TemplateId>('classic');
  const [activeSampleType, setActiveSampleType] = useState<'groom' | 'bride'>('groom');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getSampleData = () => {
    return activeSampleType === 'groom' ? sampleGroomData : sampleBrideData;
  };

  const previewData = { ...getSampleData(), template: activeTemplate };

  const templatesList = [
    { id: 'classic' as TemplateId, name: 'ঐতিহ্যবাহী বাংলা (Classic)', badge: 'Traditional' },
    { id: 'royal' as TemplateId, name: 'রয়েল হেরিটেজ (Royal Gold)', badge: 'VIP / Luxury' },
    { id: 'modern' as TemplateId, name: 'মডার্ন মিনিমাল (Modern)', badge: 'Clean' },
    { id: 'professional' as TemplateId, name: 'প্রফেশনাল সিভি (Executive)', badge: 'Corporate' },
    { id: 'elegant' as TemplateId, name: 'মার্জিত এলিগেন্ট (Pastel & Rose)', badge: 'EN / BN' },
  ];

  const faqs = [
    {
      q: 'বায়োডাটা তৈরি করতে কি একাউন্ট খোলা বাধ্যতামূলক?',
      a: 'না, বিয়েপরিচয়ে বায়োডাটা তৈরির জন্য কোনো প্রকার রেজিস্ট্রেশন বা একাউন্ট খোলা বাধ্যতামূলক নয়। আপনি সরাসরি ওয়েবসাইটে এসে তথ্য পূরণ করে বিনামূল্যে PDF ডাউনলোড করতে পারবেন।'
    },
    {
      q: 'বিয়েপরিচয়ে তৈরি বায়োডাটা কি সম্পূর্ণ ফ্রি?',
      a: 'হ্যাঁ! আমাদের মৌলিক সকল ফিচার, প্রধান টেমপ্লেটসমূহ, লাইভ প্রিভিউ, PDF এবং হোয়াটসঅ্যাপ ইমেজ ডাউনলোড সম্পূর্ণ ফ্রি।'
    },
    {
      q: 'আমার তথ্যের গোপনীয়তা ও নিরাপত্তা কীভাবে রক্ষা হয়?',
      a: 'আপনার তথ্যের শতভাগ নিয়ন্ত্রণ আপনার হাতে। শেয়ার করার সময় আপনি চাইলে ফোন নম্বর ও ছবি গোপন রাখতে পারেন। এমনকি ৪ ডিজিটের পাসওয়ার্ড দিয়ে বায়োডাটা লক করে শুধুমাত্র নির্ধারিত পাত্র/পাত্রী পক্ষকে দেখার অনুমতি দিতে পারেন।'
    },
    {
      q: 'হোয়াটসঅ্যাপে পাঠানোর জন্য ছবির ফরম্যাটে পাওয়া যাবে কি?',
      a: 'অবশ্যই! বিয়েপরিচয় থেকে এক ক্লিকে হাই-রেজুলেশন ক্রিস্প PNG ইমেজ ডাউনলোড করতে পারবেন যা হোয়াটসঅ্যাপ, মেসেঞ্জার এবং ইমোতে শেয়ার করার জন্য নিখুঁত।'
    },
    {
      q: 'আমি কি বাংলা এবং ইংরেজি উভয় ভাষায় বায়োডাটা তৈরি করতে পারব?',
      a: 'হ্যাঁ, আপনি এক ক্লিকেই বাংলা অথবা ইংরেজি ভাষা নির্বাচন করতে পারবেন এবং যেকোনো ভাষায় আপনার তথ্য পূরণ করতে পারবেন।'
    },
    {
      q: 'বায়োডাটা লেখার সময় ব্রাউজার বন্ধ হয়ে গেলে তথ্য কি মুছে যাবে?',
      a: 'না, আমাদের স্মার্ট লোকাল অটো-সেভ ফিচারের মাধ্যমে আপনার টাইপ করা প্রতিটি অক্ষর আপনার ডিভাইসেই সাথে সাথে সংরক্ষিত থাকে। পরবর্তীতে এলে যেখান থেকে রেখেছিলেন সেখান থেকেই শুরু করতে পারবেন।'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-24 pb-20 overflow-x-hidden font-bangla bg-matrimonial-pattern">
      
      {/* 1. DUAL-COLUMN HERO SECTION WITH FLOATING SHOWCASE */}
      <section className="relative pt-6 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 overflow-hidden border-b border-amber-200/60">
        {/* Ambient atmospheric lighting */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[350px] bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-20 right-10 w-[450px] h-[400px] bg-brand-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Headline, Trust & CTA */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              
              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-950 text-xs sm:text-sm font-bold shadow-xs">
                <Crown className="w-4 h-4 text-amber-600" />
                <span>বাংলাদেশের প্রথম রয়্যাল ম্যাট্রিমনিয়াল বায়োডাটা মেকার</span>
              </div>

              {/* Main Title */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-950 font-bangla leading-[1.32] tracking-normal">
                ৫ মিনিটে তৈরি করুন আপনার <span className="text-royal-gradient">আকর্ষণীয় বিয়ের বায়োডাটা</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base lg:text-lg text-stone-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                কোনো একাউন্ট বা রেজিস্ট্রেশন ছাড়াই সহজে তথ্য পূরণ করুন, লাইভ রয়্যাল প্রিভিউ দেখুন, প্রিমিয়াম A4 PDF ডাউনলোড করুন এবং গোপনীয়তা রক্ষা করে সরাসরি পাত্র/পাত্রী পক্ষের সাথে শেয়ার করুন।
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/create"
                  className="w-full sm:w-auto btn-shimmer px-7 py-3.5 rounded-2xl text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-md border border-amber-400/40 transition-all"
                >
                  <Sparkles className="w-5 h-5 text-amber-200" />
                  <span>বায়োডাটা তৈরি শুরু করুন — ফ্রি</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="#demo-showcase"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#fffdfa] hover:bg-amber-50 text-stone-800 border border-amber-300 font-bold text-base flex items-center justify-center gap-2 shadow-xs transition"
                >
                  <Eye className="w-4 h-4 text-amber-700" />
                  <span>নমুনা দেখুন</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 max-w-lg mx-auto lg:mx-0 text-xs text-stone-700 font-semibold">
                <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-amber-50/90 border border-amber-200 px-3 py-1.5 rounded-xl">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>১০০% ফ্রি ও নিরাপদ</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-amber-50/90 border border-amber-200 px-3 py-1.5 rounded-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>কোনো সাইন-আপ নেই</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1.5 bg-amber-50/90 border border-amber-200 px-3 py-1.5 rounded-xl">
                  <Download className="w-4 h-4 text-amber-700 flex-shrink-0" />
                  <span>A4 PDF ও HD ইমেজ</span>
                </div>
              </div>

            </div>

            {/* Right Column: Floating Interactive 3D Showcase */}
            <div className="lg:col-span-6 relative flex flex-col items-center">
              
              {/* Floating feature pills around card */}
              <div className="hidden sm:flex items-center gap-1.5 absolute -top-4 -left-4 z-20 bg-[#fffdfa] text-brand-950 px-3.5 py-1.5 rounded-full shadow-lg border border-amber-300 text-xs font-bold animate-float-slow">
                <Lock className="w-3.5 h-3.5 text-brand-700" />
                <span>১০০% গোপনীয়তা সুরক্ষিত</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 absolute -bottom-4 -right-4 z-20 bg-[#fffdfa] text-brand-950 px-3.5 py-1.5 rounded-full shadow-lg border border-amber-300 text-xs font-bold animate-float-slow" style={{ animationDelay: '2s' }}>
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>৬টি প্রিমিয়াম টেমপ্লেট</span>
              </div>

              {/* Interactive Showcase Container with Gold Glow */}
              <div id="demo-showcase" className="w-full bg-[#2a040d] text-white rounded-3xl p-3.5 sm:p-6 shadow-2xl border border-amber-400/40 relative">
                
                {/* Control Bar: Groom/Bride & Quick Template Switcher */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pb-3.5 border-b border-amber-900/40">
                  {/* Sample Switcher */}
                  <div className="flex items-center bg-black/40 p-1 rounded-xl border border-amber-400/30">
                    <button
                      type="button"
                      onClick={() => setActiveSampleType('groom')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                        activeSampleType === 'groom' ? 'bg-amber-400 text-stone-950 shadow-sm' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      <User className="w-3.5 h-3.5" />
                      <span>পাত্র (Groom)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveSampleType('bride')}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
                        activeSampleType === 'bride' ? 'bg-amber-400 text-stone-950 shadow-sm' : 'text-stone-300 hover:text-white'
                      }`}
                    >
                      <UserCheck className="w-3.5 h-3.5" />
                      <span>পাত্রী (Bride)</span>
                    </button>
                  </div>

                  {/* Template Tabs */}
                  <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-full pb-0.5">
                    {templatesList.map((tpl) => (
                      <button
                        key={tpl.id}
                        type="button"
                        onClick={() => setActiveTemplate(tpl.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition ${
                          activeTemplate === tpl.id
                            ? 'bg-amber-100 text-brand-950 shadow-md font-bold'
                            : 'bg-white/10 text-stone-300 hover:bg-white/20'
                        }`}
                      >
                        {tpl.name.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Scaled Mini Preview Window with Responsive Fit */}
                <div className="mt-3 bg-[#f8f5ee] rounded-2xl p-2 sm:p-4 h-[380px] sm:h-[460px] overflow-auto text-stone-900 shadow-inner flex justify-center items-start">
                  <div className="w-[800px] transform origin-top scale-[0.42] sm:scale-[0.55] md:scale-[0.66] lg:scale-[0.58] xl:scale-[0.65] flex-shrink-0 transition-all">
                    <TemplateRenderer data={previewData} />
                  </div>
                </div>

                {/* Card Action footer */}
                <div className="mt-3.5 flex items-center justify-between gap-3 text-xs text-amber-200/90 pt-1">
                  <span>পছন্দের ডিজাইনে এখনই তথ্য পূরণ করুন</span>
                  <Link
                    href="/create"
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold flex items-center gap-1.5 shadow transition"
                  >
                    <span>শুরু করুন</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. 6 CORE LUXURY ADVANTAGES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <Crown className="w-3.5 h-3.5 text-amber-600" />
            <span>Why Choose BiyePorichoy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bangla text-stone-950 leading-snug">
            কেন বিয়েপরিচয় দেশের সবচেয়ে বিশ্বস্ত বায়োডাটা মেকার?
          </h2>
          <p className="text-sm text-stone-600 max-w-xl mx-auto">
            আমরা বায়োডাটা তৈরির পুরো প্রক্রিয়াটি করেছি অত্যন্ত সহজ, রাজকীয় এবং শতভাগ নিরাপদ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="p-7 rounded-2xl bg-[#fffdfa] border border-amber-200/80 shadow-royal-card hover:shadow-royal-hover hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-900 to-brand-700 text-amber-300 flex items-center justify-center font-bold shadow-md">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">কোনো সাইন-আপের ঝামেলা নেই</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              সরাসরি ওয়েবসাইটে প্রবেশ করে এখনই ফরম পূরণ শুরু করতে পারবেন। কোনো পাসওয়ার্ড মনে রাখার বা ওটিপি ভেরিফিকেশনের বাধ্যতামূলক প্যারা নেই।
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#fffdfa] border border-amber-200/80 shadow-royal-card hover:shadow-royal-hover hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">রিয়েল-টাইম লাইভ প্রিভিউ</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              ফরমে একপাশে যা টাইপ করবেন, অন্যপাশে সাথে সাথে সুন্দর বায়োডাটার রূপ দেখতে পাবেন। ভুল ত্রুটি সাথে সাথে ঠিক করে নেওয়া যায়।
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#fffdfa] border border-amber-200/80 shadow-royal-card hover:shadow-royal-hover hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-700 to-yellow-500 text-stone-950 flex items-center justify-center font-bold shadow-md">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">৬টি রাজকীয় টেমপ্লেট</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              ঐতিহ্যবাহী বাংলা, দ্বীনি ইসলামিক নিকাহ, সনাতন হিন্দু প্রজাপতয়ে নমঃ, রয়েল গোল্ডেন এবং আধুনিক সিভি — যেকোনো টেমপ্লেটে একই তথ্য নিখুঁতভাবে রূপান্তর হয়।
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#fffdfa] border border-amber-200/80 shadow-royal-card hover:shadow-royal-hover hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-800 to-amber-600 text-white flex items-center justify-center font-bold shadow-md">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">ঝকঝকে A4 PDF ও ইমেজ</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              প্রিন্ট করার জন্য প্রিমিয়াম কালার A4 PDF এবং হোয়াটসঅ্যাপ ও মেসেঞ্জারে ছবি হিসেবে পাঠানোর জন্য ফুল HD ইমেজ ডাউনলোড সুবিধা।
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#fffdfa] border border-amber-200/80 shadow-royal-card hover:shadow-royal-hover hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-stone-900 to-brand-950 text-amber-300 flex items-center justify-center font-bold shadow-md">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">প্রাইভেট লিঙ্ক ও গোপনীয়তা</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              প্রয়োজনে ছবি লুকানো, ফোন নম্বর গোপন রাখা এবং পাসওয়ার্ড দিয়ে সুরক্ষিত করার অপশন। যেকোনো সময় শেয়ার করা লিঙ্ক ডিজেবল করতে পারবেন।
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#fffdfa] border border-amber-200/80 shadow-royal-card hover:shadow-royal-hover hover:-translate-y-1 transition-all duration-300 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-amber-600 to-amber-700 text-white flex items-center justify-center font-bold shadow-md">
              <Smartphone className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-serif">মোবাইল ফ্রেন্ডলি ও স্মার্ট অটো-সেভ</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              যেকোনো স্মার্টফোনে সহজে ব্যবহারযোগ্য। ট্যাব কেটে গেলেও আপনার টাইপ করা কোনো তথ্য হারাবে না, লোকাল স্টোরেজে সুরক্ষিত থাকবে।
            </p>
          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS (CONNECTED LUXURY TIMELINE) */}
      <section className="bg-gradient-to-b from-amber-50/50 via-[#fffdfa] to-amber-50/50 py-20 border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-brand-700" />
              <span>Simple 3-Step Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bangla text-stone-950 leading-snug">
              বায়োডাটা তৈরির সহজ ৩টি ধাপ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="bg-[#fffdfa] p-8 rounded-3xl border border-amber-200/80 shadow-royal-card text-center space-y-4 relative hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-900 to-brand-700 text-amber-200 font-bold text-xl flex items-center justify-center mx-auto shadow-md border border-amber-400/40">
                ১
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-bangla">তথ্য পূরণ করুন</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                সাধারণ তথ্য, শিক্ষা, পেশা, পরিবার, ধর্মীয় জীবনধারা ও জীবনসঙ্গী প্রত্যাশার সহজ ফর্মটি আপনার পছন্দমতো পূরণ করুন।
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#fffdfa] p-8 rounded-3xl border border-amber-200/80 shadow-royal-card text-center space-y-4 relative hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-700 to-yellow-500 text-stone-950 font-bold text-xl flex items-center justify-center mx-auto shadow-md border border-amber-300">
                ২
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-bangla">ডিজাইন ও প্রাইভেসী বাছুন</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                পছন্দের রাজকীয় টেমপ্লেট নির্বাচন করুন এবং যোগাযোগের নম্বর ও ছবি প্রদর্শনের গোপনীয়তা নিজের ইচ্ছামতো ঠিক করে নিন।
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#fffdfa] p-8 rounded-3xl border border-amber-200/80 shadow-royal-card text-center space-y-4 relative hover:-translate-y-1 transition-transform">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-800 to-emerald-600 text-white font-bold text-xl flex items-center justify-center mx-auto shadow-md border border-emerald-400">
                ৩
              </div>
              <h3 className="text-xl font-bold text-stone-900 font-bangla">ডাউনলোড বা শেয়ার করুন</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                ১ ক্লিকে হাই-কোয়ালিটি A4 PDF ডাউনলোড করুন অথবা হোয়াটসঅ্যাপে পাত্র/পাত্রী পক্ষের কাছে প্রাইভেট পাসওয়ার্ড লিঙ্ক পাঠিয়ে দিন।
              </p>
            </div>

          </div>

          <div className="text-center pt-12">
            <Link
              href="/create"
              className="inline-flex items-center gap-2.5 btn-shimmer px-8 py-4 rounded-xl text-white font-bold text-base shadow-gold-glow hover:shadow-gold-lg transition"
            >
              <span>এখনই শুরু করুন — সম্পূর্ণ ফ্রি</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. SEO FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bangla text-stone-950 leading-snug">
            সাধারণ জিজ্ঞাসা ও উত্তর (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-stone-500">
            বিয়েপরিচয় ব্যবহার সম্পর্কিত প্রয়োজনীয় তথ্য ও প্রশ্নের উত্তর জেনে নিন।
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#fffdfa] rounded-2xl border border-amber-200/70 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-bold text-sm sm:text-base text-stone-900 flex items-center justify-between gap-4 hover:bg-amber-50/60 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-700 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-stone-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-amber-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. BOTTOM ROYAL INVITATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#2a040d] via-[#4c0519] to-[#2a040d] text-white rounded-3xl p-8 sm:p-14 text-center space-y-6 shadow-2xl border-2 border-amber-400/30 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-300 mx-auto flex items-center justify-center border border-amber-400/40">
            <Crown className="w-7 h-7 text-amber-300" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-bangla max-w-2xl mx-auto leading-snug">
            আপনার বিয়ের সুন্দর বায়োডাটা তৈরি করতে প্রস্তুত?
          </h2>
          <p className="text-xs sm:text-sm text-amber-100/80 max-w-lg mx-auto">
            বিয়েপরিচয়ে কোনো চার্জ ছাড়াই মাত্র ৫ মিনিটে তৈরি করুন সম্পূর্ণ রাজকীয়, প্রফেশনাল ও দ্বীনি বায়োডাটা।
          </p>
          <div className="pt-2">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold text-base shadow-xl transition"
            >
              <span>বায়োডাটা তৈরি শুরু করুন — সম্পূর্ণ ফ্রি</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
