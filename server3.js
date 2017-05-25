const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/api', function (req, res) {
  res.send('Hello from API')
});
app.use('/', function (req, res) {
  res.send('404 Not Found');
});
app.listen('4000', function(){
  console.log('Listening on port 4000');
});
