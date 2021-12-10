let num1: number = 140.0;
let num2: number = 0x37CF;
let num3: number = 0o377;
let num4: number = 0b111001;

console.log("########### Number ############");

console.log("Number - Ponto Flutuante ...:", num1);
console.log("Number - Hexadecimal .......:",num2);
console.log("Number - Octal .............:",num3);
console.log("Number - Binário ...........:",num4);

console.log("\n########### BigInt ############");
let big1: bigint = 9007199254740991n;
let big2: bigint = 0b1000000000000000000000000000000011n;
let big3: bigint = 0x20000000003n;
let big4: bigint = 0o40000000000003n;

console.log("BigInt - Ponto Flutuante ...:",big1);
console.log("BigInt - Hexadecimal .......:",big2);
console.log("BigInt - Octal .............:",big3);
console.log("BigInt - Binário ...........:",big4);
