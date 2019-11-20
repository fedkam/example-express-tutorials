var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TestSchema2 = new Schema(
  {
    name: {type: String, required: true},
    level: {type: String, required: true},
    items: [{type: Schema.ObjectId, ref: 'Lvl3', required: true}]
  }
);

// Virtual for book's URL
TestSchema2
.virtual('url')
.get(function () {
  return '/catalog/lvl2/' + this._id;
});

//Export model
module.exports = mongoose.model('Lvl2', TestSchema2);
