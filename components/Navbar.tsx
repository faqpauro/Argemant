// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { noticias } from "@/data/noticias";

const navLinks = [
  { name: "Inicio", href: "/#inicio" },
  { name: "Speakers", href: "/#speakers" },
  { name: "Noticias", href: "DYNAMIC" },
  { name: "Organizador", href: "/organizador" },
  { name: "Conferencias 2026", href: "/cronograma" },
  { name: "Imágenes", href: "/imagenes" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getHref = (link: { name: string; href: string }) => {
    if (link.name === "Noticias") {
      return pathname === "/" ? "#noticias" : "/blog";
    }
    return link.href;
  };

  // Seleccionamos las noticias para el ticker
  const tickerNews = noticias.slice(0, 5);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 flex flex-col ${
        scrolled 
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800" 
          : "bg-slate-900/50 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex-shrink-0 cursor-pointer flex items-center">
            <Link href="/#inicio">
              <Image 
                src="/logo.png"
                alt="Logo Argemant"
                width={180}
                height={50}
                className="h-14 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={getHref(link)}
                  className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md text-sm font-medium transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/inscripcion"
                className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-500/20 hover:scale-105 transform"
              >
                Inscribirse
              </Link>
            </div>
          </div>

          {/* BOTÓN MÓVIL */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menú</span>
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getHref(link)}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
             <Link
                href="/inscripcion"
                onClick={() => setIsOpen(false)}
                className="text-white bg-blue-600 block px-3 py-2 rounded-md text-base font-bold text-center mt-4"
              >
                Inscribirse
            </Link>
          </div>
        </div>
      )}

      {/* --- BARRA DE NOTICIAS (TICKER INFINITO) --- */}
      <div className="w-full bg-blue-900/95 text-white text-[11px] md:text-xs font-medium py-1.5 border-t border-blue-800 relative shadow-inner z-50 flex overflow-hidden group">
        
        {/* Etiqueta NEWS Fija */}
        <div className="absolute left-0 top-0 bottom-0 bg-blue-700 px-3 z-20 flex items-center font-bold tracking-wider shadow-[4px_0_10px_rgba(0,0,0,0.3)]">
          NOTICIAS
        </div>

        {/* CONTENEDOR DE LA ANIMACIÓN (Doble lista) */}
        {/* Usamos 'group-hover' en el padre para pausar AMBAS listas a la vez */}
        
        {/* LISTA 1 */}
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center">
          {tickerNews.map((noticia, index) => (
            <Link 
              key={`news-1-${index}`} 
              href={`/blog/${noticia.id}`}
              className="flex items-center mx-6 hover:text-blue-200 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              <span className="hover:underline decoration-blue-400 underline-offset-2">
                {noticia.titulo.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>

        {/* LISTA 2 (Clon exacto para el loop) */}
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center" aria-hidden="true">
          {tickerNews.map((noticia, index) => (
            <Link 
              key={`news-2-${index}`} 
              href={`/blog/${noticia.id}`}
              className="flex items-center mx-6 hover:text-blue-200 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
              <span className="hover:underline decoration-blue-400 underline-offset-2">
                {noticia.titulo.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>

      </div>

    </nav>
  );
}