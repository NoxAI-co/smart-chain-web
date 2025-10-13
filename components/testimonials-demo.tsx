import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee"
import { SectionBackground } from "@/components/ui/section-background";


const testimonials = [
  {
    author: {
      name: "María González",
      handle: "@mariag_ceo",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Smart Chain nos ayudó a alinear tecnología con propósito. Ahora operamos con más eficiencia y nuestros equipos están más comprometidos.",
  },
  {
    author: {
      name: "Carlos Mendoza",
      handle: "@carlos_cto",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "La transformación digital que implementamos con Smart Chain redujo nuestros procesos en 40% y mejoró la satisfacción del cliente.",
  },
  {
    author: {
      name: "Ana Patricia Ruiz",
      handle: "@anaruiz_hr",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Por fin una consultoría que entiende que la tecnología debe servir a las personas, no al revés. Nuestro equipo está más motivado que nunca.",
  },
  {
    author: {
      name: "Roberto Silva",
      handle: "@robertosilva_coo",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Smart Chain nos enseñó que la eficiencia viene del propósito claro. Nuestros indicadores mejoraron 60% en solo 6 meses.",
  },
  {
    author: {
      name: "Laura Jiménez",
      handle: "@lauraj_innovacion",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "La metodología 'All You Can Learn' cambió nuestra cultura organizacional. Ahora innovamos desde el ser, no desde la presión.",
  },
  {
    author: {
      name: "Diego Herrera",
      handle: "@diegoherrera_cfo",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "La inversión en Smart Chain se pagó sola. ROI del 300% en el primer año gracias a procesos más eficientes y equipos alineados.",
  },
  {
    author: {
      name: "Valentina Castro",
      handle: "@valentinac_marketing",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    text: "Smart Chain nos ayudó a conectar nuestra marca con nuestro propósito real. Los clientes notan la diferencia auténtica.",
  },
  {
    author: {
      name: "Andrés López",
      handle: "@andresl_operaciones",
      avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face"
    },
    text: "La logística consciente que implementamos con Smart Chain optimizó nuestra cadena de suministro y redujo desperdicios en 45%.",
  },
  {
    author: {
      name: "Camila Restrepo",
      handle: "@camilarestrepo_ceo",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
    },
    text: "Smart Chain nos mostró que la transformación digital exitosa empieza por transformar la cultura. Nuestros equipos están más unidos.",
  },
  {
    author: {
      name: "Fernando Torres",
      handle: "@fernandot_tech",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
    },
    text: "La automatización que implementamos con Smart Chain liberó tiempo para que nuestros equipos se enfoquen en lo que realmente importa.",
  }
]

export function TestimonialsSectionDemo() {
  return (
    <div id="testimonials" className="relative w-full max-w-full overflow-x-hidden">
      <SectionBackground intensity={0.4} speed={60} />
      <div className="relative z-10">
        <TestimonialsSection
          title="Empresas que transformaron desde el ser"
          description="No creemos en fórmulas genéricas. En Smart Chain acompañamos a las organizaciones a alinearse con su propósito y operar desde su esencia."
          testimonials={testimonials}
        />
      </div>
    </div>
  )
}