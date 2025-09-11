import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, FileText, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-navy-600 p-2 rounded-lg">
              <FileText className="h-6 w-6 text-gold-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-navy-600">Raphael Pascon</h1>
              <p className="text-sm text-gray-600">Regularização Condominial</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-navy-600 hover:text-gold-500 font-medium transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-navy-600 hover:text-gold-500 font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-navy-600 hover:text-gold-500 font-medium transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-navy-600 hover:text-gold-500 font-medium transition-colors"
            >
              Galeria
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-navy-600 hover:text-gold-500 font-medium transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="h-4 w-4 mr-2" />
              Solicitar Consulta
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-navy-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left px-4 py-2 text-navy-600 hover:bg-gray-50 rounded"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-navy-600 hover:bg-gray-50 rounded"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-navy-600 hover:bg-gray-50 rounded"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left px-4 py-2 text-navy-600 hover:bg-gray-50 rounded"
              >
                Galeria
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-navy-600 hover:bg-gray-50 rounded"
              >
                Contato
              </button>
              <div className="px-4 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Solicitar Consulta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;