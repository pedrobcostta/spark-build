import { Input } from "@/components/ui/input";
import React, { useState } from "react";

interface WhatsAppInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const WhatsAppInput = ({ value, onChange, className }: WhatsAppInputProps) => {
  const formatWhatsApp = (input: string) => {
    const numbers = input.replace(/\D/g, "");
    
    if (numbers.length <= 8) {
      return numbers.replace(/(\d{4})(\d{0,4})/, "$1-$2");
    } else if (numbers.length <= 11) {
      if (numbers.length <= 10) {
        return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
      }
      return numbers.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
    }
    return numbers.slice(0, 11);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatWhatsApp(e.target.value);
    onChange(formatted);
  };

  return (
    <Input
      value={value}
      onChange={handleChange}
      className={className}
      placeholder="(99) 9 9999-9999"
    />
  );
};