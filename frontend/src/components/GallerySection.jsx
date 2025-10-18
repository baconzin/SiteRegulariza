import React, { useMemo, useState } from "react";
import { Card } from "./ui/card";
import { X, ZoomIn } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Usando imagens profissionais do Unsplash relacionadas a regularização, topografia e propriedades
  const galleryImages = [
    // Georeferenciamento e Topografia
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1628158145409-9e222b56cc0b?w=800&q=80",
      alt: "Equipamento GPS de georeferenciamento certificado INCRA em propriedade rural Rio Claro SP",
      category: "georef",
      title: "Georeferenciamento INCRA/SIGEF",
      description: "Levantamento topográfico com GPS de alta precisão em propriedade rural"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1628158088936-68ccaaa400dc?w=800&q=80",
      alt: "Tripé de topografia para georeferenciamento de condomínio rural Rio Claro",
      category: "georef",
      title: "Levantamento Topográfico",
      description: "Equipamento profissional para medições precisas em campo"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1628158088803-4200c2be52f1?w=800&q=80",
      alt: "Estação total RTK para georeferenciamento certificado SIGEF Rio Claro SP",
      category: "georef",
      title: "Tecnologia RTK",
      description: "Estação total com GPS RTK para precisão centimétrica"
    },
    
    // Propriedades Rurais
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1724048413085-1c8d81b3ffa3?w=800&q=80",
      alt: "Vista aérea de propriedade rural regularizada em Rio Claro SP com CAR e CCIR",
      category: "rural",
      title: "Propriedade Rural Regularizada",
      description: "Fazenda com documentação completa: CAR, CCIR e georeferenciamento"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1743686627846-3a3423ae69b2?w=800&q=80",
      alt: "Loteamento rural regularizado com infraestrutura completa Rio Claro SP",
      category: "rural",
      title: "Loteamento Rural",
      description: "Loteamento rural regularizado com vias de acesso e delimitação de lotes"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80",
      alt: "Condomínio rural regularizado com lotes demarcados Rio Claro SP",
      category: "rural",
      title: "Condomínio Rural",
      description: "Condomínio rural com registro em cartório e delimitação certificada"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80",
      alt: "Chácara regularizada com CCIR e CAR em Rio Claro SP",
      category: "rural",
      title: "Chácaras e Sítios",
      description: "Pequenas propriedades com documentação regularizada"
    },
    
    // Condomínios Urbanos
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      alt: "Condomínio urbano regularizado com habite-se Rio Claro SP",
      category: "urban",
      title: "Condomínio Urbano",
      description: "Condomínio residencial com documentação completa e registro"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80",
      alt: "Loteamento urbano regularizado em Rio Claro SP com infraestrutura",
      category: "urban",
      title: "Loteamento Urbano",
      description: "Loteamento aprovado na prefeitura com todas as licenças"
    },

    // Documentação
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1554224311-beee4ece8db7?w=800&q=80",
      alt: "Documentação de regularização fundiária INCRA SIGEF CAR CCIR Rio Claro",
      category: "docs",
      title: "Documentação Completa",
      description: "Processos, plantas, memoriais descritivos e certific certificações"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      alt: "Projeto técnico de regularização com plantas e memoriais Rio Claro SP",
      category: "docs",
      title: "Projetos Técnicos",
      description: "Plantas topográficas, memoriais descritivos e peças gráficas"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
      alt: "Reunião de consultoria para regularização fundiária em Rio Claro SP",
      category: "docs",
      title: "Consultoria Especializada",
      description: "Atendimento personalizado e acompanhamento em todas as etapas"
    }
  ];

  const categories = useMemo(() => ([
    { id: "all", name: "Todos os Projetos", count: galleryImages.length },
    { id: "georef", name: "Georeferenciamento", count: galleryImages.filter(i => i.category === "georef").length },
    { id: "rural", name: "Propriedades Rurais", count: galleryImages.filter(i => i.category === "rural").length },
    { id: "urban", name: "Loteamentos Urbanos", count: galleryImages.filter(i => i.category === "urban").length },
    { id: "docs", name: "Documentação", count: galleryImages.filter(i => i.category === "docs").length }
  ]), [galleryImages]);

  const filteredImages = useMemo(
    () => (activeCategory === "all" ? galleryImages : galleryImages.filter(i => i.category === activeCategory)),
    [activeCategory, galleryImages]
  );

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2f5d3f] mb-6">
            Galeria de Projetos de Regularização
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça nossos projetos de <strong>regularização fundiária</strong>, 
            <strong> georeferenciamento INCRA/SIGEF</strong>, <strong>CAR</strong>, 
            <strong> CCIR</strong> e <strong>loteamentos</strong> realizados com sucesso em 
            <strong> Rio Claro (SP)</strong> e região.
          </p>
        </header>

        {/* Category Filters */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12" aria-label="Filtros de categoria">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === c.id 
                  ? "bg-[#c5a572] text-white shadow-lg" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              aria-pressed={activeCategory === c.id}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </nav>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map(image => (
            <Card
              key={image.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift"
              onClick={() => setSelectedImage(image)}
            >
              <article className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-white text-xs opacity-90">{image.description}</p>
                </div>
              </article>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <footer className="text-center mt-12">
          <p className="text-gray-600 italic">
            * Imagens ilustrativas dos tipos de serviços de regularização fundiária, 
            georeferenciamento e topografia que realizamos em Rio Claro (SP) e região.
          </p>
        </footer>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da imagem"
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)} 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-full object-contain rounded-lg" 
            />
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