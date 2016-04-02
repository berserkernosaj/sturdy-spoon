var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new Schema ({
  userName: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  currentStory: { type: ObjectId, ref: 'storyPath'},
  bookmarks: [{ type: ObjectId, ref: 'storyPath'}],
  userStory: [{ type: ObjectId, ref: 'story'}]
});

module.exports = mongoose.model('user', userSchema);
