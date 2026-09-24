'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiodataData } from '@/types/biodata';
import { getSavedBiodatas, saveCurrentBiodata, deleteSavedBiodata } from '@/lib/storage';
import { sampleGroomData } from '@/lib/samples';
import { 
  FileText, Edit3, Trash2, Copy, Share2, PlusCircle, 
  Download, Eye, ExternalLink, ShieldCheck, Clock 
} from 'lucide-react';

export default function DashboardPage() {
  const [biodatas, setBiodatas] = useState<BiodataData[]>([]);

  useEffect(() => {
    const list = getSavedBiodatas();
    if (list.length === 0) {
      // Seed with sample for demo
      setBiodatas([sampleGroomData]);
    } else {
      setBiodatas(list);
    }
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm('আপনি কি এই বায়োডাটাটি মুছে ফেলতে চান?')) {
      deleteSavedBiodata(id);
      setBiodatas((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const handleDuplicate = (item: BiodataData) => {
    const duplicate: BiodataData = {
      ...item,
      id: `bp-${Date.now().toString(36)}`,
      personal: {
        ...item.personal,
        fullName: `${item.personal.fullName} (Copy)`,
      },
      updatedAt: new Date().toISOString(),
    };
    saveCurrentBiodata(duplicate);
    setBiodatas((prev) => [duplicate, ...prev]);
  };

  const handleEdit = (item: BiodataData) => {
    saveCurrentBiodata(item);
    window.location.href = '/create';
  };

  return (
    <div className="min-h-screen bg-stone-50 py-10 px-4 sm:px-6 lg:px-8 font-bangla space-y-8">
      
      {/* Top Header */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-200 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold font-bangla text-stone-900 leading-snug">
            আমার সংরক্ষিত বায়োডাটা (Dashboard)
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            আপনার ডিভাইসে সংরক্ষিত বায়োডাটাগুলো পরিচালনা, সম্পাদনা ও শেয়ার করুন।
          </p>
        </div>

        <Link
          href="/create"
          className="btn-shimmer px-5 py-2.5 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 shadow-md transition"
        >
          <PlusCircle className="w-4 h-4 text-amber-200" />
          <span>নতুন বায়োডাটা তৈরি করুন</span>
        </Link>
      </div>

      {/* Biodatas Grid */}
      <div className="max-w-6xl mx-auto">
        {biodatas.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-sm space-y-4 max-w-md mx-auto my-8">
            <FileText className="w-12 h-12 text-stone-300 mx-auto" />
            <h3 className="text-lg font-bold text-stone-800">কোনো বায়োডাটা পাওয়া যায়নি</h3>
            <p className="text-xs text-stone-500">
              আপনি এখনো কোনো বায়োডাটা সংরক্ষণ করেননি। এখনই ৫ মিনিটে একটি সুন্দর বায়োডাটা তৈরি করুন।
            </p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow"
            >
              <PlusCircle className="w-4 h-4" />
              <span>বায়োডাটা তৈরি করুন</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {biodatas.map((bio) => (
              <div
                key={bio.id}
                className="bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition p-5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-rose-50 text-rose-700">
                      {bio.personal?.biodataType === 'male' ? '👨 পাত্র (Groom)' : '🧕 পাত্রী (Bride)'}
                    </span>
                    <span className="text-[11px] text-stone-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(bio.updatedAt || Date.now()).toLocaleDateString('bn-BD')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 line-clamp-1">
                    {bio.personal?.fullName || 'নামবিহীন বায়োডাটা'}
                  </h3>

                  <p className="text-xs text-stone-500">
                    {bio.career?.occupation || 'পেশা উল্লেখ নেই'} • {bio.personal?.permanentDistrict || 'বাংলাদেশ'}
                  </p>

                  <div className="flex items-center gap-2 text-[11px] text-stone-500 pt-1">
                    <span className="bg-stone-100 px-2 py-0.5 rounded">টেমপ্লেট: {bio.template || 'classic'}</span>
                    {bio.privacy?.isPasswordProtected && (
                      <span className="bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded font-semibold">
                        পাসওয়ার্ড লকড
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(bio)}
                    className="flex-1 py-2 px-3 rounded-lg bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-xs flex items-center justify-center gap-1 transition"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>এডিট</span>
                  </button>

                  <Link
                    href={`/b/${bio.id}`}
                    target="_blank"
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs transition"
                    title="প্রাইভেট প্রিভিউ দেখুন"
                  >
                    <Eye className="w-4 h-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => handleDuplicate(bio)}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs transition"
                    title="ডুপ্লিকেট / কপি তৈরি করুন"
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(bio.id!)}
                    className="p-2 rounded-lg bg-stone-100 hover:bg-rose-50 text-stone-400 hover:text-rose-600 text-xs transition"
                    title="মুছে ফেলুন"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
