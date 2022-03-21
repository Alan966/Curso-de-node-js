// const mysql = require('mysql')
const mongoose = require('mongoose')
const { mysql_database, mongodb } = require('./config')

const { momgodb } = require('./config')


// const connection = mysql.createConnection(mysql_database)
// connection.connect((err, conn) => {
//     if(err){
//         console.log('Ha ocurrido un erro al conectarse')
//     }else{
//         console.log('Conexion exitosa')
//         return conn
//     }
// })

 const connection  = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then((db) => {
    console.log('Conexion exitosa')
}).catch((err) => {
    console.log('Conexion inexito' + err)
})

module.exports = connection