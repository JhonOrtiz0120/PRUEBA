

/* setTimeout( () => {
    console.log('HOLA');
}, 1000); */

const getUsuarioById = ( id, callback ) => {
    const usuario = {
        id,
        nombre : ' Jhon '
    }

    setTimeout( () => {
        callback(usuario);
    }, 1500);
}

getUsuarioById( 10, ( usuario ) => {
    console.log( usuario );
} );