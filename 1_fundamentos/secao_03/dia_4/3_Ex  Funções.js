            // FUNÇÕES
            // EXERCÍCIOS DO REPOSITÓRIO REMOTO DA TRIBO

            // EXERCÍCIO 1

// 1. Crie uma função que verifica palíndromos
// Implemente a função verificaPalindromo que confere se uma palavra é um palíndromo ou não
// A função verificaPalindromo recebe como parâmetro uma string e deve retornar true se essa string for um palídromo, e false se não for.
// Veja aqui a definição de palíndromo.
// De olho na dica: Os métodos split, join e reverse podem ser muito úteis para esse requisito.

// O que será testado
// A função verificaPalindromo deve retornar true quando receber a string 'arara';

// A função verificaPalindromo deve retornar false quando receber a string 'desenvolvimento'.

let palavra = "arara";
let resultado = 

function verificaPalindromo(palavra){
    for(let index = palavra.length - 1; index >= 0; index -= 1){
        resultado += palavra[index];
            if(palavra[index] === palavra){
                console.log(true);
            }else{
                console.log(false);
        }
    }
}
// console.log(resultado);

            // EXERCÍCIO 2

// 2. Crie uma função que retorne o índice do maior valor
// Implemente a função indiceDoMaior que retornará o índice do maior número em um array
// A função indiceDoMaior recebe como parâmetro um array de inteiros, não repetidos, e deve retornar o índice do array, em formato de número, onde se encontra o maior valor desse array.
// De olho na dica: Os métodos Number ou parseInt podem te ajudar para converter tipos no JavaScript.

// O que será testado
// A função indiceDoMaior deve retornar 4 quando receber o array [2, 3, 6, 7, 10, 1];

// A função indiceDoMaior deve retornar 0 quando receber o array [9, 1, 3, 5, 7].


function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let index in numeros) {
        if (numeros[index] > indiceMaior){
            indiceMaior = numeros[index];
        } 
    }
    return numeros.indexOf(indiceMaior);
}
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]));

            // EXERCÍCIO 3

// 3. Crie uma função que retorne o índice do menor valor
// Implemente a função indiceDoMenor que retornará o índice do menor número em um array
// A função indiceDoMenor recebe como parâmetro um array de inteiros, não repetidos, e deve retornar o índice do array, em formato de número, onde se encontra o menor valor desse array.
// De olho na dica eyes: Os métodos Number ou parseInt podem te ajudar para converter tipos no JavaScript.

// O que será testado
// A função indiceDoMenor deve retornar 5 quando receber o array [2, 3, 6, 7, 10, 1];

// A função indiceDoMenor deve retornar 6 quando receber o array [2, 4, 6, 7, 10, 0, -3].

            // EXERCÍCIO 4

// 4. Crie uma função que retorna a maior palavra
// Implemente a função maiorPalavra que retornará a maior palavra em um array
// A função maiorPalavra recebe como parâmetro um array de strings, não repetidas, e deve retornar a palavra com a maior quantidade de caracteres.
// O que será testado
// A função maiorPalavra deve retornar Fernanda quando receber o array ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// A função maiorPalavra deve retornar JavaScript quando receber o array ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix'];

            // EXERCÍCIO 5

// 5. Crie uma função que retorne o número mais frequente
// Implemente a função maisRepetido que retornará o número que mais se repete em um array
// A função maisRepetido recebe como parâmetro um array de inteiros e deve retornar o número que mais se repete nesse array.
// De olho nas dicas eyes:

// Os métodos Number ou parseInt podem te ajudar para converter tipos no JavaScript;

// Dividir uma função grande em funções menores é uma boa forma de reduzir a complexidade e tornar seu código mais legível.

// O que será testado
// A função maisRepetido deve retornar 2 quando receber o array [2, 3, 2, 5, 8, 2, 3];

// A função maisRepetido deve retornar 3 quando receber o array [2, 3, -2, 3, -2, 2, 3];

            // EXERCÍCIO 6

// 6. Crie uma função que retorna o somatório de um número
// Implemente a função somatorio que retornará o somatório de um número
// A função somatorio recebe como parâmetro um número natural (número inteiro não negativo) N e retorna o somatório de todos os números de 1 até N.
// Veja aqui a definição de somatório.
// O que será testado
// A função somatorio deve retornar 15 quando receber o número 5;

// A função somatorio deve retornar 1 quando receber o número 1;

// A função somatorio deve retornar "ERRO" quando receber um número negativo;

            // EXERCÍCIO 7

// 7. Crie uma função que verifica se uma string é o final de outra
// Implemente a função verificaFimPalavra que confere se uma string faz parte do final de outra string
// A função verificaFimPalavra recebe dois parâmetros do tipo string, podem ser chamados de palavra1 e palavra2. Se palavra2 fizer parte do final de palavra1 a função retorna true, caso contrário retorna false.
// O que será testado
// A função verificaFimPalavra deve retornar true quando receber as strings 'trybe e 'be', nessa ordem;

// A função verificaFimPalavra deve retornar false quando receber as strings 'joaofernando' e 'fernan', nessa ordem;