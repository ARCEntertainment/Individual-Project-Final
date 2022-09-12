//? ///////////////////////// CREATION MODEL et SHEMA (Users) /////////////////////////





//todo Initialising MONGOOSE (Schema)
//todo _______________________________
const { Schema, model } = require('mongoose')






//todo SCHEMA configuration
//todo ________________________________

const userShema = new Schema (


    // STRUCTURE
    {
        firstname:{
            type: String,
            trim: true,
            require:false
        },

        lastname:{
            type: String,
            trim: true,
            require:false
        },

        pseudo:{
            type: String,
            trim: true,
            require: true
        },

        email:{
            type: String,
            trim: true,
            require: true
        },

        password:{
            type: String,
            trim: true,
            require: true
        },

        role:{
            type: String,
            enum: ['User', 'Moderator', 'Admin'],
            require: true,
            default: 'User'
        },
    },

    // OPTION
    {
        collection: 'User',
        timestamps: true
    }
)



//todo MODEL creation
//todo ________________________________
const User = model('User', userShema)




//todo Exported MODEL
//todo ________________________________
module.exports = User