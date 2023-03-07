const mensaje = 'Este es un ejemplo de un mensaje con varias palabras repetidas, como esta palabra: ejemplo. También aparece la palabra repetidas varias veces';
const expresionRegular = /(\w+)/g;
const coincidencias = mensaje.matchAll(expresionRegular);

for (const coincidencia of coincidencias) {
    console.log(`Coincidencia encontrada: "${coincidencia[0]}" en el índice ${coincidencia.index}`);
    // console.log(coincidencia);
}

// En este ejemplo, se utiliza el método matchAll() para buscar todas las palabras en una cadena de texto. La expresión regular utiliza el modificador g para buscar todas las coincidencias, y utiliza el conjunto de caracteres \w para encontrar cualquier palabra (una secuencia de caracteres alfanuméricos y guiones bajos). El método matchAll() devuelve un iterador que puede ser recorrido con un ciclo for...of.

// En el ciclo for...of, se itera sobre cada coincidencia encontrada, que es un objeto que contiene información sobre la coincidencia, incluyendo la cadena de texto que coincide con la expresión regular y el índice en la cadena de texto donde se encuentra la coincidencia. En este ejemplo, se imprime en la consola cada coincidencia encontrada, junto con su índice en la cadena de texto.