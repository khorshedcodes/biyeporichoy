import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { 
  GraduationCap, Briefcase, Users, Phone, MapPin, 
  Sparkles, HeartHandshake, Compass
} from 'lucide-react';
import { DividerFlourish } from './MatrimonialOrnaments';

interface TemplateProps {
  data: BiodataData;
  isPrintMode?: boolean;
}

export const ElegantTemplate: React.FC<TemplateProps> = ({ data }) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;
  const p = data.personal;
  const edu = data.education;
  const c = data.career;
  const fam = data.family;
  const rel = data.religion;
  const exp = data.expectations;
  const cont = data.contact;
  const priv = data.privacy;

  const isGroom = p.biodataType === 'male';
  const lateFatherLabel = isBn ? '(প্রয়াত)' : '(Late)';
  const lateMotherLabel = isBn ? '(প্রয়াত)' : '(Late)';

  return (
    <div 
      className="w-full max-w-[800px] mx-auto bg-[#faf8f5] text-stone-800 shadow-2xl rounded-2xl p-6 sm:p-10 font-bangla border border-rose-200/80 relative overflow-hidden transition-all duration-300 print:shadow-none print:p-6 print:max-w-none print:border-none"
    >
      {/* Inner Decorative Hairline Border */}
      <div className="absolute inset-2 sm:inset-3 border border-rose-200/60 rounded-xl pointer-events-none -z-0" />

      {/* Header Section */}
      <div className="text-center pb-6 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold tracking-wider uppercase mb-2 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          {isGroom 
            ? (isBn ? 'মার্জিত পাত্রের জীবনবৃত্তান্ত' : 'Elegant Matrimonial Profile • Groom') 
            : (isBn ? 'মার্জিত পাত্রীর জীবনবৃত্তান্ত' : 'Elegant Matrimonial Profile • Bride')}
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold text-stone-900 font-serif tracking-tight mt-1">
          {p.fullName || (isGroom ? (isBn ? 'পাত্রের নাম' : 'Groom Name') : (isBn ? 'পাত্রীর নাম' : 'Bride Name'))}
        </h1>

        <p className="text-stone-600 text-xs sm:text-sm mt-1.5 font-medium">
          {c.designation || c.occupation || (isBn ? 'পেশা' : 'Profession')}
          {c.organization ? ` • ${c.organization}` : ''}
          {p.presentDistrict ? ` • ${p.presentDistrict}` : ''}
        </p>

        <div className="my-2">
          <DividerFlourish color="#e11d48" className="opacity-40" />
        </div>
      </div>

      {/* Profile Overview Card (Photo & Vital Stats) */}
      <div className="bg-white/90 border border-rose-100/90 rounded-2xl p-5 sm:p-6 shadow-xs relative z-10 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {!priv.hidePhoto && p.photoUrl && (
          <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-2xl overflow-hidden ring-4 ring-rose-200/50 shadow-md flex-shrink-0 bg-stone-100">
            <img 
              src={p.photoUrl} 
              alt={p.fullName || 'Candidate Photo'} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}

        <div className="flex-1 w-full space-y-4">
          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
            <div className="bg-[#faf8f5] p-2.5 rounded-xl border border-rose-100/80">
              <span className="text-rose-900/70 block font-semibold">{t.fields.age}</span>
              <span className="text-stone-800 font-bold text-sm">{p.age || '—'}</span>
            </div>
            <div className="bg-[#faf8f5] p-2.5 rounded-xl border border-rose-100/80">
              <span className="text-rose-900/70 block font-semibold">{t.fields.height}</span>
              <span className="text-stone-800 font-bold text-sm">{p.height || '—'}</span>
            </div>
            <div className="bg-[#faf8f5] p-2.5 rounded-xl border border-rose-100/80">
              <span className="text-rose-900/70 block font-semibold">{t.fields.complexion}</span>
              <span className="text-stone-800 font-medium">{p.complexion || '—'}</span>
            </div>
            <div className="bg-[#faf8f5] p-2.5 rounded-xl border border-rose-100/80">
              <span className="text-rose-900/70 block font-semibold">{t.fields.bloodGroup}</span>
              <span className="text-stone-800 font-bold">{p.bloodGroup || '—'}</span>
            </div>
            <div className="bg-[#faf8f5] p-2.5 rounded-xl border border-rose-100/80">
              <span className="text-rose-900/70 block font-semibold">{t.fields.maritalStatus}</span>
              <span className="text-stone-800 font-medium">
                {p.maritalStatus ? (t.fields as any)[p.maritalStatus] || p.maritalStatus : '—'}
              </span>
            </div>
            <div className="bg-[#faf8f5] p-2.5 rounded-xl border border-rose-100/80">
              <span className="text-rose-900/70 block font-semibold">{t.fields.nationality}</span>
              <span className="text-stone-800 font-medium">{p.nationality || (isBn ? 'বাংলাদেশী' : 'Bangladeshi')}</span>
            </div>
          </div>

          {/* Address Details */}
          <div className="text-xs space-y-1.5 pt-1 text-stone-600 border-t border-rose-100/80">
            <div className="flex items-start gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-600 mt-0.5 flex-shrink-0" />
              <span>
                <strong className="text-stone-800">{t.fields.permanentDistrict}:</strong> {p.permanentDistrict || '—'}
                {p.permanentAddress && ` (${p.permanentAddress})`}
              </span>
            </div>
            {!priv.hideCurrentAddress && (
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-stone-800">{t.fields.presentDistrict}:</strong> {p.presentDistrict || '—'}
                  {p.presentAddress && ` (${p.presentAddress})`}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="space-y-5 relative z-10">

        {/* 1. Education Section */}
        <section className="bg-white/90 border border-rose-100/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2.5 border-b border-rose-100 pb-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold font-serif text-stone-900">{t.sections.education}</h2>
          </div>

          <div className="space-y-3">
            {edu.highestDegree && (
              <div className="text-xs text-stone-700">
                <span className="font-semibold text-rose-900">{t.fields.highestDegree}:</span> {edu.highestDegree}
              </div>
            )}

            {edu.details && edu.details.length > 0 && (
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="bg-[#faf8f5] text-stone-700 border-b border-rose-100">
                      <th className="py-2 px-2.5 font-semibold">{t.fields.degree}</th>
                      <th className="py-2 px-2.5 font-semibold">{t.fields.institution}</th>
                      <th className="py-2 px-2.5 font-semibold">{t.fields.passingYear}</th>
                      <th className="py-2 px-2.5 font-semibold">{t.fields.result}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rose-50">
                    {edu.details.map((item, idx) => (
                      <tr key={item.id || idx} className="hover:bg-rose-50/30">
                        <td className="py-2 px-2.5 font-semibold text-stone-900">{item.degree}</td>
                        <td className="py-2 px-2.5 text-stone-600">{item.institution}</td>
                        <td className="py-2 px-2.5 text-stone-600">{item.passingYear}</td>
                        <td className="py-2 px-2.5 text-stone-600">{item.result || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {edu.otherQualifications && (
              <div className="text-xs text-stone-600 pt-1">
                <span className="font-semibold text-stone-800">{t.fields.otherQualifications}:</span> {edu.otherQualifications}
              </div>
            )}
          </div>
        </section>

        {/* 2. Career & Profession */}
        <section className="bg-white/90 border border-rose-100/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2.5 border-b border-rose-100 pb-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700">
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold font-serif text-stone-900">{t.sections.career}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-stone-500 block">{t.fields.occupation}</span>
              <span className="font-semibold text-stone-800">{c.occupation || '—'}</span>
            </div>
            <div>
              <span className="text-stone-500 block">{t.fields.designation}</span>
              <span className="font-semibold text-stone-800">{c.designation || '—'}</span>
            </div>
            <div>
              <span className="text-stone-500 block">{t.fields.organization}</span>
              <span className="font-semibold text-stone-800">{c.organization || '—'}</span>
            </div>
            {c.workLocation && (
              <div>
                <span className="text-stone-500 block">{t.fields.workLocation}</span>
                <span className="font-semibold text-stone-800">{c.workLocation}</span>
              </div>
            )}
            {c.monthlyIncome && (
              <div>
                <span className="text-stone-500 block">{t.fields.monthlyIncome}</span>
                <span className="font-semibold text-stone-800">{c.monthlyIncome}</span>
              </div>
            )}
          </div>
        </section>

        {/* 3. Family Background */}
        <section className="bg-white/90 border border-rose-100/90 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2.5 border-b border-rose-100 pb-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700">
              <Users className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold font-serif text-stone-900">{t.sections.family}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
            <div className="bg-[#faf8f5] p-3 rounded-xl border border-rose-100/70">
              <span className="text-rose-900/80 font-bold block mb-1">
                {t.fields.fatherName} {fam.fatherStatus === 'deceased' && <span className="text-rose-600 font-normal">{lateFatherLabel}</span>}
              </span>
              <div className="text-stone-800 font-semibold">{fam.fatherName || '—'}</div>
              <div className="text-stone-600 mt-0.5">{fam.fatherOccupation || '—'}</div>
            </div>

            <div className="bg-[#faf8f5] p-3 rounded-xl border border-rose-100/70">
              <span className="text-rose-900/80 font-bold block mb-1">
                {t.fields.motherName} {fam.motherStatus === 'deceased' && <span className="text-rose-600 font-normal">{lateMotherLabel}</span>}
              </span>
              <div className="text-stone-800 font-semibold">{fam.motherName || '—'}</div>
              <div className="text-stone-600 mt-0.5">{fam.motherOccupation || '—'}</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mt-3">
            <div>
              <span className="text-stone-500 block">{t.fields.totalBrothers}</span>
              <span className="font-semibold text-stone-800">{fam.totalBrothers || '০'}</span>
            </div>
            <div>
              <span className="text-stone-500 block">{t.fields.totalSisters}</span>
              <span className="font-semibold text-stone-800">{fam.totalSisters || '০'}</span>
            </div>
            <div>
              <span className="text-stone-500 block">{t.fields.financialStatus}</span>
              <span className="font-semibold text-stone-800">
                {fam.financialStatus ? (t.fields as any)[fam.financialStatus] || fam.financialStatus : '—'}
              </span>
            </div>
          </div>

          {(fam.brothersDetails || fam.sistersDetails) && (
            <div className="text-xs text-stone-600 mt-2.5 pt-2 border-t border-rose-100 space-y-1">
              {fam.brothersDetails && (
                <div><span className="font-semibold text-stone-800">{t.fields.brothersDetails}:</span> {fam.brothersDetails}</div>
              )}
              {fam.sistersDetails && (
                <div><span className="font-semibold text-stone-800">{t.fields.sistersDetails}:</span> {fam.sistersDetails}</div>
              )}
            </div>
          )}

          {fam.familyBackgroundDescription && (
            <div className="text-xs text-stone-600 mt-2.5 pt-2 border-t border-rose-100">
              <span className="font-semibold text-stone-800">{t.fields.familyBackgroundDescription}:</span> {fam.familyBackgroundDescription}
            </div>
          )}
        </section>

        {/* 4. Lifestyle & Beliefs */}
        {(rel.religion || rel.praysFiveTimes || rel.dietHabit || rel.gotra || rel.caste || rel.hobbiesAndInterests) && (
          <section className="bg-white/90 border border-rose-100/90 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2.5 border-b border-rose-100 pb-2.5 mb-3.5">
              <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700">
                <Compass className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold font-serif text-stone-900">{t.sections.religion}</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {rel.religion && (
                <div>
                  <span className="text-stone-500 block">{t.fields.religion}</span>
                  <span className="font-semibold text-stone-800">{rel.religion}</span>
                </div>
              )}
              {rel.sectOrMazhab && (
                <div>
                  <span className="text-stone-500 block">{t.fields.sectOrMazhab}</span>
                  <span className="font-semibold text-stone-800">{rel.sectOrMazhab}</span>
                </div>
              )}
              {rel.gotra && (
                <div>
                  <span className="text-stone-500 block">{isBn ? 'গোত্র' : 'Gotra'}</span>
                  <span className="font-semibold text-stone-800">{rel.gotra}</span>
                </div>
              )}
              {rel.caste && (
                <div>
                  <span className="text-stone-500 block">{isBn ? 'বর্ণ/শাখা' : 'Caste'}</span>
                  <span className="font-semibold text-stone-800">{rel.caste}</span>
                </div>
              )}
              {rel.dietHabit && (
                <div>
                  <span className="text-stone-500 block">{isBn ? 'আহার' : 'Diet'}</span>
                  <span className="font-semibold text-stone-800">
                    {rel.dietHabit === 'vegetarian' ? (isBn ? 'নিরামিষ' : 'Vegetarian') : (isBn ? 'আমিষ' : 'Non-veg')}
                  </span>
                </div>
              )}
              {rel.praysFiveTimes && (
                <div>
                  <span className="text-stone-500 block">{t.fields.praysFiveTimes}</span>
                  <span className="font-semibold text-stone-800">
                    {rel.praysFiveTimes === 'regular' ? (isBn ? 'নিয়মিত' : 'Regular') : (isBn ? 'চেষ্টা করি' : 'Trying')}
                  </span>
                </div>
              )}
              {rel.hobbiesAndInterests && (
                <div className="sm:col-span-2">
                  <span className="text-stone-500 block">{t.fields.hobbiesAndInterests}</span>
                  <span className="text-stone-700">{rel.hobbiesAndInterests}</span>
                </div>
              )}
              {rel.habitsAndLifestyle && (
                <div className="sm:col-span-2">
                  <span className="text-stone-500 block">{t.fields.habitsAndLifestyle}</span>
                  <span className="text-stone-700">{rel.habitsAndLifestyle}</span>
                </div>
              )}
            </div>
          </section>
        )}

        {/* 5. Partner Expectations */}
        {(exp.generalExpectations || exp.expectedEducation || exp.expectedDistrict || exp.expectedAgeMin) && (
          <section className="bg-white/90 border border-rose-100/90 rounded-2xl p-5 shadow-xs">
            <div className="flex items-center gap-2.5 border-b border-rose-100 pb-2.5 mb-3.5">
              <div className="w-7 h-7 rounded-lg bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold font-serif text-stone-900">{t.sections.expectations}</h2>
            </div>

            {exp.generalExpectations && (
              <p className="text-xs text-stone-700 leading-relaxed whitespace-pre-line">
                {exp.generalExpectations}
              </p>
            )}

            {(exp.expectedAgeMin || exp.expectedAgeMax || exp.expectedHeightMin || exp.expectedDistrict) && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs mt-3 pt-3 border-t border-rose-100">
                {(exp.expectedAgeMin || exp.expectedAgeMax) && (
                  <div>
                    <span className="text-stone-500 block">{t.fields.expectedAge}</span>
                    <span className="font-semibold text-stone-800">{exp.expectedAgeMin || ''} - {exp.expectedAgeMax || ''} {isBn ? 'বছর' : 'yrs'}</span>
                  </div>
                )}
                {exp.expectedHeightMin && (
                  <div>
                    <span className="text-stone-500 block">{t.fields.expectedHeight}</span>
                    <span className="font-semibold text-stone-800">{exp.expectedHeightMin}</span>
                  </div>
                )}
                {exp.expectedDistrict && (
                  <div>
                    <span className="text-stone-500 block">{t.fields.expectedDistrict}</span>
                    <span className="font-semibold text-stone-800">{exp.expectedDistrict}</span>
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* 6. Contact Information */}
        <section className="bg-rose-50/50 border border-rose-200/80 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2.5 border-b border-rose-200/60 pb-2.5 mb-3.5">
            <div className="w-7 h-7 rounded-lg bg-rose-100/80 border border-rose-200 flex items-center justify-center text-rose-700">
              <Phone className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold font-serif text-stone-900">{t.sections.contact}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
            <div className="space-y-1">
              <span className="text-stone-500 block font-semibold">{t.fields.guardianName}</span>
              <div className="font-bold text-stone-900">{cont.guardianName || '—'}</div>
              <div className="text-stone-600">
                {t.fields.guardianRelation}: <span className="font-semibold text-stone-800">{cont.guardianRelation || '—'}</span>
              </div>
            </div>

            {!priv.hideGuardianContact && cont.guardianPhone && (
              <div className="space-y-1">
                <span className="text-stone-500 block font-semibold">{t.fields.guardianPhone}</span>
                <div className="font-bold text-stone-900 text-sm tracking-wide">{cont.guardianPhone}</div>
                {cont.contactTimePreference && (
                  <div className="text-stone-600 text-[11px]">
                    {t.fields.contactTimePreference}: {cont.contactTimePreference}
                  </div>
                )}
              </div>
            )}

            {!priv.hideContact && (cont.candidatePhone || cont.candidateEmail) && (
              <div className="sm:col-span-2 pt-2 border-t border-rose-200/60 flex flex-wrap gap-4 text-xs">
                {cont.candidatePhone && (
                  <div>
                    <span className="text-stone-500 mr-1.5">{t.fields.candidatePhone}:</span>
                    <span className="font-bold text-stone-800">{cont.candidatePhone}</span>
                  </div>
                )}
                {cont.candidateEmail && (
                  <div>
                    <span className="text-stone-500 mr-1.5">{t.fields.candidateEmail}:</span>
                    <span className="font-bold text-stone-800">{cont.candidateEmail}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

      </div>

      {/* Footer watermark/credit */}
      <div className="text-center pt-6 text-[11px] text-stone-400 relative z-10 flex items-center justify-center gap-1.5">
        <Sparkles className="w-3 h-3 text-rose-400" />
        <span>BiyePorichoy.com • {isBn ? 'মার্জিত বৈবাহিক জীবনবৃত্তান্ত' : 'Elegant Matrimonial Biodata'}</span>
      </div>
    </div>
  );
};
