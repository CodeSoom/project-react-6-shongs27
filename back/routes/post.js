const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// /post

router.get('/home', (req, res) => {
  Post.find().exec((err, posts) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ trial: true, posts });
  });
});

router.get('/:category', (req, res) => {
  Post.find({ category: req.params.category }).exec((err, posts) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ trial: true, posts });
  });
});

router.post('/', (req, res) => {
  const post = new Post(req.body);
  post.save((err, post) => {
    if (err) return res.json({ trial: false, err });

    res.status(200).json({ trial: true, post });
  });
});

module.exports = router;
