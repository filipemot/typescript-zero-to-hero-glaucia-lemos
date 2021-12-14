console.log("******** Uso Simples de Tuplas em Typescript")

let pessoa: [string, string, number];
pessoa = ['Filipe', 'Programador', 36];
console.log(pessoa);

console.log("\n******** Acessando o valor da tupla")
console.log(pessoa[0]);

console.log("\n******** Outra forma de usar Tuplas em Typescript (com labels)")
let pessoa2: [nome: string, posicao:string, idade:number];
pessoa2 = ['Filipe', 'Programador', 36];
console.log(pessoa2);

console.log("\n******** Usando tuplas com Spread Operator")
let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Maça'];
console.log(...listaFrutas);