const botaoContraste = document.querySelector("#btn-contraste");

if (botaoContraste) {
    const preferenciaSalva = localStorage.getItem("altoContraste");

    if (preferenciaSalva === "true") {
        document.body.classList.add("alto-contraste");
        botaoContraste.setAttribute("aria-pressed", "true");
    }

    botaoContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");

        const ativo = document.body.classList.contains("alto-contraste");

        botaoContraste.setAttribute("aria-pressed", String(ativo));
        localStorage.setItem("altoContraste", String(ativo));
    });
}