import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import GeoreferencingSection from "../components/GeoreferencingSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import RegionsSection from "../components/RegionsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GeoreferencingSection />
        <GallerySection />
        <TestimonialsSection />
        <RegionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;