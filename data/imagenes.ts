// src/data/imagenes.ts

// Definimos cómo es una imagen en nuestra galería
export interface GalleryImage {
    id: number;
    src: string; // La URL de la foto
    alt: string; // Descripción para accesibilidad
    width: number; // Ancho original (importante para que no salte el diseño)
    height: number; // Alto original
  }
  
  // Función de ayuda para generar placeholders (BORRAR LUEGO cuando tengas tus fotos reales)
  const getPlaceholder = (year: string, id: number, width: number, height: number) => ({
      id: id,
      // Usamos picsum para generar imágenes aleatorias consistentes basadas en el año y el ID
      src: `https://picsum.photos/seed/argemant-${year}-${id}/${width}/${height}`,
      alt: `Foto del Congreso ARGEMANT ${year} - Imagen ${id}`,
      width: width,
      height: height,
  });
  
  // --- AQUÍ ES DONDE TÚ CARGARÁS TUS FOTOS REALES ---
  // Es un objeto donde la CLAVE es el año (string) y el VALOR es una lista de imágenes.
  export const galeriaPorAno: Record<string, GalleryImage[]> = {
    "2025": [
      // Ejemplo de cómo cargarías tus fotos reales:
      // { id: 1, src: "https://i.ibb.co/tu-foto-2025-1.jpg", alt: "Auditorio lleno", width: 1200, height: 800 },
      // Por ahora, uso placeholders:
      getPlaceholder("2025", 1, 1200, 800),
      getPlaceholder("2025", 2, 800, 1200), // Vertical
      getPlaceholder("2025", 3, 1200, 800),
      getPlaceholder("2025", 4, 1200, 800),
      getPlaceholder("2025", 5, 800, 800),  // Cuadrada
      getPlaceholder("2025", 6, 1200, 800),
    ],
    "2024": Array.from({ length: 12 }, (_, i) => getPlaceholder("2024", i, i % 3 === 0 ? 800 : 1200, i % 2 === 0 ? 1200 : 800)),
    "2023": Array.from({ length: 15 }, (_, i) => getPlaceholder("2023", i, 1200, 800)),
    // ... Puedes seguir agregando años hacia atrás ...
    "2018": Array.from({ length: 8 }, (_, i) => getPlaceholder("2018", i, 1200, 800)),
    "2012": [
       getPlaceholder("2012", 1, 1200, 800),
       getPlaceholder("2012", 2, 1200, 800),
       getPlaceholder("2012", 3, 1200, 800),
    ]
  };
  
  // Obtenemos la lista de años disponibles automáticamente y los ordenamos del más reciente al más antiguo
  export const yearsList = Object.keys(galeriaPorAno).sort((a, b) => Number(b) - Number(a));