/* Ejemplo de Callbacks anidados */
//Supongamos que queremos cargar una lista de usuarios de una API utilizando callbacks anidados. En este ejemplo, utilizaremos la función fetch para realizar la solicitud HTTP y recuperar los datos de la API, y utilizaremos callbacks anidados para manejar los diferentes estados de la solicitud:
function obtenerUsuarios(callback) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
}

obtenerUsuarios((error, usuarios) => {
    if (error) {
        console.log(`Se produjo un error: ${error}`);
    } else {
        console.log('Lista de usuarios:');
        usuarios.forEach(usuario => {
            console.log(`- ${usuario.name}`);
        });
    }
});
//En este ejemplo, la función obtenerUsuarios es una función que realiza una solicitud HTTP para obtener una lista de usuarios de una API. La función toma un callback como argumento, que se llama cuando se completa la solicitud. Si la solicitud es exitosa, el callback se llama con los datos de la respuesta como segundo argumento. Si la solicitud falla, el callback se llama con el error como primer argumento.

//Luego, la función obtenerUsuarios se llama pasando un callback que imprime la lista de usuarios en la consola. El callback verifica si hay un error y, si no lo hay, recorre la lista de usuarios e imprime sus nombres en la consola.

//En este ejemplo, estamos utilizando callbacks anidados para manejar los diferentes estados de la solicitud HTTP. Esto puede hacer que el código sea un poco difícil de leer y mantener, especialmente si la solicitud HTTP es más compleja.