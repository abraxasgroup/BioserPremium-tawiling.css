import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Marcelo Rodríguez",
    role: "Especialista en Nutrición Deportiva",
    quote: "La solubilidad de esta glutamina es lo que realmente la distingue. En mi práctica clínica, la micronización de Bioser ha mostrado resultados superiores en la integridad de la barrera intestinal.",
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Valentina M.",
    role: "Atleta de Alto Rendimiento",
    quote: "Entreno 6 días a la semana y el dolor muscular solía ser un problema. Desde que incorporé Bioser a mi rutina post-entreno, mi recuperación es notablemente más rápida.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Julián S.",
    role: "Emprendedor",
    quote: "Buscaba algo puro para mi salud digestiva. No tiene sabor, se mezcla perfecto con agua y después de dos semanas siento mucha menos inflamación.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function SocialProof() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-accent">Testimonios de Élite</span>
            <h2 className="text-4xl md:text-5xl mt-6 font-serif">Voces que confían en <span className="italic">nuestra pureza.</span></h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-premium-sand text-premium-sand" />)}
            </div>
            <span className="text-sm font-bold">4.9/5 Calificación Promedio</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[32px] bg-white border border-premium-silver/30 flex flex-col justify-between hover:shadow-xl transition-shadow"
            >
              <div>
                <div className="mb-6 flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-premium-sand text-premium-sand" />)}
                </div>
                <p className="text-lg font-serif italic mb-10 leading-relaxed">"{t.quote}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider">{t.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-50 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
