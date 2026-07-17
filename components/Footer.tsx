// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-100 text-slate-600 border-t border-slate-200/80 dark:bg-slate-950 dark:border-slate-900/60 dark:text-slate-450 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* GRID DE 3 COLUMNAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLUMNA 1: UBICACIÓN Y MARCA */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo.png" 
                alt="Logo Argemant" 
                width={180} 
                height={60} 
                className="h-14 w-auto object-contain hover:brightness-110 transition-all duration-300 dark:brightness-100"
              />
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              El evento líder en Gestión de Activos y Mantenimiento de la región.
            </p>
            
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-blue-600 dark:text-cyan-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h4 className="text-slate-800 dark:text-white font-bold uppercase text-xs tracking-wider mb-1">Ubicación</h4>
                <p className="text-slate-700 dark:text-slate-350 text-sm">Ciudad de Buenos Aires</p>
                <p className="text-slate-700 dark:text-slate-350 text-sm">República Argentina</p>
                <p className="text-slate-400 text-xs mt-0.5">América</p>
              </div>
            </div>
          </div>

          {/* COLUMNA 2: CONTACTO ADMINISTRATIVO */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-extrabold text-sm mb-6 border-l-4 border-blue-600 dark:border-cyan-500 pl-3 uppercase tracking-wider">
              Contacto Administrativo
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="bg-slate-200/60 dark:bg-slate-900/60 p-2.5 rounded-lg text-blue-600 dark:text-cyan-400 border border-slate-300/40 dark:border-slate-800/80">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-800 dark:text-slate-200 font-bold text-sm">Dra. Fabiana Caruso</p>
                  <p className="text-[10px] text-blue-600 dark:text-cyan-455 uppercase tracking-wider font-extrabold">Administración</p>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-slate-200/60 dark:bg-slate-900/60 p-2.5 rounded-lg text-blue-600 dark:text-cyan-400 border border-slate-300/40 dark:border-slate-800/80">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer text-sm font-semibold">+54 (11) 4642-4709</span>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-slate-200/60 dark:bg-slate-900/60 p-2.5 rounded-lg text-emerald-600 dark:text-emerald-400 border border-slate-300/40 dark:border-slate-800/80">
                   <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                   </svg>
                </div>
                <a href="https://wa.me/5491166962770" target="_blank" className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors text-sm font-semibold">
                  +54 911 6696 2770
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-slate-200/60 dark:bg-slate-900/60 p-2.5 rounded-lg text-blue-600 dark:text-cyan-400 border border-slate-300/40 dark:border-slate-800/80">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-slate-750 dark:text-slate-300 text-sm font-semibold">Lun a Vie de 10 a 17 hs.</span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: CONTACTO ACADÉMICO */}
          <div>
            <h3 className="text-slate-800 dark:text-white font-extrabold text-sm mb-6 border-l-4 border-blue-600 dark:border-cyan-500 pl-3 uppercase tracking-wider">
              Contacto Académico
            </h3>
            <div className="bg-white/80 dark:bg-slate-900/40 backdrop-blur-md p-6 rounded-2xl border border-slate-200 dark:border-slate-800/80 shadow-xs dark:shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                 <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500/50 dark:border-cyan-500/50 shadow-md">
                  <Image 
                    src="https://i.ibb.co/PDH81Mn/ricardo-pauro-1-8-orig.jpg"
                    alt="Ing. Ricardo Pauro"
                    fill
                    className="object-cover"
                  />
                 </div>
                 <div>
                    <p className="text-slate-850 dark:text-slate-100 font-bold text-base">Ing. Ricardo Pauro</p>
                    <p className="text-blue-600 dark:text-cyan-400 text-[10px] font-extrabold uppercase tracking-wider mt-0.5">Coordinador General</p>
                 </div>
              </div>
              <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                Centro de Investigación y Gestión de Activos Físicos <strong className="text-slate-700 dark:text-slate-200">(CIGAF)</strong>
              </p>
            </div>
            
            {/* REDES SOCIALES */}
            <div className="mt-8">
              <h4 className="text-[10px] font-extrabold text-slate-450 dark:text-slate-500 uppercase tracking-widest mb-4">Síguenos en redes</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  { name: "Facebook", href: "https://www.facebook.com/ARGEMANT/", path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.048 0-2.733.956-2.733 2.596v1.376h3.613l-.6 3.667h-3.013v7.98h-5.08Z", hover: "hover:bg-[#1877F2] hover:text-white" },
                  { name: "Email", href: "mailto:info@argemant.com", path: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", isStroke: true, hover: "hover:bg-orange-500 hover:text-white" },
                  { name: "Twitter", href: "https://twitter.com/Argemant2020", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zl-1.161-.031-4.352-5.696h.001", hover: "hover:bg-black hover:text-white dark:hover:border-slate-700" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/company/congreso-argentino-de-mantenimiento-y-gesti-n-de-activos", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", hover: "hover:bg-[#0077b5] hover:text-white" },
                  { name: "Instagram", href: "https://www.instagram.com/argemant/?hl=es", path: "M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z", hover: "hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name} 
                    className={`w-9 h-9 rounded-full bg-slate-200 dark:bg-slate-900 text-slate-700 dark:text-slate-400 flex items-center justify-center transition-all transform hover:-translate-y-1 ${social.hover}`}
                  >
                    {social.isStroke ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d={social.path} />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 dark:text-slate-500 font-semibold uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} ARGEMANT - 24 y 25 de Septiembre de 2026. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}