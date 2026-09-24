import React, { useState, useEffect } from 'react';
import { BiodataData, TemplateId, Language } from '@/types/biodata';
import { 
  loadCurrentBiodata, saveCurrentBiodata, getInitialBiodata 
} from '@/lib/storage';
import { 
  sampleGroomData, sampleBrideData, sampleElegantBrideData, sampleEnglishProfileData 
} from '@/lib/samples';
import { translations } from '@/lib/translations';
import { StepIndicator } from './StepIndicator';
import { Step1Basic } from './steps/Step1Basic';
import { Step2Education } from './steps/Step2Education';
import { Step3Profession } from './steps/Step3Profession';
import { Step4Family } from './steps/Step4Family';
import { Step5Religion } from './steps/Step5Religion';
import { Step6Expectations } from './steps/Step6Expectations';
import { Step7ContactPhoto } from './steps/Step7ContactPhoto';
import { Step8TemplatePrivacy } from './steps/Step8TemplatePrivacy';
import { Step9ReviewExport } from './steps/Step9ReviewExport';
import { LivePreview } from './LivePreview';
import { ExportModal } from './ExportModal';
import { ShareModal } from './ShareModal';
import { triggerPrint } from '@/lib/exportUtils';
import { 
  ArrowLeft, ArrowRight, Save, RotateCcw, Sparkles, 
  Eye, Edit3, Globe, Download, Share2, Crown, User, UserCheck, Flame 
} from 'lucide-react';

