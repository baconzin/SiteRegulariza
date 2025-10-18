import React from "react";
import { Button } from "./ui/button";
import { Phone, Shield, Award, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-green-50 to-amber-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <article className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#c5a572] bg-opacity-20 text-[#2f5d3f] rounded-full text-sm font-medium">
              <Award className="h-4 w-4 mr-2" />
              16 anos de experiência em Rio Claro (SP)
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#2f5d3f] leading-tight">
              Regularização Fundiária e{" "}
              <span className="text-[#c5a572]">Georeferenciamento</span>{" "}
              para Propriedades Rurais
            </h1>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              Especialistas em <strong>regularização de condomínios rurais</strong>, 
              <strong> georeferenciamento INCRA/SIGEF</strong>, <strong>CAR</strong>, 
              <strong> CCIR</strong>, <strong>retificação</strong> e <strong>desmembramento</strong> de 
              propriedades rurais e urbanas em <strong>Rio Claro (SP)</strong> e região.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-[#c5a572] hover:bg-[#b39562] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105"
                data-testid="hero-contact-button"
              >
                <Phone className="h-5 w-5 mr-2" />
                Solicite um Orçamento
              </Button>
              
              <Link to="/georreferenciamento">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#2f5d3f] text-[#2f5d3f] hover:bg-green-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
                  data-testid="hero-georef-button"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Georeferenciamento
                </Button>
              </Link>
            </div>

            {/* SEO Keywords */}
            <div className="text-sm text-gray-600 space-x-2">
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full">INCRA</span>
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full">SIGEF</span>
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full">CAR</span>
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full">CCIR</span>
              <span className="inline-block bg-gray-100 px-3 py-1 rounded-full">Topografia</span>
            </div>
          </article>

          {/* Stats Cards */}
          <aside className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#c5a572] bg-opacity-20 p-3 rounded-lg">
                    <Shield className="h-6 w-6 text-[#2f5d3f]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2f5d3f]">16+</h3>
                    <p className="text-gray-600">Anos de Experiência</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-[#2f5d3f]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#2f5d3f]">500+</h3>
                    <p className="text-gray-600">Clientes Atendidos</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-[#2f5d3f] mb-4">
                Especialidades em Rio Claro e Região
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#c5a572] rounded-full mr-3"></div>
                  Georeferenciamento INCRA/SIGEF
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#c5a572] rounded-full mr-3"></div>
                  Condomínios Rurais e Urbanos
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#c5a572] rounded-full mr-3"></div>
                  Regularização de Loteamentos
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#c5a572] rounded-full mr-3"></div>
                  CAR, CCIR e Retificação Rural
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#c5a572] rounded-full mr-3"></div>
                  Clubes e Associações
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#c5a572] rounded-full mr-3"></div>
                  Desmembramento de Propriedades
                </li>
              </ul>
            </div>

            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHx0b3BvZ3JhZmlhfGVufDB8fHx8MTc2MDU4MTY1N3ww&ixlib=rb-4.1.0&q=85" 
                alt="Equipamento de topografia e georeferenciamento profissional em Rio Claro SP"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;