import { useState } from "react";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    details: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", contact: "", details: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          Pronto para criar o site dos seus <span className="text-primary">sonhos</span>?
        </h2>
        <p className="text-center text-secondary mb-12">
          Comece agora mesmo! Preencha o formulário abaixo.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-secondary mb-2">
              Nome completo
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-black border border-primary/20 text-white focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-secondary mb-2">
              E-mail ou telefone
            </label>
            <input
              type="text"
              id="contact"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-black border border-primary/20 text-white focus:border-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="details" className="block text-secondary mb-2">
              Detalhes do projeto
            </label>
            <textarea
              id="details"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-black border border-primary/20 text-white focus:border-primary focus:outline-none min-h-[120px]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-black py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
          >
            Enviar mensagem
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
};