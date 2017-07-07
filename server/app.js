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
	console.log(session)

var PlaceController = require('./controllers/PlaceController');
var CommentController = require('./controllers/CommentController');
var HomeConntroller = require('./controllers/HomeController');
var ProfileController = require('./controllers/ProfileController');
var RegisterController = require('./controllers/RegisterController');


app.use('/place', PlaceController);
app.use('/comments', CommentController);
app.use('/', HomeConntroller);
app.use('/profile', ProfileController);
app.use('/register', RegisterController);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

// Handle 404
app.use(function(req, res) {
 res.status(404).send('404: Page not Found');
});

// Handle 500
app.use(function(error, req, res, next) {
 res.status(500).send('500: Internal Server Error')
});

server.listen(3000, function(){
	console.log('yo it\'s andre port 3000')
})