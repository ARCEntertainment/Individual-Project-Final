//? ///////////////////////// CONTROLLERS Music /////////////////////////



//todo imported MODELS (Music)
const Track = require('../Models/music')


//todo CONTROLLER Music configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete

const trackController = {
    
    getALL: async (req, res) => {
        
        const trackAll = await Track.find()

        res.status(200).json(trackAll)
    },


//* ------------------------------------------------------

    getById: async (req, res) => {
        const id = req.params.id

        const tracks = await Track.findById(id)

        if (!Track) {
            return res.sendstatus(404)
        }
        res.status(200).json(tracks)
    },


//* ------------------------------------------------------

    creat: async (req, res) => {

        const trackADD = Track(req.body)

        await trackADD.save()

        res.status(200).json(trackADD)
    },


//* ------------------------------------------------------

    delete: async (req, res) => {

        const id = req.params.id 

        const trackDelete = await Track.findByIdAndDelete(id)

        if (!trackDelete) {

            return res.sendstatus(404)
        }

        res.sendstatus(204)
    }
}



//todo Exported CONTROLLER
//todo ________________________________
module.exports = trackController

