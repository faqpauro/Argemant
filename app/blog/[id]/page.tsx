// src/app/blog/[id]/page.tsx
import { noticias } from "@/data/noticias";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Esta función genera la página dinámica
export default async function NoticiaDetalle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  
  const post = noticias.find((n) => n.id.toString() === id);

  if (!post) {
    notFound();
  }

  return (
    // CAMBIO AQUI: Cambié 'pt-24' por 'pt-44'. 
    // Esto empuja todo el contenido hacia abajo para que no lo tape el menú + noticias.
    <main className="min-h-screen bg-slate-950 pt-44 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Botón volver */}
        <Link href="/#noticias" className="text-blue-400 hover:text-blue-300 font-medium mb-8 inline-flex items-center group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> 
          Volver a Noticias
        </Link>

        {/* Encabezado de la Noticia */}
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-600/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-600/30">
              {post.categoria}
            </span>
            <span className="text-gray-400 text-sm">📅 {post.fecha}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-8">
            {post.titulo}
          </h1>
          
          {/* Imagen Principal */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
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
          className="prose prose-invert prose-lg max-w-none text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.contenido || "" }}
        />

        {/* Separador */}
        <hr className="border-slate-800 my-12" />

        {/* Formulario de Contacto al pie */}
        <ContactForm />

      </div>
    </main>
  );
}