import './index.css'
import { useEffect } from 'react'
import Header from "./components/Header"
import Hero from './components/Hero'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SideRays from "../@/components/SideRays"
import Lenis from "lenis"
import TargetCursor from "../@/components/TargetCursor"
import Stack from './components/Stack'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <TargetCursor
        spinDuration={3.5}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.8}
        cursorColor="#ff5e5e"
        cursorColorOnTarget="#000000"
      />

      <SideRays className="fixed inset-0 z-0" />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <Stack/>
      </div>
    </div>
  )
}

export default App
