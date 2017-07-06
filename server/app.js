var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	path 	= require('path');

	require('./db/db')

var PlaceController = require('./controllers/PlaceController');
var CommentController = require('./controllers/CommentController');
var UserConntroller = require('./controllers/UserConntroller');

app.use('/places', PlaceController);
app.use('/comments', CommentController);
app.use('/users', UserConntroller)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

server.listen(3000, function(){
	console.log('yo it\'s andre port 3000')
})