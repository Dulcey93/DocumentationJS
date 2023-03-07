const mensaje = 'Hola Mundo!';
const ultimoIndice = mensaje.lastIndexOf('o');
console.log(ultimoIndice); // salida: 9

// En este ejemplo, el método String.lastIndexOf() se utiliza para obtener el índice de la última aparición de un carácter o subcadena dada en una cadena de texto. La variable mensaje contiene una cadena de texto que dice "Hola Mundo!". Luego, el método lastIndexOf() se utiliza para obtener el índice de la última aparición del carácter "o". El resultado se almacena en la variable ultimoIndice.

// En este ejemplo, el resultado impreso en la consola es 9, que es el índice de la última aparición del carácter "o". Si el carácter no hubiera aparecido en la cadena de texto, el resultado habría sido -1. Es importante tener en cuenta que lastIndexOf() devuelve el índice de la última aparición de la subcadena. Si la subcadena aparece varias veces en la cadena de texto, lastIndexOf() solo devuelve el índice de la última aparición.