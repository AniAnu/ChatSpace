'use strict';

const config = require('../config');
const logger = require('../logger');
const Mongoose = require('mongoose').connect(config.dbURI);

// Throw an error if the connection fails to db

Mongoose.connection.on('error', error => {
    
    logger.log('error', 'Mongoose connection error: ' + error);
});

// Creating a Schema that defines the structure for storing user data
const chatUser = new Mongoose.Schema({
    profileId: String,
    fullName: String,
    profilePic: String
});

// Turning the schema into a usable model
let userModel = Mongoose.model('chatUser', chatUser);
module.exports = {
    Mongoose,
    userModel
}