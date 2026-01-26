// src/app/inscripcion/page.tsx
import InscripcionForm from "@/components/InscripcionForm";

export default function InscripcionPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-44 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
            Únete al evento del año
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Pre-Inscripción <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">2025</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Completa el formulario para reservar tu lugar. Te enviaremos la cotización formal y los detalles para completar el pago.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUMNA IZQUIERDA: EL FORMULARIO (Ocupa 2 espacios) */}
          <div className="lg:col-span-2 bg-slate-900/50 p-8 md:p-10 rounded-3xl border border-slate-800 shadow-2xl backdrop-blur-sm h-fit">
            <InscripcionForm />
          </div>

          {/* COLUMNA DERECHA: INFORMACIÓN COMERCIAL (Ocupa 1 espacio) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* 1. TARJETA DE ARANCELES */}
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900 p-6 rounded-2xl border border-blue-500/30 relative overflow-hidden">
                {/* Brillo decorativo */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/20 blur-xl rounded-full pointer-events-none"></div>
                
                <h3 className="text-lg font-bold text-white mb-2">Arancel de Inscripción</h3>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-black text-white">$ Consultar</span>
                </div>
                <p className="text-xs text-blue-300 font-medium mb-4">* A los precios indicados se le debe adicionar el IVA.</p>
                
                <div className="space-y-2">
                    <div className="bg-blue-600/20 border border-blue-500/30 px-3 py-2 rounded-lg flex items-center gap-2">
                        <span className="text-blue-400">🏷️</span>
                        <span className="text-sm text-white font-medium">Descuento por Pago Temprano</span>
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/30 px-3 py-2 rounded-lg flex items-center gap-2">
                        <span className="text-blue-400">👥</span>
                        <span className="text-sm text-white font-medium">Descuento por Grupos</span>
                    </div>
                </div>
            </div>

            {/* 2. TARJETA: QUÉ INCLUYE */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                   <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Tu pase incluye:
                </h3>
                <ul className="space-y-3">
                    {[
                        "Lunch y Coffees (Catering)",
                        "Material completo del evento",
                        "Certificado de asistencia",
                        "Acceso a sesiones plenarias",
                        "Descuentos en actividades relacionadas"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                            <span className="text-blue-500 mt-0.5">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 3. MÉTODOS DE PAGO */}
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-white mb-4">Formas de Pago</h3>
                <div className="grid grid-cols-2 gap-3">
                    {/* Transferencia */}
                    <div className="bg-slate-800 p-3 rounded-xl text-center border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="text-xl mb-1">🏦</div>
                        <p className="text-xs text-gray-300 font-medium leading-tight">Transferencia<br/>Bancaria</p>
                    </div>
                    {/* Cheque */}
                    <div className="bg-slate-800 p-3 rounded-xl text-center border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="text-xl mb-1">✒️</div>
                        <p className="text-xs text-gray-300 font-medium leading-tight">Cheque</p>
                    </div>
                    {/* Mercado Pago */}
                    <div className="bg-slate-800 p-3 rounded-xl text-center border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="text-xl mb-1">🤝</div>
                        <p className="text-xs text-gray-300 font-medium leading-tight">Mercado Pago</p>
                    </div>
                    {/* PayPal */}
                    <div className="bg-slate-800 p-3 rounded-xl text-center border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="text-xl mb-1">🌍</div>
                        <p className="text-xs text-gray-300 font-medium leading-tight">PayPal</p>
                    </div>
                    {/* Western Union */}
                    <div className="bg-slate-800 p-3 rounded-xl text-center border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="text-xl mb-1">💸</div>
                        <p className="text-xs text-gray-300 font-medium leading-tight">Western Union</p>
                    </div>
                    {/* Efectivo */}
                    <div className="bg-slate-800 p-3 rounded-xl text-center border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="text-xl mb-1">💵</div>
                        <p className="text-xs text-gray-300 font-medium leading-tight">Efectivo</p>
                    </div>
                </div>
            </div>

            {/* CONTACTO DIRECTO */}
            <div className="text-center pt-4">
                <p className="text-sm text-gray-400 mb-2">¿Dudas con la facturación?</p>
                <a href="mailto:administracion@argemant.com" className="text-blue-400 font-bold hover:text-white transition-colors">
                    administracion@argemant.com
                </a>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}