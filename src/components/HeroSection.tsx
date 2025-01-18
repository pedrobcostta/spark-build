import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-left animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Seu site do jeito que você quer
              <span className="text-primary block mt-2">em até 48 horas!</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-8">
              Criamos sites personalizados com total segurança, flexibilidade e rapidez.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-black px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 hover:scale-105 transition-transform"
            >
              Solicitar agora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 animate-fade-down">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg filter blur-xl"></div>
              <div className="relative bg-black p-6 rounded-lg border border-primary/20">
                <div className="w-full aspect-video bg-gradient-to-br from-black via-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xl font-semibold">Preview do Site</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};