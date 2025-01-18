import { useState } from "react";
import { Send, ArrowLeft, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormStep = 1 | 2 | 3;

interface FormData {
  // Step 1: Basic Info
  name: string;
  companyName: string;
  whatsapp: string;
  // Step 2: Project Details
  description: string;
  mustHave: string;
  mustNotHave: string;
  // Step 3: References
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
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, attachments: e.target.files }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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

  const nextStep = () => setStep((prev) => (prev < 3 ? (prev + 1) as FormStep : prev));
  const prevStep = () => setStep((prev) => (prev > 1 ? (prev - 1) as FormStep : prev));

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
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-secondary mb-2">
                  Nome para contato *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary"
                  required
                  minLength={3}
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block text-secondary mb-2">
                  Nome da empresa/site *
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary"
                  required
                  minLength={2}
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-secondary mb-2">
                  WhatsApp *
                </label>
                <Input
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary"
                  required
                  pattern="^\+?[1-9]\d{10,14}$"
                  placeholder="+5511999999999"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="description" className="block text-secondary mb-2">
                  Descrição do projeto (história/benefícios/diferenciais) *
                </label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary min-h-[120px]"
                  required
                  minLength={100}
                  placeholder="Descreva seu projeto em detalhes (mínimo 100 caracteres)"
                />
              </div>
              <div>
                <label htmlFor="mustHave" className="block text-secondary mb-2">
                  O que o site deve ter? *
                </label>
                <Textarea
                  id="mustHave"
                  name="mustHave"
                  value={formData.mustHave}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary min-h-[100px]"
                  required
                  minLength={50}
                  placeholder="Liste os elementos essenciais para seu site (mínimo 50 caracteres)"
                />
              </div>
              <div>
                <label htmlFor="mustNotHave" className="block text-secondary mb-2">
                  O que o site não deve ter?
                </label>
                <Textarea
                  id="mustNotHave"
                  name="mustNotHave"
                  value={formData.mustNotHave}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary min-h-[100px]"
                  placeholder="Liste elementos que você não quer no seu site"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label htmlFor="socialLinks" className="block text-secondary mb-2">
                  Redes sociais
                </label>
                <Textarea
                  id="socialLinks"
                  name="socialLinks"
                  value={formData.socialLinks}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary"
                  placeholder="Liste os links das suas redes sociais"
                />
              </div>
              <div>
                <label htmlFor="inspiration" className="block text-secondary mb-2">
                  Sites de inspiração
                </label>
                <Textarea
                  id="inspiration"
                  name="inspiration"
                  value={formData.inspiration}
                  onChange={handleInputChange}
                  className="bg-black border-primary/20 text-white focus:border-primary"
                  placeholder="Liste sites que você gosta e o que especificamente gosta neles"
                />
              </div>
              <div>
                <label htmlFor="attachments" className="block text-secondary mb-2">
                  Anexos (logos, imagens, arquivos)
                </label>
                <Input
                  id="attachments"
                  name="attachments"
                  type="file"
                  onChange={handleFileChange}
                  className="bg-black border-primary/20 text-white focus:border-primary"
                  multiple
                  accept="image/*,.pdf,.doc,.docx"
                />
              </div>
            </div>
          )}

          <div className="flex justify-between gap-4">
            {step > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex-1 bg-black text-primary border-primary/20 hover:bg-primary/10"
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
              >
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex-1 bg-primary text-black hover:bg-primary/90"
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