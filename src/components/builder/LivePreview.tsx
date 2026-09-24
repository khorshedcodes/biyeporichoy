import React, { useState, useEffect, useRef } from 'react';
import { BiodataData, TemplateId } from '@/types/biodata';
import { TemplateRenderer } from '../templates/TemplateRenderer';
import { translations } from '@/lib/translations';
import { 
  ZoomIn, ZoomOut, RotateCcw, Eye, Download, Share2, 
  Palette, Maximize2, Minimize2, Crown, Sparkles, Smartphone, Monitor
} from 'lucide-react';

interface LivePreviewProps {
  data: BiodataData;
  onTemplateChange: (template: TemplateId) => void;
  onOpenExportModal: (format: 'pdf' | 'image') => void;
  onOpenShareModal: () => void;
}

export const LivePreview: React.FC<LivePreviewProps> = ({
  data,
  onTemplateChange,
  onOpenExportModal,
  onOpenShareModal,
}) => {
  const [zoom, setZoom] = useState<number>(100);
  const [fitMode, setFitMode] = useState<'fit' | 'actual'>('fit');
  const [containerWidth, setContainerWidth] = useState<number>(800);
  const [contentHeight, setContentHeight] = useState<number>(1200);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;

  useEffect(() => {
    const measureContainer = () => {
      if (scrollContainerRef.current) {
        setContainerWidth(scrollContainerRef.current.clientWidth);
      }
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    };
    measureContainer();
    window.addEventListener('resize', measureContainer);
    return () => window.removeEventListener('resize', measureContainer);
  }, [data]);

  // Periodic check after font/image load
  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) {
        setContentHeight(contentRef.current.offsetHeight);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [data]);

  const isMobileView = containerWidth < 768;
  const autoFitScale = isMobileView
    ? Math.min(Math.max((containerWidth - 28) / 800, 0.35), 1)
    : 1;

  const effectiveScale = (fitMode === 'fit' && isMobileView)
    ? autoFitScale
    : zoom / 100;

  const handleZoomIn = () => {
    setFitMode('actual');
    setZoom((prev) => Math.min(prev + 10, 130));
  };

  const handleZoomOut = () => {
    setFitMode('actual');
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handleResetZoom = () => {
    setFitMode('fit');
    setZoom(100);
  };

  const templates: { id: TemplateId; label: string }[] = [
    { id: 'classic', label: isBn ? 'ঐতিহ্যবাহী' : 'Classic' },
    { id: 'royal', label: isBn ? 'রয়েল গোল্ড' : 'Royal' },
    { id: 'modern', label: isBn ? 'মডার্ন' : 'Modern' },
    { id: 'professional', label: isBn ? 'এক্সিকিউটিভ' : 'Executive' },
    { id: 'elegant', label: isBn ? 'এলিগেন্ট' : 'Elegant' },
  ];

  const scaledWidth = Math.ceil(800 * effectiveScale);
  const scaledHeight = Math.ceil(contentHeight * effectiveScale);

  return (
    <div className="flex flex-col h-full bg-[#f8f5ee] rounded-3xl border border-amber-300/70 shadow-xl overflow-hidden font-bangla">
      {/* Top Preview Control Toolbar */}
      <div className="bg-[#fffdfa] px-3.5 py-2.5 border-b border-amber-200/80 flex flex-wrap items-center justify-between gap-2 z-10 shadow-xs">
        
        {/* Template Quick Switcher Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
          {templates.map((tpl) => (
            <button
              key={tpl.id}
              type="button"
              onClick={() => onTemplateChange(tpl.id)}
              className={`px-3 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                data.template === tpl.id
                  ? 'bg-brand-950 text-amber-200 shadow-sm border border-amber-400/40'
                  : 'bg-amber-50/80 text-stone-700 hover:bg-amber-100'
              }`}
            >
              {tpl.label}
            </button>
          ))}
        </div>

        {/* Zoom Controls & Quick Action Buttons */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Mobile Fit/Actual Toggle */}
          {isMobileView && (
            <button
              type="button"
              onClick={() => setFitMode(fitMode === 'fit' ? 'actual' : 'fit')}
              className="px-2.5 py-1 rounded-lg bg-amber-100 text-brand-950 border border-amber-300/80 text-xs font-bold flex items-center gap-1 shadow-xs"
            >
              {fitMode === 'fit' ? (
                <>
                  <Maximize2 className="w-3 h-3 text-amber-800" />
                  <span>১০০% জুম</span>
                </>
              ) : (
                <>
                  <Minimize2 className="w-3 h-3 text-amber-800" />
                  <span>স্ক্রিন ফিট</span>
                </>
              )}
            </button>
          )}

          {/* Desktop Zoom Controls */}
          <div className="hidden sm:flex items-center bg-amber-50 rounded-xl p-0.5 border border-amber-200 text-stone-700">
            <button
              type="button"
              onClick={handleZoomOut}
              className="p-1 hover:text-brand-950 rounded"
              title="Zoom out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono px-1.5 font-bold text-amber-950">
              {Math.round(effectiveScale * 100)}%
            </span>
            <button
              type="button"
              onClick={handleZoomIn}
              className="p-1 hover:text-brand-950 rounded"
              title="Zoom in"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleResetZoom}
              className="p-1 hover:text-brand-950 rounded"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            type="button"
            onClick={() => onOpenExportModal('pdf')}
            className="btn-shimmer px-3.5 py-1.5 rounded-xl text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition"
          >
            <Download className="w-3.5 h-3.5 text-amber-200" />
            <span>PDF</span>
          </button>
          <button
            type="button"
            onClick={onOpenShareModal}
            className="px-3 py-1.5 rounded-xl bg-brand-950 hover:bg-brand-900 text-amber-200 text-xs font-bold flex items-center gap-1.5 shadow-sm border border-amber-400/30 transition"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-300" />
            <span className="hidden sm:inline">{isBn ? 'শেয়ার' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Live Render Container with Scalable Zoom */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-auto p-2 sm:p-6 flex justify-center items-start bg-stone-200/50"
      >
        <div
          className="relative transition-all duration-200 flex-shrink-0"
          style={{
            width: `${scaledWidth}px`,
            height: contentHeight ? `${scaledHeight}px` : 'auto',
            overflow: 'hidden',
          }}
        >
          <div
            ref={contentRef}
            className="origin-top-left transition-transform duration-200"
            style={{ 
              width: '800px',
              transform: `scale(${effectiveScale})`,
            }}
          >
            <TemplateRenderer data={data} />
          </div>
        </div>
      </div>

      {/* Live sync indicator footer */}
      <div className="bg-[#fffdfa]/95 backdrop-blur-sm px-4 py-2 border-t border-amber-200 text-center text-[11px] text-stone-600 flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>{isBn ? 'লাইভ প্রিভিউ রিয়েল-টাইম সক্রিয়' : 'Real-time Live Preview Active'}</span>
        </span>
        <span className="text-amber-800 font-semibold">A4 ফরম্যাট • প্রিন্ট ও ডাউনলোড রেডি</span>
      </div>
    </div>
  );
};
