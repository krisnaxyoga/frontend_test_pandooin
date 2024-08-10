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

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <main className="font-albert-sans bg-vista-white text-black">
      <Nav />
      <Hero />
      <SectionMain />
      <QueryClientProvider client={queryClient}>
        <Destination />
      </QueryClientProvider>
      <LuxuryFottage />
      <PandooinWebsite />
      <QueryClientProvider client={queryClient}>
        <Article />
      </QueryClientProvider>
      <Footer />
    </main>
  );
}
