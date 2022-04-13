function somarNumeros(...numerous: number[]) {
  let total = 0;
  numerous.forEach((num) => (total += num));
  return total;
}

console.log(somarNumeros(30, 20)); //50
console.log(somarNumeros(40, 50, 50, 40, 20)); //200
