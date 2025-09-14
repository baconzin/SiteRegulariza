import React, { useState, useMemo } from "react";
import { Card } from "./ui/card";
import { X, ZoomIn } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // DICA: troque os nomes de arquivo abaixo pelos seus arquivos em /public/images/
  const galleryImages = [
    {
      id: 1,
      src: "/images/rural-1.jpg",
      alt: "Condomínio Rural - Vila Moderna",
      category: "rural",
      title: "Condomínio Rural",
      description: "Projeto de regularização de condomínio rural com paisagem montanhosa",
    },
    {
      id: 2,
      src: "/images/rural-2.jpg",
      alt: "Casa de Campo Regularizada",
      category: "rural",
      title: "Casa de Campo",
      description: "Residência rural regularizada com sucesso",
    },
    {
      id: 3,
      src: "/images/rural-3.jpg",
      alt: "Condomínio Rural de Cabanas",
      category: "rural",
      title: "Condomínio de Cabanas",
      description: "Projeto de regularização de condomínio com estilo cabana",
    },
    {
      id: 4,
      src: "/images/urban-1.jpg",
      alt: "Desenvolvimento Urbano Aéreo",
      category: "urban",
      title: "Desenvolvimento Urbano",
      description: "Vista aérea de desenvolvimento urbano em processo de regularização",
    },
    {
      id: 5,
      src: "/images/urban-2.jpg",
      alt: "Edifícios Urbanos",
      category: "urban",
      title: "Condomínio Urbano",
      description: "Complexo residencial urbano regularizado",
    },
    {
      id: 6,
      src: "/images/urban-3.jpg",
      alt: "Edifício Moderno",
      category: "urban",
      title: "Edifício Moderno",
      description: "Projeto de regularização de edifício urbano moderno",
    },
    {
      id: 7,
      src: "/images/docs-1.jpg",
      alt: "Documentação Legal",
      category: "documentation",
      title: "Documentação Legal",
      description: "Processo de análise documental para regularização",
    },
    {
      id: 8,
      src: "/images/docs-2.jpg",
      alt: "Documentos Imobiliários",
      category: "documentation",
      title: "Documentos Imobiliários",
      description: "Documentação completa para regularização imobiliária",
    },
  ];

  // Contadores calculados dinamicamente
  const categories = useMemo(() => ([
    { id: "all", name: "Todos", count: galleryImages.length },
    { id: "rural", name: "Condomínios Rurais", count: galleryImages.filter(i => i.category === "rural").length },
    { id: "urban", name: "Condomínios Urbanos", count: galleryImages.filter(i => i.category === "urban").length },
    { id: "documentation", name: "Documentação", count: galleryImages.filter(i => i.category === "documentation").length },
  ]), [galleryImages]);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  // Fallback opcional se alguma imagem quebrar
  const handleImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/images/placeholder.jpg"; // coloque um placeholder.jpg em /public/images/ se quiser
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-600 mb-6">
            Galeria de Projetos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos nossos projetos de regularização realizados com sucesso.
            Cada projeto representa nossa dedicação em trazer segurança jurídica para
            nossos clientes.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gold-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover-lift"
              onClick={() => setSelectedImage(image)}
              aria-label={`Abrir ${image.title}`}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  onError={handleImgError}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white text-xs opacity-90">
                    {image.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            * As imagens são representativas dos tipos de projetos que realizamos.
            Cada projeto é único e atende às necessidades específicas de cada cliente.
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} - visualização ampliada`}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
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
              <h3 className="text-white text-xl font-semibold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-white opacity-90">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
