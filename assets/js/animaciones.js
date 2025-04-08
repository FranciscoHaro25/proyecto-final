// ========== REGISTRO DEL PLUGIN SCROLLTRIGGER ==========
gsap.registerPlugin(ScrollTrigger);

// ========== ANIMACIÓN SCROLL  ==========
// Animación al hacer scroll para el elemento con clase .gsap-scroll
gsap.from(".gsap-scroll", {
  scrollTrigger: ".gsap-scroll", // Activa al entrar en el viewport
  y: 100, // Empieza desplazado 100px hacia abajo
  opacity: 0, // Empieza invisible
  duration: 1.5, // Dura 1.5 segundos
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
