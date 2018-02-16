//Load express module with `require` directive
var express 	= require('express');
var mongoDb     = require('./mongo');
// var users       = require('./users');
var app 		= express();
var mongo;
//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.send('Hello World! testing trigger again again again jhgjfdhgjfdhg')
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

//https://d1.awsstatic.com/Projects/P5505030/aws-project_Jenkins-build-server.pdf

//sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkinsci.org/redhat/jenkins.repo

//wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" \"http://download.oracle.com/otn-pub/java/jdk/8u60-b27/jre-8u60-linux-x64.rpm"
  
//   Use the following URL to trigger build remotely: JENKINS_URL/view/all/job/jenkinsDemo/build?token=TOKEN_NAME or /buildWithParameters?token=TOKEN_NAME
// Optionally append &cause=Cause+Text to provide text that will be included in the recorded build cause.



//https://wiki.jenkins.io/display/JENKINS/Remote+access+API#RemoteaccessAPI-CSRFProtection
//https://github.com/pycontribs/jenkinsapi/issues/563

// git hub token - d9a5aed0ba38f98371f027e25c063ba17701d04a    

