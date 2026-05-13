import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-premium-water/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-premium-accent/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-12 bg-premium-sand"></span>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-premium-sand">Salud Intestinal & Recuperación</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl leading-[0.9] font-serif mb-8 tracking-tighter">
            L-Glutamina <br />
            <span className="italic text-premium-accent">Bioser Balance.</span>
          </h1>
          
          <p className="text-lg text-premium-ink/70 font-sans max-w-lg mb-10 leading-relaxed">
            Pureza micronizada para quienes buscan el equilibrio perfecto entre rendimiento deportivo y bienestar digestivo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-premium-accent text-white px-8 py-4 rounded-full flex items-center justify-center gap-2 group hover:shadow-xl hover:shadow-premium-accent/20 transition-all duration-300">
              <span className="text-xs uppercase tracking-widest font-bold">Añadir al Carrito</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-premium-sand/30 text-premium-sand px-8 py-4 rounded-full hover:bg-premium-sand/5 transition-colors">
              <span className="text-xs uppercase tracking-widest font-bold">Descubrir Ciencia</span>
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 opacity-60">
            <div className="flex flex-col">
              <span className="text-2xl font-serif">100%</span>
              <span className="text-[10px] uppercase tracking-widest">Pura</span>
            </div>
            <div className="h-8 w-[1px] bg-premium-ink/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif">KOSHER</span>
              <span className="text-[10px] uppercase tracking-widest">Certificado</span>
            </div>
            <div className="h-8 w-[1px] bg-premium-ink/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif">GMP</span>
              <span className="text-[10px] uppercase tracking-widest">Estándar</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          {/* Subtle glow behind product */}
          <div className="absolute w-[80%] h-[80%] bg-premium-water/10 rounded-full blur-[80px]" />
          
          <img 
            src="https://images.unsplash.com/photo-1550573105-893322da5490?q=80&w=1000&auto=format&fit=crop" 
            alt="Bioser L-Glutamina" 
            className="relative z-10 w-full max-w-[500px] object-contain drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 z-20 bg-white p-4 rounded-2xl shadow-xl border border-premium-silver flex flex-col items-center gap-1"
          >
            <div className="w-10 h-10 rounded-full bg-premium-water/10 flex items-center justify-center">
              <span className="text-premium-water font-bold">A+</span>
            </div>
            <span className="text-[9px] uppercase tracking-widest font-bold">Pureza Mineral</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
