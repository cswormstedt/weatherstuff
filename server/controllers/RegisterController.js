var express = require('express'),
	router  = express.Router(),
	User    = require('../models/User'),
	bcrypt  = require('bcryptjs'),
	BodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));

// get to / the main page
router.get('/register', function(req, res){
	res.render('register', {});
});

module.exports = router;