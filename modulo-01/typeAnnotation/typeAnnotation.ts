// Strings
let nome: string = 'Filipe';
console.log(nome);

// Arrays
let animais: string[] = ['cachorro', 'gato', 'elefante'];
console.log(animais);

// Objetos
let carro: {
    nome: string,
    ano: number,
    preco: number
};

carro = { nome: 'Fusca', ano: 1980, preco: 10000 };
console.log(carro);

// Função
function soma(a: number, b: number): number {
    return a + b;
}
console.log(soma(1, 2));