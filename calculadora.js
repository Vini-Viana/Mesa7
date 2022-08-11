function adicionar(num1, num2){
     return num1 + num2;     
 }
 
 function subtracao(num1, num2){
     return num1 - num2;
 }

 function multiplicacao(num1, num2){
     return num1 * num2;
 }

 function divisao(num1, num2){
     return num1 / num2;
 }
 
console.log("-------------- Teste de Operações / Calculador --------------")

 console.log(adicionar(5,5));
 console.log(subtracao(10,5));
 console.log(multiplicacao(2,4));
 console.log(divisao(8,4));

 console.log(divisao(2,0));

 // 1) Quadrado do numero

function quadradoDoNumero(num1){
    return multiplicacao(num1,num1)
} 
console.log(quadradoDoNumero(4))

// 2) Media de tres numeros

function mediaDeTresNumeros(num1, num2, num3){
    return (divisao(adicionar(adicionar(num1, num2), num3),3))
}
console.log(mediaDeTresNumeros(2,4,6));

// 3) Calcula Porcentagem

function calculaPorcentagem(num1, num2){
    return porcentagem = multiplicacao(num1, divisao(num2, 100))
}

console.log(calculaPorcentagem(10,2));

// 4) Gerador de Porcentagem

function geradorDePorcentagem(num1, num2){
    return multiplicacao(divisao(num1, num2),100)
}
console.log(geradorDePorcentagem(5,100))

