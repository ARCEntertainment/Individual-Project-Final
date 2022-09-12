//? ///////////////////////// CONTROLLERS Artist /////////////////////////



//todo imported MODELS (Artist)
//todo ___________________________________
const Artist = require('../Models/artist')



//todo CONTROLLER Artist configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const artistControllers = {

    getALL: async (req, res) => {

        // Structure FIND
        const artistALL = await Artist.find()

        res.status(200).jason(artistALL)
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

        const artistADD = Artist(req.body)

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