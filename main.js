// El método normalize() se utiliza para normalizar una cadena de caracteres, es decir, para convertir caracteres con diferentes formas de escritura (como acentos, diéresis, entre otros) a una forma común. Esto puede ser útil para comparar cadenas o para garantizar que se estén utilizando los caracteres correctos.

// Supongamos que tenemos el siguiente texto con una letra "á" escrita de dos maneras diferentes:

const texto = "Este texto tiene una letra á escrita de dos formas diferentes: á y á";

// Podemos utilizar el método normalize() para convertir ambas formas de escritura en una forma común utilizando el parámetro "NFD" que indica la normalización utilizando la forma canónica de descomposición de caracteres:

const textoNormalizado = texto.normalize("NFD");

// En este caso, la cadena texto se normaliza y se guarda en la variable textoNormalizado. Ahora podemos utilizar este texto normalizado para compararlo con otras cadenas o para realizar otras operaciones.

console.log(texto); // "Este texto tiene una letra á escrita de dos formas diferentes: á y á"
console.log(textoNormalizado); // "Este texto tiene una letra á escrita de dos formas diferentes: á y á"

// la cadena texto contiene la letra "á" escrita de dos formas diferentes, mientras que la cadena textoNormalizado contiene ambas letras escritas de la misma forma ("á") después de haber sido normalizadas.