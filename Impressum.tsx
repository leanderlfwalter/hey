
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface ImpressumProps {
  onBack: () => void;
}

const Impressum: React.FC<ImpressumProps> = ({ onBack }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 font-semibold mb-8 hover:gap-3 transition-all"
      >
        <ArrowLeft size={20} />
        Zurück zur Startseite
      </button>

      <h1 className="text-4xl font-bold text-slate-900 mb-12">Impressum</h1>

      <div className="space-y-12 text-slate-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Angaben gemäß § 5 TMG</h2>
          <p className="font-semibold">Kieferorthopädische Gemeinschaftspraxis</p>
          <p>Dr. med. dent. Katrin Walter & Dr. med. dent. Frank Walter</p>
          <p>Breitscheidstraße 37</p>
          <p>06886 Lutherstadt Wittenberg</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Kontakt</h2>
          <p>Telefon: 03491 409390</p>
          <p>E-Mail: info@kfo-walter-wittenberg.de</p>
          <p className="text-sm text-slate-500 mt-2 italic">(Hinweis: Dies ist eine Beispieldomain für Demonstrationszwecke.)</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p className="mb-2"><span className="font-semibold">Gesetzliche Berufsbezeichnung:</span> Fachzahnärzte für Kieferorthopädie</p>
          <p className="mb-2"><span className="font-semibold">Staat, in dem die Berufsbezeichnung verliehen wurde:</span> Bundesrepublik Deutschland</p>
          
          <div className="mt-4 space-y-4">
            <div>
              <p className="font-semibold text-slate-900">Zuständige Kammer:</p>
              <p>Zahnärztekammer Sachsen-Anhalt</p>
              <p>Große Diesdorfer Straße 162</p>
              <p>39110 Magdeburg</p>
              <a href="https://www.zaek-sa.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.zaek-sa.de</a>
            </div>

            <div>
              <p className="font-semibold text-slate-900">Zuständige Aufsichtsbehörde (KZV):</p>
              <p>Kassenzahnärztliche Vereinigung Sachsen-Anhalt</p>
              <p>Doctor-Eisenbart-Ring 1</p>
              <p>39120 Magdeburg</p>
              <a href="https://www.kzv-sa.de" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">www.kzv-sa.de</a>
            </div>
          </div>

          <div className="mt-6">
            <p className="font-semibold text-slate-900 mb-2">Es gelten folgende berufsrechtliche Regelungen:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Zahnheilkundegesetz</li>
              <li>Heilberufegesetz des Landes Sachsen-Anhalt</li>
              <li>Berufsordnung der Zahnärztekammer Sachsen-Anhalt</li>
              <li>Gebührenordnung für Zahnärzte (GOZ)</li>
            </ul>
            <p className="mt-2 text-xs text-slate-500 italic">Regelungen einsehbar unter: <a href="https://www.zaek-sa.de/patienten/rechtliches/" target="_blank" className="underline">https://www.zaek-sa.de/patienten/rechtliches/</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Redaktionell verantwortlich</h2>
          <p>Dr. med. dent. Katrin Walter</p>
          <p>Breitscheidstraße 37</p>
          <p>06886 Lutherstadt Wittenberg</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p className="text-sm">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <div className="pt-8 border-t border-slate-100 text-xs text-slate-400">
          Stand: {new Date().toLocaleDateString('de-DE')}
        </div>
      </div>
    </div>
  );
};

export default Impressum;
