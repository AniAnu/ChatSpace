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
app.use(require('morgan')('combined', {
	stream: {
		write: message => {
			// Write to logs
			chatspace.logger.log('info', message);
		}
	}
}));
app.use('/', chatspace.router);


chatspace.ioServer(app).listen(app.get('port'), () => {
    console.log('ChatSpace is running on port:', app.get('port'));
    
})