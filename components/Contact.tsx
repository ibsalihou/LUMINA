
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 italic">Prêt à marquer les esprits ?</h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed">
              Chaque grande marque commence par une discussion. Que vous ayez un brief complet ou juste une étincelle d'idée, donnons-lui vie ensemble.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl">📍</div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Localisation</p>
                  <p className="text-lg font-medium">Paris, France (Disponible à l'international)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-xl">📧</div>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-widest">Email</p>
                  <a href="mailto:hello@lumina-creatif.studio" className="text-lg font-medium underline hover:text-indigo-400 transition-colors">
                    hello@lumina-creatif.studio
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-10 rounded-3xl shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Nom</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-700 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Type de Projet</label>
                  <select className="w-full bg-slate-700 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 text-white">
                    <option>Design de Logo</option>
                    <option>Branding Complet</option>
                    <option>Cartes de Visite</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-slate-700 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 text-white"
                  placeholder="Parlez-moi de votre vision..."
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-indigo-900/20">
                Envoyer le Message
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-slate-700 flex justify-center gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">Dribbble</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <p>© 2024 Lumina Créatif Studio. Tous droits réservés.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="/terms" className="hover:text-white transition-colors">Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
