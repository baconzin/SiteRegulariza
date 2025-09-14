import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Toaster } from "./components/ui/sonner";
import FloatingWhatsapp from "./components/FloatingWhatsapp"; // ⬅️ importe o botão

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
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
