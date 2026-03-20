import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <img 
             src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1000&auto=format&fit=crop" 
             alt="Nossa Equipe" 
             className="rounded-[3rem] shadow-2xl relative z-10"
           />
           <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-600 -z-0 rounded-[3rem]" />
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">Sobre a Águas Profundas</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-[1.2]">Mais de Duas Décadas Extraindo Solidariedade Mineral</h3>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            Nossa missão é levar acesso à água potável de forma sustentável e eficiente. Trabalhamos com geólogos e engenheiros experientes para mapear o melhor local para sua perfuração, garantindo alta vazão e zero problemas estruturais.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              'Perfuratrizes de última geração',
              'Análise físico-química da água inclusa',
              'Processos ecologicamente corretos',
              'Atendimento em todo o território nacional'
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-800 font-semibold">
                <div className="bg-primary-600 rounded-full p-1">
                  <Check className="text-white w-4 h-4" />
                </div>
                {item}
              </div>
            ))}
          </div>
          
          <a href="#contact" className="text-primary-600 font-bold border-b-2 border-primary-600 pb-1 hover:text-primary-700 hover:border-primary-700 transition-all">
            Conheça nossa história completa
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
