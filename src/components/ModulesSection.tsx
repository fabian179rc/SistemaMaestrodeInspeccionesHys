import React from 'react';
import { motion } from 'framer-motion';
const modules = [
{
  num: '01',
  emoji: '📘',
  title: 'El Inicio del Camino',
  desc: 'Adaptación, diagnóstico inicial y reuniones con familias.'
},
{
  num: '02',
  emoji: '👶',
  title: 'Pequeños Exploradores',
  desc: 'Planificaciones y actividades completas para sala de 18 meses.'
},
{
  num: '03',
  emoji: '🌍',
  title: 'Descubriendo el Mundo',
  desc: 'Recursos listos para aplicar en sala de 2 años.'
},
{
  num: '04',
  emoji: '🚀',
  title: 'Primeros Pasos a la Autonomía',
  desc: 'Propuestas y planificaciones completas para sala de 3 años.'
},
{
  num: '05',
  emoji: '📅',
  title: 'El Calendario Escolar',
  desc: 'Efemérides, actos y fechas especiales resueltos para todo el año.'
},
{
  num: '06',
  emoji: '📝',
  title: 'El Registro Pedagógico',
  desc: 'Informes, seguimiento y documentación docente lista para usar.'
}];

export function ModulesSection() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-[#1a2e5a] text-4xl md:text-5xl leading-tight mb-4">
            EL NÚCLEO DE LA AGENDA
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-bold">
            6 Tomos Completos Listos para Usar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 16
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
            className="flex flex-col bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow">
            
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#1a2e5a]/5 border border-[#1a2e5a]/10 flex items-center justify-center text-3xl">
                  {m.emoji}
                </div>
                <span className="text-sm font-bold tracking-[0.15em] uppercase text-[#f5c842] bg-[#1a2e5a] px-3 py-1.5 rounded-lg">
                  Tomo {m.num}
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-[#1a2e5a] text-xl mb-3 leading-snug">
                  {m.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}