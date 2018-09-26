module.exports = function(sequelize, DataTypes) 
{
    const location = sequelize.define("location",
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
        addr1:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        addr2:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        addr3:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        city_state:
        {
            type: DataTypes.UUID,
            allowNull: false

        },
        zip_code:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        country:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        created_at: 
        {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, 
    {
        underscored: true
    });

    return location;
  };