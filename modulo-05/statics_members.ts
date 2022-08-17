export { };

// ==> Exemplo 01: Propriedades Estáticas
class Funcionario {
  static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    // nome classe + nome propriedade
    Funcionario.contratacoes++;
  }
}

const funcionario_01 = new Funcionario('Glaucia', 'Lemos', 'Developer');
const funcionario_02 = new Funcionario('Jurema', 'Lemos', 'Professora');
console.log(Funcionario.contratacoes);
