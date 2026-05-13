import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ScienceSection from './components/ScienceSection';
import Store from './components/Store';
import ComparisonTable from './components/ComparisonTable';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function App() {
  return (
    <div className="smooth-scroll selection:bg-premium-accent/20 selection:text-premium-accent">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Trust Bar */}
        <section className="py-12 border-y border-premium-silver bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 overflow-hidden">
            <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 grayscale contrast-75 text-premium-accent">
              <span className="text-xl font-serif tracking-widest">GMP CERTIFIED</span>
              <span className="text-xl font-serif tracking-widest">KOSHER</span>
              <span className="text-xl font-serif tracking-widest">LAB TESTED</span>
              <span className="text-xl font-serif tracking-widest">ISO 9001</span>
              <span className="text-xl font-serif tracking-widest">MADE IN ARG</span>
            </div>
          </div>
        </section>

        <Benefits />
        <ScienceSection />
        
        <Store />

        {/* How it works Visual Step */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
               <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-accent">El Protocolo</span>
               <h2 className="text-4xl md:text-5xl mt-6 font-serif">Simplicidad en la <span className="italic">excelencia.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { step: "01", title: "Medida Exacta", text: "Usá el scoop de 5g incluido para asegurar la dosis terapéutica precisa." },
                { step: "02", title: "Dilución Instantánea", text: "Mezclalo con tu bebida preferida. Se disuelve en segundos sin dejar grumos." },
                { step: "03", title: "Absorción", text: "Consumilo diariamente para mantener niveles óptimos de glutamina en tus tejidos." }
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="text-[120px] font-serif opacity-[0.03] absolute -top-16 -left-4 pointer-events-none">{item.step}</div>
                  <h3 className="text-2xl font-serif mb-4 relative z-10">{item.title}</h3>
                  <p className="text-premium-ink/60 leading-relaxed text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ComparisonTable />
        <SocialProof />
        
        {/* Final CTA Section */}
        <section className="section-padding relative overflow-hidden">
           <div className="absolute inset-0 bg-premium-accent opacity-[0.03] pointer-events-none"></div>
           <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 md:p-24 rounded-[60px] shadow-[0_50px_100px_-20px_rgba(45,74,62,0.15)] border border-premium-silver"
              >
                  <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-premium-sand mb-8 block">Invertí en tu Biología</span>
                  <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter leading-none">
                    Recuperación sin <br />
                    <span className="italic text-premium-accent">compromisos.</span>
                  </h2>
                  <p className="text-lg text-premium-ink/60 mb-12 max-w-lg mx-auto">
                    Sumate a la comunidad Bioser y experimentá la diferencia de la pureza vegetal. Calidad farmacéutica en cada servicio.
                  </p>
                  <button className="bg-premium-accent text-white px-12 py-5 rounded-full flex items-center justify-center gap-3 mx-auto group hover:bg-premium-water transition-all duration-300 shadow-2xl">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold">Comprar L-Glutamina</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="mt-8 text-[10px] uppercase tracking-widest font-bold opacity-30 italic">Bioser Balance: Nutrición Consciente</p>
              </motion.div>
           </div>
        </section>

        <FAQ />
      </main>
      
      <Footer />
    </div>
  );
}
