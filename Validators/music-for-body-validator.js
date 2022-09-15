//? ///////////////////////// YUP MUSIC Validator /////////////////////////




//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')





//todo STRUCTURE Validator
//todo ____________________________

const musicValidator = yup.object({

    name: yup.string().trim().required().min(3).max(50),
    durée: yup.number().required().positive(),
    info: yup.string().trim().required().min(10).max(50),
    genre: yup.array().of(yup.string()),
    prix: yup.number().required().positive().min(2).max(25)
})


//todo EXPORT Validator
//todo ____________________________
module.exports = musicValidator