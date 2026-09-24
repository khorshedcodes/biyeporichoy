import React from 'react';
import Link from 'next/link';
import { ArrowRight, Download, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'বিয়ের বায়োডাটা PDF ডাউনলোড — Biye Biodata PDF Free',
  description: 'প্রিন্ট-রেডি A4 সাইজ হাই-কোয়ালিটি বিয়ের বায়োডাটা PDF তৈরি ও ডাউনলোড করুন বিনামূল্যে।',
};

export default function BiyeBiodataPdfPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-bangla space-y-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
        
        <div className="space-y-3 border-b border-stone-200 pb-6 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center mb-2">
            <Download className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            প্রিন্ট-রেডি A4 সাইজ বিয়ের বায়োডাটা PDF ডাউনলোড
          </h1>
          <p className="text-sm text-stone-600">
            বিয়েপরিচয়ে তথ্য দিন এবং এক ক্লিকেই ভেক্টর কোয়ালিটির নিখুঁত বাংলা ও ইংরেজি A4 PDF ডাউনলোড করুন।
          </p>
        </div>

        <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            আমাদের PDF জেনারেটর বিশেষভাবে তৈরি যাতে প্রিন্ট করার সময় কোনো ফন্ট বা বর্ডার না ফাটে। আপনি সরাসরি দোকানে গিয়ে যেকোনো কালার বা ব্ল্যাক-অ্যান্ড-হোয়াইট প্রিন্টারে A4 সাইজে প্রিন্ট নিতে পারবেন।
          </p>

          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 space-y-2">
            <h3 className="font-bold text-emerald-950 text-base">পিডিএফ ফিচারের সুবিধাসমূহ:</h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-emerald-900">
              <li>✓ আন্তর্জাতিক মানসম্পন্ন A4 পেইজ ফরম্যাট</li>
              <li>✓ উচ্চ রেজুলেশন বাংলা টাইপোগ্রাফি (Hind Siliguri / Noto Sans)</li>
              <li>✓ মার্জিন ও বর্ডারের সুষম বণ্টন</li>
              <li>✓ ইমেইল ও হোয়াটসঅ্যাপে পাঠানোর জন্য উপযুক্ত ফাইল সাইজ</li>
            </ul>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-base shadow-xl transition"
            >
              <span>এখনই PDF বায়োডাটা তৈরি করুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
