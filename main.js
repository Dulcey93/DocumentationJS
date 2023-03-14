// Si son funciones globales
const a = function () {
  console.log(this);
};
const b = () => {
  console.log(this);
};

a(); // Window
b(); // Window

/* Sin embargo, si utilizamos una función en el interior de un objeto, como suele ser el caso más habitual, si encontraremos diferencias. Observa que en la primera función, donde se utiliza una función tradicional, el this devuelve el objeto padre de la función.

Por otro lado, en la segunda función, donde se utiliza una función flecha, el this no devuelve el objeto padre de la función, sino que devuelve Window. */

padre = {
  a: function () {
    console.log(this);
  },
  b: () => {
    console.log(this);
  },
};

padre.a(); // padre
padre.b(); // Window