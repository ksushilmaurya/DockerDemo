//Load express module with `require` directive
var express 	= require('express');
var mongoDb     = require('./mongo');
// var users       = require('./users');
var app 		= express();
var mongo;
//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/get_users', function (req, res) {
	console.log("mongo is - ",mongo);
	mongo.collection("users").find({}).toArray(function(err, users) {
		console.log("users are - ",JSON.stringify(users));
		if(err) {
			res.send({status: 101, info : "Error in fetching users"});
		} else {
			res.send({status: 200, result : users});
		}
	})
})

// app.get('/get_users',users.getUsers)

//Launch listening server on port 8081
app.listen(3000, function () {
  console.log('app listening on port 3000!');

  mongoDb.createMongoConnection(function(connection) {
	if(connection.success) {
		console.log("Connected with mongo");
		mongo = connection.db;
	} else {
		console.log("Error in connection with mongo");
		
	}
  });

})




