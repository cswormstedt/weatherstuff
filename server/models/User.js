var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	Location: [{type: mongoose.Schema.Types.ObjectId, ref: 'Place'}]

})

var userModel = mongoose.model('User', UserSchema);

module.exports = userModel;