const empleados = [
    {
        id: 1, 
        nombre: 'Juliana'
    },
    {
        id: 2, 
        nombre: 'Linda'
    },
    {
        id: 3, 
        nombre: 'Marian'
    }
];

const salarios = [
    {
        id: 1, 
        salario: 1000
    },
    {
        id: 2, 
        salario: 1500
    }
];

const id = 1; 

const getEmpleado = ( id ) => {

    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( e => e.id === id )?.nombre;

        ( empleado ) ? resolve( empleado ) : reject(`No existe empleado con el id: ${ id }`);
    });
}

const getSalario = ( id ) => {

    return new Promise( (resolve, reject) => {
        const salario = salarios.find( e => e.id === id )?.salario;

        ( salario ) ? resolve( salario ) : reject(`No existe salario con el id: ${ id }`);
    });
}


const getInfoUsuario = async() => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
     
        return `El salario del empleado: ${empleado} es de ${salario}`;
    } catch (error) {
        throw error;
    }

}

getInfoUsuario()
    .then(  msg => console.log(msg))
    .catch( err => console.log( err ));
