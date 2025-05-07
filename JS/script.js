// INFORMAÇÕES DO FORMULARIO
const nome = document.getElementById("nome");
const categoria = document.getElementById("categoria");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");
const imagem = document.getElementById("imagem");
const produtoform = document.getElementById("produto-form");

// Criando funções
// function testeEnvio(){
//     console.log("Enviando Formulário")
// };


// lista para armazenar os dados do formulario
const categorias = []
const produtos = []
const precos = []
const quantidades = []


// Criando função de um jeito diferente
//produtoform.addEventListener("submit", () => {} ); 
produtoform.addEventListener("submit", (event) => {
    event.preventDefault();

    let campopreenchido =  true

    if (nome.value === '') {
        document.getElementById("erro-nome").style.display = 'block'
        campopreenchido = false
    }else{
        document.getElementById("erro-nome").style.display = 'none'
    }

    if(categoria.value === ''){
        document.getElementById("erro-categoria").style.display = 'block'
        campopreenchido = false 
    }else{
        document.getElementById("erro-categoria").style.display = 'none'
    }

    if(preco.value === ''){
        document.getElementById("erro-preco").style.display = 'block'
        campopreenchido = false 
    }else{
        document.getElementById("erro-preco").style.display = 'none'
    }

    if(quantidade.value == ''){
        document.getElementById('erro-quantidade').style.display = 'block'
        campopreenchido = false 
    }else{
        document.getElementById('erro-quantidade').style.display = 'none'
    }

    // verifica se algum campo não preenchido ele encerra o evento e isso leva que a informação  incompleta seja inserida
    if (campopreenchido == false ){
        return
    }

// Criando um objeto para armazenar os dados do formulario
    const produtoInserido = {
        nome: nome.value,
        categoria: categoria.value,
        preco: preco.value,
        quantidade: quantidade.value,
        imagem: imagem.value
    };

     kbjkjbçkj b


    // aguardando esses dados  novos na lista 
    produtos.push(produtoInserido);

    // guardando a lista no localstorage
    // transformando so dados para json usando JSON.stringfy  
    localStorage.setItem("nomeProduto", JSON.stringify(produtos));
    

});
