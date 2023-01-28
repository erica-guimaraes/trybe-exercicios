        
        // Lidando com Arrays

// Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

        // EXERCÍCIO 1

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let index = 0; index < numbers.length; index += 1) {
//         console.log(numbers[index]);
// }

        // EXERCÍCIO 2

// Some todos os valores contidos no array e imprima o resultado;

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1){
//         soma += numbers[index];
// }
// console.log(soma)

        // EXERCÍCIO 3

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1){
//         soma += numbers[index]; 
// }

// let media = soma / numbers.length;
// console.log(media);


        // EXERCÍCIO 4

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. 
// Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// if (media > 20){
//         console.log("valor maior que 20"); 
// } else {
//         console.log("valor menor ou igual a 20")
// }

        // EXERCÍCIO 5

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let maiorNumero = numbers[0];

// for (let index = 1; index < numbers.length; index += 1){
//         if (numbers[index]>maiorNumero){
//                 maiorNumero = numbers[index];
//         }
// }
// console.log(maiorNumero)

        // EXERCÍCIO 6

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// for (let index = 0; index < numbers.length; index += 1){
//         if(numbers[index] % 2 !== 0){
//                 console.log(numbers[index]);
//         }
// }
//?????????????????

        // EXERCÍCIO 7

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let menorNumero = numbers[0];

// for (let index = 1; index < numbers.length; index += 1){
//         if (numbers[index] < menorNumero) {
//                 menorNumero = numbers[index];
//         } 
// }
// console.log(menorNumero)

        // EXERCÍCIO 8

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

// for (let index = 0; index < numeros.length; index += 1){
//         console.log(numeros[index]);
// }

        // EXERCÍCIO 9

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.


for (let index = 0; index < numeros.length; index += 1){
        console.log(numeros[index] % 2);
}