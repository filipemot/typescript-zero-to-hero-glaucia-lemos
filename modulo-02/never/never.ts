function error(message: string): never {
  throw new Error(message);
}

console.log(error('An error occurred!'));

function rejectMessage() {
  return error('Error: something went wrong');
}

console.log(rejectMessage());

//const loopInfinito = function loop() {
//  while (true) {
//    console.log('Loop infinito');
//  }
//};

//Diferença entre never e void
//const algumaCoisaVoid: void = null; // O tipo 'null' não pode ser atribuído ao tipo 'void'.
//const algumaCoisaNever: never = null; // O tipo 'null' não pode ser atribuído ao tipo 'never

//console.log(algumaCoisaVoid);
//console.log(algumaCoisaNever);
