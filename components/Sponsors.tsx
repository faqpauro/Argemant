// src/components/Sponsors.tsx
import Image from "next/image";
import Link from "next/link";
import { sponsors } from "@/data/sponsors";

export default function Sponsors() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden relative">
      {/* Decoración de fondo sutil para darle profundidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm mb-3">
            Alianzas Estratégicas
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Auspiciantes Oficiales
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid de Logos - CAMBIO: Menos columnas para que sean más grandes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10">
          {sponsors.map((sponsor, index) => (
            <Link
              key={index}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              // CAMBIO EN TARJETA: Más padding, sombra más fuerte, efecto hover de escala más notorio
              className="group relative flex items-center justify-center p-8 bg-white rounded-3xl shadow-2xl shadow-black/50 border-2 border-transparent hover:border-blue-400/50 transition-all duration-500 transform hover:scale-105 z-10"
            >
              {/* Efecto de "brillo" sutil detrás de la tarjeta al hacer hover */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-400 to-cyan-300 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 -z-10"></div>

              {/* Contenedor de Imagen - CAMBIO: Mucho más alto (h-28 en móviles, h-36 en PC) */}
              <div className="relative w-full h-28 md:h-36 flex items-center justify-center">
                {/* CAMBIO: Quitamos grayscale y opacity. Están a full color siempre */}
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  fill
                  // Usamos 'object-contain' con un poco de padding interno (p-2) 
                  // para que el logo grande no toque los bordes de la tarjeta blanca.
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <p className="text-gray-300 text-lg mb-6 font-medium">¿Quieren sumar su organización a este evento de jerarquía?</p>
          <Link 
            href="/contacto" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-full font-bold transition-all text-sm uppercase tracking-widest shadow-lg shadow-blue-900/30 hover:shadow-blue-500/50 transform hover:-translate-y-1"
          >
            Conviértete en Sponsor
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}