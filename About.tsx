
import React from 'react';
import { ArrowLeft, History, Users2, Heart, Award, Calendar } from 'lucide-react';

const teamImg = "https://raw.githubusercontent.com/leanderlfwalter/Website-Dentist/main/praxisteam.jpg";

interface AboutProps {
  onBack?: () => void;
  isFullPage?: boolean;
}

const About: React.FC<AboutProps> = ({ onBack, isFullPage = false }) => {
  return (
    <section id="ueber-uns" className={`py-16 bg-white overflow-hidden ${isFullPage ? 'min-h-screen pt-24' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {isFullPage && onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-600 font-semibold mb-10 hover:gap-3 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </button>
        )}

        {/* Hero Section of the Page */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Calendar size={18} />
              <span>Tradition & Innovation seit 2001</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ihre Fachzahnärzte für <br />
              <span className="text-blue-600">Kieferorthopädie</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Die Kieferorthopädische Praxis Walter wurde im Jahr 2001 von Dr. med. dent. Katrin Walter und Dr. med. dent. Frank Walter in Lutherstadt Wittenberg gegründet. Seit über 20 Jahren widmen wir uns mit Leidenschaft der Korrektur von Zahn- und Kieferfehlstellungen.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unsere langjährige Erfahrung ermöglicht es uns, für jeden Patienten – ob Kind, Jugendlicher oder Erwachsener – das optimal passende Behandlungskonzept zu finden. Dabei setzen wir auf bewährte Methoden kombiniert mit modernster digitaler Kieferorthopädie.
            </p>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] blur-2xl -z-10"></div>
            <img 
              src={teamImg} 
              alt="Das Team der Kieferorthopädie Walter in blauen Praxisshirts, freundlich lächelnd vor einem festlich geschmückten Weihnachtsbaum in den Praxisräumen." 
              className="w-full h-auto rounded-[2rem] shadow-2xl border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Team Description Section */}
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border border-slate-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Users2 className="text-blue-600" size={32} />
                  Unser Team
                </h2>
                <div className="h-1.5 w-20 bg-blue-600 rounded-full mb-6"></div>
                <p className="text-slate-500 font-medium italic">
                  "Ein eingespieltes Team für Ihr schönstes Lächeln."
                </p>
              </div>
              
              <div className="md:w-2/3 space-y-6 text-slate-700 leading-relaxed">
                <p>
                  Auf unserem Teamfoto präsentieren wir uns als starke Gemeinschaft. Unsere Mitarbeiterinnen und Mitarbeiter, erkennbar an den charakteristischen blauen Praxis-Poloshirts, sind das Gesicht und die Seele unserer Praxis. 
                </p>
                <p>
                  Das Bild entstand in einer gemütlichen Atmosphäre vor unserem Weihnachtsbaum und spiegelt den familiären und herzlichen Umgang wider, den wir nicht nur untereinander, sondern vor allem auch mit unseren Patienten pflegen. 
                </p>
                <p>
                  Mit neun engagierten Teammitgliedern sorgen wir täglich dafür, dass Sie sich bei uns wohlfühlen und fachlich bestens betreut werden. Jedes Lächeln auf diesem Foto steht für unsere Freude an der Arbeit und unseren Anspruch an höchste Qualität.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy / Facts */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="flex gap-4 p-6 hover:bg-white hover:shadow-lg rounded-2xl transition-all border border-transparent hover:border-slate-100">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
              <History size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-2">Gegründet 2001</h4>
              <p className="text-sm text-slate-500">Über zwei Jahrzehnte kontinuierliche Versorgung in Wittenberg.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-6 hover:bg-white hover:shadow-lg rounded-2xl transition-all border border-transparent hover:border-slate-100">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
              <Award size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Fachkompetenz</h4>
              <p className="text-sm text-slate-500">Spezialisierte Fachzahnärzte für eine präzise Diagnostik und Therapie.</p>
            </div>
          </div>

          <div className="flex gap-4 p-6 hover:bg-white hover:shadow-lg rounded-2xl transition-all border border-transparent hover:border-slate-100">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
              <Heart size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900">Patientenfokus</h4>
              <p className="text-sm text-slate-500">Individuelle Betreuung in einer angstfreien, modernen Praxisumgebung.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
