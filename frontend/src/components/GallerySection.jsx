import React, { useState, useMemo } from "react";
import { X, ZoomIn } from "lucide-react";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Caminhos sob /public/images/gallery
  const galleryImages = [
    // Urbanos
    { id: 1,  src: "/images/gallery/condominio-casas-01.jpg", alt: "Loteamento urbano com casas - vista aérea", category: "urban", title: "Condomínio Urbano",   description: "Bairro planejado com infraestrutura completa." },
    { id: 2,  src: "/images/gallery/condominio-casas-02.jpg", alt: "Bairro planejado com ruas arborizadas",       category: "urban", title: "Bairro Planejado",     description: "Ruas pavimentadas e urbanização organizada." },
    { id: 3,  src: "/images/gallery/condominio-casas-03.jpg", alt: "Conjunto de edifícios residenciais - aérea",  category: "urban", title: "Conjunto Residencial", description: "Condomínio com diversos blocos e áreas comuns." },
    { id: 4,  src: "/images/gallery/condominio-casas-04.jpg", alt: "Condomínio com casas alinhadas - aérea",      category: "urban", title: "Residencial Urbano",    description: "Unidades habitacionais com infraestrutura." },

    // Rurais
    { id: 5,  src: "/images/gallery/condominio-chacaras-01.jpg", alt: "Loteamento de chácaras - aérea", category: "rural", title: "Condomínio de Chácaras", description: "Lotes amplos integrados à natureza." },
    { id: 6,  src: "/images/gallery/condominio-chacaras-02.jpg", alt: "Chácaras próximas a lago - aérea", category: "rural", title: "Chácaras com Lago",     description: "Condomínio rural com áreas verdes e lago." },
    { id: 7,  src: "/images/gallery/condominio-chacaras-03.jpg", alt: "Áreas rurais com residências",     category: "rural", title: "Sítios e Chácaras",      description: "Ambiente rural com baixa densidade." },
    { id: 8,  src: "/images/gallery/condominio-chacaras-04.jpg", alt: "Projeto de loteamento com lazer",  category: "rural", title: "Loteamento com Lazer",  description: "Quadras esportivas e áreas de convivência." },

    // Clubes (marcados como “urban” para manter 3 categorias)
    { id: 9,  src: "/images/gallery/clube-vista-aerea-01.jpg", alt: "Clube à beira d'água - aérea", category: "urban", title: "Clube com Lago",   description: "Estrutura de lazer em área urbana." },
    { id:10,  src: "/images/gallery/clube-vista-aerea-02.jpg", alt: "Complexo de clube - aérea",   category: "urban", title: "Complexo Esportivo", description: "Piscinas, quadras e campos em grande área." },

    // Documentação
    { id:11, src: "/images/gallery/projeto-urbanistico-01.png", alt: "Planta de projeto urbanístico", category: "documentation", title: "Projeto Urbanístico",      description: "Planta técnica de parcelamento do solo." },
    { id:12, src: "/images/gallery/projeto-urbanistico-02.png", alt: "Projeto com curvas de nível",   category: "documentation", title: "Levantamento Topográfico", description: "Curvas de nível e delimitações de áreas." },
    { id:13, src: "/images/gallery/projeto-urbanistico-03.png", alt: "Mapa técnico",                  category: "documentation", title: "Mapeamento Técnico",       description: "Zonas, matrículas e áreas verdes." },
    { id:14, src: "/images/gallery/projeto-urbanistico-04.jpg", alt: "Estudo de loteamento",          category: "documentation", title: "Estudo de Loteamento",     description: "Memorial gráfico e legenda de convenções." },
    { id:15, src: "/images/gallery/projeto-urbanistico-05.jpg", alt: "Masterplan de condomínio",      category: "documentation", title: "Masterplan de Condomínio", description: "Distribuição de quadras, lotes e áreas comuns." },
    { id:16, src: "/images/gallery/projeto-urbanistico-06.jpg", alt: "Maquete do loteamento",         category: "documentation", title: "Maquete de Loteamento",    description: "Visualização geral do parcelamento." }
  ];

  const categories = useMemo(() => ([
    { id: "all", name: "Todos",                 count: galleryImages.length },
    { id: "rural", name: "Condomínios Rurais",  count: galleryImages.filter(i => i.category === "rural").length },
    { id: "urban", name: "Condomínios Urbanos", count: galleryImages.filter(i => i.category === "urban").length },
    { id: "documentation", name: "Documentação", count: galleryImages.filter(i => i.category === "documentation").length }
  ]), []); // como galleryImages é constante, pode deixar [] aqui

  const filteredImages = useMemo(() => {
    return activeCategory === "all"
      ? galleryImages
      : galleryImages.filter(i => i.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-b
