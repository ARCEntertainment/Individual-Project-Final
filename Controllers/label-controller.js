//? ///////////////////////// CONTROLLERS Label /////////////////////////



//todo imported MODELS (Label)
//todo ___________________________________
const Label = require('../Models/label')



//todo CONTROLLER Label configuration
//todo ________________________________
// Operation C.R.U.D
// -----------------
// C = Creat
// R = Read
// U = Update
// D = Delete


const labelControllers = {

    getALL: async (req, res) => {

        // Structure FIND
        const labelALL = await Label.find()

        res.status(200).jason(labelALL)
    },


//* ------------------------------------------------------

    getById: async (req, res) => {

        const id = req.params.id


        // Structure FIND
        const labels = await Label.findById(id)

        if (!Label) {
            return res.sendStatus(404)
        }

        res.status(200).json(labels)


    },


//* ----------------------------------------------------

    creat: async (req, res) => {

        const labelADD = Label(req.body)

        await labelADD.save()
        res.status(200).json(labelADD)
    },


//* -----------------------------------------------------

    delete: async (req, res) => {

        const id = req.params.id
        
        const labelDelete = await Label.findByIdAndDelete(id)

        if (!labelDelete) {

            return res.sendStatus(404)
        }
        res.sendStatus(204)
    }
}




//todo Exported CONTROLLER
//todo ________________________________
module.exports = labelControllers