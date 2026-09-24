import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { 
  GraduationCap, Briefcase, Users, Moon, Heart, Phone, MapPin, 
  Sparkles, CheckCircle2, Award
} from 'lucide-react';

interface TemplateProps {
  data: BiodataData;
  isPrintMode?: boolean;
}

export const ProfessionalTemplate: React.FC<TemplateProps> = ({ data }) => {
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
      className="w-full max-w-[800px] mx-auto bg-[#fffdfa] text-stone-800 shadow-2xl rounded-2xl overflow-hidden font-bangla border border-amber-300/80 transition-all duration-300 print:shadow-none print:p-0 print:max-w-none print:border-none"
    >
      {/* 2-Column Executive CV Layout */}
      <div className="flex flex-col md:flex-row">
        
        {/* Left Sidebar (Deep Regal Maroon Column) */}
        <div className="w-full md:w-64 bg-gradient-to-b from-[#2a040d] via-[#3b0513] to-[#20030a] text-stone-200 p-6 flex flex-col justify-between space-y-6 border-r border-amber-500/20">
          <div className="space-y-6">
            {/* Photo */}
            {!priv.hidePhoto && p.photoUrl && (
              <div className="w-32 h-40 mx-auto rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-xl bg-stone-900">
                <img 
                  src={p.photoUrl} 
                  alt={p.fullName || 'Candidate'} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}

            {/* Sidebar Profile Basics */}
            <div className="space-y-3 text-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 border-b border-amber-500/30 pb-1 font-serif flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {t.sections.basic}
              </h3>
              <div className="space-y-1.5">
                <div><span className="text-amber-200/60">{t.fields.age}:</span> <span className="font-semibold text-white">{p.age || '—'}</span></div>
                <div><span className="text-amber-200/60">{t.fields.height}:</span> <span className="font-semibold text-white">{p.height || '—'}</span></div>
                <div><span className="text-amber-200/60">{t.fields.complexion}:</span> <span className="font-semibold text-white">{p.complexion || '—'}</span></div>
                <div><span className="text-amber-200/60">{t.fields.bloodGroup}:</span> <span className="font-bold text-amber-300">{p.bloodGroup || '—'}</span></div>
                {p.weight && <div><span className="text-amber-200/60">{t.fields.weight}:</span> <span className="font-semibold text-white">{p.weight}</span></div>}
                <div><span className="text-amber-200/60">{t.fields.maritalStatus}:</span> <span className="font-semibold text-white">{t.fields[p.maritalStatus as keyof typeof t.fields] || p.maritalStatus}</span></div>
                <div><span className="text-amber-200/60">{t.fields.permanentDistrict}:</span> <span className="font-semibold text-white">{p.permanentDistrict || '—'}</span></div>
              </div>

              {/* Religion on Sidebar */}
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 border-b border-amber-500/30 pb-1 pt-3 font-serif flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5 text-amber-400" />
                {t.sections.religion}
              </h3>
              <div className="space-y-1.5">
                <div><span className="text-amber-200/60">{t.fields.religion}:</span> <span className="text-white">{rel.religion || '—'}</span></div>
                {rel.gotra && (
                  <div><span className="text-amber-200/60">{isBn ? 'গোত্র:' : 'Gotra:'}</span> <span className="text-amber-300 font-semibold">{rel.gotra}</span></div>
                )}
                {rel.caste && (
                  <div><span className="text-amber-200/60">{isBn ? 'বর্ণ:' : 'Caste:'}</span> <span className="text-white">{rel.caste}</span></div>
                )}
                {rel.dietHabit && (
                  <div><span className="text-amber-200/60">{isBn ? 'আহার:' : 'Diet:'}</span> <span className="text-white">{rel.dietHabit === 'vegetarian' ? (isBn ? 'নিরামিষ' : 'Veg') : (isBn ? 'আমিষ' : 'Non-veg')}</span></div>
                )}
                {rel.praysFiveTimes && (
                  <div><span className="text-amber-200/60">{t.fields.praysFiveTimes}:</span> <span className="text-emerald-300 font-semibold">{t.fields[rel.praysFiveTimes as keyof typeof t.fields] || rel.praysFiveTimes}</span></div>
                )}
                {rel.quranRecitation && (
                  <div><span className="text-amber-200/60">{t.fields.quranRecitation}:</span> <span className="text-white">{t.fields[rel.quranRecitation as keyof typeof t.fields] || rel.quranRecitation}</span></div>
                )}
              </div>

              {/* Contact on Sidebar */}
              <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 border-b border-amber-500/30 pb-1 pt-3 font-serif flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                {t.sections.contact}
              </h3>
              <div className="space-y-1.5">
                <div><span className="text-amber-200/60">{t.fields.guardianName}:</span> <span className="text-white font-medium">{cont.guardianName || '—'}</span></div>
                <div><span className="text-amber-200/60">{t.fields.guardianRelation}:</span> <span className="text-white">{cont.guardianRelation || '—'}</span></div>
                {!priv.hideGuardianContact && (
                  <div><span className="text-amber-200/60">{t.fields.guardianPhone}:</span> <span className="text-amber-300 font-bold">{cont.guardianPhone || '—'}</span></div>
                )}
                {!priv.hideContact && cont.candidatePhone && (
                  <div><span className="text-amber-200/60">{t.fields.candidatePhone}:</span> <span className="text-white">{cont.candidatePhone}</span></div>
                )}
              </div>
            </div>
          </div>

          <div className="text-[10px] text-amber-300/40 text-center border-t border-amber-500/20 pt-3">
            বিয়েপরিচয়.com • Executive CV
          </div>
        </div>

        {/* Right Main Body */}
        <div className="flex-1 p-6 sm:p-8 space-y-6 bg-[#fffdfa]">
          
          {/* Header */}
          <div className="border-b border-amber-200/80 pb-4">
            <span className="text-xs uppercase font-bold tracking-widest text-amber-700 font-serif">
              {isGroom 
                ? (isBn ? '❖ প্রফেশনাল এক্সিকিউটিভ বায়োডাটা ❖' : '❖ Executive Groom Profile ❖') 
                : (isBn ? '❖ প্রফেশনাল এক্সিকিউটিভ বায়োডাটা ❖' : '❖ Executive Bride Profile ❖')}
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold font-serif text-stone-950 mt-1">
              {p.fullName || (isGroom ? (isBn ? 'পাত্রের নাম' : 'Groom Name') : (isBn ? 'পাত্রীর নাম' : 'Bride Name'))}
            </h1>
            <p className="text-sm font-bold text-brand-800 mt-0.5">
              {c.designation || c.occupation || 'Profession'} {c.organization && `• ${c.organization}`}
            </p>
          </div>

          {/* Career Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-950 flex items-center gap-2 mb-3 border-b-2 border-brand-800 pb-1 w-fit">
              <Briefcase className="w-4 h-4 text-brand-800" />
              {t.sections.career}
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm">
              <div><span className="font-semibold text-stone-700">{t.fields.occupation}:</span> {c.occupation || '—'}</div>
              {c.designation && <div><span className="font-semibold text-stone-700">{t.fields.designation}:</span> {c.designation}</div>}
              {c.organization && <div><span className="font-semibold text-stone-700">{t.fields.organization}:</span> {c.organization}</div>}
              {c.workLocation && <div><span className="font-semibold text-stone-700">{t.fields.workLocation}:</span> {c.workLocation}</div>}
              {c.monthlyIncome && <div><span className="font-semibold text-stone-700">{t.fields.monthlyIncome}:</span> {c.monthlyIncome}</div>}
              {c.careerDescription && <p className="text-xs text-stone-600 mt-1 bg-amber-50/60 p-2.5 rounded-lg border border-amber-200">{c.careerDescription}</p>}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-950 flex items-center gap-2 mb-3 border-b-2 border-brand-800 pb-1 w-fit">
              <GraduationCap className="w-4 h-4 text-brand-800" />
              {t.sections.education}
            </h2>
            {edu.highestDegree && (
              <div className="text-xs sm:text-sm font-semibold text-stone-800 mb-2">
                {isBn ? 'সর্বোচ্চ যোগ্যতা: ' : 'Highest Qualification: '} <span className="text-brand-900 font-bold bg-amber-100/70 px-2 py-0.5 rounded">{edu.highestDegree}</span>
              </div>
            )}
            {edu.details && edu.details.length > 0 && edu.details.some(d => d.degree || d.institution) && (
              <div className="space-y-2">
                {edu.details.map((item, idx) => (
                  item.degree || item.institution ? (
                    <div key={item.id || idx} className="text-xs border-l-2 border-brand-700 pl-3 py-1">
                      <div className="font-bold text-stone-900 text-sm">{item.degree}</div>
                      <div className="text-stone-600">{item.institution} {item.passingYear && `(${item.passingYear})`}</div>
                      {item.result && <div className="text-brand-900 font-semibold">{t.fields.result}: {item.result}</div>}
                    </div>
                  ) : null
                ))}
              </div>
            )}
          </div>

          {/* Family */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-950 flex items-center gap-2 mb-3 border-b-2 border-brand-800 pb-1 w-fit">
              <Users className="w-4 h-4 text-brand-800" />
              {t.sections.family}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs sm:text-sm">
              <div><span className="font-semibold text-stone-700">{t.fields.fatherName}:</span> {fam.fatherName || '—'} {fam.fatherStatus === 'deceased' ? lateFatherLabel : ''}</div>
              <div><span className="font-semibold text-stone-700">{t.fields.fatherOccupation}:</span> {fam.fatherOccupation || '—'}</div>
              <div><span className="font-semibold text-stone-700">{t.fields.motherName}:</span> {fam.motherName || '—'} {fam.motherStatus === 'deceased' ? lateMotherLabel : ''}</div>
              <div><span className="font-semibold text-stone-700">{t.fields.motherOccupation}:</span> {fam.motherOccupation || '—'}</div>
              <div><span className="font-semibold text-stone-700">{t.fields.totalBrothers}:</span> {fam.totalBrothers || '০'}</div>
              <div><span className="font-semibold text-stone-700">{t.fields.totalSisters}:</span> {fam.totalSisters || '০'}</div>
              {fam.familyBackgroundDescription && (
                <div className="sm:col-span-2 text-xs text-stone-600 mt-1">{fam.familyBackgroundDescription}</div>
              )}
            </div>
          </div>

          {/* Partner Expectations */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-brand-950 flex items-center gap-2 mb-3 border-b-2 border-brand-800 pb-1 w-fit">
              <Heart className="w-4 h-4 text-brand-800" />
              {t.sections.expectations}
            </h2>
            <div className="space-y-1.5 text-xs sm:text-sm text-stone-700 bg-amber-50/60 p-3 rounded-lg border border-amber-200">
              {(exp.expectedAgeMin || exp.expectedAgeMax) && (
                <div><span className="font-semibold">{t.fields.expectedAge}:</span> {exp.expectedAgeMin} - {exp.expectedAgeMax} {isBn ? 'বছর' : 'years'}</div>
              )}
              {exp.expectedEducation && <div><span className="font-semibold">{t.fields.expectedEducation}:</span> {exp.expectedEducation}</div>}
              {exp.religiousExpectations && <div><span className="font-semibold">{t.fields.religiousExpectations}:</span> {exp.religiousExpectations}</div>}
              {exp.generalExpectations && <div><span className="font-semibold">{t.fields.generalExpectations}:</span> {exp.generalExpectations}</div>}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
