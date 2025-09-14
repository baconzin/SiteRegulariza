import React from "react";
import { FileText, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Início", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Galeria", href: "#gallery" },
    { name: "Contato", href: "#contact" },
  ];

  const services = [
    "Regularização de Condomínios Rurais",
    "Regularização de Condomínios Urbanos",
    "Regularização de Clubes urbanos e rurais",
    "Auditoria Documental",
    "Regularização Fundiária",
    "Assessoria Jurídica",
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-gold-500 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Alpas</h3>
                <p className="text-navy-200 text-sm">Regularização Condominial</p>
              </div>
            </div>
            <p className="text-navy-200 leading-relaxed">
              Especialista em regularização de documentações para condomínios e clubes,
              com 16 anos de experiência no mercado. Única empresa da região dedicada
              exclusivamente a este segmento.
            </p>
            <div className="flex items-center space-x-2 text-gold-400">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gold-400 rounded-full" />
                ))}
              </div>
              <span className="text-sm text-navy-200">16 anos de excelência</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-navy-200 hover:text-white transition-colors duration-300 flex items-start"
                  >
                    <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-navy-200 text-sm flex items-start">
                  <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gold-400">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="tel:+5519971636969"
                    className="text-navy-200 hover:text-white transition-colors duration-300"
                  >
                    (19) 97163-6969
                  </a>
                  <p className="text-xs text-navy-300 mt-1">WhatsApp disponível</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:contato@regulariza.agr.br"
                    className="text-navy-200 hover:text-white transition-colors duration-300"
                  >
                    contato@regulariza.agr.br
                  </a>
                  <p className="text-xs text-navy-300 mt-1">Resposta em até 24h</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-navy-200">Campinas e Região</p>
                  <p className="text-xs text-navy-300 mt-1">Atendimento presencial e online</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-gold-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-navy-200">Seg a Sex: 8h às 18h</p>
                  <p className="text-xs text-navy-300 mt-1">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-600 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-navy-200">
                © {currentYear} Alpas - Regularização Condominial. Todos os direitos reservados.
              </p>
              <p className="text-sm text-navy-300 mt-1">
                Única empresa da região especializada em regularização de documentações para condomínios e clubes.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-navy-300">
              <span>Desenvolvido com</span>
              <div className="w-1 h-1 bg-gold-500 rounded-full" />
              <span>pela equipe técnica</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
