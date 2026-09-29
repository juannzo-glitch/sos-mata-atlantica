const botaoContraste = document.querySelector("#btn-contraste");

if (botaoContraste) {
    botaoContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");

        const ativo = document.body.classList.contains("alto-contraste");
        botaoContraste.setAttribute("aria-pressed", ativo);
        localStorage.setItem("altoContraste", ativo);
    });

    const preferenciaSalva = localStorage.getItem("altoConstraste");

    if (preferenciaSalva === "true") {
        document.body.classList.add("alto-contraste");
        botaoContraste.setAttribute("aria-pressed", "true");
    }
}