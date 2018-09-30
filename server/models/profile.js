module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      age: DataTypes.INTEGER,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      gender: DataTypes.STRING,
      gitHub: DataTypes.STRING,
      linkedIn: DataTypes.STRING
      
    });
    Profile.associate = function(models) {
      Profile.belongsTo(models.User)
    };
    
    return Profile;
  };
  