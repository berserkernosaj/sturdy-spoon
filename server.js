var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var expressSession = require('express-session');
var requests = require('./serverControllers/requests.js');
var corsOptions = {
  origin: 'http://localhost:8782'
};
var config = require('./config.js');
var User = require('./schemas/userSchema');
var Story = require('./schemas/storySchema');
var StoryPath = require('./schemas/storyPath');
var port = 8782;
var app = express();
var db = mongoose.connection;




app.use(express.static(__dirname + '/front-end'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(expressSession({secret: config.sessionSecret }));

mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});

//Story Path Stuff Here:

app.post('/api/storyPath', function(req, res, next){
  var storyPath = new StoryPath(req.body);
  storyPath.save(function(err, sP){
    if (err){
      return res.status(500).send(err);
    }else{
      return res.json(sP);
    }
  });
});


app.put('/api/storyPath:id', function(req, res, next){
  var id = req.params.id;
  StoryPath.findByIdAndUpdate(id, {$set: req.body}, {new: true}, function(err, storyPath){
    if (err){
      return res.status(500).send(err);
    }else{
      return res.status(200).json(storyPath);
    }
  });
});

app.get('/api/storyPath:id', function(req, res, next){
  var id = req.params.id;
  StoryPath.findById(id).populate('pathOptions').exec(function(err, storyPath){
    if (err){
      return res.status(500).send(err);
    }else{
      return res.status(200).json(storyPath);
    }
  });
});

app.get('/api/storyPath', function(req, res, next){
  StoryPath.find(function(err, storyPaths){
    if (err){
      return res.status(500).send(err);
    }else{
      return res.status(200).json(storyPaths);
    }
  });
});


//Story Stuff Here:
app.get('/api/story', requests.storyGet);

//User Stuff Here:






app.listen(8782, function(){
  console.log('Listening on port ' + port)
})
