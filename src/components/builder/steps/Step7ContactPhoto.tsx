import React, { useRef } from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { Phone, Upload, Image as ImageIcon, X, ShieldAlert } from 'lucide-react';

interface StepProps {
  data: BiodataData;
  onChange: (updater: (prev: BiodataData) => BiodataData) => void;
}

export const Step7ContactPhoto: React.FC<StepProps> = ({ data, onChange }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const p = data.personal;
  const cont = data.contact;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const updateContact = (field: keyof BiodataData['contact'], value: any) => {
    onChange((prev) => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value,
      },
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check size limit (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert(isBn ? 'ছবির সাইজ ৫MB এর বেশি হতে পারবে না।' : 'Photo size cannot exceed 5MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      onChange((prev) => ({
        ...prev,
        personal: {
          ...prev.personal,
          photoUrl: result,
        },
      }));
    };
    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    onChange((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        photoUrl: '',
      },
    }));
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-stone-200 pb-3">
        <h2 className="text-xl font-bold text-stone-900 flex items-center gap-2">
          <Phone className="w-5 h-5 text-rose-600" />
          {t.sections.contact}
        </h2>
        <p className="text-xs text-stone-500 mt-1">
          {isBn
            ? 'অভিভাবকের নম্বর প্রদান বাধ্যতামূলক। গোপনীয়তা ফিচারের মাধ্যমে প্রয়োজনে নম্বর ও ছবি লুকিয়ে রাখতে পারবেন।'
            : 'Guardian phone number is required. You can choose to mask contact info and photos on shared links.'}
        </p>
      </div>

      {/* Photo Upload Section */}
      <div className="p-4 rounded-xl border border-dashed border-stone-300 bg-stone-50 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-28 h-36 rounded-lg overflow-hidden border-2 border-stone-200 bg-white flex-shrink-0 flex items-center justify-center relative shadow-sm">
          {p.photoUrl ? (
            <>
              <img src={p.photoUrl} alt="Candidate" className="w-full h-full object-cover" />
              <button
                type="button"
                onClick={removePhoto}
                className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 shadow hover:bg-red-700 transition"
                title="Remove photo"
              >
                <X className="w-3 h-3" />
              </button>
            </>
          ) : (
            <div className="text-center p-2 text-stone-400">
              <ImageIcon className="w-8 h-8 mx-auto mb-1 opacity-50" />
              <span className="text-[10px] block">{isBn ? 'ছবি যুক্ত নেই' : 'No Photo'}</span>
            </div>
          )}
        </div>

        <div className="space-y-2 flex-1 text-center sm:text-left">
          <h4 className="text-sm font-bold text-stone-800">{t.fields.photoUpload}</h4>
          <p className="text-xs text-stone-500">{t.fields.photoNote}</p>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start pt-1">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-sm"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>{isBn ? 'ছবি আপলোড করুন' : 'Upload Photo'}</span>
            </button>
            {p.photoUrl && (
              <button
                type="button"
                onClick={removePhoto}
                className="px-3 py-1.5 rounded-lg border border-stone-300 text-stone-600 text-xs font-medium hover:bg-stone-100 transition"
              >
                {isBn ? 'ছবি বাতিল করুন' : 'Clear Photo'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Guardian Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.guardianName} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={cont.guardianName}
            onChange={(e) => updateContact('guardianName', e.target.value)}
            placeholder={isBn ? 'যেমন: মো: আব্দুল কাদের (পিতা)' : "e.g. Abdul Kader (Father)"}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.guardianRelation} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={cont.guardianRelation}
            onChange={(e) => updateContact('guardianRelation', e.target.value)}
            placeholder={isBn ? 'যেমন: পিতা / মাতা / বড় ভাই / মামা' : 'e.g. Father / Mother / Brother / Uncle'}
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Guardian & Alternative Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.guardianPhone} <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            value={cont.guardianPhone}
            onChange={(e) => updateContact('guardianPhone', e.target.value)}
            placeholder="01XXXXXXXXX"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.alternativePhone}
          </label>
          <input
            type="text"
            value={cont.alternativePhone || ''}
            onChange={(e) => updateContact('alternativePhone', e.target.value)}
            placeholder="01XXXXXXXXX"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Candidate Phone & Email (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.candidatePhone}
          </label>
          <input
            type="text"
            value={cont.candidatePhone || ''}
            onChange={(e) => updateContact('candidatePhone', e.target.value)}
            placeholder="01XXXXXXXXX"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-stone-700 mb-1">
            {t.fields.candidateEmail}
          </label>
          <input
            type="email"
            value={cont.candidateEmail || ''}
            onChange={(e) => updateContact('candidateEmail', e.target.value)}
            placeholder="example@email.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
          />
        </div>
      </div>

      {/* Contact Time Preference */}
      <div>
        <label className="block text-xs font-semibold text-stone-700 mb-1">
          {t.fields.contactTimePreference}
        </label>
        <input
          type="text"
          value={cont.contactTimePreference || ''}
          onChange={(e) => updateContact('contactTimePreference', e.target.value)}
          placeholder={isBn ? 'যেমন: প্রতিদিন মাগরিবের পর থেকে রাত ১০টা' : 'e.g. Everyday 6:00 PM - 10:00 PM'}
          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
        />
      </div>
    </div>
  );
};
