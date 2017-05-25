const express = require('express');
const app = express();

app.listen('3000', function () {
  console.log("Listening on port 3000");
});
app.get('/api', function(req,res){
  res.send('Hello from API');
});
app.use(express.static('public'));

function logError (err,req,res) {
  console.error('404 Page not found');
}
logError();
