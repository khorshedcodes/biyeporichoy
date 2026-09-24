'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, FileText, Download, Share2, DollarSign, 
  TrendingUp, CheckCircle, ShieldAlert, Eye, BarChart3 
} from 'lucide-react';
import { getSavedBiodatas } from '@/lib/storage';

export default function AdminPage() {
  const [localCount, setLocalCount] = useState(1);

  useEffect(() => {
    const list = getSavedBiodatas();
    setLocalCount(list.length || 1);
  }, []);

  const stats = [
    { label: 'মোট বায়োডাটা তৈরি (Total Created)', val: '১৮,৪৫০+', change: '+১২%', icon: FileText, color: 'text-rose-600 bg-rose-50' },
    { label: 'PDF ডাউনলোড সম্পন্ন (PDF Exports)', val: '১২,৯২০+', change: '+১৮%', icon: Download, color: 'text-emerald-600 bg-emerald-50' },
    { label: 'শেয়ারকৃত লিঙ্ক ভিউ (Link Views)', val: '৪৫,২০০+', change: '+২৫%', icon: Eye, color: 'text-indigo-600 bg-indigo-50' },
    { label: 'মোট অর্জিত রেভিনিউ (Pro Revenue)', val: '৳১,৪২,৩৫০', change: '+১৫%', icon: DollarSign, color: 'text-amber-600 bg-amber-50' },
  ];

  const templatePopularity = [
    { name: 'ইসলামিক নিকাহ (Islamic Deen)', percentage: 42, count: '৭,৭৪৯' },
    { name: 'ঐতিহ্যবাহী বাংলা (Classic Bangla)', percentage: 28, count: '৫,১৬৬' },
    { name: 'মডার্ন মিনিমাল (Modern Clean)', percentage: 16, count: '২,৯৫২' },
    { name: 'প্রফেশনাল এক্সিকিউটিভ (CV)', percentage: 9, count: '১,৬৬০' },
    { name: 'রয়েল গোল্ডেন (Royal Heritage)', percentage: 5, count: '৯২৩' },
  ];

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6 lg:px-8 font-bangla space-y-8">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
            বিয়েপরিচয় এডমিন ও অ্যানালিটিক্স প্যানেল (V1 Admin)
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            বায়োডাটা তৈরির পরিসংখ্যান, ডাউনলোড ট্র্যাকিং এবং ব্যবহারকারী অ্যাক্টিভিটি।
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            সিস্টেম অনলাইন
          </span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((st, idx) => {
          const Icon = st.icon;
          return (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${st.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {st.change}
                </span>
              </div>
              <div>
                <span className="text-xs text-stone-500 block">{st.label}</span>
                <span className="text-2xl font-bold text-stone-900 font-serif mt-1 block">{st.val}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Analytics Breakdown Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Col 1: Template Popularity */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-rose-600" />
              <span>টেমপ্লেট ব্যবহারের জনপ্রিয়তা (Template Analytics)</span>
            </h3>
          </div>

          <div className="space-y-4">
            {templatePopularity.map((tpl, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                  <span>{tpl.name}</span>
                  <span>{tpl.count} বার ({tpl.percentage}%)</span>
                </div>
                <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-rose-600 rounded-full"
                    style={{ width: `${tpl.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Recent Activity Logs */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-4">
          <h3 className="font-bold text-stone-900 text-base border-b border-stone-100 pb-3">
            সাম্প্রতিক কার্যক্রম (Recent Events)
          </h3>
          <div className="space-y-3 text-xs text-stone-600">
            <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50">
              <span className="font-medium">নতুন বায়োডাটা তৈরি (Groom, Dhaka)</span>
              <span className="text-stone-400">২ মিনিট আগে</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50">
              <span className="font-medium">A4 PDF ডাউনলোড সম্পন্ন</span>
              <span className="text-stone-400">৫ মিনিট আগে</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50">
              <span className="font-medium">প্রাইভেট লিঙ্ক শেয়ার তৈরি (ID: bp-8k2)</span>
              <span className="text-stone-400">১২ মিনিট আগে</span>
            </div>
            <div className="flex items-center justify-between p-2 rounded-lg bg-stone-50">
              <span className="font-medium">bKash Pro আপগ্রেড (৳৪৯)</span>
              <span className="text-stone-400">২৫ মিনিট আগে</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
