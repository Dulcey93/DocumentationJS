const mensaje1 = 'árbol';
const mensaje2 = 'zorro';
const resultado = mensaje1.localeCompare(mensaje2);
console.log(resultado); // salida: -23

// En este ejemplo, el método String.localeCompare() se utiliza para comparar dos cadenas de texto y devolver un número que indica si la cadena actual es mayor, menor o igual a la otra cadena en orden lexicográfico, teniendo en cuenta las reglas de ordenamiento de caracteres para el idioma y la región especificados. Las variables mensaje1 y mensaje2 contienen cadenas de texto que dicen "árbol" y "zorro", respectivamente. Luego, el método localeCompare() se utiliza para comparar las cadenas de texto. El resultado se almacena en la variable resultado.

// En este ejemplo, el resultado impreso en la consola es -23, lo que indica que la cadena mensaje1 ("árbol") es menor que la cadena mensaje2 ("zorro") en orden lexicográfico para el idioma y la región especificados. Si las cadenas de texto fueran iguales, el resultado habría sido 0. Si la cadena mensaje1 fuera mayor que la cadena mensaje2, el resultado habría sido un número positivo.