const express = require('express');
const router = express.Router();

const Board = require('../models/Board');

// 게시글 가져가기
router.get('/', (req, res) => {
  console.log('잘 도착하셨어요');
});

// 게시글 등록
router.post('/', (req, res) => {
  const board = new Board(req.body);

  board.save((err) => {
    if (err) res.status(400).send({ trial: false });

    Board.find().exec((err, board) => {
      if (err) res.status(400).send({ trial: false });

      res.status(200).send({ trial: true, board });
    });
  });
});

module.exports = router;
