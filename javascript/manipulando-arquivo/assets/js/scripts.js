/*var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
*/

function compara(){
    let n1 = Number(prompt('digite um numero:'));
    let n2 = Number(prompt('digite um numero:'));
    let soma = n1 + n2;

    if (!n1 || !n2) { //para validar e aceitar apenas números
        alert('ERRO! - Defina dois números');
        return compara(); //se não forem digitados números, chama a função novamente 
    }

    //IGUAIS========================================================================================================== 
    ((soma) > 10 && (soma) < 20) && (n1 == n2)
    ? alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`)

        : ((soma) < 10 && (soma) < 20) && (n1 == n2)
        ? alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`)

                :((soma) > 10 && (soma) > 20) && (n1 == n2)
                ? alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`)

                        //DIFERENTES==================================================================================
                        : ((soma) > 10 && (soma) < 20) && (n1 != n2)
                        ? alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior que 10 e menor que 20`)
                            
                            : ((soma) < 10 && (soma) < 20) && (n1 != n2)
                            ? alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é menor que 10 e menor que 20`)

                            :alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
}
compara();

//ESTÁ CORRETO
    /*(n1 == n2) 
    ? alert(`Os numeros ${n1} e ${n2} são iguais`) 
    : alert(`Os numeros ${n1} e ${n2} são diferentes`); */

    //ESSE ESTÁ CORRETO
    /*((soma) > 10 && (soma) < 20)
    ? alert(`Sua soma é ${soma} que é maior que 10 e menor que 20`)

        : ((soma) < 10 && (soma) < 20)
            ? alert(`Sua soma é ${soma} que é menor que 10 e menor que 20`)
            : alert(`Sua soma é ${soma} que é maior que 10 e maior que 20`);*/

/*((soma) > 10 && (soma) < 20) 
    ? alert(`A soma é ${soma} e é maior que 10 e menor que 20`) 
    : alert(`A soma é ${soma} e está fora do intervalo entre 10 e 20`);*/