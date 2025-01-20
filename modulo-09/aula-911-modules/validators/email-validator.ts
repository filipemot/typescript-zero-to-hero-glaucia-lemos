/**
 * arquivo: email-validator.ts
 * descrição: arquivo responsável por ensinar conceitos básicos sobre 'Modules'
 * data: 05/08/2023
 * author: Luis Filipe <Twitter: @FilipeMotta17>
 */

//import { Validator as FormValidator } from "./validator";
import { Validator } from './validator';

export default class EmailValidator implements Validator {
  isValid(s: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(s);
  }
}
