// src/components/InscripcionForm.tsx
"use client";

import { useState, FormEvent } from "react";

export default function InscripcionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulamos una petición al servidor (aquí conectarías tu API real)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  }

  if (isSuccess) {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 rounded-3xl p-8 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-gradient-to-tr from-emerald-600 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-3">¡Pre-Inscripción Enviada!</h3>
        <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed text-sm">
          Hemos registrado tus datos correctamente en el sistema de admisión. Un asesor se contactará contigo en breve para coordinar los métodos de pago y confirmar tu cupo.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-8 text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 font-extrabold text-sm uppercase tracking-wider underline underline-offset-4"
        >
          Enviar otra pre-inscripción
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* GRID DE 2 COLUMNAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* Nombre */}
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre"
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="Tu nombre"
          />
        </div>

        {/* Apellidos (Obligatorio) */}
        <div className="space-y-2">
          <label htmlFor="apellidos" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">
            Apellidos <span className="text-blue-600 dark:text-cyan-400">*</span>
          </label>
          <input 
            type="text" 
            id="apellidos" 
            name="apellidos"
            required
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="Tus apellidos"
          />
        </div>

        {/* Ciudad */}
        <div className="space-y-2">
          <label htmlFor="ciudad" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">Ciudad</label>
          <input 
            type="text" 
            id="ciudad" 
            name="ciudad"
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="Ej: Buenos Aires"
          />
        </div>

        {/* País (Obligatorio) */}
        <div className="space-y-2">
          <label htmlFor="pais" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">
            País <span className="text-blue-600 dark:text-cyan-400">*</span>
          </label>
          <input 
            type="text" 
            id="pais" 
            name="pais"
            required
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="Tu país de residencia"
          />
        </div>

        {/* Email (Obligatorio) */}
        <div className="space-y-2">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">
            Correo electrónico <span className="text-blue-600 dark:text-cyan-400">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="nombre@empresa.com"
          />
        </div>

        {/* Teléfono */}
        <div className="space-y-2">
          <label htmlFor="telefono" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">Teléfono</label>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono"
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="+54 11 ..."
          />
        </div>

        {/* Puesto */}
        <div className="space-y-2">
          <label htmlFor="puesto" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">Puesto / Cargo</label>
          <input 
            type="text" 
            id="puesto" 
            name="puesto"
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="Ej: Gerente de Mantenimiento"
          />
        </div>

        {/* Compañía */}
        <div className="space-y-2">
          <label htmlFor="compania" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">Compañía / Empresa</label>
          <input 
            type="text" 
            id="compania" 
            name="compania"
            className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 dark:placeholder:text-slate-700 text-sm font-medium"
            placeholder="Nombre de la empresa"
          />
        </div>

      </div>

      {/* Descripción (Full Width) */}
      <div className="space-y-2">
        <label htmlFor="descripcion" className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-405 block">Descripción / Comentarios adicionales</label>
        <textarea 
          id="descripcion" 
          name="descripcion"
          rows={4}
          className="w-full bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 text-slate-800 dark:text-white focus:outline-none focus:border-blue-500/80 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-700 resize-none"
          placeholder="¿Tienes alguna consulta específica o requerimiento especial de facturación?"
        ></textarea>
      </div>

      {/* Botón Submit */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full py-4 rounded-full font-extrabold text-lg transition-all duration-300 transform shadow-lg ${
            isSubmitting 
                ? "bg-slate-300 text-slate-500 dark:bg-slate-800 dark:text-slate-500 cursor-not-allowed border border-slate-200 dark:border-slate-700/50" 
                : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white hover:scale-[1.01] shadow-[0_0_20px_rgba(37,99,235,0.25)] dark:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
        }`}
      >
        {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando pre-inscripción...
            </span>
        ) : "Confirmar Pre-Inscripción 2026"}
      </button>

      <p className="text-center text-xs text-slate-500 mt-4 font-semibold">
        Los campos marcados con <span className="text-blue-600 dark:text-cyan-400">*</span> son obligatorios para validar el cupo.
      </p>

    </form>
  );
}