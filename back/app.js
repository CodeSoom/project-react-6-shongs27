const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());

app.use(cors({ origin: '*', credentials: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.post('/test', (req, res) => {
  console.log('클라이언트가 왔다!');
  console.log(req.body);
});

// app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`${port}에서 express 가동 중`);
});
