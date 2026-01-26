// src/app/blog/page.tsx
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link"; // <--- Importante: Asegúrate de importar Link
import { noticias } from "@/data/noticias";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Novedades <span className="text-blue-500">Argemant</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Todas las actualizaciones sobre conferencias, normativa ISO y gestión de activos.
          </p>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {noticias.map((post) => (
            /* CAMBIO CLAVE:
               1. Usamos <Link> como contenedor principal.
               2. Agregamos la clase "group" para manejar efectos hover en los hijos.
               3. Agregamos hover:translate-y para que la tarjeta "flote" al pasar el mouse.
            */
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group block bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Imagen con efecto Zoom al hacer hover en la tarjeta (gracias a 'group') */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={post.imagen} 
                  alt={post.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-8">
                <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">
                  {post.categoria}
                </span>
                
                {/* Título cambia de color al pasar el mouse por CUALQUIER parte de la tarjeta */}
                <h2 className="text-2xl font-bold mt-2 mb-4 group-hover:text-blue-400 transition-colors">
                  {post.titulo}
                </h2>
                
                <p className="text-gray-400 mb-6 line-clamp-3">
                  {post.resumen}
                </p>
                
                {/* Cambiamos <button> por <span> para evitar errores de HTML inválido dentro de un Link */}
                <span className="text-white border-b-2 border-blue-500 pb-1 group-hover:text-blue-400 group-hover:border-blue-400 transition-colors inline-flex items-center gap-2">
                  Leer artículo completo 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}