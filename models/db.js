
var mysql = require('mysql');
var connection = mysql.createConnection({
	host	:'localhost',
	user	:'tyb',
	password:'123',
	database:'blog',
	port: 3306
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, row, fields) {
	if (err) throw err;
	console.log('The solution is: ', row[0].solution);
});

connection.end();

/*
var settings = require('../settings'),
	Db = require('mysql').Db,
	Connection = require('mysql').Connection,
	Server = require('mysql').Server;
module.exports = new Db(settings.db, new Server(settings.host, settings.port),{safe: true});*/
