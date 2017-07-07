var express = require('express'),
	router  = express.Router(),
	Place   = require('../models/Place'),
	Comment = require('../models/Comment'),
	BodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));

router.get('/all', function(req, res){
	res.json(json)
})

router.get('/weather', function(req, res){
	res.render('weather', {})
})

module.exports = router;