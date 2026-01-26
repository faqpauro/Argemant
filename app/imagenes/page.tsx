// src/app/imagenes/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getYearsFromFolders, getImagesFromYear } from "@/lib/galleryUtils";

export default function ImagenesPage() {
  // Obtenemos los años dinámicamente leyendo las carpetas
  const yearsList = getYearsFromFolders();

  return (
    <main className="min-h-screen bg-slate-950 pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
            Nuestra Trayectoria Visual
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Galería <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Histórica</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Revive los mejores momentos. Selecciona un año para ver el álbum.
          </p>
        </div>

        {/* Grid de Años */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {yearsList.map((year) => {
            // Buscamos la primera foto de la carpeta para usarla de portada
            const images = getImagesFromYear(year);
            const coverImage = images.length > 0 ? images[0] : null;

            return (
              <Link 
                key={year} 
                href={`/imagenes/${year}`}
                className="group relative h-48 md:h-64 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/20"
              >
                {/* Imagen de fondo (Portada) */}
                {coverImage ? (
                    <Image 
                        src={coverImage}
                        alt={`Congreso ${year}`}
                        fill
                        className="object-cover opacity-50 group-hover:opacity-30 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                    />
                ) : (
                    // Si la carpeta está vacía, mostramos un fondo gris
                    <div className="absolute inset-0 bg-slate-800 opacity-50"></div>
                )}
                
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent"></div>

                {/* Texto del Año */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter drop-shadow-2xl group-hover:text-blue-400 transition-colors">
                    {year}
                  </h2>
                </div>
              </Link>
            );
          })}

          {yearsList.length === 0 && (
             <p className="text-white col-span-full text-center">No se encontraron carpetas en /public/Imagenes</p>
          )}
        </div>
      </div>
    </main>
  );
}