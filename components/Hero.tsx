// src/components/Hero.tsx
import Link from 'next/link';
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden transition-colors duration-500">
      
      {/* --- CAPA DE FONDO --- */}
      <div className="absolute inset-0 z-0">
        <Image 
            src="/fotoCongreso2025.jpg"
            alt="Auditorio Argemant" 
            fill
            className="object-cover"
            priority 
        />
        
        {/* Capa de contraste dependiente del tema: reducida en claro para ver la foto, pero con blur para mejorar el contraste de texto */}
        <div className="absolute inset-0 bg-slate-50/50 dark:bg-slate-950/85 backdrop-blur-[3px] transition-colors duration-500"></div>
        
        {/* Degradado para fundirse con la página */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/10 to-slate-50 dark:via-transparent dark:to-slate-950 transition-all duration-500"></div>
      </div>

      {/* --- EFECTO GLOW RADIAL AMBIENTE --- */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-500/10 blur-[130px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none z-0"></div>

      {/* --- CONTENIDO --- */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        
        {/* Badge de Fechas Prominente */}
        <div className="inline-flex items-center gap-2 bg-blue-100/90 dark:bg-blue-950/50 border border-blue-200/80 dark:border-blue-900/40 text-blue-700 dark:text-cyan-300 text-xs md:text-sm font-extrabold px-6 py-2.5 rounded-full uppercase tracking-widest mb-6 shadow-sm animate-pulse">
          📅 24 y 25 de Septiembre de 2026
        </div>

        {/* Subtítulo: Azul brillante o cyan */}
        <h2 className="text-xs md:text-sm font-bold tracking-[0.25em] text-blue-600 dark:text-cyan-450 mb-6 uppercase drop-shadow-sm">
          Sociedad Argentina de Gestión de Activos y Mantenimiento
        </h2>
        
        {/* Título principal: se cambió to-cyan-500 a to-indigo-700 en claro para que se vea la última letra */}
        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-slate-900 dark:text-white tracking-tight">
          CONGRESO <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">
            ARGEMANT 2026
          </span>
        </h1>
        
        {/* Párrafo descriptivo */}
        <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
          El evento líder que reúne a los expertos de las mejores empresas. <br className="hidden md:inline"/>
          Sede oficial del Comité Panamericano de Ingeniería de Mantenimiento (COPIMAN).
        </p>
        
        {/* Botones */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link 
            href="/inscripcion" 
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-[0_0_20px_rgba(37,99,235,0.25)] dark:shadow-[0_0_35px_rgba(37,99,235,0.4)]"
          >
            Pre-Inscripción Online
          </Link>
          
          <Link 
            href="/cronograma" 
            className="w-full sm:w-auto bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200 dark:border-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-800 dark:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5 shadow-md"
          >
            Ver Cronograma
          </Link>
        </div>
      </div>
    </section>
  );
}