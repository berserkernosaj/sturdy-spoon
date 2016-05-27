var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
var UserCtrl = require('./serverControllers/UserCtrl');
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



passport.use('local-login', new LocalStrategy({
usernameField: 'userName',
passwordField: 'password'
},
  function(username, password, done) {
    User.findOne({ userName: username }).populate("bookmarks").exec(function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(express.static(__dirname + '/front-end'));
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(expressSession({
  secret: config.sessionSecret,
  resave: false,
  saveUnitialized: false
 }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://localhost/test');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to MongoDB");
});


//Story Path Stuff Here:

// app.post('/api/storyPath', function(req, res, next){
//   var storyPath = new StoryPath(req.body);
//   storyPath.save(function(err, sP){
//     if (err){
//       return res.status(500).send(err);
//     }else{
//       return res.json(sP);
//     }
//   });
// });


// app.put('/api/storyPath:id', function(req, res, next){
//   var id = req.params.id;
//   StoryPath.findByIdAndUpdate(id, {$set: req.body}, {new: true}, function(err, storyPath){
//     if (err){
//       return res.status(500).send(err);
//     }else{
//       return res.status(200).json(storyPath);
//     }
//   });
// });

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
app.post('/api/users/register', UserCtrl.register);
app.post('/api/users/login', passport.authenticate('local-login', {failureRedirect: '/api/users/failed'}), function(req, res, next) {
  console.log('Logged in');
  res.status(200).json(req.user);
});
app.post('/api/users/failed', UserCtrl.loginFailed);
app.get('/api/users/failed', UserCtrl.loginFailed2);

app.get('/api/users/logout', UserCtrl.logOut);
app.post('/api/users/bookmark:id', UserCtrl.bookmark);
app.post('/api/users/bookmark/remove:id', UserCtrl.bookmarkRem);


// holy crap delete this test before live hosting this thing!

// app.get('/api/users', function(req, res, next){
//   User.find(function(err, users){
//     if (err){
//       return res.status(500).send(err);
//     }else{
//       return res.status(200).json(users);
//     }
//   });
// });




app.listen(8782, function(){
  console.log('Listening on port ' + port)
})
