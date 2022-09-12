//? ///////////////////////// CREATION MODEL et SHEMA (MUSIC) /////////////////////////



//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model, Types} = require('mongoose')
const Artist = require('./artist')



//todo SCHEMA configuration
//todo ________________________________
const trackSchema = new Schema(

    // STRUCTURE
    {
        
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        durée: {
            type: Number,
            required: true,
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
            }
            
            
            
        ],

        label: [{}],

        genre: {
            type: String,
            required: true,
            enum: ['Techno', 'Trance', 'House', 'Progressive', 'PsyTrance', 'Scoring', 'Synthwave', 'Deep House']
        },

        prix: {
            type: Number,
            required: true
        }
    },

    // OPTION
    {
        collection: 'Music',
        timestamps: true
    }
)



//todo MODEL creation
//todo ________________________________
const Music = model('Music', trackSchema)



//todo Exported MODEL
//todo ________________________________
module.exports = Music