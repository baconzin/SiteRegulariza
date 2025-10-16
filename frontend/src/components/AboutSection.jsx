import React from "react";
import { Card, CardContent } from "./ui/card";
import { Award, Shield, Users, Clock, CheckCircle, MapPin } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "16 Anos de Experiência",
      description: "Mais de uma década dedicada à regularização fundiária e georeferenciamento"
    },
    {
      icon: Shield,
      title: "Segurança Jurídica",
      description: "Garantimos tranquilidade e conformidade legal em todos os processos"
    },
    {
      icon: MapPin,
      title: "Rio Claro e Região",
      description: "Atendimento especializado em Rio Claro (SP), Limeira, Piracicaba e região"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Processos otimizados para maior rapidez na regularização"
    }
  ];

  const achievements = [
    "Especialistas em georeferenciamento INCRA/SIGEF com equipamentos de alta precisão",
    "Mais de 500 propriedades regularizadas com sucesso em Rio Claro e região",
    "Parcerias sólidas com cartórios, INCRA e órgãos públicos",
    "Equipe especializada em legislação fundiária e agrimensura",
    "Atendimento personalizado para cada tipo de propriedade (rural, urbana, condomínio)",
    "Certificação completa para CAR, CCIR, INCRA e SIGEF"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2f5d3f] mb-6">
            Sobre a REGULARIZA
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Especialistas em <strong>regularização fundiária</strong> e 
            <strong> georeferenciamento</strong> atuando em <strong>Rio Claro (SP)</strong> e região. 
            Trazemos <strong>segurança jurídica</strong> para propriedades rurais, 
            condomínios e loteamentos.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Company Story */}
          <article className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#2f5d3f] mb-4">
                Nossa História
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Com <strong className="text-[#2f5d3f]">16 anos de experiência</strong> em 
                  regularização fundiária, construímos nossa reputação atendendo propriedades 
                  rurais, <strong>condomínios agrícolas</strong>, loteamentos e clubes em 
                  <strong> Rio Claro (SP)</strong> e toda a região.
                </p>
                <p>
                  Especializados em <strong className="text-[#2f5d3f]">georeferenciamento INCRA/SIGEF</strong>, 
                  utilizamos equipamentos GPS/GNSS de alta precisão para garantir medidas exatas e 
                  <strong> certificação completa</strong> de propriedades rurais.
                </p>
                <p>
                  Nossa missão é proporcionar <strong className="text-[#2f5d3f]">tranquilidade 
                  e segurança jurídica</strong> para proprietários rurais, síndicos, associações 
                  e produtores agrícolas, garantindo que todos os aspectos legais estejam em conformidade 
                  com <strong>INCRA</strong>, <strong>SIGEF</strong>, <strong>CAR</strong> e <strong>CCIR</strong>.
                </p>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xl font-semibold text-[#2f5d3f] mb-4">
                Nossos Diferenciais
              </h4>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-[#c5a572] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Highlights Cards */}
          <aside className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-[#c5a572] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a572] group-hover:bg-opacity-30 transition-colors duration-300">
                    <highlight.icon className="h-8 w-8 text-[#2f5d3f]" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#2f5d3f] mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* Image */}
            <div className="sm:col-span-2 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1724048413085-1c8d81b3ffa3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxwcm9wcmllZGFkZSUyMHJ1cmFsfGVufDB8fHx8MTc2MDU4MTY2M3ww&ixlib=rb-4.1.0&q=85" 
                alt="Propriedade rural regularizada em Rio Claro SP - vista aérea"
                className="w-full h-64 object-cover"
                loading="lazy"
              />
            </div>
          </aside>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <article className="bg-gradient-to-r from-green-50 to-amber-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#2f5d3f] mb-4">
              Pronto para Regularizar sua Propriedade?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Entre em contato e descubra como podemos ajudar com <strong>georeferenciamento</strong>, 
              <strong> regularização rural</strong>, <strong>CAR</strong>, <strong>CCIR</strong> e 
              muito mais em <strong>Rio Claro (SP)</strong> e região.
            </p>
            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="bg-[#c5a572] hover:bg-[#b39562] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              data-testid="about-cta-button"
            >
              Fale Conosco
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;