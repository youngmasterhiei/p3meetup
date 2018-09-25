module.exports = function(sequelize, DataTypes) 
{
    var Zipcode = sequelize.define("zipcode",
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
        zipcode:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [5]
        },
        plus4:
        {
            type: DataTypes.INTEGER,
            allowNull: true,
            len: [4]
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

    return Zipcode;
  };