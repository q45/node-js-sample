var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(req, res) {
	var fs = require('fs');
	var buf = new Buffer(fs.readFileSync('index.html'), 'utf-8');
	res.send(buf.toString());
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
