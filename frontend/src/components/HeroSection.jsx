import React from "react";
import { Button } from "./ui/button";
import { Phone, Shield, Award, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-navy-50 to-gold-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-gold-100 text-gold-800 rounded-full text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              16 anos de experiência
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-navy-600 leading-tight">
              Única empresa da região especializada em{" "}
              <span className="text-gold-500">regularização de documentações</span>{" "}
              para condomínios e clubes
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Com 16 anos de experiência no ramo condominial, somos referência na 
              regularização de condomínios rurais e urbanos. Nossa missão é trazer 
              segurança jurídica e tranquilidade para síndicos, associações e moradores.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <Phone className="h-5 w-5 mr-2" />
                Solicite uma consulta
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
                className="border-navy-300 text-navy-600 hover:bg-navy-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Saiba mais
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-gold-100 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-gold-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-600">16+</h3>
                    <p className="text-gray-600">Anos de Experiência</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-navy-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-navy-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy-600">500+</h3>
                    <p className="text-gray-600">Clientes Atendidos</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-navy-600 mb-4">
                Especialidades
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Condomínios Rurais
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Condomínios Urbanos
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Clubes e Associações
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                  Loteamentos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;