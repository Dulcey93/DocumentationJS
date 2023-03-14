// Clausura: Función incr()
function cont (num) {

    return function () {
      num++;
      return num;
    };
  }


  const incr = cont(5)
  
  typeof incr; // 'function'
  incr(); // 1
  incr(); // 2
  incr(); // 3
  console.log(incr())
  console.log(incr())