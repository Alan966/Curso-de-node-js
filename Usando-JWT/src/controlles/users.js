const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/users')

const getAdmin = (req, res) => {
    jwt.verify(req.token, 'secret-key', (err, userData) => {
        if(err){
            res.send('Ha ocurrido un error ' + err)
        }else{
            res.json({
                message: 'Datos correctos, puede ingresar', 
                userData: userData
            })
        }
    })
}

const login = (req, res) => {
    User.findOne({email:req.body.email}, (err, result ) => {
        if(err){
            res.send('Ha ocurrido un error'+ err)
        }else{
            if(result){
                if(bcrypt.compareSync(req.body.password, result.password)){
                    jwt.sign({user: result}, 'secret-key', (err, token) =>{
                        res.send({token:token})
                    })
                }else{
                    res.send('Contraseña incorrecta')
                }
            }else{
                res.send('No existe el usuario')
            }
        }
    })

}

const register = (req, res) => {

    const  user = new User({
        name: req.body.name,  
        email: req.body.email,  
        password: bcrypt.hashSync(req.body.password, 10)
    })

    user.save((err, result) => {
        if(err){
            res.send('Ha ocurrido un error '+ err)
        }else{
            res.send('Registro exitoso')
        }
    })
}

module.exports = {getAdmin, login, register}