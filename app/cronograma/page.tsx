// src/app/cronograma/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CronogramaPage() {
  const [isOpen, setIsOpen] = useState(false);

  // URL de la imagen del cronograma
  const cronogramaImg = "https://i.ibb.co/d0CQjHFp/Cronograma-Argemant-2025.png";

  return (
    <main className="min-h-screen bg-slate-950 pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
            Agenda Oficial
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Cronograma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">ARGEMANT 2026</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Conoce los horarios, conferencias y actividades planificadas para este gran encuentro. 
            Haz clic en la imagen para ver los detalles en alta resolución.
          </p>
        </div>

        {/* CONTENEDOR DE LA IMAGEN (PREVIEW) */}
        <div 
          className="relative max-w-5xl mx-auto group cursor-zoom-in"
          onClick={() => setIsOpen(true)}
        >
          {/* Decoración de fondo (Glow) */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>
          
          <div className="relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            {/* Overlay con instrucción */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-black/70 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 border border-white/20">
                🔍 Clic para ampliar
              </span>
            </div>

            {/* Imagen ajustada para que se vea completa */}
            <div className="aspect-[16/9] w-full relative">
                <Image 
                src={cronogramaImg}
                alt="Cronograma Detallado"
                fill
                className="object-contain bg-white/5" // object-contain asegura que se vea entera sin recortar
                priority
                />
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-16">
            <h3 className="text-white font-bold text-xl mb-4">¿Ya elegiste tus charlas favoritas?</h3>
            <Link href="/inscripcion" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20 hover:scale-105">
                Inscribirme al Congreso
            </Link>
        </div>

      </div>

      {/* --- MODAL (LIGHTBOX) --- */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)} // Cierra al hacer clic afuera
        >
            {/* Botón cerrar */}
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-50"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Contenedor Scrollable por si la imagen es muy alta */}
            <div className="w-full h-full overflow-auto flex items-center justify-center">
                <div className="relative w-full h-full min-h-[500px] md:min-h-[80vh]">
                    <Image 
                        src={cronogramaImg}
                        alt="Cronograma Full Screen"
                        fill
                        className="object-contain" // Muestra la imagen entera maximizada
                        quality={100}
                    />
                </div>
            </div>
        </div>
      )}

    </main>
  );
}