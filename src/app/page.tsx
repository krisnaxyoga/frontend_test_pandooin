import Nav from "./components/Nav";
import Hero from "./components/Hero";
import SectionMain from "./components/SectionMain";
import Destination from "./components/Destination";
import LuxuryFottage from "./components/LuxuryFottage";
import PandooinWebsite from "./components/PandooinWebsite";
import Article from "./components/Article";
import Footer from "./components/Footer";

export default function Home() {
  
  return (
   
      <main className="font-albert-sans bg-vista-white text-black">
        <Nav />
        <Hero />
        <SectionMain />
        <Destination/>
        <LuxuryFottage/>
        <PandooinWebsite/>
        <Article/>
        <Footer/>
      </main>
  );
}

