// src/app/blog/[id]/page.tsx
import { noticias } from "@/data/noticias";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import Sponsors from "@/components/Sponsors";
import { notFound } from "next/navigation";

// Esta función genera la página dinámica
export default async function NoticiaDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  
  const post = noticias.find((n) => n.id.toString() === id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-44 pb-20 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-500/5 dark:bg-blue-900/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-cyan-500/5 dark:bg-cyan-900/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Botón volver */}
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 dark:text-cyan-400 dark:hover:text-cyan-300 font-bold text-sm tracking-wider uppercase mb-8 inline-flex items-center group transition-colors duration-300">
          <span className="mr-2 group-hover:-translate-x-1.5 transition-transform duration-300">←</span> 
          Volver a Novedades
        </Link>

        {/* Encabezado de la Noticia */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-cyan-100 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-cyan-300 dark:border-cyan-500/20">
              {post.categoria}
            </span>
            <span className="text-slate-500 dark:text-slate-400 text-sm">📅 {post.fecha}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-8 uppercase tracking-tight">
            {post.titulo}
          </h1>
          
          {/* Imagen Principal */}
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg dark:shadow-2xl">
            <Image 
              src={post.imagen}
              alt={post.titulo}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Cuerpo de la Noticia */}
        <article 
          className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-750 dark:text-slate-300 leading-relaxed font-normal"
          dangerouslySetInnerHTML={{ __html: post.contenido || "" }}
        />

        {/* Separador */}
        <hr className="border-slate-200 dark:border-slate-900 my-16" />

        {/* Formulario de Contacto al pie */}
        <ContactForm />
      </div>
      {/* Sponsors oficiales de cierre */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Sponsors />
      </div>
    </main>
  );
}