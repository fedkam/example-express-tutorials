var Lvl1 = require('../models/lvl1');
var async = require('async');

// exports.list_lvl2 = function(req, res) {
//   Lvl2.find({}, 'name')
//     .populate('items')
//     .exec(function (err, list_lvl2) {
//       if (err) { return next(err); }
//       //Successful, so render
//       //console.log('list_books = ', list_lvl3[0].genre)
//       res.render('lvl2-view', { title: 'Test List', lvl2_list: list_lvl2 });
//     });

    exports.list_lvl1 = function(req, res, next) {
      Lvl1.find({}, 'name')
        .populate({
          path:'items',
          populate: {path:'items'}})
        .exec(function (err, list_lvl1) {
          if (err) { return next(err); }
          res.render('lvl1-view', { title: 'Book List', lvl1_list: list_lvl1 });
        });

};
