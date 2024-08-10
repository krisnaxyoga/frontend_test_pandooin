"use client";

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SectionMain from "./components/SectionMain";
import Destination from "./components/Destination";
import LuxuryFottage from "./components/LuxuryFottage";
import PandooinWebsite from "./components/PandooinWebsite";
import Article from "./components/Article";
import Footer from "./components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  // Menggunakan useState untuk memastikan QueryClient tetap stabil
  const [queryClient] = useState(() => new QueryClient());

  return (
    <main className="font-albert-sans bg-vista-white text-black">
      <Nav />
      <Hero />
      <SectionMain />
      <QueryClientProvider client={queryClient}>
        <Destination />
        <Article />
      </QueryClientProvider>
      <LuxuryFottage />
      <PandooinWebsite />
      <Footer />
    </main>
  );
}
