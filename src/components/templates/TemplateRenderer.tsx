import React from 'react';
import { BiodataData } from '@/types/biodata';
import { ClassicBanglaTemplate } from './ClassicBanglaTemplate';
import { RoyalTemplate } from './RoyalTemplate';
import { ModernTemplate } from './ModernTemplate';
import { ProfessionalTemplate } from './ProfessionalTemplate';
import { ElegantTemplate } from './ElegantTemplate';

interface TemplateRendererProps {
  data: BiodataData;
  isPrintMode?: boolean;
}

export const TemplateRenderer: React.FC<TemplateRendererProps> = ({ data, isPrintMode = false }) => {
  const templateId = data.template || 'classic';

  const renderTemplate = () => {
    switch (templateId) {
      case 'royal':
        return <RoyalTemplate data={data} isPrintMode={isPrintMode} />;
      case 'modern':
        return <ModernTemplate data={data} isPrintMode={isPrintMode} />;
      case 'professional':
        return <ProfessionalTemplate data={data} isPrintMode={isPrintMode} />;
      case 'elegant':
        return <ElegantTemplate data={data} isPrintMode={isPrintMode} />;
      case 'classic':
      default:
        return <ClassicBanglaTemplate data={data} isPrintMode={isPrintMode} />;
    }
  };

  return (
    <div id="biodata-render-target" className="relative w-full">
      {/* Optional Watermark */}
      {data.privacy?.showWatermark && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20 overflow-hidden select-none opacity-[0.08] transform -rotate-45">
          <div className="text-center font-bold text-4xl sm:text-7xl uppercase tracking-widest text-stone-900 leading-tight">
            BIYEPORICHOY.COM<br />
            বিয়েপরিচয়
          </div>
        </div>
      )}

      {renderTemplate()}
    </div>
  );
};
