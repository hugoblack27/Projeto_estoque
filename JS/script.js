// INFORMAÇÕES DO FORMULARIO
const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const imagem = document.getElementById("imagem");
const produtoform = document.getElementById("produto-form");
const notificacao = document.getElementById("notificacao-conteudo");
const tbody = document.getElementById("produtos-lista");


// escondendo as notificação até ela ser chamada
notificacao.style.display = "none";

// lista para armazenar os dados do formulario
const categorias = []
const produtos = []


// função para exibir uma notificacao
function exibirNotificacao(mensagem, status,) {
    const messageE1 = document.getElementById("notificacao-mensagem");

    // ele é responsavel por alterar o texto guardado no mensageE1
    // ou seja, o que esta dentro do spam do HTML 
    messageE1.textContent = mensagem;

    if (status === "sucesso") {
        notificacao.style.backgroundColor = "#dbead5";
        messageE1.style.color = "#103900";
    } else if (status === "alerta") {
        notificacao.style.backgroundColor = "#ffffa0";
        messageE1.style.color = "#646600";
    } else if (status === "erro") {
        notificacao.style.backgroundColor = "#fb6866";
        messageE1.style.color = "#470300";
    }

    notificacao.style.display = "block";

    // esconde a notificacao depois de 3 segundos 
    setTimeout(() => { notificacao.style.display = "none" }
        , 3000);

}

function verificacampos() {
    let campopreenchido = true

    if (nome.value === '') {
        document.getElementById("erro-nome").style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById("erro-nome").style.display = 'none'
    }

    if (categoria.value === '') {
        document.getElementById("erro-categoria").style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById("erro-categoria").style.display = 'none'
    }

    if (preco.value === '') {
        document.getElementById("erro-preco").style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById("erro-preco").style.display = 'none'
    }

    if (quantidade.value == '') {
        document.getElementById('erro-quantidade').style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById('erro-quantidade').style.display = 'none'
    }

    // verifica se algum campo não preenchido ele encerra o evento e isso leva que a informação  incompleta seja inserida
    if (campopreenchido == false) {
        return exibirNotificacao("Produto não adicionado", "erro");
    }

    exibirNotificacao("Produto adicionado com sucesso", "sucesso");
}


// Criando função de um jeito diferente
//produtoform.addEventListener("submit", () => {} ); 
produtoform.addEventListener("submit", (event) => {
    event.preventDefault();

    verificacampos();

    // Criando um objeto para armazenar os dados do formulario
    const produtoInserido = {
        nome: nome.value,
        categoria: categoria.value,
        preco: preco.value,
        quantidade: quantidade.value,
        imagem: imagem.value
    };




    // pegando os produtos que já foram salvos no localsatorage
    let produtoSalvos = JSON.parse(localStorage.getItem("nomeProduto")) || [];

    // aguardando esses dados  novos na lista 
    produtoSalvos.push(produtoInserido);

    // guardando a lista no localstorage
    // transformando so dados para json usando JSON.stringfy  
    localStorage.setItem("nomeProduto", JSON.stringify(produtoSalvos));

    // limpando campos dos formularios 
    produtoform.reset();

});


function adicionarItemTabela() {

    let produtos = JSON.parse(localStorage.getItem("nomeProduto")) || [];

    let valoresTabela = "";

    produtos.forEach(produto => {
        console.log(produto)
        valoresTabela += 
        `<tr>
         <td></td>
         <td>${produto.nome}</td>
         <td>${produto.categoria}</td>
         <td>${produto.preco}</td>
         <td>${produto.quantidade}</td>
    </tr>`;
    });

    tbody.innerHTML = valoresTabela
       
}
