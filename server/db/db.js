var mongoose = require('mongoose'),
	connectionString = 'mongodb://localhost/weatherstuff';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
	console.log("connected to " + connectionString);
})

mongoose.connection.on('error', function(){
	console.log("error connecting to " + connectionString);
})

mongoose.connection.on('disconnected', function(){
	console.log("disconnected from " + connectionString);
})