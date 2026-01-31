
import React from 'react';

interface FooterProps {
  onShowImpressum: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowImpressum }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-blue-900 mb-1">
              KFO <span className="text-blue-600">Walter</span>
            </div>
            <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Dr. med. dent. Walter & Walter. Alle Rechte vorbehalten.</p>
          </div>

          <div className="flex gap-8 text-sm font-medium text-slate-600">
            <button 
              onClick={onShowImpressum}
              className="hover:text-blue-600 transition-colors"
            >
              Impressum
            </button>
            <button 
              onClick={onShowImpressum} 
              className="hover:text-blue-600 transition-colors"
            >
              Datenschutz
            </button>
            <a href="#" className="hover:text-blue-600 transition-colors">Cookie-Einstellungen</a>
          </div>

          <div className="flex items-center gap-4">
             <div className="p-2 bg-white border border-slate-200 rounded-lg shadow-sm">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Logo_Zahn%C3%A4rztekammer.png" alt="Zahnärztekammer" className="h-8 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
             </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-[10px] text-slate-400 leading-relaxed max-w-2xl mx-auto uppercase tracking-wider">
          Berufsbezeichnung: Fachzahnärzte für Kieferorthopädie (verliehen in der Bundesrepublik Deutschland). Zuständige Kammer: Zahnärztekammer Sachsen-Anhalt.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
