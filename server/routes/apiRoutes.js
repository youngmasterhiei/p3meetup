var db = require("../models");

// var LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');


// localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'));



module.exports = function (app) {

    app.get("/api/profile", function (req, res) {
        db.Profile.findOne({
          where: { UserId: uID },
          include: [db.User]
        }).then(function (dbProfile) {
          res.json(dbProfile);
        });
      });

      app.get("/api/user", function (req, res) {
        db.Profile.findOne({
          where: { UserId: uID },
          include: [db.User]
        }).then(function (dbProfile) {
          res.json(dbProfile);
        });
      });

      app.post("/api/user", function (req, res) {
          console.log(req.body)
        db.User.create({
          email: req.body.userEmail,
          password: req.body.userPassword
    
        })
          .then(function (dbUser) {
            res.json(dbUser);
          });
      });

};




