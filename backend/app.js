const express = require('express');

const app = express();

app.use((req, res, next) => {
	console.log('First effing middleware dude!');
	next();
});

app.use((req, res, next) => {
	res.send('Yo from dude')
});

module.exports = app;