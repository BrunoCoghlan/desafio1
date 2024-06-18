const fs = require('fs')

const getJson = () => {
    let data
    try {
        data = fs.readFileSync('./citas.json', 'utf8') 
    } catch (error) {
        if (error.code === 'ENOENT'){
            data = '[]'
        }
    }
    return JSON.parse(data)
}
const registrar = (nombre, edad, tipo, color, enfermedad) => {
    const pacientes = getJson()
    pacientes.push({ nombre, edad, tipo, color, enfermedad })
    fs.writeFileSync('./citas.json', JSON.stringify(pacientes, null, 4))
}
const leer = () => {
    console.log(getJson())
}

module.exports = { registrar, leer }