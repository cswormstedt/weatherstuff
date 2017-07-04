var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
	location: String,
	latitude: String,
	longitude: String,
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

var placeModel = mongoose.model('Place', PlaceSchema);

module.exports = placeModel;