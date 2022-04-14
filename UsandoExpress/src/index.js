const express = require('express')
const path = require('path')
const connection = require('./connection')
const app = express() 
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')


//settings 
app.set('title', 'Aplicacion hecha en Node Js')
app.set('port', 5000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Middleware
// app.use(loggedMiddleware.isLogged)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))


// rutas 
app.get('/', (req, res) => {
    res.render('index')
})


app.use('/users', user)


app.listen(app.get('port'), () => {
    console.log('Mi ' + app.get('title') +' esta corriendo en el puerto '+ app.get('port'))
})