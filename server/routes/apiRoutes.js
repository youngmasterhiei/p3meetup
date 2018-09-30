var db = require("../models");

// var LocalStorage = require('node-localstorage').LocalStorage;
// localStorage = new LocalStorage('./scratch');


// localStorage.setItem('myFirstKey', 'myFirstValue');
// console.log(localStorage.getItem('myFirstKey'));

module.exports = function (app) 
{
//   ///////////////////////////////
//   //all get routes are here
  
//   //not sure what this is supposed to be used for though - possibly bring up user profile?
  // app.get("/api/user/:email", function (req, res) 
  // {
  //   db.user.findOne(
  //     {
  //     where: { email: req.params.email }
  //     })
  //   .then(function (dbuser) 
  //   {
  //     res.json(dbuser);
  //   });
  // });

//   //list of all events
//   app.get("/api/events", function (req, res) 
//   {
//     db.event.findAll({})
//     .then(function (dbevent) 
//     {
//       res.json(dbevent);
//     });
//   });

//   //get event details by event id
//   app.get("/api/events/:id", function (req, res) 
//   {
//     db.event.findAll(
//       {
//         where: { id: req.params.id }
//       })
//     .then(function (dbevent) 
//     {
//       res.json(dbevent);
//     });
//   });

//   //get user profile information by user id
//   app.get("/api/profile/:id", function (req, res) 
//   {
//     db.profile.findOne(
//       {
//         where: { user_id: req.params.id }
//       })
//     .then(function (dbprofile) 
//     {
//       res.json(dbprofile);
//     });
//   });

//   //get all posts and associated comments for a single user
//   app.get('/posts/event/id:', (req, res) => {  
//     db.user.findAll({
//       include: [
//         {
//           model: db.post,
//           include: [
//             {
//               model: db.comments
//             }
//           ]
//         }
//       ]
//     }).then(user => {
//       const resObj = user.map(user => {

//         //tidy up the user data
//         return Object.assign(
//           {},
//           {
//             user_id: user.id,
//             posts: user.posts.map(post => {

//               //tidy up the post data
//               return Object.assign(
//                 {},
//                 {
//                   post_id: post.id,
//                   poster_user_id: post.poster_user_id,
//                   title: post.title,
//                   content: post.content,
//                   comments: post.comments.map(comment => {

//                     //tidy up the comment data
//                     return Object.assign(
//                       {},
//                       {
//                         comment_id: comment.id,
//                         post_id: comment.post_id,
//                         commenter_user_id: comment.commenter_user_id,
//                         //commenter_email: comment.commenter_email,
//                         title: comment.title,
//                         content: comment.content
//                       }
//                     )
//                   })
//                 }
//                 )
//             })
//           }
//         )
//       });
//       res.json(resObj);
//     });
//   });
//   /////////////////////////////// 


//   ///////////////////////////////
//   //all post routes are here
 
  //create a user account
  app.post("/api/user", function (req, res) 
  {
    db.user.create(
      {
      // fname: req.body.fname,
      // lname: req.body.lname,
      email: req.body.email,
      password: req.body.password
      })
      .then(function (dbuser) 
      {
        res.json(dbuser);
      });
  });

//   //rcreate a post
//   app.post("/api/event_post", function(req, res)
//   {
//     db.post.create(
//       {
//         poster_user_id: req.body.poster_user_id,
//         title: req.body.title,
//         content: req.body.content,
//         status: 'In Review'
//       })
//       .then(function(dbpost)
//       {
//         res.json(dbpost);
//       });
//   });

//   //create a comment
//   app.post("/api/post_comment", function(req,res)
//   {
//     db.comment.create(
//     {
//       post_id: req.body.post_id,
//       commenter_user_id: req.body.commenter_user_id,
//       title: req.body.title,
//       content: req.body.content,
//       status: 'In Review'
//     })
//     .then(function(dbcomment)
//     {
//       res.json(dbcomment);
//     });
//   });

//   //create event
//   app.post("/api/events", function (req, res) 
//   {
//     db.event.create(
//       {
//       //creator_user_id: <needs pass in from auth>,
//       event_title: req.body.title,
//       summary: req.body.summary,
//       max_attend: req.body.max_attend,
//       is_full: rqe.body.is_full,
//       age_restrict: req.body.age_restrict,
//       age_min: req.body.age_min,
//       event_date: req.body.event_date,
//       event_time: req.body.event_time,
//       location_name: req.body.location_name,
//       addr1: req.body.addr1,
//       addr2: req.body.addr2,
//       addr3: req.body.addr3,
//       city: req.body.city,
//       state: req.body.state,
//       zip_code: req.body.zip_code,
//       country: req.body.country
//       })
//       .then(function (dbevent) 
//       {
//         res.json(dbevent);
//       });
//   });
//  ///////////////////////////////

//  ///////////////////////////////
//  //all put routes are here

//  //update user profile based on user id
//  app.put("/api/profile/:id", function (req, res)
//  {
//    db.profile.update(
//      {
//        age: req.body.age,
//        gender: req.body.gender,
//        phone: req.body.phone,
//        city: req.body.city,
//        state: req.body.state,
//        zip_code: req.body.zip_code,
//        country: req.body.country,
//        github: req.body.github,
//        linkedin: req.body.linkedin,
//        avatar: req.body.avatar,
//        status: 'Active'
//      },
//      {returning: true, where: {user_id: req.body.id}}
//      )
//      //by using the return and array it should return the updated values to the page
//      .then(function ([ p_rowsUpdate, [updated_profile] ]) 
//      {
//        res.json(updated_profile);
//      })
//      .then(function()
//      {
//       db.user.update(
//         {
//           fname: req.body.fname,
//           lname: req.body.lnam,
//           email: req.boy.email
//         },
//         {returning: true, where: {user_id: req.body.id}}
//       )
//       .then(function ([u_rowsUpdate, [updated_user] ])
//       {
//         res.json(updated_user);
//       });
//      });
//  });
///////////////////////////////

};