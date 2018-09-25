module.exports = function(sequelize, DataTypes) 
{
    var Country = sequelize.define("country",
    {
        id:
        {
            //there may be an issue if the column is not CHAR (36)
            //when testing need to see what datatype sequelize actually assigns
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull:false
        },
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        iso2:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [2]
        },
        iso3:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [3]
        },
        phone_prefix:
        {
            type: DataTypes.STRING,
            allowNull: false,
            len: [5]
        },
        created_at: 
        {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at:  DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, 
    {
        underscored: true
    });

    return Country;
  };