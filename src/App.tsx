import './index.css'
import { useEffect } from 'react'
import Header from "./components/Header"
import Hero from './components/Hero'
import ParticlesComponent from './components/ParticlesComponent'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import Lenis from "lenis"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time : number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ParticlesComponent/>
      <Header/>
      <Hero />
      <ExperienceSection/>
      <ProjectsSection />
      <h1 className="text-lg font-bold border-1">
        Hello world!
      </h1>
    </>
  )
}

export default App
