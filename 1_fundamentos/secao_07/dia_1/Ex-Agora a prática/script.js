// Exercícios - agora, a prática
// Parte I
// Nova pessoa contratada
// Você ficou responsável por organizar o sistema de contratação de uma empresa e deve criar uma estrutura de dados que possua o formato { nomeCompleto, email } para representar a nova pessoa contratada. Além disso, você deve gerar os emails de cada pessoa que é contratada na empresa. Para isso:

// crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = (empregados) => {
    const employees = {
      id1: empregados('Pedro Guerra'), 
      id2: empregados('Luiza Drumond'), 
      id3: empregados('Carla Paiva'), 
    }
    return employees;
  };

const empregados = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_'); 
    return{fullName, email: `${email}@trybe.com`};
};

console.log(newEmployees(empregados));

// Sorteador de loteria
// Desenvolva uma HOF que retorne o resultado de um sorteio. 
// Essa HOF irá gerar um número aleatório entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
// O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”).

const confereNumeros = (numApostado, numSorteado) => numApostado === numSorteado;

const resultadoSorteio = (numApostado, callback) => {
    const numSorteado = Math.floor((Math.random() * 5) + 1);
    if (callback()) {
        return 'Parabéns, você ganhou';
    } else {
        return 'Tente novamente';
    }  
}
console.log(resultadoSorteio(2,confereNumeros));

// Corretor automático de exame
// Crie uma HOF que receberá três parâmetros:

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
};

const countPoints = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} pontos`;
};

console.log(countPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));

// 🚀 Parte II - Organizando uma biblioteca

// Estes exercícios praticam os conceitos de Higher Order Functions associados a outros temas de fundamentos já vistos, como arrow functions, template literals e objetos. Essa mistura de conceitos é muito importante para o seu aprendizado, então use tudo o que sabe para resolver os exercícios!

// Utilize o seguinte código como template para realizar os exercícios:

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
// Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
// De olho na dica 👀: use a função find.

// const expectedResult = 'Stephen King';

const authorBornIn1947 = () => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
};
console.log(authorBornIn1947());

// Retorne o nome do livro com menor número de caracteres (menor nome).
// De olho na dica 👀: use a função forEach.

// const expectedResult = 'Duna';

const smallerName = () => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length){
      nameBook = book.name
    }
  })
  return nameBook;
};
 console.log(smallerName());

//  Encontre o primeiro livro cujo nome possua 26 caracteres.

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

const getNamedBook = () => books.find((book) => book.name.length === 26);

console.log(getNamedBook());

// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

// const expectedResult = false;

const everyoneWasBornOnSecXX = () => books.every((year) => year.author.birthYear >= 1901 && year.author.birthYear <= 2000);

console.log(everyoneWasBornOnSecXX());

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// const expectedResult = true;

const someBookWasReleaseOnThe80s = () => books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);

console.log(someBookWasReleaseOnThe80s());

// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

const expectedResult = false;

const authorUnique = () => {
  return books.every((autor) =>
   autor.author.birthYear)
};