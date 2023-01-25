/**
 * arquivo: intersectionTypes.ts
 * descrição: arquivo responsável por ensinar uso de 'Intersection Types' em TypeScript
 * author: Luis Filipe <Twitter: @FilipeMotta17>
 */

export = {};

// ==> Exemplo 01 - Intersection Types:

interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
  conta: 123456,
  agencia: 123,
  banco: "Banco do Brasil",
  nome: "Luis Filipe",
  email: "filipe@email.com",
  cpf: 123456789,
}

console.log(dadosCliente)

// ==> Exemplo 02 - Intersection Types:

interface IEndereco {
  rua: string;
  bairro: string;
  cidade: string;
}

interface IPessoa {
  nome: string;
  idade: number;
  profissao: string;
}

type IEnderecoPessoa = IEndereco & IPessoa;

const enderecoPessoa: IEnderecoPessoa = {
  nome: 'Luis Filipe',
  idade: 36,
  profissao: 'Software Engineer',
  rua: 'Rua Odete Moura',
  bairro: 'Jardim Primavera',
  cidade: 'São Paulo',
};

console.log(enderecoPessoa);
