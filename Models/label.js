//? ///////////////////////// CREATION MODEL et SHEMA (LABELS) /////////////////////////



//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model, Types} = require('mongoose')
const Music = require('./music')



//todo SCHEMA configuration
//todo ________________________________
const labelSchema = new Schema(

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
        info: {
            type: String,
            required: true,
            trim: true
        },

        link: [
            {
                artistId: {
                    type: Types.ObjectId,
                    ref: Artist,
                    required: true
                },

                musicId: {
                    type: Types.ObjectId,
                    ref: Music,
                    required: true
                }
            }
        ],
        genre: {
            type: String,
            required: true,
            enum: ['Techno', 'Dance', 'Scoring', 'Electro']
        },
    },

    // OPTION
    {
        collection: 'Labels',
        timestamps: true
    }
)



//todo MODEL creation
//todo ________________________________
const Labels = model('Labels', labelSchema)



//todo Exported MODEL
//todo ________________________________
module.exports = Labels