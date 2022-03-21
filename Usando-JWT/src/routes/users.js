const  express = require('express')
const router = express.Router() 
const userController = require('../controlles/users')
const verifyToken = require('../middlewares/verifyToken')

router.get('/admin', verifyToken.verifyToken,  userController.getAdmin)
router.post('/login', userController.login)
router.post('/register', userController.register)

module.exports = router;