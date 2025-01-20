/**
 * arquivo: main.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Luis Filipe <Twitter: @FilipeMotta17>
 */

import EmailValidator from './aula-911-modules/validators/email-validator';
import { ZipCodeValidator } from './aula-911-modules/validators/zipcode-validator';

const email = 'glaucia.lemos@email.com';
const validator = new EmailValidator();
const result = validator.isValid(email);

console.log(`O e-mail ${email} é válido? ${result}`);

const validator2 = new ZipCodeValidator();
const result2 = validator2.isValid('12345');

console.log(`O CEP 12345 é válido? ${result2}`);
