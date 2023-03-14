// Exercícios utilizando mais do que uma HOF na mesma função:

// 1 - Para os exercícios a seguir será usado um array com os dados de estudantes de um colégio.

const students = [
    {
      firstName: 'João',
      lastName: 'Silva',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: 67 },
        { name: 'Português', grade: 79 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 65 },
      ],
    },
    {
      firstName: 'Mario',
      lastName: 'Ferreira',
      age: 15,
      period: 'Tarde',
      subjects: [
        { name: 'Matemática', grade: '59' },
        { name: 'Português', grade: '80' },
        { name: 'Química', grade: '78' },
        { name: 'Biologia', grade: '92' },
      ],
    },
    {
      firstName: 'Jorge',
      lastName: 'Santos',
      age: 15,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '76' },
        { name: 'Português', grade: '90' },
        { name: 'Química', grade: '70' },
        { name: 'Biologia', grade: '80' },
      ],
    },
    {
      firstName: 'Maria',
      lastName: 'Silveira',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '91' },
        { name: 'Português', grade: '85' },
        { name: 'Química', grade: '92' },
        { name: 'Biologia', grade: '90' },
      ],
    },
    {
      firstName: 'Natalia',
      lastName: 'Castro',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '70' },
        { name: 'Português', grade: '70' },
        { name: 'Química', grade: '60' },
        { name: 'Biologia', grade: '50' },
      ],
    },
    {
      firstName: 'Wilson',
      lastName: 'Martins',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '80' },
        { name: 'Português', grade: '82' },
        { name: 'Química', grade: '79' },
        { name: 'Biologia', grade: '75' },
      ],
    },
  ];

// Buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.
// Com map e filter:

const fullName = students.filter((student) => student.period === 'Manhã')
    .map((student) => `${student.firstName} ${student.lastName}`);

console.log(fullName);

// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// Com find e map:

const subjectsStudent = (name) => students.find((student) => student.firstName === name).subjects
    .map((subject) => `${subject.name} - ${(subject.grade >=60) ? 'Aprovado' : 'Reprovado'}`);

console.log(subjectsStudent('João'));