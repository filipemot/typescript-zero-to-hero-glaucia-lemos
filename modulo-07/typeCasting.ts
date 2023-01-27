export {};

// => Exemplo 01 - Type Casting: 'as'
const valor: unknown = 'Olá pessoal';
console.log((valor as string).length);

// => Exemplo 02 - Type Casting: '<>'
const carro = 'Corolla';
const tamanhoString: number = (<string>carro).length;

console.log('Tamanho da string: ', tamanhoString);
