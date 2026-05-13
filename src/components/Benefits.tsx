import { motion } from 'motion/react';
import { ShieldCheck, Zap, Activity, HeartPulse } from 'lucide-react';

const benefits = [
  {
    title: "Recuperación Muscular",
    description: "Acelera la síntesis proteica y reduce el catabolismo después de entrenamientos intensos.",
    icon: Zap,
    color: "bg-premium-water/10 text-premium-water"
  },
  {
    title: "Salud Intestinal",
    description: "Repara y fortalece las vellosidades intestinales, mejorando la absorción de nutrientes.",
    icon: Activity,
    color: "bg-premium-accent/10 text-premium-accent"
  },
  {
    title: "Sistema Inmune",
    description: "Combustible esencial para las células inmunitarias, fortaleciendo tus defensas naturales.",
    icon: ShieldCheck,
    color: "bg-premium-leaf/20 text-premium-accent"
  },
  {
    title: "Bienestar General",
    description: "Equilibra el metabolismo del nitrógeno y apoya la salud cognitiva durante el estrés.",
    icon: HeartPulse,
    color: "bg-premium-sand/10 text-premium-sand"
  }
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-accent"
          >
            Potencial Biológico
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl mt-4 mb-6"
          >
            Beneficios respaldados por la <span className="italic">evidencia científica.</span>
          </motion.h2>
          <p className="text-premium-ink/60 leading-relaxed">
            Nuestra fórmula está diseñada para aquellos que exigen el máximo rendimiento físico y mental. No es solo un suplemento, es arquitectura biológica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-premium-silver hover:shadow-2xl hover:shadow-premium-accent/5 transition-all duration-300"
            >
              <div className={`${benefit.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                <benefit.icon className="w-6 h-6 text-premium-ink" />
              </div>
              <h3 className="text-xl font-serif mb-4">{benefit.title}</h3>
              <p className="text-sm text-premium-ink/60 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
