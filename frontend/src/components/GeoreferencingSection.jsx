import React from "react";
import { Button } from "./ui/button";
import { MapPin, Satellite, FileCheck, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GeoreferencingSection = () => {
  const benefits = [
    {
      icon: Satellite,
      title: "Tecnologia de Ponta",
      description: "Equipamentos GPS/GNSS de alta precisão para medidas exatas"
    },
    {
      icon: FileCheck,
      title: "Certificado INCRA/SIGEF",
      description: "Certificação completa para regularização junto ao INCRA"
    },
    {
      icon: Clock,
      title: "Agilidade",
      description: "Processo rápido e eficiente com acompanhamento dedicado"
    },
    {
      icon: MapPin,
      title: "Cobertura Regional",
      description: "Atendimento em Rio Claro, Limeira, Piracicaba e toda região"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-900 to-green-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <article className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium">
              <Satellite className="h-4 w-4 mr-2" />
              Tecnologia GPS/GNSS de Alta Precisão
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Georeferenciamento Certificado{" "}
              <span className="text-[#c5a572]">INCRA/SIGEF</span>
            </h2>

            <p className="text-lg text-gray-100 leading-relaxed">
              Especialistas em <strong>georeferenciamento de propriedades rurais</strong> em 
              <strong> Rio Claro (SP)</strong> e região. Realizamos o levantamento topográfico 
              georreferenciado com tecnologia de ponta, garantindo <strong>certificação INCRA/SIGEF</strong>, 
              <strong> CAR</strong> e conformidade com normas do <strong>INCRA</strong>.
            </p>

            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#c5a572] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-100">Levantamento com equipamentos GPS/GNSS RTK</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#c5a572] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-100">Memorial descritivo e peças técnicas completas</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#c5a572] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-100">Certificação e envio ao SIGEF/INCRA</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#c5a572] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-100">Acompanhamento até registro em cartório</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/georreferenciamento" className="inline-block">
                <Button
                  size="lg"
                  className="bg-[#c5a572] hover:bg-[#b39562] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl w-full sm:w-auto"
                  data-testid="georef-section-cta"
                >
                  Saiba Mais
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-[#2f5d3f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </article>

          {/* Benefits Grid */}
          <aside className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all duration-300"
              >
                <div className="bg-[#c5a572] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-100">{benefit.description}</p>
              </div>
            ))}

            {/* Image */}
            <div className="sm:col-span-2 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx0b3BvZ3JhZmlhfGVufDB8fHx8MTc2MDU4MTY1N3ww&ixlib=rb-4.1.0&q=85" 
                alt="Equipamento de georeferenciamento em campo - topografia de precisão em Rio Claro SP"
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

export default GeoreferencingSection;