import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2f5d3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/logo.png" 
              alt="REGULARIZA" 
              className="h-16 w-auto mb-4 brightness-0 invert"
              loading="lazy"
            />
            <h3 className="text-xl font-bold mb-2">REGULARIZA</h3>
            <p className="text-gray-300 mb-4">
              Especialistas em regularização fundiária e georeferenciamento em Rio Claro (SP). 
              16 anos de experiência atendendo condomínios rurais, propriedades agrícolas e loteamentos.
            </p>
            <p className="text-sm text-gray-400">
              INCRA | SIGEF | CAR | CCIR | Regularização Rural | Topografia
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#c5a572] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <a href="/#about" className="text-gray-300 hover:text-[#c5a572] transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-300 hover:text-[#c5a572] transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <Link to="/georreferenciamento" className="text-gray-300 hover:text-[#c5a572] transition-colors">
                  Georeferenciamento
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-gray-300 hover:text-[#c5a572] transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#c5a572] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Rio Claro (SP) e Região
                </span>
              </li>
              <li>
                <a 
                  href="mailto:contato@regulariza.agr.br" 
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#c5a572] transition-colors"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">contato@regulariza.agr.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5519971636969" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-300 hover:text-[#c5a572] transition-colors"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span className="text-sm">(19) 97163-6969</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} REGULARIZA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Regularização Fundiária | Georeferenciamento | Topografia | Rio Claro SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;