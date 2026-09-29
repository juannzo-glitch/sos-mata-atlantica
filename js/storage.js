export function salvarCadastro(dados) {
    localStorage.setItem("cadastroSOS", JSON.stringify(dados));
}