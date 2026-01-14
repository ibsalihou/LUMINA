
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Paroles de Clients</h2>
          <p className="text-slate-500 max-w-xl mx-auto italic">
            La satisfaction de mes partenaires est la meilleure preuve de la qualité de mon travail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between hover:shadow-xl hover:shadow-slate-100 transition-all duration-300"
            >
              <div>
                <div className="text-indigo-500 text-4xl mb-6 font-display opacity-30">“</div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <img 
                  src={testimonial.avatarUrl} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">{testimonial.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
