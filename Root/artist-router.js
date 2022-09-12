//? ///////////////////////// MISE En PLACE ROOTING Artist (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const artistRouter = require('express').Router()
const artistController = require('../Controllers/artist-controller')
const bodyValidator = require('../Middleware/body-validator')
const artistValidator = require('../Validators/artist-for-body-valodator')




//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

artistRouter.get('/', artistController.getALL)

artistRouter.get('/:id', artistController.getById)

artistRouter.post('/', bodyValidator(artistValidator), artistController.creat)

artistRouter.delete('/:id', artistController.delete)


//todo Exported ROOT
//todo ________________________________
module.exports = artistRouter