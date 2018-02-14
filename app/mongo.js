var MongoClient = require('mongodb').MongoClient;

exports.createMongoConnection = function(cb) {
	var url = "mongodb://localhost:27017";
	MongoClient.connect(url, function(err, client) {
		console.log("err and client - ",err,client);
	  if (err) {
	  	console.log("error in connecting mongo");
	  	cb({success: false})
	  } else {
	  	cb({success:true,db:client.db("test")});
	  }
	});	
};