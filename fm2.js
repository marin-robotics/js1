const express = require('express');
const app = express();

// listen on path and listen to handler
app.get('/', function (req, res) {
  res.send('Hello World');
});

// use the express package to serve a file (with the file name coming after the slash)
app.use(express.static('public'))

app.listen(3000);