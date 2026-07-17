// src/components/LogoTicker.tsx
import Image from "next/image";
import { historicalLogos } from "@/data/historicalLogos";

export default function LogoTicker() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200/80 dark:bg-slate-950 dark:border-slate-900/50 overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <p className="text-slate-500 dark:text-slate-400 font-bold uppercase tracking-[0.25em] text-xs">
          Empresas que nos han acompañado a lo largo de la historia
        </p>
      </div>

      {/* Contenedor del Carrusel con Máscara de Desvanecimiento en los bordes */}
      <div className="relative w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* LISTA 1 (Original) */}
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          {historicalLogos.map((logo, index) => (
            <li key={`logo-1-${index}`}>
              <div className="relative h-12 w-28 md:h-16 md:w-40 grayscale opacity-60 dark:opacity-45 dark:brightness-150 contrast-125 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-300">
                <Image
                  src={logo}
                  alt={`Logo histórico ${index}`}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </li>
          ))}
        </ul>

        {/* LISTA 2 (Duplicada para el efecto infinito) */}
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
          {historicalLogos.map((logo, index) => (
            <li key={`logo-2-${index}`}>
              <div className="relative h-12 w-28 md:h-16 md:w-40 grayscale opacity-60 dark:opacity-45 dark:brightness-150 contrast-125 hover:grayscale-0 hover:opacity-100 hover:brightness-100 transition-all duration-300">
                <Image
                  src={logo}
                  alt={`Logo histórico duplicado ${index}`}
                  fill
                  className="object-contain"
                  sizes="150px"
                />
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}