const patientRout = require('express').Router()
const authProtection = require("../middleware/auth")
const {getAll, getOne, add, update, remove,register,login} = require('../controller/patient.controller')
patientRout.post('/register',register)
patientRout.post('/login',login)
patientRout.get('/getAll', getAll)
patientRout.get('/getOne',authProtection, getOne)
patientRout.post('/add',add)
patientRout.put('/update/:id',update)
patientRout.delete('/delete/:id',remove)





module.exports = patientRout