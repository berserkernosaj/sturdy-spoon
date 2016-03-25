var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var storyPathSchema = new Schema ({
  pathTitle: String,
  text: String,
  pathOptions: [{ type: ObjectId, ref: 'storyPath'}]
});

module.exports = mongoose.model('storyPath', storyPathSchema);
