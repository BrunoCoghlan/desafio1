const {registrar, leer} = require('./operaciones')

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)
//switch evalua la variable en 2 casos
switch (operacion.toLowerCase()) {
    case 'registrar':
        //para llamar a registrar, usuario tiene que tener si o si llamar a la funcion y a 5 variables.
        if (process.argv.slice(2).length !== 6) return console.log(" Seleccione 'registrar' completando los siguientes parametros: nombre, edad, tipo, color y enfermedad")
        registrar(nombre, edad, tipo, color, enfermedad)
        break;
    case 'leer':
        leer()
        break;
    default:
        // si no se cumple niun caso, se enviara un mensaje por defecto.
        console.log(" Seleccione 'leer' o 'registrar' como primer parametro, para ejecutar el script, si selecciona 'registrar' debe enviar nombre, edad, tipo, color y enfermedad")
        break;
}
