import React from "react";
import { MapPin, CheckCircle } from "lucide-react";

const RegionsSection = () => {
  const mainCities = [
    { name: "Rio Claro", state: "SP", highlight: true },
    { name: "Limeira", state: "SP" },
    { name: "Piracicaba", state: "SP" },
    { name: "Araras", state: "SP" },
    { name: "Santa Gertrudes", state: "SP" },
    { name: "Cordeirópolis", state: "SP" },
    { name: "Iracemápolis", state: "SP" },
    { name: "Ipeúna", state: "SP" },
    { name: "Charqueada", state: "SP" },
    { name: "São Pedro", state: "SP" },
    { name: "Águas de São Pedro", state: "SP" },
    { name: "Analândia", state: "SP" },
    { name: "Corumbataí", state: "SP" },
    { name: "Itirapina", state: "SP" },
    { name: "Leme", state: "SP" },
    { name: "Mogi Mirim", state: "SP" }
  ];

  const services = [
    "Georeferenciamento INCRA/SIGEF certificado",
    "Regularização de condomínios rurais e urbanos",
    "CAR - Cadastro Ambiental Rural",
    "CCIR - Certificado de Cadastro de Imóvel Rural",
    "Retificação de áreas rurais",
    "Desmembramento e unificação de propriedades",
    "Regularização de loteamentos",
    "Topografia e agrimensura"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Municípios Atendidos */}
          <article>
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-[#2f5d3f] mr-3" />
              <h2 className="text-3xl font-bold text-[#2f5d3f]">
                Municípios Atendidos
              </h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Atendemos <strong>Rio Claro (SP)</strong> e toda a <strong>região</strong> com 
              serviços de <strong>regularização fundiária</strong> e 
              <strong> georeferenciamento</strong>. Nossa equipe se desloca até sua propriedade 
              para realizar levantamentos topográficos e consultorias.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {mainCities.map((city, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                    city.highlight 
                      ? "bg-[#2f5d3f] text-white shadow-lg" 
                      : "bg-white text-gray-700 hover:shadow-md"
                  }`}
                >
                  <CheckCircle className={`h-4 w-4 mr-2 flex-shrink-0 ${
                    city.highlight ? "text-[#c5a572]" : "text-green-500"
                  }`} />
                  <span className="text-sm font-medium">{city.name}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6">
              * Atendemos também outras cidades da região. Entre em contato para confirmar 
              cobertura em sua localidade.
            </p>
          </article>

          {/* Serviços Oferecidos */}
          <article>
            <h2 className="text-3xl font-bold text-[#2f5d3f] mb-6">
              Serviços de Regularização em Rio Claro e Região
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Com <strong>16 anos de experiência</strong>, oferecemos soluções completas em 
              <strong> regularização fundiária</strong>, <strong>georeferenciamento</strong> e 
              <strong> topografia</strong> para propriedades rurais e urbanas.
            </p>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#c5a572] text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">{service}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-semibold text-[#2f5d3f] mb-3">
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cada propriedade é única. Por isso, fazemos uma <strong>análise detalhada</strong> 
                da sua situação antes de apresentar a melhor solução de regularização. 
                Acompanhamos todo o processo até o <strong>registro em cartório</strong>.
              </p>
            </div>
          </article>
        </div>

        {/* SEO Content - Keywords naturais */}
        <article className="mt-12 bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-[#2f5d3f] mb-4">
            Regularização Fundiária e Georeferenciamento em Rio Claro SP
          </h3>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-4">
              A <strong>REGULARIZA</strong> é especialista em <strong>regularização fundiária</strong>, 
              <strong> georeferenciamento INCRA</strong>, <strong>SIGEF</strong>, <strong>CAR</strong> e 
              <strong> CCIR</strong> em <strong>Rio Claro (SP)</strong> e região. Atendemos propriedades 
              rurais, <strong>condomínios agrícolas</strong>, loteamentos rurais e urbanos com toda a 
              documentação necessária para regularização junto aos órgãos competentes.
            </p>
            <p className="mb-4">
              Nossos serviços de <strong>georeferenciamento</strong> utilizam tecnologia 
              <strong> GPS/GNSS RTK</strong> de alta precisão, garantindo medidas exatas para 
              <strong> certificação no INCRA</strong> através do sistema <strong>SIGEF</strong>. 
              Realizamos <strong>levantamento topográfico</strong>, elaboração de 
              <strong> memorial descritivo</strong>, plantas técnicas e acompanhamento até o 
              <strong> registro em cartório de registro de imóveis</strong>.
            </p>
            <p>
              Além disso, auxiliamos na obtenção de <strong>CAR (Cadastro Ambiental Rural)</strong>, 
              <strong> CCIR (Certificado de Cadastro de Imóvel Rural)</strong>, 
              <strong> retificação de áreas</strong>, <strong>desmembramento de propriedades</strong> e 
              <strong> regularização de condomínios rurais</strong> em Limeira, Piracicaba, Araras e 
              demais municípios da região de Rio Claro SP.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default RegionsSection;