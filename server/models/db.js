const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, 
{  
    //need to fill in these values
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    define: 
    {
        underscored: true
    }
});

//connect all of the models (and therefore tables) to the db object
//this makes everything accessable via a single object
const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//models/tables
db.user = require('../models/users.js')(sequelize, Sequelize);
db.skill = require('../models/skills.js')(sequelize, Sequelize);
db.event = require('../models/events.js')(sequelize, Sequelize);
db.location = require('../models/location.js')(sequelize, Sequelize);
db.post = require('../models/posts.js')(sequelize, Sequelize);
db.comment = require('../comments.js')(sequelize, Sequelize);
db.user_skill = require('../models/user_skills.js')(sequelize, Sequelize);
db.user_event = require('../models/user_event.js')(sequelize, Sequelize);
db.event_skill = require('../models/event_skill.js')(sequelize, Sequelize);
db.event_post = require('../models/event_post.js')(sequelize, Sequelize);

//db.city_state = require('../models/city_state.js')(sequelize, Sequelize);
//db.zipcode = require('../models/zipcode.js')(sequelize, Sequelize);
//db.country = require('../models/country.js')(sequelize, Sequelize);
//db.user_avatar = require('../models/user_avatar.js')(sequelize, Sequelize);
//db.reputation = require('../models/reputation.js')(sequelize, Sequelize);

//comment-post-user relationship
//yes this becomes circular, but it works
db.comment.belongsTo(dp.post);
db.post.hasMany(db.comments);
db.post.belongsTo(db.user);
db.user.hasMany(db.post);

//user-profile relationship
db.profile.belongsTo(db.user);
db.user.hasOne(db.profile);


//reputation-user relationship
// db.reputation.belongsTo(db.users);
// db.user.hasMany(db.reputation);

//we combined location and event for the mvp, hence it is remarked
//event-location relationship
//db.location.belongsTo(db.events);
//db.events.hasOne(db.location); //can change to hasMany if we want to be able to have the same event at multiple locations

module.exports = db;