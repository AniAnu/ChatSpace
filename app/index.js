'use strict';

//const router = require('express').Router();
//
//router.get('/', (req, res, next) => {
//    
//    //res.send('<h1>Hello Express!</h1>');
//    //res.sendFile(__dirname + '/views/login.htm');
//    res.render('login');
//});

// Social Authentication Logic
require('./auth')();

// Creating an IO server instance
let ioServer = app => {
    const server = require('http').Server(app);
    const io = require('socket.io')(server);
    require('./socket')(io);
    return server;
}

module.exports = {
//    router: router
    router: require('./routes')(),
    session: require('./session'),
    ioServer
}