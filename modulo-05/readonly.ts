export {};
//Emeplo 01
class Funcionario {
  readonly dataNascimento: Date;

  constructor(dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

const funcionario = new Funcionario(new Date(1988, 5, 15));
//funcionario.dataNascimento = new Date(1988, 5, 15); //Erro de compilação

// Exemplo 02
console.log(funcionario.dataNascimento);

class Funcionario_01 {
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

//Exemplo 03
class Funcionario_02 {

  nome: string;
  readonly codigoFuncionario: number;

  constructor(nome: string, codigoFuncionario: number) {
    this.nome = nome;
    this.codigoFuncionario = codigoFuncionario;
  }
}

const funcionario02 = new Funcionario_02('Glaucia Lemos', 8967);
funcionario02.nome = 'Glaucia Lemos';
//funcionario02.codigoFuncionario = 8967;//Erro de compilação

//Emeplo 04
interface IFuncionario {
  codigoFuncionario: number;
  nomeEmpregado: string;
}

const funcionario03: Readonly<IFuncionario> = {
  codigoFuncionario: 8967,
  nomeEmpregado: 'Glaucia Lemos',
};

//funcionario03.nomeEmpregado = 'Glaucia Lemos';//Erro de compilação

const funcionario04: IFuncionario = {
  codigoFuncionario: 8967,
  nomeEmpregado: 'Glaucia Lemos',
};

funcionario04.nomeEmpregado = 'Glaucia Lemos';

