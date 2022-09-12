//? ///////////////////////// YUP BURGER Validator /////////////////////////




//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')



//todo STRUCTURE Validator
//todo ____________________________

const labelValidator = yup.object({
    name: yup.string().trim().required().min(3).max(50),
    land: yup.string().trim(),
    info: yup.string().required().trim().min(10).max(250),
    genre: yup.array().of(yup.string())
})



//todo EXPORT Validator
//todo ____________________________
module.exports = labelValidator