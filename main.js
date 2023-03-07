const emoji = '👍🏼';
// El paramaetro que recibe el metodo es el indice del arreglo
// Para obtener el valor del punto de código Unicode de un carácter específico de este emoji, puedes usar el método .codePointAt() de la siguiente manera:
console.log(emoji.codePointAt(0)); // salida: 128077
// También puedes obtener el valor del punto de código Unicode de cualquier otro carácter del emoji, especificando el índice del carácter como argumento para el método .codePointAt(). Por ejemplo, para obtener el valor del punto de código Unicode del segundo carácter del emoji, puedes hacer lo siguiente:
console.log(emoji.codePointAt(1)); // salida: 127995
// En este caso, el método .codePointAt() devuelve el valor del punto de código Unicode del segundo carácter del emoji almacenado en la variable emoji, que es 127995 (el valor del punto de código Unicode correspondiente a la tez de piel clara). Cabe destacar que los índices de los caracteres comienzan en 0.