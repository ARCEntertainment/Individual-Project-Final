//? ///////////////////////// YUP ARTIST Validator /////////////////////////




//todo IMPORT Yup
//todo ____________________________
const yup = require('yup')





//todo STRUCTURE Validator
//todo ____________________________
const artistValidator = yup.object({
    name: yup.string().required().trim().min(2).max(50),
    land: yup.string().trim(),
    bio: yup.string().required().trim().min(10).max(250)
})



//todo EXPORT Validator
//todo ____________________________
module.exports = artistValidator