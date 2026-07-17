// src/components/ContactForm.tsx
export default function ContactForm() {
  return (
    <div className="bg-white/70 dark:bg-slate-900/40 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800/80 my-12 shadow-md dark:shadow-xl transition-colors duration-500">
      <h3 className="text-2xl font-black text-slate-850 dark:text-white mb-3 uppercase tracking-tight">¿Te interesa este tema?</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm md:text-base leading-relaxed">
        Contáctanos para recibir más información, asesoramiento personalizado o resolver dudas comerciales y académicas sobre esta temática.
      </p>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Tu Nombre" 
            className="w-full bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500/85 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-750"
          />
          <input 
            type="email" 
            placeholder="Tu Email" 
            className="w-full bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500/85 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-750"
          />
        </div>
        <textarea 
          rows={4} 
          placeholder="Escribe tu consulta aquí..." 
          className="w-full bg-slate-50 dark:bg-slate-950/80 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800/80 rounded-xl px-4 py-3.5 focus:outline-none focus:border-blue-500/85 focus:ring-2 focus:ring-blue-500/10 transition-all text-sm font-medium placeholder:text-slate-400 dark:placeholder:text-slate-750 resize-none"
        ></textarea>
        
        <button 
          type="button" 
          className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-extrabold py-3.5 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(37,99,235,0.2)] dark:shadow-[0_0_25px_rgba(37,99,235,0.5)]"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  );
}