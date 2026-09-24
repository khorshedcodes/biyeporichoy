import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { 
  GraduationCap, Briefcase, Users, Moon, Heart, Phone, MapPin, 
  Crown, Sparkles, Shield
} from 'lucide-react';
import { CornerOrnament, DividerFlourish } from './MatrimonialOrnaments';

interface TemplateProps {
  data: BiodataData;
  isPrintMode?: boolean;
}

export const RoyalTemplate: React.FC<TemplateProps> = ({ data }) => {
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
      className="w-full max-w-[800px] mx-auto bg-[#fffdfa] text-stone-900 shadow-2xl rounded-2xl p-6 sm:p-10 font-bangla border-2 border-amber-600 relative overflow-hidden transition-all duration-300 print:shadow-none print:p-6 print:max-w-none print:border-amber-600"
    >
      {/* Inner Decorative Hairline Border */}
      <div className="absolute inset-2 sm:inset-3 border-2 border-amber-400/40 rounded-xl pointer-events-none -z-0" />

      {/* Ornate Matrimonial Corner Flourishes in Deep Gold */}
      <div className="absolute top-2 left-2 z-10">
        <CornerOrnament position="top-left" color="#ca8a04" size={44} />
      </div>
      <div className="absolute top-2 right-2 z-10">
        <CornerOrnament position="top-right" color="#ca8a04" size={44} />
      </div>
      <div className="absolute bottom-2 left-2 z-10">
        <CornerOrnament position="bottom-left" color="#ca8a04" size={44} />
      </div>
      <div className="absolute bottom-2 right-2 z-10">
        <CornerOrnament position="bottom-right" color="#ca8a04" size={44} />
      </div>

      {/* Decorative Gold Header Crest */}
      <div className="text-center pb-5 pt-2 relative z-10">
        <div className="flex justify-center mb-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-700 via-amber-600 to-yellow-500 flex items-center justify-center shadow-md text-amber-100 border border-amber-300/60">
            <Crown className="w-6 h-6" />
          </div>
        </div>
        <div className="text-amber-800 font-serif text-xs sm:text-sm font-bold tracking-widest uppercase mb-1">
          {isGroom 
            ? (isBn ? '❖ রয়েল পাত্রের বায়োডাটা ❖' : '❖ Royal Groom Profile ❖') 
            : (isBn ? '❖ রয়েল পাত্রীর বায়োডাটা ❖' : '❖ Royal Bride Profile ❖')}
        </div>
        <h1 className="text-2xl sm:text-4xl font-bold text-stone-950 font-serif tracking-tight">
          {p.fullName || (isGroom ? (isBn ? 'পাত্রের নাম' : 'Groom Name') : (isBn ? 'পাত্রীর নাম' : 'Bride Name'))}
        </h1>
        <p className="text-amber-900 text-xs sm:text-sm mt-1 font-semibold">
          {c.designation || c.occupation || ''} {c.organization && `• ${c.organization}`}
        </p>

        <DividerFlourish color="#ca8a04" />
      </div>

      {/* Profile Summary & Photo */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 relative z-10">
        {!priv.hidePhoto && p.photoUrl && (
          <div className="flex-shrink-0">
            <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-amber-500 shadow-xl bg-amber-50 p-1">
              <img 
                src={p.photoUrl} 
                alt={p.fullName || 'Candidate'} 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          </div>
        )}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 text-sm bg-gradient-to-br from-amber-50/70 to-brand-50/40 p-4 rounded-xl border border-amber-300/70">
          <div><span className="font-semibold text-amber-950">{t.fields.age}:</span> {p.age || '—'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.height}:</span> {p.height || '—'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.complexion}:</span> {p.complexion || '—'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.bloodGroup}:</span> {p.bloodGroup || '—'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.maritalStatus}:</span> {t.fields[p.maritalStatus as keyof typeof t.fields] || p.maritalStatus}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.permanentDistrict}:</span> {p.permanentDistrict || '—'}</div>
          <div className="sm:col-span-2"><span className="font-semibold text-amber-950">{t.fields.presentDistrict}:</span> {p.presentDistrict || '—'}</div>
        </div>
      </div>

      {/* Education */}
      <div className="py-4 border-t border-amber-300/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2 mb-3 bg-amber-100/70 px-3 py-1.5 rounded-lg border-l-4 border-amber-700">
          <GraduationCap className="w-4 h-4 text-amber-800" />
          {t.sections.education}
        </h2>
        <div className="space-y-2 text-sm pl-2">
          {edu.highestDegree && (
            <div className="font-semibold text-stone-900">
              {isBn ? 'সর্বোচ্চ যোগ্যতা: ' : 'Highest Qualification: '} <span className="text-amber-900 font-bold bg-amber-100/80 px-2 py-0.5 rounded">{edu.highestDegree}</span>
            </div>
          )}
          {edu.details && edu.details.length > 0 && edu.details.some(d => d.degree || d.institution) && (
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="border-b border-amber-300 bg-amber-100/70 text-amber-950">
                    <th className="py-1.5 px-3">{t.fields.degree}</th>
                    <th className="py-1.5 px-3">{t.fields.institution}</th>
                    <th className="py-1.5 px-3">{t.fields.passingYear}</th>
                    <th className="py-1.5 px-3">{t.fields.result}</th>
                  </tr>
                </thead>
                <tbody>
                  {edu.details.map((item, idx) => (
                    item.degree || item.institution ? (
                      <tr key={item.id || idx} className="border-b border-amber-200/50 hover:bg-amber-50/50">
                        <td className="py-1.5 px-3 font-medium text-stone-900">{item.degree}</td>
                        <td className="py-1.5 px-3 text-stone-700">{item.institution}</td>
                        <td className="py-1.5 px-3 text-stone-600">{item.passingYear}</td>
                        <td className="py-1.5 px-3 font-bold text-amber-900">{item.result || item.groupOrMajor || '—'}</td>
                      </tr>
                    ) : null
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Career */}
      <div className="py-4 border-t border-amber-300/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2 mb-3 bg-amber-100/70 px-3 py-1.5 rounded-lg border-l-4 border-amber-700">
          <Briefcase className="w-4 h-4 text-amber-800" />
          {t.sections.career}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm pl-2">
          <div><span className="font-semibold text-amber-950">{t.fields.occupation}:</span> {c.occupation || '—'}</div>
          {c.designation && <div><span className="font-semibold text-amber-950">{t.fields.designation}:</span> {c.designation}</div>}
          {c.organization && <div className="sm:col-span-2"><span className="font-semibold text-amber-950">{t.fields.organization}:</span> {c.organization}</div>}
          {c.workLocation && <div><span className="font-semibold text-amber-950">{t.fields.workLocation}:</span> {c.workLocation}</div>}
          {c.monthlyIncome && <div><span className="font-semibold text-amber-950">{t.fields.monthlyIncome}:</span> {c.monthlyIncome}</div>}
          {c.careerDescription && (
            <div className="sm:col-span-2 text-xs sm:text-sm text-stone-700 mt-1 bg-stone-50 p-2 rounded border border-stone-200">
              <span className="font-semibold text-amber-950">{t.fields.careerDescription}:</span> {c.careerDescription}
            </div>
          )}
        </div>
      </div>

      {/* Family */}
      <div className="py-4 border-t border-amber-300/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2 mb-3 bg-amber-100/70 px-3 py-1.5 rounded-lg border-l-4 border-amber-700">
          <Users className="w-4 h-4 text-amber-800" />
          {t.sections.family}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm pl-2">
          <div><span className="font-semibold text-amber-950">{t.fields.fatherName}:</span> {fam.fatherName || '—'} {fam.fatherStatus === 'deceased' ? lateFatherLabel : ''}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.fatherOccupation}:</span> {fam.fatherOccupation || '—'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.motherName}:</span> {fam.motherName || '—'} {fam.motherStatus === 'deceased' ? lateMotherLabel : ''}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.motherOccupation}:</span> {fam.motherOccupation || '—'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.totalBrothers}:</span> {fam.totalBrothers || '০'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.totalSisters}:</span> {fam.totalSisters || '০'}</div>
          {fam.familyBackgroundDescription && (
            <div className="sm:col-span-2 text-xs sm:text-sm text-stone-700 mt-1 bg-stone-50 p-2 rounded border border-stone-200">
              <span className="font-semibold text-amber-950">{t.fields.familyBackgroundDescription}:</span> {fam.familyBackgroundDescription}
            </div>
          )}
        </div>
      </div>

      {/* Religion & Expectations */}
      <div className="py-4 border-t border-amber-300/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2 mb-3 bg-amber-100/70 px-3 py-1.5 rounded-lg border-l-4 border-amber-700">
          <Heart className="w-4 h-4 text-amber-800" />
          {t.sections.expectations} & {t.sections.religion}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-stone-700 pl-2">
          <div><span className="font-semibold text-amber-950">{t.fields.religion}:</span> {rel.religion || '—'}</div>
          {rel.gotra && (
            <div><span className="font-semibold text-amber-950">{isBn ? 'গোত্র:' : 'Gotra:'}</span> {rel.gotra}</div>
          )}
          {rel.caste && (
            <div><span className="font-semibold text-amber-950">{isBn ? 'বর্ণ/শাখা:' : 'Caste:'}</span> {rel.caste}</div>
          )}
          {rel.dietHabit && (
            <div><span className="font-semibold text-amber-950">{isBn ? 'আহার:' : 'Diet:'}</span> {rel.dietHabit === 'vegetarian' ? (isBn ? 'নিরামিষ' : 'Vegetarian') : (isBn ? 'আমিষ' : 'Non-veg')}</div>
          )}
          {rel.praysFiveTimes && (
            <div><span className="font-semibold text-amber-950">{t.fields.praysFiveTimes}:</span> {t.fields[rel.praysFiveTimes as keyof typeof t.fields] || rel.praysFiveTimes}</div>
          )}
          {rel.beardOrHijab && <div className="sm:col-span-2"><span className="font-semibold text-amber-950">{t.fields.beardOrHijab}:</span> {rel.beardOrHijab}</div>}
          {exp.expectedEducation && <div><span className="font-semibold text-amber-950">{t.fields.expectedEducation}:</span> {exp.expectedEducation}</div>}
          {exp.religiousExpectations && <div className="sm:col-span-2"><span className="font-semibold text-amber-950">{t.fields.religiousExpectations}:</span> {exp.religiousExpectations}</div>}
          {exp.generalExpectations && <div className="sm:col-span-2"><span className="font-semibold text-amber-950">{t.fields.generalExpectations}:</span> {exp.generalExpectations}</div>}
        </div>
      </div>

      {/* Guardian Contact Info */}
      <div className="pt-4 border-t border-amber-300/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-amber-950 flex items-center gap-2 mb-3 bg-amber-100/70 px-3 py-1.5 rounded-lg border-l-4 border-amber-700">
          <Phone className="w-4 h-4 text-amber-800" />
          {t.sections.contact}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm bg-amber-50/70 p-4 rounded-xl border border-amber-300/80">
          <div><span className="font-semibold text-amber-950">{t.fields.guardianName}:</span> {cont.guardianName || '—'}</div>
          <div><span className="font-semibold text-amber-950">{t.fields.guardianRelation}:</span> {cont.guardianRelation || '—'}</div>
          {!priv.hideGuardianContact && (
            <div><span className="font-semibold text-amber-950">{t.fields.guardianPhone}:</span> {cont.guardianPhone || '—'}</div>
          )}
          {!priv.hideContact && cont.candidatePhone && (
            <div><span className="font-semibold text-amber-950">{t.fields.candidatePhone}:</span> {cont.candidatePhone}</div>
          )}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-8 text-center text-xs text-amber-900/70 pt-4 border-t border-amber-300/70 flex items-center justify-between relative z-10">
        <span className="font-serif font-bold text-amber-950">বিয়েপরিচয়.com — Royal Heritage Collection</span>
        <span>{isBn ? '❖ শুভ পরিণয়ের বিশ্বস্ত মাধ্যম ❖' : '❖ Premium Matrimonial Portfolio ❖'}</span>
      </div>
    </div>
  );
};
