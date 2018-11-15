var orm = require("../config/orm");

var burger = {
    all: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(nameOfBurger, eaten, cb) {
      orm.insertOne("burgers", nameOfBurger, eaten, function(res) {
        cb(res);
      });
    },
    update: function(newBurgerName, oldBurgerName, eaten, cb) {
      orm.updateOne("burgers", newBurgerName, oldBurgerName, eaten, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;



// Testing cases:

//   burger.update("TRAE", "Waddd", true, function (res) {
//     console.log(res)
//  });
//   burger.create("Waddd", false, function (res) {
//       console.log(res)
//   });

//   burger.all(function (res) {
//       console.log(res);
//   });



  