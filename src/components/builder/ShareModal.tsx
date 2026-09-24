import React, { useState } from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { 
  X, Copy, Check, Share2, Send, Lock, ShieldCheck, 
  ExternalLink, EyeOff 
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BiodataData;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;

  // Generate shareable link using the biodata ID
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://biyeporichoy.com';
  const shareId = data.id || 'demo-sample';
  const shareUrl = `${origin}/b/${shareId}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleWhatsAppShare = () => {
    const text = isBn
      ? `আসসালামু আলাইকুম, বিয়েপরিচয় (BiyePorichoy.com) এ তৈরি করা এই বিয়ের বায়োডাটাটি দেখুন:\n${shareUrl}`
      : `Assalamu Alaikum, please find the marriage biodata created on BiyePorichoy.com:\n${shareUrl}`;
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            <h3 className="font-bold text-lg font-serif">{t.buttons.generateLink}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-stone-600">
            {t.exportModal.linkDesc}
          </p>

          {/* Share URL Box */}
          <div className="flex items-center gap-2 p-2 bg-stone-100 rounded-xl border border-stone-200">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 bg-transparent px-2 text-xs sm:text-sm text-stone-800 font-mono focus:outline-none select-all"
            />
            <button
              type="button"
              onClick={handleCopyLink}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{t.buttons.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.buttons.copyLink}</span>
                </>
              )}
            </button>
          </div>

          {/* 1-Click WhatsApp Share */}
          <div>
            <button
              type="button"
              onClick={handleWhatsAppShare}
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md transition"
            >
              <Send className="w-4 h-4" />
              <span>{t.buttons.shareWhatsApp}</span>
            </button>
          </div>

          {/* Privacy Status Summary Badge */}
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
            <div className="font-semibold text-stone-700 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{isBn ? 'বর্তমান গোপনীয়তা সক্রিয়করণ:' : 'Active Privacy Protections:'}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-stone-600">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${data.privacy.hidePhoto ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                <span>{data.privacy.hidePhoto ? (isBn ? 'ছবি লুকানো' : 'Photo Hidden') : (isBn ? 'ছবি দৃশ্যমান' : 'Photo Visible')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${data.privacy.hideContact ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                <span>{data.privacy.hideContact ? (isBn ? 'ব্যক্তিগত ফোন লুকানো' : 'Direct Phone Hidden') : (isBn ? 'ফোন দৃশ্যমান' : 'Phone Visible')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${data.privacy.isPasswordProtected ? 'bg-indigo-500' : 'bg-stone-300'}`} />
                <span>{data.privacy.isPasswordProtected ? (isBn ? 'পাসওয়ার্ড লক সক্রিয়' : 'Password Protected') : (isBn ? 'উন্মুক্ত লিঙ্ক' : 'Direct Link')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{isBn ? 'যেকোনো সময় রিভোকযোগ্য' : 'Revocable Anytime'}</span>
              </div>
            </div>
          </div>

          {/* Preview Shared Link in New Tab */}
          <div className="pt-2 text-center">
            <a
              href={`/b/${shareId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold inline-flex items-center gap-1 transition"
            >
              <span>{isBn ? 'ভিউয়ার হিসেবে প্রিভিউ দেখুন' : 'Open Public Link Preview'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
