"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustedBy } from "@/components/ui/trusted-by";
import { SectionBackground } from "@/components/ui/section-background";


export const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["proposito", "tecnología", "personas", "crecimiento"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const handleScheduleCall = () => {
    // Aquí puedes agregar la lógica para abrir un calendario o redirigir a una página de contacto
    window.open('https://calendly.com/tu-usuario', '_blank');
  };

  const handleFirstStep = () => {
    // Aquí puedes agregar la lógica para redirigir a una página de contacto o formulario
    window.open('/contacto', '_blank');
  };

  return (
    <motion.div 
      className="w-full max-w-full overflow-x-hidden relative"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3
      }}
    >
      <SectionBackground intensity={0.9} speed={45} />
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex gap-8 pt-32 pb-16 lg:pt-40 lg:pb-20 items-center justify-center flex-col"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.0, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.6
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8
            }}
          >
            <TrustedBy />
          </motion.div>
          
          <motion.div 
            className="flex gap-4 flex-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.0
            }}
          >
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">Consultoria que une</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                            }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
            Transformamos organizaciones con un enfoque consciente, modular y centrado en el ser. Creamos impacto real combinando estrategia, cultura e innovación.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-row gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.2
            }}
          >
            <Button 
              size="lg" 
              className="gap-4" 
              variant="outline"
              onClick={handleScheduleCall}
            >
              Agendar llamada <PhoneCall className="w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              className="gap-4"
              onClick={handleFirstStep}
            >
              Primer paso <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
