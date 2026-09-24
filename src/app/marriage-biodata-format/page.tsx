import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, FileText, Sparkles, Download } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'বিয়ের বায়োডাটা ফরম্যাট বাংলাদেশ — Marriage Biodata Format BD',
  description: 'বাংলাদেশের পাত্র ও পাত্রীদের জন্য প্রমিত বিয়ের বায়োডাটা ফরম্যাট। কী কী তথ্য থাকতে হয়, নমুনা ও সরাসরি PDF তৈরির নিয়ম।',
};

export default function MarriageBiodataFormatPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-bangla space-y-12">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
        
        {/* Header */}
        <div className="space-y-3 border-b border-stone-200 pb-6">
          <span className="text-xs uppercase font-bold tracking-widest text-rose-600">
            Standard Format Guide
          </span>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            বিয়ের বায়োডাটা ফরম্যাট ও লেখার সঠিক নিয়মাবলি (Marriage Biodata Format)
          </h1>
          <p className="text-sm text-stone-600">
            একটি আদর্শ বাংলাদেশি বিয়ের বায়োডাটায় কী কী তথ্য থাকা জরুরি এবং কীভাবে উপস্থাপন করলে প্রস্তাব গ্রহণযোগ্য হয়?
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
          <p>
            বিয়ের বায়োডাটা সাধারণ চাকরির সিভি (Curriculum Vitae) থেকে একেবারেই ভিন্ন। চাকরির সিভিতে পেশাগত দক্ষতা প্রাধান্য পায়, কিন্তু বিয়ের বায়োডাটায় ব্যক্তির চরিত্র, দ্বীনদারি, পারিবারিক ঐতিহ্য, শিক্ষা এবং জীবনসঙ্গী সম্পর্কিত স্পষ্ট প্রত্যাশা প্রধান ভূমিকা পালন করে।
          </p>

          <h2 className="text-xl font-bold text-stone-900 pt-4">একটি সম্পূর্ণ বায়োডাটায় যা যা অন্তর্ভুক্ত থাকে:</h2>
          
          <div className="space-y-3 bg-stone-50 p-6 rounded-2xl border border-stone-200">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">১. প্রাথমিক ও শারীরিক তথ্য:</strong> নাম, বয়স, উচ্চতা, গায়ের রঙ, ওজন, রক্তের গ্রুপ, বৈবাহিক অবস্থা এবং বর্তমান ও স্থায়ী ঠিকানা।
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">২. শিক্ষাগত যোগ্যতা:</strong> এসএসসি, এইচএসসি, অনার্স/ডিগ্রি ও মাস্টার্স এবং মাদ্রাসা বা দ্বীনি শিক্ষার বিস্তারিত সাল ও ফলাফল।
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">৩. পেশা ও কর্মসংস্থান:</strong> পদবি, প্রতিষ্ঠানের নাম, কর্মস্থলের অবস্থান এবং মাসিক আয়ের ইঙ্গিত।
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">৪. পারিবারিক পরিচয়:</strong> পিতা-মাতার নাম ও পেশা, ভাইবোনদের সংখ্যা ও বর্তমান অবস্থান এবং পারিবারিক মর্যাদা।
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">৫. ধর্মীয় দৃষ্টিভঙ্গি:</strong> সালাত আদায়, সুন্নতি পোশাক/পর্দা, কুরআন তিলাওয়াত এবং হালাল উপার্জনের অঙ্গীকার।
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">৬. জীবনসঙ্গী প্রত্যাশা:</strong> কাঙ্ক্ষিত বয়স, উচ্চতা, শিক্ষাগত যোগ্যতা, জেলা ও স্বভাব।
              </div>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900">৭. অভিভাবকের যোগাযোগ:</strong> যোগাযোগের নির্ভরযোগ্য অভিভাবকের নাম, সম্পর্ক ও ফোন নম্বর।
              </div>
            </div>
          </div>

          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-200 text-center space-y-4">
            <h3 className="text-lg font-bold text-rose-900">ফরম্যাট দেখে নিজেই তৈরি করতে চান?</h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              কোনো কিছু টাইপ করার ঝামেলা ছাড়া বিয়েপরিচয়ের বিল্ডার ব্যবহার করে মাত্র ৫ মিনিটে তৈরি করুন।
            </p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow transition"
            >
              <span>ফ্রি বায়োডাটা তৈরি করুন</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
