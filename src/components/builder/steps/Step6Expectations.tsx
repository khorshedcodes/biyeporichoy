import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { Heart } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step6Expectations: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const exp = data.expectations;

  const updateExp = (field: keyof BiodataData['expectations'], value: any) => {
    onChange((prev) => ({
      ...prev,
      expectations: {
        ...prev.expectations,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-3">
        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          <Heart className="w-5 h-5 text-rose-600" />
          {t.sections.expectations}
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          {isBn
            ? 'কাঙ্ক্ষিত জীবনসঙ্গীর বয়স, শিক্ষা, স্বভাব ও ধর্মীয় প্রত্যাশার বিবরণ দিন।'
            : 'Specify your expectations regarding your prospective partner’s age, education, and qualities.'}
        </p>
      </div>

      {/* Age Range */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {isBn ? 'প্রত্যাশিত সর্বনিম্ন বয়স' : 'Minimum Expected Age'}
          </label>
          <input
            type="text"
            value={exp.expectedAgeMin || ''}
            onChange={(e) => updateExp('expectedAgeMin', e.target.value)}
            placeholder={isBn ? 'যেমন: ২২' : 'e.g. 22'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {isBn ? 'প্রত্যাশিত সর্বোচ্চ বয়স' : 'Maximum Expected Age'}
          </label>
          <input
            type="text"
            value={exp.expectedAgeMax || ''}
            onChange={(e) => updateExp('expectedAgeMax', e.target.value)}
            placeholder={isBn ? 'যেমন: ২৮' : 'e.g. 28'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Expected Education & Preferred Districts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.expectedEducation}
          </label>
          <input
            type="text"
            value={exp.expectedEducation || ''}
            onChange={(e) => updateExp('expectedEducation', e.target.value)}
            placeholder={isBn ? 'যেমন: কমপক্ষে স্নাতক / ইঞ্জিনিয়ার / ডাক্তার / কামিল' : 'e.g. Minimum Graduate / Engineer / Doctor'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.expectedDistrict}
          </label>
          <input
            type="text"
            value={exp.expectedDistrict || ''}
            onChange={(e) => updateExp('expectedDistrict', e.target.value)}
            placeholder={isBn ? 'যেমন: ঢাকা, কুমিল্লা, সিলেট বা যেকোনো জেলা' : 'e.g. Dhaka, Chittagong, or Any'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Religious Expectations */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.religiousExpectations}
        </label>
        <textarea
          rows={2}
          value={exp.religiousExpectations || ''}
          onChange={(e) => updateExp('religiousExpectations', e.target.value)}
          placeholder={isBn ? 'যেমন: নিয়মিত ৫ ওয়াক্ত নামাজী, পর্দাপুর্ণ ও দ্বীনদার পরিবারের কন্যা/পাত্র' : 'e.g. Regular in 5 daily prayers, pious, modest and Islamic values'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* General Expectations */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.generalExpectations}
        </label>
        <textarea
          rows={3}
          value={exp.generalExpectations || ''}
          onChange={(e) => updateExp('generalExpectations', e.target.value)}
          placeholder={isBn ? 'যেমন: বিনয়ী, পরিবার সচেতন, পারস্পরিক শ্রদ্ধাশীল ও যৌতুকহীন বিবাহে বিশ্বাসী' : 'e.g. Family-oriented, respectful, understanding and non-demanding'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>
    </div>
  );
};
