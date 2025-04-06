// ========== BOTÓN HAMBURGUESA ==========
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("nav__toggle");
  const navMenu = document.getElementById("nav-links");

  toggleBtn?.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    toggleBtn.classList.toggle("show-icon");

    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
  });
});

// ========== CARRUSEL DE TESTIMONIOS ==========
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");

  let current = 0;
  let interval;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  };

  const nextSlide = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  const prevSlide = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  const startAutoSlide = () => {
    clearInterval(interval);
    interval = setInterval(nextSlide, 7000); // cada 7s
  };

  next?.addEventListener("click", () => {
    nextSlide();
    startAutoSlide();
  });

  prev?.addEventListener("click", () => {
    prevSlide();
    startAutoSlide();
  });

  // Inicial
  showSlide(current);
  startAutoSlide();
});
