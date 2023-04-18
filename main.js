/* Ejemplo 1*/
// En este ejemplo, la función miFuncion recibe un argumento callback, que es una función. Después de imprimir un mensaje en la consola, miFuncion llama a la función callback que se le ha pasado como argumento.
function miFuncion(callback) {
    console.log('Mi función ha sido invocada.');
    callback();
}
//La función miFuncion recibe como parametro la funcion descrita en los argumentos
miFuncion(function () {
    console.log('Este es el callback.');
});
/* Ejemplo 2 */
// En este ejemplo, la función sumar recibe dos números y una función callback. Después de sumar los números, la función callback se invoca con el resultado de la suma como argumento.
function sumar(a, b, callback) {
    let resultado = a + b;
    callback(resultado);
}

sumar(2, 3, function (resultado) {
    console.log(`El resultado de la suma es: ${resultado}`);
});
/* Ejemplo 3 */
// En este ejemplo, la función descargarDatos recibe una URL y una función callback. Después de simular una descarga de datos, la función callback se invoca con los datos descargados como argumento.
function descargarDatos(url, callback) {
    setTimeout(function () {
        console.log(`Descargando datos de ${url}...`);
        let datos = "Estos son los datos descargados.";
        callback(datos);
    }, 3000);
}

descargarDatos("https://www.ejemplo.com", function (datos) {
    console.log(`Los datos descargados son: ${datos}`);
});
/* ===> CALLBACKS CON FUNCIONES FLECHA <=== */

/* Ejemplo 1 */
let miFuncion = (callback) => {
    console.log('Mi función ha sido invocada.');
    callback();
}

miFuncion(() => {
    console.log('Este es el callback.');
});

/* Ejemplo 2 */
let sumar = (a, b, callback) => {
    let resultado = a + b;
    callback(resultado);
}

sumar(2, 3, (resultado) => {
    console.log(`El resultado de la suma es: ${resultado}`);
});

/* Ejemplo 3 */
let descargarDatos = (url, callback) => {
    setTimeout(() => {
        console.log(`Descargando datos de ${url}...`);
        let datos = "Estos son los datos descargados.";
        callback(datos);
    }, 3000);
}

descargarDatos("https://www.ejemplo.com", (datos) => {
    console.log(`Los datos descargados son: ${datos}`);
});
