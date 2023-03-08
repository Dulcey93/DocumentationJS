// El método padEnd() se utiliza para agregar caracteres al final de una cadena hasta que la cadena tenga una longitud determinada. Esto puede ser útil para formatear cadenas o para alinearlas correctamente en una salida de datos.

const nombre = "Juan";
const nombreFormateado = nombre.padEnd(20, " ");

console.log(nombre); // "Juan"
console.log(nombreFormateado); // "Juan                "

// la cadena nombre tiene una longitud de 4 caracteres, mientras que la cadena nombreFormateado tiene una longitud de 20 caracteres después de haber sido formateada con espacios en blanco agregados al final.