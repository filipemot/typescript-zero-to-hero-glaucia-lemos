//Optional Parameter
function informacaoDadosPessoas(
  idPessoa: number,
  nome: string,
  email?: string,
) {
  console.log('Id Funcionario ... : ', idPessoa, 'Nome ... : ', nome);
  if (email !== undefined) {
    console.log('Email ... : ', email);
  }
}

informacaoDadosPessoas(1, 'João');
informacaoDadosPessoas(2, 'João', 'teste@teste.com.br');

function mensagemLog(mensagem: string, usuarioId?: number){
  const horaLog = new Date().toLocaleTimeString();
  console.log(horaLog, mensagem, usuarioId || ' Usuário não conectado!');
}

mensagemLog('Atualizar Página!');
mensagemLog('Usuário Conectado com Sucesso!', 1);

type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};

let pessoa: Pessoa;
pessoa = {
  idFuncionario: 1,
  nome: 'João',
};

console.log(pessoa);

pessoa = {
  idFuncionario: 1,
  nome: 'João',
  idade: 25,
  email: 'teste@teste.com'
};

console.log(pessoa);
