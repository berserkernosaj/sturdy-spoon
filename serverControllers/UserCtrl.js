var User = require('../schemas/userSchema');

module.exports = {
  register: function(req, res, next){
    var user = new User(req.body);
            user.save(function(err, user){
              if (err){
                console.log(err);
                return res.status(500).send(err);
              }else{
                return res.status(200).json(res.status);
              }
            });
  },
  logOut: function(req, res, next) {
    req.logout();
    req.session.destroy();
    res.status(200).send({msg: "you have been logged out"});
  },
  loginFailed: function(req, res, next){
    User.findOne({ 'userName': 'req.body.userName'}, function(err, user){
      if (err) return res.status(500).json(err);
      if(user){
        res.status(401).send({msg: 'Password is incorrect'});
      }else {
        res.status(401).send({msg: 'Username is incorrect'});
      }
    });
  },
  loginFailed2: function(req, res, next) {
    res.status(401).send({msg: 'Username or passport is incorrect'});
  },
  bookmark: function (req, res, next) {
    //console.log(req);
    var id = req.params.id;
    User.findById(id).populate("bookmarks").exec(function(err, user){
      if (err){
        return res.status(500).send(err);
      }else{
        user.bookmarks.push(req.body.bookmark);
        user.save(function(err, data) {
          if (err){
            res.status(500).send(err);
          }else {
            User.findById(id).populate("bookmarks").exec(function (err, user) {
              if (err){
                res.status(500).send(err);
              }else {
                res.status(200).json(user);
              }
            })
          }
        });
      }
    });
  },
  bookmarkRem: function (req, res, next) {
    //console.log(req);
    var id = req.params.id;
    User.findById(id).populate("bookmarks").exec(function(err, user){
      if (err){
        return res.status(500).send(err);
      }else{
        user.bookmarks.splice(req.body.bookmark, 1);
        user.save(function(err, data) {
          if (err){
            res.status(500).send(err);
          }else {
            res.status(200).json(data);
          }
        });
      }
    });
  }

}
