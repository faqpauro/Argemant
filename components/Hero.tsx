// src/components/Hero.tsx
import Link from 'next/link';
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
      
      {/* --- CAPA DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/fotoCongreso2025.jpg"
            alt="Auditorio Argemant" 
            fill
            className="object-cover"
            priority 
        />
        
        {/* TRUCO 1: Capa Oscura muy fuerte (bg-slate-900/80) 
            Esto oscurece la foto al 80%. Si te parece muy oscuro, cambia a /70 o /60 */}
        <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply"></div>
        
        {/* TRUCO 2: Degradado negro extra para asegurar contraste total */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-slate-950"></div>
      </div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        
        {/* Subtítulo: Azul brillante y negrita para que destaque */}
        <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] text-blue-400 mb-6 uppercase drop-shadow-md">
          Sociedad Argentina de Gestión de Activos y Mantenimiento
        </h2>
        
        {/* Título: Gigante y con sombra fuerte (drop-shadow-2xl) */}
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight drop-shadow-2xl text-white">
          CONGRESO <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient-x">
            ARGEMANT 2026
          </span>
        </h1>
        
        {/* Párrafo: Letra más clara (gray-100) y con sombra suave */}
        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-lg">
          El evento líder que reúne a los expertos de las mejores empresas. 
          Sede oficial del Comité Panamericano de Ingeniería de Mantenimiento.
        </p>
        
        {/* Botones */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link href="/inscripcion" className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-500">
            Pre-Inscripción Online
          </Link>
          
          <Link href="/cronograma" className="w-full md:w-auto bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg">
            Ver Cronograma
          </Link>
        </div>
      </div>
    </section>
  );
}