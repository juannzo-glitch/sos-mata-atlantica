import { salvarCadastro } from "./storage.js";
export function iniciarValidacao() {
    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");
    const formulario = document.querySelector("#formCadastro");
    const mensagem = document.querySelector("#mensagem-formulario");

    if (!cpf || !telefone || !cep || !formulario || !mensagem) {
        return;
    }

    // Máscata CPF
    cpf.addEventListener("input", () => {
        let valor = cpf.value.replace(/\D/g, "");

        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
        valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

        cpf.value = valor;
    });

    // Máscara telefone
    telefone.addEventListener("input", () => {
        let valor = telefone.value.replace(/\D/g, "");

        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d{5})(\d{4})$/, "$1-$2");

        telefone.value = valor;
    });

    // Máscara CEP
    cep.addEventListener("input", () => {
        let valor = cep.value.replace(/\D/g, "");

        valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

        cep.value = valor;
    });

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const cpfValido = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(cpf.value);
        const telefoneValido = /^\(\d{2}\) \d{5}-\d{4}$/.test(telefone.value);
        const cepValido = /^\d{5}-\d{3}$/.test(cep.value);

        if (!formulario.checkValidity()) {
            mensagem.textContent = "Preencha todos os campos corretamente.";
            formulario.reportValidity();
            return;
        }
        
        if (!cpfValido) {
            mensagem.textContent = "CPF em formato inválido.";
            cpf.focus();
            return;
        }

        if (!telefoneValido) {
            mensagem.textContent = "Telefone em formato inválido.";
            telefone.focus();
            return;
        }

        if (!cepValido) {
            mensagem.textContent = "CEP em formato inválido.";
            cep.focus();
            return;
        }

        const dadosCadastro = {
            nome: document.querySelector("#nome").value,
            cpf: cpf.value,
            email:document.querySelector("#email").value,
            telefone: telefone.value,
            cep: cep.value
        };

        salvarCadastro(dadosCadastro);

        mensagem.textContent = "Cadastro realizado com sucesso!";
    });
}