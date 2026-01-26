// src/components/ContactForm.tsx
export default function ContactForm() {
  return (
    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 my-12">
      <h3 className="text-2xl font-bold text-white mb-4">¿Te interesa este tema?</h3>
      <p className="text-gray-400 mb-6">
        Contáctanos para recibir más información o asesoramiento personalizado sobre esta noticia.
      </p>
      
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder="Tu Nombre" 
            className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
          <input 
            type="email" 
            placeholder="Tu Email" 
            className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
        <textarea 
          rows={4} 
          placeholder="Escribe tu consulta aquí..." 
          className="w-full bg-slate-800 text-white border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
        ></textarea>
        
        <button 
          type="button" // Type button para que no recargue la pagina al probar
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all w-full md:w-auto"
        >
          Enviar Consulta
        </button>
      </form>
    </div>
  );
}