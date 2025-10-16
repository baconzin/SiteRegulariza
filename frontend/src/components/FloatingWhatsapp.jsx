import React from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsapp = () => {
  const whatsappNumber = "5519971636969";
  const message = "Olá! Gostaria de solicitar um orçamento para regularização fundiária e georeferenciamento.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Fale conosco pelo WhatsApp"
      data-testid="whatsapp-float-button"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Fale conosco!
      </span>
    </a>
  );
};

export default FloatingWhatsapp;