// Exercício 3
// Organizando lições
// Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. 
// Para isso, considere o seguinte código:

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};
  
const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. 
// Essa função deve possuir três parâmetros, sendo eles: 
// o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

// lesson2.turno = 'noite';
// console.log(lesson2);

// Usando função:

const newKey = 'turno';
const turno = 'noite';

const adicionaPropriedade = (objeto, chave, valor) => {
    return objeto.chave = valor;
};

console.log(adicionaPropriedade(lesson2, newKey, turno));

// 2 - Crie uma função para listar as keys de um objeto. 
// Essa função deve receber um objeto como parâmetro.

const listKeys = (object) => {
    return Object.keys(object);
};
console.log(listKeys(lesson1));

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const sizeObj = (object) => Object.keys(object).length;
console.log(sizeObj(lesson3));

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (object) => Object.values(object);
console.log(listValues(lesson1));

// 5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// 6 - Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalEstudantes = (object) => {
    let total = 0;
    const keys = Object.keys(object);
    for (index in keys) {
        total += object[keys[index]].numeroEstudantes;
    }
    return total;
};
console.log(totalEstudantes(allLessons));
 
// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const keyPosition = (object, posição) => Object.values(object)[posição];
console.log(keyPosition(lesson1,0));

// 8 - Crie uma função que verifique se o par (chave / valor) existe na função. 
// Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. 

const verifica = (objeto, chave, valor) => {
    const entries = Object.entries(objeto);
    for (let index in entries) {
        if (entries[index][0] === chave && entries[index][1] === valor) {
            return true;
        } else {
            return false;
        }
    }
};
console.log(verifica(lesson3, 'turno', 'noite'));