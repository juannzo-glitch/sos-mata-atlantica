const menuToggle = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector("#menu-principal");

menuToggle.addEventListener("click", function () {
    menuPrincipal.classList.toggle("ativo");
    const menuAberto = menuPrincipal.classList.contains("ativo");
    menuToggle.setAttribute("aria-expanded", menuAberto);
    if (menuAberto) {
        menuToggle.setAttribute("aria-label", "Fechar menu");
    } else {
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }
});