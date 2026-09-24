import React from 'react';
import Link from 'next/link';
import { Crown, ShieldCheck, Lock, Sparkles, HeartHandshake, Briefcase, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2a040d] text-stone-300 pt-16 pb-12 border-t-2 border-amber-500/30 font-bangla relative overflow-hidden">
      {/* Decorative ambient subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-amber-900/30">
          
          {/* Col 1: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-900 to-amber-600 flex items-center justify-center text-amber-300 shadow-md border border-amber-400/40">
                <Crown className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <span className="text-2xl font-bold font-serif text-white tracking-tight flex items-center">
                  বিয়েপরিচয়<span className="text-amber-400">.com</span>
                </span>
                <span className="text-[10px] text-amber-200/80 font-medium block -mt-1 tracking-wider uppercase">
                  Royal Matrimonial Biodata Maker
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed max-w-sm">
              বাংলাদেশের প্রথম ও সবচেয়ে বিশ্বস্ত রয়্যাল ম্যাট্রিমনিয়াল বায়োডাটা প্ল্যাটফর্ম। সম্পূর্ণ বিনামূল্যে ৫ মিনিটে তৈরি করুন নজরকাড়া বিয়ের বায়োডাটা, ডাউনলোড করুন ঝকঝকে A4 PDF এবং নিশ্চিন্তে শেয়ার করুন গোপনীয়তা বজায় রেখে।
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs text-amber-200/80 pt-2 font-medium">
              <span className="flex items-center gap-1.5 bg-brand-950/60 border border-amber-400/20 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                ১০০% গোপনীয়তা নিয়ন্ত্রিত
              </span>
              <span className="flex items-center gap-1.5 bg-brand-950/60 border border-amber-400/20 px-3 py-1 rounded-full">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                যৌতুকমুক্ত সুন্নতি বৈবাহিক উদ্যোগ
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 font-serif">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              সেবাসমূহ
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/create" className="hover:text-amber-300 transition-colors">
                  বায়োডাটা তৈরি করুন
                </Link>
              </li>
              <li>
                <Link href="/templates" className="hover:text-amber-300 transition-colors">
                  সকল বায়োডাটা টেমপ্লেট
                </Link>
              </li>
              <li>
                <Link href="/marriage-biodata-format" className="hover:text-amber-300 transition-colors">
                  বিয়ের বায়োডাটা ফরম্যাট
                </Link>
              </li>
              <li>
                <Link href="/biye-biodata-pdf" className="hover:text-amber-300 transition-colors">
                  বায়োডাটা PDF ডাউনলোড
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-amber-300 transition-colors">
                  আমার বায়োডাটা ড্যাশবোর্ড
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Templates */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 font-serif">
              <Crown className="w-3.5 h-3.5 text-amber-400" />
              টেমপ্লেট সংগ্রহ
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/templates/classic" className="hover:text-amber-300 transition-colors">
                  ঐতিহ্যবাহী বাংলা (Classic Heritage)
                </Link>
              </li>
              <li>
                <Link href="/templates/royal" className="hover:text-amber-300 transition-colors">
                  রয়েল হেরিটেজ (Royal Gold)
                </Link>
              </li>
              <li>
                <Link href="/templates/modern" className="hover:text-amber-300 transition-colors">
                  মডার্ন মিনিমাল (Modern Clean)
                </Link>
              </li>
              <li>
                <Link href="/templates/professional" className="hover:text-amber-300 transition-colors">
                  প্রফেশনাল এক্সিকিউটিভ (CV Style)
                </Link>
              </li>
              <li>
                <Link href="/templates/elegant" className="hover:text-amber-300 transition-colors">
                  মার্জিত এলিগেন্ট (Pastel Elegance)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Guides */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 font-serif">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-400" />
              গাইড ও আর্টিকেল
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/blog/how-to-write-marriage-biodata" className="hover:text-amber-300 transition-colors">
                  বায়োডাটা লেখার সঠিক নিয়ম
                </Link>
              </li>
              <li>
                <Link href="/blog/islamic-biodata-guide" className="hover:text-amber-300 transition-colors">
                  দ্বীনি পাত্র/পাত্রীর বায়োডাটা
                </Link>
              </li>
              <li>
                <Link href="/blog/groom-biodata-format" className="hover:text-amber-300 transition-colors">
                  ছেলের বিয়ের বায়োডাটা
                </Link>
              </li>
              <li>
                <Link href="/blog/bride-biodata-format" className="hover:text-amber-300 transition-colors">
                  মেয়ের বিয়ের বায়োডাটা
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-amber-300 transition-colors">
                  প্রিমিয়াম প্যাকেজসমূহ
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Cross-Platform Partner: BanglaCV.net for job CVs */}
        <div className="my-8 p-4 rounded-2xl bg-brand-950/70 border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-stone-200">
                চাকরি বা ক্যারিয়ারের জন্য প্রফেশনাল সিভি খুঁজছেন?
              </p>
              <p className="text-xs text-stone-400">
                বাংলাদেশের চাকরিপ্রার্থীদের জন্য আধুনিক ও ১০০% ফ্রি জীবনবৃত্তান্ত মেকার
              </p>
            </div>
          </div>
          <a
            href="https://www.banglacv.net"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs transition-colors shadow-md hover:shadow-emerald-500/20 shrink-0"
          >
            <span>BanglaCV.net এ সিভি তৈরি করুন</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Bottom copyright & links */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© {new Date().getFullYear()} BiyePorichoy.com (বিয়েপরিচয়)। সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-5 text-stone-400">
            <Link href="/privacy" className="hover:text-amber-300 transition">গোপনীয়তা নীতি</Link>
            <Link href="/terms" className="hover:text-amber-300 transition">ব্যবহারের শর্তাবলী</Link>
            <Link href="/pricing" className="hover:text-amber-300 transition">মূল্যতালিকা</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
