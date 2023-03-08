// Supongamos que tenemos la siguiente cadena:

const cadena = "Hola, ¿cómo estás?, espero que bien.";

// Y queremos dividir esta cadena en un arreglo de subcadenas, utilizando como separador la coma seguida de un espacio (, ). Podemos hacerlo de la siguiente manera utilizando el método split():

const arreglo = cadena.split(", ");


// En este caso, el método split() divide la cadena original en varias subcadenas, cada vez que encuentra el separador , en la cadena original. Las subcadenas resultantes se guardan en un arreglo que se asigna a la variable arreglo. Ahora podemos mostrar este arreglo en una salida de datos:

console.log(arreglo); // ["Hola", "¿cómo estás?", "espero que bien."]

// Como puedes ver, el método split() nos ha permitido dividir la cadena original en varias subcadenas, utilizando como separador la coma seguida de un espacio. También es posible utilizar otros separadores, como por ejemplo un espacio simple ( ), una letra, un número, etc.

const arreglo1 = cadena.split(" "); // ["Hola,", "¿cómo", "estás?,", "espero", "que", "bien."]
const arreglo2 = cadena.split("?"); // ["Hola, ¿cómo estás,", " espero que bien."]

// En el primer ejemplo, hemos utilizado un espacio simple como separador, dividiendo la cadena en cada lugar donde hay un espacio en la cadena original. En el segundo ejemplo, hemos utilizado el signo de interrogación como separador, dividiendo la cadena en cada lugar donde hay un signo de interrogación en la cadena original.