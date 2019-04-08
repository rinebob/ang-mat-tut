const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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

app.post("/api/posts", (req, res, next) => {
	const post = req.body;
	console.log("000 app.js app.post.  post = ", post);
	res.status(201).json({
		message: 'Post added sweet dude!'
	});
});

app.get("/api/posts", (req, res, next) => {
	const posts = [
		{
			id: 'werwrewer',
			title: 'First yo server side',
			content: 'hey this is from the effin server'
		},
		{
			id: 'sfgsdfgsfdgd',
			title: 'Second yo server side',
			content: 'hey dipstick this is from the totally effin server'
		},
	];
	res.status(200).json({
		message: 'Posts like totally fetched man',
		posts: posts
	});
});

module.exports = app;