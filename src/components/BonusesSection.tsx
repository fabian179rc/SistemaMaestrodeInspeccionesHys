import React, { lazy } from 'react';
import { motion } from 'framer-motion';
const bonuses = [
{
  num: 1,
  title: 'El Rescate de Actividades para Todo el Año',
  desc: 'Banco de actividades listas para resolver cualquier clase en minutos.',
  image: "/bonus_1_El_Rescate_de_Actividades_para_Todo_el_Ano.webp"

},
{
  num: 2,
  title: 'Efemérides Resueltas sin Estrés',
  desc: 'Propuestas concretas para cada fecha especial del calendario escolar.',
  image: "/Bonus_2_Efemerides_Resueltas_sin_Estres.webp"

},
{
  num: 3,
  title: 'Informes y Registros que Sí Dan Ganas de Usar',
  desc: 'Modelos listos para documentar sin perder horas redactando.',
  image: "/Bonus_3_Informes_y_Registros_que_Si_Dan_Ganas_de_Usar.webp"

},
{
  num: 4,
  title: 'La Agenda Invisible de la Docente Organizada',
  desc: 'Planillas y checklists para bajar la carga mental y ordenar la semana.',
  image: "/Bonus_4_La_Agenda_Invisible_de_la_Docente_Organizada.webp"

},
{
  num: 5,
  title: 'Imprimibles que Te Salvan la Semana',
  desc: 'Recursos visuales listos para imprimir y usar de inmediato en sala.',
  image: "/Bonus_5_Imprimibles_que_Te_Salvan_la_Semana.webp"

}];

export function BonusesSection() {
  return (
    <section className="py-16 md:py-24 bg-white pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading font-extrabold text-[#1a2e5a] text-3xl md:text-5xl leading-tight mb-4">
            Material Complementario
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 font-bold">
            Y además, te llevás estos Bonos Exclusivos
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {bonuses.map((b, i) =>
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
            className="bg-[#f8f8f8] border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center">
            
              <div className="flex-shrink-0 w-full md:w-44">
                <img
                src={b.image}
                alt={`Bono ${b.num}: ${b.title}`}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-48 md:h-44 object-cover rounded-2xl shadow-md" />
              
              </div>
              <div className="flex-grow text-center md:text-left">
                <span className="inline-flex items-center gap-1.5 bg-[#f9d6e3] text-[#1a2e5a] font-bold text-sm tracking-wide uppercase px-4 py-2 rounded-xl shadow-sm mb-3">
                  Bono {b.num} · Gratis
                </span>
                <h3 className="font-heading font-bold text-[#1a2e5a] text-xl md:text-2xl mb-2 flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-2xl">🎁</span> {b.title}
                </h3>
                <p className="text-slate-600 text-[16px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}