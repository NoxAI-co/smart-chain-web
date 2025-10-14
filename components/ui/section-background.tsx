"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionBackgroundProps = {
  className?: string;
  intensity?: number; // 0.0 - 1.0 multiplica blur y opacidad
  speed?: number; // segundos por ciclo
};

export function SectionBackground({
  className,
  intensity = 1,
  speed = 30,
}: SectionBackgroundProps) {
  const opacityA = 0.35 * intensity;
  const opacityB = 0.25 * intensity;
  const blur = `${30 * intensity}px`;

  return (
    <div className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {/* Gradiente de base sutil para evitar vacío en pantallas grandes */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 dark:to-white/5" />

      {/* Blob A: recorre horizontalmente en loop */}
      <motion.div
        className="absolute -left-1/3 top-[-20%] h-[60vmin] w-[60vmin] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,58,237,1), rgba(59,130,246,0.6), transparent)",
          filter: `blur(${blur})`,
          opacity: opacityA,
        }}
        animate={{ x: ["0%", "-40%", "0%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      />

      {/* Blob B: movimiento inverso para efecto parallax */}
      <motion.div
        className="absolute -right-1/3 bottom-[-25%] h-[70vmin] w-[70vmin] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(59,130,246,1), rgba(168,85,247,0.6), transparent)",
          filter: `blur(${blur})`,
          opacity: opacityB,
        }}
        animate={{ x: ["0%", "40%", "0%"] }}
        transition={{ duration: speed * 1.2, ease: "linear", repeat: Infinity }}
      />

      {/* Efecto de luz morada tenue desde la parte inferior */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[60vh] pointer-events-none"
        style={{
          background: `linear-gradient(
            to top,
            rgba(168, 85, 247, 0.25) 0%,
            rgba(168, 85, 247, 0.20) 15%,
            rgba(168, 85, 247, 0.15) 30%,
            rgba(168, 85, 247, 0.10) 50%,
            rgba(168, 85, 247, 0.05) 70%,
            transparent 100%
          )`,
          filter: 'blur(3px)',
        }}
      />

      {/* Degradado lateral para dirigir la mirada al centro (suave) */}
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background/60 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background/60 to-transparent" />
    </div>
  );
}


