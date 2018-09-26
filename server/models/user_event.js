module.exports = function(sequelize, DataTypes) 
{
    const user_event = sequelize.define("user_event",
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
        user_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        event_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        reg_status:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Not Registered', 'Registered']
        },
        attend_status:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Attended', 'No Show']
        },
        reject_Status:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Age', 'Location', 'Missing Skill']
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

    return user_event;
  };