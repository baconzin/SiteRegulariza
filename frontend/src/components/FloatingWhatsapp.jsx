import React from "react";

/**
 * Botão flutuante do WhatsApp (canto inferior direito).
 * Aparece em todas as páginas onde for incluído.
 */
export default function FloatingWhatsapp() {
  const numero = "5519971636969"; // DDI + DDD + número
  const mensagem = encodeURIComponent("Olá! Quero uma consulta sobre regularização.");
  const link = `https://wa.me/${numero}?text=${mensagem}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-5 right-5 z-50 rounded-full shadow-lg
                 bg-green-500 hover:bg-green-600 transition-colors
                 p-4 md:p-5 focus:outline-none focus:ring-2 focus:ring-green-300"
    >
      {/* Ícone WhatsApp (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-6 w-6 md:h-7 md:w-7 text-white fill-current"
      >
        <path d="M19.11 17.42a.81.81 0 0 0-.58-.26c-.29 0-.68.1-1.16.3-.49.21-.88.31-1.15.31-.22 0-.39-.07-.53-.2-.14-.13-.31-.32-.52-.57a8.61 8.61 0 0 1-.79-1.02c-.24-.36-.36-.66-.36-.9 0-.23.12-.51.37-.84.25-.33.37-.59.37-.78 0-.26-.09-.48-.26-.66-.17-.18-.35-.27-.54-.27-.42 0-.9.29-1.45.85-.54.57-.81 1.11-.81 1.63 0 .4.12.84.37 1.33.25.49.58 1 .99 1.53.41.53.93 1.06 1.54 1.6.61.54 1.18.95 1.7 1.23.52.28 1 .42 1.45.42.5 0 1.08-.17 1.75-.5.67-.33 1.01-.68 1.01-1.04 0-.21-.08-.4-.25-.57zM16 3C9.94 3 5 7.94 5 14c0 2.08.55 4 1.51 5.69L5 27l7.51-1.49A10.9 10.9 0 0 0 16 25c6.06 0 11-4.94 11-11S22.06 3 16 3zm0 20.5c-1.64 0-3.2-.42-4.56-1.15l-.33-.18-3.86.77.79-3.76-.2-.34A9.44 9.44 0 1 1 25.44 14 9.45 9.45 0 0 1 16 23.5z" />
      </svg>
    </a>
  );
}
