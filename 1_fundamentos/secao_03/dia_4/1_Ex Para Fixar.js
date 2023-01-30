            // OBJETOS

// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 },
// }

// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: 
// “A jogadora Marta Silva tem 34 anos de idade”.

// console.log("A jogadora " + player.name + " " + player.lastName + " tem" + " " + player.age + " anos de idade");

// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// [2006, 2007, 2008, 2009, 2010, 2018]

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: 
// “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

// console.log("A jogadora " + player["name"] + " " + player["lastName"] + " " + "foi eleita a melhor do mundo por" + player["bestInTheWord"].linght + " vezes");

// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: 
// “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

// console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata.");

                // FOR IN  E  FOR OF

// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge',
// };

// for (let index in names){
//     console.log("Olá " + names[index]);
// }

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

// let car = {
//   model: 'A3 Sedan',
//   manufacturer: 'Audi',
//   year: 2020
// };

// for (let index in car){
//     console.log(car[index]);
// }

                // FUNÇÕES

// Desenvolva cada exercício a seguir utilizando funções:

// Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// function adicao (a, b){
//     return a + b;
// }

// function subtracao (a, b){
//     return a - b;
// }

// function multiplicacao (a, b){
//     return a * b;
// }

// function divisao (a, b){
//     return a / b;
// }

// function modulo (a, b){
//     return a % b;
// }

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// function numeros (primeiroNumero, segundoNumero){
//     if (primeiroNumero > segundoNumero){
//         return primeiroNumero + " é maior que " + segundoNumero; 
//     } else {
//         return segundoNumero + " é maior que " + primeiroNumero;
//     }
// }
// console.log(numeros(10,20));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
 
// function numeros (primeiroNumero, segundoNumero, terceiroNumero){
//     if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){
//         return primeiroNumero + " é o maior número";
//     } else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
//         return segundoNumero + " é o maior número";
//     } else if (terceiroNumero > primeiroNumero && terceiroNumero > primeiroNumero){
//         return terceiroNumero + " é o maior número";
//     }
// }
// console.log(numeros(10, 20, 30));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

// function parametro (numero){
//     if (numero > 0){
//         return "positive";
//     } else if (numero < 0){
//         return "negative";
//     } else {
//         return "zero";
//     }
// }
// console.log(parametro(-1));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

function angulos (angulo1, angulo2, angulo3){
    if ((angulo1 + angulo2) + angulo3 === 180){
        return true;
    } else if ((angulo1 + angulo2) + angulo3 !== 180){
        return false;
    } else if ( angulo1 < 0 || angulo2 < 0 || angulo3 < 0){
        return "inválido";
    }
 } 
console.log(angulos(60, 60, 60));





