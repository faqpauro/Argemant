// src/app/cronograma/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cronogramaData, AgendaEvent } from "@/data/cronogramaData";
import Sponsors from "@/components/Sponsors";

export default function CronogramaPage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedEventId, setExpandedEventId] = useState<number | null>(null);

  // URL de la imagen del cronograma gráfico tradicional (Se mantiene como apoyo visual)
  const cronogramaImg = "https://i.ibb.co/d0CQjHFp/Cronograma-Argemant-2025.png";

  const currentDayData = cronogramaData.find(d => d.dayNumber === selectedDay) || cronogramaData[0];

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Acreditación":
        return {
          bg: "bg-blue-100/80 border-blue-200 text-blue-700 dark:bg-blue-500/10 dark:border-blue-500/30 dark:text-blue-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.06)] dark:group-hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]",
          dot: "bg-blue-500"
        };
      case "Conferencia":
        return {
          bg: "bg-cyan-100/80 border-cyan-200 text-cyan-700 dark:bg-cyan-500/10 dark:border-cyan-500/30 dark:text-cyan-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(34,211,238,0.06)] dark:group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]",
          dot: "bg-cyan-500"
        };
      case "Mesa Redonda":
        return {
          bg: "bg-purple-100/80 border-purple-200 text-purple-700 dark:bg-purple-500/10 dark:border-purple-500/30 dark:text-purple-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.06)] dark:group-hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]",
          dot: "bg-purple-500"
        };
      case "Coffee Break":
      case "Almuerzo":
        return {
          bg: "bg-emerald-100/80 border-emerald-200 text-emerald-700 dark:bg-emerald-500/10 dark:border-emerald-500/30 dark:text-emerald-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(16,185,129,0.06)] dark:group-hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]",
          dot: "bg-emerald-500"
        };
      case "Cierre":
        return {
          bg: "bg-rose-100/80 border-rose-200 text-rose-700 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(244,63,94,0.06)] dark:group-hover:shadow-[0_0_15px_rgba(244,63,94,0.1)]",
          dot: "bg-rose-500"
        };
      default:
        return {
          bg: "bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-500/10 dark:border-slate-500/30 dark:text-slate-400",
          glow: "group-hover:shadow-[0_0_15px_rgba(100,116,139,0.06)] dark:group-hover:shadow-[0_0_15px_rgba(100,116,139,0.1)]",
          dot: "bg-slate-500"
        };
    }
  };

  const toggleEventExpand = (id: number) => {
    setExpandedEventId(expandedEventId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-44 pb-20 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Agenda Académica Oficial
          </p>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-6 uppercase">
            Cronograma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">ARGEMANT 2026</span>
          </h1>
          <p className="text-slate-650 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Explora las conferencias plenarias y técnicas programadas para el **24 y 25 de Septiembre de 2026**. 
            Navega entre los días y haz clic en cada sesión para ver la descripción de los temas.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* SELECTOR DE DÍAS (TABS INTERACTIVOS - SÓLO 2 DÍAS) */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cronogramaData.map((day) => (
            <button
              key={day.dayNumber}
              onClick={() => {
                setSelectedDay(day.dayNumber);
                setExpandedEventId(null);
              }}
              className={`px-8 py-4 rounded-2xl font-bold text-base transition-all duration-300 transform hover:scale-105 border flex flex-col items-center cursor-pointer ${
                selectedDay === day.dayNumber
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 border-cyan-400/50 text-white shadow-[0_0_20px_rgba(37,99,235,0.25)] dark:shadow-[0_0_25px_rgba(37,99,235,0.4)]"
                  : "bg-white dark:bg-slate-900/60 backdrop-blur-md border-slate-300 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 hover:text-slate-850 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-700 shadow-sm"
              }`}
            >
              <span className="text-xs uppercase tracking-wider opacity-85 mb-1">Día 0{day.dayNumber}</span>
              <span className="text-lg">{day.date.split(" de ")[0]}</span>
            </button>
          ))}
        </div>

        {/* RESUMEN DEL DÍA ACTUAL */}
        <div className="max-w-4xl mx-auto mb-10 bg-white/80 dark:bg-slate-900/40 backdrop-blur-md border border-slate-300 dark:border-slate-800/80 p-6 md:p-8 rounded-3xl text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6 shadow-md shadow-slate-200/30 dark:shadow-xl transition-all">
          <div>
            <span className="text-blue-600 dark:text-cyan-400 font-bold text-xs uppercase tracking-widest">Temática Central</span>
            <h2 className="text-xl md:text-2xl font-bold text-slate-850 dark:text-white mt-1 leading-snug">
              {currentDayData.theme}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{currentDayData.date}</p>
          </div>
          <div className="shrink-0 bg-blue-50 border border-blue-150 text-blue-600 dark:bg-blue-950/60 dark:border-blue-900/40 dark:text-cyan-400 px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider">
            {currentDayData.events.length} Sesiones
          </div>
        </div>

        {/* LISTADO DE EVENTOS INTERACTIVO */}
        <div className="max-w-4xl mx-auto space-y-6 mb-20 relative">
          
          {/* Línea vertical de la línea de tiempo (solo en pantallas md+) */}
          <div className="absolute left-[105px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-blue-600/5 dark:from-blue-600/30 dark:via-cyan-400/20 dark:to-blue-500/10 hidden md:block"></div>

          {currentDayData.events.map((event) => {
            const styles = getCategoryStyles(event.category);
            const isExpanded = expandedEventId === event.id;

            return (
              <div 
                key={event.id}
                onClick={() => toggleEventExpand(event.id)}
                className="group flex flex-col md:flex-row gap-4 md:gap-10 items-stretch cursor-pointer select-none"
              >
                {/* 1. HORA (Lado Izquierdo) */}
                <div className="w-full md:w-24 shrink-0 flex md:flex-col justify-between md:justify-center items-center md:items-end text-slate-500 dark:text-slate-400 text-sm font-extrabold tracking-tight py-2 border-b border-slate-100 dark:border-b-0">
                  <span className="text-slate-800 dark:text-slate-300 text-base">{event.time.split(" - ")[0]}</span>
                  <span className="text-xs md:text-right opacity-60">a {event.time.split(" - ")[1]}</span>
                </div>

                {/* Nodo de la línea de tiempo (sólo md+) */}
                <div className="relative hidden md:flex items-center justify-center shrink-0 w-8 z-10">
                  <div className={`w-3.5 h-3.5 rounded-full ${styles.dot} border-4 border-slate-50 dark:border-slate-950 transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]`}></div>
                </div>

                {/* 2. TARJETA DE DETALLE DE LA CHARLA */}
                <div className={`flex-1 bg-white/75 dark:bg-slate-900/30 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 ${
                  isExpanded 
                    ? "bg-white dark:bg-slate-900/60 border-blue-500 dark:border-blue-500/50 shadow-lg dark:shadow-[0_0_25px_rgba(59,130,246,0.1)]" 
                    : "border-slate-300 dark:border-slate-800/80 hover:border-slate-400/80 dark:hover:border-slate-700/80 hover:bg-white dark:hover:bg-slate-900/40 shadow-sm shadow-slate-200/20 hover:shadow-md"
                } ${styles.glow}`}>
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <span className={`text-[10px] font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${styles.bg}`}>
                      {event.category}
                    </span>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      📍 {event.track}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-850 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-snug">
                    {event.title}
                  </h3>

                  {/* Speaker y Compañía */}
                  {event.speaker && (
                    <div className="mt-4 flex items-center gap-3 bg-slate-100/80 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-850/60 p-3 rounded-xl w-fit">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-600/20 text-blue-600 dark:text-blue-400 font-black flex items-center justify-center text-sm shadow-inner uppercase">
                        {event.speaker.split(" ").pop()?.[0] || "P"}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{event.speaker}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-500 uppercase tracking-wider font-bold">{event.company}</p>
                      </div>
                    </div>
                  )}

                  {/* Descripción (Expandible) */}
                  {event.description && (
                    <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[250px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-4">
                        {event.description}
                      </p>
                    </div>
                  )}

                  {/* Indicador de expansión si hay descripción */}
                  {event.description && (
                    <div className="mt-4 flex justify-end text-xs font-bold text-slate-450 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-350 items-center gap-1">
                      <span>{isExpanded ? "Ver menos" : "Ver descripción"}</span>
                      <svg className={`w-4 h-4 transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        <hr className="border-slate-200 dark:border-slate-900 my-16 max-w-5xl mx-auto" />

        {/* SECCIÓN DEL CRONOGRAMA GRÁFICO (TRADICIONAL) */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">Cronograma Histórico de Referencia</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm">
            Si deseas visualizar el diagrama clásico original en formato de matriz del congreso anterior, haz clic en la vista previa a continuación para ampliarlo.
          </p>
        </div>

        <div 
          className="relative max-w-4xl mx-auto group cursor-zoom-in"
          onClick={() => setIsOpen(true)}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl opacity-10 dark:opacity-15 group-hover:opacity-35 blur-xl transition-opacity duration-500"></div>
          
          <div className="relative bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800 shadow-md dark:shadow-2xl">
            {/* Overlay con instrucción */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 z-10 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 border border-white/10 shadow-lg">
                🔍 Clic para ampliar en pantalla completa
              </span>
            </div>

            <div className="aspect-[16/9] w-full relative">
                <Image 
                  src={cronogramaImg}
                  alt="Cronograma Detallado Matriz"
                  fill
                  className="object-contain bg-slate-900/5 dark:bg-slate-950/20"
                  priority
                />
            </div>
          </div>
        </div>

        {/* Call to Action Final */}
        <div className="text-center mt-20">
            <h3 className="text-slate-900 dark:text-white font-bold text-2xl mb-6">¿Estás listo para asegurar tu participación en 2026?</h3>
            <Link 
              href="/inscripcion" 
              className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-10 py-4 rounded-full font-extrabold text-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.25)] dark:shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:scale-105 transform"
            >
              Inscribirme al Congreso
            </Link>
        </div>

      </div>

      {/* --- MODAL (LIGHTBOX) --- */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
            onClick={() => setIsOpen(false)}
        >
            {/* Botón cerrar */}
            <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-white/70 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/50 rounded-full p-3 transition-all z-50 shadow-2xl"
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Contenedor Scrollable */}
            <div className="w-full h-full overflow-auto flex items-center justify-center">
                <div className="relative w-full h-full min-h-[500px] md:min-h-[85vh]">
                    <Image 
                        src={cronogramaImg}
                        alt="Cronograma Full Screen"
                        fill
                        className="object-contain"
                        quality={100}
                    />
                </div>
            </div>
        </div>
      )}

      {/* Sponsors oficiales de cierre */}
      <Sponsors />
    </main>
  );
}