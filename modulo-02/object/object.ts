export {};

const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  idade: 27,
  funcao: 'Programador',
};

console.log(pessoa);

// Object como parâmetros
function onboarding01(funcionario: { nome: string }) {
  return 'Olá ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'João' }));

// Objetos nomeados
interface Pessoa {
  nome: string;
  funcao: string;
}

function onboarding02(funcionario: Pessoa) {
  return 'Olá ' + funcionario.nome + ' você é ' + funcionario.funcao;
}

console.log(onboarding02({ nome: 'João', funcao: 'Programador' }));

//Type alias
type PessoaType = {
  nome: string;
  funcao: string;
  linguagem: string;
};

function onboarding03(funcionario: PessoaType) {
  return `Olá ${funcionario.nome} você é ${funcionario.funcao} e gosta de ${funcionario.linguagem}`;
}

console.log(
  onboarding03({
    nome: 'João',
    funcao: 'Programador',
    linguagem: 'JavaScript',
  }),
);

//Optinal Object
interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem?: string;
}

function onboarding04(funcionario: Pessoa04) {
  return `Olá ${funcionario.nome} você é ${funcionario.funcao} e gosta de ${funcionario.linguagem}`;
}

console.log(
  onboarding04({
    nome: 'João',
    funcao: 'Programador',
  }),
);
