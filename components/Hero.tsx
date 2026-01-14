
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Décoration d'arrière-plan */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <span className="inline-block py-1 px-4 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Spécialiste en Identité de Marque
          </span>
          <h1 className="text-5xl md:text-8xl font-display font-bold leading-tight mb-8">
            Transformez votre <span className="italic text-slate-400">Vision</span> en un <span className="underline decoration-indigo-500 underline-offset-8">Héritage</span>.
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed">
            Je conçois des identités visuelles uniques, des logos intemporels et des cartes de visite premium qui transforment votre entreprise en une icône de son secteur.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#contact" 
              className="w-full sm:w-auto text-center bg-indigo-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              Démarrer Votre Projet
            </a>
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto text-center border-2 border-slate-200 text-slate-700 px-10 py-5 rounded-full text-lg font-semibold hover:border-slate-900 transition-all"
            >
              Voir nos Réalisations
            </a>
          </div>
          
          <div className="mt-20 flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
             <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Ils nous font confiance</span>
             <div className="flex gap-8 text-xl font-bold">
               <span>ZENITH</span>
               <span>VERVE</span>
               <span>MUSE</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
