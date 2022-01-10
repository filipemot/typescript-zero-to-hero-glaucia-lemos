export {};

// IF
const max = 1000;
let counter = 100;

if (counter < max) {
  counter++;
}

console.log(counter);

const permissaoIdadeDirigir = 18;

if (permissaoIdadeDirigir >= 18) {
  console.log('Pode dirigir');
}

//If Else
const permissaoIdadeDirigir01 = 18;

if (permissaoIdadeDirigir01 >= 17) {
  console.log('Pode dirigir');
} else {
  console.log('Não pode dirigir');
}

//Else-If
let desconto: number;

const valorCompra = 14;

if (valorCompra > 0 && valorCompra <= 5) {
  desconto = 5;
} else if (valorCompra > 5 && valorCompra <= 10) {
  desconto = 10;
} else {
  desconto = 0.2;
}

console.log(`Você teve um desconto de....${desconto}`);

//Ternário
const idadeVotacao = 18;

console.log(idadeVotacao >= 18 ? 'Você pode votar' : 'Você não pode votar');
