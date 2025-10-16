import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building, TreePine, Users, FileCheck, MapPin, Scale, Navigation, FileText } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: MapPin,
      title: "Georeferenciamento INCRA/SIGEF",
      description: "Georeferenciamento certificado de propriedades rurais para INCRA e SIGEF, com precisão e agilidade. Atendemos Rio Claro (SP) e região.",
      features: [
        "Levantamento topográfico georreferenciado",
        "Certificação INCRA/SIGEF",
        "Memorial descritivo e plantas",
        "Acompanhamento até aprovação"
      ]
    },
    {
      icon: TreePine,
      title: "Regularização de Condomínios Rurais",
      description: "Especialistas em regularização de condomínios agrícolas e rurais, garantindo conformidade com legislação ambiental e fundiária.",
      features: [
        "Análise da documentação existente",
        "Adequação às normas ambientais",
        "Registro em cartório",
        "Aprovação junto aos órgãos competentes"
      ]
    },
    {
      icon: FileText,
      title: "CAR e CCIR",
      description: "Cadastro Ambiental Rural (CAR) e Certificado de Cadastro de Imóvel Rural (CCIR) para propriedades rurais em Rio Claro e região.",
      features: [
        "Cadastro Ambiental Rural (CAR)",
        "Certificado CCIR",
        "Atualização cadastral",
        "Regularização ambiental"
      ]
    },
    {
      icon: Building,
      title: "Regularização de Loteamentos",
      description: "Soluções completas para regularização de loteamentos urbanos e rurais, incluindo adequação às normas municipais.",
      features: [
        "Aprovação de projetos",
        "Licenças e habite-se",
        "Adequação ao Código de Obras",
        "Registro de incorporação"
      ]
    },
    {
      icon: Navigation,
      title: "Retificação e Desmembramento",
      description: "Serviços de retificação de áreas, desmembramento e unificação de propriedades rurais com precisão técnica.",
      features: [
        "Retificação de área rural",
        "Desmembramento de propriedades",
        "Unificação de matrículas",
        "Levantamento topográfico"
      ]
    },
    {
      icon: Users,
      title: "Clubes e Associações",
      description: "Consultoria especializada para clubes, associações recreativas e condomínios fechados, com foco na conformidade legal.",
      features: [
        "Análise jurídica completa",
        "Adequação de estatutos",
        "Regularização fundiária",
        "Assessoria para assembleias"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análise Inicial",
      description: "Avaliação completa da documentação e situação atual da propriedade ou empreendimento"
    },
    {
      number: "02",
      title: "Diagnóstico",
      description: "Identificação de pendências e elaboração de plano de regularização customizado"
    },
    {
      number: "03",
      title: "Execução",
      description: "Implementação das ações necessárias junto aos órgãos competentes (INCRA, cartórios, prefeitura)"
    },
    {
      number: "04",
      title: "Finalização",
      description: "Entrega da documentação regularizada, certificações e orientações finais"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2f5d3f] mb-6">
            Nossos Serviços de Regularização
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em <strong>regularização fundiária</strong>, 
            <strong> georeferenciamento</strong>, <strong>topografia</strong> e <strong>documentação rural</strong> em 
            <strong> Rio Claro (SP)</strong> e região, garantindo segurança jurídica e conformidade legal.
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid={`service-card-${index}`}
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-[#c5a572] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#c5a572] group-hover:bg-opacity-30 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-[#2f5d3f]" />
                </div>
                <CardTitle className="text-xl text-[#2f5d3f] group-hover:text-[#1e3d28] transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#c5a572] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <article className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-[#2f5d3f] text-center mb-12">
            Como Funciona Nosso Processo
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-[#c5a572] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:bg-[#b39562] transition-colors duration-300">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                      <div className="h-full bg-[#c5a572] w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-[#2f5d3f] mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default ServicesSection;