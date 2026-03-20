import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/550000000000" 
    target="_blank" 
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl z-50 hover:scale-110 transition-transform flex items-center justify-center"
  >
    <Phone className="w-8 h-8" />
  </a>
);

const Contact = () => (
  <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Contato</h2>
          <h3 className="text-4xl font-bold mb-8">Vamos Falar Sobre Seu Novo Poço?</h3>
          <p className="text-slate-400 text-lg mb-12">
            Estamos prontos para analisar sua área e enviar um orçamento detalhado sem compromisso.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-4 items-start">
              <div className="bg-slate-800 p-3 rounded-2xl text-accent">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-slate-400 text-sm">Telefone / WhatsApp</div>
                <div className="text-xl font-bold">(11) 98765-4321</div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-slate-800 p-3 rounded-2xl text-accent">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-slate-400 text-sm">E-mail</div>
                <div className="text-xl font-bold">contato@aguasprofundas.com</div>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="bg-slate-800 p-3 rounded-2xl text-accent">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-slate-400 text-sm">Sede</div>
                <div className="text-xl font-bold italic">São Paulo - SP</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/10">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Nome Completo</label>
                <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-600 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Cidade/UF</label>
                <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-600 outline-none transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">WhatsApp</label>
              <input type="tel" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-600 outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Tipo de Poço</label>
              <select className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-600 outline-none transition-all appearance-none cursor-pointer">
                <option>Residencial</option>
                <option>Industrial</option>
                <option>Rural / Agronegócio</option>
                <option>Manutenção</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Mensagem</label>
              <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-600 outline-none transition-all shrink-0"></textarea>
            </div>
            <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-600/30 transition-all">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
    
    {/* Abstract background blobs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-12 px-6 lg:px-12 border-t border-slate-900">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-center md:text-left">
        <div className="text-white font-bold text-xl mb-2 italic uppercase">Águas <span className="text-primary-600">Profundas</span></div>
        <p className="text-sm">© 2026 Águas Profundas Poços Artesianos. Todos os direitos reservados.</p>
      </div>
      
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary-600 transition-colors"><Instagram /></a>
        <a href="#" className="hover:text-primary-600 transition-colors"><Facebook /></a>
        <a href="#" className="hover:text-primary-600 transition-colors"><Youtube /></a>
      </div>
      
      <div className="text-sm flex gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
        <a href="#" className="hover:text-white transition-colors">Termos</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="antialiased selection:bg-primary-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
