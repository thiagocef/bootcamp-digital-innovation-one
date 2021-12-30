//TIPOS DE FUNÇÇÃO

//declarativa
function funcao() {
    console.log('1 - Função declarativa')
}
funcao();

//expressões de funções
//com nomeação
var funcao = function funcao(){
    console.log('2 - Função de expressão')
}
funcao();

//arrow function
var funcao = () => {
    console.log('3 - Mensagem de arrow function');
}
funcao();

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}
