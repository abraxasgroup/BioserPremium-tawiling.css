import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center glass m-4 rounded-full max-w-[calc(100%-2rem)] mx-auto"
    >
      <div className="flex items-center gap-2">
        <span className="font-serif text-xl font-bold tracking-tighter uppercase italic text-premium-accent">Bioser</span>
        <span className="h-4 w-[1px] bg-premium-ink/20 ml-2"></span>
        <span className="text-[10px] uppercase tracking-widest font-sans font-medium opacity-60 text-premium-sand">Balance</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-[12px] uppercase tracking-widest font-medium">
        <a href="#beneficios" className="hover:opacity-50 transition-opacity">Beneficios</a>
        <a href="#ciencia" className="hover:opacity-50 transition-opacity">Ciencia</a>
        <a href="#tienda" className="hover:opacity-50 transition-opacity font-bold text-premium-accent">Tienda</a>
        <a href="#comparativa" className="hover:opacity-50 transition-opacity">Comparativa</a>
        <a href="#faq" className="hover:opacity-50 transition-opacity">FAQ</a>
      </div>
      
      <a href="#tienda" className="bg-premium-accent text-white px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-premium-water transition-colors shadow-lg shadow-premium-accent/20">
        Comprar Ahora
      </a>
    </motion.nav>
  );
}
