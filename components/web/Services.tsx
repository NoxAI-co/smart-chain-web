"use client";

import { User, ChartBar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ProgressiveBlur } from "../ui/progressive-blur";


const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export const Services = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 flex-col items-start">
          <div>
            <Badge variant={"outline"}>Servicios</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl text-nowrap tracking-tighter max-w-xl font-regular text-left">
              Explora nuestros módulos de transformación
            </h2>
            <p className="text-lg max-w-xl text-nowrap lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
              Imagina una consultoría donde eliges lo que necesitas, y aprendes
              mientras transformas. Eso es lo que hacemos con nuestro modelo All
              You Can Learn:
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlurFade delay={0.35} inView className="lg:col-span-2">
            <div className="relative rounded-md h-full overflow-hidden">
              <img
                src="/office-desk.jpg"
                alt="Productividad desde el ser"
                className="absolute inset-0 w-full h-full object-cover scale-150 object-left-top"
                style={{ left: '-10%', top: '-10%' }}
                width={1000}
                height={1000}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[65%] w-full"
                blurIntensity={1}
              />
              <div className="relative h-full p-6 flex flex-col justify-between">
                <User className="w-8 h-8 stroke-1 text-white/90" />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <h3 className="text-xl tracking-tight text-white font-semibold">
                      Productividad desde el ser
                    </h3>
                    <p className="text-white/90 max-w-xs md:max-w-lg text-base">
                      Maximizamos la eficiencia integrando herramientas
                      digitales con bienestar laboral. Porque no hay resultados
                      sin personas sanas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </BlurFade>

          <BlurFade delay={0.45} inView>
            <div
              className="relative rounded-md aspect-square overflow-hidden"
            >
              <img
                src="/bento-2.svg"
                alt="Transformación digital"
                className="w-full h-full object-cover"
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.55} inView>
            <div
              className="relative rounded-md aspect-square overflow-hidden"
            >
              <img
                src="/bento-1.svg"
                alt="Logística consciente"
                className="w-full h-full object-cover"
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.65} inView className="lg:col-span-2">
            <div className="relative rounded-md h-full p-6 aspect-square lg:aspect-auto flex justify-between flex-col overflow-hidden">
              <img
                src="/woman-image.jpg"
                alt="Eficiencia organizacional con sentido"
                className="absolute inset-0 w-full h-full object-cover"
                width={1000}
                height={1000}
              />
              <ChartBar className="w-8 h-8 stroke-1 text-white/90" />
              <div className="flex flex-col gap-4 relative z-10">
                <div className="flex flex-col">
                  <h3 className="text-xl tracking-tight text-white font-semibold">
                    Eficiencia organizacional con sentido
                  </h3>
                  <p className="text-white/90 text-base">
                    No se trata de hacer más. Se trata de hacer mejor, con menos
                    fricción, más enfoque y propósito claro.
                  </p>
                </div>
                <Button
                  variant="secondary"
                  className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all"
                  onClick={() => scrollToSection("cta")}
                >
                  Quiero operar con propósito
                </Button>
              </div>
              <ProgressiveBlur
                className="pointer-events-none absolute bottom-0 left-0 h-[80%] w-full"
                blurIntensity={1}
              />
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  </div>
);
