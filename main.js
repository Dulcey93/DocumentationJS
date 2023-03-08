// El método String.raw() en ES6 se utiliza para crear una cadena de caracteres en bruto (raw string) que contiene secuencias de escape de caracteres literales tal como están escritos. Aquí te muestro un ejemplo:

const name = "John";
const age = 25;

const message = String.raw`Hello, my name is ${name} and I am ${age} years old.`;

console.log(message); // output: "Hello, my name is John and I am 25 years old."

// En este ejemplo, la plantilla de cadena de caracteres se define usando el método String.raw(), que toma como argumento un array de literales de plantilla y los valores interpolados. En la plantilla, los valores interpolados se insertan en los espacios reservados ${}. La cadena de caracteres en bruto devuelta por el método String.raw() conserva todas las secuencias de escape de caracteres literales en su forma original.

// El resultado es la cadena de caracteres "Hello, my name is John and I am 25 years old." que se guarda en la variable message y se imprime en la consola mediante console.log().