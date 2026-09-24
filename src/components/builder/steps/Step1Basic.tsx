import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { User, UserCheck, Sparkles } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step1Basic: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const p = data.personal;

  const updatePersonal = (field: keyof BiodataData['personal'], value: any) => {
    onChange((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value,
      },
    }));
  };

  const districts = [
    'ঢাকা', 'চট্টগ্রাম', 'কুমিল্লা', 'সিলেট', 'রাজশাহী', 'খুলনা', 'বরিশাল', 'ময়মনসিংহ',
    'রংপুর', 'গাজীপুর', 'নারায়ণগঞ্জ', 'ব্রাহ্মণবাড়িয়া', 'নোয়াখালী', 'চাঁদপুর', 'ফেনী',
    'লক্ষ্মীপুর', 'কক্সবাজার', 'বগুড়া', 'পাবনা', 'সিরাজগঞ্জ', 'টাঙ্গাইল', 'যশোর', 'কুষ্টিয়া',
    'দিনাজপুর', 'টাঙ্গাইল', 'কিশোরগঞ্জ', 'ফরিদপুর', 'অন্যান্য (Others)'
  ];

  return (
    <div className="space-y-6 font-bangla">
      <div className="border-b border-amber-200/80 pb-3">
        <h2 className="text-xl font-bold text-stone-950 flex items-center gap-2">
          <User className="w-5 h-5 text-brand-800" />
          {t.sections.basic}
        </h2>
        <p className="text-xs text-stone-600 mt-1">
          {isBn
            ? 'প্রার্থীর প্রাথমিক ও ব্যক্তিগত তথ্য নির্ভুলভাবে পূরণ করুন।'
            : 'Fill in the primary personal information of the candidate.'}
        </p>
      </div>

      {/* Biodata Type Switcher (Groom / Bride) */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
          {t.fields.biodataType} <span className="text-brand-700">*</span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => updatePersonal('biodataType', 'male')}
            className={`py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border-2 ${
              p.biodataType === 'male'
                ? 'bg-amber-50 border-brand-900 text-brand-950 shadow-xs'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-amber-50/50'
            }`}
          >
            <User className="w-4 h-4 text-brand-800" />
            <span>{t.fields.male}</span>
          </button>
          <button
            type="button"
            onClick={() => updatePersonal('biodataType', 'female')}
            className={`py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border-2 ${
              p.biodataType === 'female'
                ? 'bg-amber-50 border-brand-900 text-brand-950 shadow-xs'
                : 'bg-white border-stone-200 text-stone-700 hover:bg-amber-50/50'
            }`}
          >
            <UserCheck className="w-4 h-4 text-brand-800" />
            <span>{t.fields.female}</span>
          </button>
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.fullName} <span className="text-rose-500">*</span>
        </label>
        <input
          type="text"
          value={p.fullName}
          onChange={(e) => updatePersonal('fullName', e.target.value)}
          placeholder={isBn ? 'যেমন: মো: তানভীর আহমেদ / ফাতেমা তুজ জোহরা' : 'e.g. Tanvir Ahmed / Fatema Zohra'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Age & Height */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.age} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={p.age}
            onChange={(e) => updatePersonal('age', e.target.value)}
            placeholder={isBn ? 'যেমন: ২৭ বছর' : 'e.g. 27 years'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.height} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={p.height}
            onChange={(e) => updatePersonal('height', e.target.value)}
            placeholder={isBn ? "যেমন: ৫' ৯\" (৫ ফুট ৯ ইঞ্চি)" : "e.g. 5' 9\""}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Complexion & Blood Group */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.complexion}
          </label>
          <input
            type="text"
            value={p.complexion}
            onChange={(e) => updatePersonal('complexion', e.target.value)}
            placeholder={isBn ? 'যেমন: উজ্জ্বল ফর্সা / উজ্জ্বল শ্যামলা / ফর্সা' : 'e.g. Fair / Bright Medium / Wheatish'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.bloodGroup}
          </label>
          <select
            value={p.bloodGroup || ''}
            onChange={(e) => updatePersonal('bloodGroup', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          >
            <option value="">{isBn ? '-- রক্তের গ্রুপ নির্বাচন করুন --' : '-- Select Blood Group --'}</option>
            {['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'].map((bg) => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Weight & Marital Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.weight}
          </label>
          <input
            type="text"
            value={p.weight || ''}
            onChange={(e) => updatePersonal('weight', e.target.value)}
            placeholder={isBn ? 'যেমন: ৬৮ কেজি' : 'e.g. 68 kg'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.maritalStatus} <span className="text-rose-500">*</span>
          </label>
          <select
            value={p.maritalStatus}
            onChange={(e) => updatePersonal('maritalStatus', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          >
            <option value="unmarried">{t.fields.unmarried}</option>
            <option value="divorced">{t.fields.divorced}</option>
            <option value="widowed">{t.fields.widowed}</option>
            <option value="separated">{t.fields.separated}</option>
          </select>
        </div>
      </div>

      {/* Permanent & Present District */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.permanentDistrict} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={p.permanentDistrict}
            onChange={(e) => updatePersonal('permanentDistrict', e.target.value)}
            placeholder={isBn ? 'যেমন: কুমিল্লা / ঢাকা / সিলেট' : 'e.g. Comilla / Dhaka / Sylhet'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.presentDistrict}
          </label>
          <input
            type="text"
            value={p.presentDistrict}
            onChange={(e) => updatePersonal('presentDistrict', e.target.value)}
            placeholder={isBn ? 'যেমন: মিরপুর, ঢাকা' : 'e.g. Mirpur, Dhaka'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Permanent Address */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.permanentAddress}
        </label>
        <textarea
          rows={2}
          value={p.permanentAddress}
          onChange={(e) => updatePersonal('permanentAddress', e.target.value)}
          placeholder={isBn ? 'গ্রাম, ডাকঘর, থানা/উপজেলা ও জেলা' : 'Village, Post Office, Upazila & District'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Present Address */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.presentAddress}
        </label>
        <input
          type="text"
          value={p.presentAddress}
          onChange={(e) => updatePersonal('presentAddress', e.target.value)}
          placeholder={isBn ? 'বাড়ি, রোড, এলাকা, ঢাকা' : 'House, Road, Area, City'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Special Attributes */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.specialAttributes}
        </label>
        <input
          type="text"
          value={p.specialAttributes || ''}
          onChange={(e) => updatePersonal('specialAttributes', e.target.value)}
          placeholder={isBn ? 'যেমন: আলহামদুলিল্লাহ সম্পূর্ণ সুস্থ / চশমা পরিধান করি' : 'e.g. Completely healthy / Wear spectacles'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>
    </div>
  );
};
