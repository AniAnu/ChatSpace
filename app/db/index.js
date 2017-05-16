'use strict';

const config = require('../config');
const Mongoose = require('mongoose').connect(config.dbURI);

// Throw an error if the connection fails to db

Mongoose.connection.on('error', error => {
    
    console.log('MongoDB error: ', error);
});

module.exports = {
    Mongoose
}