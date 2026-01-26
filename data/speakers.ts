// src/data/speakers.ts

export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  flag?: string; // El signo ? significa que es opcional (solo para internacionales)
}

export const speakers: Speaker[] = [
  // PRIMERA FILA
  {
    id: 1,
    name: "Ricardo Pauro",
    role: "Director Congreso",
    company: "ARGEMANT",
    image: "https://i.ibb.co/PDH81Mn/ricardo-pauro-1-8-orig.jpg",
  },
  {
    id: 2,
    name: "Services Director",
    role: "Directivo",
    company: "METSO",
    image: "https://i.ibb.co/PmZ4y46/485.jpg",
  },
  {
    id: 3,
    name: "Organización",
    role: "Equipo Congreso",
    company: "ARGEMANT",
    image: "https://i.ibb.co/DWrdN99/Cami-2023.jpg",
  },
  {
    id: 4,
    name: "Lourival Tavares",
    role: "Consultor Internacional",
    company: "BRASIL",
    image: "https://i.ibb.co/XsbNBLM/7879.jpg",
    flag: "🇧🇷"
  },
  // SEGUNDA FILA
  {
    id: 5,
    name: "Facility Manager",
    role: "Gestión de Activos",
    company: "FORD",
    image: "https://i.ibb.co/89rTLgq/IMG-20200923-WA0008.jpg",
  },
  {
    id: 6,
    name: "Armando Vittorangeli",
    role: "Cap. Navío Ret",
    company: "FORO ARGENTINO DE DEFENSA",
    image: "https://i.ibb.co/nntkXg3/Armando-Vittorangeli.jpg",
  },
  {
    id: 7,
    name: "Gerente Explotación",
    role: "Energía Santa Fe",
    company: "EPESF",
    image: "https://i.ibb.co/zTBMQCy2/emp-Prov-Sta-Fe.jpg",
  },
  {
    id: 8,
    name: "Jefe de Capacitación",
    role: "Formación Técnica",
    company: "TOYOTA",
    image: "https://i.ibb.co/09HLMnC/2.jpg",
  },
  // TERCERA FILA
  {
    id: 9,
    name: "Director General",
    role: "Dirección",
    company: "OPTYMUX",
    image: "https://i.ibb.co/zTzSvV4t/Opt45982212a22.jpg",
  },
  {
    id: 10,
    name: "Supervisor Líder",
    role: "Mantenimiento",
    company: "TECPETROL",
    image: "https://i.ibb.co/yv5V1Km/0121.jpg",
  },
  {
    id: 11,
    name: "Organización",
    role: "Equipo Congreso",
    company: "ARGEMANT",
    image: "https://i.ibb.co/wCVD61p/1232023-Argemant.jpg",
  },
  {
    id: 12,
    name: "Director Comercial",
    role: "Partner",
    company: "CONSUMAN",
    image: "https://i.ibb.co/F4P8V6j8/0122.jpg",
  },
  // CUARTA FILA
  {
    id: 13,
    name: "Espec. Mantenimiento",
    role: "Ingeniería",
    company: "TGN",
    image: "https://i.postimg.cc/DwqdqqrC/0885654.jpg",
  },
  {
    id: 14,
    name: "Organización",
    role: "Equipo Congreso",
    company: "ARGEMANT",
    image: "https://i.ibb.co/2gKqyQg/22545.jpg",
  },
  {
    id: 15,
    name: "Gerente General",
    role: "Gerencia",
    company: "ICRT",
    image: "https://i.postimg.cc/283zJD2v/020211545548.jpg",
  },
  {
    id: 16,
    name: "Organización",
    role: "Equipo Congreso",
    company: "ARGEMANT",
    image: "https://i.ibb.co/qCZ2n6y/11900.jpg",
  },
  // QUINTA FILA
  {
    id: 17,
    name: "Gte. Técnica y Normativa",
    role: "Gestión",
    company: "TECSAN",
    image: "https://i.ibb.co/TDq8vG4q/4545888787542221.jpg",
  },
  {
    id: 18,
    name: "Especialista Digitalización",
    role: "Gestión de Activos",
    company: "HEXAGON",
    image: "https://i.ibb.co/smvNyVS/HEXAGON.jpg",
  },
  {
    id: 19,
    name: "Jefe de Mantenimiento",
    role: "Planta",
    company: "ENVASES GROUP",
    image: "https://i.ibb.co/mCXY1KBS/4542221545774234.jpg",
  },
  {
    id: 20,
    name: "Espec. Ingeniería GA",
    role: "Ingeniería",
    company: "ARGEMANT",
    image: "https://i.ibb.co/Lh8MhMC8/a888s7453545sdsggv.jpg",
  }
];