//? ///////////////////////// CONTROLLERS Music /////////////////////////



//todo imported MODELS (Music)
const Track = require('../Models/music')
const { PORT } = process.env


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

        // Offset and Limit Declaration
        const offset = req.query.offset ? req.query.offset : 0
        const limit = req.query.limit ? req.query.limit : 0


        // Filter Creation

        let musicSearchFilters

        const search = req.query.search

        // Structure Musics Find
        if (search) {

            musicSearchFilters = { $or: [{ 'link.artistId.name': search }, { genre: search }] }
        }
        else
            musicSearchFilters = {}




        //* Structure Tracks FIND
        const trackAll = await Track.find()

            .populate({
                path: "link.artistId",
                select: { name: 1, land: 1, bio: 1, avatar: 1 }

            })

            .limit(limit)
            .skip(offset)

        const count = await Track.countDocuments()
        const data = { 'music': trackAll, count }

        res.status(200).json(data)
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

        const { name, durée, info, link, label, genre, prix, urlTrack } = req.body

        console.log('After insert Back-end :', req.file);

        // const trackADD = Track(req.body)
        const trackADD = Track({
            name,
            durée,
            info,
            link,
            label,
            genre,
            prix,
            urlTrack,
            cover: `http:localhost:${PORT}/Music/Cover/${req.file.filename}`
        })

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

