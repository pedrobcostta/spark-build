import { Textarea } from "@/components/ui/textarea";

interface ProjectDetailsStepProps {
  formData: {
    description: string;
    mustHave: string;
    mustNotHave: string;
  };
  onChange: (name: string, value: string) => void;
}

export const ProjectDetailsStep = ({ formData, onChange }: ProjectDetailsStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="description" className="block text-secondary mb-2">
          Descrição do projeto (história/benefícios/diferenciais) *
        </label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={(e) => onChange("description", e.target.value)}
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
          onChange={(e) => onChange("mustHave", e.target.value)}
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
          onChange={(e) => onChange("mustNotHave", e.target.value)}
          className="bg-black border-primary/20 text-white focus:border-primary min-h-[100px]"
          placeholder="Liste elementos que você não quer no seu site"
        />
      </div>
    </div>
  );
};