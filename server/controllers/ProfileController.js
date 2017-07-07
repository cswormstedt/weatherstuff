var express = require('express'),
	router  = express.Router(),
	User    = require('../models/User'),
	Place   = require('../models/Place'),
	Comment = require('../models/Comment'),
	BodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res){
	if(req.session.isLoggedIn){
		res.render('profile', {username: req.session.username});

	}
	else{
		res.redirect('/');
	}
})



module.exports = router;