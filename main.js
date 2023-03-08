// El método padStart() se utiliza para agregar caracteres al inicio de una cadena hasta que la cadena tenga una longitud determinada. Esto puede ser útil para formatear cadenas o para alinearlas correctamente en una salida de datos.

const numero = "23";
const numeroFormateado = numero.padStart(5, "0");

console.log(numero); // "23"
console.log(numeroFormateado); // "00023"


// la cadena numero tiene una longitud de 2 caracteres, mientras que la cadena numeroFormateado tiene una longitud de 5 caracteres después de haber sido formateada con ceros agregados al inicio.