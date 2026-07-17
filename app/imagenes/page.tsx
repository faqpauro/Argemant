// src/app/imagenes/page.tsx
import Link from "next/link";
import Image from "next/image";
import { getYearsFromFolders, getImagesFromYear } from "@/lib/galleryUtils";
import Sponsors from "@/components/Sponsors";

export default function ImagenesPage() {
  // Obtenemos los años dinámicamente leyendo las carpetas
  const yearsList = getYearsFromFolders();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-44 pb-20 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Nuestra Trayectoria Visual
          </p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-6 uppercase">
            Galería <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">Histórica</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Revive los mejores momentos de las ediciones anteriores del Congreso. Selecciona un año para explorar su álbum.
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
                className="group relative h-48 md:h-64 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 hover:border-blue-500/50 shadow-md shadow-slate-200/40 dark:shadow-lg transition-all duration-300 transform hover:-translate-y-2 dark:hover:shadow-blue-900/20"
              >
                {/* Imagen de fondo (Portada) */}
                {coverImage ? (
                    <Image 
                        src={coverImage}
                        alt={`Congreso ${year}`}
                        fill
                        className="object-cover opacity-70 group-hover:opacity-50 dark:opacity-50 dark:group-hover:opacity-30 transition-all duration-500 grayscale group-hover:grayscale-0"
                    />
                ) : (
                    // Si la carpeta está vacía, mostramos un fondo gris
                    <div className="absolute inset-0 bg-slate-200 dark:bg-slate-800 opacity-55"></div>
                )}
                
                {/* Overlay degradado */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 via-slate-50/20 dark:via-slate-900/50 to-transparent"></div>

                {/* Texto del Año */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <h2 className="text-4xl md:text-6xl font-black text-slate-800 dark:text-white tracking-tighter drop-shadow-md dark:drop-shadow-2xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {year}
                  </h2>
                </div>
              </Link>
            );
          })}

          {yearsList.length === 0 && (
             <p className="text-slate-500 dark:text-white col-span-full text-center py-10 font-bold">No se encontraron carpetas de imágenes en /public/Imagenes</p>
          )}
        </div>
      </div>
      {/* Sponsors oficiales de cierre */}
      <Sponsors />
    </main>
  );
}