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
      // Aquí podrías redirigir o limpiar el formulario
    }, 2000);
  }

  if (isSuccess) {
    return (
      <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-green-500/20">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
        <p className="text-gray-300">
          Hemos recibido tus datos correctamente. Te contactaremos a la brevedad para confirmar tu cupo.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-6 text-green-400 hover:text-green-300 font-medium underline"
        >
          Enviar otra inscripción
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      
      {/* GRID DE 2 COLUMNAS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Nombre */}
        <div className="space-y-2">
          <label htmlFor="nombre" className="text-sm font-medium text-gray-400 block">Nombre</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="Tu nombre"
          />
        </div>

        {/* Apellidos (Obligatorio) */}
        <div className="space-y-2">
          <label htmlFor="apellidos" className="text-sm font-medium text-gray-400 block">
            Apellidos <span className="text-blue-500">*</span>
          </label>
          <input 
            type="text" 
            id="apellidos" 
            name="apellidos"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="Tus apellidos"
          />
        </div>

        {/* Ciudad */}
        <div className="space-y-2">
          <label htmlFor="ciudad" className="text-sm font-medium text-gray-400 block">Ciudad</label>
          <input 
            type="text" 
            id="ciudad" 
            name="ciudad"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="Ej: Buenos Aires"
          />
        </div>

        {/* País (Obligatorio) */}
        <div className="space-y-2">
          <label htmlFor="pais" className="text-sm font-medium text-gray-400 block">
            País <span className="text-blue-500">*</span>
          </label>
          <input 
            type="text" 
            id="pais" 
            name="pais"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="Tu país de residencia"
          />
        </div>

        {/* Email (Obligatorio) */}
        <div className="space-y-2 md:col-span-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-400 block">
            Correo electrónico <span className="text-blue-500">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="nombre@empresa.com"
          />
        </div>

        {/* Teléfono */}
        <div className="space-y-2 md:col-span-1">
          <label htmlFor="telefono" className="text-sm font-medium text-gray-400 block">Teléfono</label>
          <input 
            type="tel" 
            id="telefono" 
            name="telefono"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="+54 11 ..."
          />
        </div>

        {/* Puesto */}
        <div className="space-y-2">
          <label htmlFor="puesto" className="text-sm font-medium text-gray-400 block">Puesto</label>
          <input 
            type="text" 
            id="puesto" 
            name="puesto"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="Ej: Gerente de Mantenimiento"
          />
        </div>

        {/* Compañía */}
        <div className="space-y-2">
          <label htmlFor="compania" className="text-sm font-medium text-gray-400 block">Compañía</label>
          <input 
            type="text" 
            id="compania" 
            name="compania"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
            placeholder="Nombre de la empresa"
          />
        </div>

      </div>

      {/* Descripción (Full Width) */}
      <div className="space-y-2">
        <label htmlFor="descripcion" className="text-sm font-medium text-gray-400 block">Descripción / Comentarios</label>
        <textarea 
          id="descripcion" 
          name="descripcion"
          rows={4}
          className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
          placeholder="¿Tienes alguna consulta específica o requerimiento especial?"
        ></textarea>
      </div>

      {/* Botón Submit */}
      <button 
        type="submit" 
        disabled={isSubmitting}
        className={`w-full py-4 rounded-full font-bold text-lg transition-all transform shadow-lg ${
            isSubmitting 
                ? "bg-slate-700 text-gray-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white hover:scale-[1.01] hover:shadow-blue-500/25"
        }`}
      >
        {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Procesando...
            </span>
        ) : "Confirmar Pre-Inscripción"}
      </button>

      <p className="text-center text-xs text-slate-500 mt-4">
        Los campos marcados con <span className="text-blue-500">*</span> son obligatorios.
      </p>

    </form>
  );
}