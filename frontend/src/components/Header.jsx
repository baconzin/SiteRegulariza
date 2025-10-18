import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, MapPin, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
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
          <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="REGULARIZA - Regularização Fundiária e Georeferenciamento" 
              className="h-12 w-auto object-contain"
              loading="eager"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-[#2f5d3f] hover:text-[#c5a572] font-medium transition-colors"
            >
              Início
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#2f5d3f] hover:text-[#c5a572] font-medium transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#2f5d3f] hover:text-[#c5a572] font-medium transition-colors"
            >
              Serviços
            </button>
            <Link
              to="/georreferenciamento"
              className="text-[#2f5d3f] hover:text-[#c5a572] font-medium transition-colors flex items-center"
            >
              <MapPin className="h-4 w-4 mr-1" />
              Georeferenciamento
            </Link>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-[#2f5d3f] hover:text-[#c5a572] font-medium transition-colors"
            >
              Contato
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#c5a572] hover:bg-[#b39562] text-white px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="h-4 w-4 mr-2" />
              Orçamento
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#2f5d3f] hover:bg-gray-100"
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-left px-4 py-2 text-[#2f5d3f] hover:bg-gray-50 rounded"
              >
                Início
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-2 text-[#2f5d3f] hover:bg-gray-50 rounded"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-2 text-[#2f5d3f] hover:bg-gray-50 rounded"
              >
                Serviços
              </button>
              <Link
                to="/georreferenciamento"
                onClick={() => setIsMenuOpen(false)}
                className="text-left px-4 py-2 text-[#2f5d3f] hover:bg-gray-50 rounded flex items-center"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Georeferenciamento
              </Link>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-2 text-[#2f5d3f] hover:bg-gray-50 rounded"
              >
                Contato
              </button>
              <div className="px-4 py-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-[#c5a572] hover:bg-[#b39562] text-white"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Orçamento
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