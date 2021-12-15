enum Idioma {
  Portugues,
  Frances,
  Ingles,
  Espanhol,
}

enum IdiomaStringEnum {
  Portugues = 'PT-BR',
  Frances = 'FR',
  Ingles = 'EN',
  Espanhol = 'ES',
}

console.log(Idioma);
console.log(Idioma.Portugues);

console.log(IdiomaStringEnum);
console.log(IdiomaStringEnum.Portugues);

//Enum com const
const enum Comida {
  Hamburguer,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Hamburguer));
console.log(comida(Comida.Churrasco));
console.log(comida(5));

const enum Comida2 {
  Hamburguer = 'Hamburguer',
  Massa = 'Massa',
  Pizza = 'Pizza',
  Torta = 'Torta',
  Churrasco = 'Churrasco',
}

function comida2(c: Comida2) {
  return 'Comidas muito apetitosas!';
}

console.log(comida2(Comida2.Hamburguer));
console.log(comida2(Comida2.Churrasco));
//console.log(comida2(5)); //Não deixa utilizar

// Quando usar enum
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log(concluidaTarefa.descricao);
}
