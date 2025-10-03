import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function TimelineDemo() {
  const data = [
    {
      title: "Escucha Consciente",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center">Profundizamos en tu realidad actual para entender no solo qué necesitas, sino por qué lo necesitas.</p>
        </div>
      ),
    },
    {
      title: "Exploración Visual",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template 2"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Analizamos visualmente tu contexto para identificar oportunidades y retos clave.</p>
        </div>
      ),
    },
    {
      title: "Diseño Colaborativo",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Creamos soluciones modulares que se adaptan a tu ritmo y necesidades específicas.</p>
        </div>
      ),
    },
    {
      title: "Inspiración Visual",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Nos inspiramos en referentes visuales para potenciar la creatividad de tu equipo.</p>
        </div>
      ),
    },
    {
      title: "Acciones",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Implementamos juntos, con acompañamiento constante y ajustes en tiempo real.</p>
        </div>
      ),
    },
    {
      title: "Implementación Visual",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Mostramos el avance visual de la implementación para asegurar alineación continua.</p>
        </div>
      ),
    },
    {
      title: "Aprendizaje continuo",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Tu equipo aprende mientras transforma, construyendo capacidades internas permanentes.</p>
        </div>
      ),
    },
    {
      title: "Capacitación Visual",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Recursos visuales para fortalecer el aprendizaje y la apropiación de nuevas capacidades.</p>
        </div>
      ),
    },
    {
      title: "Medición de impacto",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Medimos no solo resultados, sino el cambio cultural y la sostenibilidad de la transformación.</p>
        </div>
      ),
    },
    {
      title: "Resultados Visuales",
      content: (
        <div>
          <BlurFade direction="right" blur="16px" duration={1.2} inView inViewMargin="-20% 0% -20% 0%">
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-64 w-full object-contain md:h-80 lg:h-96"
            />
          </BlurFade>
          <p className="mt-2 text-xs text-white/90 text-center drop-shadow-sm" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7), 0 0 4px rgba(0,0,0,0.5)' }}>Visualizamos los resultados para evidenciar el impacto y la evolución lograda.</p>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full max-w-full overflow-x-hidden overflow-clip">
      <Timeline data={data} />
    </div>
  );
} 