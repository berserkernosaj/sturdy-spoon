var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var storySchema = new Schema ({
  title: String,
  storyPaths: [{ type: ObjectId, ref: 'storyPath'}]
});

module.exports = mongoose.model('story', storySchema);
