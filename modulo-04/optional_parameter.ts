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

