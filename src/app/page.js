import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import Particle from "@/Utils/Particles";

export default function Home() {
  return (
    <main className="bg-[#000319] overflow-hidden  sm:px-10 px-5">
      <div className=" container mx-auto w-full">
        <Particle/>
        <Navbar />
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </main>
  );
}
