var mongo = require('./mongo');
exports.getUsers = function(req, res) {
	setTimeout(function(){

	console.log("mongo is - ",JSON.stringify(mongo));
	},5000)
	mongo.collection("users").find({}).toArray(function(err, users) {
		console.log("users are - ",JSON.stringify(users));
		if(err) {
			return res.send({status: 101, info : "Error in fetching users"});
		} else {
			return res.send({status: 200, result : users});
		}
	})
}