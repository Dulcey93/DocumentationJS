/* Los operadores lógicos en JavaScript son && (y), || (o) y ! (no).

El operador && evalúa dos expresiones y devuelve true si ambas son verdaderas. De lo contrario, devuelve false. Por ejemplo: */

const a = 5;
const b = 10;
const c = 15;

console.log(a < b && b < c); // true
console.log(a < b && c < b); // false

/* El operador || evalúa dos expresiones y devuelve true si al menos una es verdadera. De lo contrario, devuelve false. Por ejemplo: */

const d = 5;
const e = 10;
const f = 15;

console.log(d < e || e < f); // true
console.log(d < 3 || f < e); // false

/* El operador ! niega una expresión. Si la expresión es verdadera, devuelve false. Si la expresión es falsa, devuelve true. Por ejemplo: */

const g = 5;
const h = 10;

console.log(!(g < h)); // false
console.log(!(g > h)); // true

/* Estos operadores son muy útiles para controlar el flujo de un programa y tomar decisiones basadas en la evaluación de expresiones. */

/* Los operadores bitwise en JavaScript son utilizados para realizar operaciones a nivel de bits en números enteros. A continuación se describen los operadores bitwise disponibles en JavaScript:

    & (AND): Retorna un 1 en cada posición donde ambos operandos tienen un 1.
    | (OR): Retorna un 1 en cada posición donde al menos uno de los operandos tiene un 1.
    ^ (XOR): Retorna un 1 en cada posición donde exactamente uno de los operandos tiene un 1.
    ~ (NOT): Retorna el complemento a uno del operando, es decir, cambia los 0s por 1s y los 1s por 0s.
    << (left shift): Desplaza los bits del primer operando hacia la izquierda la cantidad de veces indicada por el segundo operando.
    >> (sign-propagating right shift): Desplaza los bits del primer operando hacia la derecha la cantidad de veces indicada por el segundo operando, propagando el signo del número original (es decir, si es positivo, se llenan con 0s a la izquierda, si es negativo, se llenan con 1s a la izquierda).
    >>> (zero-fill right shift): Desplaza los bits del primer operando hacia la derecha la cantidad de veces indicada por el segundo operando, llenando con 0s a la izquierda.

A continuación se muestran algunos ejemplos de cómo utilizar estos operadores bitwise en JavaScript: */

// AND
const and1 = 5;        // 0101
const and2 = 3;        // 0011
const and3 = and1 & and2;    // 0001
console.log(and3);     // 1

// OR
const or1 = 5;        // 0101
const or2 = 3;        // 0011
const or3 = or1 | or2;    // 0111
console.log(or3);     // 7

// XOR
const xor1 = 5;        // 0101
const xor2 = 3;        // 0011
const xor3 = xor1 ^ xor2;    // 0110
console.log(xor3);     // 6

// NOT
const not1 = 5;        // 0101
const not2 = ~not1;       // 1010
console.log(not2);     // -6

// Left shift
const left = 5;        // 0101
const m = left << 2;   // 010100
console.log(m);     // 20

// Sign-propagating right shift
const n = -10;      // 11111111111111111111111111110110
const o = n >> 2;   // 11111111111111111111111111111101
console.log(o);     // -3

// Zero-fill right shift
const p = -10;      // 11111111111111111111111111110110
const q = p >>> 2;  // 00111111111111111111111111111101
console.log(q);     // 1073741821

/* 
Es importante tener en cuenta que los operadores bitwise solamente funcionan con números enteros de 32 bits en JavaScript. Si se intenta utilizarlos con números de coma flotante o números enteros de más de 32 bits, se realizará una conversión implícita del número a un entero de 32 bits antes de realizar la operación bitwise. */