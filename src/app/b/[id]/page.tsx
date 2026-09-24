'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { BiodataData } from '@/types/biodata';
import { loadCurrentBiodata, getSavedBiodatas } from '@/lib/storage';
import { sampleGroomData, sampleBrideData } from '@/lib/samples';
import { TemplateRenderer } from '@/components/templates/TemplateRenderer';
import { ExportModal } from '@/components/builder/ExportModal';
import { 
  Lock, KeyRound, Download, Share2, Heart, ArrowRight, 
  ShieldCheck, AlertCircle, Eye, Printer 
} from 'lucide-react';
import Link from 'next/link';

export default function SharedBiodataPage() {
  const params = useParams();
  const id = params?.id as string;

  const [data, setData] = useState<BiodataData | null>(null);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  useEffect(() => {
    // 1. Try to find matching ID in saved list or current
    const current = loadCurrentBiodata();
    const savedList = getSavedBiodatas();

    let found: BiodataData | undefined = undefined;

    if (current && current.id === id) {
      found = current;
    } else {
      found = savedList.find((item) => item.id === id);
    }

    // Fallback to sample data for demo links
    if (!found) {
      if (id?.includes('bride') || id?.includes('female')) {
        found = sampleBrideData;
      } else {
        found = sampleGroomData;
      }
    }

    setData(found);
    if (!found.privacy?.isPasswordProtected) {
      setIsUnlocked(true);
    }
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-rose-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-stone-500 font-bangla">বায়োডাটা লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  const isBn = data.language === 'bn';

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.privacy.password && passwordInput.trim() === data.privacy.password.trim()) {
      setIsUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100/90 py-8 px-4 font-bangla">
      
      {/* Top Banner for Recipients */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl p-4 mb-6 shadow-sm border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-left">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center flex-shrink-0">
            <Heart className="w-5 h-5 fill-rose-600" />
          </div>
          <div>
            <h2 className="font-bold text-stone-900 text-sm sm:text-base">
              {isBn ? 'বিয়েপরিচয় ভেরিফাইড বায়োডাটা' : 'BiyePorichoy Verified Biodata'}
            </h2>
            <p className="text-xs text-stone-500">
              {isBn ? 'এই বায়োডাটাটি সরাসরি বিয়েপরিচয়.কম এ তৈরি করা হয়েছে।' : 'Created and shared via BiyePorichoy.com'}
            </p>
          </div>
        </div>

        {isUnlocked && (
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setIsExportModalOpen(true)}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl btn-shimmer text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow transition"
            >
              <Download className="w-3.5 h-3.5 text-amber-200" />
              <span>{isBn ? 'PDF / ছবি ডাউনলোড' : 'Download PDF'}</span>
            </button>
          </div>
        )}
      </div>

      {/* Password Protection Gate */}
      {!isUnlocked ? (
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-xl border border-stone-200 text-center space-y-6 my-12">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 text-brand-900 mx-auto flex items-center justify-center shadow-inner border border-amber-200">
            <Lock className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-stone-900 font-bangla leading-snug">
              {isBn ? 'বায়োডাটাটি পাসওয়ার্ড সুরক্ষিত' : 'Password Protected Biodata'}
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              {isBn
                ? 'প্রার্থীর গোপনীয়তা রক্ষার্থে এই বায়োডাটাটি দেখতে পাসওয়ার্ড প্রয়োজন। প্রার্থী বা অভিভাবকের নিকট থেকে পাসওয়ার্ড সংগ্রহ করুন।'
                : 'This biodata is password protected for privacy. Please enter the passcode provided by the guardian.'}
            </p>
          </div>

          <form onSubmit={handleUnlock} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {isBn ? 'পাসকোড বা পিন নম্বর দিন' : 'Enter Passcode'}
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    setPasswordError(false);
                  }}
                  placeholder="••••"
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-center tracking-widest font-mono text-lg"
                  autoFocus
                />
              </div>
              {passwordError && (
                <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{isBn ? 'ভুল পাসওয়ার্ড! আবার চেষ্টা করুন।' : 'Incorrect passcode. Try again.'}</span>
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition"
            >
              <KeyRound className="w-4 h-4" />
              <span>{isBn ? 'বায়োডাটা আনলক করুন' : 'Unlock Biodata'}</span>
            </button>
          </form>
        </div>
      ) : (
        /* Rendered Biodata */
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-2 sm:p-6 border border-stone-200">
            <TemplateRenderer data={data} />
          </div>

          {/* Recipient CTA to create their own */}
          <div className="bg-gradient-to-r from-rose-900 to-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold">
                {isBn ? 'আপনিও কি বিয়ের বায়োডাটা তৈরি করতে চান?' : 'Want to create your own marriage biodata?'}
              </h4>
              <p className="text-xs text-stone-300">
                {isBn
                  ? 'বিয়েপরিচয়ে মাত্র ৫ মিনিটে সম্পূর্ণ ফ্রি এবং সুরক্ষিতভাবে তৈরি করুন।'
                  : 'Create a free, beautiful biodata in under 5 minutes on BiyePorichoy.com'}
              </p>
            </div>
            <Link
              href="/create"
              className="px-6 py-3 rounded-xl bg-white text-stone-900 hover:bg-rose-50 font-bold text-xs sm:text-sm whitespace-nowrap shadow transition"
            >
              <span>{isBn ? 'ফ্রি বায়োডাটা তৈরি করুন' : 'Create Free Biodata'}</span>
            </Link>
          </div>
        </div>
      )}

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        data={data}
      />
    </div>
  );
}
