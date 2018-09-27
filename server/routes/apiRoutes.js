var db = require("../models");

// var LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');


// localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'));



module.exports = function (app) {


  //this route should not need to be modified
  //not sure what this is supposed to be used for though....need clarification
  app.get("/api/user/:email", function (req, res) 
  {
    db.user.findOne(
      {
      where: { email: req.params.email }
      })
    .then(function (dbuser) 
    {
      res.json(dbuser);
    });
  });

  //create a user account
  app.post("/api/user", function (req, res) 
  {
    console.log(req.body)
    db.user.create(
      {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password
      })
      .then(function (dbuser) 
      {
        res.json(dbuser);
      });
  });

  //rcreate a post
  app.post("/api/event_post", function(req, res)
  {
    db.post.create(
      {
        poster_user_id: req.body.poster_user_id,
        title: req.body.title,
        content: req.body.content,
        status: 'In Review'
      })
      .then(function(dbpost)
      {
        res.json(dbpost)
      });
  });

  //create a comment
  app.post("/api/post_comment", function(req,res)
  {
    db.comment.create(
    {
      post_id: req.body.post_id,
      commenter_user_id: req.body.commenter_user_id,
      title: req.body.title,
      content: req.body.content,
      status: 'In Review'
    })
    .then(function(dbcomment)
    {
      res.json(dbcomment)
    });
  });

  //create event
  app.post("/api/events", function (req, res) 
  {
    console.log(req.body)
    db.event.create(
      {
      //creator_user_id: <needs pass in from auth>,
      event_title: req.body.title,
      summary: req.body.summary,
      max_attend: req.body.max_attend,
      is_full: 'No',
      age_restrict: req.body.age_restrict,
      age_min: req.body.age_min,
      event_date: req.body.event_date,
      event_time: req.body.event_time,
      location_name: req.body.location_name,
      addr1: req.body.addr1,
      addr2: req.body.addr2,
      addr3: req.body.addr3,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      country: req.body.country
      })
      .then(function (dbevent) 
      {
        res.json(dbevent);
      })
  });

  //list of all events
  app.get("/api/events", function (req, res) 
  {
    db.Event.findAll({})
    .then(function (dbevent) 
    {
      res.json(dbevent);
    });
  });

  //get event details by title
  app.get("/api/events/:title", function (req, res) 
  {
    db.Event.findAll(
      {
      where: { event_title: req.params.title }
      })
    .then(function (dbevent) 
    {
      res.json(dbevent);
    });
  });

  //get user profile information by id
  app.get("/api/profile/:id", function (req, res) 
  {
    db.profile.findOne(
      {
      where: { user_id: req.params.id }
      })
    .then(function (dbprofile) 
    {
      res.json(dbprofile);
    });
  });

  //create profile details
  app.post("/api/profile", function (req, res) {
    console.log(req.body)
    db.profile.create(
      {
      age: req.body.agee,
      gender: req.body.gender,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      country: req.body.country,
      github: req.body.github,
      linkedin: req.body.linkedin,
      avatar: req.body.avatar
      })
      .then(function (dbprofile) {
        res.json(dbprofile);
      });
  });
};




