// script.js
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("nav__toggle");
  const navMenu = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    toggleBtn.classList.toggle("show-icon");

    // Accesibilidad
    const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !expanded);
  });
});
