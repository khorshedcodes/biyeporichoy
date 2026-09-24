import React from 'react';
import { BiodataData, TemplateId } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { Layout, Shield, Lock, EyeOff, Palette, Check } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step8TemplatePrivacy: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const priv = data.privacy;

  const setTemplate = (id: TemplateId) => {
    onChange((prev) => ({
      ...prev,
      template: id,
    }));
  };

  const updatePrivacy = (field: keyof BiodataData['privacy'], val: any) => {
    onChange((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [field]: val,
      },
    }));
  };

  const templatesList: { id: TemplateId; name: string; tag: string; badge: string; color: string }[] = [
    {
      id: 'classic',
      name: t.templates.classic,
      tag: isBn ? 'ঐতিহ্যবাহী মেরুন ও গোল্ডেন বর্ডার' : 'Traditional Cultural Heritage',
      badge: 'Popular',
      color: 'from-[#4c0519] to-amber-800',
    },
    {
      id: 'royal',
      name: t.templates.royal,
      tag: isBn ? 'রাজকীয় গোল্ডেন ক্রেস্ট ও লাক্সারি মার্বেল' : 'Luxury Royal Crest & Gold Borders',
      badge: 'Royal VIP',
      color: 'from-amber-600 to-yellow-600',
    },
    {
      id: 'modern',
      name: t.templates.modern,
      tag: isBn ? 'পরিচ্ছন্ন কার্ড ও আধুনিক টাইপোগ্রাফি' : 'Clean Modern Card Aesthetics',
      badge: 'Trending',
      color: 'from-slate-800 to-indigo-950',
    },
    {
      id: 'professional',
      name: t.templates.professional,
      tag: isBn ? '২-কলাম এক্সিকিউটিভ ও সিভি ফরম্যাট' : 'Executive Two-Column Format',
      badge: 'Executive',
      color: 'from-slate-900 to-slate-700',
    },
    {
      id: 'elegant',
      name: t.templates.elegant,
      tag: isBn ? 'মার্জিত প্যাস্টেল ও রোজ-গোল্ড নান্দনিকতা' : 'Soft Pastel & Rose Elegance (EN/BN)',
      badge: 'Recommended',
      color: 'from-rose-600 to-amber-700',
    },
  ];

  return (
    <div className="space-y-8">
      {/* 1. Template Selection */}
      <div>
        <div className="border-b border-stone-200 pb-3 mb-4">
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Layout className="w-5 h-5 text-rose-600" />
            {isBn ? 'টেমপ্লেট নির্বাচন করুন' : 'Select Template Design'}
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            {isBn
              ? 'আপনার বায়োডাটার জন্য যেকোনো সময় যেকোনো টেমপ্লেট পরিবর্তন করতে পারবেন।'
              : 'Choose a design template for your biodata. Your data works seamlessly across all designs.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {templatesList.map((tpl) => {
            const isSelected = data.template === tpl.id;
            return (
              <div
                key={tpl.id}
                onClick={() => setTemplate(tpl.id)}
                className={`relative rounded-xl p-4 border-2 cursor-pointer transition-all ${
                  isSelected
                    ? 'border-rose-600 bg-rose-50/40 ring-2 ring-rose-600/20 shadow-md'
                    : 'border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-stone-100 text-stone-600">
                      {tpl.badge}
                    </span>
                    <h3 className="font-bold text-stone-900 text-base">{tpl.name}</h3>
                    <p className="text-xs text-stone-500">{tpl.tag}</p>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      isSelected ? 'bg-rose-600 text-white' : 'border border-stone-300'
                    }`}
                  >
                    {isSelected && <Check className="w-4 h-4" />}
                  </div>
                </div>

                <div className={`h-2 rounded-full mt-4 bg-gradient-to-r ${tpl.color}`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Privacy & Control Settings */}
      <div>
        <div className="border-b border-stone-200 pb-3 mb-4">
          <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
            <Shield className="w-5 h-5 text-emerald-600" />
            {t.privacy.title}
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            {isBn
              ? 'নিরাপত্তা ও গোপনীয়তা বজায় রেখে বায়োডাটা শেয়ার করার বিকল্প সেটিংস।'
              : 'Configure granular privacy controls for shared links and exports.'}
          </p>
        </div>

        <div className="space-y-4">
          {/* Hide Photo Toggle */}
          <div className="flex items-start justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="space-y-0.5 pr-4">
              <label className="text-sm font-semibold text-stone-800 flex items-center gap-2 cursor-pointer">
                <EyeOff className="w-4 h-4 text-stone-500" />
                {t.privacy.hidePhoto}
              </label>
              <p className="text-xs text-stone-500">{t.privacy.hidePhotoDesc}</p>
            </div>
            <input
              type="checkbox"
              checked={priv.hidePhoto}
              onChange={(e) => updatePrivacy('hidePhoto', e.target.checked)}
              className="w-5 h-5 accent-rose-600 rounded mt-0.5 cursor-pointer"
            />
          </div>

          {/* Hide Personal Contact Toggle */}
          <div className="flex items-start justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="space-y-0.5 pr-4">
              <label className="text-sm font-semibold text-stone-800 flex items-center gap-2 cursor-pointer">
                <Shield className="w-4 h-4 text-stone-500" />
                {t.privacy.hideContact}
              </label>
              <p className="text-xs text-stone-500">{t.privacy.hideContactDesc}</p>
            </div>
            <input
              type="checkbox"
              checked={priv.hideContact}
              onChange={(e) => updatePrivacy('hideContact', e.target.checked)}
              className="w-5 h-5 accent-rose-600 rounded mt-0.5 cursor-pointer"
            />
          </div>

          {/* Hide Guardian Contact */}
          <div className="flex items-start justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="space-y-0.5 pr-4">
              <label className="text-sm font-semibold text-stone-800 cursor-pointer">
                {t.privacy.hideGuardianContact}
              </label>
              <p className="text-xs text-stone-500">
                {isBn ? 'অভিভাবকের ফোন নম্বরও লিঙ্ক ভিউয়ারদের থেকে লুকানো থাকবে।' : 'Hide guardian phone number as well on the shared web link.'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={priv.hideGuardianContact}
              onChange={(e) => updatePrivacy('hideGuardianContact', e.target.checked)}
              className="w-5 h-5 accent-rose-600 rounded mt-0.5 cursor-pointer"
            />
          </div>

          {/* Password Protection */}
          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
            <div className="flex items-start justify-between">
              <div className="space-y-0.5 pr-4">
                <label className="text-sm font-semibold text-stone-800 flex items-center gap-2 cursor-pointer">
                  <Lock className="w-4 h-4 text-stone-500" />
                  {t.privacy.passwordProtect}
                </label>
                <p className="text-xs text-stone-500">{t.privacy.passwordDesc}</p>
              </div>
              <input
                type="checkbox"
                checked={priv.isPasswordProtected}
                onChange={(e) => updatePrivacy('isPasswordProtected', e.target.checked)}
                className="w-5 h-5 accent-rose-600 rounded mt-0.5 cursor-pointer"
              />
            </div>

            {priv.isPasswordProtected && (
              <div className="pt-2 border-t border-stone-200">
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t.privacy.enterPassword}
                </label>
                <input
                  type="text"
                  value={priv.password || ''}
                  onChange={(e) => updatePrivacy('password', e.target.value)}
                  placeholder="e.g. 1234"
                  maxLength={8}
                  className="w-full sm:w-64 px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                />
              </div>
            )}
          </div>

          {/* Watermark Toggle */}
          <div className="flex items-start justify-between p-3.5 rounded-xl bg-stone-50 border border-stone-200">
            <div className="space-y-0.5 pr-4">
              <label className="text-sm font-semibold text-stone-800 cursor-pointer">
                {t.privacy.watermark}
              </label>
              <p className="text-xs text-stone-500">
                {isBn ? 'বায়োডাটায় বিয়েপরিচয়ের সিকিউরিটি জলছাপ প্রদর্শন করবে।' : 'Adds a security watermark across the biodata.'}
              </p>
            </div>
            <input
              type="checkbox"
              checked={priv.showWatermark}
              onChange={(e) => updatePrivacy('showWatermark', e.target.checked)}
              className="w-5 h-5 accent-rose-600 rounded mt-0.5 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
