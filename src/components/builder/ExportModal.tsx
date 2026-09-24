import React, { useState } from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { exportToPdf, exportToImage, triggerPrint } from '@/lib/exportUtils';
import { 
  X, Download, FileText, Image as ImageIcon, CheckCircle2, 
  Loader2, Printer, Sparkles 
} from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: BiodataData;
  initialFormat?: 'pdf' | 'image';
}

export const ExportModal: React.FC<ExportModalProps> = ({
  isOpen,
  onClose,
  data,
  initialFormat = 'pdf',
}) => {
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;

  const getCleanFileName = (ext: string) => {
    const name = data.personal.fullName || (data.personal.biodataType === 'male' ? 'groom' : 'bride');
    const safeName = name.trim().replace(/[\s/\\?%*:|"<>]/g, '-');
    return `BiyePorichoy-${safeName}-Biodata`;
  };

  const handleDownloadPdf = async () => {
    try {
      setLoadingPdf(true);
      setSuccessMsg(null);
      await exportToPdf('biodata-render-target', {
        fileName: getCleanFileName('pdf'),
      });
      setSuccessMsg(isBn ? 'PDF সফলভাবে ডাউনলোড হয়েছে!' : 'PDF downloaded successfully!');
    } catch (err) {
      console.error(err);
      alert(isBn ? 'PDF তৈরিতে সমস্যা হয়েছে। দয়া করে পুনরায় চেষ্টা করুন।' : 'Failed to export PDF.');
    } finally {
      setLoadingPdf(false);
    }
  };

  const handleDownloadImage = async () => {
    try {
      setLoadingImage(true);
      setSuccessMsg(null);
      await exportToImage('biodata-render-target', {
        fileName: getCleanFileName('png'),
        scale: 2.5,
      });
      setSuccessMsg(isBn ? 'ছবি সফলভাবে ডাউনলোড হয়েছে!' : 'Image downloaded successfully!');
    } catch (err) {
      console.error(err);
      alert(isBn ? 'ছবি তৈরিতে সমস্যা হয়েছে। দয়া করে পুনরায় চেষ্টা করুন।' : 'Failed to export Image.');
    } finally {
      setLoadingImage(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden border border-stone-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            <h3 className="font-bold text-lg font-serif">{t.exportModal.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-stone-600">
            {t.exportModal.subtitle}
          </p>

          {successMsg && (
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-3 rounded-xl flex items-center gap-2 text-xs font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Export Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* PDF Option */}
            <div className="p-4 rounded-xl border-2 border-rose-200 bg-rose-50/30 flex flex-col justify-between space-y-3">
              <div>
                <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-2">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">{t.buttons.exportPdf}</h4>
                <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                  {t.exportModal.pdfDesc}
                </p>
              </div>

              <button
                type="button"
                onClick={handleDownloadPdf}
                disabled={loadingPdf}
                className="w-full py-2 px-3 rounded-lg bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                {loadingPdf ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{t.exportModal.generatingPdf}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>{isBn ? 'ডাউনলোড PDF' : 'Download PDF'}</span>
                  </>
                )}
              </button>
            </div>

            {/* PNG Image Option */}
            <div className="p-4 rounded-xl border-2 border-emerald-200 bg-emerald-50/30 flex flex-col justify-between space-y-3">
              <div>
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2">
                  <ImageIcon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-stone-900 text-sm">{t.buttons.exportImage}</h4>
                <p className="text-[11px] text-stone-500 mt-1 leading-relaxed">
                  {t.exportModal.imageDesc}
                </p>
              </div>

              <button
                type="button"
                onClick={handleDownloadImage}
                disabled={loadingImage}
                className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition shadow-sm"
              >
                {loadingImage ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>{t.exportModal.generatingImage}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>{isBn ? 'ডাউনলোড PNG' : 'Download Image'}</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Quick Print Footer */}
          <div className="pt-2 text-center border-t border-stone-100">
            <button
              type="button"
              onClick={() => {
                onClose();
                triggerPrint();
              }}
              className="text-xs text-stone-500 hover:text-stone-800 font-medium inline-flex items-center gap-1.5 transition"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isBn ? 'সরাসরি ব্রাউজার প্রিন্ট ডায়ালগ ওপেন করুন' : 'Open Browser Print Dialog'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
