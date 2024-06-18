//solicitar fileSystem
const fs = require('fs')
// se obtiene el JSON
const getJson = () => {
    let data
    try {
        // se intenta leer el archivo
        data = fs.readFileSync('./citas.json', 'utf8') 
    } catch (error) {
        // si no se encuentra el archivo por el codigo ENOENT carga un arreglo vacio en data ya que luego se parsea
        if (error.code === 'ENOENT'){
            data = '[]'
        }
    }
    return JSON.parse(data)
}

const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const pacientes = getJson()
    //al obtener los pacientes, se pushean al arreglo
    pacientes.push({ nombre, edad, tipo, color, enfermedad })
    // se escriben en el documento (si no existe se crea.)
    fs.writeFileSync('./citas.json', JSON.stringify(pacientes, null, 4))
}
const leer = () => {
    console.log(getJson())
}

module.exports = { registrar, leer }