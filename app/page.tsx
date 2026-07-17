// src/app/page.tsx
"use client";

import Hero from "@/components/Hero";
import Speakers from "@/components/Speakers";
import BlogHome from "@/components/BlogHome";
import SectionDivider from "@/components/SectionDivider";
import Sponsors from "@/components/Sponsors";
import LogoTicker from "@/components/LogoTicker";
import WelcomeSplash from "@/components/WelcomeSplash";

export default function Home() {
  return (
    <>
      <WelcomeSplash />
      <main className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
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
    </>
  );
}