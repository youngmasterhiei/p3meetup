var db = require("../models");

// var LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');


// localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'));

module.exports = function (app) 
{
  ///////////////////////////////
  //all get routes are here
  
  //not sure what this is supposed to be used for though - possibly bring up user profile?
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

  //list of all events
  app.get("/auth/api/events", function (req, res) 
  {
    db.event.findAll({})
    .then(function (dbevent) 
    {
      res.json(dbevent);
    });
  });

  //get event details by event id
  app.get("/auth/api/events/:id", function (req, res) 
  {
    db.event.findAll(
      {
        where: { id: req.params.id }
      })
    .then(function (dbevent) 
    {
      res.json(dbevent);
    });
  });

  //get user profile information by user id
  app.get("/auth/api/profile/:id", function (req, res) 
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

  //get all posts and associated comments for an event
  app.get("/api/posts/:id", (req, res) => 
  {  
    db.post.findAll(
    {
      where: {event_id: req.params.id},
      include: [
        {
          model: db.comment
        }
      ]
    }).then(function (dbpost)
    {
      console.log(dbpost.length);
      res.json(dbpost);
    });
  });

  /////////////////////////////// 


  ///////////////////////////////
  //all post routes are here
 
  //create a user account
  // app.post("/api/user", function (req, res) 
  // {
  //   db.user.create(
  //     {
  //     fname: req.body.fname,
  //     lname: req.body.lname,
  //     email: req.body.email,
  //     password: req.body.password
  //     })
  //     .then(function (dbuser) 
  //     {
  //       res.json(dbuser);
  //     });
  // });

  //rcreate a post
  app.post("/auth/api/post/:id", function(req, res)
  {
    db.post.create(
      {
        poster_user_id: req.body.poster_user_id, //this should be the authenticated user
        event_id: req.params.id, 
        title: req.body.title,
        content: req.body.content,
        status: 'In Review'
      })
      .then(function(dbpost)
      {
        res.json(dbpost);
      });
  });

  //create a comment
  app.post("/api/comment/:id", function(req,res)
  {
    db.comment.create(
    {
      post_id: req.params.id,
      commenter_user_id: req.body.commenter_user_id, //this should be the authenticated user
      title: req.body.title,
      content: req.body.content,
      status: 'In Review'
    })
    .then(function(dbcomment)
    {
      res.json(dbcomment);
    });
  });

//create profile
  app.post("/auth/api/profile/", function(req,res)
  {
    console.log(req.body);
    db.profile.create(
    {
      user_id: req.body.user_id,
      age: req.body.age,
      gender: req.body.gender,
      phone: req.body.phone,
      city: req.body.city,
      state: req.body.state,
      zip_code: req.body.zip_code,
      country: req.body.country,
      github: req.body.github,
      linkedin: req.body.linkedin,
      avatar: req.body.avatar,
      status: 'Active'
    })
    .then(function(dbprofile)
    {
      res.json(dbprofile);
    });
  });

  //create event
  app.post("/auth/api/events", function (req, res) 
  {
    console.log('SAMSAWAN lets see some styff')
    console.log(req.body)
    db.event.create(
      {
      creator_user_id: req.body.creator_user_id,
      event_title: req.body.event_title,
      summary: req.body.summary,
      max_attend: req.body.max_attend,
      is_full: req.body.is_full,
      age_restrict: req.body.age_restrict,
      age_min: req.body.age_min,
      event_date_time: req.body.event_date_time,
      time: req.body.time,
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
      });
  });
 ///////////////////////////////

 ///////////////////////////////
 //all put routes are here

 //update user profile based on user id
 app.put("/api/profile/:id", function (req, res)
 {
   db.profile.update(
     {
       age: req.body.age,
       gender: req.body.gender,
       phone: req.body.phone,
       city: req.body.city,
       state: req.body.state,
       zip_code: req.body.zip_code,
       country: req.body.country,
       github: req.body.github,
       linkedin: req.body.linkedin,
       avatar: req.body.avatar,
       status: 'Active'
     },
     {returning: true, where: {user_id: req.body.id}}
     )
     //by using the return and array it should return the updated values to the page
     .then(function ([ p_rowsUpdate, [updated_profile] ]) 
     {
       res.json(updated_profile);
     })
     .then(function()
     {
      db.user.update(
        {
          fname: req.body.fname,
          lname: req.body.lnam,
          email: req.boy.email
        },
        {returning: true, where: {user_id: req.body.id}}
      )
      .then(function ([u_rowsUpdate, [updated_user] ])
      {
        res.json(updated_user);
      });
     });
 });
///////////////////////////////

};