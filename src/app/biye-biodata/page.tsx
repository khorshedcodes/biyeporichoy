import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Download, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'বিয়ের বায়োডাটা তৈরি — Biye Biodata Bangladesh',
  description: 'অনলাইনে সহজ ও ফ্রিতে বিয়ের বায়োডাটা বানানোর উপায়। ইসলামিক ও আধুনিক ফরম্যাট।',
};

export default function BiyeBiodataPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-bangla space-y-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
        
        <div className="space-y-3 border-b border-stone-200 pb-6 text-center sm:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-600">
            Biye Biodata Maker
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            অনলাইনে বিয়ের বায়োডাটা তৈরির সবচেয়ে সহজ ও বিশ্বস্ত মাধ্যম
          </h1>
          <p className="text-sm text-stone-600">
            বিয়েপরিচয় ডটকম আপনাকে দিচ্ছে কোনো জটিলতা ছাড়া সরাসরি মোবাইল বা কম্পিউটার থেকে ঝকঝকে বায়োডাটা তৈরির সুযোগ।
          </p>
        </div>

        <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            আগে মানুষ মাইক্রোসফট ওয়ার্ড বা দোকানে গিয়ে বায়োডাটা কম্পোজ করত, যার বেশিরভাগেরই ফরম্যাটিং ভেঙে যেত বা দেখতে ভালো লাগত না। বিয়েপরিচয় এ আমরা তৈরি করেছি পূর্বনির্ধারিত রেডিমেড লেআউট যাতে তথ্য বসানো মাত্রই একটি দৃষ্টিনন্দন লুক তৈরি হয়।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <h4 className="font-bold text-stone-900">🔒 সম্পূর্ণ নিরাপদ ও প্রাইভেট</h4>
              <p className="text-xs text-stone-600">পাসওয়ার্ড সুরক্ষা ও ছবি লুকানোর সুযোগ।</p>
            </div>
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-1">
              <h4 className="font-bold text-stone-900">⚡ ৫ মিনিটে রেডি</h4>
              <p className="text-xs text-stone-600">কোনো রেজিস্ট্রেশন ছাড়াই দ্রুত কাজ শেষ করুন।</p>
            </div>
          </div>

          <div className="text-center pt-6">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-xl transition"
            >
              <span>এখনই বায়োডাটা তৈরি করুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
