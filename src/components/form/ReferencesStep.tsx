import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ReferencesStepProps {
  formData: {
    socialLinks: string;
    inspiration: string;
    attachments: FileList | null;
  };
  onChange: (name: string, value: string | FileList) => void;
}

export const ReferencesStep = ({ formData, onChange }: ReferencesStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="socialLinks" className="block text-secondary mb-2">
          Redes sociais
        </label>
        <Textarea
          id="socialLinks"
          name="socialLinks"
          value={formData.socialLinks}
          onChange={(e) => onChange("socialLinks", e.target.value)}
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
          onChange={(e) => onChange("inspiration", e.target.value)}
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
          onChange={(e) => onChange("attachments", e.target.files || null)}
          className="bg-black border-primary/20 text-white focus:border-primary"
          multiple
          accept="image/*,.pdf,.doc,.docx"
        />
      </div>
    </div>
  );
};