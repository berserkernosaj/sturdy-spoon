var express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var corsOptions = {
  origin: 'http://localhost:8782'
};
var config = require('./config.js')
var port = 8782;
var app = express();

app.use(express.static(__dirname + '/front-end'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(expressSession({secret: config.sessionSecret }));






app.listen(8782, function(){
  console.log('Listening on port ' + port)
})
