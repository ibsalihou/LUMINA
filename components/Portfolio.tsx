
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', 'Design de Logo', 'Identité de Marque', 'Cartes de Visite'];

  const filteredItems = filter === 'Tous' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => {
        return item.category === filter;
      });

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Projets Sélectionnés</h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
            Une sélection de projets où la stratégie rencontre l'excellence esthétique.
          </p>

          {/* Filtres par Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  filter === cat
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-900 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group relative overflow-hidden rounded-2xl bg-slate-200 animate-fadeIn cursor-pointer"
            >
              {/* Image avec animation de montée et zoom léger */}
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-[400px] object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-4"
              />
              
              {/* Overlay intensifié au survol */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-left">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-indigo-400 text-sm font-bold tracking-widest uppercase mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400 italic">Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <a 
            href="https://dribbble.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-indigo-600 transition-colors group"
          >
            Voir tous les projets sur Dribbble
            <span className="transform group-hover:translate-x-2 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
