import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GeoreferencingPage from "./pages/GeoreferencingPage";
import { Toaster } from "./components/ui/sonner";
import FloatingWhatsapp from "./components/FloatingWhatsapp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/georreferenciamento" element={<GeoreferencingPage />} />
        </Routes>

        {/* Botão flutuante do WhatsApp visível em todas as páginas */}
        <FloatingWhatsapp />
      </BrowserRouter>

      {/* Toast notifications */}
      <Toaster />
    </div>
  );
}

export default App;