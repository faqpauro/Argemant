// src/app/organizador/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function OrganizadorPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
            Nuestra Historia
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            El <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Organizador</span>
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full"></div>
        </div>

        {/* LAYOUT GRID: Historia (Izquierda) + Social (Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* --- COLUMNA IZQUIERDA: TEXTO NARRATIVO (2/3 del ancho) --- */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* BLOQUE 1: El Origen */}
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <h3 className="text-2xl font-bold text-white mb-4">Una Pasión Compartida</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                La convocatoria inicial para efectuar este Congreso nació de una <strong className="text-blue-300">pasión</strong>. 
                Progresivamente ingenieros, profesionales de diversas orientaciones, técnicos e idóneos la compartieron.
              </p>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Ha sido iniciativa de Mantenedores y Gestores de diversos procesos organizacionales de Activos a lo largo de todo su ciclo de vida. 
                Profesionales que lideran y administran Activos Físicos que se relacionan con los humanos, los bienes intangibles y la información.
              </p>
            </div>

            {/* BLOQUE 2: La Comunidad ARGEMANT */}
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 border-2 border-blue-500"></span>
              <h3 className="text-2xl font-bold text-white mb-4">El Nacimiento de ARGEMANT</h3>
              <p className="text-gray-300 leading-relaxed">
                Estos apasionados por la especialidad desarrollaron y expusieron saberes inéditos, fruto de la experiencia y la investigación. 
                Esto convocó rápidamente a otros que buscaban dónde canalizar esta disciplina transversal.
              </p>
              <div className="mt-6 bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <p className="italic text-gray-300">
                  "Se agruparon en torno de una entidad que poseía similares muy activas y convocantes en muchos otros países, pero no en Argentina: <strong className="text-white not-italic">El ARGEMANT</strong>."
                </p>
              </div>
              <p className="text-gray-400 mt-4">
                Luego se sumaron proveedores, consultoras, medios de prensa, organizaciones civiles, del estado y educativas.
              </p>
            </div>

            {/* BLOQUE 3: CIGAF y UTN */}
            <div className="relative pl-8 border-l-2 border-blue-500/30">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-700 border-2 border-blue-500"></span>
              <h3 className="text-2xl font-bold text-white mb-4">Vinculación Académica: CIGAF</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                En este quehacer trabajaron en la elaboración del proyecto de creación de un centro de investigación y desarrollo:
              </p>
              
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="bg-blue-600 p-3 rounded-lg">
                    {/* Icono Universidad */}
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </div>
                <div>
                    <h4 className="font-bold text-white text-lg">CIGAF</h4>
                    <p className="text-sm text-blue-300">Vinculado a la Universidad Tecnológica Nacional (UTN)</p>
                </div>
              </div>
            </div>

            {/* BLOQUE 4: El Presente y Llamado a la Acción */}
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-8 rounded-2xl border border-blue-500/30 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-blue-400">❖</span> Misión Actual
              </h3>
              <p className="text-gray-200 leading-relaxed mb-6">
                Hoy, cuando el mundo reconoce la importancia de la Gestión de Activos a través de iniciativas como la 
                <strong className="text-white"> Norma ISO 55000</strong>, el CIGAF y el Argemant convocan a todas las entidades, 
                profesionales, consultores y trabajadores a <strong>UNIRSE</strong> a esta iniciativa.
              </p>
              <Link 
                href="/contacto"
                className="inline-block bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                Sumarse a la Iniciativa →
              </Link>
            </div>

          </div>


          {/* --- COLUMNA DERECHA: SOCIAL HUB (1/3 del ancho) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-32"> {/* Hace que el widget baje contigo al scrollear */}
                
                {/* Tarjeta de Facebook */}
                <div className="bg-slate-900 p-1 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
                    <div className="bg-[#1877F2] p-3 text-center">
                        <h3 className="text-white font-bold flex items-center justify-center gap-2">
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733.956-2.733 2.596v1.376h3.613l-.6 3.667h-3.013v7.98h-5.08Z"/></svg>
                            Comunidad Online
                        </h3>
                    </div>
                    
                    <div className="flex justify-center bg-white">
                        <iframe 
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FARGEMANT%2F&tabs=timeline&width=340&height=525&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                            width="340" 
                            height="525" 
                            style={{border:'none', overflow:'hidden'}} 
                            scrolling="no" 
                            frameBorder="0" 
                            // CORRECCIÓN AQUÍ: todo en minúsculas y como string
                            allowTransparency={true}
                            allow="encrypted-media"
                        ></iframe>
                    </div>
                    
                    <div className="p-4 text-center">
                        <p className="text-xs text-slate-500">Síguenos para novedades en tiempo real</p>
                    </div>
                </div>

                {/* Tarjeta Extra de Contacto Rápido */}
                <div className="mt-6 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 text-center">
                    <p className="text-gray-400 text-sm mb-2">¿Tienes alguna duda?</p>
                    <Link href="mailto:info@argemant.com" className="text-blue-400 font-bold hover:underline">
                        info@argemant.com
                    </Link>
                </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}