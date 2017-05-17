'use strict';

const express = require('express');
const app = express();
const chatspace = require('./app');
const passport = require('passport');

app.set('port', process.env.PORT || 3000);
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(chatspace.session);
app.use(passport.initialize());
app.use(passport.session());
app.use('/', chatspace.router);


app.listen(app.get('port'), () => {
    console.log('ChatSpace is running on port:', app.get('port'));
    
})