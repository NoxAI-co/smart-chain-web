import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"
import { Badge } from "@/components/ui/badge"

export function Benefits() {
  const cards = [
    {
      title: "Propósito Auténtico",
      description:
        "Ayudamos a las organizaciones a descubrir y conectar con su verdadero propósito, más allá de las métricas tradicionales.",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Ikigai Organizacional",
      description:
        "Encontramos ese punto  dulce  dulce dulce donde tu negocio es rentable, humano, innovador y plenamente significativo.",
      src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Transformación",
      description:
        "No aplicamos fórmulas genéricas. Cada organización tiene su propio camino hacia la excelencia y autenticidad.",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    },
    {
      title: "Crecer desde el ser",
      description: "Impulsamos el desarrollo personal y profesional desde la autenticidad, para que cada organización evolucione desde su esencia.",
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop&crop=center",
    }
  ]

  return (
    <div id="benefits" className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex gap-4 py-20 lg:py-10 flex-col items-center text-center">
          <div>
            <Badge variant={'outline'}>Lo que nos mueve</Badge>
          </div>
          <div className="flex gap-2 flex-col items-center">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Nuestro propósito es ayudarte a encontrar el tuyo
            </h2>
            <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-muted-foreground">
              No creemos en fórmulas genéricas. En Smart Chain acompañamos a las organizaciones a alinearse con su propósito y operar desde su esencia.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full max-w-5xl mx-auto">
          <div className="flex flex-col justify-center rounded-lg p-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              {cards.map((card, index) => (
                <MinimalCard className="background rounded-xl bg-[#030811] w-full sm:w-[calc(25%-12px)] max-w-[260px] min-h-[300px]" key={index}>                  <MinimalCardImage
                    className="h-[120px]"
                    src={card.src}
                    alt={card.title}
                  />
                  <MinimalCardTitle className="text-xl font-semibold mt-4">
                    {card.title}
                  </MinimalCardTitle>
                  <MinimalCardDescription className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </MinimalCardDescription>
                </MinimalCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}