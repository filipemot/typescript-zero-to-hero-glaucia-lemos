export {};

//Exemplo 01
class Animal {
  mover(distancia = 0){
    console.log(`Animal se movendo ${distancia}m`);
  }
}

class Cachorro extends Animal {
  latir(){
    console.log('Au Au');
  }
}

const cachorro = new Cachorro();
cachorro.latir();
cachorro.mover(10);
cachorro.latir();

//Exemplo 02
class Pessoa {
  constructor(private nome: string, public sobrenome: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  retornarNomeCompleto(){
    return `${this.nome} ${this.sobrenome}`;
  }

  apresentarPessoa(){
    return `Olá, me chamo ${this.retornarNomeCompleto()}`;
  }
}

class Funcionario extends Pessoa {
  constructor(nome: string, sobrenome: string, private funcao: string){
    super(nome, sobrenome);
    this.funcao = funcao;
  }

  retornaNome_02(){
    return super.apresentarPessoa() + `, eu sou um ${this.funcao}`;
  }
}

const funcionario = new Funcionario('João', 'Silva', 'Programador');
console.log(funcionario.apresentarPessoa());
console.log(funcionario.retornarNomeCompleto());
console.log(funcionario.retornaNome_02());
