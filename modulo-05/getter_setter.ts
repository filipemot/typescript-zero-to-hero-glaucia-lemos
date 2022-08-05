export { };

class Quadrado{
    private _largura = 6;
    private _altura = 12;

    get calcularQuandrado(): number{
        return this._largura * this._altura;
    }
}

console.log(new Quadrado().calcularQuandrado);

class Pessoa {
  nome: string;
  retornarNome(setNome: string){
    this.nome = setNome;
  }
}

const pessoa = new Pessoa();
pessoa.retornarNome('João');
console.log('Meu nome é ...: ', pessoa.nome);
