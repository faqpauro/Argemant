// src/components/AlbumGrid.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// Función auxiliar para saber si es video
const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export default function AlbumGrid({ images }: { images: string[] }) {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <>
      {/* GRID MASONRY */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((fileSrc, idx) => (
          <div 
              key={idx} 
              className="relative group break-inside-avoid rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-800/80 hover:border-blue-500/50 cursor-zoom-in shadow-md shadow-slate-200/40 hover:shadow-xl transition-all duration-300 bg-white dark:bg-slate-900"
              onClick={() => setSelectedFile(fileSrc)}
          >
              {/* Overlay azul al pasar el mouse */}
              <div className="absolute inset-0 bg-blue-900/5 dark:bg-blue-900/10 z-10 transition-colors duration-300 pointer-events-none"></div>
              
              {/* Icono (Play si es video, Lupa si es foto) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-black/60 backdrop-blur-sm p-3 rounded-full text-white">
                      {isVideo(fileSrc) ? (
                        <svg className="w-8 h-8 pl-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      ) : (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                      )}
                  </div>
              </div>

              {isVideo(fileSrc) ? (
                <video 
                  src={fileSrc}
                  className="w-full h-auto object-cover"
                  muted
                  loop
                  autoPlay
                  playsInline
                />
              ) : (
                <Image 
                    src={fileSrc}
                    alt="Foto del congreso"
                    width={800} 
                    height={600}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                    style={{ width: '100%', height: 'auto' }}
                />
              )}
          </div>
        ))}
      </div>

      {/* LIGHTBOX (PANTALLA COMPLETA) */}
      {selectedFile && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
            onClick={() => setSelectedFile(null)}
        >
            {/* Botón Cerrar */}
            <button 
                className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-all z-50 cursor-pointer"
                onClick={() => setSelectedFile(null)}
            >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <div 
              className="relative w-full h-full max-h-[90vh] flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
                {isVideo(selectedFile) ? (
                  <video 
                    src={selectedFile}
                    className="max-w-full max-h-full shadow-2xl rounded-lg"
                    controls
                    autoPlay
                  />
                ) : (
                  <Image 
                      src={selectedFile}
                      alt="Full screen"
                      fill
                      className="object-contain drop-shadow-2xl"
                      quality={100}
                  />
                )}
            </div>
        </div>
      )}
    </>
  );
}