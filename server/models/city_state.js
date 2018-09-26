module.exports = function(sequelize, DataTypes) 
{
    const city_state = sequelize.define("city_state",
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
        city_name:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        state_name:
        {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        state_iso2:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [2]
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

    return city_state;
  };