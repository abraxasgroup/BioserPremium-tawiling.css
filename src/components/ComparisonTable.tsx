import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

const features = [
  { name: "Pureza Farmacéutica >99%", premium: true, standard: false },
  { name: "Tecnología de Micronización", premium: true, standard: "Opcional" },
  { name: "Libre de Rellenos y Aditivos", premium: true, standard: false },
  { name: "Certificación GMP & Kosher", premium: true, standard: false },
  { name: "Absorción Intestinal Optimizada", premium: true, standard: "Limitada" },
  { name: "Testeo de Laboratorio de Terceros", premium: true, standard: false },
];

export default function ComparisonTable() {
  return (
    <section id="comparativa" className="section-padding bg-premium-paper">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif">La diferencia está <br /><span className="italic">en el detalle.</span></h2>
        </div>

        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-premium-silver">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-premium-accent text-white">
                <th className="p-8 text-[11px] uppercase tracking-widest font-bold">Característica</th>
                <th className="p-8 text-[11px] uppercase tracking-widest font-bold text-center">Bioser Premium</th>
                <th className="p-8 text-[11px] uppercase tracking-widest font-bold text-center">Suplementos Estándar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-premium-silver">
              {features.map((feature, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group hover:bg-premium-water/5 transition-colors"
                >
                  <td className="p-8 font-medium text-sm md:text-base">{feature.name}</td>
                  <td className="p-8 text-center">
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-premium-water/10 flex items-center justify-center">
                        <Check className="w-4 h-4 text-premium-water" />
                      </div>
                    </div>
                  </td>
                  <td className="p-8 text-center">
                    <div className="flex justify-center items-center text-xs uppercase tracking-widest opacity-40 italic">
                      {typeof feature.standard === 'string' ? (
                        feature.standard
                      ) : feature.standard ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <X className="w-4 h-4" />
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          
          <div className="p-12 text-center bg-premium-paper/30">
             <p className="text-xs uppercase tracking-[0.2em] font-medium opacity-50 mb-6">¿Estás listo para elevar tu estándar?</p>
             <button className="bg-premium-ink text-white px-10 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:scale-105 transition-transform active:scale-95 shadow-xl">
                Elegir Bioser
             </button>
          </div>
        </div>
      </div>
    </section>
  );
}
