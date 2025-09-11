import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (since it's frontend only for now)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success message
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.", {
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      value: "(19) 97163-6969",
      action: "tel:+5519971636969"
    },
    {
      icon: Mail,
      title: "E-mail",
      value: "contato@raphaelpascon.com",
      action: "mailto:contato@raphaelpascon.com"
    },
    {
      icon: MapPin,
      title: "Região de Atendimento",
      value: "Campinas e Região",
      info: "Atendimento presencial e online"
    },
    {
      icon: Clock,
      title: "Horário de Atendimento",
      value: "Segunda a Sexta: 8h às 18h",
      info: "Sábado: 8h às 12h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-600 mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Pronto para regularizar seu condomínio? Entre em contato conosco e 
            receba uma consulta personalizada. Estamos aqui para ajudar você a 
            garantir a segurança jurídica do seu empreendimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-navy-600 text-center">
                Solicite uma Consulta
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                      className="border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                      className="border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    className="border-gray-300 focus:border-gold-500 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Descreva seu projeto ou dúvida sobre regularização condominial..."
                    rows={5}
                    className="border-gray-300 focus:border-gold-500 focus:ring-gold-500 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50"
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
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-navy-600 mb-6 text-center">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-gold-100 p-3 rounded-lg group-hover:bg-gold-200 transition-colors duration-300">
                      <info.icon className="h-6 w-6 text-gold-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-navy-600 mb-1">
                        {info.title}
                      </h4>
                      {info.action ? (
                        <a
                          href={info.action}
                          className="text-gray-700 hover:text-gold-600 transition-colors duration-300 font-medium"
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

            {/* Professional Info */}
            <div className="bg-gradient-to-br from-navy-600 to-navy-700 text-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Raphael Pascon</h3>
                <p className="text-navy-100 mb-6">
                  Especialista em Regularização Condominial
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-400" />
                    <span className="text-navy-100">16 anos de experiência</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-400" />
                    <span className="text-navy-100">Única empresa especializada da região</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-gold-400" />
                    <span className="text-navy-100">Mais de 500 projetos realizados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;