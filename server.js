const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/api', function (req, res) {
  res.send('Hello from API');
});
app.use(express.static('public'));
app.get('/', function (req, res) {
  res.send('./index');
});
app.listen(port, function () {
  console.log('Listening on port '+ port);
});
