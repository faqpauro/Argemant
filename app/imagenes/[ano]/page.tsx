// src/app/imagenes/[ano]/page.tsx
import Link from "next/link";
import { getImagesFromYear } from "@/lib/galleryUtils";
import { notFound } from "next/navigation";
import AlbumGrid from "@/components/AlbumGrid"; // Importamos el componente cliente

export default async function AlbumPage({ params }: { params: Promise<{ ano: string }> }) {
  const { ano } = await params;
  
  // LEEMOS LAS FOTOS REALES DE LA CARPETA
  const images = getImagesFromYear(ano);

  if (images.length === 0) {
    // Puedes mostrar un mensaje o un 404 si la carpeta no existe
    // notFound(); 
  }

  return (
    <main className="min-h-screen bg-slate-950 pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navegación Superior */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
                <Link href="/imagenes" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center group mb-4">
                    <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
                    Volver a Galería Histórica
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                    Congreso <span className="text-blue-500">{ano}</span>
                </h1>
            </div>
            <div className="bg-slate-900 px-6 py-3 rounded-full border border-slate-800 text-slate-400 text-sm font-medium">
                {images.length} Fotografías
            </div>
        </div>

        {/* Mostramos mensaje si no hay fotos */}
        {images.length === 0 ? (
            <div className="text-center py-20 bg-slate-900 rounded-2xl border border-slate-800 border-dashed">
                <p className="text-gray-400">Aún no hay fotografías cargadas</p>
            </div>
        ) : (
            // Renderizamos la grilla interactiva
            <AlbumGrid images={images} />
        )}

      </div>
    </main>
  );
}