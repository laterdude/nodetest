var express = require('express')
var app = express()

app.get('/dev', function(req, res) {
	res.send('last Hello from github auto-deploy, retry 10:33')
})

app.listen(5678)
console.log('Server running at http://localhost:5678/');
// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello from github');
// }).listen(5678, 'localhost');
// console.log('Server running at http://localhost:5678/');
