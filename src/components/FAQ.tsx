import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    k: "¿Cómo debo tomar la L-Glutamina de Bioser?",
    v: "Recomendamos tomar 5g (un scoop) mezclados con 200ml de agua o tu bebida favorita. Para recuperación deportiva, el momento ideal es inmediatamente después del entrenamiento o antes de dormir. Para salud intestinal, tomarlo en ayunas."
  },
  {
    k: "¿Qué significa que sea 'Micronizada'?",
    v: "La micronización reduce el tamaño de las partículas del polvo. Esto aumenta significativamente la superficie de contacto, permitiendo que el suplemento se disuelva mejor y se absorba más rápido en el torrente sanguíneo."
  },
  {
    k: "¿Tiene algún sabor o aditivo?",
    v: "No. Nuestra filosofia es la pureza absoluta. El producto es 100% L-Glutamina pura, sin saborizantes, conservantes ni rellenos (fillers). Esto permite que puedas mezclarla con cualquier líquido sin alterar su sabor."
  },
  {
    k: "¿Es segura para celíacos o personas con alergias?",
    v: "Sí. Bioser L-Glutamina es naturalmente libre de gluten, lácteos y soja. Además, contamos con certificación Kosher, lo que garantiza los más altos estándares de limpieza y pureza en el proceso de fabricación."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-premium-paper">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-accent">Centro de Claridad</span>
          <h2 className="text-4xl md:text-5xl mt-6 font-serif">Preguntas <br /><span className="italic">Frecuentes.</span></h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-3xl border border-premium-silver overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left"
              >
                <span className="font-serif text-lg md:text-xl pr-8">{faq.k}</span>
                <div className="flex-shrink-0 w-10 h-10 rounded-full border border-premium-silver flex items-center justify-center">
                  {openIndex === i ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-8 text-premium-ink/60 leading-relaxed text-base">
                      {faq.v}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
