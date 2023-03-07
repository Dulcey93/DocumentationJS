const mensaje = 'La vida es bella';
const expresionRegular = /vida/;
const resultado = mensaje.match(expresionRegular);
console.log(resultado); // salida: ["vida", index: 3, input: "La vida es bella", groups: undefined]

// En este ejemplo, el método String.match() se utiliza para buscar una expresión regular en una cadena de texto y devolver un array que contiene las coincidencias encontradas. La variable mensaje contiene una cadena de texto que dice "La vida es bella". Luego, se define una expresión regular que busca la palabra "vida". El método match() se utiliza para buscar la expresión regular en la cadena de texto. El resultado se almacena en la variable resultado.

// En este ejemplo, el resultado impreso en la consola es ["vida", index: 3, input: "La vida es bella", groups: undefined]. Este es un array que contiene la cadena de texto que coincide con la expresión regular y algunos metadatos adicionales, como el índice donde se encontró la coincidencia en la cadena de texto. Si no se encontró ninguna coincidencia, el resultado sería null. El método match() también se puede utilizar con expresiones regulares que contienen grupos de captura.

// cómo utilizar grupos de captura con el método String.match() en un String en ES6:

const mensaje1 = 'Mi número de teléfono es 123-456-7890';
const expresionRegular1 = /(\d{3})-(\d{3})-(\d{4})/;
const resultado1 = mensaje.match(expresionRegular1);
console.log(resultado1); // salida: ["123-456-7890", "123", "456", "7890", index: 23, input: "Mi número de teléfono es 123-456-7890", groups: undefined]

// En este ejemplo, se utiliza el método String.match() para buscar una expresión regular que incluye tres grupos de captura en una cadena de texto que contiene un número de teléfono. La expresión regular busca un patrón de tres dígitos, un guión, tres dígitos, otro guión y cuatro dígitos. Cada grupo de dígitos se captura en un grupo de captura diferente, utilizando paréntesis. El método match() devuelve un array que incluye la cadena de texto que coincide con la expresión regular y cada uno de los grupos de captura.

// En este ejemplo, el resultado impreso en la consola es ["123-456-7890", "123", "456", "7890", index: 23, input: "Mi número de teléfono es 123-456-7890", groups: undefined]. La primera posición del array contiene la cadena de texto que coincide con la expresión regular, seguida de cada uno de los grupos de captura. En este caso, los grupos de captura son los tres grupos de tres dígitos que conforman el número de teléfono. Si la expresión regular no encuentra una coincidencia, el resultado es null.