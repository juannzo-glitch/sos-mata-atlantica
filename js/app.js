import { navegar } from "./router.js";
document.addEventListener("click", (event) => {
    const link = event.target.closest("[data-pagina]");

    if (!link) {
        return;
    }
    event.preventDefault();
    const pagina = link.dataset.pagina;
    navegar(pagina);
});

navegar("inicio");