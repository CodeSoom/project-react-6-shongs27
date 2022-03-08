const express = require('express');
const router = express.Router();
const Like = require('../models/Like');

//=================================
//             Like
//=================================

router.post('/', (req, res) => {
  //req.body에 postId가 들어있음
  // {postId : req.body.postId}
  // 그걸 토대로 찾는다

  let variable = {};
  if (req.body.videoId) {
    variable = { videoId: req.body.videoId };
  } else {
    variable = { commentId: req.body.commentId };
  }

  Like.find(variable).exec((err, likes) => {
    if (err) return res.status(400).send(err);
    res.status(200).json({ success: true, likes });
  });
});
