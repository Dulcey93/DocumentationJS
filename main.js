// Supongamos que tenemos la siguiente cadena:

const cadena = "Hola mundo!";

// Y queremos reemplazar la palabra "mundo" por "amigos". Podemos hacerlo de la siguiente manera utilizando el método replace():

const nuevaCadena = cadena.replace("mundo", "amigos");

// En este caso, el método replace() busca la palabra "mundo" en la cadena original y la reemplaza por la palabra "amigos", creando una nueva cadena que se guarda en la variable nuevaCadena. Ahora podemos mostrar esta cadena en una salida de datos:

console.log(nuevaCadena); // "Hola amigos!"

// la palabra "mundo" ha sido reemplazada por la palabra "amigos" utilizando el método replace().

// Además, es posible utilizar expresiones regulares con el método replace() para hacer reemplazos más complejos. Por ejemplo, podemos utilizar una expresión regular para reemplazar todas las ocurrencias de una palabra en una cadena:

const cadena1 = "La casa es roja y la puerta es roja también.";
const nuevaCadena1 = cadena1.replace(/roja/g, "verde");
console.log(nuevaCadena1); // "La casa es verde y la puerta es verde también."

// En este caso, utilizamos la expresión regular /roja/g para buscar todas las ocurrencias de la palabra "roja" en la cadena original y reemplazarlas por la palabra "verde". El modificador "g" indica que la búsqueda se hará globalmente en toda la cadena.