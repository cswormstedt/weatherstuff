var express = require('express'),
	router  = express.Router(),
	Comment = require('../models/Comment'),
	bodyParser = require('body-parser');

	router.use(bodyParser.urlencoded({extended: true}));

router.post('/new', function(req, res){
	var comment = new Comment({text: req.body.text});
	comment.save();
	res.redirect(req.get('referer'))
})

module.exports = router;