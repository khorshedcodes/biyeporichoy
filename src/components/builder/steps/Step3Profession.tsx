import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { Briefcase } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step3Profession: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const c = data.career;

  const updateCareer = (field: keyof BiodataData['career'], value: any) => {
    onChange((prev) => ({
      ...prev,
      career: {
        ...prev.career,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-3">
        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-rose-600" />
          {t.sections.career}
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          {isBn
            ? 'আপনার বর্তমান পেশা, প্রতিষ্ঠান এবং কর্মজীবনের বিবরণ দিন।'
            : 'Provide details regarding your current occupation, organization, and career.'}
        </p>
      </div>

      {/* Occupation */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.occupation} <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          value={c.occupation}
          onChange={(e) => updateCareer('occupation', e.target.value)}
          placeholder={isBn ? 'যেমন: সফটওয়্যার ইঞ্জিনিয়ার / বিসিএস ক্যাডার / শিক্ষক / ব্যবসায়ী / গৃহিণী' : 'e.g. Software Engineer / Doctor / Business / Homemaker'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Designation & Organization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.designation}
          </label>
          <input
            type="text"
            value={c.designation}
            onChange={(e) => updateCareer('designation', e.target.value)}
            placeholder={isBn ? 'যেমন: সিনিয়র এক্সিকিউটিভ / অ্যাসিস্ট্যান্ট ম্যানেজার' : 'e.g. Senior Executive / Assistant Manager'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.organization}
          </label>
          <input
            type="text"
            value={c.organization}
            onChange={(e) => updateCareer('organization', e.target.value)}
            placeholder={isBn ? 'কোম্পানি বা প্রতিষ্ঠানের নাম' : 'Company or Organization Name'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Work Location & Monthly Income */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.workLocation}
          </label>
          <input
            type="text"
            value={c.workLocation}
            onChange={(e) => updateCareer('workLocation', e.target.value)}
            placeholder={isBn ? 'যেমন: গুলশান, ঢাকা / চট্টগ্রাম' : 'e.g. Gulshan, Dhaka / Chittagong'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.monthlyIncome}
          </label>
          <input
            type="text"
            value={c.monthlyIncome || ''}
            onChange={(e) => updateCareer('monthlyIncome', e.target.value)}
            placeholder={isBn ? 'যেমন: ৮০,০০০+ টাকা / গোপনীয়' : 'e.g. ৳80,000+ / Confidential'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Career Description */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.careerDescription}
        </label>
        <textarea
          rows={3}
          value={c.careerDescription || ''}
          onChange={(e) => updateCareer('careerDescription', e.target.value)}
          placeholder={isBn ? 'কর্মক্ষেত্রের অভিজ্ঞতা এবং ভবিষ্যৎ পরিকল্পনা সম্পর্কে সংক্ষেপে লিখুন' : 'Brief summary of your professional experience and future goals'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>
    </div>
  );
};
