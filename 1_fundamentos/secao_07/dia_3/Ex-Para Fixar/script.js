// Exercício - Para Fixar - Função reduce, filter, map

// Tente criar a função que busca o maior valor do array numbers utilizando apenas o reduce.

const numbers = [50, 85, -30, 3, 15];

numbers.reduce((bigger, number) => bigger > number ? bigger : number);

// Faça uma função que some todos os números pares do array numbers:
// Solução usando filter e reduce:

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pairNumbers = (number) => number % 2 === 0;
const sum = (acc, number) => acc + number;

const sumNumbers = (array) => array.filter(number).reduce(sum);

console.log(sumNumbers(numbers));

// Solução usando apenas reduce:

const sum = (acc, number) => (number % 2 === 0) ? acc + number : acc;

const sumNumbers = (array) => array.reduce(sum, 0);

console.log(sumNumbers(numbers));

// Agora, crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. 
// Você usará tanto o map quanto o reduce dentro dele!

const estudantes = [
    {
      nome: 'Jorge',
      sobrenome: 'Silva',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 67 },
        { name: 'Português', nota: 79 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 65 },
      ],
    },
    {
      nome: 'Mario',
      sobrenome: 'Ferreira',
      idade: 15,
      turno: 'Tarde',
      materias: [
        { name: 'Matemática', nota: 59 },
        { name: 'Português', nota: 80 },
        { name: 'Química', nota: 78 },
        { name: 'Biologia', nota: 92 },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 76 },
        { name: 'Português', nota: 90 },
        { name: 'Química', nota: 70 },
        { name: 'Biologia', nota: 80 },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 91 },
        { name: 'Português', nota: 85 },
        { name: 'Química', nota: 92 },
        { name: 'Biologia', nota: 90 },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 70 },
        { name: 'Português', nota: 70 },
        { name: 'Química', nota: 60 },
        { name: 'Biologia', nota: 50 },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: 80 },
        { name: 'Português', nota: 82 },
        { name: 'Química', nota: 79 },
        { name: 'Biologia', nota: 75 },
      ],
    },
  ];

  const report = estudantes.map((element) => ({
    name: element.nome,
    materia: element.materias
        .reduce((acc, materia) => acc.nota > materia.nota ? acc : materia).name,
  }));

  console.log(report);
   