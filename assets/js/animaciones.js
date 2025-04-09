// ========== REGISTRO DEL PLUGIN SCROLLTRIGGER ==========
gsap.registerPlugin(ScrollTrigger);

// ========== ANIMACIÓN SCROLL  ==========
// Animación al hacer scroll para el elemento con clase .gsap-scroll
gsap.from(".gsap-scroll", {
  scrollTrigger: ".gsap-scroll", // Activa al entrar en el viewport
  y: 100, // Empieza desplazado 100px hacia abajo
  opacity: 0, // Empieza invisible
  duration: 1.2, // Dura 1.5 segundos
  ease: "power3.out", // Curva de salida suave
});

// ========== ANIMACIÓN BOTON  ==========
// Animación para botón con clase .button-gsap (hover dinámico)
const btnGSAP = document.querySelector(".button-gsap");

if (btnGSAP) {
  btnGSAP.addEventListener("mouseenter", () => {
    gsap.to(btnGSAP, { scale: 1.1, duration: 0.2 });
  });

  btnGSAP.addEventListener("mouseleave", () => {
    gsap.to(btnGSAP, { scale: 1.0, duration: 0.2 });
  });
}

// ========== ANIMACIÓN SCROLL PARA CADA TARJETA ==========
gsap.utils.toArray(".gsap-scroll-tarjetas").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%", // cuando el 20% del elemento entra en el viewport
      toggleActions: "play none none none",
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: i * 0.1, // efecto tipo "stagger" entre tarjetas
    ease: "power3.out",
  });
});

// Registrar el plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animar comillas decorativas de forma independiente
gsap.from(".quote-mark", {
  scrollTrigger: {
    trigger: ".our-workshop",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
});

// Animar título y párrafo suavemente
gsap.from(".gsap-fade", {
  scrollTrigger: {
    trigger: ".our-workshop",
    start: "top 80%",
  },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,
});
