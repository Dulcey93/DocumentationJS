// Supongamos que tenemos la siguiente cadena:

const cadena = "Hola mundo!";

// Y queremos obtener la subcadena "mundo" que está en medio de la cadena. Podemos hacerlo de la siguiente manera utilizando el método substr():

const subcadena = cadena.substr(5, 5);

// En este caso, el método substr() toma los 5 caracteres que están a partir de la posición 5 de la cadena original, creando una nueva subcadena que se guarda en la variable subcadena. Ahora podemos mostrar esta subcadena en una salida de datos:

console.log(subcadena); // "mundo"

// Como puedes ver, el método substr() también nos ha permitido obtener una parte de la cadena original. También es posible utilizar valores negativos para contar desde el final de la cadena:

const subcadena1 = cadena.substr(-6, 5);
console.log(subcadena1); // "mundo"

// En este caso, utilizamos valores negativos para contar desde el final de la cadena, y obtenemos la misma subcadena que en el ejemplo anterior.