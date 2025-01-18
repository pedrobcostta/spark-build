import { Input } from "@/components/ui/input";
import { WhatsAppInput } from "./WhatsAppInput";

interface BasicInfoStepProps {
  formData: {
    name: string;
    companyName: string;
    whatsapp: string;
  };
  onChange: (name: string, value: string) => void;
}

export const BasicInfoStep = ({ formData, onChange }: BasicInfoStepProps) => {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-secondary mb-2">
          Nome para contato *
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => onChange("name", e.target.value)}
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
          onChange={(e) => onChange("companyName", e.target.value)}
          className="bg-black border-primary/20 text-white focus:border-primary"
          required
          minLength={2}
        />
      </div>
      <div>
        <label htmlFor="whatsapp" className="block text-secondary mb-2">
          WhatsApp *
        </label>
        <WhatsAppInput
          value={formData.whatsapp}
          onChange={(value) => onChange("whatsapp", value)}
          className="bg-black border-primary/20 text-white focus:border-primary"
        />
      </div>
    </div>
  );
};