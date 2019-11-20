var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TestSchema = new Schema(
  {
    name: {type: String, required: true},
    level: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true}
  }
);

// Virtual for book's URL
TestSchema
.virtual('url')
.get(function () {
  return '/catalog/lvl3/' + this._id;
});

//Export model
module.exports = mongoose.model('Lvl3', TestSchema);
