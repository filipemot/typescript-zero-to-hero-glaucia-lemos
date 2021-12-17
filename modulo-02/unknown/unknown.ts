let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi';

console.log(valorVariavel);

let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed(2)); // Não dá erro
//console.log(algumaCoisaUnknown.toFixed(2)); // Erro!
