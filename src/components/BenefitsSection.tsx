import React from 'react';
import { motion } from 'framer-motion';
const benefits = [
{
  emoji: '🚀',
  title: 'Planificación Resuelta desde el Día 1',
  desc: 'Abrís el material, encontrás lo que necesitás y en minutos está listo.'
},
{
  emoji: '😊',
  title: 'Fin de los Domingos con Angustia',
  desc: 'Cuando el material está listo, la semana empieza con calma.'
},
{
  emoji: '💪',
  title: 'Docente Segura y Respaldada',
  desc: 'Cada actividad tiene su base. Cada informe tiene su estructura.'
},
{
  emoji: '❤️',
  title: 'Menos Desgaste, Más Vocación',
  desc: 'Enfocate en enseñar y acompañar, no en administrar y buscar.'
}];

export function BenefitsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#1a2e5a] pt-[60px] pb-[60px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            EL IMPACTO REAL EN TU PRÁCTICA DOCENTE
          </h2>
          <p className="text-xl md:text-2xl text-[#f9d6e3] font-medium max-w-2xl mx-auto">
            Esto es lo que realmente vas a lograr implementando La Agenda.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((b, i) =>
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
            className="bg-[#243b73] border border-white/10 p-8 md:p-10 rounded-3xl shadow-lg">
            
              <div className="text-5xl mb-6">{b.emoji}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{b.title}</h3>
              <p className="text-[#f9d6e3] leading-relaxed text-lg">{b.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}