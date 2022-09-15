//? ///////////////////////// MISE En PLACE ROOTING Artist (Router) /////////////////////////




//todo Initialising EXPRESS
//todo _______________________________
const artistRouter = require('express').Router()
const artistController = require('../Controllers/artist-controller')
// const bodyValidator = require('../Middleware/body-validator')
const artistValidator = require('../Validators/artist-for-body-valodator')
const multer = require('multer')
const uuid = require('uuid')


//todo Parametrage MULTER
//todo _______________________________

// -- > BASICS < --
// const upload = multer({ dest : 'Public/Artist'})

// -- > Custom < --

const storage = multer.diskStorage({

    // Props Parametre de Destination
    destination : (req, res, cb) => { cb(null, 'Public/Artist')},

    // Props Parametre de Nom de Fichier
    filename : (req, file, cb) => {
        console.log('info file :', file)

    // Generation Nom de Fichier Aléatoire
        const name = uuid.v4()

    // Parametre de extension de Fichier
        const extension = file.originalname.split('.').at(-1) // option ecma5 .at(-1) le -1 permet de recup la derniere valeur dans tab
    
    // Concatenation Nom de Fichier
        cb(null, name + '.' + extension)

    }
})

const upload = multer({storage})



//todo ROOT configuration
//todo ________________________________
// .get    = Recuperation / Afficher
// .post   = Ajout
// .put    = Modification
// .delete = Supression


//* ------methode long (repetition)--------------

artistRouter.get('/', artistController.getALL)

artistRouter.get('/:id', artistController.getById)

artistRouter.post('/', upload.single('avatar'), artistController.creat)

artistRouter.delete('/:id', artistController.delete)


//todo Exported ROOT
//todo ________________________________
module.exports = artistRouter