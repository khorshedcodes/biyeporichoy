import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { Users } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step4Family: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const fam = data.family;

  const updateFam = (field: keyof BiodataData['family'], value: any) => {
    onChange((prev) => ({
      ...prev,
      family: {
        ...prev.family,
        [field]: value,
      },
    }));
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-3">
        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-rose-600" />
          {t.sections.family}
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          {isBn
            ? 'পারিবারিক ঐতিহ্য ও মা-বাবা এবং ভাই-বোনদের পরিচয় তুলে ধরুন।'
            : 'Share details about parents, siblings, and family background.'}
        </p>
      </div>

      {/* Father Name & Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.fatherName} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={fam.fatherName}
            onChange={(e) => updateFam('fatherName', e.target.value)}
            placeholder={isBn ? 'পিতার পুরো নাম' : "Father's Full Name"}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.fatherStatus}
          </label>
          <select
            value={fam.fatherStatus}
            onChange={(e) => updateFam('fatherStatus', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          >
            <option value="alive">{t.fields.alive}</option>
            <option value="deceased">{t.fields.deceased}</option>
          </select>
        </div>
      </div>

      {/* Father Occupation */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.fatherOccupation}
        </label>
        <input
          type="text"
          value={fam.fatherOccupation}
          onChange={(e) => updateFam('fatherOccupation', e.target.value)}
          placeholder={isBn ? 'যেমন: অবসরপ্রাপ্ত সরকারি কর্মকর্তা / ব্যবসায়ী / শিক্ষক' : 'e.g. Retired Govt. Officer / Business / Teacher'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Mother Name & Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.motherName} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={fam.motherName}
            onChange={(e) => updateFam('motherName', e.target.value)}
            placeholder={isBn ? 'মাতার পুরো নাম' : "Mother's Full Name"}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.motherStatus}
          </label>
          <select
            value={fam.motherStatus}
            onChange={(e) => updateFam('motherStatus', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          >
            <option value="alive">{t.fields.alive}</option>
            <option value="deceased">{t.fields.deceased}</option>
          </select>
        </div>
      </div>

      {/* Mother Occupation */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.motherOccupation}
        </label>
        <input
          type="text"
          value={fam.motherOccupation}
          onChange={(e) => updateFam('motherOccupation', e.target.value)}
          placeholder={isBn ? 'যেমন: গৃহিণী / শিক্ষিকা / ডাক্তার' : 'e.g. Homemaker / Teacher / Doctor'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>

      {/* Brothers & Sisters Count */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.totalBrothers}
          </label>
          <input
            type="text"
            value={fam.totalBrothers}
            onChange={(e) => updateFam('totalBrothers', e.target.value)}
            placeholder={isBn ? 'যেমন: ২ জন (প্রার্থী সহ)' : 'e.g. 2 brothers'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.totalSisters}
          </label>
          <input
            type="text"
            value={fam.totalSisters}
            onChange={(e) => updateFam('totalSisters', e.target.value)}
            placeholder={isBn ? 'যেমন: ১ জন' : 'e.g. 1 sister'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Siblings details */}
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.brothersDetails}
          </label>
          <textarea
            rows={2}
            value={fam.brothersDetails || ''}
            onChange={(e) => updateFam('brothersDetails', e.target.value)}
            placeholder={isBn ? 'ভাইদের বৈবাহিক অবস্থা, পেশা বা পড়াশোনা' : 'Brothers marital status, education & profession'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.sistersDetails}
          </label>
          <textarea
            rows={2}
            value={fam.sistersDetails || ''}
            onChange={(e) => updateFam('sistersDetails', e.target.value)}
            placeholder={isBn ? 'বোনদের বৈবাহিক অবস্থা, পেশা বা পড়াশোনা' : 'Sisters marital status, education & profession'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Financial Status & Family Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.financialStatus}
          </label>
          <select
            value={fam.financialStatus}
            onChange={(e) => updateFam('financialStatus', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          >
            <option value="upper_class">{t.fields.upperClass}</option>
            <option value="upper_middle">{t.fields.upperMiddle}</option>
            <option value="middle_class">{t.fields.middleClass}</option>
            <option value="lower_middle">{t.fields.lowerMiddle}</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.familyType}
          </label>
          <select
            value={fam.familyType}
            onChange={(e) => updateFam('familyType', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          >
            <option value="nuclear">{t.fields.nuclear}</option>
            <option value="joint">{t.fields.joint}</option>
          </select>
        </div>
      </div>

      {/* Family Description */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.familyBackgroundDescription}
        </label>
        <textarea
          rows={3}
          value={fam.familyBackgroundDescription || ''}
          onChange={(e) => updateFam('familyBackgroundDescription', e.target.value)}
          placeholder={isBn ? 'পারিবারিক ঐতিহ্য, নিজস্ব বাড়ি/ফ্ল্যাট বা অন্যান্য গুরুত্বপূর্ণ বিবরণ' : 'Family heritage, house/property ownership or other important details'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>
    </div>
  );
};
