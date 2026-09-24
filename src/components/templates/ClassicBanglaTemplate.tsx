import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { 
  GraduationCap, Briefcase, Users, Moon, Heart, Phone, MapPin, 
  Sparkles, ShieldCheck, HeartHandshake
} from 'lucide-react';
import { CornerOrnament, DividerFlourish } from './MatrimonialOrnaments';

interface TemplateProps {
  data: BiodataData;
  isPrintMode?: boolean;
}

export const ClassicBanglaTemplate: React.FC<TemplateProps> = ({ data }) => {
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

  const getHeaderTitle = () => {
    return isGroom 
      ? (isBn ? '❖ শুভ বিবাহ • পাত্রের বায়োডাটা ❖' : '❖ Matrimonial Biodata • Groom Profile ❖')
      : (isBn ? '❖ শুভ বিবাহ • পাত্রীর বায়োডাটা ❖' : '❖ Matrimonial Biodata • Bride Profile ❖');
  };

  const lateFatherLabel = isBn ? '(প্রয়াত)' : '(Late)';
  const lateMotherLabel = isBn ? '(প্রয়াত)' : '(Late)';

  return (
    <div 
      className="w-full max-w-[800px] mx-auto bg-[#fffdfa] text-stone-900 shadow-2xl rounded-2xl p-6 sm:p-10 font-bangla border-2 border-amber-600/60 relative overflow-hidden transition-all duration-300 print:shadow-none print:p-6 print:max-w-none print:border-amber-600"
    >
      {/* Inner Decorative Hairline Border */}
      <div className="absolute inset-2 sm:inset-3 border border-amber-400/40 rounded-xl pointer-events-none -z-0" />

      {/* Ornate Matrimonial Corner Flourishes */}
      <div className="absolute top-2 left-2 z-10">
        <CornerOrnament position="top-left" color="#9f1239" size={44} />
      </div>
      <div className="absolute top-2 right-2 z-10">
        <CornerOrnament position="top-right" color="#9f1239" size={44} />
      </div>
      <div className="absolute bottom-2 left-2 z-10">
        <CornerOrnament position="bottom-left" color="#9f1239" size={44} />
      </div>
      <div className="absolute bottom-2 right-2 z-10">
        <CornerOrnament position="bottom-right" color="#9f1239" size={44} />
      </div>

      {/* Top Traditional Header Banner */}
      <div className="text-center pb-5 pt-2 relative z-10">
        <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-gradient-to-r from-brand-900 via-brand-800 to-amber-700 text-amber-200 text-xs sm:text-sm font-semibold tracking-wider shadow-sm border border-amber-400/50 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{getHeaderTitle()}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold font-serif text-brand-950 tracking-tight">
          {p.fullName || (isGroom ? (isBn ? 'পাত্রের নাম' : 'Groom Name') : (isBn ? 'পাত্রীর নাম' : 'Bride Name'))}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mt-2 text-stone-600 text-xs sm:text-sm font-medium">
          {p.age && <span className="bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">{isBn ? `বয়স: ${p.age}` : `Age: ${p.age}`}</span>}
          {p.height && <span className="bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">{isBn ? `উচ্চতা: ${p.height}` : `Height: ${p.height}`}</span>}
          {p.maritalStatus && (
            <span className="bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              {t.fields[p.maritalStatus as keyof typeof t.fields] || p.maritalStatus}
            </span>
          )}
          {p.permanentDistrict && (
            <span className="bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              {isBn ? `নিজ জেলা: ${p.permanentDistrict}` : `District: ${p.permanentDistrict}`}
            </span>
          )}
        </div>

        <DividerFlourish color="#ca8a04" />
      </div>

      {/* Main Profile Info + Photo Strip */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 relative z-10">
        {!priv.hidePhoto && p.photoUrl && (
          <div className="flex-shrink-0">
            <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden border-2 border-amber-500/70 shadow-lg bg-white p-1">
              <img 
                src={p.photoUrl} 
                alt={p.fullName || 'Candidate'} 
                className="w-full h-full object-cover rounded-lg" 
              />
            </div>
          </div>
        )}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 text-sm bg-brand-50/40 p-4 rounded-xl border border-brand-100/80">
          <div><span className="font-semibold text-brand-950">{t.fields.complexion}:</span> {p.complexion || '—'}</div>
          <div><span className="font-semibold text-brand-950">{t.fields.bloodGroup}:</span> {p.bloodGroup || '—'}</div>
          {p.weight && <div><span className="font-semibold text-brand-950">{t.fields.weight}:</span> {p.weight}</div>}
          <div><span className="font-semibold text-brand-950">{t.fields.nationality}:</span> {p.nationality || (isBn ? 'বাংলাদেশী' : 'Bangladeshi')}</div>
          <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.presentDistrict}:</span> {p.presentDistrict || '—'}</div>
          {!priv.hideCurrentAddress && p.presentAddress && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.presentAddress}:</span> {p.presentAddress}</div>
          )}
          <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.permanentAddress}:</span> {p.permanentAddress || p.permanentDistrict || '—'}</div>
        </div>
      </div>

      {/* Section 1: Education */}
      <div className="py-4 border-t border-amber-200/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-brand-950 flex items-center gap-2 mb-3 bg-gradient-to-r from-brand-100/80 via-amber-100/60 to-transparent px-3 py-1.5 rounded-lg border-l-4 border-brand-800">
          <GraduationCap className="w-4 h-4 text-brand-800" />
          {t.sections.education}
        </h2>
        <div className="space-y-2 text-sm pl-2">
          {edu.highestDegree && (
            <div className="font-semibold text-stone-900">
              {isBn ? 'সর্বোচ্চ যোগ্যতা: ' : 'Highest Qualification: '} 
              <span className="text-brand-900 font-bold bg-amber-100/60 px-2 py-0.5 rounded">{edu.highestDegree}</span>
            </div>
          )}
          {edu.details && edu.details.length > 0 && edu.details.some(d => d.degree || d.institution) && (
            <div className="overflow-x-auto mt-2">
              <table className="w-full text-left text-xs sm:text-sm border-collapse rounded-lg overflow-hidden">
                <thead>
                  <tr className="border-b border-amber-200 bg-amber-50 text-amber-950">
                    <th className="py-1.5 px-3">{t.fields.degree}</th>
                    <th className="py-1.5 px-3">{t.fields.institution}</th>
                    <th className="py-1.5 px-3">{t.fields.passingYear}</th>
                    <th className="py-1.5 px-3">{t.fields.result}</th>
                  </tr>
                </thead>
                <tbody>
                  {edu.details.map((item, idx) => (
                    item.degree || item.institution ? (
                      <tr key={item.id || idx} className="border-b border-stone-200/60 hover:bg-stone-50/50">
                        <td className="py-1.5 px-3 font-medium text-stone-900">{item.degree}</td>
                        <td className="py-1.5 px-3 text-stone-700">{item.institution}</td>
                        <td className="py-1.5 px-3 text-stone-600">{item.passingYear}</td>
                        <td className="py-1.5 px-3 font-bold text-brand-900">{item.result || item.groupOrMajor || '—'}</td>
                      </tr>
                    ) : null
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {edu.islamicEducation && (
            <div className="mt-2 text-xs sm:text-sm text-stone-700 bg-amber-50/80 p-2.5 rounded-lg border border-amber-200">
              <span className="font-semibold text-amber-950">{t.fields.islamicEducation}:</span> {edu.islamicEducation}
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Career */}
      <div className="py-4 border-t border-amber-200/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-brand-950 flex items-center gap-2 mb-3 bg-gradient-to-r from-brand-100/80 via-amber-100/60 to-transparent px-3 py-1.5 rounded-lg border-l-4 border-brand-800">
          <Briefcase className="w-4 h-4 text-brand-800" />
          {t.sections.career}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm pl-2">
          <div><span className="font-semibold text-brand-950">{t.fields.occupation}:</span> {c.occupation || '—'}</div>
          {c.designation && <div><span className="font-semibold text-brand-950">{t.fields.designation}:</span> {c.designation}</div>}
          {c.organization && <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.organization}:</span> {c.organization}</div>}
          {c.workLocation && <div><span className="font-semibold text-brand-950">{t.fields.workLocation}:</span> {c.workLocation}</div>}
          {c.monthlyIncome && <div><span className="font-semibold text-brand-950">{t.fields.monthlyIncome}:</span> {c.monthlyIncome}</div>}
          {c.careerDescription && (
            <div className="sm:col-span-2 text-xs sm:text-sm text-stone-700 mt-1 bg-stone-50 p-2 rounded border border-stone-200">
              <span className="font-semibold text-brand-950">{t.fields.careerDescription}:</span> {c.careerDescription}
            </div>
          )}
        </div>
      </div>

      {/* Section 3: Family */}
      <div className="py-4 border-t border-amber-200/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-brand-950 flex items-center gap-2 mb-3 bg-gradient-to-r from-brand-100/80 via-amber-100/60 to-transparent px-3 py-1.5 rounded-lg border-l-4 border-brand-800">
          <Users className="w-4 h-4 text-brand-800" />
          {t.sections.family}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm pl-2">
          <div>
            <span className="font-semibold text-brand-950">{t.fields.fatherName}:</span> {fam.fatherName || '—'}{' '}
            {fam.fatherStatus === 'deceased' ? lateFatherLabel : ''}
          </div>
          <div><span className="font-semibold text-brand-950">{t.fields.fatherOccupation}:</span> {fam.fatherOccupation || '—'}</div>
          <div>
            <span className="font-semibold text-brand-950">{t.fields.motherName}:</span> {fam.motherName || '—'}{' '}
            {fam.motherStatus === 'deceased' ? lateMotherLabel : ''}
          </div>
          <div><span className="font-semibold text-brand-950">{t.fields.motherOccupation}:</span> {fam.motherOccupation || '—'}</div>
          <div><span className="font-semibold text-brand-950">{t.fields.totalBrothers}:</span> {fam.totalBrothers || '০'}</div>
          <div><span className="font-semibold text-brand-950">{t.fields.totalSisters}:</span> {fam.totalSisters || '০'}</div>
          {fam.brothersDetails && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.brothersDetails}:</span> {fam.brothersDetails}</div>
          )}
          {fam.sistersDetails && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.sistersDetails}:</span> {fam.sistersDetails}</div>
          )}
          {fam.financialStatus && (
            <div>
              <span className="font-semibold text-brand-950">{t.fields.financialStatus}:</span>{' '}
              {t.fields[fam.financialStatus as keyof typeof t.fields] || fam.financialStatus}
            </div>
          )}
          {fam.familyType && (
            <div>
              <span className="font-semibold text-brand-950">{t.fields.familyType}:</span>{' '}
              {t.fields[fam.familyType as keyof typeof t.fields] || fam.familyType}
            </div>
          )}
          {fam.familyBackgroundDescription && (
            <div className="sm:col-span-2 text-stone-700 text-xs sm:text-sm mt-1 bg-stone-50 p-2 rounded border border-stone-200">
              <span className="font-semibold text-brand-950">{t.fields.familyBackgroundDescription}:</span> {fam.familyBackgroundDescription}
            </div>
          )}
        </div>
      </div>

      {/* Section 4: Religion & Lifestyle */}
      <div className="py-4 border-t border-amber-200/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-brand-950 flex items-center gap-2 mb-3 bg-gradient-to-r from-brand-100/80 via-amber-100/60 to-transparent px-3 py-1.5 rounded-lg border-l-4 border-brand-800">
          <Moon className="w-4 h-4 text-brand-800" />
          {t.sections.religion}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm pl-2">
          <div><span className="font-semibold text-brand-950">{t.fields.religion}:</span> {rel.religion || '—'}</div>
          {rel.sectOrMazhab && <div><span className="font-semibold text-brand-950">{t.fields.sectOrMazhab}:</span> {rel.sectOrMazhab}</div>}
          
          {rel.gotra && (
            <div><span className="font-semibold text-brand-950">{isBn ? 'গোত্র:' : 'Gotra:'}</span> {rel.gotra}</div>
          )}
          {rel.caste && (
            <div><span className="font-semibold text-brand-950">{isBn ? 'বর্ণ/শাখা:' : 'Caste:'}</span> {rel.caste}</div>
          )}
          {rel.dietHabit && (
            <div>
              <span className="font-semibold text-brand-950">{isBn ? 'আহার:' : 'Diet:'}</span>{' '}
              {rel.dietHabit === 'vegetarian' ? (isBn ? 'নিরামিষ' : 'Vegetarian') : (isBn ? 'আমিষ' : 'Non-veg')}
            </div>
          )}
          {rel.praysFiveTimes && (
            <div>
              <span className="font-semibold text-brand-950">{t.fields.praysFiveTimes}:</span>{' '}
              <span className="text-brand-900 font-semibold">{t.fields[rel.praysFiveTimes as keyof typeof t.fields] || rel.praysFiveTimes}</span>
            </div>
          )}
          {rel.quranRecitation && (
            <div>
              <span className="font-semibold text-brand-950">{t.fields.quranRecitation}:</span>{' '}
              {t.fields[rel.quranRecitation as keyof typeof t.fields] || rel.quranRecitation}
            </div>
          )}
          {rel.beardOrHijab && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.beardOrHijab}:</span> {rel.beardOrHijab}</div>
          )}
          {rel.halalEarningCommitment && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.halalEarningCommitment}:</span> {rel.halalEarningCommitment}</div>
          )}
          {rel.pujaLifestyle && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{isBn ? 'পূজা ও জীবনাচরণ:' : 'Puja & Lifestyle:'}</span> {rel.pujaLifestyle}</div>
          )}

          {rel.hobbiesAndInterests && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.hobbiesAndInterests}:</span> {rel.hobbiesAndInterests}</div>
          )}
          {rel.habitsAndLifestyle && (
            <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.habitsAndLifestyle}:</span> {rel.habitsAndLifestyle}</div>
          )}
        </div>
      </div>

      {/* Section 5: Partner Expectations */}
      <div className="py-4 border-t border-amber-200/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-brand-950 flex items-center gap-2 mb-3 bg-gradient-to-r from-brand-100/80 via-amber-100/60 to-transparent px-3 py-1.5 rounded-lg border-l-4 border-brand-800">
          <Heart className="w-4 h-4 text-brand-800" />
          {t.sections.expectations}
        </h2>
        <div className="space-y-2 text-sm text-stone-700 pl-2">
          {(exp.expectedAgeMin || exp.expectedAgeMax) && (
            <div>
              <span className="font-semibold text-brand-950">{t.fields.expectedAge}:</span> {exp.expectedAgeMin || ''} - {exp.expectedAgeMax || ''} {isBn ? 'বছর' : 'years'}
            </div>
          )}
          {exp.expectedEducation && (
            <div><span className="font-semibold text-brand-950">{t.fields.expectedEducation}:</span> {exp.expectedEducation}</div>
          )}
          {exp.expectedDistrict && (
            <div><span className="font-semibold text-brand-950">{t.fields.expectedDistrict}:</span> {exp.expectedDistrict}</div>
          )}
          {exp.religiousExpectations && (
            <div><span className="font-semibold text-brand-950">{t.fields.religiousExpectations}:</span> {exp.religiousExpectations}</div>
          )}
          {exp.generalExpectations && (
            <div><span className="font-semibold text-brand-950">{t.fields.generalExpectations}:</span> {exp.generalExpectations}</div>
          )}
        </div>
      </div>

      {/* Section 6: Contact Information */}
      <div className="pt-4 border-t border-amber-200/80 relative z-10">
        <h2 className="text-sm sm:text-base font-bold text-brand-950 flex items-center gap-2 mb-3 bg-gradient-to-r from-brand-100/80 via-amber-100/60 to-transparent px-3 py-1.5 rounded-lg border-l-4 border-brand-800">
          <Phone className="w-4 h-4 text-brand-800" />
          {t.sections.contact}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm bg-brand-50/60 p-4 rounded-xl border border-brand-200/80">
          <div><span className="font-semibold text-brand-950">{t.fields.guardianName}:</span> {cont.guardianName || '—'}</div>
          <div><span className="font-semibold text-brand-950">{t.fields.guardianRelation}:</span> {cont.guardianRelation || '—'}</div>
          {!priv.hideGuardianContact && (
            <div><span className="font-semibold text-brand-950">{t.fields.guardianPhone}:</span> {cont.guardianPhone || '—'}</div>
          )}
          {cont.alternativePhone && !priv.hideGuardianContact && (
            <div><span className="font-semibold text-brand-950">{t.fields.alternativePhone}:</span> {cont.alternativePhone}</div>
          )}
          {!priv.hideContact && cont.candidatePhone && (
            <div><span className="font-semibold text-brand-950">{t.fields.candidatePhone}:</span> {cont.candidatePhone}</div>
          )}
          {!priv.hideContact && cont.candidateEmail && (
            <div><span className="font-semibold text-brand-950">{t.fields.candidateEmail}:</span> {cont.candidateEmail}</div>
          )}
          {cont.contactTimePreference && (
            <div className="sm:col-span-2 text-xs text-stone-600">
              <span className="font-semibold text-brand-950">{t.fields.contactTimePreference}:</span> {cont.contactTimePreference}
            </div>
          )}
        </div>
      </div>

      {/* Footer Branding */}
      <div className="mt-8 text-center text-xs text-stone-500 pt-4 border-t border-dashed border-amber-300 flex items-center justify-between relative z-10">
        <span className="font-serif text-brand-900 font-semibold">বিয়েপরিচয়.com — Matrimonial Format</span>
        <span>{isBn ? '❖ তথ্যের সত্যতা বজায় রাখা পবিত্র নৈতিক দায়িত্ব ❖' : '❖ Truthfulness is our sacred duty ❖'}</span>
      </div>
    </div>
  );
};
