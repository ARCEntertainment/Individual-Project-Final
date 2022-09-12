//? ///////////////// STRUCTURE et MISE-en-PLACE de BASE (Mental Side) //////////////////////////////


//todo 1) Initialising Project BASE
//todo ______________________________
require('dotenv-flow').config();
const { MESSAGE, NODE_ENV, PORT, DB_CONNECTION} = process.env;
console.log('Connected To : ', NODE_ENV, ' : ', MESSAGE);



// ---Library NoSQL (mongoose)
// *---------------
const mongoose = require('mongoose');



//todo 2) Mise en place SERVER EXPRESS
//todo _________________________________

//! /!\ Library gestion error async await Middleware  
// *----------------------
require('express-async-errors');

// *----------------------
const express = require('express')
const router = require('./Root')
const server = express()


//! Gestion error CORS
const cors = require('cors')
server.use(cors(/* >>Add Config to<< */))


//! /!\ First MiddleWare (a metre en premier)
server.use(express.json())




//todo 3) ROOT Definitive
//todo ________________________________

// --Root Connection middleware DB (mongodb)
//* ----------------------
server.use(async (req, res, next) => {

    await mongoose.connect(DB_CONNECTION)
    console.log('---!!* IN CONNECTING *!!---');
    next()
})


// --Root request
//* ---------------
server.use('/api', router)



//todo 4) LECTURE du SERVER
//todo __________________________________
server.listen(PORT, () => {
    console.log(`SERVER UP ON PORT : ${PORT} - ${NODE_ENV}`);
})