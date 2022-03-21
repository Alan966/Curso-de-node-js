const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/jwtdb')
.then((db) => {
    console.log('Conexion exitosa')
})
.catch((err) => {
    console.log('Ha ocurrido un error al conectarse ' + err)
})

module.exports = connection