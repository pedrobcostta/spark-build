import { useState } from "react";
import { Send, ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { BasicInfoStep } from "./form/BasicInfoStep";
import { ProjectDetailsStep } from "./form/ProjectDetailsStep";
import { ReferencesStep } from "./form/ReferencesStep";

type FormStep = 1 | 2 | 3;

interface FormData {
  name: string;
  companyName: string;
  whatsapp: string;
  description: string;
  mustHave: string;
  mustNotHave: string;
  socialLinks: string;
  inspiration: string;
  attachments: FileList | null;
}

export const ContactSection = () => {
  const [step, setStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyName: "",
    whatsapp: "",
    description: "",
    mustHave: "",
    mustNotHave: "",
    socialLinks: "",
    inspiration: "",
    attachments: null,
  });
  const [isValidatingWhatsapp, setIsValidatingWhatsapp] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (name: string, value: string | FileList) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateWhatsapp = async (number: string) => {
    setIsValidatingWhatsapp(true);
    try {
      // Remove any non-digit characters and ensure we only have numbers
      const cleanNumber = number.replace(/\D/g, "");
      
      // Create the request with no-cors mode to handle CORS issues
      const response = await fetch("https://chatapi.sparksolucoes.com.br/api/messages/send", {
        method: "POST",
        mode: "no-cors", // Add this to handle CORS
        headers: {
          "Authorization": "3499538117",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: `55${cleanNumber}`,
          body: "Olá! Recebemos seu contato através do nosso site. Em breve retornaremos com mais informações!",
        }),
      });

      toast({
        title: "WhatsApp validado!",
        description: "Enviamos uma mensagem de confirmação.",
      });
      return true;
    } catch (error) {
      console.error("Erro na validação do WhatsApp:", error);
      toast({
        title: "Erro na validação",
        description: "Por favor, verifique o número informado.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsValidatingWhatsapp(false);
    }
  };

  const nextStep = async () => {
    if (step === 1) {
      const isValid = await validateWhatsapp(formData.whatsapp);
      if (!isValid) return;
    }
    setStep((prev) => (prev < 3 ? (prev + 1) as FormStep : prev));
  };

  const prevStep = () => setStep((prev) => (prev > 1 ? (prev - 1) as FormStep : prev));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({
      name: "",
      companyName: "",
      whatsapp: "",
      description: "",
      mustHave: "",
      mustNotHave: "",
      socialLinks: "",
      inspiration: "",
      attachments: null,
    });
    setStep(1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <BasicInfoStep formData={formData} onChange={handleInputChange} />;
      case 2:
        return <ProjectDetailsStep formData={formData} onChange={handleInputChange} />;
      case 3:
        return <ReferencesStep formData={formData} onChange={handleInputChange} />;
    }
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

        <div className="flex justify-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full ${
                s === step ? "bg-primary" : "bg-primary/20"
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {renderStep()}

          <div className="flex justify-between gap-4">
            {step > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex-1 bg-black text-primary border-primary/20 hover:bg-primary/10"
                disabled={isValidatingWhatsapp}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Anterior
              </Button>
            )}
            
            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex-1 bg-primary text-black hover:bg-primary/90"
                disabled={isValidatingWhatsapp}
              >
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex-1 bg-primary text-black hover:bg-primary/90"
                disabled={isValidatingWhatsapp}
              >
                Enviar mensagem
                <Send className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;