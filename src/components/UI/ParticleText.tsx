import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface ParticleTextProps {
  text?: string;
  className?: string;
  particleCount?: number;
  particleColor?: string;
}

function ParticleText({
  text = "PARTICLES",
  className = "",
  particleCount = 15,
  particleColor = "#ff5e5e"
}: ParticleTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: HTMLDivElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 rounded-full pointer-events-none";
      particle.style.backgroundColor = particleColor;
      particle.style.opacity = Math.random().toString();

      const x = Math.random() * container.offsetWidth;
      const y = Math.random() * container.offsetHeight;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      container.appendChild(particle);
      particles.push(particle);
    }

    let animationFrameId: number;
    const animateParticles = () => {
      particles.forEach((particle, index) => {
        const time = Date.now() * 0.001 + index;
        const x = Math.sin(time * 0.5) * 20 + Math.cos(time * 0.3) * 30;
        const y = Math.cos(time * 0.4) * 15 + Math.sin(time * 0.6) * 25;

        particle.style.transform = `translate(${x}px, ${y}px)`;
        particle.style.opacity = (Math.sin(time * 2) * 0.5 + 0.5).toString();
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animationFrameId = requestAnimationFrame(animateParticles);

    return () => {
      cancelAnimationFrame(animationFrameId);
      particles.forEach((particle) => {
        particle.remove();
      });
    };
  }, [particleCount, particleColor]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 font-headline-lg-mobile text-headline-lg-mobile md:text-headline-md text-on-surface font-bold"
        style={{
          textShadow: "2px 2px 1px #8a0000",
        }}
      >
        {text}
      </motion.div>
    </div>
  );
}

export default ParticleText;