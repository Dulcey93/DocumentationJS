const codigo1 = 128077;
const codigo2 = 127995;
const codigo3 = 128516;

const emoji = String.fromCodePoint(codigo1, codigo2, codigo3);
console.log(emoji); // salida: "👍🏼💛😄"
// En este ejemplo, el método String.fromCodePoint() se utiliza para crear una cadena de texto que representa un emoji compuesto por tres caracteres Unicode diferentes. Los códigos de caracteres Unicode se especifican como argumentos separados por comas para el método.

// El método String.fromCodePoint() también puede tomar una cantidad variable de argumentos y concatenarlos en una cadena de texto. Por ejemplo:

const codigo4 = 97;
const codigo5 = 98;
const codigo6 = 99;
const codigo7 = 128520;

const texto = String.fromCodePoint(codigo4, codigo5, codigo6, codigo7);
console.log(texto); // salida: "abc😸"
