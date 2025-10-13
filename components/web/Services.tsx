"use client";

import { User, ChartBar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionBackground } from "@/components/ui/section-background";
import Image from "next/image";
import { motion } from "framer-motion";


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
  <div className="w-full max-w-full overflow-x-hidden relative pt-16 pb-24">
    <SectionBackground intensity={0.6} speed={55} />
    <div className="container mx-auto relative z-10 px-4">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <motion.div
            className="lg:col-span-2 relative z-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
              <div className="relative rounded-md h-full overflow-hidden">
                <Image
                  src="/office-desk.jpg"
                  alt="Productividad desde el ser"
                  fill
                  priority={false}
                  loading="lazy"
                  className="object-cover object-left-top"
                  sizes="(min-width: 1024px) 66vw, 100vw"
                />
                {/* Degradado ligero en vez de blur componible */}
                <div className="pointer-events-none absolute bottom-0 left-0 h-[60%] w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
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
          </motion.div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
              <div className="relative rounded-md aspect-square overflow-hidden">
                <Image
                  src="/bento-2.svg"
                  alt="Transformación digital"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
          </motion.div>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
              <div className="relative rounded-md aspect-square overflow-hidden">
                <Image
                  src="/bento-1.svg"
                  alt="Logística consciente"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
              </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2 relative z-10"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
              <div className="relative rounded-md h-full p-6 aspect-square lg:aspect-auto flex justify-between flex-col overflow-hidden">
                <Image
                  src="/woman-image.jpg"
                  alt="Eficiencia organizacional con sentido"
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(min-width: 1024px) 66vw, 100vw"
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
                {/* Degradado ligero en vez de blur componible */
                }
                <div className="pointer-events-none absolute bottom-0 left-0 h-[70%] w-full bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);
