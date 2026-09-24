import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { Moon, Flame, HeartHandshake, Sparkles } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step5Religion: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const rel = data.religion;

  const updateRel = (field: keyof BiodataData['religion'], value: any) => {
    onChange((prev) => ({
      ...prev,
      religion: {
        ...prev.religion,
        [field]: value,
      },
    }));
  };

  const isHindu = rel.religion?.toLowerCase().includes('সনাতন') || 
                  rel.religion?.toLowerCase().includes('হিন্দু') || 
                  rel.religion?.toLowerCase().includes('hindu');

  const isIslam = !isHindu && (!rel.religion || 
                  rel.religion?.toLowerCase().includes('ইসলাম') || 
                  rel.religion?.toLowerCase().includes('islam') || 
                  rel.religion?.toLowerCase().includes('সুন্নি'));

  const setPresetReligion = (type: 'islam' | 'hindu' | 'other') => {
    if (type === 'islam') {
      onChange((prev) => ({
        ...prev,
        religion: {
          ...prev.religion,
          religion: isBn ? 'ইসলাম (সুন্নি)' : 'Islam (Sunni)',
          sectOrMazhab: prev.religion.sectOrMazhab || (isBn ? 'হানাফী' : 'Hanafi'),
          praysFiveTimes: prev.religion.praysFiveTimes || 'regular',
          quranRecitation: prev.religion.quranRecitation || 'yes',
        },
      }));
    } else if (type === 'hindu') {
      onChange((prev) => ({
        ...prev,
        religion: {
          ...prev.religion,
          religion: isBn ? 'সনাতন (হিন্দু)' : 'Hinduism',
          sectOrMazhab: prev.religion.sectOrMazhab || '',
          dietHabit: prev.religion.dietHabit || 'non_vegetarian',
          gotra: prev.religion.gotra || '',
          caste: prev.religion.caste || '',
        },
      }));
    } else {
      onChange((prev) => ({
        ...prev,
        religion: {
          ...prev.religion,
          religion: isBn ? 'খ্রিস্টান / বৌদ্ধ / অন্যান্য' : 'Christianity / Buddhism / Other',
        },
      }));
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-3">
        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          {isHindu ? (
            <Flame className="w-5 h-5 text-amber-700" />
          ) : (
            <Moon className="w-5 h-5 text-rose-600" />
          )}
          {t.sections.religion}
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          {isBn
            ? 'ধর্মীয় অনুশাসন, বিশ্বাস, প্রার্থনা এবং দৈনন্দিন জীবনাচরণের তথ্য দিন।'
            : 'Share your religious beliefs, spiritual practices, dietary habits and lifestyle.'}
        </p>
      </div>

      {/* Quick Religion Switcher Pills */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-2">
          {isBn ? 'দ্রুত ধর্ম নির্বাচন করুন:' : 'Select Religion Type:'}
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setPresetReligion('islam')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
              isIslam
                ? 'bg-emerald-900 text-emerald-100 border-emerald-800 shadow-xs'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
            }`}
          >
            <Moon className="w-3.5 h-3.5 text-emerald-400" />
            <span>{isBn ? 'ইসলাম (Muslim)' : 'Islam'}</span>
          </button>
          <button
            type="button"
            onClick={() => setPresetReligion('hindu')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
              isHindu
                ? 'bg-rose-900 text-amber-200 border-rose-800 shadow-xs ring-2 ring-rose-900/20'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{isBn ? 'সনাতন (Hindu)' : 'Hinduism'}</span>
          </button>
          <button
            type="button"
            onClick={() => setPresetReligion('other')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 border ${
              !isIslam && !isHindu
                ? 'bg-brand-900 text-amber-200 border-brand-800 shadow-xs'
                : 'bg-stone-50 text-stone-700 hover:bg-stone-100 border-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{isBn ? 'অন্যান্য (Other)' : 'Other'}</span>
          </button>
        </div>
      </div>

      {/* Religion & Mazhab / Sampradaya */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.religion} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={rel.religion}
            onChange={(e) => updateRel('religion', e.target.value)}
            placeholder={isBn ? 'যেমন: ইসলাম (সুন্নি) / সনাতন হিন্দু' : 'e.g. Islam / Hinduism'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {isHindu ? (isBn ? 'সম্প্রদায় / বিশ্বাস ধারা' : 'Sampradaya / Tradition') : t.fields.sectOrMazhab}
          </label>
          <input
            type="text"
            value={rel.sectOrMazhab || ''}
            onChange={(e) => updateRel('sectOrMazhab', e.target.value)}
            placeholder={isHindu ? (isBn ? 'যেমন: বৈষ্ণব / শাক্ত / শৈব' : 'e.g. Vaishnava / Shaiva') : (isBn ? 'যেমন: হানাফী / আহলে হাদিস' : 'e.g. Hanafi')}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* ===================== HINDU SPECIFIC FIELDS ===================== */}
      {isHindu && (
        <div className="space-y-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-300/70">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-950 uppercase tracking-wide border-b border-amber-200/80 pb-1.5">
            <Flame className="w-4 h-4 text-amber-700" />
            <span>{isBn ? 'সনাতন বৈবাহিক তথ্য (Gotra & Caste)' : 'Sanatan Matrimonial Specifics'}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {isBn ? 'গোত্র (Gotra)' : 'Gotra'} <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                value={rel.gotra || ''}
                onChange={(e) => updateRel('gotra', e.target.value)}
                placeholder={isBn ? 'যেমন: শাণ্ডিল্য / কাশ্যপ / ভরদ্বাজ / আলম্বায়ন' : 'e.g. Sandilya / Kashyapa / Bharadwaja'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {isBn ? 'বর্ণ / শাখা / বংশ (Caste / Branch)' : 'Caste / Branch'}
              </label>
              <input
                type="text"
                value={rel.caste || ''}
                onChange={(e) => updateRel('caste', e.target.value)}
                placeholder={isBn ? 'যেমন: কায়স্থ / ব্রাহ্মণ / বৈদ্য / সাহা / নমঃশূদ্র' : 'e.g. Kayastha / Brahmin / Baidya'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {isBn ? 'আহারের ধরন (Diet Habit)' : 'Dietary Habit'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => updateRel('dietHabit', 'non_vegetarian')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition border ${
                    rel.dietHabit === 'non_vegetarian' || !rel.dietHabit
                      ? 'bg-amber-100 border-amber-600 text-amber-950 font-bold'
                      : 'bg-white border-stone-200 text-stone-600'
                  }`}
                >
                  {isBn ? 'আমিষ (Non-veg)' : 'Non-veg'}
                </button>
                <button
                  type="button"
                  onClick={() => updateRel('dietHabit', 'vegetarian')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition border ${
                    rel.dietHabit === 'vegetarian' || rel.dietHabit === 'strictly_veg'
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 font-bold'
                      : 'bg-white border-stone-200 text-stone-600'
                  }`}
                >
                  {isBn ? 'নিরামিষ (Vegetarian)' : 'Vegetarian'}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {isBn ? 'রাশি / নক্ষত্র (ঐচ্ছিক)' : 'Rashi / Nakshatra (Optional)'}
              </label>
              <input
                type="text"
                value={rel.rashiNakshatra || ''}
                onChange={(e) => updateRel('rashiNakshatra', e.target.value)}
                placeholder={isBn ? 'যেমন: মেষ রাশি / অশ্বিনী নক্ষত্র (জানা থাকলে)' : 'e.g. Aries / Rohini (if known)'}
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              {isBn ? 'পূজা-অর্চনা ও ধর্মীয় আচার' : 'Puja & Religious Observance'}
            </label>
            <input
              type="text"
              value={rel.pujaLifestyle || ''}
              onChange={(e) => updateRel('pujaLifestyle', e.target.value)}
              placeholder={isBn ? 'যেমন: নিত্য দেবপূজা পালন করি, ধর্মপরায়ণ ও সাত্ত্বিক পারিবারিক মূল্যবোধে বিশ্বাসী' : 'e.g. Regular home puja, devotional lifestyle'}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
            />
          </div>
        </div>
      )}

      {/* ===================== ISLAMIC SPECIFIC FIELDS ===================== */}
      {!isHindu && (
        <>
          {/* 5 Daily Prayers (Salah) */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              {t.fields.praysFiveTimes}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'regular', label: t.fields.regular },
                { id: 'mostly', label: t.fields.mostly },
                { id: 'sometimes', label: t.fields.sometimes },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => updateRel('praysFiveTimes', item.id)}
                  className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all border ${
                    rel.praysFiveTimes === item.id
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-sm'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quran Recitation */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              {t.fields.quranRecitation}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'yes', label: t.fields.yes },
                { id: 'learning', label: t.fields.learning },
                { id: 'no', label: t.fields.no },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => updateRel('quranRecitation', item.id)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                    rel.quranRecitation === item.id
                      ? 'bg-rose-50 border-rose-600 text-rose-800'
                      : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Beard / Hijab & Dress Code */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              {t.fields.beardOrHijab}
            </label>
            <input
              type="text"
              value={rel.beardOrHijab || ''}
              onChange={(e) => updateRel('beardOrHijab', e.target.value)}
              placeholder={isBn ? 'যেমন: সুন্নতি দাড়ি রয়েছে / নিয়মিত হিজাব ও শালীন বোরকা পরিধান করি' : 'e.g. Sunnah beard / Maintain regular Hijab'}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
            />
          </div>

          {/* Halal Earning Commitment */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1">
              {t.fields.halalEarningCommitment}
            </label>
            <input
              type="text"
              value={rel.halalEarningCommitment || ''}
              onChange={(e) => updateRel('halalEarningCommitment', e.target.value)}
              placeholder={isBn ? 'যেমন: শতভাগ হালাল উপার্জনে বিশ্বাসী ও প্রতিশ্রুতিবদ্ধ' : 'e.g. Committed to 100% halal earnings'}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
            />
          </div>
        </>
      )}

      {/* Hobbies & Lifestyle (Shared) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.hobbiesAndInterests}
          </label>
          <input
            type="text"
            value={rel.hobbiesAndInterests || ''}
            onChange={(e) => updateRel('hobbiesAndInterests', e.target.value)}
            placeholder={isBn ? 'বই পড়া, ভ্রমণ, রান্না, ইত্যাদি' : 'Reading, traveling, sports'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.habitsAndLifestyle}
          </label>
          <input
            type="text"
            value={rel.habitsAndLifestyle || ''}
            onChange={(e) => updateRel('habitsAndLifestyle', e.target.value)}
            placeholder={isBn ? 'যেমন: ধূমপানমুক্ত, শান্ত ও পরিবারপ্রেমী' : 'e.g. Non-smoker, calm personality'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>
    </div>
  );
};
