

// Usando o objeto abaixo, faça os exercícios a seguir:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

            // EXERCÍCIO 1

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:
// Bem-vinda, Margarida

// console.log("Bem-vinda, " + info.personagem);

            // EXERCÍCIO 2

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. 
// Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
// {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
//   }

// info["recorrente"] = "Sim",

// console.log(info);

            // EXERCÍCIO 3

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// personagem
// origem
// nota
// recorrente

// for (let index in info) {
//     console.log(index);
// }

            // EXERCÍCIO 4

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// Margarida
// Pato Donald
// Namorada do personagem principal nos quadrinhos do Pato Donald
// Sim

// for (let index in info){
//     console.log(info[index]);
// }

            // EXERCÍCIO 5

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
// ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. 
// Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:

// Margarida e Tio Patinhas
// Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
// Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
// Ambos recorrentes // Atenção para essa última linha!

// let info2 = {
//     personagem: "Tio Patinhas",                                                       
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: "O último MacPatinhas",
//     recorrente: "Sim",                                                         
// };                                                                                

// for (let index in info){
//     if (info[index] === "Sim" && info2[index] === "Sim"){
//         console.log("Ambos recorrentes");
//     } else {
//         console.log(info[index] + " e " + info2[index]);
//     }
// }
    
        // EXERCÍCIO 6 - Leitura de Objetos

// Usando o objeto abaixo, faça os exercícios a seguir:

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: 
// “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.

// console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + "'" + leitor.livrosFavoritos[0].titulo + "'");

        // EXERCÍCIO 7

// Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:

// {
//     titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//     autor: 'JK Rowling',
//     editora: 'Rocco',
//   }

// leitor.livrosFavoritos.push(
//     {
//       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//       autor: 'JK Rowling',
//       editora: 'Rocco',
//     }
// )

        // EXERCÍCIO 8

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: 
// “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

// console.log(leitor.nome + " tem " + leitor.livrosFavoritos.lenght + " livros favoritos");
