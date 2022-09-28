//? ///////////////////////// CONTROLLERS Artist /////////////////////////



//todo imported MODELS (Artist)
//todo ___________________________________
// 1- une variable contenant les donné du Schema artist dans le modele
const Artist = require('../Models/artist')
// 2- cette variable detien le port utilisé pour l'acces a la DB via les variable d'environement c'est une securité
const { PORT } = process.env



//todo CONTROLLER Artist configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


// Creation de l'objet artistControl qui contien les fonction utile 
const artistControllers = {

    // ceci est la fonction Asynchrone qui permet de recupérer toute les donné de la collection Artist
    // elle detien comme parametre Requete et Resolution
    getALL: async (req, res) => {

        // creation de variable detenant l'ensemble de toute les donné de la collection Artist
        //elle utilise la Methode FIND
        const artistALL = await Artist.find()

        // j'initialise une variable DATA nomé Artist qui contient l'ensemble des donnée contenue dans la variable artistALL
        const data = {'artist': artistALL}


        // enfin j'utilise le parametre resolution en lui precisant le Status code 200 et je recupère un fichier format json avec 
        // les donné recupérer dans DATA
        res.status(200).json(data)
    },


//* ------------------------------------------------------

    getById: async (req, res) => {

        const id = req.params.id


        // Structure FIND
        const artists = await Artist.findById(id)

        if (!Artist) {
            return res.sendStatus(404)
        }

        res.status(200).json(artists)


    },


//* ----------------------------------------------------

    creat: async (req, res) => {

        const { name, land, bio } = req.body

        console.log('After insert Back-End :', req.file);

        const artistADD = Artist({
            name,
            land,
            bio,
            avatar: `http://localhost:${PORT}/Artist/${req.file.filename}`
        })

        await artistADD.save()
        res.status(200).json(artistADD)
    },


//* -----------------------------------------------------

    delete: async (req, res) => {

        const id = req.params.id
        
        const artistDelete = await Artist.findByIdAndDelete(id)

        if (!artistDelete) {

            return res.sendStatus(404)
        }
        res.sendStatus(204)
    }
}




//todo Exported CONTROLLER
//todo ________________________________
module.exports = artistControllers