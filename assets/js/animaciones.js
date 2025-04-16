// ========== PLUGIN SCROLLTRIGGER ==========
gsap.registerPlugin(ScrollTrigger);

// ========== ANIMACIÓN GENERAL SCROLL ==========
gsap.from(".gsap-scroll", {
  scrollTrigger: ".gsap-scroll",
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// ========== BOTÓN CON EFECTO HOVER ==========
const btnGSAP = document.querySelector(".button-gsap");
if (btnGSAP) {
  btnGSAP.addEventListener("mouseenter", () => {
    gsap.to(btnGSAP, { scale: 1.1, duration: 0.2 });
  });
  btnGSAP.addEventListener("mouseleave", () => {
    gsap.to(btnGSAP, { scale: 1.0, duration: 0.2 });
  });
}

// ========== SCROLL INDIVIDUAL PARA TARJETAS ==========
gsap.utils.toArray(".gsap-scroll-tarjetas").forEach((el, i) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 80,
    opacity: 0,
    duration: 1.2,
    delay: i * 0.1,
    ease: "power3.out",
  });
});

// ========== ANIMACIÓN COMILLAS Y TEXTO ==========
gsap.from(".quote-mark", {
  scrollTrigger: { trigger: ".our-workshop", start: "top 80%" },
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
});

gsap.from(".gsap-fade", {
  scrollTrigger: { trigger: ".our-workshop", start: "top 80%" },
  opacity: 0,
  y: 30,
  duration: 1,
  ease: "power2.out",
  stagger: 0.3,
});

// ========== MODAL DE IMAGEN PERSONALIZADO ==========

// document.addEventListener("DOMContentLoaded", () => {
//   const modal = document.getElementById("customModal");
//   const modalImg = document.getElementById("imgGrande");
//   const closeBtn = document.querySelector(".custom-close");

//   document.querySelectorAll(".btn-ver-mas").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       e.preventDefault();
//       const img = btn.closest(".card").querySelector("img");
//       if (img && modal && modalImg) {
//         modalImg.src = img.src;
//         modal.classList.add("activo");
//       }
//     });
//   });

//   const cerrarModal = () => {
//     modal.classList.remove("activo");
//     modalImg.src = "";
//   };

//   if (closeBtn) closeBtn.addEventListener("click", cerrarModal);

//   window.addEventListener("click", (e) => {
//     if (e.target === modal) cerrarModal();
//   });

//   window.addEventListener("keydown", (e) => {
//     if (e.key === "Escape") cerrarModal();
//   });
// });
