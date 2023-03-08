const euler = Math.E
const logn2 = Math.LN2
const logn10 = Math.LN10
const log2E = Math.LOG2E
const logn10E = Math.LOG10E
const PI = Math.PI
const raiz = Math.SQRT1_2
const raiz2 = Math.SQRT2

console.log(euler);
console.log(logn2);
console.log(logn10);
console.log(log2E);
console.log(logn10E);
console.log(PI);
console.log(raiz);
console.log(raiz2);

/* ===> METODOS MATEMATICOS <=== */

Math.abs(-5);             // 5
Math.sign(-5);            // -1
Math.exp(1);              // e, o sea, 2.718281828459045
Math.expm1(1);            // 1.718281828459045
Math.max(1, 40, 5, 15);   // 40
Math.min(5, 10, -2, 0);   // -2
Math.pow(2, 10);          // 1024 (Equivale a 2**10)
Math.sqrt(2);             // 1.4142135623730951 (Equivale a Math.SQRT2)
Math.cbrt(2);             // 1.2599210498948732
Math.imul(0xffffffff, 7); // -7

// Ejemplo de clz32 (count leading zeros)
const x = 1;
"0".repeat(Math.clz32(x)) + x.toString(2);
// Devuelve "00000000000000000000000000000001"



/* ===> RANDOM <===*/

// Obtenemos un número al azar entre [0, 1) con 16 decimales
let y = Math.random();

// Multiplicamos dicho número por el valor máximo que buscamos (5)
y = y * 5;

// Redondeamos inferiormente, quedándonos sólo con la parte entera
y = Math.floor(x);

/* ===> Métodos de logaritmos <===*/

Math.log(2);    // 0.6931471805599453
Math.log10(2);  // 0.3010299956639812
Math.log2(2);   // 1
Math.log1p(2);  // 1.0986122886681096

/* ===> Métodos de redondeo  <===*/

// Redondeo natural, el más cercano
Math.round(3.75);           // 4
Math.round(3.25);           // 3

// Redondeo superior (el más alto)
Math.ceil(3.75);            // 4
Math.ceil(3.25);            // 4

// Redondeo inferior (el más bajo)
Math.floor(3.75);           // 3
Math.floor(3.25);           // 3

// Redondeo con precisión
Math.round(3.123456789);    // 3
Math.fround(3.123456789);   // 3.1234567165374756

// Truncado (sólo parte entera)
Math.trunc(3.75);           // 3
Math.round(-3.75);          // -4
Math.trunc(-3.75);          // -3