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

      app.post("/api/events", function (req, res) {
        console.log(req.body)
      db.Event.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        time: req.body.time,
        address: req.body.address,
        name: req.body.name

      })
        .then(function (dbEvent) {
          res.json(dbEvent);
        });
    });

    app.get("/api/events", function(req, res) {
      db.Event.findAll({}).then(function(dbEvent) {
        res.json(dbEvent);
      });
    });

    app.get("/api/events/:title", function(req, res) {
      db.Event.findAll({
        where: { title: req.params.title }
      }).then(function(dbEvent) {
        res.json(dbEvent);
      });
    });

};




