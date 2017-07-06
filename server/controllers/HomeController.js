var express = require('express'),
	router  = express.Router(),
	User    = require('../models/User'),
	bcrypt  = require('bcryptjs'),
	BodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));

// get to / the main page
router.get('/', function(req, res){
	res.render('home', {});
});


router.post('/', function(req, res){
	User.findOne({username: req.body.username}, function(err, user){
		if(user){
			bcrypt.compare(req.body.password, user.password, function(err, match){
				if(match === true){
					// set the session and direct to whatever
					req.session.username 	= user.username;
					req.session.userId		= user.id;
					req.session.isLoggedIn	= true;

					res.redirect('/profile');
				}
				else{
					// send a wrong username or password message
					res.render('home', {message: 'username or password was incorrect'});
				}
			})
		}
		else{
			res.render('home', {message: 'username or name or password was incorrect'})
		}
	})
})





router.get('/logout', function(req, res){
	req.session.destroy(function(err){
		res.redirect('/user/start')
	});
});




module.exports = router;