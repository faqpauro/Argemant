export interface AgendaEvent {
  id: number;
  time: string;
  title: string;
  speaker?: string;
  company?: string;
  category: "Acreditación" | "Conferencia" | "Mesa Redonda" | "Coffee Break" | "Almuerzo" | "Cierre";
  track: string;
  description?: string;
}

export interface DayAgenda {
  dayNumber: number;
  date: string;
  theme: string;
  events: AgendaEvent[];
}

export const cronogramaData: DayAgenda[] = [
  {
    dayNumber: 1,
    date: "Jueves 24 de Septiembre de 2026",
    theme: "Ingeniería de Confiabilidad y Ciclo de Vida de los Activos Físicos",
    events: [
      {
        id: 101,
        time: "08:00 - 09:00",
        title: "Acreditaciones y Entrega de Material Académico",
        category: "Acreditación",
        track: "Hall Central",
        description: "Recepción de congresistas, validación de inscripciones y entrega de credenciales y material oficial del evento."
      },
      {
        id: 102,
        time: "09:00 - 09:30",
        title: "Apertura Oficial del Congreso ARGEMANT 2026",
        speaker: "Ing. Ricardo Pauro",
        company: "ARGEMANT / CIGAF",
        category: "Acreditación",
        track: "Auditorio Principal",
        description: "Mensaje inaugural a cargo de las autoridades del comité organizador de ARGEMANT y decanos de la Universidad Tecnológica Nacional."
      },
      {
        id: 103,
        time: "09:30 - 10:30",
        title: "Conferencia Plenaria: El Futuro del Mantenimiento Predictivo",
        speaker: "Ing. Carlos Mendoza",
        company: "Consultor de Confiabilidad",
        category: "Conferencia",
        track: "Auditorio Principal",
        description: "Disertación central sobre el avance de las tecnologías de diagnóstico en tiempo real y la transición del mantenimiento predictivo tradicional al predictivo prescriptivo."
      },
      {
        id: 104,
        time: "10:30 - 11:00",
        title: "Coffee Break & Sesión de Networking",
        category: "Coffee Break",
        track: "Hall Central / Expositores",
        description: "Pausa de networking académico y corporativo. Recorrido por los stands comerciales y muestras técnicas."
      },
      {
        id: 105,
        time: "11:00 - 12:00",
        title: "Gestión de Activos bajo la Norma ISO 55001",
        speaker: "Dra. María Gómez",
        company: "Especialista en Sistemas de Gestión",
        category: "Conferencia",
        track: "Salón A",
        description: "Guía práctica para implementar requisitos clave de la norma ISO 55001 y su impacto directo en la sustentabilidad del negocio."
      },
      {
        id: 106,
        time: "11:00 - 12:00",
        title: "Monitoreo de Vibraciones en Motores Eléctricos y Turbomaquinaria",
        speaker: "Ing. Luis Pérez",
        company: "Especialista en Diagnóstico Predictivo",
        category: "Conferencia",
        track: "Salón B",
        description: "Estudio de casos reales de diagnóstico temprano de fallas electromecánicas mediante análisis espectral y envolvente de aceleración."
      },
      {
        id: 107,
        time: "12:00 - 13:00",
        title: "Mantenimiento 4.0: Integrando IoT y Big Data en la Operación",
        speaker: "Ing. Javier Torres",
        company: "Consultor en Transformación Digital",
        category: "Conferencia",
        track: "Salón A",
        description: "Estrategias para conectar sensores de planta directos a la nube, automatizando alarmas y flujos de trabajo en sistemas EAM/CMMS."
      },
      {
        id: 108,
        time: "12:00 - 13:00",
        title: "Lubricación Avanzada, Tribología y Control de Contaminación",
        speaker: "Tec. Hugo Rossi",
        company: "Especialista en Lubricación",
        category: "Conferencia",
        track: "Salón B",
        description: "Buenas prácticas para el diseño de salas de lubricación, monitoreo de aceite en servicio y técnicas para extender la vida útil de rodamientos."
      },
      {
        id: 109,
        time: "13:00 - 14:30",
        title: "Almuerzo Libre y Exposición de Proveedores",
        category: "Almuerzo",
        track: "Salón de Expositores",
        description: "Espacio para almuerzo libre y demostraciones interactivas de software y equipamiento en los stands."
      },
      {
        id: 110,
        time: "14:30 - 15:30",
        title: "RCM (Mantenimiento Centrado en Confiabilidad): Metodología y Aplicación",
        speaker: "Ing. Ana Martínez",
        company: "Especialista en Confiabilidad Operacional",
        category: "Conferencia",
        track: "Salón A",
        description: "Pasos fundamentales para implementar RCM en procesos productivos críticos y cómo evitar las fallas más comunes en las etapas iniciales."
      },
      {
        id: 111,
        time: "14:30 - 15:30",
        title: "Seguridad y Cuidado del Medio Ambiente en Operaciones de Mantenimiento",
        speaker: "Lic. Jorge Díaz",
        company: "Asesor en Seguridad Industrial",
        category: "Conferencia",
        track: "Salón B",
        description: "Integración de políticas ambientales, análisis de riesgos en tareas de mantenimiento y cumplimiento de normas internacionales."
      },
      {
        id: 112,
        time: "15:30 - 16:30",
        title: "Termografía Infrarroja Aplicada a Sistemas Eléctricos e Industriales",
        speaker: "Ing. Raúl Castro",
        company: "Termógrafo Nivel III",
        category: "Conferencia",
        track: "Salón A",
        description: "Principios físicos de medición térmica e inspecciones correctas en subestaciones, tableros eléctricos y aislamientos térmicos."
      },
      {
        id: 113,
        time: "15:30 - 16:30",
        title: "Análisis de Costo de Ciclo de Vida de los Activos Físicos (LCC)",
        speaker: "CP. Silvia Fernández",
        company: "Consultora Financiera",
        category: "Conferencia",
        track: "Salón B",
        description: "Optimización financiera para la toma de decisiones de reemplazo o renovación de activos físicos (CAPEX vs OPEX)."
      },
      {
        id: 114,
        time: "16:30 - 17:00",
        title: "Coffee Break & Networking en Sala Comercial",
        category: "Coffee Break",
        track: "Hall Central / Expositores",
        description: "Intercambio técnico final del Día 1 y demostraciones de soluciones industriales."
      },
      {
        id: 115,
        time: "17:00 - 18:30",
        title: "Mesa Redonda: Desafíos y Perspectivas de la Industria Argentina",
        speaker: "Panel de Líderes Industriales",
        company: "Diversas Empresas",
        category: "Mesa Redonda",
        track: "Auditorio Principal",
        description: "Debate abierto entre directores de mantenimiento y operaciones de las industrias siderúrgica, química y automotriz sobre la coyuntura del sector."
      }
    ]
  },
  {
    dayNumber: 2,
    date: "Viernes 25 de Septiembre de 2026",
    theme: "Tecnología Aplicada, Inteligencia Artificial y Gestión Estratégica",
    events: [
      {
        id: 201,
        time: "08:30 - 09:00",
        title: "Apertura de Puertas y Registro Matutino",
        category: "Acreditación",
        track: "Hall Central",
        description: "Recepción de participantes del Día 2 y control de accesos."
      },
      {
        id: 202,
        time: "09:00 - 10:00",
        title: "Conferencia Plenaria: Inteligencia Artificial en Gestión de Activos Físicos",
        speaker: "Dr. Alessandro Silva",
        company: "Especialista Invitado (Brasil)",
        category: "Conferencia",
        track: "Auditorio Principal",
        description: "Casos prácticos de uso de algoritmos de Machine Learning y modelos generativos para optimizar planes de inspección y predecir fallas complejas."
      },
      {
        id: 203,
        time: "10:00 - 11:00",
        title: "Mantenimiento Basado en la Condición (CBM) y Estrategias Integradas",
        speaker: "Ing. Walter Sosa",
        company: "Líder de Mantenimiento",
        category: "Conferencia",
        track: "Salón A",
        description: "Cómo transicionar de un esquema puramente temporal a uno basado en el monitoreo real de parámetros de fatiga y desgaste."
      },
      {
        id: 204,
        time: "10:00 - 11:00",
        title: "Gestión Estratégica de Repuestos, Almacenes e Inventarios",
        speaker: "Lic. Patricia Ruiz",
        company: "Consultora de Cadena de Suministro",
        category: "Conferencia",
        track: "Salón B",
        description: "Técnicas de clasificación por criticidad de componentes para minimizar el stock inmovilizado garantizando disponibilidad operativa."
      },
      {
        id: 205,
        time: "11:00 - 11:30",
        title: "Coffee Break & Recorrido de Stands",
        category: "Coffee Break",
        track: "Hall Central / Expositores",
        description: "Segunda pausa para café con espacio dedicado a demostraciones en vivo en stands."
      },
      {
        id: 206,
        time: "11:30 - 12:30",
        title: "Confiabilidad Humana y Factores Psicosociales en Mantenimiento",
        speaker: "Psic. Laura Benítez",
        company: "Especialista en Factores Humanos",
        category: "Conferencia",
        track: "Salón A",
        description: "El error humano como consecuencia del diseño del sistema. Modelos para mitigar el riesgo operacional y mejorar la seguridad."
      },
      {
        id: 207,
        time: "11:30 - 12:30",
        title: "Mantenimiento de Sistemas Hidráulicos y Oleohidráulica Industrial",
        speaker: "Ing. Marcos López",
        company: "Consultor Técnico",
        category: "Conferencia",
        track: "Salón B",
        description: "Diagnóstico y localización de fallas en circuitos de fluidos, control de filtración y técnicas avanzadas de purificación."
      },
      {
        id: 208,
        time: "12:30 - 13:30",
        title: "TPM (Mantenimiento Productivo Total) y el Mantenimiento Autónomo",
        speaker: "Ing. Roberto Méndez",
        company: "Asesor en Lean Manufacturing",
        category: "Conferencia",
        track: "Salón A",
        description: "Despliegue de los 8 pilares del TPM e involucramiento exitoso del operario de producción en tareas básicas de cuidado de máquina."
      },
      {
        id: 209,
        time: "12:30 - 13:30",
        title: "RCFA (Análisis de Causa Raíz de Falla) en Equipos Industriales",
        speaker: "Ing. Daniel Giménez",
        company: "Especialista en Confiabilidad",
        category: "Conferencia",
        track: "Salón B",
        description: "Técnicas deductivas de análisis como árbol de fallas y 5 porqués para erradicar fallas crónicas e incidentes críticos."
      },
      {
        id: 210,
        time: "13:30 - 15:00",
        title: "Almuerzo Libre y Clausura de Rondas Comerciales",
        category: "Almuerzo",
        track: "Salón de Expositores",
        description: "Última sesión de demostraciones y almuerzo para los congresistas."
      },
      {
        id: 211,
        time: "15:00 - 16:00",
        title: "Digitalización de Procesos de Mantenimiento y Trabajo Sin Papeles",
        speaker: "Ing. Carlos Fuentes",
        company: "Especialista APM",
        category: "Conferencia",
        track: "Salón A",
        description: "Uso de tablets e interfaces móviles para toma de datos de inspección y registro directo en planta."
      },
      {
        id: 212,
        time: "15:00 - 16:00",
        title: "Mantenimiento Sustentable, Eficiencia Energética y Huella de Carbono",
        speaker: "Ing. Andrea Morales",
        company: "Consultora Ambiental",
        category: "Conferencia",
        track: "Salón B",
        description: "Optimización energética mediante la calibración y monitoreo de bombas, compresores e intercambiadores térmicos."
      },
      {
        id: 213,
        time: "16:00 - 17:00",
        title: "Indicadores Clave de Desempeño (KPIs) en Gestión de Mantenimiento",
        speaker: "Lic. Fernando Ortíz",
        company: "Especialista en Métricas de Activos",
        category: "Conferencia",
        track: "Salón A",
        description: "Definición y balanceo de indicadores clave como MTBF, MTTR, Disponibilidad, Backlog de trabajo y costo unitario."
      },
      {
        id: 214,
        time: "16:00 - 17:00",
        title: "Mantenimiento de Equipos Críticos en la Industria de Procesos",
        speaker: "Ing. Guillermo Silva",
        company: "Líder de Planta de Refino",
        category: "Conferencia",
        track: "Salón B",
        description: "Estudio de confiabilidad operacional sobre intercambiadores, reactores e instrumentación de seguridad en petroquímica."
      },
      {
        id: 215,
        time: "17:00 - 17:30",
        title: "Coffee Break & Intercambio de Experiencias",
        category: "Coffee Break",
        track: "Hall Central / Expositores",
        description: "Pausa final para networking y debate informal."
      },
      {
        id: 216,
        time: "17:30 - 18:30",
        title: "Conferencia de Cierre: El Rol del Líder de Mantenimiento en la Era Digital",
        speaker: "Ing. Luis Cabrera",
        company: "Director de Operaciones Regional",
        category: "Conferencia",
        track: "Auditorio Principal",
        description: "Disertación de clausura analizando las competencias blandas y tecnológicas que debe reunir el líder moderno de mantenimiento."
      },
      {
        id: 217,
        time: "18:30 - 19:00",
        title: "Ceremonia de Clausura, Sorteos de Sponsors y Cierre del Congreso",
        category: "Cierre",
        track: "Auditorio Principal",
        description: "Sorteos de licencias de software, menciones de honor al trabajo académico, anuncio oficial de ARGEMANT 2027 y brindis final."
      }
    ]
  }
];
