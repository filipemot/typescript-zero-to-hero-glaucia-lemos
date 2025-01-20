/**
 * arquivo: validators/index.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Luis Filipe <Twitter: @FilipeMotta17>
 */

import EmailValidator from './email-validator';
import { Validator } from './validator';
import { ZipCodeValidator } from './zipcode-validator';

export { Validator, EmailValidator, ZipCodeValidator };
