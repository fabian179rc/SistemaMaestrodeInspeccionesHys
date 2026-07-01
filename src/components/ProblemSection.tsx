import React from 'react';
import { motion } from 'framer-motion';
const situations = [
{
  emoji: '😩',
  title: 'Agotamiento por planificación',
  desc: 'Horas armando actividades desde cero que podrían estar listas en minutos.'
},
{
  emoji: '🐢',
  title: 'Siempre corriendo detrás',
  desc: 'La semana empieza y todavía no tenés claro qué dar en sala.'
},
{
  emoji: '⏰',
  title: 'Sin sistema, sin orden',
  desc: 'Improvisás en cada jornada y la planificación nunca termina de organizarse.'
},
{
  emoji: '😟',
  title: 'Todo el peso lo llevás vos',
  desc: 'Carga mental constante, trabajo fuera de horario y sensación de que nunca alcanza.'
}];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-4 text-[#1a2e5a]">
            ¿TE RESULTA FAMILIAR ESTA SITUACIÓN?
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#1a2e5a]/80 mb-6">
            ¿La carga docente te quita más tiempo y energía del que debería?
          </p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Si sos maestra jardinera, practicante o estudiante de nivel inicial,
            probablemente esto te pase todas las semanas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {situations.map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.1
            }}
            className="bg-[#f8f8f8] p-8 rounded-2xl shadow-sm border border-slate-100">
            
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h3 className="text-xl font-bold text-[#1a2e5a] mb-3">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-[16px]">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}