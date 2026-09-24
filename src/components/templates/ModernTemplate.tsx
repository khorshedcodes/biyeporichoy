import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { 
  GraduationCap, Briefcase, Users, Moon, Heart, Phone, MapPin, 
  Sparkles, Calendar, BadgeCheck
} from 'lucide-react';

interface TemplateProps {
  data: BiodataData;
  isPrintMode?: boolean;
}

export const ModernTemplate: React.FC<TemplateProps> = ({ data }) => {
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
      className="w-full max-w-[800px] mx-auto bg-[#fffdfa] text-stone-800 shadow-2xl rounded-2xl p-6 sm:p-10 font-bangla border border-amber-200/80 transition-all duration-300 print:shadow-none print:p-4 print:max-w-none print:border-none"
    >
      {/* Header Card */}
      <div className="bg-gradient-to-br from-[#2a040d] via-[#4c0519] to-stone-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-xl border border-amber-400/30">
        {!priv.hidePhoto && p.photoUrl && (
          <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-xl overflow-hidden ring-4 ring-amber-400/30 shadow-xl flex-shrink-0 bg-stone-800">
            <img 
              src={p.photoUrl} 
              alt={p.fullName || 'Candidate'} 
              className="w-full h-full object-cover" 
            />
          </div>
        )}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-200 border border-amber-400/40 text-xs font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            {isGroom 
              ? (isBn ? 'আধুনিক পাত্রের বায়োডাটা' : 'Modern Groom Profile') 
              : (isBn ? 'আধুনিক পাত্রীর বায়োডাটা' : 'Modern Bride Profile')}
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold font-serif tracking-tight text-white">
            {p.fullName || (isGroom ? (isBn ? 'পাত্রের নাম' : 'Groom Name') : (isBn ? 'পাত্রীর নাম' : 'Bride Name'))}
          </h1>
          <p className="text-amber-100/90 text-sm font-medium">
            {c.designation || c.occupation || (isBn ? 'পেশা উল্লেখ করুন' : 'Profession')}
            {c.organization && ` • ${c.organization}`}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-2 text-xs">
            {p.age && <span className="bg-white/10 px-2.5 py-1 rounded-md text-amber-100 border border-white/10">{isBn ? `বয়স: ${p.age}` : `Age: ${p.age}`}</span>}
            {p.height && <span className="bg-white/10 px-2.5 py-1 rounded-md text-amber-100 border border-white/10">{isBn ? `উচ্চতা: ${p.height}` : `Height: ${p.height}`}</span>}
            {p.maritalStatus && (
              <span className="bg-white/10 px-2.5 py-1 rounded-md text-amber-100 border border-white/10">
                {t.fields[p.maritalStatus as keyof typeof t.fields] || p.maritalStatus}
              </span>
            )}
            {p.permanentDistrict && (
              <span className="bg-white/10 px-2.5 py-1 rounded-md text-amber-100 border border-white/10">
                📍 {p.permanentDistrict}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Clean Modern Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
        
        {/* Card 1: Personal Details */}
        <div className="bg-[#fcfaf6] rounded-xl p-5 border border-amber-200/60 shadow-xs space-y-2.5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-brand-900 flex items-center gap-1.5 font-serif">
            <BadgeCheck className="w-4 h-4 text-amber-600" />
            {t.sections.basic}
          </h3>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.complexion}</span>
              <span className="font-semibold text-stone-900">{p.complexion || '—'}</span>
            </div>
            <div className="flex justify-between border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.bloodGroup}</span>
              <span className="font-bold text-brand-800">{p.bloodGroup || '—'}</span>
            </div>
            {p.weight && (
              <div className="flex justify-between border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{t.fields.weight}</span>
                <span className="font-semibold text-stone-900">{p.weight}</span>
              </div>
            )}
            <div className="flex justify-between border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.nationality}</span>
              <span className="font-medium text-stone-900">{p.nationality || (isBn ? 'বাংলাদেশী' : 'Bangladeshi')}</span>
            </div>
            <div className="text-xs text-stone-600 pt-1">
              <span className="font-medium">{t.fields.presentAddress}:</span> {p.presentAddress || p.presentDistrict || '—'}
            </div>
          </div>
        </div>

        {/* Card 2: Career */}
        <div className="bg-[#fcfaf6] rounded-xl p-5 border border-amber-200/60 shadow-xs space-y-2.5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-brand-900 flex items-center gap-1.5 font-serif">
            <Briefcase className="w-4 h-4 text-amber-600" />
            {t.sections.career}
          </h3>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.occupation}</span>
              <span className="font-semibold text-stone-900">{c.occupation || '—'}</span>
            </div>
            {c.designation && (
              <div className="flex justify-between border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{t.fields.designation}</span>
                <span className="font-medium text-stone-900">{c.designation}</span>
              </div>
            )}
            {c.organization && (
              <div className="flex justify-between border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{t.fields.organization}</span>
                <span className="font-medium text-stone-900">{c.organization}</span>
              </div>
            )}
            {c.monthlyIncome && (
              <div className="flex justify-between border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{t.fields.monthlyIncome}</span>
                <span className="font-semibold text-stone-900">{c.monthlyIncome}</span>
              </div>
            )}
            {c.workLocation && (
              <div className="text-xs text-stone-600 pt-1">
                <span className="font-medium">{t.fields.workLocation}:</span> {c.workLocation}
              </div>
            )}
          </div>
        </div>

        {/* Card 3: Education */}
        <div className="bg-[#fcfaf6] rounded-xl p-5 border border-amber-200/60 shadow-xs space-y-2.5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-brand-900 flex items-center gap-1.5 font-serif">
            <GraduationCap className="w-4 h-4 text-amber-600" />
            {t.sections.education}
          </h3>
          {edu.highestDegree && (
            <div className="text-xs font-semibold text-brand-900 bg-amber-50 p-2 rounded-lg border border-amber-200">
              {isBn ? 'সর্বোচ্চ ডিগ্রি: ' : 'Degree: '} {edu.highestDegree}
            </div>
          )}
          {edu.details && edu.details.length > 0 && edu.details.some(d => d.degree || d.institution) && (
            <div className="space-y-2 pt-1">
              {edu.details.map((item, idx) => (
                item.degree || item.institution ? (
                  <div key={item.id || idx} className="text-xs border-b border-stone-200/60 pb-1.5">
                    <div className="flex justify-between font-medium text-stone-900">
                      <span>{item.degree}</span>
                      <span className="text-brand-900 font-bold">{item.result}</span>
                    </div>
                    <div className="text-stone-500 flex justify-between text-[11px]">
                      <span>{item.institution}</span>
                      <span>{item.passingYear}</span>
                    </div>
                  </div>
                ) : null
              ))}
            </div>
          )}
          {edu.islamicEducation && (
            <div className="text-xs text-stone-600 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200">
              <span className="font-semibold text-emerald-900">{t.fields.islamicEducation}:</span> {edu.islamicEducation}
            </div>
          )}
        </div>

        {/* Card 4: Family */}
        <div className="bg-[#fcfaf6] rounded-xl p-5 border border-amber-200/60 shadow-xs space-y-2.5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-brand-900 flex items-center gap-1.5 font-serif">
            <Users className="w-4 h-4 text-amber-600" />
            {t.sections.family}
          </h3>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.fatherName}</span>
              <span className="font-medium text-right text-stone-900">{fam.fatherName || '—'} {fam.fatherStatus === 'deceased' ? lateFatherLabel : ''}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.fatherOccupation}</span>
              <span className="font-medium text-right text-stone-900">{fam.fatherOccupation || '—'}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.motherName}</span>
              <span className="font-medium text-right text-stone-900">{fam.motherName || '—'} {fam.motherStatus === 'deceased' ? lateMotherLabel : ''}</span>
            </div>
            <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.motherOccupation}</span>
              <span className="font-medium text-right text-stone-900">{fam.motherOccupation || '—'}</span>
            </div>
            <div className="text-xs text-stone-600 pt-1">
              <span className="font-semibold">{t.fields.totalBrothers}:</span> {fam.totalBrothers || '০'} | <span className="font-semibold">{t.fields.totalSisters}:</span> {fam.totalSisters || '০'}
            </div>
            {fam.familyBackgroundDescription && (
              <p className="text-xs text-stone-500 italic pt-1">{fam.familyBackgroundDescription}</p>
            )}
          </div>
        </div>

        {/* Card 5: Religion & Lifestyle */}
        <div className="bg-[#fcfaf6] rounded-xl p-5 border border-amber-200/60 shadow-xs space-y-2.5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-brand-900 flex items-center gap-1.5 font-serif">
            <Moon className="w-4 h-4 text-amber-600" />
            {t.sections.religion}
          </h3>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
              <span className="text-stone-500">{t.fields.religion}</span>
              <span className="font-medium text-stone-900">{rel.religion || '—'}</span>
            </div>
            {rel.sectOrMazhab && (
              <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{t.fields.sectOrMazhab}</span>
                <span className="font-medium text-stone-900">{rel.sectOrMazhab}</span>
              </div>
            )}
            {rel.gotra && (
              <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{isBn ? 'গোত্র' : 'Gotra'}</span>
                <span className="font-semibold text-stone-900">{rel.gotra}</span>
              </div>
            )}
            {rel.caste && (
              <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{isBn ? 'বর্ণ/শাখা' : 'Caste'}</span>
                <span className="font-medium text-stone-900">{rel.caste}</span>
              </div>
            )}
            {rel.dietHabit && (
              <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{isBn ? 'আহার' : 'Diet'}</span>
                <span className="font-medium text-stone-900">{rel.dietHabit === 'vegetarian' ? (isBn ? 'নিরামিষ' : 'Vegetarian') : (isBn ? 'আমিষ' : 'Non-veg')}</span>
              </div>
            )}
            {rel.pujaLifestyle && (
              <div className="text-xs text-stone-600 pt-1">
                <span className="font-semibold text-stone-800">{isBn ? 'পূজা-অর্চনা:' : 'Puja:'}</span> {rel.pujaLifestyle}
              </div>
            )}
            {rel.praysFiveTimes && (
              <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{t.fields.praysFiveTimes}</span>
                <span className="font-bold text-emerald-800">{t.fields[rel.praysFiveTimes as keyof typeof t.fields] || rel.praysFiveTimes}</span>
              </div>
            )}
            {rel.quranRecitation && (
              <div className="flex justify-between text-xs sm:text-sm border-b border-stone-200/60 pb-1">
                <span className="text-stone-500">{t.fields.quranRecitation}</span>
                <span className="font-medium text-stone-900">{t.fields[rel.quranRecitation as keyof typeof t.fields] || rel.quranRecitation}</span>
              </div>
            )}
            {rel.beardOrHijab && (
              <div className="text-xs text-stone-600 pt-1">
                <span className="font-semibold text-stone-800">{t.fields.beardOrHijab}:</span> {rel.beardOrHijab}
              </div>
            )}
            {rel.hobbiesAndInterests && (
              <div className="text-xs text-stone-600">
                <span className="font-semibold text-stone-800">{t.fields.hobbiesAndInterests}:</span> {rel.hobbiesAndInterests}
              </div>
            )}
          </div>
        </div>

        {/* Card 6: Expectations (Full Width) */}
        <div className="md:col-span-2 bg-brand-50/50 rounded-xl p-5 border border-brand-200/80 shadow-xs space-y-2.5">
          <h3 className="text-xs uppercase tracking-wider font-bold text-brand-900 flex items-center gap-1.5 font-serif">
            <Heart className="w-4 h-4 text-brand-800" />
            {t.sections.expectations}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-stone-700">
            {(exp.expectedAgeMin || exp.expectedAgeMax) && (
              <div><span className="font-semibold text-brand-950">{t.fields.expectedAge}:</span> {exp.expectedAgeMin} - {exp.expectedAgeMax} {isBn ? 'বছর' : 'years'}</div>
            )}
            {exp.expectedEducation && <div><span className="font-semibold text-brand-950">{t.fields.expectedEducation}:</span> {exp.expectedEducation}</div>}
            {exp.expectedDistrict && <div><span className="font-semibold text-brand-950">{t.fields.expectedDistrict}:</span> {exp.expectedDistrict}</div>}
            {exp.religiousExpectations && <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.religiousExpectations}:</span> {exp.religiousExpectations}</div>}
            {exp.generalExpectations && <div className="sm:col-span-2"><span className="font-semibold text-brand-950">{t.fields.generalExpectations}:</span> {exp.generalExpectations}</div>}
          </div>
        </div>

        {/* Card 7: Contact (Full Width) */}
        <div className="md:col-span-2 bg-gradient-to-r from-stone-900 to-brand-950 text-white rounded-xl p-5 shadow-sm space-y-2.5 border border-amber-400/20">
          <h3 className="text-xs uppercase tracking-wider font-bold text-amber-300 flex items-center gap-1.5 font-serif">
            <Phone className="w-4 h-4 text-amber-300" />
            {t.sections.contact}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div><span className="text-stone-400">{t.fields.guardianName}:</span> <span className="font-semibold text-white">{cont.guardianName || '—'} ({cont.guardianRelation || ''})</span></div>
            {!priv.hideGuardianContact && (
              <div><span className="text-stone-400">{t.fields.guardianPhone}:</span> <span className="font-semibold text-emerald-400">{cont.guardianPhone || '—'}</span></div>
            )}
            {!priv.hideContact && cont.candidatePhone && (
              <div><span className="text-stone-400">{t.fields.candidatePhone}:</span> <span className="font-semibold text-amber-200">{cont.candidatePhone}</span></div>
            )}
            {cont.contactTimePreference && (
              <div className="sm:col-span-2 text-xs text-stone-400">
                <span>{t.fields.contactTimePreference}:</span> {cont.contactTimePreference}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Footer Branding */}
      <div className="mt-8 text-center text-xs text-stone-500 pt-4 border-t border-stone-200 flex items-center justify-between">
        <span className="font-serif text-brand-900 font-semibold">বিয়েপরিচয়.com • Modern Matrimonial Biodata</span>
        <span>{isBn ? 'গোপনীয়তা ও আস্থা আমাদের অঙ্গীকার' : 'Built with trust & elegance'}</span>
      </div>
    </div>
  );
};
