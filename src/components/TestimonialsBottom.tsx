import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
const testimonials = [
{
  initial: 'V',
  color: 'bg-[#f9d6e3] text-[#1a2e5a]',
  name: 'V. M.',
  location: 'Maestra Jardinera — Buenos Aires',
  text: 'Antes perdía horas buscando actividades. Ahora abro el PDF y en minutos está resuelto.'
},
{
  initial: 'L',
  color: 'bg-[#f5c842]/20 text-[#1a2e5a]',
  name: 'L. R.',
  location: 'Practicante de Nivel Inicial — Córdoba',
  text: 'Los modelos de informes solos ya valieron todo el pack.'
},
{
  initial: 'S',
  color: 'bg-[#1a2e5a]/10 text-[#1a2e5a]',
  name: 'S. T.',
  location: 'Estudiante de Nivel Inicial — Rosario',
  text: 'Me dio estructura, ideas y confianza para encarar mis prácticas desde el día uno.'
},
{
  initial: 'M',
  color: 'bg-[#f9d6e3] text-[#1a2e5a]',
  name: 'M. B.',
  location: 'Docente de Sala de 2 años — Mendoza',
  text: 'Las efemérides siempre me trababan. Ahora las resuelvo rápido y sin estrés.'
}];

export function TestimonialsBottom() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-[#1a2e5a]">
            Docentes que ya transformaron su semana
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) =>
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
            className="bg-[#f8f8f8] rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col h-full">
            
              <div className="flex text-[#f5c842] mb-6">
                {[...Array(5)].map((_, i) =>
              <Star key={i} className="w-6 h-6 fill-current" />
              )}
              </div>

              <p className="text-slate-700 text-lg leading-relaxed mb-8 italic flex-grow font-medium">
                "{t.text}"
              </p>

              <div className="flex items-center border-t border-slate-200 pt-6 mt-auto">
                <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl ${t.color} mr-4 flex-shrink-0`}>
                
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-[#1a2e5a] text-lg">
                    {t.name}
                  </div>
                  <div className="text-sm font-medium text-slate-500">
                    {t.location}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}