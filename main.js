function sum(a, b, callback) {
    var result = a + b;
    callback(result);
  }
  
  function displayResult(value) {
    console.log("El resultado es:", value);
  }
  
  sum(10, 5, displayResult);
/* 
  En este ejemplo, tenemos una función sum que acepta dos números y un callback. La función suma los dos números y llama al callback con el resultado. Luego, tenemos una función displayResult que simplemente muestra el resultado en la consola.

Por último, llamamos a la función sum con los números 10 y 5, y pasamos la función displayResult como callback. Cuando se llama a la función sum, se calcula la suma y se llama al callback con el resultado. En este caso, el callback es la función displayResult, que muestra el resultado en la consola. */