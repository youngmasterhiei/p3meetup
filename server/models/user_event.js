module.exports = function(sequelize, DataTypes) 
{
    const user_event = sequelize.define("user_event",
    {
        id:
        {
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
            allowNull: true,
            values: ['Not Registered', 'Registered']
        },
        attend_status:
        {
            type: DataTypes.ENUM,
            allowNull: true,
            values: ['Attended', 'No Show']
        },
        reject_Status:
        {
            type: DataTypes.ENUM,
            allowNull: true,
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