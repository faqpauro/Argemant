// src/components/WelcomeSplash.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const TICKER_IMAGES = [
  "/Imagenes/2025/foto-frente.jpeg",
  "/Imagenes/2025/fotofinal-v2-1.jpg",
  "/Imagenes/2025/img-20250925-094511.jpg",
  "/Imagenes/2025/img-20250925-wa0030.jpg",
  "/Imagenes/2024/img-3200.jpg",
  "/Imagenes/2024/img-3246.jpg",
  "/Imagenes/2024/img-3302.jpg",
  "/Imagenes/2024/img-3500.jpg"
];

// Duplicamos el listado de imágenes para que el scroll infinito de la marquesina sea continuo y fluido
const DOUBLE_TICKER_IMAGES = [...TICKER_IMAGES, ...TICKER_IMAGES];

export default function WelcomeSplash() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCurtainsOpening, setIsCurtainsOpening] = useState(false);
  const [isSplashFading, setIsSplashFading] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Verificamos si ya vio la animación hoy para no molestar en cada recarga
    const today = new Date().toISOString().split("T")[0];
    const lastShow = localStorage.getItem("lastWelcomeShow");

    if (lastShow !== today) {
      setIsVisible(true);
      // Guardamos la fecha de hoy para que no se repita
      localStorage.setItem("lastWelcomeShow", today);

      // Contador que va bajando de 10 a 0
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, []);

  // Efecto disparado cuando el contador llega a 0
  useEffect(() => {
    if (countdown === 0 && isVisible) {
      // 1. Abrir telón de teatro hacia los costados inmediatamente al llegar a 0
      setIsCurtainsOpening(true);

      // 2. Desvanecer toda la pantalla de bienvenida a los 1.6 segundos de abrir el telón (revelando el home real)
      const fadeSplashTimeout = setTimeout(() => {
        setIsSplashFading(true);
      }, 1600);

      // 3. Desmontar el componente a los 2.6 segundos
      const unmountTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 2650);

      return () => {
        clearTimeout(fadeSplashTimeout);
        clearTimeout(unmountTimeout);
      };
    }
  }, [countdown, isVisible]);

  if (!isVisible) return null;

  // Renderizador único para evitar cualquier discrepancia de alineación, clases o textos
  const renderContent = () => (
    <div className="w-full h-full flex flex-col items-center justify-center text-center px-4 relative">
      
      {/* TIRA DE IMÁGENES SUPERIOR (Marquesina deslizante) */}
      <div className="absolute top-0 left-0 right-0 h-14 md:h-20 bg-slate-950/80 backdrop-blur-sm border-b border-blue-900/30 overflow-hidden flex items-center">
        <div className="flex animate-[tickerScroll_30s_linear_infinite] h-full w-max">
          {DOUBLE_TICKER_IMAGES.map((src, idx) => (
            <div key={`top-${idx}`} className="relative w-28 md:w-44 h-full flex-shrink-0 p-1 md:p-1.5">
              <img 
                src={src} 
                alt="Miniatura Congreso" 
                className="w-full h-full object-cover rounded-md md:rounded-lg border border-slate-800/40"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_60%)] animate-pulse duration-4000"></div>

      {/* LOGO GIGANTE */}
      <div className="relative mb-10 scale-90 sm:scale-100 animate-[logoIntro_1.8s_ease-out_forwards]">
        <div className="absolute -inset-6 bg-blue-500/25 blur-3xl rounded-full opacity-70 animate-pulse"></div>
        <div className="relative w-[380px] h-[120px] sm:w-[650px] sm:h-[200px] flex items-center justify-center">
          <Image 
            src="/logo.png" 
            alt="Logo Argemant" 
            fill
            className="object-contain brightness-125 contrast-110 filter drop-shadow-[0_0_35px_rgba(59,130,246,0.65)]"
            priority
          />
        </div>
      </div>

      {/* TEXTOS DE BIENVENIDA */}
      <div className="space-y-6 max-w-2xl mx-auto opacity-0 animate-[fadeSlideIn_1.2s_ease-out_1s_forwards]">
        <h2 className="text-sm sm:text-xl font-extrabold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 uppercase leading-snug">
          Bienvenido al Encuentro Líder de Gestión de Activos
        </h2>
        
        <div className="inline-block bg-blue-950/70 border border-blue-900/50 text-cyan-300 text-xs sm:text-sm font-extrabold px-8 py-2.5 rounded-full uppercase tracking-widest shadow-md shadow-black/35">
          📅 Jueves 24 y Viernes 25 de Septiembre, 2026
        </div>

        {/* Texto de Cuenta Regresiva dinámico */}
        <div className="pt-2">
          <p className="text-white text-sm sm:text-base font-black tracking-wider uppercase animate-pulse">
            {countdown > 0 ? `Ingresando en ${countdown} segundos...` : "¡Ingresando!"}
          </p>
        </div>
      </div>

      {/* BARRA DE PROGRESO DE 10 SEGUNDOS */}
      <div className="w-56 h-0.5 bg-slate-800 rounded-full mt-12 overflow-hidden opacity-0 animate-[fadeIn_0.5s_ease-out_0.5s_forwards]">
        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full w-full origin-left scale-x-0 animate-[progressTen_10.0s_linear_forwards]"></div>
      </div>

      {/* TIRA DE IMÁGENES INFERIOR (Marquesina deslizante) */}
      <div className="absolute bottom-0 left-0 right-0 h-14 md:h-20 bg-slate-950/80 backdrop-blur-sm border-t border-blue-900/30 overflow-hidden flex items-center">
        <div className="flex animate-[tickerScroll_30s_linear_infinite] h-full w-max">
          {DOUBLE_TICKER_IMAGES.map((src, idx) => (
            <div key={`bottom-${idx}`} className="relative w-28 md:w-44 h-full flex-shrink-0 p-1 md:p-1.5">
              <img 
                src={src} 
                alt="Miniatura Congreso" 
                className="w-full h-full object-cover rounded-md md:rounded-lg border border-slate-800/40"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );

  return (
    <div 
      className={`fixed inset-0 z-[200] select-none transition-all duration-[1000ms] ease-in-out ${
        isSplashFading ? "opacity-0 pointer-events-none scale-102" : "opacity-100"
      }`}
    >
      
      {/* --- FOTO DE FONDO COMPLETA (Detrás del telón) --- */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/fotoCongreso2025.jpg"
          alt="Auditorio Argemant" 
          fill
          className="object-cover"
          priority 
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* --- TELÓN IZQUIERDO --- */}
      <div 
        className={`absolute left-0 top-0 w-1/2 h-full bg-[#081b3b] z-10 origin-left overflow-hidden transition-all duration-[1600ms] cubic-bezier(0.77, 0, 0.175, 1) ${
          isCurtainsOpening ? "scale-x-0 opacity-80" : "scale-x-100 opacity-100"
        }`}
      >
        {/* Efecto de pliegues del telón */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.55)_0px,rgba(0,0,0,0.15)_15px,rgba(255,255,255,0.05)_30px,rgba(0,0,0,0.15)_45px,rgba(0,0,0,0.55)_60px)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/50"></div>

        {/* CONTENIDO CENTRADO (Lado Izquierdo) */}
        <div className="absolute left-0 top-0 w-[200%] h-full">
          {renderContent()}
        </div>
      </div>

      {/* --- TELÓN DERECHO --- */}
      <div 
        className={`absolute right-0 top-0 w-1/2 h-full bg-[#081b3b] z-10 origin-right overflow-hidden transition-all duration-[1600ms] cubic-bezier(0.77, 0, 0.175, 1) ${
          isCurtainsOpening ? "scale-x-0 opacity-80" : "scale-x-100 opacity-100"
        }`}
      >
        {/* Efecto de pliegues del telón */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,rgba(0,0,0,0.55)_0px,rgba(0,0,0,0.15)_15px,rgba(255,255,255,0.05)_30px,rgba(0,0,0,0.15)_45px,rgba(0,0,0,0.55)_60px)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/50"></div>

        {/* CONTENIDO CENTRADO (Lado Derecho - Simétricamente alineado al centro) */}
        <div className="absolute left-[-100%] top-0 w-[200%] h-full">
          {renderContent()}
        </div>
      </div>

      {/* ESTILOS DE ANIMACIÓN DE SPLASH */}
      <style jsx global>{`
        @keyframes logoIntro {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
            filter: blur(10px) brightness(0.5);
          }
          50% {
            filter: blur(0px) brightness(1.3);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0px);
            filter: blur(0px) brightness(1.2) drop-shadow(0 0 45px rgba(59,130,246,0.7));
          }
        }
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes progressTen {
          0% {
            transform: scale-x(0);
          }
          100% {
            transform: scale-x(1);
          }
        }
        @keyframes tickerScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
