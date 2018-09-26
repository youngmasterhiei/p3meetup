module.exports = function(sequelize, DataTypes) 
{
    const event_skill = sequelize.define("event_skill",
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
        event_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        skill_id:
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

    return event_skill;
  };