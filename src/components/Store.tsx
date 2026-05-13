import { motion } from 'motion/react';
import { ShoppingCart, Star, Plus } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "L-Glutamina Micronizada",
    subtitle: "Recuperación & Salud Intestinal",
    price: "$18.500",
    weight: "300g",
    category: "Aminoácidos",
    image: "https://images.unsplash.com/photo-1550573105-893322da5490?q=80&w=600&auto=format&fit=crop",
    tag: "Por Unidad",
    color: "bg-premium-accent"
  },
  {
    id: 2,
    name: "Naranja Kids",
    subtitle: "Magnesio + Vitamina C para Niños",
    price: "$12.800",
    weight: "225g",
    category: "Infantil",
    image: "https://images.unsplash.com/photo-1590151025501-447545199651?q=80&w=600&auto=format&fit=crop",
    tag: "Naranja Natural",
    color: "bg-orange-500"
  },
  {
    id: 3,
    name: "Combo Vitalidad Plus",
    subtitle: "Colágeno + Magnesio + Vit C",
    price: "$34.200",
    weight: "Pack 3 Unidades",
    category: "Combos",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=600&auto=format&fit=crop",
    tag: "Combos",
    color: "bg-premium-water"
  },
  {
    id: 4,
    name: "Bioser Mayorista",
    subtitle: "Stock Completo para Profesionales",
    price: "Consultar",
    weight: "Precios Diferenciales",
    category: "Mayorista",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
    tag: "Especial",
    color: "bg-premium-sand"
  }
];

export default function Store() {
  return (
    <section id="tienda" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-sand">Catálogo Curado</span>
            <h2 className="text-4xl md:text-5xl mt-4 font-serif">Nutrición que <br /><span className="italic text-premium-accent">transforma tu biología.</span></h2>
          </div>
          <div className="hidden md:flex gap-4">
             {['Todos', 'Por Unidad', 'Infantil', 'Combos', 'Mayorista'].map((cat, i) => (
                <button key={i} className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold border transition-all ${i === 0 ? 'bg-premium-ink text-white border-premium-ink' : 'border-premium-silver hover:border-premium-accent hover:text-premium-accent'}`}>
                  {cat}
                </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] bg-premium-paper rounded-[40px] overflow-hidden mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Badge */}
                {p.tag && (
                  <div className="absolute top-6 left-6">
                    <span className={`${p.color} text-white text-[9px] uppercase tracking-widest font-bold px-4 py-2 rounded-full shadow-lg`}>
                      {p.tag}
                    </span>
                  </div>
                )}

                {/* Quick Add Button */}
                <div className="absolute inset-0 bg-premium-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
                   <button className="bg-white text-premium-ink w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95">
                      <Plus className="w-6 h-6" />
                   </button>
                </div>
              </div>

              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                   <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-premium-sand">{p.category}</span>
                   <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-premium-sand text-premium-sand" />
                      <span className="text-[10px] font-bold">5.0</span>
                   </div>
                </div>
                <h3 className="text-xl font-serif mb-1 group-hover:text-premium-accent transition-colors">{p.name}</h3>
                <p className="text-xs text-premium-ink/50 mb-4">{p.subtitle}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-premium-silver">
                  <div>
                    <span className="text-lg font-bold">{p.price}</span>
                    <span className="text-[10px] ml-2 opacity-40 font-bold uppercase">{p.weight}</span>
                  </div>
                  <button className="flex items-center gap-2 text-premium-accent group/btn">
                    <span className="text-[10px] uppercase tracking-widest font-black opacity-0 group-hover/btn:opacity-100 transition-opacity">🛒 Comprar</span>
                    <ShoppingCart className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-10 bg-premium-accent/5 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-8 border border-premium-accent/10">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl">
                 <ShoppingCart className="w-8 h-8 text-premium-accent" />
              </div>
              <div>
                 <h4 className="text-xl font-serif mb-1 italic">¿Tu pedido es mayorista?</h4>
                 <p className="text-sm opacity-60">Consultá nuestras condiciones especiales para gimnasios y nutricionistas.</p>
              </div>
           </div>
           <button className="border-2 border-premium-accent text-premium-accent px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-premium-accent hover:text-white transition-all whitespace-nowrap">
              Contacto Mayorista
           </button>
        </div>
      </div>
    </section>
  );
}
