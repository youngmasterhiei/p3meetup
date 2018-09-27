module.exports = function(sequelize, DataTypes) 
{
    const city_state = sequelize.define("city_state",
    {
        id:
        {
            //there may be an issue if the column is not CHAR (36)
            //when testing need to see what datatype sequelize actually assigns
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        city_name:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        state_iso2:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [2]
        },
        state_name:
        {
            type: DataTypes.TEXT,
            allowNull: false,
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

    return city_state;
  };