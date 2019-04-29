const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const postsRoutes = require("./routes/posts");


dbURI = 'mongodb://localhost/ang-material-tut';
mongoose.connect( dbURI )
	.then(() => {
		console.log("100 app.js Connected to database");
	})
	.catch((() => {
		console.log("101 app.js mongo connection failed")
	}));

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, PATCH, PUT, UPDATE, DELETE, OPTIONS"
	);
	next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
