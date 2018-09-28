module.exports = function(sequelize, DataTypes) 
{
    const country = sequelize.define("country",
    {
        id:
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        alpha2:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [2]
        },
        alpha3:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [3]
        },
        created_at: 
        {
            type: DataTypes.DATE,
            allowNull: true
        },
        updated_at: 
        {
            type: DataTypes.DATE,
            allowNull: true
        },
        deleted_at: 
        {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, 
    {
        underscored: true
    });

    return country;
  };