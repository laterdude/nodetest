var express = require('express')
var app = express()

app.get('/', function(req, res) {
	res.send('Hello from github')
})

app.listen(5678)