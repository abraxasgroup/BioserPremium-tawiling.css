import { motion } from 'motion/react';

export default function ScienceSection() {
  return (
    <section id="ciencia" className="section-padding bg-[#1C251F] text-white overflow-hidden relative">
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-premium-leaf"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-premium-leaf"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-premium-leaf"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-leaf/60">Molecular precision</span>
            <h2 className="text-4xl md:text-6xl mt-6 mb-8 font-serif leading-tight">
              ¿Por qué <br /> 
              <span className="italic text-premium-leaf">L-Glutamina?</span>
            </h2>
            <div className="space-y-6 text-premium-silver/70 leading-relaxed">
              <p>
                La L-Glutamina es el aminoácido más abundante en el músculo esquelético y el plasma humano. Actúa como el principal transportador de nitrógeno y carbono, esenciales para el metabolismo celular.
              </p>
              <p>
                Bajo condiciones de estrés intenso (físico o metabólico), la demanda de glutamina supera la capacidad del cuerpo para sintetizarla, convirtiéndola en un aminoácido <span className="text-premium-water italic">condicionalmente esencial</span>.
              </p>
              <div className="pt-6 grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-serif text-white mb-2">Micronizada</div>
                  <p className="text-xs uppercase tracking-widest leading-loose">Solubilidad instantánea y absorción del 99% mediante tecnología de reducción de partícula.</p>
                </div>
                <div>
                  <div className="text-3xl font-serif text-white mb-2">Pura</div>
                  <p className="text-xs uppercase tracking-widest leading-loose">Sin rellenos, sin saborizantes, sin excepciones. Grado farmacéutico absoluto de origen vegetal.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square glass rounded-3xl p-12 flex flex-col justify-between border-white/10 overflow-hidden group">
              <div className="relative z-10">
                <div className="text-5xl font-serif mb-2">C₅H₁₀N₂O₃</div>
                <div className="text-[10px] uppercase tracking-[0.4em] opacity-50">Estructura Molecular</div>
              </div>
              
              <div className="flex-1 flex items-center justify-center relative py-12">
                 <div className="absolute w-40 h-40 bg-white/5 rounded-full animate-pulse"></div>
                 <div className="z-10 text-center">
                    <span className="text-8xl font-serif block mb-4">Gln</span>
                    <span className="text-xs uppercase tracking-[0.3em] opacity-40">Codificación Genética</span>
                 </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/10 pt-8 relative z-10">
                <div className="space-y-1">
                  <div className="text-sm font-bold">146.14 g/mol</div>
                  <div className="text-[10px] uppercase opacity-50">Masa Molar</div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-premium-ink transition-all cursor-crosshair">
                   <span className="text-lg">+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
