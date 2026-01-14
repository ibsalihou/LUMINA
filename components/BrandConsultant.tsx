
import React, { useState } from 'react';
import { generateBrandDirection } from '../services/geminiService';
import { BrandSuggestion } from '../types';

const BrandConsultant: React.FC = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [moreLoading, setMoreLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<BrandSuggestion[]>([]);

  const handleConsult = async () => {
    if (!description.trim()) return;
    setLoading(true);
    setSuggestions([]); // Réinitialiser pour une nouvelle recherche principale
    try {
      const result = await generateBrandDirection(description);
      setSuggestions(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleMoreOptions = async () => {
    if (!description.trim()) return;
    setMoreLoading(true);
    try {
      const result = await generateBrandDirection(description);
      // On ajoute les nouvelles suggestions à la liste existante
      setSuggestions(prev => [...prev, ...result]);
    } catch (err) {
      console.error(err);
    } finally {
      setMoreLoading(false);
    }
  };

  return (
    <section className="py-24 bg-indigo-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-display italic font-bold mb-4">Conseil en Image IA</h2>
          <p className="text-indigo-200 text-lg">
            Curieux du potentiel de votre marque ? Décrivez votre entreprise, et notre Stratège IA suggérera des directions créatives immédiates.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <input 
              type="text" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="ex: Une marque de bougies de luxe pour minimalistes..."
              className="flex-grow bg-indigo-800/50 border border-indigo-400/30 rounded-full px-8 py-4 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button 
              onClick={handleConsult}
              disabled={loading || moreLoading}
              className="bg-white text-indigo-900 px-10 py-4 rounded-full font-bold hover:bg-indigo-50 transition-all disabled:opacity-50 whitespace-nowrap"
            >
              {loading ? 'Analyse en cours...' : 'Obtenir un conseil'}
            </button>
          </div>

          {suggestions.length > 0 && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
                {suggestions.map((s, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-indigo-300 mb-2 uppercase tracking-widest">{s.mood}</h3>
                    <div className="flex gap-2 mb-4">
                      {s.colorPalette.map((color, cIdx) => (
                        <div 
                          key={cIdx} 
                          title={color}
                          className="w-8 h-8 rounded-full border border-white/20" 
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                    <p className="text-sm font-medium mb-4 italic text-white/80">Typographie : {s.typographyStyle}</p>
                    <p className="text-indigo-100 text-sm leading-relaxed flex-grow">{s.rationale}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <button 
                  onClick={handleMoreOptions}
                  disabled={moreLoading || loading}
                  className="group flex items-center gap-3 border border-indigo-400/30 hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all disabled:opacity-50"
                >
                  {moreLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Génération en cours...
                    </span>
                  ) : (
                    <>
                      <span>Générer d'autres options</span>
                      <span className="text-xl transform group-hover:rotate-12 transition-transform">+</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BrandConsultant;