export const BiodataBuilder: React.FC = () => {
  const [data, setData] = useState<BiodataData>(getInitialBiodata());
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [mobileTab, setMobileTab] = useState<'form' | 'preview'>('form');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [exportFormat, setExportFormat] = useState<'pdf' | 'image'>('pdf');
  const [saveAlert, setSaveAlert] = useState(false);

  // Load initial data on client mount
  useEffect(() => {
    const saved = loadCurrentBiodata();
    setData(saved);
  }, []);

  // Autosave on change
  useEffect(() => {
    saveCurrentBiodata(data);
    setSaveAlert(true);
    const t = setTimeout(() => setSaveAlert(false), 2000);
    return () => clearTimeout(t);
  }, [data]);

  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;

  const toggleLanguage = () => {
    setData((prev) => ({
      ...prev,
      language: prev.language === 'bn' ? 'en' : 'bn',
    }));
  };

  const handleLoadSampleGroom = () => {
    setData({ ...sampleGroomData, language: data.language });
  };

  const handleLoadSampleBride = () => {
    setData({ ...sampleBrideData, language: data.language });
  };

  const handleLoadSampleElegant = () => {
    setData({ ...sampleElegantBrideData, language: data.language });
  };

  const handleLoadSampleEnglish = () => {
    setData({ ...sampleEnglishProfileData, language: 'en' });
  };

  const handleReset = () => {
    if (window.confirm(isBn ? 'আপনি কি নিশ্চিত যে নতুন করে শুরু করতে চান?' : 'Are you sure you want to reset all data?')) {
      setData(getInitialBiodata());
      setCurrentStep(1);
    }
  };

  const handleTemplateChange = (tpl: TemplateId) => {
    setData((prev) => ({ ...prev, template: tpl }));
  };

  const handleOpenExportModal = (format: 'pdf' | 'image') => {
    setExportFormat(format);
    setIsExportModalOpen(true);
  };

  const handleOpenShareModal = () => {
    setIsShareModalOpen(true);
  };

  const nextStep = () => {
    if (currentStep < 9) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1Basic data={data} onChange={setData} />;
      case 2:
        return <Step2Education data={data} onChange={setData} />;
      case 3:
        return <Step3Profession data={data} onChange={setData} />;
      case 4:
        return <Step4Family data={data} onChange={setData} />;
      case 5:
        return <Step5Religion data={data} onChange={setData} />;
      case 6:
        return <Step6Expectations data={data} onChange={setData} />;
      case 7:
        return <Step7ContactPhoto data={data} onChange={setData} />;
      case 8:
        return <Step8TemplatePrivacy data={data} onChange={setData} />;
      case 9:
        return (
          <Step9ReviewExport
            data={data}
            onOpenExportModal={handleOpenExportModal}
            onOpenShareModal={handleOpenShareModal}
            onPrint={triggerPrint}
          />
        );
      default:
        return <Step1Basic data={data} onChange={setData} />;
    }
  };

  return (
    <div className="min-h-screen bg-matrimonial-pattern text-stone-800 pb-20 font-bangla">
      
      {/* Top Helper Toolbar (Non-sticky to avoid layer collisions on mobile) */}
      <div className="bg-[#fffdfa] border-b border-amber-200/80 py-2.5 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Quick Sample Fillers */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="hidden sm:inline text-xs font-bold text-amber-900">
              {isBn ? 'নমুনা বায়োডাটা:' : 'Samples:'}
            </span>
            <button
              type="button"
              onClick={handleLoadSampleGroom}
              className="px-2.5 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-brand-950 border border-amber-300/80 text-xs font-bold transition flex items-center gap-1 shadow-xs"
              title="পাত্রের বায়োডাটা নমুনা"
            >
              <User className="w-3.5 h-3.5 text-brand-800" />
              <span>{isBn ? 'নমুনা পাত্র' : 'Groom Sample'}</span>
            </button>
            <button
              type="button"
              onClick={handleLoadSampleBride}
              className="px-2.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-950 border border-rose-200/80 text-xs font-bold transition flex items-center gap-1 shadow-xs"
              title="পাত্রীর বায়োডাটা নমুনা"
            >
              <UserCheck className="w-3.5 h-3.5 text-rose-800" />
              <span>{isBn ? 'নমুনা পাত্রী' : 'Bride Sample'}</span>
            </button>
            <button
              type="button"
              onClick={handleLoadSampleElegant}
              className="px-2.5 py-1.5 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-950 border border-purple-200/80 text-xs font-bold transition flex items-center gap-1 shadow-xs"
              title="মার্জিত এলিগেন্ট বায়োডাটা নমুনা"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-700" />
              <span>{isBn ? 'এলিগেন্ট পাত্রী' : 'Elegant Bride'}</span>
            </button>
            <button
              type="button"
              onClick={handleLoadSampleEnglish}
              className="px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-950 border border-emerald-300/80 text-xs font-bold transition flex items-center gap-1 shadow-xs"
              title="English Profile Sample"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-700" />
              <span>English Profile</span>
            </button>
          </div>

          {/* Right Utilities (Reset, Language Toggle, Save Status) */}
          <div className="flex items-center gap-2.5 ml-auto">
            {saveAlert && (
              <span className="hidden md:flex items-center gap-1.5 text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                {t.app.savedAlert}
              </span>
            )}

            <button
              type="button"
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg bg-[#fffdfa] hover:bg-amber-50 text-stone-700 border border-amber-200 text-xs font-bold flex items-center gap-1 transition shadow-xs"
            >
              <Globe className="w-3.5 h-3.5 text-amber-700" />
              <span>{isBn ? 'English' : 'বাংলা'}</span>
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="p-1.5 text-stone-400 hover:text-brand-900 hover:bg-amber-50 rounded-lg transition"
              title={t.app.resetForm}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

      {/* 9-Step Visual Header */}
      <StepIndicator
        currentStep={currentStep}
        totalSteps={9}
        onStepClick={setCurrentStep}
        language={data.language}
      />

      {/* Mobile Tab Switcher (Docks neatly under Navbar at top-16 sm:top-20) */}
      <div className="lg:hidden bg-[#fffdfa]/95 backdrop-blur-md border-b border-amber-200 px-4 py-2 sticky top-16 sm:top-20 z-30 flex items-center gap-2 shadow-xs">
        <button
          type="button"
          onClick={() => setMobileTab('form')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
            mobileTab === 'form'
              ? 'bg-brand-950 text-amber-200 shadow-sm border border-amber-400/30'
              : 'bg-amber-50/80 text-stone-700 hover:bg-amber-100'
          }`}
        >
          <Edit3 className="w-4 h-4" />
          <span>{isBn ? 'ফরম পূরণ' : 'Edit Form'}</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('preview')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition ${
            mobileTab === 'preview'
              ? 'bg-brand-950 text-amber-200 shadow-sm border border-amber-400/30'
              : 'bg-amber-50/80 text-stone-700 hover:bg-amber-100'
          }`}
        >
          <Eye className="w-4 h-4" />
          <span>{isBn ? 'লাইভ প্রিভিউ' : 'Live Preview'}</span>
        </button>
      </div>

      {/* Main Split-Screen Workspace */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Multi-Step Form (Hidden on mobile if preview tab active) */}
          <div
            className={`lg:col-span-6 bg-[#fffdfa] rounded-3xl border-2 border-amber-300/70 shadow-royal-card p-6 sm:p-8 space-y-6 ${
              mobileTab === 'preview' ? 'hidden lg:block' : 'block'
            }`}
          >
            {renderCurrentStep()}

            {/* Navigation Bottom Controls */}
            <div className="flex items-center justify-between pt-6 border-t border-amber-200/80">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-2.5 rounded-xl border border-amber-300 bg-[#fffdfa] text-stone-800 hover:bg-amber-50 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs transition"
                >
                  <ArrowLeft className="w-4 h-4 text-amber-700" />
                  <span>{t.buttons.prev}</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 9 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="btn-shimmer px-7 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-gold-glow border border-amber-300/40 transition ml-auto"
                >
                  <span>{t.buttons.next}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => handleOpenExportModal('pdf')}
                  className="btn-shimmer px-7 py-2.5 rounded-xl text-white text-xs sm:text-sm font-bold flex items-center gap-2 shadow-gold-glow border border-amber-300/40 transition ml-auto"
                >
                  <Download className="w-4 h-4 text-amber-200" />
                  <span>{t.buttons.exportPdf}</span>
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Live Real-time Preview (Kept in DOM so PDF export works from Form tab too!) */}
          <div
            className={`lg:col-span-6 sticky top-24 h-[calc(100dvh-140px)] sm:h-[calc(100vh-120px)] ${
              mobileTab === 'form' 
                ? 'invisible fixed -left-[9999px] top-0 pointer-events-none lg:visible lg:static lg:block' 
                : 'block'
            }`}
          >
            <LivePreview
              data={data}
              onTemplateChange={handleTemplateChange}
              onOpenExportModal={handleOpenExportModal}
              onOpenShareModal={handleOpenShareModal}
            />
          </div>

        </div>
      </div>

      {/* Export Modal */}
      <ExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        data={data}
        initialFormat={exportFormat}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        data={data}
      />

    </div>
  );
};
