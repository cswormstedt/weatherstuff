var express = require('express'),
	router  = express.Router(),
	Place   = require('../models/Place'),
	BodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));

module.exports = router;