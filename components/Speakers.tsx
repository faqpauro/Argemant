// src/components/Speakers.tsx
import Image from 'next/image';
import { speakers } from '@/data/speakers';

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 bg-slate-900 text-white border-y border-slate-800 shadow-2xl relative z-10 scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight uppercase">
            Protagonistas <span className="text-blue-500">2025</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid de Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker) => (
            <div 
              key={speaker.id} 
              className="group bg-slate-900 rounded-xl p-6 border border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center"
            >
              
              {/* Contenedor de la Imagen (Tamaño fijo controlado) */}
              <div className="relative mb-6">
                {/* Marco decorativo alrededor de la foto */}
                <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg opacity-30 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                
                <div className="relative w-[110px] h-[145px] rounded-lg overflow-hidden bg-slate-800 shadow-lg ring-1 ring-white/10">
                  <Image 
                    src={speaker.image} 
                    alt={speaker.name}
                    width={110}   // Respetamos el ancho original
                    height={145}  // Respetamos el alto original
                    className="object-cover w-full h-full"
                    unoptimized // Ayuda a veces con imágenes externas viejas para que no las procese de más
                  />
                </div>

                {/* Bandera flotante (si existe) */}
                {speaker.flag && (
                  <span className="absolute -top-3 -right-3 text-2xl drop-shadow-md bg-slate-900 rounded-full w-8 h-8 flex items-center justify-center border border-slate-700">
                    {speaker.flag}
                  </span>
                )}
              </div>

              {/* Información Textual */}
              <div className="text-center w-full">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                  {speaker.name}
                </h3>
                
                <p className="text-sm text-gray-400 font-medium mb-3 h-10 flex items-center justify-center">
                  {speaker.role}
                </p>
                
                {/* Chip de Empresa */}
                <div className="inline-block bg-slate-800 border border-slate-700 text-blue-300 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
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