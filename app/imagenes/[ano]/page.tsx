// src/app/imagenes/[ano]/page.tsx
import Link from "next/link";
import { getImagesFromYear } from "@/lib/galleryUtils";
import AlbumGrid from "@/components/AlbumGrid";
import Sponsors from "@/components/Sponsors";

export default async function AlbumPage({ params }: { params: Promise<{ ano: string }> }) {
  const { ano } = await params;
  
  // LEEMOS LAS FOTOS REALES DE LA CARPETA
  const images = getImagesFromYear(ano);

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-44 pb-20 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navegación Superior */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
                <Link href="/imagenes" className="text-blue-600 hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-bold text-sm tracking-wider uppercase inline-flex items-center group mb-4">
                    <span className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300">←</span> 
                    Volver a Galería Histórica
                </Link>
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                    Congreso <span className="text-blue-600 dark:text-cyan-400">{ano}</span>
                </h1>
            </div>
            <div className="bg-white dark:bg-slate-900 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 text-slate-550 dark:text-slate-400 text-sm font-semibold shadow-sm">
                {images.length} Fotografías
            </div>
        </div>

        {/* Mostramos mensaje si no hay fotos */}
        {images.length === 0 ? (
            <div className="text-center py-20 bg-white/70 dark:bg-slate-900/40 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800">
                <p className="text-slate-500 dark:text-gray-400 font-bold">Aún no hay fotografías cargadas para esta edición</p>
            </div>
        ) : (
            // Renderizamos la grilla interactiva
            <AlbumGrid images={images} />
        )}
      </div>
      {/* Sponsors oficiales de cierre */}
      <Sponsors />
    </main>
  );
}