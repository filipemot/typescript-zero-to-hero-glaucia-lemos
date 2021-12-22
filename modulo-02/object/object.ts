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

//Readonly Object
interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string;
}

function onboarding05(funcionario: Pessoa05) {
  //funcionario.email = '121'; Você não consegue modificar o valor do email por ser readonly
  return `Olá ${funcionario.nome} você é ${funcionario.funcao} e gosta de ${funcionario.linguagem}`;
}

console.log(
  onboarding05({
    nome: 'João',
    funcao: 'Programador',
    linguagem: 'JavaScript',
    email: 'teste@teste.com',
  }),
);

// Tipos de Extensão / heranças
interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Fillha extends Mae, Pai {
  idade: number;
}

const filha: Fillha = {
  nome: 'Maria',
  sobrenome: 'Silva',
  idade: 27,
};

console.log(filha);

// Tipos de Interseção / Combinando tipos
interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato;

// Generic Objetos
type Usuario = {
  nome: string;
  email: string;
};

type Admin = {
  nome: string;
  email: string;
  admin: true;
};

const usuario: Usuario = {
  nome: 'João',
  email: 'teste@teste.com',
};

const admin: Admin = {
  nome: 'João',
  email: 'teste@teste.com',
  admin: true,
};

function acessarSistema(usuario: Usuario) {
  return usuario;
}

console.log(acessarSistema(usuario));

function acessarSistema2<T>(usuario: T) {
  return usuario;
}

console.log(acessarSistema2(usuario));
console.log(acessarSistema2(admin));
