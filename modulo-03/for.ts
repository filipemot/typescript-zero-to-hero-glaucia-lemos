export {};

for (let i = 0; i < 10; i++) {
  console.log(i);
}

//For of
const arrayNumeros = [10, 20, 30, 40, 50];

for (const i of arrayNumeros) {
  console.log(i);
}

//For in
const arrayNumeros_01 = [5, 4, 3, 2, 1];

for (const i in arrayNumeros_01) {
  console.log(i);
}

//sort
const ordemNumerica: number[] = arrayNumeros_01.sort();
console.log(ordemNumerica);
