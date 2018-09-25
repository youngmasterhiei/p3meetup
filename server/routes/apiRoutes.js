var db = require("../models");

// var LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');


// localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'));



module.exports = function (app) {



  app.get("/api/user/:email", function (req, res) {
    db.User.findOne({
      where: { email: req.params.email }

    }).then(function (dbUser) {
      res.json(dbUser);
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

  app.get("/api/events", function (req, res) {
    db.Event.findAll({}).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/events/:title", function (req, res) {
    db.Event.findAll({
      where: { title: req.params.title }
    }).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/profile/:id", function (req, res) {
    db.Profile.findOne({
      where: { id: req.params.id }
      
    }).then(function (dbProfile) {
      res.json(dbProfile);
    });
  });

  app.post("/api/profile", function (req, res) {
    console.log(req.body)
    db.Profile.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      state: req.body.state,
      age: req.body.age,
      gender: req.body.gender,
      gitHub: req.body.gitHub,
      linkedIn: req.body.linkedIn


    })
      .then(function (dbProfile) {
        res.json(dbProfile);
      });
  });
};




