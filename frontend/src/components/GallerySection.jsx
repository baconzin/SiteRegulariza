// src/components/GallerySection.jsx
import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1713022643918-34bb17feb95d?auto=format&fit=crop&w=1200&q=80",
    alt: "Condomínio Rural - Vila Moderna",
    title: "Condomínio Rural",
    description: "Projeto de regularização de condomínio rural com paisagem montanhosa",
    category: "rural",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1689770256234-ddfd315e3b2b?auto=format&fit=crop&w=1200&q=80",
    alt: "Casa de Campo Regularizada",
    title: "Casa de Campo",
    description: "Residência rural regularizada com sucesso",
    category: "rural",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/10511470/pexels-photo-10511470.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Condomínio de Cabanas",
    title: "Condomínio de Cabanas",
    description: "Projeto de regularização de condomínio com estilo cabana",
    category: "rural",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1532562145520-b8cce2486cd2?auto=format&fit=crop&w=1200&q=80",
    alt: "Desenvolvimento Urbano",
    title: "Desenvolvimento Urbano",
    description: "Vista aérea de desenvolvimento urbano em processo de regularização",
    category: "urban",
  },
];

function GallerySection() {
  const [selected, setSelected] = useState(null);
  const [cat, setCat] = useState("all");

  const filtered = cat === "all" ? images : images.filter(i => i.category === cat);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-navy-600 mb-4">Galeria de Projetos</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Exemplos representativos de projetos de regularização.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {["all","rural","urban"].map(id => (
            <button
              key={id}
              onClick={() => setCat(id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${cat===id ? "bg-gold-500 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
            >
              {id === "all" ? "Todos" : id === "rural" ? "Condomínios Rurais" : "Condomínios Urbanos"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(img => (
            <button
              key={img.id}
              onClick={() => setSelected(img)}
              className="relative group overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <img src={img.src} alt={img.alt} className="w-full h-64 object-cover group-hover:scale-105 transition" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white font-semibold">{img.title}</h3>
                <p className="text-white/90 text-sm">{img.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setSelected(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img src={selected.src} alt={selected.alt} className="w-full max-h-[80vh] object-contain rounded" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b">
              <h4 className="text-white text-lg font-semibold">{selected.title}</h4>
              <p className="text-white/90">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;
