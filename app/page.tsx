// src/app/page.tsx
import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import BlogHome from "@/components/BlogHome";
import SectionDivider from "@/components/SectionDivider";
import Sponsors from "@/components/Sponsors";
import LogoTicker from "@/components/LogoTicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      
      <SectionDivider />
      <Speakers />
      
      {/* Separador y Sponsors */}
      <SectionDivider />
      <Sponsors />  {/* <--- Aquí va */}

      <SectionDivider />
      <BlogHome />

      <LogoTicker />
    </main>
  );
}