const express = require('express')
const app = express()
port = 3000

app.get('/', function (req, res) {
  res.send('my name is blessing')
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
