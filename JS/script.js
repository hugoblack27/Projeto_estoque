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
let quantCampopreen = 0

function verificacampos() {

    quantCampopreen = 0
    let campopreenchido = true

    if (nome.value === '') {
        document.getElementById("erro-nome").style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById("erro-nome").style.display = 'none'
        quantCampopreen += 1;
    }
    
    if (categoria.value === '') {
        document.getElementById("erro-categoria").style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById("erro-categoria").style.display = 'none'
        quantCampopreen += 1;
    }
    
    if (preco.value === '') {
        document.getElementById("erro-preco").style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById("erro-preco").style.display = 'none'
        quantCampopreen += 1;
    }
    
    if (quantidade.value == '' || quantidade.value == 0) {
        document.getElementById('erro-quantidade').style.display = 'block'
        campopreenchido = false
    } else {
        document.getElementById('erro-quantidade').style.display = 'none'
        quantCampopreen += 1;
    }

    

    return campopreenchido;
}


// Criando função de um jeito diferente
//produtoform.addEventListener("submit", () => {} ); 
produtoform.addEventListener("submit", (event) => {
    event.preventDefault();

    // let preen = 0;
    
    // if (preco.value !== "") preen++; 
    // if (quantidade.value !== '') preen++;
    // if (categoria.value !== '' ) preen++;
    // if (nome.value !== '') preen++;


    if(verificacampos() == false && quantCampopreen == 0){
        exibirNotificacao("Nenhum produto adicionado", "erro");
        return; 
    }else if(verificacampos() == false && quantCampopreen < 4){
        exibirNotificacao("Ainda falta preencher campos", "alerta");
        return;
    }


    exibirNotificacao("Produto adicionado com sucesso", "sucesso");

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
    
    // colocando o item na tabela
    
    adicionarItemTabela();

});


function adicionarItemTabela() {
    
    const semprodutosdiv = document.getElementById("sem-produtos");

    let produtos = JSON.parse(localStorage.getItem("nomeProduto")) || [];

    if (produtos.length > 0){
        
        semprodutosdiv.style.display = 'none';  
    }

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

