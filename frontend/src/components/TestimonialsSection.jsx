import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "João Silva",
      role: "Proprietário Rural",
      location: "Rio Claro, SP",
      text: "Precisava regularizar minha fazenda de 80 hectares para vender. A REGULARIZA fez todo o georeferenciamento INCRA/SIGEF de forma rápida e profissional. Recomendo!",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Síndica de Condomínio",
      location: "Limeira, SP",
      text: "Nosso condomínio rural estava com problemas na documentação há anos. A equipe resolveu tudo: retificação de área, CAR, CCIR e registro. Excelente atendimento!",
      rating: 5
    },
    {
      name: "Carlos Oliveira",
      role: "Produtor Rural",
      location: "Piracicaba, SP",
      text: "Fiz o georeferenciamento de 3 propriedades diferentes. Profissionais competentes, equipamentos de ponta e preço justo. Voltarei a contratar com certeza.",
      rating: 5
    },
    {
      name: "Ana Paula Costa",
      role: "Proprietária de Chácara",
      location: "Araras, SP",
      text: "Precisava do CCIR e CAR para minha chácara. A REGULARIZA me orientou em todo o processo e resolveu tudo em menos de 60 dias. Muito satisfeita com o serviço!",
      rating: 5
    },
    {
      name: "Roberto Mendes",
      role: "Investidor",
      location: "Rio Claro, SP",
      text: "Comprei um loteamento rural que precisava de regularização completa. A equipe fez levantamento topográfico, georeferenciamento e toda documentação. Profissionais sérios e competentes.",
      rating: 5
    },
    {
      name: "Patricia Ferreira",
      role: "Administradora de Clubes",
      location: "Santa Gertrudes, SP",
      text: "Nosso clube estava irregular há décadas. Com a ajuda da REGULARIZA, conseguimos toda a documentação em ordem. Trabalho impecável do início ao fim.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#2f5d3f] to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Depoimentos de Clientes
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Veja o que nossos clientes dizem sobre nossos serviços de <strong>regularização fundiária</strong> e 
            <strong> georeferenciamento</strong> em <strong>Rio Claro</strong> e região
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-[#c5a572] mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#c5a572] text-[#c5a572]" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <footer>
                  <p className="font-semibold text-[#2f5d3f]">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white bg-opacity-10 backdrop-blur-sm px-8 py-4 rounded-full">
            <div className="flex space-x-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-[#c5a572] text-[#c5a572]" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold">5.0</p>
              <p className="text-sm text-gray-200">500+ avaliações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;