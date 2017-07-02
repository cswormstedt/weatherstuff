var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	path 	= require('path');

	// db here

// require controllers here

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

server.listen(3000, function(){
	console.log('yo it\'s andre port 3000')
})