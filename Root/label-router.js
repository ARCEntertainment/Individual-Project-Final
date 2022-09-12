//? ///////////////////////// MISE En PLACE ROOTING Label (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const labelRouter = require('express').Router()
const labelController = require('../Controllers/label-controller')
const bodyValidator = require('../Middleware/body-validator')
const labelValidator = require('../Validators/label-for-body-validator')
const artistValidator = require('../Validators/label-for-body-validator')






//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

labelRouter.get('/', labelController.getALL)

labelRouter.get('/:id', labelController.getById)

labelRouter.post('/', bodyValidator(labelValidator), labelController.creat)

labelRouter.delete('/:id', labelController.delete)



//todo Exported ROOT
//todo ________________________________
module.exports = labelRouter