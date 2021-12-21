function funcao(): void {
  console.log('Void');
}

const funcao2 = () => {
  console.log('Void');
};

funcao();
funcao2();

let variavelTeste: void = undefined; // Declaração de variável com tipo void, valores aceitos são undefined
//variavelTeste = 1; Apresenta Erro
//variavelTeste = null; Apresenta Erro

