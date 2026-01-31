
import React from 'react';
import { ArrowLeft, Mail, Briefcase, GraduationCap, Users, CheckCircle2 } from 'lucide-react';

const teamImg = "https://raw.githubusercontent.com/leanderlfwalter/Website-Dentist/main/praxisteam.jpg";

interface JobsProps {
  onBack?: () => void;
}

const Jobs: React.FC<JobsProps> = ({ onBack }) => {
  return (
    <section className="min-h-screen pt-24 pb-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 font-semibold mb-10 hover:gap-3 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </button>
        )}

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Users size={18} />
              <span>Karriere bei KFO Walter</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Wir suchen <span className="text-blue-600">Verstärkung</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Sie suchen eine neue Herausforderung in einem familiären und professionellen Umfeld? 
              Wir sind eine etablierte kieferorthopädische Praxis in Lutherstadt Wittenberg und wachsen stetig weiter. 
              Werden Sie Teil unseres Teams!
            </p>
             <div className="bg-white p-6 rounded-2xl border border-blue-100 shadow-sm inline-block w-full md:w-auto">
                <p className="font-semibold text-slate-900 mb-2">Ihre Bewerbung bitte an:</p>
                <a href="mailto:ft_walter@yahoo.com" className="flex items-center gap-2 text-blue-600 font-bold hover:underline text-lg break-all">
                  <Mail size={20} className="shrink-0" />
                  ft_walter@yahoo.com
                </a>
             </div>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] blur-2xl -z-10"></div>
             <img 
              src={teamImg} 
              alt="Das Team der Kieferorthopädie Walter" 
              className="w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-8">
          
          {/* Job 1: Zahnlabor */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                   <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Vollzeit / Teilzeit</span>
                   <span className="text-slate-400 text-sm flex items-center gap-1"><Briefcase size={14}/> Ab sofort</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Zahnlabor Angestellte/r (m/w/d)</h2>
                <p className="text-slate-600 mb-6 max-w-2xl">
                  Für unser praxiseigenes Labor suchen wir eine engagierte Persönlichkeit mit Freude an präziser Arbeit. 
                  Idealerweise verfügen Sie über Erfahrung in der Herstellung kieferorthopädischer Apparaturen oder haben eine zahntechnische Ausbildung.
                </p>
                <h3 className="font-semibold text-slate-900 mb-3">Das erwartet Sie:</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 size={18} className="text-blue-500 shrink-0"/> Arbeit im modernen Praxislabor</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 size={18} className="text-blue-500 shrink-0"/> Herstellung von KFO-Geräten</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 size={18} className="text-blue-500 shrink-0"/> Familiäres Arbeitsklima</li>
                </ul>
              </div>
              <a href="mailto:ft_walter@yahoo.com?subject=Bewerbung%20Zahnlabor" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 shrink-0 md:w-auto w-full">
                Jetzt bewerben <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Job 2: Ausbildung ZFA */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all">
            <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
               <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                   <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Ausbildung</span>
                   <span className="text-slate-400 text-sm flex items-center gap-1"><GraduationCap size={14}/> Ausbildungsstart 2024/2025</span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Ausbildung ZFA (m/w/d)</h2>
                <p className="text-slate-600 mb-6 max-w-2xl">
                  Du suchst einen spannenden Beruf mit Zukunft? Starte Deine Karriere bei uns! 
                  Wir bilden Dich zur/zum Zahnmedizinischen Fachangestellten aus – mit Schwerpunkt Kieferorthopädie.
                </p>
                <h3 className="font-semibold text-slate-900 mb-3">Das bieten wir Dir:</h3>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 size={18} className="text-blue-500 shrink-0"/> Eine fundierte und abwechslungsreiche Ausbildung</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 size={18} className="text-blue-500 shrink-0"/> Ein herzliches Team, das Dich unterstützt</li>
                  <li className="flex items-center gap-2 text-slate-700"><CheckCircle2 size={18} className="text-blue-500 shrink-0"/> Gute Übernahmechancen</li>
                </ul>
              </div>
              <a href="mailto:ft_walter@yahoo.com?subject=Bewerbung%20Ausbildung%20ZFA" className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold transition-colors inline-flex items-center justify-center gap-2 shrink-0 md:w-auto w-full">
                Jetzt bewerben <Mail size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Jobs;
