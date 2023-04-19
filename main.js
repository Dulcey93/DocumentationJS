const obtenerNombresUsuarios = (callback) => {
    return new Promise((resolve, reject) => {
        // Hacemos una consulta a la base de datos para obtener los nombres de usuarios
        const usuarios = obtenerUsuariosDeBaseDeDatos();

        // Verificamos si existen los datos, utilizando un operador ternario
        const nombresUsuarios = usuarios ? usuarios.map(usuario => usuario.nombre) : null;

        // Si los datos son válidos, resolvemos la promesa y ejecutamos la función callback con los nombres de usuarios
        if (nombresUsuarios) {
            resolve(nombresUsuarios);
            callback(null, nombresUsuarios);
        } else {
            // Si los datos no son válidos, rechazamos la promesa y ejecutamos la función callback con un mensaje de error
            const error = 'No se pudieron obtener los nombres de usuarios';
            reject(error);
            callback(error, null);
        }
    });
}

// Llamamos a la función para obtener los nombres de usuarios y manejamos los resultados utilizando la función callback
obtenerNombresUsuarios((error, nombresUsuarios) => {
    if (error) {
        console.error(error);
    } else {
        console.log(nombresUsuarios);
    }
});
