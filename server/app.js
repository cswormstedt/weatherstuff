var express = require('express'),
	app 	= express(),
	server 	= require('http').createServer(app),
	session = require('express-session');
	path 	= require('path'),
	bodyParser = require('body-parser');

	require('./db/db');

app.use(bodyParser.urlencoded({extended: true}));

app.use(session({
	secret: "I'm not a businessman, I'm a business, man.",
	resave: false,
	saveUninitialized: true,
	cookie: {secure: false}
}));

var PlaceController = require('./controllers/PlaceController');
var CommentController = require('./controllers/CommentController');
var UserConntroller = require('./controllers/UserController');
// var HomeController = require('./controllers/HomeController');


app.use('/', PlaceController);
app.use('/comments', CommentController);
app.use('/users', UserConntroller);
// app.use('/', HomeController);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

// Handle 404
app.use(function(req, res) {
 res.send('404: Page not Found', 404);
});

// Handle 500
app.use(function(error, req, res, next) {
 res.send('500: Internal Server Error', 500);
});

server.listen(3000, function(){
	console.log('yo it\'s andre port 3000')
})