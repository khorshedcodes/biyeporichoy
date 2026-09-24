import React from 'react';
import { BiodataData, EducationItem } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step2Education: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const edu = data.education;

  const updateEdu = (field: keyof BiodataData['education'], value: any) => {
    onChange((prev) => ({
      ...prev,
      education: {
        ...prev.education,
        [field]: value,
      },
    }));
  };

  const updateItem = (index: number, field: keyof EducationItem, val: string) => {
    const list = [...edu.details];
    list[index] = { ...list[index], [field]: val };
    updateEdu('details', list);
  };

  const addItem = () => {
    const newItem: EducationItem = {
      id: `edu-${Date.now()}`,
      degree: '',
      institution: '',
      passingYear: '',
      result: '',
      groupOrMajor: '',
    };
    updateEdu('details', [...edu.details, newItem]);
  };

  const removeItem = (index: number) => {
    const list = edu.details.filter((_, idx) => idx !== index);
    updateEdu('details', list);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-3">
        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-rose-600" />
          {t.sections.education}
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          {isBn
            ? 'আপনার শিক্ষাগত যোগ্যতার বিবরণ দিন। সাধারণ ও দ্বীনি শিক্ষা উভয়ই উল্লেখ করতে পারেন।'
            : 'Add your educational qualifications. You can include both academic and religious studies.'}
        </p>
      </div>

      {/* Education Type */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
          {t.fields.educationType}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { id: 'general', label: t.fields.general },
            { id: 'madrasa', label: t.fields.madrasa },
            { id: 'both', label: t.fields.both },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => updateEdu('educationType', item.id)}
              className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all border ${
                edu.educationType === item.id
                  ? 'bg-rose-50 border-rose-600 text-rose-800'
                  : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Highest Degree */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.highestDegree} <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          value={edu.highestDegree}
          onChange={(e) => updateEdu('highestDegree', e.target.value)}
          placeholder={isBn ? 'যেমন: B.Sc in CSE / MBA / দাওরায়ে হাদিস / বিএসসি ইঞ্জিনিয়ারিং' : 'e.g. B.Sc in CSE / MBA / MBBS'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Education Items List */}
      <div className="space-y-4">
        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">
          {isBn ? 'ডিগ্রি ও শিক্ষা প্রতিষ্ঠানের তালিকা' : 'Degree & Institution Details'}
        </label>

        {edu.details.map((item, index) => (
          <div
            key={item.id || index}
            className="p-4 rounded-xl border border-stone-200 bg-stone-50/70 space-y-3 relative transition-all hover:border-stone-300"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-600 uppercase">
                {isBn ? `যোগ্যতা #${index + 1}` : `Entry #${index + 1}`}
              </span>
              {edu.details.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-stone-400 hover:text-rose-600 text-xs flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>{isBn ? 'মুছে ফেলুন' : 'Remove'}</span>
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-stone-600 mb-1">{t.fields.degree}</label>
                <input
                  type="text"
                  value={item.degree}
                  onChange={(e) => updateItem(index, 'degree', e.target.value)}
                  placeholder={isBn ? 'যেমন: বি.এস.সি / এইচএসসি / এসএসসি' : 'e.g. B.Sc / HSC / SSC'}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs text-stone-600 mb-1">{t.fields.institution}</label>
                <input
                  type="text"
                  value={item.institution}
                  onChange={(e) => updateItem(index, 'institution', e.target.value)}
                  placeholder={isBn ? 'যেমন: ঢাকা বিশ্ববিদ্যালয় / বুয়েট' : 'e.g. Dhaka University / BUET'}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs text-stone-600 mb-1">{t.fields.passingYear}</label>
                <input
                  type="text"
                  value={item.passingYear}
                  onChange={(e) => updateItem(index, 'passingYear', e.target.value)}
                  placeholder={isBn ? 'যেমন: ২০২০' : 'e.g. 2020'}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs text-stone-600 mb-1">{t.fields.result}</label>
                <input
                  type="text"
                  value={item.result || ''}
                  onChange={(e) => updateItem(index, 'result', e.target.value)}
                  placeholder={isBn ? 'যেমন: CGPA ৩.৭৫ / GPA ৫.০০' : 'e.g. CGPA 3.75 / GPA 5.00'}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                />
              </div>
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={addItem}
          className="w-full py-2.5 px-4 rounded-xl border border-dashed border-rose-300 text-rose-700 bg-rose-50/50 hover:bg-rose-50 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>{t.fields.addEducation}</span>
        </button>
      </div>

      {/* Islamic Education */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.islamicEducation}
        </label>
        <textarea
          rows={2}
          value={edu.islamicEducation || ''}
          onChange={(e) => updateEdu('islamicEducation', e.target.value)}
          placeholder={isBn ? 'যেমন: হিফজ সম্পন্ন / তাজভীদ সহ কুরআন তিলাওয়াত / দ্বীনি কোর্স' : 'e.g. Hifz / Islamic courses / Quran recitation'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Other Qualifications */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.otherQualifications}
        </label>
        <input
          type="text"
          value={edu.otherQualifications || ''}
          onChange={(e) => updateEdu('otherQualifications', e.target.value)}
          placeholder={isBn ? 'অন্যান্য কোর্স বা বিশেষ দক্ষতা' : 'Other certifications or skills'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>
    </div>
  );
};
