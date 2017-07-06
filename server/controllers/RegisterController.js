var express = require('express'),
	router  = express.Router(),
	User    = require('../models/User'),
	bcrypt  = require('bcryptjs'),
	BodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));

// get to / the main page
router.get('/', function(req, res){
	res.render('register', {});
});

router.post('/', function(req, res){
	User.findOne({username: req.body.username}, function(err, user){
		if(user === null){
			// want to register/create salt and hash
			bcrypt.genSalt(10, function(err, salt){
				bcrypt.hash(req.body.password, salt, function(err, hash){
					var userDbEntry = {};
					userDbEntry.username = req.body.usrname;
					userDbEntry.password = hash;


					User.create(userDbEntry, function(err, user){
						if(user){
							// if user created make session
							req.session.username 	= user.username;
							req.session.userId		= user.id;
							req.session.isLoggedIn 	= true;

							res.redirect('/profile')
						}
						else{
							res.send('there was an error')
						}
					})
				})
			})
		}
		else{
			res.render('register', {loginmessage: 'Username is taken'})
		}
	})
})

module.exports = router;