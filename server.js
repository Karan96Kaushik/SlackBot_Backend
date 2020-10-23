const express = require('express')
const expr = express()
const bodyParser = require('body-parser');	// HTTP Request Parser
const fs = require('fs');
const desktimeMessage = require('./desktimeMessage');

expr.use(bodyParser.urlencoded({ extended: false }));
expr.use(bodyParser.json());
expr.use(express.static('public'));	// Public Folder in Local Directory

expr.get('/', function (req, res) {
	res.redirect('/hello');
});

expr.get('/hello', function (req, res) {
	res.send("Hello")
});

expr.post('/echo', function (req, res) {
	var body = req.body;

	res.json(body);
})


expr.post('/slackslash', async function (req, res) {
	console.log(req.query)

	switch (req.query.command) {
		case "/dt":
			desktimeMessage().then(resp => {
				console.log(resp)
				res.send(resp)
			})
			break;
		case "/test":
			res.send("Server Test Successful - " + new Date())
			// console.log()
			break;

		default:
			res.send("Server Test Successful - " + new Date())
			break;
	}

	// res.send("OK")
})

expr.get('/rt/:arg1', async function (req, res) {
	res.send(req.params.arg1)

	console.log(req.body)

	switch (req.params.arg1) {
		case "desktime":
			console.log()
			break;

		default:
			break;
	}
})

var port = 9000;
var host = "0.0.0.0"

var server = expr.listen(port, host);

server.on('listening', function () {
	console.log("server is listening")
})