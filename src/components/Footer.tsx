import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="section-padding bg-[#1C251F] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="font-serif text-3xl font-bold tracking-tighter uppercase italic text-premium-leaf">Bioser</span>
              <span className="text-[12px] uppercase tracking-widest font-sans font-medium opacity-40 ml-2">Premium Health</span>
            </div>
            <p className="text-premium-silver/50 max-w-sm mb-10 leading-relaxed text-lg">
              Redefiniendo el estándar de la suplementación a través de la sinergia entre naturaleza y biotecnología.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-premium-water hover:text-white transition-all cursor-pointer">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-leaf/40 mb-8">Tienda</h4>
            <ul className="space-y-4 text-premium-silver/60 uppercase tracking-widest text-[10px] font-bold">
              <li><a href="#tienda" className="hover:text-premium-leaf transition-colors flex items-center gap-2 text-premium-leaf font-black">L-GLUTAMINA <ArrowUpRight className="w-3 h-3 opacity-30" /></a></li>
              <li><a href="#tienda" className="hover:text-white transition-colors flex items-center gap-2">NARANJA KIDS <ArrowUpRight className="w-3 h-3 opacity-30" /></a></li>
              <li><a href="#tienda" className="hover:text-white transition-colors flex items-center gap-2">MAGNESIO <ArrowUpRight className="w-3 h-3 opacity-30" /></a></li>
              <li><a href="#tienda" className="hover:text-white transition-colors flex items-center gap-2">COMBOS <ArrowUpRight className="w-3 h-3 opacity-30" /></a></li>
              <li><a href="#tienda" className="hover:text-white transition-colors flex items-center gap-2">MAYORISTA <ArrowUpRight className="w-3 h-3 opacity-30" /></a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold text-premium-silver/40 mb-8">Newsletter</h4>
            <p className="text-sm text-premium-silver/50 mb-6 font-serif">Unite a nuestra comunidad para recibir insights científicos mensuales.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="TU EMAIL" 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-[10px] uppercase tracking-widest outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-0 top-0 text-[10px] uppercase tracking-widest font-bold text-premium-accent">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.4em] opacity-40 font-bold">
          <span>© 2026 Bioser Balance S.A. | Buenos Aires, Argentina</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
