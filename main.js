// Los operadores de comparación en JavaScript se utilizan para comparar dos valores y devolver un valor booleano (verdadero o falso) que indica si la comparación es verdadera o falsa. Los siguientes son algunos de los operadores de comparación en JavaScript:

//     ==: Compara si dos valores son iguales (no estrictamente iguales).
//     ===: Compara si dos valores son iguales y del mismo tipo de datos (estrictamente iguales).
//     !=: Compara si dos valores no son iguales (no estrictamente diferentes).
//     !==: Compara si dos valores no son iguales y del mismo tipo de datos (estrictamente diferentes).
//     <: Compara si el valor de la izquierda es menor que el valor de la derecha.
//     >: Compara si el valor de la izquierda es mayor que el valor de la derecha.
//     <=: Compara si el valor de la izquierda es menor o igual que el valor de la derecha.
//     >=: Compara si el valor de la izquierda es mayor o igual que el valor de la derecha.

// A continuación se presentan algunos ejemplos de uso de estos operadores:

let a = 5;
let b = 10;
let c = "5";

console.log(a == b);    // false
console.log(a === c);   // false
console.log(a != b);    // true
console.log(a !== c);   // true
console.log(a < b);     // true
console.log(a > b);     // false
console.log(a <= b);    // true
console.log(a >= b);    // false

// En este ejemplo, se define tres variables: a, b y c. Luego, se realizan algunas operaciones de comparación utilizando los operadores mencionados anteriormente. Por ejemplo, la primera operación a == b devuelve false porque a es igual a 5 y b es igual a 10. También se realiza la operación a === c que devuelve false porque aunque a y c tienen el mismo valor, c es un string y a es un número.