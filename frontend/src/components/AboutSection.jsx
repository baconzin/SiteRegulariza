import React from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Shield, Users, Clock, CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "16 Anos de Experiência",
      description: "Mais de uma década dedicada exclusivamente ao ramo condominial"
    },
    {
      icon: Shield,
      title: "Segurança Jurídica",
      description: "Garantimos tranquilidade e conformidade legal em todos os processos"
    },
    {
      icon: Users,
      title: "Referência Regional",
      description: "Única empresa especializada na região em regularização condominial"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Processos otimizados para maior rapidez na regularização"
    }
  ];

  const achievements = [
    "Primeira empresa da região especializada em regularização condominial",
    "Mais de 500 condomínios regularizados com sucesso",
    "Parcerias sólidas com cartórios e órgãos públicos",
    "Equipe especializada em legislação condominial",
    "Atendimento personalizado para cada tipo de empreendimento"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-600 mb-6">
            Sobre Nossa Empresa
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Fundada com o propósito de trazer segurança jurídica ao mercado condominial, 
            nossa empresa se tornou referência na regularização de documentações para 
            condomínios rurais e urbanos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Company Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-600 mb-4">
                Nossa História
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Com <strong className="text-navy-600">16 anos de experiência</strong> no 
                  ramo condominial, construímos nossa reputação através da dedicação exclusiva 
                  à regularização de documentações para condomínios e clubes.
                </p>
                <p>
                  Somos pioneiros na região, sendo a <strong className="text-gold-600">única 
                  empresa especializada</strong> neste segmento tão específico e importante 
                  para a segurança jurídica dos empreendimentos.
                </p>
                <p>
                  Nossa missão é proporcionar <strong className="text-navy-600">tranquilidade 
                  e segurança jurídica</strong> para síndicos, administradoras, associações 
                  e moradores, garantindo que todos os aspectos legais estejam em conformidade.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-navy-600 mb-4">
                Nossos Diferenciais
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                    <highlight.icon className="h-8 w-8 text-gold-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy-600 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-50 to-gold-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-navy-600 mb-4">
              Pronto para Regularizar seu Condomínio?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a trazer 
              segurança jurídica para seu empreendimento.
            </p>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Fale Conosco
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;