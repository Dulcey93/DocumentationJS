/* Ejemplo de Callbacks reutilizables */
/* Supongamos que queremos crear una función que tome una lista de números y una función de transformación como argumentos, y devuelva una nueva lista que contenga los números transformados. En este ejemplo, utilizaremos callbacks reutilizables para permitir que los usuarios pasen cualquier función de transformación que deseen: */
const transformarLista = (lista, transformacion) => {
    const listaTransformada = [];
    lista.forEach(numero => {
        listaTransformada.push(transformacion(numero));
    });
    return listaTransformada;
}

const duplicarNumero = numero => numero * 2;
const elevarAlCuadrado = numero => numero ** 2;

const numeros = [1, 2, 3, 4, 5];

const numerosDuplicados = transformarLista(numeros, duplicarNumero);
console.log('Números duplicados:', numerosDuplicados);

const numerosAlCuadrado = transformarLista(numeros, elevarAlCuadrado);
console.log('Números al cuadrado:', numerosAlCuadrado);


/* En este ejemplo, la función transformarLista toma una lista de números y una función de transformación como argumentos, y devuelve una nueva lista que contiene los números transformados. La función duplicarNumero y la función elevarAlCuadrado son dos funciones de transformación que se pueden pasar a la función transformarLista.

Luego, creamos una lista de números y llamamos a la función transformarLista dos veces, pasando la lista de números y una función de transformación diferente en cada llamada. */