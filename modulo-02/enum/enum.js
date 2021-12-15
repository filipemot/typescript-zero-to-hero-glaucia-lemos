"use strict";
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Frances"] = 1] = "Frances";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Espanhol"] = 3] = "Espanhol";
})(Idioma || (Idioma = {}));
;
var IdiomaStringEnum;
(function (IdiomaStringEnum) {
    IdiomaStringEnum["Portugues"] = "PT-BR";
    IdiomaStringEnum["Frances"] = "FR";
    IdiomaStringEnum["Ingles"] = "EN";
    IdiomaStringEnum["Espanhol"] = "ES";
})(IdiomaStringEnum || (IdiomaStringEnum = {}));
;
console.log(Idioma);
console.log(Idioma.Portugues);
console.log(IdiomaStringEnum);
console.log(IdiomaStringEnum.Portugues);
