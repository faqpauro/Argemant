// src/app/inscripcion/page.tsx
import InscripcionForm from "@/components/InscripcionForm";
import Sponsors from "@/components/Sponsors";

export default function InscripcionPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-44 pb-20 text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Glow ambiental de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-cyan-400 font-bold tracking-[0.25em] uppercase text-xs mb-3">
            Asegura tu lugar en el encuentro líder
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 uppercase">
            Pre-Inscripción <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-900 dark:from-blue-400 dark:via-cyan-300 dark:to-blue-400">2026</span>
          </h1>
          <div className="inline-flex items-center gap-2 bg-blue-100/80 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/40 text-blue-700 dark:text-cyan-300 text-xs md:text-sm font-extrabold px-5 py-2.5 rounded-full uppercase tracking-widest mb-6">
            📅 Fechas Oficiales: 24 y 25 de Septiembre de 2026
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed mt-2">
            Completa el formulario para reservar tu lugar en el congreso. Te enviaremos la cotización formal y los detalles para completar el pago.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: EL FORMULARIO (Ocupa 2 espacios) */}
          <div className="lg:col-span-2 bg-white/75 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-300 dark:border-slate-800/80 shadow-lg shadow-slate-200/40 dark:shadow-2xl h-fit">
            <InscripcionForm />
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN COMERCIAL (Ocupa 1 espacio) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* 1. TARJETA DE ARANCELES */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 dark:from-blue-950/40 dark:via-slate-900/60 dark:to-slate-950/20 p-6 rounded-3xl border border-blue-300 dark:border-blue-500/20 relative overflow-hidden shadow-md shadow-slate-200/30 dark:shadow-xl">
                {/* Brillo decorativo */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full pointer-events-none"></div>
                
                <h3 className="text-lg font-black text-slate-850 dark:text-white mb-2 uppercase tracking-wide">Arancel de Inscripción</h3>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-black text-slate-800 dark:text-white">$ Consultar</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-5">* A los precios indicados se le debe adicionar el IVA vigente.</p>
                
                <div className="space-y-3">
                    <div className="bg-white dark:bg-blue-950/60 border border-slate-200 dark:border-blue-900/40 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xs">
                        <span className="text-blue-600 dark:text-cyan-400 text-lg">🏷️</span>
                        <span className="text-xs text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider">Descuento Pago Temprano</span>
                    </div>
                    <div className="bg-white dark:bg-blue-950/60 border border-slate-200 dark:border-blue-900/40 px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xs">
                        <span className="text-blue-600 dark:text-cyan-400 text-lg">👥</span>
                        <span className="text-xs text-slate-700 dark:text-slate-200 font-bold uppercase tracking-wider">Descuento Corporativo / Grupos</span>
                    </div>
                </div>
            </div>

            {/* 2. TARJETA: QUÉ INCLUYE */}
            <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-md">
                <h3 className="text-lg font-bold text-slate-850 dark:text-white mb-5 flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3 uppercase tracking-wider">
                   <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Tu pase incluye:
                </h3>
                <ul className="space-y-3.5">
                    {[
                        "Acceso a todas las sesiones plenarias y técnicas",
                        "Material académico completo y resúmenes digitales",
                        "Lunch de camaradería y coffee breaks (catering)",
                        "Certificado oficial de asistencia avalado por CIGAF / UTN",
                        "Acceso preferencial a workshops del congreso"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-650 dark:text-slate-300">
                            <span className="text-blue-600 dark:text-cyan-455 mt-0.5 shrink-0">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* 3. MÉTODOS DE PAGO */}
            <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-200 dark:border-slate-800/80 shadow-md">
                <h3 className="text-lg font-bold text-slate-850 dark:text-white mb-5 border-b border-slate-100 dark:border-slate-800 pb-3 uppercase tracking-wider">Formas de Pago</h3>
                <div className="grid grid-cols-2 gap-3">
                    {[
                      { emoji: "🏦", title: "Transf. Bancaria" },
                      { emoji: "✒️", title: "Cheque" },
                      { emoji: "🤝", title: "Mercado Pago" },
                      { emoji: "🌍", title: "PayPal" },
                      { emoji: "💸", title: "Western Union" },
                      { emoji: "💵", title: "Efectivo" },
                    ].map((method, idx) => (
                       <div key={idx} className="bg-slate-50 dark:bg-slate-950/60 p-3 rounded-2xl border border-slate-300 dark:border-slate-850 shadow-xs text-center hover:border-blue-500/30 transition-all duration-300 group">
                           <div className="text-xl mb-1 group-hover:scale-110 transition-transform duration-300">{method.emoji}</div>
                           <p className="text-[10px] text-slate-650 dark:text-slate-400 font-bold uppercase tracking-wider leading-tight">{method.title}</p>
                       </div>
                    ))}
                </div>
            </div>

            {/* CONTACTO DIRECTO */}
            <div className="text-center pt-4">
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-1">Facturación y Administración</p>
                <a href="mailto:administracion@argemant.com" className="text-blue-600 dark:text-cyan-400 font-extrabold hover:text-blue-800 dark:hover:text-cyan-300 transition-colors duration-300 text-sm">
                    administracion@argemant.com
                </a>
            </div>

          </div>

        </div>
      </div>
      {/* Sponsors oficiales de cierre */}
      <Sponsors />
    </main>
  );
}