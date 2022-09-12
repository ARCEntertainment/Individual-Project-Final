//? ///////////////////////// MISE En PLACE ROOTING Music (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const trackRouter = require('express').Router()
const trackController = require('../Controllers/music-controller')
const bodyValidator = require('../Middleware/body-validator')
const musicValidator = require('../Validators/music-for-body-validator')



//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

trackRouter.get('/', trackController.getALL)

trackRouter.get('/:id', trackController.getById)

trackRouter.post('/', bodyValidator(musicValidator), trackController.creat)

trackRouter.delete('/:id', trackController.delete)


//todo Exported ROOT
//todo ________________________________
module.exports = trackRouter