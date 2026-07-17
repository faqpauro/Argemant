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
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Inicializar tema desde localStorage (por defecto es "light")
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex flex-col bg-white dark:bg-slate-950 ${
        scrolled 
          ? "shadow-lg border-b border-slate-200/80 dark:border-slate-900/85 py-0" 
          : "border-b border-slate-100 dark:border-slate-900/30 py-1.5"
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
                className="h-14 w-auto object-contain hover:brightness-110 transition-all duration-300 dark:brightness-100"
                priority
              />
            </Link>
          </div>

          {/* MENÚ DE ESCRITORIO */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={getHref(link)}
                  className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-2 py-2 text-sm font-semibold transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-blue-500 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
                </Link>
              ))}

              {/* BOTÓN ALTERNADORES DE TEMA */}
              <button
                onClick={toggleTheme}
                aria-label="Cambiar tema"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 hover:scale-105 transform transition-all duration-300 shadow-sm"
              >
                {theme === "light" ? (
                  // Luna (Cambia a oscuro)
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  // Sol (Cambia a claro)
                  <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                )}
              </button>

              <Link
                href="/inscripcion"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)] dark:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:scale-105 transform"
              >
                Inscribirse
              </Link>
            </div>
          </div>

          {/* BOTÓN MÓVIL */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* BOTÓN ALTERNADOR TEMA MÓVIL */}
            <button
              onClick={toggleTheme}
              aria-label="Cambiar tema"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-350 transition-all duration-300"
            >
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none"
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
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-900 shadow-2xl transition-all">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getHref(link)}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
             <Link
                href="/inscripcion"
                onClick={() => setIsOpen(false)}
                className="text-white bg-gradient-to-r from-blue-600 to-cyan-500 block px-3 py-2 rounded-md text-base font-bold text-center mt-4 shadow-lg"
              >
                Inscribirse
            </Link>
          </div>
        </div>
      )}

      {/* --- BARRA DE NOTICIAS (TICKER INFINITO) --- */}
      <div className="w-full bg-slate-100/90 dark:bg-slate-900/80 backdrop-blur-md text-slate-700 dark:text-slate-300 text-[11px] md:text-xs font-semibold py-2 border-t border-slate-200/80 dark:border-slate-800/60 relative shadow-inner z-50 flex overflow-hidden group">
        
        {/* Etiqueta NEWS Fija */}
        <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 z-20 flex items-center font-bold tracking-widest text-[10px] shadow-[4px_0_15px_rgba(0,0,0,0.15)] dark:shadow-[4px_0_15px_rgba(0,0,0,0.5)]">
          NOTICIAS
        </div>

        {/* CONTENEDOR DE LA ANIMACIÓN (Doble lista) */}
        {/* LISTA 1 */}
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center pl-24">
          {/* Item estático con fecha del congreso */}
          <div className="flex items-center mx-6 text-blue-600 dark:text-cyan-400 font-extrabold whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full mr-2"></span>
            <span>CONGRESO 24 Y 25 DE SEPTIEMBRE DE 2026 - ¡PRE-INSCRÍBETE!</span>
          </div>

          {tickerNews.map((noticia, index) => (
            <Link 
              key={`news-1-${index}`} 
              href={`/blog/${noticia.id}`}
              className="flex items-center mx-6 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-cyan-400 rounded-full mr-2"></span>
              <span className="hover:underline decoration-blue-500 dark:decoration-cyan-400 underline-offset-4">
                {noticia.titulo.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>

        {/* LISTA 2 (Clon exacto para el loop) */}
        <div className="flex animate-infinite-scroll group-hover:[animation-play-state:paused] min-w-full shrink-0 items-center pl-24" aria-hidden="true">
          {/* Item estático con fecha del congreso */}
          <div className="flex items-center mx-6 text-blue-600 dark:text-cyan-400 font-extrabold whitespace-nowrap">
            <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full mr-2"></span>
            <span>CONGRESO 24 Y 25 DE SEPTIEMBRE DE 2026 - ¡PRE-INSCRÍBETE!</span>
          </div>

          {tickerNews.map((noticia, index) => (
            <Link 
              key={`news-2-${index}`} 
              href={`/blog/${noticia.id}`}
              className="flex items-center mx-6 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 bg-blue-500 dark:bg-cyan-400 rounded-full mr-2"></span>
              <span className="hover:underline decoration-blue-500 dark:decoration-cyan-400 underline-offset-4">
                {noticia.titulo.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>

      </div>

    </nav>
  );
}