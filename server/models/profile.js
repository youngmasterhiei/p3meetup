module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
      firstName: DataTypes.STRING,
      lastName: DataTypes.INTEGER,
      city: DataTypes.INTEGER,
      state: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      gender: DataTypes.INTEGER,
      gitHub: DataTypes.INTEGER,
      linkedIn: DataTypes.INTEGER,


      
    });
    Profile.associate = function(models) {
      Profile.belongsTo(models.User)
    };
    
    return Profile;
  };
  

