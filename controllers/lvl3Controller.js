var Lvl3 = require('../models/lvl3');

var async = require('async');

exports.list_lvl3 = function(req, res) {
  Lvl3.find({}, 'name level')
    .exec(function (err, list_lvl3) {
      if (err) { return next(err); }
      //Successful, so render
      //console.log('list_books = ', list_lvl3[0].genre)
      res.render('lvl3-view', { title: 'Test List', lvl3_list: list_lvl3 });
    });
};
