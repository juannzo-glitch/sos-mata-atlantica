import imagemMataAtlantica from "../img/matlantica.webp";
import imagemMataAtlantica480 from "../img/matlantica-480.webp";
import imagemMataAtlantica768 from "../img/matlantica-768.webp";
export const templateInicio = `
    <section>
        <h2>Sobre o SOS Mata Atlântica</h2>

       <img
    src="${imagemMataAtlantica}"
    srcset="
        ${imagemMataAtlantica480} 480w,
        ${imagemMataAtlantica768} 768w,
        ${imagemMataAtlantica} 1024w
    "
    sizes="(max-width: 480px) 100vw,
           (max-width: 768px) 100vw,
           1024px"
    alt="Área preservada da Mata Atlântica com vegetação nativa"
    loading="lazy"
    decoding="async"
>


            <p>
                O SOS Mata Atlântica é uma organização dedicada à preservação da Mata Atlântica.
            </p>

            <a href="#cadastro" class="btn" data-pagina="cadastro">Quero ajudar!</a>
    </section>

    <section>
        
        <h2>Quem somos</h2>

        <p>
            Somos uma equipe dedicada à conservação da Mata Atlântica.
        </p>
    </section>

    <section>

        <h2>Nossa Missão</h2>

        <p>
            Promover políticas e ações que contribuam para a proteção da Mata Atlântica.
        </p>
    </section>

    <section>
        
        <h2>Contato</h2>

    
    <p>E-mail: contato@sosmataatlantica.org.br</p>
    <p>Telefone: (11) 3262-4088</p>
    <p>Endereço Sede: Av. Paulista, 2073, Horsa I, Conjunto 1318, Bela Vista.</p>
    </section>

`;

export const templateProjetos = `
<section>
    <h2>Projetos e iniciativas</h2>
    
    <article>
        <h3>Restauração de áreas degradadas</h3>
        <p>
            Projeto voltado ao plantio de espécies nativas e à recuperação da biodiversidade da Mata Atlântica.
        </p>
    </article>

    <article>
        <h3>Monitoramento de qualidade ambiental</h3>
        <p>
            Iniciativa que acompanha as condições ambientais e contribui para a preservação dos recursos naturais.
        </p>
    </article>
</section>
`;

export const templateCadastro = `
<section>
    <h2>Seja um colaborador</h2>
    <p>Preencha seus dados para participar das nossas ações e contribuir com a preservação da Mata Atlântica.</p>
    
    <form id="formCadastro">

        <fieldset>
            <legend>Dados Pessoais</legend>

            <label for="nome">Nome completo:</label>
            <input
                type="text"
                id="nome"
                name="nome"
                required
            >

            <label for="cpf">CPF:</label>
            <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                maxlength="14"
                required
            >
        </fieldset>

        <fieldset>
            <legend>Dados de Contato</legend>

            <label for="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                required
            >

            <label for="telefone">Telefone:</label>
            <input
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                maxlength="15"
                required
            >

            <label for="cep">CEP:</label>
            <input
                type="text"
                id="cep"
                name="cep"
                placeholder="00000-000"
                maxlength="9"
                required
            >
            
        </fieldset>

        <button type="submit">Cadastrar</button>

        <p id="mensagem-formulario" aria-live="polite"></p>
    </form>
</section>
`;