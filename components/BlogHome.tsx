// src/components/BlogHome.tsx
import Image from "next/image";
import Link from "next/link";
import { noticias } from "@/data/noticias";

export default function BlogHome() {
  const noticiasDestacadas = noticias.slice(0, 3);

  return (
    <section id="noticias" className="py-20 bg-slate-950 text-white scroll-mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de sección */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Últimas <span className="text-blue-500">Noticias</span>
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Mantente actualizado con las novedades de la comunidad.
            </p>
          </div>
          {/* Este enlace SÍ se mantiene porque está fuera de las tarjetas */}
          <Link href="/blog" className="hidden md:inline-block text-blue-400 hover:text-blue-300 font-bold hover:underline transition-all">
            Ver todas las noticias →
          </Link>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticiasDestacadas.map((post) => (
            /* CAMBIO: El contenedor principal ahora es el Link */
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group block bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              {/* Imagen */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={post.imagen} 
                  alt={post.titulo}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {post.categoria}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-3 flex items-center gap-2">
                  <span>📅 {post.fecha}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-blue-400 transition-colors">
                  {post.titulo}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.resumen}
                </p>
                
                {/* CAMBIO: "Leer más" ahora es un span visual, no un Link funcional (porque el padre ya es Link) */}
                <span className="text-sm font-bold text-blue-500 group-hover:text-blue-300 uppercase tracking-widest flex items-center gap-2">
                  Leer más
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Botón móvil */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-block bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition-colors">
            Ver todas las noticias
          </Link>
        </div>

      </div>
    </section>
  );
}