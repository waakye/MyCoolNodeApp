const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express');

const app = express();

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

server.listen(port, () => {
  console.log(`Server running at port ` + port);
});
