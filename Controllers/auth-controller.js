//? ///////////////////////// CONTROLLERS Authentication (Identification) /////////////////////////




// todo IMPORTATION Utils
// todo __________________________________
const User = require('../Models/users')
const argon2 = require('argon2')
const jwtUtils = require('../Utils/jwt-utils')



//todo CONTROLLER Authentication configuration
//todo ________________________________


const authController = {

    //! LOGIN

    login: async (req, res) => {

        //* TOOLS
        //* --------------------------------------
        const { password, email } = req.body

        // const credentialFilters = { $or: [{ email: credential }, { pseudo: credential }] }

        // const users = await User.findOne(credentialFilters)
        const users = await User.findOne({email})


        //* STRUCTURE
        //* -------------------------------------

        if (!users) {
            return res.status(401).json({ error: 'Bad Credential' })

        }
        //ELSE

        const ifPasswordValid = await argon2.verify(users.password, password)
        //-----------------------------------------------------------------

        if (!ifPasswordValid) { // si password ne correspond pas 
            return res.status(401).json({ error: 'Bad Credential' })

        }
        //ELSE si password valider

        const token = await jwtUtils.generate(users)
        return res.json({ token })

    },
    //todo-------------------------------------------------------------------------------

    //! REGISTER

    register: async (req, res) => {

        //* Recuperation des Information dans le BODY
        //* --------------------------------
        const { firstname, lastname, pseudo, email, password } = req.body


        //* Recuperation Password HASH
        //* -----------------------------
        const hashPassword = await argon2.hash(password)


        //* Creation Nouvelle Utilisateur
        //* ------------------------------
        const userToInsert = User({
            firstname,
            lastname,
            pseudo,
            email,
            password: hashPassword
        })

        //* Sauvegarde de l'Utilisateur dans la DB
        //* ------------------------------
        await userToInsert.save()

        const token = await jwtUtils.generate(userToInsert)

        res.status(200).json({ token })
    }
}


//todo Exported CONTROLLER Authentifier
//todo ________________________________
module.exports = authController