// src/app/organizador/page.tsx
import Image from "next/image";
import Link from "next/link";
import Sponsors from "@/components/Sponsors";

export default function OrganizadorPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-44 pb-20 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 dark:bg-cyan-900/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Nuestra Trayectoria e Identidad
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
            El <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">Organizador</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base leading-relaxed">
            Conoce la historia, la pasión académica y el origen del comité detrás de la organización del Congreso ARGEMANT.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* LAYOUT GRID: Historia (Izquierda) + Social (Derecha) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* --- COLUMNA IZQUIERDA: LINEA DE TIEMPO / HISTORIA (2/3 del ancho) --- */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* BLOQUE 1: El Origen */}
            <div className="relative pl-10 md:pl-16 border-l-2 border-slate-200 dark:border-slate-800">
              {/* Indicador de número flotante en el lateral */}
              <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center font-bold text-xs text-blue-600 dark:text-cyan-400 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                01
              </div>
              <h3 className="text-2xl font-black text-slate-850 dark:text-white mb-4 tracking-tight flex items-center gap-2">
                Una Pasión Compartida
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-4">
                La convocatoria inicial para efectuar este Congreso nació de una <strong className="text-blue-600 dark:text-cyan-350 font-bold">pasión</strong>. 
                Progresivamente ingenieros, profesionales de diversas orientaciones, técnicos e idóneos la compartieron.
              </p>
              <p className="text-slate-500 dark:text-slate-405 leading-relaxed text-base">
                Ha sido iniciativa de Mantenedores y Gestores de diversos procesos organizacionales de Activos a lo largo de todo su ciclo de vida. 
                Profesionales que lideran y administran Activos Físicos que se relacionan con los humanos, los bienes intangibles y la información.
              </p>
            </div>

            {/* BLOQUE 2: La Comunidad ARGEMANT */}
            <div className="relative pl-10 md:pl-16 border-l-2 border-slate-200 dark:border-slate-800">
              <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center font-bold text-xs text-blue-600 dark:text-cyan-400 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                02
              </div>
              <h3 className="text-2xl font-black text-slate-855 dark:text-white mb-4 tracking-tight">
                El Nacimiento de ARGEMANT
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
                Estos apasionados por la especialidad desarrollaron y expusieron saberes inéditos, fruto de la experiencia y la investigación. 
                Esto convocó rápidamente a otros que buscaban dónde canalizar esta disciplina transversal.
              </p>
              
              <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-slate-300 dark:border-slate-800/80 shadow-md shadow-slate-200/40 dark:shadow-lg relative overflow-hidden mb-4">
                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 blur-xl rounded-full"></div>
                <p className="italic text-slate-700 dark:text-slate-300 leading-relaxed">
                  "Se agruparon en torno de una entidad que poseía similares muy activas y convocantes en muchos otros países, pero no en Argentina: <strong className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400 not-italic font-bold">El ARGEMANT</strong>."
                </p>
              </div>
              
              <p className="text-slate-500 dark:text-slate-405 leading-relaxed text-base">
                Luego se sumaron proveedores, consultoras, medios de prensa, organizaciones civiles, gubernamentales y educativas.
              </p>
            </div>

            {/* BLOQUE 3: CIGAF y UTN */}
            <div className="relative pl-10 md:pl-16 border-l-2 border-slate-200 dark:border-slate-800">
              <div className="absolute -left-[18px] top-0 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-500 flex items-center justify-center font-bold text-xs text-blue-600 dark:text-cyan-400 shadow-sm dark:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                03
              </div>
              <h3 className="text-2xl font-black text-slate-855 dark:text-white mb-4 tracking-tight">
                Vinculación Académica: CIGAF
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg mb-6">
                En este quehacer trabajaron en la elaboración del proyecto de creación de un centro de investigación y desarrollo:
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-white/80 dark:bg-gradient-to-r dark:from-slate-900/50 dark:to-slate-950/20 p-5 rounded-2xl border border-slate-300 dark:border-slate-800/60 shadow-md shadow-slate-200/30 dark:shadow-lg">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-4 rounded-xl shadow-md shrink-0 text-white">
                    {/* Icono Universidad */}
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                </div>
                <div>
                    <h4 className="font-extrabold text-slate-850 dark:text-white text-xl">CIGAF</h4>
                    <p className="text-sm text-blue-600 dark:text-cyan-400 mt-0.5">Centro de Investigación y Gestión de Activos Físicos</p>
                    <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Vinculado a la Universidad Tecnológica Nacional (UTN)</p>
                </div>
              </div>
            </div>

            {/* BLOQUE 4: El Presente y Llamado a la Acción */}
            <div className="bg-white/90 dark:bg-gradient-to-br dark:from-blue-950/30 dark:via-slate-900/40 dark:to-slate-950 p-8 rounded-3xl border border-blue-300 dark:border-blue-500/20 shadow-lg shadow-slate-200/45 dark:shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/5 blur-2xl rounded-full pointer-events-none"></div>
              
              <h3 className="text-2xl font-black text-slate-855 dark:text-white mb-4 flex items-center gap-2">
                <span className="text-blue-600 dark:text-cyan-450">❖</span> Misión Actual
              </h3>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-base mb-6">
                Hoy, cuando el mundo reconoce la importancia de la Gestión de Activos a través de iniciativas como la 
                <strong className="text-slate-850 dark:text-white"> Norma ISO 55000</strong>, el CIGAF y el Argemant convocan a todas las entidades, 
                profesionales, consultores y trabajadores a <strong>UNIRSE</strong> a esta iniciativa para el **24 y 25 de Septiembre de 2026**.
              </p>
              
              <Link 
                href="/inscripcion"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Sumarse a la Iniciativa →
              </Link>
            </div>

          </div>


          {/* --- COLUMNA DERECHA: SOCIAL HUB (1/3 del ancho) --- */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
                
                {/* Tarjeta de Facebook */}
                <div className="bg-white/95 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl border border-slate-300 dark:border-slate-800/80 shadow-lg shadow-slate-200/45 dark:shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-center text-white">
                        <h3 className="text-white font-extrabold flex items-center justify-center gap-2 text-sm uppercase tracking-wider">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733.956-2.733 2.596v1.376h3.613l-.6 3.667h-3.013v7.98h-5.08Z"/></svg>
                            Comunidad Online
                        </h3>
                    </div>
                    
                    <div className="flex justify-center bg-white p-1">
                        <iframe 
                            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FARGEMANT%2F&tabs=timeline&width=340&height=525&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" 
                            width="340" 
                            height="525" 
                            style={{border:'none', overflow:'hidden', borderRadius: '12px'}} 
                            scrolling="no" 
                            frameBorder="0" 
                            allowTransparency={true}
                            allow="encrypted-media"
                        ></iframe>
                    </div>
                    
                    <div className="p-4 text-center border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/40 dark:bg-slate-950/40">
                        <p className="text-xs text-slate-500">Síguenos para novedades en tiempo real</p>
                    </div>
                </div>

                {/* Tarjeta Extra de Contacto Rápido */}
                <div className="bg-white/85 dark:bg-slate-900/30 backdrop-blur-sm p-6 rounded-3xl border border-slate-300 dark:border-slate-800/80 text-center shadow-md shadow-slate-200/35">
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-2">¿Tienes alguna consulta directa?</p>
                    <Link href="mailto:info@argemant.com" className="text-blue-600 dark:text-cyan-400 font-extrabold hover:text-blue-800 dark:hover:text-white transition-colors duration-300 block text-lg">
                        info@argemant.com
                    </Link>
                </div>

            </div>
          </div>

        </div>
      </div>
      {/* Sponsors oficiales de cierre */}
      <Sponsors />
    </main>
  );
}