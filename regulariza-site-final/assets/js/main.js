// REGULARIZA.AGR - Main JavaScript

const CONFIG = {
  WHATSAPP: "+5519971636969",
  EMAIL: "contato@regulariza.agr.br",
  INSTAGRAM: "https://instagram.com/regulariza.agr",
  YOUTUBE: "https://youtube.com/@regularizaagr"
};

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Current Year
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Active Nav
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === '/')) {
      link.classList.add('active');
    }
  });

  console.log('Regulariza.AGR - Site carregado ✓');
});
