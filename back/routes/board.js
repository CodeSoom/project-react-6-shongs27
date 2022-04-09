const express = require('express');
const router = express.Router();

const Board = require('../models/Board');

// 게시판 로그인 (수정, 삭제)
router.post('/login', (req, res) => {
  const { loginState, id, password: clientPassword } = req.body;

  if (loginState === 'modify') {
  }

  if (loginState === 'eliminate') {
    Board.findOne({ id }, (err, thread) => {
      if (err) return res.status(400).send({ trial: false });

      thread.comparePassword(clientPassword, (err, isMatch) => {
        console.log(isMatch);
        if (!isMatch) return res.status(400).send({ trial: false });

        Board.findOneAndDelete({ id }).exec((err, board) => {
          if (err) return res.status(400).send({ trial: false });

          return res.status(200).json({ trial: true });
        });
      });
    });
  }
});

//게시글 상세내용 가져가기
router.get('/:id', (req, res) => {
  console.log(req.params);
  Board.findOne({ id: req.params.id }).exec((err, thread) => {
    if (err) return res.status(400).send({ trial: false });

    console.log(thread);
    return res.status(200).send({ trial: true, thread });
  });
});

// 게시판 가져가기
router.get('/', (req, res) => {
  Board.find()
    .sort({ id: -1 })
    .exec((err, board) => {
      if (err) return res.status(400).send({ trial: false });

      return res.status(200).send({ trial: true, board });
    });
});

// 게시글 등록
router.post('/', (req, res) => {
  const board = new Board(req.body);

  board.save((err) => {
    if (err) return res.status(400).send({ trial: false });

    Board.find()
      .sort({ id: -1 })
      .exec((err, board) => {
        if (err) return res.status(400).send({ trial: false });

        return res.status(200).send({ trial: true, board });
      });
  });
});

module.exports = router;
