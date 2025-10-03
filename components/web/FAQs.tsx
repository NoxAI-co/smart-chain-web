import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQs = () => {
  const faqData = [
    {
      question: "¿Es solo para grandes empresas?",
      answer:
        "No. Nuestro modelo modular se adapta a cualquier tamaño y presupuesto.",
    },
    {
      question: "¿Qué me entrega el diagnóstico gratuito?",
      answer:
        "Un mapa claro de tus puntos críticos y cómo abordarlos, sin compromiso.",
    },
    {
      question: "¿Cuándo veré resultados?",
      answer:
        "En muchos casos, hay impactos en menos de 30 días tras la implementación.",
    },
    {
      question: "¿Qué diferencia tienen con otras consultoras?",
      answer:
        "Ejecutamos contigo. No solo decimos qué hacer, lo hacemos a tu lado.",
    },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex text-center justify-center items-center gap-4 flex-col">
            <Badge variant="outline">FAQ</Badge>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                ¿Tienes dudas? Aquí van respuestas claras
              </h4>
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                Resolvemos las preguntas más frecuentes sobre nuestro modelo de
                transformación empresarial.
              </p>
            </div>
            <div>
              <Button className="gap-4" variant="outline">
                ¿Más preguntas? Hablemos <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="max-w-3xl w-full mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={"faq-" + index}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base">
                    <div className="flex items-start gap-3">
                      <span>{faq.answer}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};
