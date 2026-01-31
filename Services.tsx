
import React from 'react';
import { 
  CheckCircle2, 
  Users, 
  Baby, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  ArrowLeft, 
  Activity, 
  Brain, 
  Stethoscope, 
  AlertCircle, 
  Smile, 
  Dumbbell, 
  Scale, 
  FileText 
} from 'lucide-react';

interface ServicesProps {
  isFullPage?: boolean;
  onBack?: () => void;
}

const Services: React.FC<ServicesProps> = ({ isFullPage = false, onBack }) => {
  // Vorschau für Startseite
  const previewServices = [
    {
      title: "Kinder & Jugendliche",
      desc: "Frühzeitige Erkennung und sanfte Korrektur von Zahnfehlstellungen während des Wachstums.",
      icon: <Baby className="text-blue-600" size={32} />,
      features: ["Frühbehandlung", "Herausnehmbare Spangen", "Feste Zahnspangen"]
    },
    {
      title: "Erwachsene",
      desc: "Ästhetische Korrekturen in jedem Alter – diskret und effizient mit modernster Technik.",
      icon: <Users className="text-blue-600" size={32} />,
      features: ["Unsichtbare Schienen", "Keramik-Brackets", "Lingualtechnik"]
    },
    {
      title: "Invisalign® Aligner",
      desc: "Die fast unsichtbare Art der Zahnkorrektur durch transparente Kunststoffschienen.",
      icon: <Zap className="text-blue-600" size={32} />,
      features: ["Herausnehmbar", "Nahezu unsichtbar", "Schnelle Ergebnisse"]
    },
    {
      title: "Prävention & Prophylaxe",
      desc: "Professionelle Reinigung und Vorsorge für gesunde Zähne während der KFO-Behandlung.",
      icon: <ShieldCheck className="text-blue-600" size={32} />,
      features: ["Zahnreinigung", "Fluoridierung", "Hygiene-Schulung"]
    }
  ];

  // Detaillierte Liste für die Vollansicht
  const detailedServices = [
    {
      category: "Kieferorthopädische Apparaturen",
      items: [
        {
          title: "Lose Zahnspange",
          desc: "Herausnehmbare Geräte zur Steuerung des Kieferwachstums und kleinerer Zahnkorrekturen, besonders effektiv im Kindesalter.",
          icon: <Smile />
        },
        {
          title: "Festsitzende Zahnspange",
          desc: "Multiband-Apparaturen (Brackets) ermöglichen die präzise dreidimensionale Bewegung der Zähne für ein perfektes Ergebnis.",
          icon: <Activity />
        },
        {
          title: "Invisalign & Invisalign Teen",
          desc: "Das moderne System aus transparenten Schienen (Alignern). Komfortabel, herausnehmbar und im Alltag kaum sichtbar.",
          icon: <Sparkles />
        },
        {
          title: "Sportmundschutz",
          desc: "Individuell angefertigter Schutz für Zähne und Kiefer bei Sportarten mit Verletzungsrisiko (z.B. Hockey, Kampfsport).",
          icon: <Dumbbell />
        }
      ]
    },
    {
      category: "Spezialsprechstunden & Ganzheitliche Ansätze",
      items: [
        {
          title: "Dysgnathie",
          desc: "Behandlung schwerer Kieferfehlstellungen in enger interdisziplinärer Zusammenarbeit mit der Mund-Kiefer-Gesichtschirurgie.",
          icon: <Scale />
        },
        {
          title: "Kiefergelenk-Dysfunktion (CMD)",
          desc: "Diagnostik und Therapie bei Schmerzen im Kiefergelenk, Knacken oder Verspannungen der Kaumuskulatur.",
          icon: <Stethoscope />
        },
        {
          title: "Applied Kinesiology (AK)",
          desc: "Ganzheitliches Diagnoseverfahren zur Untersuchung von funktionellen Zusammenhängen im Körper.",
          icon: <Activity />
        },
        {
          title: "Osteopathie, Manuelle Medizin, Homöopathie",
          desc: "Begleitende ganzheitliche Therapien zur Unterstützung der kieferorthopädischen Behandlung und Förderung des Wohlbefindens.",
          icon: <Brain />
        },
        {
          title: "Kieferchirurgie/-orthopädie",
          desc: "Koordination komplexer kombinierter kieferchirurgisch-kieferorthopädischer Behandlungsfälle.",
          icon: <Users />
        }
      ]
    },
    {
      category: "Patienten-Service & Informationen",
      items: [
        {
          title: "SOS Lose Zahnspange",
          desc: "Was tun, wenn die Spange drückt oder verloren gegangen ist? Erste-Hilfe-Tipps für herausnehmbare Geräte.",
          icon: <AlertCircle />
        },
        {
          title: "SOS Feste Zahnspange",
          desc: "Hilfe bei lockeren Brackets oder piksenden Drähten. Schnelle Lösungen bis zum nächsten Termin.",
          icon: <AlertCircle />
        },
        {
          title: "Erste Tage mit der Spange",
          desc: "Eingewöhnungstipps, Pflegehinweise und Ernährungsempfehlungen für den Start der Behandlung.",
          icon: <Baby />
        },
        {
          title: "KIG (Kieferorthopädische Indikationsgruppen)",
          desc: "Informationen zur Einstufung der Behandlungsbedürftigkeit und Kostenübernahme durch die gesetzlichen Krankenkassen.",
          icon: <FileText />
        }
      ]
    }
  ];

  if (isFullPage) {
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

          <div className="mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6">
              <Sparkles size={18} />
              <span>Unser Spektrum</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Leistungen & <span className="text-blue-600">Behandlungsangebote</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
              Wir decken das gesamte Spektrum der modernen Kieferorthopädie ab. Von der Frühbehandlung bis zur komplexen Erwachsenenbehandlung, inklusive ganzheitlicher Ansätze und interdisziplinärer Zusammenarbeit.
            </p>
          </div>

          <div className="space-y-16">
            {detailedServices.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 border-l-4 border-blue-600 pl-4">
                  {section.category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.items.map((item, iIdx) => (
                    <div key={iIdx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        {React.cloneElement(item.icon as React.ReactElement, { size: 24 })}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-900 text-white rounded-3xl p-8 md:p-12 text-center">
             <h3 className="text-2xl font-bold mb-4">Haben Sie Fragen zu einer speziellen Leistung?</h3>
             <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
               Gerne beraten wir Sie persönlich zu den verschiedenen Behandlungsmöglichkeiten und finden gemeinsam den besten Weg zu Ihrem neuen Lächeln.
             </p>
             <a href="tel:03491409390" className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors">
               Jetzt anrufen
             </a>
          </div>
        </div>
      </section>
    );
  }

  // Standard Preview View (Homepage)
  return (
    <section id="leistungen" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Umfassende Kieferorthopädie</h2>
          <p className="text-lg text-slate-600">Wir bieten das gesamte Spektrum der modernen Kieferorthopädie an, um Ihnen und Ihrer Familie ein strahlendes Lächeln zu ermöglichen.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {previewServices.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="mb-6 p-4 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(service.icon as React.ReactElement, { 
                  className: "group-hover:text-white transition-colors" 
                })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 size={16} className="text-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-blue-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
           <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Sparkles /> 3D-Scannen statt Abdruck
              </h3>
              <p className="text-blue-100 max-w-xl">
                Dank modernster iTero® Intraoral-Scanner benötigen wir in unserer Praxis keine unangenehmen Abdruckmassen mehr. Schnell, präzise und digital.
              </p>
           </div>
           {/* Dieser Button führt nun auch zur Vollansicht, falls gewünscht, oder bleibt als Teaser */}
           <div className="relative z-10 font-medium text-blue-200 italic">
             Modernste Technik für Ihren Komfort
           </div>
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
