module.exports = function (sequelize, DataTypes) {
    var Event = sequelize.define("Event", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING
        ,
        date: DataTypes.STRING



    });
    //     User.associate = function (models) {
    //       User.hasOne(models.Profile)
    //     };
    //     User.associate = function (models) {
    //       User.hasMany(models.Meal)
    //     };
    //     User.associate = function(models) {
    //       User.hasMany(models.Lifestyle)
    //   };
    return Event;
};
