import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const faqs = [
{
  q: '¿Es un producto físico o digital?',
  a: 'Es 100% digital. Recibís acceso inmediato por email para descargar y usar desde cualquier dispositivo.'
},
{
  q: '¿Necesito experiencia previa?',
  a: 'No. Está pensado para docentes con experiencia, practicantes y estudiantes que recién empiezan.'
},
{
  q: '¿Sirve para todas las salas?',
  a: 'Sí. Incluye recursos para sala de 18 meses, 2 años y 3 años.'
},
{
  q: '¿Sirve si ya tengo materiales armados?',
  a: 'Perfecto. Todo está diseñado para complementar y mejorar lo que ya tenés.'
},
{
  q: '¿Sirve para docentes de cualquier provincia?',
  a: 'Sí. Pensado para nivel inicial de toda Argentina.'
}];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-[#f8f8f8] pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-[#1a2e5a] leading-tight">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-sm border border-slate-200">
                
                <button
                  className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}>
                  
                  <span className="font-heading font-bold text-[#1a2e5a] text-lg md:text-xl">
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#f5c842] text-[#1a2e5a]' : 'bg-[#1a2e5a]/5 text-[#1a2e5a]'}`}
                    aria-hidden="true">
                    
                    {isOpen ?
                    <Minus className="w-5 h-5" /> :

                    <Plus className="w-5 h-5" />
                    }
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1
                    }}
                    exit={{
                      height: 0,
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.3,
                      ease: 'easeInOut'
                    }}
                    className="overflow-hidden">
                    
                      <div className="px-6 md:px-8 pb-8 -mt-2 text-slate-600 leading-relaxed text-[16px] md:text-lg">
                        {faq.a}
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>);

          })}
        </div>
      </div>
    </section>);

}