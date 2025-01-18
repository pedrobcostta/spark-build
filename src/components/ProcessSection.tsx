import { MessageSquare, Clock, RefreshCw, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Informe sua ideia",
    description: "Conte-nos o que deseja para o seu site.",
  },
  {
    icon: Clock,
    title: "Receba em 48 horas",
    description: "Apresentamos o site inicial para análise.",
  },
  {
    icon: RefreshCw,
    title: "Ajustes ilimitados",
    description: "Garantimos que o site fique como você imaginou.",
  },
  {
    icon: Rocket,
    title: "Lançamento seguro",
    description: "Publicamos seu site com domínio exclusivo.",
  },
];

export const ProcessSection = () => {
  return (
    <section className="py-20 px-4 bg-black/95">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Como <span className="text-primary">Funciona</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-black/80 p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-secondary">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};