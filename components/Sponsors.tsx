// src/components/Sponsors.tsx
import Image from "next/image";
import Link from "next/link";
import { sponsors } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950 overflow-hidden relative transition-colors duration-500">
      {/* Decoración de fondo sutil para darle profundidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/5 dark:bg-blue-900/5 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado Compacto */}
        <div className="text-center mb-8">
          <p className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.2em] uppercase text-[10px] mb-1">
            Alianzas Estratégicas
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
            Auspiciantes Oficiales
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Grid de Logos Compacto (6 por fila en escritorio, 3/4 en móvil) */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {sponsors.map((sponsor, index) => (
            <Link
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center p-3 bg-white dark:bg-white rounded-2xl shadow-sm border border-slate-300 dark:border-slate-200 transition-all duration-500 transform hover:-translate-y-0.5 z-10"
            >
              {/* Efecto de brillo detrás de la tarjeta al hacer hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-500 -z-10"></div>

              {/* Contenedor de Imagen Compacto */}
              <div className="relative w-full h-12 md:h-16 flex items-center justify-center">
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  className="object-contain p-1 transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 33vw, 16vw"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action Compacto */}
        <div className="mt-8 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-slate-650 dark:text-slate-400 text-sm font-medium">¿Quieren sumar su organización al evento?</p>
          <Link 
            href="/inscripcion" 
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-5 py-2 rounded-full font-bold transition-all text-xs uppercase tracking-wider shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-0.5 duration-300"
          >
            Quiero ser Auspiciante
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}