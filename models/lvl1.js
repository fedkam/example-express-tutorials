var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TestSchema1 = new Schema(
  {
    name: {type: String, required: true},
    level: {type: String, required: true},
    items: [{type: Schema.ObjectId, ref: 'Lvl2', required: true}]
  }
);

// Virtual for book's URL
TestSchema1
.virtual('url')
.get(function () {
  return '/catalog/lvl1/' + this._id;
});

//Export model
module.exports = mongoose.model('Lvl1', TestSchema1);
