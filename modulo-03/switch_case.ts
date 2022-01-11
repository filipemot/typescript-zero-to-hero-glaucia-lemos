export {};

let flor = 'tulipa';

switch (flor) {
  case 'tulipa':
    console.log('tulipa');
    break;
  case 'rosa':
    console.log('rosa');
    break;
  case 'margarita':
    console.log('margarita');
    break;
  default:
    console.log('outra flor');
}

flor = 'rosa';

let diaUtilSemana = 5;

switch (diaUtilSemana) {
  case 0:
    console.log('Domingo');
    break;
  case 1:
    console.log('Segunda');
    break;
  case 2:
    console.log('Terça');
    break;
  case 3:
    console.log('Quarta');
    break;
  case 4:
    console.log('Quinta');
    break;
  case 5:
    console.log('Sexta');
    break;
  default:
    console.log('Não é dia útil');
}

diaUtilSemana = 4;
