import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Building, TreePine, Users, FileCheck, MapPin, Scale } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: TreePine,
      title: "Regularização de Condomínios Rurais",
      description: "Especialistas em regularização de condomínios em áreas rurais, garantindo conformidade com a legislação ambiental e urbanística.",
      features: [
        "Análise da documentação existente",
        "Adequação às normas ambientais",
        "Registro em cartório",
        "Aprovação junto aos órgãos competentes"
      ]
    },
    {
      icon: Building,
      title: "Regularização de Condomínios Urbanos",
      description: "Soluções completas para regularização de condomínios urbanos, incluindo adequação às normas municipais e estaduais.",
      features: [
        "Aprovação de projetos",
        "Habite-se e licenças",
        "Adequação ao Código de Obras",
        "Registro de incorporação"
      ]
    },
    {
      icon: Users,
      title: "Consultoria para Clubes e Loteamentos",
      description: "Consultoria especializada para clubes, associações e loteamentos, com foco na conformidade legal e documental.",
      features: [
        "Análise jurídica completa",
        "Adequação de estatutos",
        "Regularização fundiária",
        "Assessoria para assembleias"
      ]
    },
    {
      icon: FileCheck,
      title: "Auditoria Documental",
      description: "Revisão completa de toda documentação condominial para identificar pendências e irregularidades.",
      features: [
        "Análise de contratos",
        "Verificação de registros",
        "Identificação de pendências",
        "Relatório detalhado"
      ]
    },
    {
      icon: MapPin,
      title: "Regularização Fundiária",
      description: "Serviços especializados em regularização fundiária para condomínios e loteamentos irregulares.",
      features: [
        "Levantamento topográfico",
        "Análise da situação legal",
        "Protocolo junto aos órgãos",
        "Acompanhamento processual"
      ]
    },
    {
      icon: Scale,
      title: "Assessoria Jurídica Especializada",
      description: "Acompanhamento jurídico especializado em direito condominial e imobiliário para garantir segurança legal.",
      features: [
        "Pareceres jurídicos",
        "Acompanhamento processual",
        "Orientação preventiva",
        "Suporte em assembleias"
      ]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Análise Inicial",
      description: "Avaliação completa da documentação e situação atual do empreendimento"
    },
    {
      number: "02",
      title: "Diagnóstico",
      description: "Identificação de pendências e elaboração de plano de regularização"
    },
    {
      number: "03",
      title: "Execução",
      description: "Implementação das ações necessárias junto aos órgãos competentes"
    },
    {
      number: "04",
      title: "Finalização",
      description: "Entrega da documentação regularizada e orientações finais"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-600 mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas e especializadas para regularização 
            de condomínios, clubes e loteamentos, garantindo segurança jurídica 
            e conformidade legal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover-lift h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CardHeader className="text-center pb-4">
                <div className="bg-gold-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-gold-600" />
                </div>
                <CardTitle className="text-xl text-navy-600 group-hover:text-navy-700 transition-colors duration-300">
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
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-navy-600 text-center mb-12">
            Como Funciona Nosso Processo
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="bg-gold-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold group-hover:bg-gold-600 transition-colors duration-300">
                    {step.number}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200">
                      <div className="h-full bg-gold-300 w-0 group-hover:w-full transition-all duration-500"></div>
                    </div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-navy-600 mb-2">
                  {step.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;