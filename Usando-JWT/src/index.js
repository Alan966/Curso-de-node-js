const express = require('express')
const app = express()
const userRoutes = require('./routes/users')

require('./connection')

app.set('port', 3000)

app.use(express.urlencoded({extended: false}))

app.use(userRoutes)

app.listen(app.get('port'), () => {
    console.log('Aplicacion corriendo en el puerto ' + app.get('port'))
})