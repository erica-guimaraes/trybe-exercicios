// Exercício 1

function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }

// Exercício 2

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

// Exercício 3

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];
  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }
  return mappedArray.join('');
}
const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}
const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

module.exports = myRemove, myFizzBuzz, mapString, encode, decode;

// Exercício 4

// A função techList recebe como parâmetros um array contendo uma lista de tecnologias e uma string com um nome. 
// Para cada tecnologia no array a função cria, em ordem alfabética, um objeto com a seguinte estrutura:
// {
//   tech: 'nomeTecnologia',
//   name: name,
// }
// Implemente a função techList a partir dos testes já feitos.

const techList = (tecnologias, name) => {
  const ordemTecnologias = tecnologias.sort();
  const listaTecnologias = [];
  for (let index = 0; index < ordemTecnologias.length; index += 1) {
    listaTecnologias.push({
      tech: ordemTecnologias[index],
      name,
    });
  };
  return listaTecnologias;
};

module.exports = techList;

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// 🚀 Exercício 5
// A função hydrate recebe uma string no formato “numero bebida”, e retorna a sugestão de quantos copos de água você deve beber para se hidratar. 
// Para cada bebida, deve-se tomar um copo de água para não ter ressaca.

const hydrate = (string) => {
  const stringSeparada = string.split(' ');
  let coposDeAgua = 0;
  for (let index = 0; index < stringSeparada.length; index += 1) {
    const analisaCaractere = parseInt(stringSeparada[index]);
    if (analisaCaractere) {
      coposDeAgua += analisaCaractere;
    };
  };
  
  let copo = 'copo';

  if (coposDeAgua > 1) {
    copo = 'copos';
  };
  return `${coposDeAgua} ${copo} de água`;
};

module.exports = hydrate;

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));