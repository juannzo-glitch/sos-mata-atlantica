const cpf = document.querySelector('#cpf');
const telefone = document.querySelector('#telefone');
const cep = document.querySelector('#cep');

// Máscara CPF
cpf.addEventListener('input', () => {
    let valor = cpf.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
    valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
   
    cpf.value = valor;
});

// Máscara Telefone
telefone.addEventListener('input', () => {
    let valor = telefone.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{2})(\d)/, '($1) $2');
    valor = valor.replace(/(\d{5})(\d{4})$/, '$1-$2');
    telefone.value = valor;
});

// Máscara CEP
cep.addEventListener('input', () => {
    let valor = cep.value.replace(/\D/g, '');
    valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
    cep.value = valor;
});

const formulario = document.querySelector("#formCadastro");
const toast = document.querySelector("#toast");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

   if (formulario.checkValidity()) {
    toast.classList.add("mostrar");

    setTimeout(function () {
        toast.classList.remove("mostrar");
    }, 3000);
    
   }

});