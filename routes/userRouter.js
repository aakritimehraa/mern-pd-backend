const router = require('express').Router()
const userCtrl = require('../server/controller/userCtrl')
const auth = require('../server/middleware/auth') 

router.post('/register', userCtrl.registerUser)

router.post('/login' , userCtrl.loginUser)


router.get('/verify' , userCtrl.verifiedToken)

module.exports = router