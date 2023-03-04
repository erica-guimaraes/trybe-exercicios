// 🚀 Exercício 1

// A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item, caso ele exista no array:
// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;

// Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4];

// Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado.

const myRemove = require('/home/user/trybe/trybe-exercicios/1_fundamentos/secao_06/dia_2/script.js');

describe('Exercício 1 - Função myRemove', () => {
    it('Deve retornar um array removendo o ítem correto', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});

// 🚀 Exercício 2

// A função myFizzBuzz(num) recebe um número num como parâmetro. Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz". 
// Caso num seja um número divisível apenas por 3, retorna "fizz". 
// E caso num seja um número divisível apenas por 5, retorna "buzz". 
// Se num for um número que não é divisível nem por 3 e nem por 5, a função retorna o próprio número num. 
// Caso num não seja um número, a função retorna false.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.

// Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado.

const myFizzBuzz = require('/home/user/trybe/trybe-exercicios/1_fundamentos/secao_06/dia_2/script.js');

describe('Exercício 2 - Função myFizzBuzz', () => {
    it ('Verifica, se de acordo com o parâmetro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toEqual("fizzbuzz");
        expect(myFizzBuzz(9)).toEqual("fizz");
        expect(myFizzBuzz(25)).toEqual("buzz");
        expect(myFizzBuzz(13)).toEqual(13);
        expect(myFizzBuzz('num')).toEqual(false);
    });
});

// 🚀 Exercício 3

// Para as funções encode e decode, crie os seguintes testes em Jest:
// Teste se encode e decode são funções; OK
// Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente; OK
// Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente; OK
// Teste se as demais letras/números não são convertidos para cada caso; ????
// Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro. ok

const encode = require('/home/user/trybe/trybe-exercicios/1_fundamentos/secao_06/dia_2/script.js');
const decode = require('/home/user/trybe/trybe-exercicios/1_fundamentos/secao_06/dia_2/script.js');

describe('Exercício 3 - Funções encode e decode', () => {
    it ('Encode é uma função', () => {
        expect(typeof encode).toEqual('function');
    });
    it ('Decode é uma função', () => {
        expect(typeof decode).toEqual('function');
    });
    it ('Na função encode a vogal a é convertida em 1', () => {
        expect(encode('a')).toEqual('1');
    });
    it ('Na função encode a vogal e é convertida em 2', () => {
        expect(encode('e')).toEqual('2');
    });
    it ('Na função encode a vogal i é convertida em 3', () => {
        expect(encode('i')).toEqual('3');
    });
    it ('Na função encode a vogal o é convertida em 4', () => {
        expect(encode('o')).toEqual('4');
    });
    it ('Na função encode a vogal u é convertida em 5', () => {
        expect(encode('u')).toEqual('5');
    });
    it ('Na função decode o número 1 é convertido em a', () => {
        expect(decode('1')).toEqual('a');
    });
    it ('Na função decode o número 2 é convertido em e', () => {
        expect(decode('2')).toEqual('e');
    });
    it ('Na função decode o número 3 é convertido em i', () => {
        expect(decode('3')).toEqual('i');
    });
    it ('Na função decode o número 4 é convertido em o', () => {
        expect(decode('4')).toEqual('o');
    });
    it ('Na função decode o número 5 é convertido em u', () => {
        expect(decode('5')).toEqual('u');
    });
    it ('Verifica se a palavra Trybe tem o mesmo número de caracteres', () => {
        expect(decode('Trybe').length).toEqual(5);
        expect(encode('Trybe').length).toEqual(5);
    });
});

// 🚀 Exercício 4
// É importante nunca alterar os testes ou as variáveis já escritas no código.

const techList = require('/home/user/trybe/trybe-exercicios/1_fundamentos/secao_06/dia_2/script.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

// 🚀 Exercício 5
// Implemente a função hydrate a partir dos testes abaixo. 
// É importante nunca alterar os testes ou as variáveis já escritas no código

const hydrate = require('/home/user/trybe/trybe-exercicios/1_fundamentos/secao_06/dia_2/script.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
