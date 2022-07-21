class Funcionario {
  readonly dataNascimento: Date;

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

const funcionario = new Funcionario(new Date(1988, 5, 15));
//funcionario.dataNascimento = new Date(1988, 5, 15); //Erro de compilação

console.log(funcionario.dataNascimento);
