const {registrar, leer} = require('./operaciones')

const [operacion, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)

switch (operacion.toLowerCase()) {
    case 'registrar':
        if (process.argv.slice(2).length !== 6) return console.log(" Seleccione 'registrar' completando los siguientes parametros: nombre, edad, tipo, color y enfermedad")
        registrar(nombre, edad, tipo, color, enfermedad)
        break;
    case 'leer':
        leer()
        break;
    default:
        console.log(" Seleccione 'leer' o 'registrar' como primer parametro, para ejecutar el script, si selecciona 'registrar' debe enviar nombre, edad, tipo, color y enfermedad")
        break;
}
