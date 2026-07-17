// src/app/blog/page.tsx
import Image from "next/image";
import Link from "next/link";
import { noticias } from "@/data/noticias";
import Sponsors from "@/components/Sponsors";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-44 pb-20 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Actualidad y Conocimiento
          </p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Novedades <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">Argemant</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Todas las actualizaciones sobre conferencias, normativa ISO 55000, gestión de activos y mantenimiento industrial.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {noticias.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group block bg-white/75 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl overflow-hidden border border-slate-300 dark:border-slate-800/85 hover:border-blue-500/50 hover:shadow-xl dark:hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] shadow-md shadow-slate-200/40 hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Imagen con efecto Zoom al hacer hover en la tarjeta */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image 
                  src={post.imagen} 
                  alt={post.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {post.categoria}
                </div>
              </div>

              <div className="p-8">
                <div className="text-slate-500 dark:text-slate-400 text-xs font-semibold mb-3 flex items-center gap-1.5">
                  <span>📅 {post.fecha}</span>
                </div>
                
                {/* Título cambia de color al pasar el mouse */}
                <h2 className="text-xl font-bold mb-4 leading-snug text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.titulo}
                </h2>
                
                <p className="text-slate-650 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {post.resumen}
                </p>
                
                <span className="text-blue-600 dark:text-cyan-400 border-b-2 border-blue-500/30 dark:border-cyan-500/30 pb-1 group-hover:text-blue-800 dark:group-hover:text-cyan-300 group-hover:border-blue-500 dark:group-hover:border-cyan-300 transition-all inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  Leer artículo completo 
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* Sponsors oficiales de cierre */}
      <Sponsors />
    </main>
  );
}