// Función autoejecutable
(function () {
    console.log("Hola!!");
  })();
  
  // Función autoejecutable con parámetros
  (function (name) {
    console.log(`¡Hola, ${name}!`);
  })("Manz");
/*   Ten en cuenta, que si la función autoejecutable devuelve algún valor con return, a diferencia de las funciones por expresión, en este caso lo que se almacena en la variable es el valor que devuelve la función autoejecutada: */
  const f = (function (name) {
    return `¡Hola, ${name}!`;
  })("Manz");
  
  f; // '¡Hola, Manz!`
  typeof f; // 'string'