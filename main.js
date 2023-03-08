// Supongamos que tenemos la siguiente cadena:

const cadena = "Hola mundo!";

// Y queremos obtener la subcadena "mundo" que está en medio de la cadena. Podemos hacerlo de la siguiente manera utilizando el método slice():

const subcadena = cadena.slice(5, 10);

// En este caso, el método slice() toma los caracteres que están entre las posiciones 5 y 10 de la cadena original (la posición 0 es el primer carácter de la cadena), creando una nueva subcadena que se guarda en la variable subcadena. Ahora podemos mostrar esta subcadena en una salida de datos:

console.log(subcadena); // "mundo"

// El método slice() nos ha permitido obtener una parte de la cadena original. También es posible utilizar valores negativos para contar desde el final de la cadena:

const subcadena1 = cadena.slice(-6, -1);
console.log(subcadena1); // "mundo"

// utilizamos valores negativos para contar desde el final de la cadena, y obtenemos la misma subcadena que en el ejemplo anterior.