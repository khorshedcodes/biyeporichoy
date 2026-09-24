import React from 'react';
import { BiodataData } from '@/types/biodata';
import { translations } from '@/lib/translations';
import { 
  Download, Share2, FileText, Image as ImageIcon, CheckCircle2, 
  Printer, Sparkles, QrCode 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface StepProps {
  data: BiodataData;
  onOpenExportModal: (format: 'pdf' | 'image') => void;
  onOpenShareModal: () => void;
  onPrint: () => void;
}

export const Step9ReviewExport: React.FC<StepProps> = ({
  data,
  onOpenExportModal,
  onOpenShareModal,
  onPrint,
}) => {
  const isBn = data.language === 'bn';
  const t = isBn ? translations.bn : translations.en;

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  React.useEffect(() => {
    triggerCelebration();
  }, []);

  return (
    <div className="space-y-6">
      <div className="text-center bg-gradient-to-br from-rose-50 via-white to-amber-50 rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-3">
        <div className="w-12 h-12 rounded-full bg-rose-600 text-white mx-auto flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h2 className="text-2xl font-bold text-stone-900 font-serif">
          {isBn ? 'মাশাআল্লাহ! আপনার বায়োডাটা সম্পন্ন হয়েছে' : 'Alhamdulillah! Your Biodata is Ready'}
        </h2>
        <p className="text-sm text-stone-600 max-w-md mx-auto">
          {isBn
            ? 'ডান পাশের লাইভ প্রিভিউতে বায়োডাটার চূড়ান্ত রূপ দেখে নিন। নিচে আপনার সুবিধাজনক মাধ্যমে ডাউনলোড বা শেয়ার করুন।'
            : 'Review your live preview on the right. Download in high quality or share a secure private link below.'}
        </p>
      </div>

      {/* Export Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
        {/* PDF Download Card */}
        <div 
          onClick={() => onOpenExportModal('pdf')}
          className="p-5 rounded-xl border-2 border-rose-200 bg-white hover:border-rose-600 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 text-base">{t.buttons.exportPdf}</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              {isBn
                ? 'প্রিন্ট এবং ফরমাল প্রস্তাব পাঠানোর জন্য A4 স্ট্যান্ডার্ড ভেক্টর PDF।'
                : 'Print-ready standard A4 PDF for formal marriage proposals.'}
            </p>
          </div>
          <button
            type="button"
            className="mt-4 w-full py-2 px-3 rounded-lg bg-rose-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 group-hover:bg-rose-700 transition shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{isBn ? 'PDF ডাউনলোড করুন' : 'Download PDF'}</span>
          </button>
        </div>

        {/* WhatsApp Image Export Card */}
        <div 
          onClick={() => onOpenExportModal('image')}
          className="p-5 rounded-xl border-2 border-emerald-200 bg-white hover:border-emerald-600 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
        >
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ImageIcon className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-stone-900 text-base">{t.buttons.exportImage}</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              {isBn
                ? 'হোয়াটসঅ্যাপ, মেসেঞ্জার বা ইমোতে সহজে পাঠানোর উপযোগী ক্রিস্প ইমেজ।'
                : 'Crisp image optimized for WhatsApp & Messenger sharing.'}
            </p>
          </div>
          <button
            type="button"
            className="mt-4 w-full py-2 px-3 rounded-lg bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 group-hover:bg-emerald-700 transition shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>{isBn ? 'ছবি ডাউনলোড করুন' : 'Download PNG'}</span>
          </button>
        </div>

        {/* Private Shareable Link Card */}
        <div 
          onClick={onOpenShareModal}
          className="p-5 rounded-xl border-2 border-indigo-200 bg-white hover:border-indigo-600 hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between sm:col-span-2"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-base">{t.buttons.generateLink}</h3>
              <p className="text-xs text-stone-500 max-w-xl">
                {isBn
                  ? 'একটি সিকিউর ও প্রাইভেট লিঙ্ক তৈরি করুন। যাকে লিঙ্ক দিবেন সে যেকোনো মোবাইল থেকে সহজে দেখতে পারবে।'
                  : 'Generate a secure private link that can be viewed seamlessly across any mobile or desktop device.'}
              </p>
            </div>
            <button
              type="button"
              className="py-2.5 px-5 rounded-lg bg-indigo-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 group-hover:bg-indigo-700 transition whitespace-nowrap shadow-sm"
            >
              <Share2 className="w-4 h-4" />
              <span>{isBn ? 'প্রাইভেট লিঙ্ক পান' : 'Get Shareable Link'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Print Direct Option */}
      <div className="pt-2 flex justify-center">
        <button
          type="button"
          onClick={onPrint}
          className="text-xs text-stone-600 hover:text-rose-600 font-medium flex items-center gap-1.5 transition"
        >
          <Printer className="w-4 h-4" />
          <span>{isBn ? 'সরাসরি প্রিন্টার দিয়ে প্রিন্ট করুন (Print)' : 'Print directly via browser'}</span>
        </button>
      </div>
    </div>
  );
};
