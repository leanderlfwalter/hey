
import React, { useState, useEffect } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Clock
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import Impressum from './components/Impressum';

type ViewState = 'home' | 'about' | 'impressum' | 'contact' | 'jobs' | 'services';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [view, setView] = useState<ViewState>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'impressum':
        return (
          <main className="flex-grow pt-24 pb-12">
            <Impressum onBack={() => setView('home')} />
          </main>
        );
      case 'about':
        return (
          <main className="flex-grow pt-24">
            <About onBack={() => setView('home')} isFullPage={true} />
            <Contact />
          </main>
        );
      case 'jobs':
        return (
          <main className="flex-grow">
            <Jobs onBack={() => setView('home')} />
          </main>
        );
      case 'services':
        return (
          <main className="flex-grow">
            <Services isFullPage={true} onBack={() => setView('home')} />
          </main>
        );
      case 'contact':
        return (
          <main className="flex-grow">
            <Contact isFullPage={true} onBack={() => setView('home')} />
          </main>
        );
      default:
        return (
          <main className="flex-grow">
            <Hero />
            
            {/* Trust Bar */}
            <div className="bg-white py-8 border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" className={i === 4 ? "text-yellow-400" : ""} />
                    ))}
                  </div>
                  <span className="font-semibold text-slate-700">4.5/5 Google Rating</span>
                </div>
                <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-blue-600" size={24} />
                  <span className="text-slate-600">Modernste Diagnostik</span>
                </div>
                <div className="h-6 w-px bg-slate-200 hidden md:block"></div>
                <div className="flex items-center gap-2">
                  <Clock className="text-blue-600" size={24} />
                  <span className="text-slate-600">Flexible Termine</span>
                </div>
              </div>
            </div>

            <Services />
            <About isFullPage={false} />
            <Contact />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isScrolled={isScrolled || view !== 'home'} 
        onNavigateAbout={() => setView('about')}
        onNavigateContact={() => setView('contact')}
        onNavigateJobs={() => setView('jobs')}
        onNavigateServices={() => setView('services')}
        onNavigateHome={() => setView('home')}
      />
      
      {renderContent()}

      <Footer onShowImpressum={() => setView('impressum')} />
      
      {/* AI Assistant Button */}
      <ChatAssistant />
    </div>
  );
};

export default App;
