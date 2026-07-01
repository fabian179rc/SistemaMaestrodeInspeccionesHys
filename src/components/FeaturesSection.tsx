import React from 'react';
import { motion } from 'framer-motion';
const features = [
{
  icon: '⏱️',
  title: 'Ahorro de Tiempo Real',
  desc: 'Planificaciones y recursos listos para adaptar y usar en minutos.'
},
{
  icon: '👶',
  title: 'Actividades Listas por Sala y Edad',
  desc: 'Propuestas organizadas para 18 meses, 2 años y 3 años.'
},
{
  icon: '📋',
  title: 'Orden Docente Sostenible',
  desc: 'Todo organizado y accesible cuando más lo necesitás.'
},
{
  icon: '📝',
  title: 'Informes sin Bloqueo',
  desc: 'Modelos listos para completar en minutos, no en horas.'
}];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1a2e5a]">
            ¿QUÉ VAS A LOGRAR CON ESTE SISTEMA?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 8
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.08
            }}
            className="flex items-start gap-4 bg-[#f8f8f8] p-8 rounded-2xl border border-slate-100">
            
              <div className="text-4xl flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-bold text-[#1a2e5a] mb-2 text-xl">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}