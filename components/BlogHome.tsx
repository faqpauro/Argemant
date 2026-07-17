// src/components/BlogHome.tsx
import Image from "next/image";
import Link from "next/link";
import { noticias } from "@/data/noticias";

export default function BlogHome() {
  const noticiasDestacadas = noticias.slice(0, 3);

  return (
    <section id="noticias" className="py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white scroll-mt-32 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de sección */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">
              Últimas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">Noticias</span>
            </h2>
            <p className="text-slate-650 dark:text-slate-400 max-w-xl text-base md:text-lg">
              Mantente actualizado con las novedades de la comunidad.
            </p>
          </div>
          <Link href="/blog" className="hidden md:inline-block text-blue-600 hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-bold hover:underline transition-all">
            Ver todas las noticias →
          </Link>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {noticiasDestacadas.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group block bg-white/70 dark:bg-slate-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800/80 hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-blue-500/10 shadow-md shadow-slate-200/40 hover:-translate-y-2 transition-all duration-300"
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
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {post.categoria}
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-3 flex items-center gap-2">
                  <span>📅 {post.fecha}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 leading-snug text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.titulo}
                </h3>
                
                <p className="text-slate-650 dark:text-slate-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {post.resumen}
                </p>
                
                <span className="text-xs font-bold text-blue-600 dark:text-cyan-405 group-hover:text-blue-800 dark:group-hover:text-cyan-300 uppercase tracking-widest flex items-center gap-2">
                  Leer más
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Botón móvil */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/blog" className="inline-block bg-slate-200 text-slate-800 dark:bg-slate-800 dark:text-white px-6 py-3 rounded-full font-bold hover:bg-slate-350 dark:hover:bg-slate-700 transition-colors">
            Ver todas las noticias
          </Link>
        </div>

      </div>
    </section>
  );
}