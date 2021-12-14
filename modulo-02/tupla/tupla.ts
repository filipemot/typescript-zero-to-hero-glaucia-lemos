console.log("******** Uso Simples de Tuplas em Typescript");
let pessoa: [string, string, number];
pessoa = ['Filipe', 'Programador', 36];
console.log(pessoa);

console.log("\n******** Acessando o valor da tupla");
console.log(pessoa[0]);

console.log("\n******** Outra forma de usar Tuplas em Typescript (com labels)");
let pessoa2: [nome: string, posicao:string, idade:number];
pessoa2 = ['Filipe', 'Programador', 36];
console.log(pessoa2);

console.log("\n******** Usando tuplas com Spread Operator");
let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Maça'];
console.log(...listaFrutas);

console.log("\n******** Lista Heterogenea de Tupla");
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(...listaFrutas2);

console.log("\n******** Uso de função com Tuplas");
function listarPessoas(nomes: string[], idades: number[]){
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Filipe', 'Pedro'], [35, 7]);
console.log(resultado);

type Nome = 
            | [primeiroNome: String, sobrenome:string]
            | [primeiroNome: String, nomeMeio:string, sobrenome:string];

function criarPessoa(...nome: Nome){
    return [...nome];
}

console.log(criarPessoa('Filipe', 'Mota'));
console.log(criarPessoa('Filipe', 'Guedes', 'Mota'));
