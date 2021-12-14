"use strict";
//Uso de Colchetes
console.log("\n**** Uso de Colchetes");
let frutasColchetes = ['Abacaxi', 'Maça'];
console.log(frutasColchetes);
//Uso de Array Object
console.log("\n**** Uso de Array Object");
let frutasArrayObject = ['Abacaxi', 'Maça'];
console.log(frutasArrayObject);
//Adicionando mais string com método push
console.log("\n**** Adicionando mais string com método push");
frutasArrayObject.push('Melão');
console.log(frutasArrayObject);
//Tamanho do Array
console.log("\n**** Tamanho do Array");
console.log("Tamanho:" + frutasArrayObject.length);
frutasArrayObject.push('Abacate');
console.log(frutasArrayObject);
console.log("Tamanho:" + frutasArrayObject.length);
//Spread Operator
console.log("\n**** Spread Operator");
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// Laço de Interação
console.log("\n**** Laço de Interação");
listaNumeros.forEach(x => {
    console.log(x);
});
