
import React from 'react';
import { ArrowRight, Phone, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Dental Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6 animate-fade-in">
            <Star size={16} fill="currentColor" />
            <span>Kieferorthopädie in Wittenberg</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Ihr perfektes <br />
            <span className="text-blue-600">Lächeln</span> beginnt hier.
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-lg">
            Dr. med. dent. Katrin Walter & Dr. med. dent. Frank Walter bieten moderne Kieferorthopädie für Kinder, Jugendliche und Erwachsene.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:03491409390" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-blue-200 flex items-center justify-center gap-2 transition-all hover:scale-105 group text-center">
              <Phone size={20} />
              Termin vereinbaren
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#leistungen" className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all text-center">
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 text-sm text-slate-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 20}/64/64`} className="w-10 h-10 rounded-full border-2 border-white" alt="Patient" />
              ))}
            </div>
            <p>Über <span className="font-bold text-slate-900">1.000+</span> zufriedene Patienten in Wittenberg</p>
          </div>
        </div>
      </div>
      
      {/* Abstract Design Elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default Hero;
