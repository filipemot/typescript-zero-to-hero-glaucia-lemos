export {};

class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string){
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

let pessoa = new Pessoa('João', 'Silva');
console.log(pessoa.nomeCompleto());


