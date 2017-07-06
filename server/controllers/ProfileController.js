var express = require('express'),
	router  = express.Router(),
	User    = require('../models/User'),
	bcrypt  = require('bcryptjs'),
	BodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));



module.exports = router;