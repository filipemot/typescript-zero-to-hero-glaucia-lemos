export {};

//Named functions
function somarNumeros(a: number, b: number): number {
  return a + b;
}

const resultado = somarNumeros(2, 2);
console.log(resultado);

// Function Expression
const subtracao = function (a: number, b: number): number {
  return a - b;
};

console.log(subtracao(2, 2));

// Arrow Function Expression
const multiplicacao = (a: number, b: number): number => a * b;

console.log(multiplicacao(2, 2));

// Function Constructor
const divisao = new Function('a', 'b', 'return a / b');
console.log(divisao(2, 2));
