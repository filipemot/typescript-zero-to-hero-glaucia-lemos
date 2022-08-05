export {};

// ==> Exemplo 01 - Default Parameters
function descontoCompra(preco: number, desconto = 0.08) {
  return preco * (1 - desconto);
}

console.log(descontoCompra(100)); //92

// ==> Exemplo 02
function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!') {
  return saudar + ' ' + mensagem + '!';
}

console.log(exibirMensagem('JavaScript Developers'));

// ==> Exemplo 03
function exibirNome(nome: string, sobrenome = 'Mota') {
  return nome + ' ' + sobrenome;
}

const resultado_1 = exibirNome('Filipe');
const resultado_2 = exibirNome('Filipe', undefined);
// const resultado_3 = exibirNome('Filipe', 'de Souza', 'Senhorita');
const resultado_4 = exibirNome('Filipe', 'Mota');

console.log(resultado_1);
console.log(resultado_2);
// console.log(resultado_3);
console.log(resultado_4);
