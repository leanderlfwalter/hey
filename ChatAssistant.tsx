
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'ai' | 'user', text: string }[]>([
    { role: 'ai', text: 'Hallo! Ich bin der digitale Assistent der Praxis Dr. Walter. Wie kann ich Ihnen heute helfen? (z.B. Fragen zu Öffnungszeiten, Leistungen oder Anfahrt)' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `Du bist ein hilfreicher Assistent für die Kieferorthopädische Praxis Walter in Lutherstadt Wittenberg. 
          Informationen zur Praxis:
          - Ärzte: Dr. med. dent. Katrin Walter & Dr. med. dent. Frank Walter.
          - Adresse: Breitscheidstraße 37, 06886 Lutherstadt Wittenberg.
          - Telefon: 03491 409390.
          - Öffnungszeiten: 
            Mo & Mi: 07:30 - 11:00 Uhr und 13:00 - 17:00 Uhr
            Di: 07:30 - 11:00 Uhr und 13:00 - 15:00 Uhr
            Do: 07:30 - 11:00 Uhr und 13:00 - 16:00 Uhr
            Fr, Sa, So: Geschlossen
          - Leistungen: Invisalign, feste/lose Spangen für Kinder, Jugendliche und Erwachsene, 3D-Scans.
          - Besonderheit: Sehr modern, digitaler Scan statt Abdruck.
          
          Antworte freundlich, professionell und prägnant auf Deutsch. Verweise bei Terminwünschen ausschließlich auf die Telefonnummer 03491 409390. Erwähne bei medizinischen Fachfragen, dass ein persönliches Beratungsgespräch notwendig ist.`,
        }
      });

      const aiText = response.text || 'Entschuldigung, ich konnte das nicht verarbeiten. Bitte rufen Sie uns direkt an.';
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'ai', text: 'Momentan bin ich offline. Bitte nutzen Sie unsere Telefonnummer: 03491 409390.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end text-slate-900">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-3xl shadow-2xl border border-slate-100 mb-4 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={24} />
              </div>
              <div>
                <p className="font-bold text-white">Praxis-Assistent</p>
                <p className="text-[10px] text-blue-100 uppercase tracking-wider">Online • Hilft sofort</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none shadow-md' : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex items-center gap-2">
                  <Loader2 className="animate-spin text-blue-600" size={16} />
                  <span className="text-xs text-slate-400 italic">Schreibt...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ihre Frage..."
              className="flex-grow bg-slate-100 border-none rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-600 outline-none text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg shadow-blue-200"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${isOpen ? 'bg-slate-800 text-white rotate-90' : 'bg-blue-600 text-white'}`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500 border-2 border-white"></span>
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatAssistant;
