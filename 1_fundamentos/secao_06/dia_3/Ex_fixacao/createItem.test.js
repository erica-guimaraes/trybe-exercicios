const createItem = require('./createItem');
describe('a função createItem', () => {
// Teste se a função createItem cria um item válido.
  it('cria um item válido', () => {
    expect(createItem('banana', 'kg', 1.99, 20)).toEqual({ name: 'banana', unit: 'kg', price: 1.99, quantity: 20 });
  });

// Teste se a função createItem utiliza zero como quantidade padrão.
  it('utiliza zero como quantidade padrão', () => {
    expect(createItem('banana', 'kg', 1.99)).toHaveProperty('quantity', 0);
  });

// Teste se a função createItem lança algum erro quando não recebe parâmetros.
  it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => createItem()).toThrow();
  });

// Teste se a função createItem lança um erro se o nome do item não é uma string.
  it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => createItem(1, 'kg', 1.99, 20)).toThrow();
  });

// Teste se a função createItem lança um erro se o preço do item é negativo ou zero.
  it('Lança um erro se o preço é negativo', () => {
    expect(() => createItem('banana', 'kg', -0.01, 20)).toThrow();
  });
  it('Lança um erro se o preço é zero', () => {
    expect(() => createItem('banana', 'kg', 0, 20)).toThrow();
  });
});









