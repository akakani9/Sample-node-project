var express = require('express');

var app = express();
var port = 8080;

app.set('views', __dirname + '/app/server/views'); 
app.set('view engine', 'ejs'); 

require('./app/routes')(app);

app.listen(port, function(){
	console.log('Running on Port ' + port + ' .');
});
