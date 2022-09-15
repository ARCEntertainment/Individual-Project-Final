//? ///////////////////////// CREATION MODEL et SHEMA (ARTIST) /////////////////////////



//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model} = require('mongoose')



//todo SCHEMA configuration
//todo ________________________________
const artistSchema = new Schema(

    // STRUCTURE
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        land: {
            type: String,
            trim: true
        },
        bio: {
            type: String,
            required: true,
            trim: true
        },

        avatar: {
            type: String
        }
    },

    // OPTION
    {
        collection: 'Artist',
        timestamps: true
    }
)



//todo MODEL creation
//todo ________________________________
const Artist = model('Artist', artistSchema)



//todo Exported MODEL
//todo ________________________________
module.exports = Artist