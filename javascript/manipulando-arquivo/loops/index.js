//IF-ELSE

/*function numeroPositivo(num) {
    let resultado;

    if (num < 0){
        return "é positivo"; //uma opção de retorno sem precisar de variável
    } else {
        resultado = true; //outra opção de retorno
    }
    return resultado;
}

console.log(numeroPositivo(-5));*/

//SWITCH-CASE

/*function animal(id) {
    switch(id) {
        case 1:
            return "cão";
        case 2:
            return "gato";
        case 3:
            return "pássaro";
        default:
            return "peixe"; //sempre terá. caso não atenda aos outros casos
    }
}

console.log(animal(4))*/

//FOR

/*function vezesDois(arr) {
    let multiplicados = [];
    let i = 0;

    for (i = 0; i < arr.length; i++) { //i começa com 0. enquando for menor que o tamanho de arr, i adiciona mais 1
        multiplicados.push(arr[i] * 2); //push adiciona 1 ao final de arr e multiplica por 2
    }
    return multiplicados;
}
const num = [2, 33, 456, 40]; //passando os valores para o parâmetro arr

console.log(vezesDois(num)); //chamando a função e passando a const num com os valores
*/

//WHILE

function enquanto() {
    let num = 0;

    while(num <= 5) {
        console.log(num);
        num++;
    }
}

enquanto();