import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Waves, ShieldCheck, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with abstract wave shapes */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/10 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-600/10 text-primary-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
            </span>
            Especialistas em Poços Artesianos
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
            Sua Independência <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent">Hídrica</span> Começa Aqui.
          </h1>
          
          <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
            Perfuramos o seu caminho para a água mais pura. Tecnologia de ponta, processos sustentáveis e garantia de vazão para sua casa ou indústria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 group"
            >
              Solicitar Orçamento <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="flex items-center justify-center gap-2 bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all"
            >
              Nossos Serviços
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 pt-12 border-t border-slate-200">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-slate-900">+1500</div>
              <div className="text-sm text-slate-500">Poços Perfurados</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-slate-900">20+</div>
              <div className="text-sm text-slate-500">Anos de Experiência</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold text-slate-900">100%</div>
              <div className="text-sm text-slate-500">Garantia Técnica</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl z-20">
             <img 
               src="https://images.unsplash.com/photo-1590486016335-51e443310f84?q=80&w=1000&auto=format&fit=crop" 
               alt="Perfuração de Poço Artesiano" 
               className="w-full aspect-square object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          
          {/* Floating cards */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 lg:-right-12 glass p-6 rounded-3xl shadow-xl z-30 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900 text-sm">Outorga Legal</span>
            </div>
            <p className="text-xs text-slate-500 italic">Processo 100% legalizado dentro das normas ambientais.</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-6 -left-6 lg:-left-12 glass p-6 rounded-3xl shadow-xl z-30 flex items-center gap-4"
          >
            <div className="bg-primary-100 p-3 rounded-2xl text-primary-600">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="font-bold text-slate-900">Equipe 24h</div>
              <div className="text-xs text-slate-500 whitespace-nowrap">Suporte e Emergência</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
