import React from 'react';
import { motion } from 'framer-motion';
import { Drill, Settings, FileText, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Perfuração Profunda',
    description: 'Execução técnica em diversos tipos de solo e rochas, garantindo a melhor vazão de água.',
    icon: Drill,
    color: 'bg-blue-500',
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Limpeza, teste de vazão e recuperação de poços antigos para prolongar a vida útil.',
    icon: Settings,
    color: 'bg-cyan-500',
  },
  {
    title: 'Outorga e Legalização',
    description: 'Gerenciamos toda a burocracia ambiental e processos de autorização junto aos órgãos competentes.',
    icon: FileText,
    color: 'bg-amber-600',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary-600 font-bold tracking-widest uppercase text-sm mb-4">O que fazemos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Soluções Completas em Águas Subterrâneas</h3>
          <p className="text-slate-600 text-lg">Oferecemos serviços especializados para garantir água de qualidade infinita, focando em segurança técnica e conformidade legal.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-[2rem] border border-slate-100 hover:border-primary-100 hover:shadow-2xl hover:shadow-primary-600/5 transition-all group"
            >
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg rotate-3 group-hover:rotate-0 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" /> Tecnologia de ponta
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-primary-600" /> Profissionais certificados
                </li>
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
