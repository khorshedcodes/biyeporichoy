import React from 'react';
import { translations } from '@/lib/translations';
import { Language } from '@/types/biodata';
import { Check, Sparkles } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  onStepClick: (step: number) => void;
  language: Language;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  currentStep,
  totalSteps = 9,
  onStepClick,
  language,
}) => {
  const isBn = language === 'bn';
  const t = isBn ? translations.bn : translations.en;

  const stepTitles = [
    t.sections.basic,
    t.sections.education,
    t.sections.career,
    t.sections.family,
    t.sections.religion,
    t.sections.expectations,
    t.sections.contact,
    t.sections.template,
    t.sections.preview,
  ];

  const currentTitle = stepTitles[currentStep - 1] || '';

  return (
    <div className="w-full bg-[#fffdfa] border-b border-amber-200/80 shadow-xs font-bangla">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Mobile Step Status Header */}
        <div className="flex sm:hidden items-center justify-between text-xs mb-2">
          <span className="font-bold text-brand-950 flex items-center gap-1.5">
            <span className="w-5 h-5 rounded-full bg-brand-900 text-amber-300 text-[10px] flex items-center justify-center font-bold">
              {currentStep}
            </span>
            <span>{currentTitle}</span>
          </span>
          <span className="text-amber-800 font-semibold text-[11px]">
            {currentStep} / {totalSteps}
          </span>
        </div>

        {/* Horizontal scrollable step tracker with gold & crimson nodes */}
        <div className="flex items-center overflow-x-auto no-scrollbar gap-1.5 sm:gap-2.5 py-1">
          {stepTitles.map((title, idx) => {
            const stepNum = idx + 1;
            const isCurrent = stepNum === currentStep;
            const isCompleted = stepNum < currentStep;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => onStepClick(stepNum)}
                className={`flex items-center gap-1.5 sm:gap-2 whitespace-nowrap px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-200 flex-shrink-0 ${
                  isCurrent
                    ? 'bg-brand-950 text-amber-200 ring-2 ring-amber-400/80 ring-offset-1 font-bold shadow-sm'
                    : isCompleted
                    ? 'bg-amber-100 text-brand-950 border border-amber-300/80 hover:bg-amber-200/70'
                    : 'text-stone-600 hover:bg-amber-50 hover:text-stone-900'
                }`}
              >
                <span
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-bold ${
                    isCurrent
                      ? 'bg-amber-400 text-brand-950'
                      : isCompleted
                      ? 'bg-brand-900 text-amber-200'
                      : 'bg-stone-200 text-stone-600'
                  }`}
                >
                  {isCompleted ? <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 stroke-[3]" /> : stepNum}
                </span>
                <span className="hidden md:inline">{title}</span>
                <span className="md:hidden text-[11px]">{title.split('.')[1] || title}</span>
              </button>
            );
          })}
        </div>

        {/* Shimmering Gold & Crimson Progress Bar */}
        <div className="w-full bg-amber-100/90 h-1.5 rounded-full mt-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-brand-900 via-amber-600 to-amber-400 h-full transition-all duration-300 rounded-full"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};
