import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  MapPin,
  Satellite,
  FileCheck,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Send,
  MessageCircle,
  FileText,
  Users,
  Building,
  TreePine
} from "lucide-react";
import { toast } from "sonner";

const GeoreferencingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    area: "",
    location: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formsubmit.co/ajax/contato@regulariza.agr.br", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nome: formData.name,
          Email: formData.email,
          Telefone: formData.phone,
          "Tipo de Propriedade": formData.propertyType,
          "Área (hectares)": formData.area,
          "Localização": formData.location,
          Mensagem: formData.message,
          _subject: "Novo orçamento de Georeferenciamento - REGULARIZA",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error("Falha no envio");

      toast.success("Orçamento solicitado com sucesso!", { duration: 3000 });
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        area: "",
        location: "",
        message: "",
      });
      setIsSubmitted(true);
    } catch (error) {
      toast.error("Erro ao enviar. Tente novamente.", { duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqData = [
    {
      question: "O que é georeferenciamento e por que é obrigatório?",
      answer: "Georeferenciamento é o levantamento topográfico georreferenciado que determina com precisão os limites e a área exata de uma propriedade rural. É obrigatório por lei federal (Lei 10.267/2001) para imóveis rurais com área superior a 250 hectares em transações de compra, venda, desmembramento ou qualquer alteração na matrícula do imóvel. Além disso, é essencial para certificação no INCRA/SIGEF e regularização fundiária."
    },
    {
      question: "Qual é o prazo para realizar o georeferenciamento?",
      answer: "O prazo varia conforme o tamanho e complexidade da propriedade. Em média: pequenas propriedades (até 100 ha) levam de 15 a 30 dias; médias propriedades (100 a 500 ha) de 30 a 60 dias; grandes propriedades (acima de 500 ha) podem levar de 60 a 120 dias. Isso inclui levantamento de campo, processamento de dados, elaboração de memorial descritivo, plantas e certificação no SIGEF/INCRA."
    },
    {
      question: "Quais documentos são necessários para o georeferenciamento?",
      answer: "Principais documentos: (1) Matrícula atualizada do imóvel; (2) CCIR (Certificado de Cadastro de Imóvel Rural); (3) ITR dos últimos 3 anos; (4) Documento de identidade e CPF do proprietário; (5) Comprovante de endereço; (6) Escritura ou contrato de compra e venda; (7) CAR (Cadastro Ambiental Rural), se houver. Nossa equipe auxilia na obtenção de documentos faltantes."
    },
    {
      question: "Quanto custa um georeferenciamento em Rio Claro (SP)?",
      answer: "O custo varia conforme: tamanho da propriedade, localização, acessibilidade, perímetro a ser levantado, existência de confrontantes e complexidade do terreno. Trabalhamos com valores competitivos na região de Rio Claro. Entre em contato para receber um orçamento personalizado sem compromisso. Atendemos também Limeira, Piracicaba, Araras e toda a região."
    },
    {
      question: "O georeferenciamento é diferente do CAR?",
      answer: "Sim, são processos diferentes. O CAR (Cadastro Ambiental Rural) é um registro ambiental autodeclaratório obrigatório para todos os imóveis rurais, independente do tamanho. Já o georeferenciamento é um levantamento técnico preciso, realizado por profissional habilitado (engenheiro agrimensor), necessário para certificação no INCRA/SIGEF e para alterações na matrícula do imóvel. O georeferenciamento pode ser usado para atualizar o CAR."
    },
    {
      question: "Posso fazer o georeferenciamento de um condomínio rural?",
      answer: "Sim! Realizamos georeferenciamento de condomínios rurais, loteamentos agrícolas e frações ideais. Cada situação exige análise específica da documentação e procedimentos adequados. Temos experiência em regularização de condomínios rurais em Rio Claro e região, incluindo desmembramento, retificação de áreas e unificação de matrículas."
    },
    {
      question: "O que é certificação SIGEF/INCRA?",
      answer: "SIGEF (Sistema de Gestão Fundiária) é o sistema do INCRA onde são submetidas as peças técnicas do georeferenciamento. Após análise e aprovação, o INCRA emite uma certificação que comprova que o levantamento foi realizado conforme normas técnicas. Esta certificação é obrigatória para registro da nova descrição do imóvel no cartório de registro de imóveis."
    },
    {
      question: "Atende outras cidades além de Rio Claro?",
      answer: "Sim! Atendemos toda a região de Rio Claro (SP), incluindo: Limeira, Piracicaba, Araras, Santa Gertrudes, Cordeirópolis, Iracemápolis, Ipeúna, Charqueada, São Pedro, Águas de São Pedro, Analândia e demais municípios da região. Entre em contato para confirmar atendimento em sua localidade."
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Contato Inicial",
      description: "Entre em contato e forneça informações básicas sobre a propriedade",
      time: "1 dia"
    },
    {
      number: "02",
      title: "Análise Documental",
      description: "Análise da matrícula, CCIR, ITR e demais documentos necessários",
      time: "3-5 dias"
    },
    {
      number: "03",
      title: "Orçamento",
      description: "Apresentação de proposta técnica e comercial detalhada",
      time: "2-3 dias"
    },
    {
      number: "04",
      title: "Levantamento de Campo",
      description: "Medição em campo com equipamentos GPS/GNSS de alta precisão",
      time: "5-15 dias"
    },
    {
      number: "05",
      title: "Processamento",
      description: "Processamento de dados e elaboração de memorial descritivo e plantas",
      time: "10-20 dias"
    },
    {
      number: "06",
      title: "Certificação SIGEF",
      description: "Submissão e aprovação no SIGEF/INCRA",
      time: "15-30 dias"
    },
    {
      number: "07",
      title: "Registro em Cartório",
      description: "Acompanhamento do registro da nova descrição no cartório",
      time: "30-60 dias"
    }
  ];

  const useCases = [
    {
      icon: TreePine,
      title: "Propriedades Rurais",
      description: "Fazendas, sítios e chácaras com área superior a 250 hectares ou que necessitem retificação de área"
    },
    {
      icon: Building,
      title: "Condomínios Rurais",
      description: "Regularização de condomínios agrícolas, loteamentos rurais e frações ideais"
    },
    {
      icon: Users,
      title: "Desmembramento",
      description: "Divisão de propriedades rurais em lotes menores para venda ou doação"
    },
    {
      icon: FileText,
      title: "Retificação de Área",
      description: "Correção de área e limites em propriedades com divergências cadastrais"
    }
  ];

  const benefits = [
    "Equipamentos GPS/GNSS RTK de alta precisão",
    "Equipe técnica especializada e habilitada no CREA",
    "Experiência de 16 anos em Rio Claro e região",
    "Certificação completa SIGEF/INCRA",
    "Acompanhamento em todas as etapas",
    "Suporte para obtenção de documentos",
    "Memorial descritivo e plantas técnicas",
    "Registro em cartório",
    "Atendimento personalizado"
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 to-green-800 text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6">
                <Satellite className="h-4 w-4 mr-2" />
                Certificado INCRA/SIGEF
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Georeferenciamento de Propriedades Rurais em{" "}
                <span className="text-[#c5a572]">Rio Claro (SP)</span>
              </h1>
              
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                Especialistas em <strong>georeferenciamento INCRA/SIGEF</strong> com tecnologia 
                GPS/GNSS de alta precisão. Atendemos Rio Claro, Limeira, Piracicaba e toda a região 
                com <strong>16 anos de experiência</strong> em regularização fundiária.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => document.getElementById("orcamento").scrollIntoView({ behavior: "smooth" })}
                  size="lg"
                  className="bg-[#c5a572] hover:bg-[#b39562] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl"
                  data-testid="hero-quote-button"
                >
                  <FileCheck className="h-5 w-5 mr-2" />
                  Solicitar Orçamento
                </Button>
                
                <a href="https://wa.me/5519971636969?text=Olá,%20preciso%20de%20georeferenciamento" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#2f5d3f] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 w-full"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#c5a572]">16+</div>
                  <div className="text-sm text-gray-200">Anos de Experiência</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#c5a572]">500+</div>
                  <div className="text-sm text-gray-200">Projetos Realizados</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#c5a572]">100%</div>
                  <div className="text-sm text-gray-200">Aprovação INCRA</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="text-3xl font-bold text-[#c5a572]">Rio Claro</div>
                  <div className="text-sm text-gray-200">e Região</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* O que é Georeferenciamento */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#2f5d3f] mb-6">
                  O que é Georeferenciamento?
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong>Georeferenciamento</strong> é o levantamento topográfico georreferenciado 
                    que determina com precisão milimétrica os <strong>limites</strong>, 
                    <strong> confrontantes</strong> e <strong>área exata</strong> de uma propriedade rural.
                  </p>
                  <p>
                    Realizado com equipamentos <strong>GPS/GNSS RTK</strong> de alta precisão, 
                    o georeferenciamento é obrigatório por lei federal (<strong>Lei 10.267/2001</strong>) 
                    para imóveis rurais em transações de compra, venda, desmembramento ou qualquer 
                    alteração na matrícula do imóvel no cartório de registro de imóveis.
                  </p>
                  <p>
                    O processo inclui levantamento de campo, processamento de dados, elaboração de 
                    <strong> memorial descritivo</strong> e <strong>plantas</strong>, certificação 
                    no <strong>SIGEF/INCRA</strong> e registro em cartório.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-[#c5a572] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <img 
                  src="https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHx0b3BvZ3JhZmlhfGVufDB8fHx8MTc2MDU4MTY1N3ww&ixlib=rb-4.1.0&q=85" 
                  alt="Equipamento GPS de georeferenciamento em campo - Rio Claro SP"
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <MapPin className="h-8 w-8 text-[#2f5d3f] mb-3" />
                    <h4 className="font-semibold text-[#2f5d3f] mb-2">Alta Precisão</h4>
                    <p className="text-sm text-gray-600">GPS/GNSS RTK com precisão centimétrica</p>
                  </div>
                  <div className="bg-amber-50 p-6 rounded-xl">
                    <FileCheck className="h-8 w-8 text-[#2f5d3f] mb-3" />
                    <h4 className="font-semibold text-[#2f5d3f] mb-2">Certificado</h4>
                    <p className="text-sm text-gray-600">Aprovação garantida no SIGEF/INCRA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Casos de Uso */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2f5d3f] mb-4">
                Quando é Necessário o Georeferenciamento?
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Confira as principais situações que exigem georeferenciamento de propriedades rurais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover-lift border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#c5a572] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-8 w-8 text-[#2f5d3f]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#2f5d3f] mb-2">
                      {useCase.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {useCase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Processo */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2f5d3f] mb-4">
                Como Funciona o Processo
              </h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Do primeiro contato ao registro em cartório: conheça todas as etapas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#c5a572] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-semibold text-[#2f5d3f] mb-2 text-sm">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-600 mb-2">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center text-xs text-[#c5a572] font-medium">
                    <Clock className="h-3 w-3 mr-1" />
                    {step.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                <strong>Prazo total médio:</strong> 60 a 120 dias (varia conforme tamanho da propriedade)
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2f5d3f] mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-700">
                Tire suas dúvidas sobre georeferenciamento
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-lg shadow-md border-0"
                >
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold text-[#2f5d3f] pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Formulário de Orçamento */}
        <section id="orcamento" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#2f5d3f] mb-4">
                Solicite um Orçamento
              </h2>
              <p className="text-xl text-gray-700">
                Preencha o formulário e receba uma proposta personalizada
              </p>
            </div>

            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl text-[#2f5d3f] text-center">
                  {isSubmitted ? "Orçamento Solicitado!" : "Orçamento de Georeferenciamento"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center px-2 py-6">
                    <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                    <h4 className="text-2xl font-semibold text-[#2f5d3f] mb-2">
                      Recebemos sua solicitação!
                    </h4>
                    <p className="text-gray-700 max-w-xl mx-auto mb-6">
                      Em breve entraremos em contato com uma proposta personalizada.
                      <br />
                      Para maior agilidade, fale conosco pelo WhatsApp!
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href="https://wa.me/5519971636969?text=Olá,%20solicitei%20orçamento%20pelo%20site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
                      >
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Falar no WhatsApp
                      </a>
                      <Button
                        variant="outline"
                        onClick={() => setIsSubmitted(false)}
                        className="w-full sm:w-auto"
                      >
                        Enviar novo orçamento
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nome Completo *
                        </label>
                        <Input
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome"
                          data-testid="geo-name-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Telefone/WhatsApp *
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(19) 99999-9999"
                          data-testid="geo-phone-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        data-testid="geo-email-input"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tipo de Propriedade *
                        </label>
                        <select
                          name="propertyType"
                          required
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a572]"
                          data-testid="geo-property-type-select"
                        >
                          <option value="">Selecione</option>
                          <option value="fazenda">Fazenda</option>
                          <option value="sitio">Sítio</option>
                          <option value="chacara">Chácara</option>
                          <option value="condominio">Condomínio Rural</option>
                          <option value="loteamento">Loteamento</option>
                          <option value="outro">Outro</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Área (hectares) *
                        </label>
                        <Input
                          name="area"
                          type="text"
                          required
                          value={formData.area}
                          onChange={handleInputChange}
                          placeholder="Ex: 50"
                          data-testid="geo-area-input"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cidade *
                        </label>
                        <Input
                          name="location"
                          type="text"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Ex: Rio Claro"
                          data-testid="geo-location-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Observações
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Informações adicionais sobre a propriedade, urgência, etc..."
                        rows={4}
                        data-testid="geo-message-input"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#c5a572] hover:bg-[#b39562] text-white py-3 text-lg font-semibold"
                      data-testid="geo-submit-button"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </div>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Solicitar Orçamento
                        </>
                      )}
                    </Button>

                    <p className="text-sm text-gray-600 text-center">
                      * Campos obrigatórios. Responderemos em até 24 horas.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl text-center">
                <Phone className="h-8 w-8 text-[#2f5d3f] mx-auto mb-3" />
                <h4 className="font-semibold text-[#2f5d3f] mb-2">Telefone</h4>
                <a href="tel:+5519971636969" className="text-gray-700 hover:text-[#c5a572] font-medium">
                  (19) 97163-6969
                </a>
              </div>
              <div className="bg-amber-50 p-6 rounded-xl text-center">
                <Mail className="h-8 w-8 text-[#2f5d3f] mx-auto mb-3" />
                <h4 className="font-semibold text-[#2f5d3f] mb-2">E-mail</h4>
                <a href="mailto:contato@regulariza.agr.br" className="text-gray-700 hover:text-[#c5a572] font-medium">
                  contato@regulariza.agr.br
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-br from-[#2f5d3f] to-green-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Regularizar sua Propriedade?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Entre em contato agora e receba um orçamento personalizado para georeferenciamento em Rio Claro (SP)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5519971636969?text=Olá,%20preciso%20de%20georeferenciamento" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-[#2f5d3f] hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold w-full sm:w-auto"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:+5519971636969">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2f5d3f] px-8 py-4 rounded-lg text-lg font-semibold w-full sm:w-auto"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Ligar Agora
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default GeoreferencingPage;
