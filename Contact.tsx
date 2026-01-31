
import React from 'react';
import { MapPin, Phone, Clock, ExternalLink, ArrowLeft, CalendarClock, AlertCircle } from 'lucide-react';

interface ContactProps {
  isFullPage?: boolean;
  onBack?: () => void;
}

const Contact: React.FC<ContactProps> = ({ isFullPage = false, onBack }) => {
  return (
    <section id="kontakt" className={`bg-slate-900 text-white overflow-hidden relative ${isFullPage ? 'min-h-screen pt-28 pb-12' : 'py-24'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -mr-48 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[100px] -ml-20 -mb-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {isFullPage && onBack && (
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-blue-400 font-semibold mb-12 hover:gap-3 transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </button>
        )}

        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4">Kontakt & Anfahrt</h2>
           <p className="text-slate-400 text-lg">Wir sind für Sie da – persönlich und digital.</p>
        </div>

        {/* 1. FOCUS SECTION: Patientenaufnahme */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-blue-900 to-slate-800 border border-blue-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             
             <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10 text-center md:text-left">
                <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/50">
                   <CalendarClock size={32} className="text-white" />
                </div>
                <div className="flex-grow">
                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                     Wichtige Information zur Patientenaufnahme
                   </h3>
                   <div className="space-y-4 text-blue-100 text-lg leading-relaxed">
                      <p>
                        Um unseren hohen Qualitätsstandard zu sichern, nehmen wir neue Patienten aktuell in Intervallen auf.
                        <br />
                        Die Vergabe von Neupatiententerminen erfolgt <strong>alle 3 Monate</strong>.
                      </p>
                      <div className="bg-blue-950/50 p-4 rounded-xl border border-blue-500/20 inline-block md:block">
                        <span className="flex items-center justify-center md:justify-start gap-2 font-semibold text-blue-300">
                          <AlertCircle size={20} />
                          Bitte beachten Sie:
                        </span>
                        <p className="mt-1 text-base text-slate-300">
                          Terminvereinbarungen und Anliegen werden ausschließlich <strong>telefonisch</strong> oder <strong>persönlich vor Ort</strong> bearbeitet.
                        </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* 2. DETAILS GRID */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: Contact Data (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
               <div className="flex items-start gap-5">
                  <MapPin className="text-blue-400 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Anschrift</h4>
                    <p className="text-slate-300 text-lg leading-snug">
                      Breitscheidstraße 37<br />
                      06886 Lutherstadt Wittenberg
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Breitscheidstraße+37+06886+Lutherstadt+Wittenberg" 
                      target="_blank" 
                      className="inline-flex items-center gap-2 mt-4 text-blue-400 font-bold hover:text-blue-300 transition-colors"
                    >
                      Route planen <ExternalLink size={16} />
                    </a>
                  </div>
               </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
               <div className="flex items-start gap-5">
                  <Phone className="text-blue-400 mt-1 shrink-0" size={24} />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Telefon</h4>
                    <a href="tel:03491409390" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors block mb-2">
                      03491 409390
                    </a>
                    <p className="text-slate-400 text-sm italic">
                      Bei Notfällen außerhalb der Sprechzeiten wenden Sie sich bitte an den zahnärztlichen Notdienst.
                    </p>
                  </div>
               </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
               <div className="flex items-center gap-3 mb-6">
                  <Clock className="text-blue-400" size={24} />
                  <h4 className="text-xl font-bold">Sprechzeiten</h4>
               </div>
               <div className="space-y-3">
                  {[
                    { day: "Montag", time: "07:30 – 11:00, 13:00 – 17:00" },
                    { day: "Dienstag", time: "07:30 – 11:00, 13:00 – 15:00" },
                    { day: "Mittwoch", time: "07:30 – 11:00, 13:00 – 17:00" },
                    { day: "Donnerstag", time: "07:30 – 11:00, 13:00 – 16:00" },
                    { day: "Fr, Sa, So", time: "Geschlossen", closed: true }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <span className="text-slate-400 font-medium w-24">{item.day}</span>
                      <span className={item.closed ? "text-slate-500 italic" : "text-white font-medium"}>
                        {item.time}
                      </span>
                    </div>
                  ))}
               </div>
            </div>

          </div>

          {/* Right Column: Map (Span 7) */}
          <div className="lg:col-span-7 h-full min-h-[400px] lg:min-h-0">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.7363415714785!2d12.63945417703816!3d51.866580984852024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a61d65457a4609%3A0x6a2c923363428d0e!2sBreitscheidstra%C3%9Fe%2037%2C%2006886%20Lutherstadt%20Wittenberg!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde" 
                className="w-full h-full grayscale-[50%] invert-[90%] opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Overlay Label for Map */}
              <div className="absolute bottom-6 left-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/10 pointer-events-none">
                 KFO Walter • Wittenberg
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
