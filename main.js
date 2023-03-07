const mensaje = 'Hola Mundo!';
const indice = mensaje.search('Mundo');
console.log(indice); // salida: 5

// En este ejemplo, el método String.search() se utiliza para buscar la primera aparición de una expresión regular en una cadena de texto. La variable mensaje contiene una cadena de texto que dice "Hola Mundo!". Luego, el método search() se utiliza para buscar la expresión regular "Mundo" en la cadena de texto. El resultado se almacena en la variable indice.

// En este ejemplo, el resultado impreso en la consola es 5, que es el índice de la primera aparición de la expresión regular "Mundo". Si la expresión regular no hubiera aparecido en la cadena de texto, el resultado habría sido -1. Es importante tener en cuenta que search() solo busca la primera aparición de la expresión regular. Si la expresión regular aparece varias veces en la cadena de texto, search() solo devuelve el índice de la primera aparición.