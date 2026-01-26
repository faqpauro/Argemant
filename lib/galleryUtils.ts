// src/lib/galleryUtils.ts
import fs from 'fs';
import path from 'path';

const GALLERY_DIR = path.join(process.cwd(), 'public', 'Imagenes');

export function getYearsFromFolders(): string[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];
  const years = fs.readdirSync(GALLERY_DIR).filter((file) => {
    return fs.statSync(path.join(GALLERY_DIR, file)).isDirectory();
  });
  return years.sort((a, b) => Number(b) - Number(a));
}

export function getImagesFromYear(year: string): string[] {
  const yearDir = path.join(GALLERY_DIR, year);
  if (!fs.existsSync(yearDir)) return [];

  // AQUÍ ESTÁ EL CAMBIO: Agregamos mp4, webm, mov
  const files = fs.readdirSync(yearDir).filter((file) => {
    return /\.(jpg|jpeg|png|webp|mp4|webm|mov)$/i.test(file);
  });

  return files.map(file => `/Imagenes/${year}/${file}`);
}