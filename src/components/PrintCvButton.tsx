import { Download } from 'lucide-react';

export default function PrintCvButton() {
  return (
    <a
      href="/Naim-Hossain-CV.pdf"
      download="Naim-Hossain-CV.pdf"
      className="inline-flex items-center justify-center gap-2 px-5 min-h-[44px] rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
    >
      <Download className="w-4 h-4" />
      <span>Download PDF</span>
    </a>
  );
}
