// Supongamos que tenemos la siguiente cadena:

const cadena = "Hola mundo!";

// Y queremos obtener la subcadena "mundo" que está en medio de la cadena. Podemos hacerlo de la siguiente manera utilizando el método substring():

const subcadena = cadena.substring(5, 10);


// En este caso, el método substring() toma los caracteres que están entre las posiciones 5 y 10 de la cadena original (sin incluir el caracter en la posición 10), creando una nueva subcadena que se guarda en la variable subcadena. Ahora podemos mostrar esta subcadena en una salida de datos:

console.log(subcadena); // "mundo"

// Como puedes ver, el método substring() nos ha permitido obtener una parte de la cadena original. También es posible utilizar valores negativos para contar desde el final de la cadena:

const subcadena1 = cadena.substring(5, -2);
console.log(subcadena1); // "Hola"

// En este caso, el método substring() interpreta el valor negativo como si fuera 0, por lo que toma los caracteres desde el inicio de la cadena hasta la posición -2 (sin incluir el caracter en la posición -2). De esta manera, obtenemos la subcadena "Hola".