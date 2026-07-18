// src/components/Speakers.tsx
import Image from 'next/image';
import { speakers } from '@/data/speakers';

export default function Speakers() {
  return (
    <section id="speakers" className="py-14 md:py-16 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white relative z-10 scroll-mt-32 transition-colors duration-500">
      {/* Glow ambiental sutil de fondo */}
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-blue-500/5 dark:bg-blue-900/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-10">
          <p className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-3">Conoce a los Expertos</p>
          <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">
            Protagonistas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">2026</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id} 
              className="group bg-white/70 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl p-4 border border-slate-300 dark:border-slate-800/80 hover:border-blue-500/40 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] shadow-md shadow-slate-200/40 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center"
            >
              
              {/* Contenedor de la Imagen (Tamaño fijo controlado) */}
              <div className="relative mb-4">
                {/* Marco decorativo alrededor de la foto */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg opacity-15 dark:opacity-25 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                
                <div className="relative w-[88px] h-[116px] md:w-[96px] md:h-[126px] rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 shadow-md ring-1 ring-black/5 dark:ring-white/10">
                  <Image 
                    src={speaker.image} 
                    alt={speaker.name}
                    width={110}   // Respetamos el ancho original
                    height={145}  // Respetamos el alto original
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    unoptimized // Ayuda a veces con imágenes externas viejas para que no las procese de más
                  />
                </div>

                {/* Bandera flotante (si existe) */}
                {speaker.flag && (
                  <span className="absolute -top-3 -right-3 text-2xl drop-shadow-md bg-white dark:bg-slate-900 rounded-full w-8 h-8 flex items-center justify-center border border-slate-200 dark:border-slate-700">
                    {speaker.flag}
                  </span>
                )}
              </div>

              {/* Información Textual */}
              <div className="text-center w-full">
                <h3 className="text-base font-bold text-slate-855 dark:text-white mb-1.5 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {speaker.name}
                </h3>
                
                <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-medium mb-3 min-h-9 flex items-center justify-center">
                  {speaker.role}
                </p>
                
                {/* Chip de Empresa */}
                <div className="inline-block bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/40 text-blue-600 dark:text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {speaker.company}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
