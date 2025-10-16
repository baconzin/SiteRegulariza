import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/contato@regulariza.agr.br";
const WHATSAPP_LINK =
  "https://wa.me/5519971636969?text=Ol%C3%A1%2C+gostaria+de+um+or%C3%A7amento+para+regulariza%C3%A7%C3%A3o+fundi%C3%A1ria+e+georeferenciamento.";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nome: formData.name,
          Email: formData.email,
          Telefone: formData.phone,
          Mensagem: formData.message,
          _subject: "Nova mensagem do site REGULARIZA",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!res.ok) throw new Error("Falha no envio");

      toast.success("Mensagem enviada com sucesso!", { duration: 3000 });

      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitted(true);
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.", { duration: 5000 });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(19) 97163-6969",
      action: "tel:+5519971636969",
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@regulariza.agr.br",
      action: "mailto:contato@regulariza.agr.br",
    },
    {
      icon: MapPin,
      title: "Região de Atendimento",
      value: "Rio Claro (SP) e Região",
      info: "Atendimento presencial e online em Limeira, Piracicaba, Araras e região",
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      value: "Segunda a Sexta: 8h às 18h",
      info: "Sábado: 8h às 12h",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2f5d3f] mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pronto para regularizar sua propriedade? Entre em contato e receba um 
            <strong> orçamento personalizado</strong> para <strong>georeferenciamento</strong>, 
            <strong> regularização rural</strong> ou <strong>condomínio agrícola</strong> em 
            <strong> Rio Claro (SP)</strong> e região.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form / Success Panel */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-[#2f5d3f] text-center">
                {isSubmitted ? "Mensagem enviada" : "Solicite um Orçamento"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center px-2 py-6">
                  <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
                  <h4 className="text-2xl font-semibold text-[#2f5d3f] mb-2">
                    Obrigado!
                  </h4>
                  <p className="text-gray-700 max-w-xl mx-auto mb-6">
                    Seu contato será retornado em breve!
                    <br />
                    Para maior agilidade, entre em contato pelo WhatsApp{" "}
                    <strong>(19) 97163-6969</strong>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full sm:w-auto px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
                      data-testid="success-whatsapp-button"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      Falar no WhatsApp
                    </a>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      className="w-full sm:w-auto"
                    >
                      Enviar nova mensagem
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome Completo *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        className="border-gray-300 focus:border-[#c5a572] focus:ring-[#c5a572]"
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Telefone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(19) 99999-9999"
                        className="border-gray-300 focus:border-[#c5a572] focus:ring-[#c5a572]"
                        data-testid="contact-phone-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      className="border-gray-300 focus:border-[#c5a572] focus:ring-[#c5a572]"
                      data-testid="contact-email-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Descreva sua necessidade: georeferenciamento, regularização rural, CAR, CCIR, etc..."
                      rows={5}
                      className="border-gray-300 focus:border-[#c5a572] focus:ring-[#c5a572] resize-none"
                      data-testid="contact-message-input"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c5a572] hover:bg-[#b39562] text-white py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50"
                    data-testid="contact-submit-button"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Enviar Mensagem
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

          {/* Contact Information */}
          <aside className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#2f5d3f] mb-6 text-center">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-[#c5a572] bg-opacity-20 p-3 rounded-lg group-hover:bg-[#c5a572] group-hover:bg-opacity-30 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-[#2f5d3f]" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#2f5d3f] mb-1">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-gray-700 hover:text-[#c5a572] transition-colors duration-300 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-700 font-medium">{info.value}</p>
                      )}
                      {info.info && (
                        <p className="text-sm text-gray-600 mt-1">{info.info}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Highlights */}
            <article className="bg-gradient-to-br from-[#2f5d3f] to-green-800 text-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">REGULARIZA</h3>
                <p className="text-green-100 mb-6">
                  Especialistas em Regularização Fundiária e Georeferenciamento
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#c5a572]" />
                    <span className="text-green-100">16 anos de experiência</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#c5a572]" />
                    <span className="text-green-100">
                      Atendimento em Rio Claro e região
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#c5a572]" />
                    <span className="text-green-100">
                      Mais de 500 projetos realizados
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#c5a572]" />
                    <span className="text-green-100">
                      INCRA | SIGEF | CAR | CCIR
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;