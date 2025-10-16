import React, { useMemo, useState } from "react";
import { Card } from "./ui/card";
import { X, ZoomIn } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Base path onde estão as imagens no build final
  const BASE = "/images"; // <- ajustado (antes era /images/gallery)

  // Nomes exatamente como estão no repositório (com espaços/letras maiúsculas)
  const galleryImages = [
    // Urbanos
    { id: 1,  src: `${BASE}/CONDOMINIO CASAS.jpg`,       alt: "Condomínio urbano com casas - vista aérea",     category: "urban", title: "Condomínio Urbano",      description: "Bairro planejado com infraestrutura completa." },
    { id: 2,  src: `${BASE}/CONDOMINIO CASAS 02.jpg`,    alt: "Bairro planejado com ruas arborizadas",         category: "urban", title: "Bairro Planejado",        description: "Ruas pavimentadas e urbanização organizada." },
    { id: 3,  src: `${BASE}/CONDOMINIO CASAS 03.jpg`,    alt: "Conjunto de edifícios residenciais - aérea",    category: "urban", title: "Conjunto Residencial",    description: "Condomínio com diversos blocos e áreas comuns." },
    { id: 4,  src: `${BASE}/CONDOMINIO CASAS 04.jpg`,    alt: "Condomínio com casas alinhadas - aérea",        category: "urban", title: "Residencial Urbano",      description: "Unidades habitacionais com infraestrutura." },

    // Rurais
    { id: 5,  src: `${BASE}/CONDOMINIO CHACARAS.jpg`,       alt: "Loteamento de chácaras - vista aérea",        category: "rural", title: "Condomínio de Chácaras",  description: "Lotes amplos integrados à natureza." },
    { id: 6,  src: `${BASE}/CONDOMINIO CHACARAS 02.jpg`,    alt: "Chácaras próximas a espelho d'água - aérea",  category: "rural", title: "Chácaras com Lago",       description: "Condomínio rural com áreas verdes e lago." },
    { id: 7,  src: `${BASE}/CONDOMINIO CHACARAS 03.jpg`,    alt: "Áreas rurais com residências e vegetação",    category: "rural", title: "Sítios e Chácaras",       description: "Ambiente rural com baixa densidade." },
    { id: 8,  src: `${BASE}/CONDOMINIO CHACARAS 04.jpg`,    alt: "Projeto de loteamento com áreas de lazer",    category: "rural", title: "Loteamento com Lazer",    description: "Quadras esportivas e áreas de convivência." },

    // Clubes (mantidos em 'urban' para termos 3 categorias)
    { id: 9,  src: `${BASE}/CLUBE VISTA AEREA.jpg`,         alt: "Clube à beira d'água - vista aérea",          category: "urban", title: "Clube com Lago",          description: "Estrutura de lazer em área urbana." },
    { id:10,  src: `${BASE}/CLUBE 02 VISTA AEREA.jpg`,      alt: "Complexo de clube com campos e piscinas",     category: "urban", title: "Complexo Esportivo",      description: "Piscinas, quadras e campos em grande área." },

    // Documentação
    { id:11,  src: `${BASE}/PROJETO URBANISTICO 01.png`,    alt: "Planta de projeto urbanístico",               category: "documentation", title: "Projeto Urbanístico",         description: "Planta técnica de parcelamento do solo." },
    { id:12,  src: `${BASE}/PROJETO URBANISTICO 02.png`,    alt: "Projeto com curvas de nível",                 category: "documentation", title: "Levantamento Topográfico",    description: "Curvas de nível e delimitações de áreas." },
    { id:13,  src: `${BASE}/PROJETO URBANISTICO 03.png`,    alt: "Mapa técnico com áreas e quadras",            category: "documentation", title: "Mapeamento Técnico",         description: "Zonas, matrículas e áreas verdes." },
    { id:14,  src: `${BASE}/projeto urbanistico 04.jpg`,    alt: "Estudo técnico de loteamento",                category: "documentation", title: "Estudo de Loteamento",       description: "Memorial gráfico e legenda de convenções." },
    { id:15,  src: `${BASE}/PROJETO URBANISTICO 05.jpg`,    alt: "Masterplan de condomínio com vias e praças",  category: "documentation", title: "Masterplan de Condomínio",   description: "Distribuição de quadras, lotes e áreas comuns." },
    { id:16,  src: `${BASE}/PROJETO URBANISTICO 06.jpg`,    alt: "Maquete de loteamento com árvores e vias",    category: "documentation", title: "Maquete de Loteamento",      description: "Visualização geral do parcelamento." }
  ];

  const categories = useMemo(() => ([
    { id: "all", name: "Todos",               count: galleryImages.length },
    { id: "rural", name: "Condomínios Rurais", count: galleryImages.filter(i => i.category === "rural").length },
    { id: "urban", name: "Condomínios Urbanos",count: galleryImages.filter(i => i.category === "urban").length },
    { id: "documentation", name: "Documentação", count: galleryImages.filter(i => i.category === "documentation").length }
  ]), [galleryImages]);

  const filteredImages = useMemo(
    () => (activeCategory === "all" ? galleryImages : galleryImages.filter(i => i.category === activeCategory)),
    [activeCategory, galleryImages]
  );

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-600 mb-6">Galeria de Projetos</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos de regularização realizados com sucesso.
            Cada projeto representa nossa dedicação em trazer segurança jurídica para nossos clientes.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === c.id ? "bg-gold-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <Card
              key={image.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  onError={(e) => (e.currentTarget.style.opacity = "0.1")}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-white text-xs opacity-90">{image.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            * As imagens são representativas dos tipos de projetos que realizamos.
            Cada projeto é único e atende às necessidades específicas de cada cliente.
          </p>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 text-white hover:text-gray-300">
              <X className="h-8 w-8" />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="max-w-full max-h-full object-contain rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-white opacity-90">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
