module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.STRING,
      time: DataTypes.STRING,
      zip: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      streetAddress: DataTypes.STRING,
      businessName: DataTypes.STRING,
      attendingTotal: DataTypes.STRING

    });
    Event.associate = function(models) {
      Event.belongsTo(models.User) 
    };

      Event.associate = function(models) { 
        Event.hasMany(models.Comment)
      };
      Event.associate = function(models) {
        Event.belongsTo(models.Forum);
      }
    
    return Event;
  };