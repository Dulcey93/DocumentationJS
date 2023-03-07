// El método String.fromCharCode() no es parte de ES6, sino que es un método heredado de versiones anteriores de JavaScript. Sin embargo, todavía se puede utilizar en la versión actual de JavaScript (ES6).

const codigo1 = 72;
const codigo2 = 111;
const codigo3 = 108;
const codigo4 = 97;

const texto = String.fromCharCode(codigo1, codigo2, codigo3, codigo4);
console.log(texto); // salida: "Hola"

// En este ejemplo, el método String.fromCharCode() se utiliza para crear una cadena de texto a partir de los códigos de caracteres Unicode de los caracteres "H", "o", "l" y "a". Los códigos de caracteres Unicode se especifican como argumentos separados por comas para el método.