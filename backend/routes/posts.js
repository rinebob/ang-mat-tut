const express = require("express");

const router = express.Router();

const Post = require('../models/post');


router.post("", (req, res, next) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content
	});
	post.save().then(createdPost => {
		console.log('000 app.js post.save.  createdPost = ',createdPost);
		res.status(201).json({
			message: 'Post added sweet dude!',
			postId: createdPost._id
		});
	});
});

router.put("/:id", (req, res, next) => {
	const post = new Post({
		_id: req.body.id,
		title: req.body.title,
		content: req.body.content
	});
	Post.updateOne({ _id: req.params.id }, post).then(result => {
		console.log( 'app.js app.put. result = ', result )
		res.status(200).json({ message: 'app.js app.put update successful'});
	})
});

router.get("", (req, res, next) => {
	Post.find().then(posts => {
		console.log('200 app.js Post.find.  posts = ',posts);
		res.status(200).json({
			message: 'Posts like totally fetched man',
			posts: posts
		});
	});
});

router.get("/:id", (req, res, next) => {
	Post.findById(req.params.id).then(post => {
		if (post) {
			res.status(200).json(post);
		} else {
			res.status(404).json({message: 'Post not found!'});
		}
	})
})

router.delete("/:id", (req, res, next) => {
	console.log("300 app.js app.delete. req.params.id = ",req.params.id);
	Post.deleteOne({_id: req.params.id}).then(result => {
		console.log("302 app.js app.delete.  result = ",result);
	});
	res.status(200).json({message: 'app.js Psych!  Post deleted!'});
});

module.exports = router;
