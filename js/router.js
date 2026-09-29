import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./template.js";

import { iniciarValidacao } from "./validacao.js";

const conteudoPrincipal = document.querySelector("#conteudo-principal");

export function navegar(pagina) {
    
    if (pagina === "inicio") {
        conteudoPrincipal.innerHTML = templateInicio;
    }

    if (pagina === "projetos") {
        conteudoPrincipal.innerHTML = templateProjetos;
    }

    if (pagina === "cadastro") {
        conteudoPrincipal.innerHTML = templateCadastro;
        iniciarValidacao();
    }
}