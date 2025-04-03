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

// Criando função de um jeito diferente
//produtoform.addEventListener("submit", () => {} ); 
produtoform.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nome.value === '') {
        document.getElementById("erro-nome").style.display = 'block'
    }else{
        document.getElementById("erro-nome").style.display = 'none'
    }

    if(categoria.value === ''){
        document.getElementById("erro-categoria").style.display = 'block'
    }else{
        document.getElementById("erro-categoria").style.display = 'none'
    }

    if(preco.value === ''){
        document.getElementById("erro-preco").style.display = 'block'
    }else{
        document.getElementById("erro-preco").style.display = 'none'
    }

    if(quantidade.value == ''){
        document.getElementById('erro-quantidade').style.display = 'block'
    }else{
        document.getElementById('erro-quantidade').style.display = 'none'
    }
});

