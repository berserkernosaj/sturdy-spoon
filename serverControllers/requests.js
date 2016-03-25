var story = require('./tempStoryStorage.js');

module.exports = {
  storyGet: function(req, res, next){
    console.log('hey man, you are a boss!')
    res.status(200).json(story);
  }
}
