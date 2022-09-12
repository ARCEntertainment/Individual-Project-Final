//?  //////////////////////// ROUTER PARENT structure //////////////////////////////////////


//todo Implentation Route
//todo _______________________________
const artistRouter = require('./artist-router')
const authRouter = require('./auth-router')
const labelRouter = require('./label-router')
const musicRouter = require('./music-router')




//todo Initialising EXPRESS
//todo _______________________________
const Router = require('express').Router()





//todo Importation ROOT
//todo _________________________________

Router.use('/label', labelRouter)
Router.use('/music', musicRouter)
Router.use('/artist', artistRouter)
Router.use('/auth', authRouter)






//todo EXPORTED ROOT
//todo ____________________________________

module.exports = Router