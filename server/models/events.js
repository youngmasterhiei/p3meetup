module.exports = function(sequelize, DataTypes) 
{
    const event = sequelize.define("event",
    {
        id:
        {
            //there may be an issue if the column is not CHAR (36)
            //when testing need to see what datatype sequelize actually assigns
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
        },
        creator_user_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        event_title:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        summary:
        {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        max_attend:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            len: [1,100]
        },
        //need some way to update this when max_attend is hit
        is_full:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            defaultValue: 'No',
            values: ['Yes', 'No']
        },
        age_restrict:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Yes', 'No']
        },
        age_min:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Any', '+13', '+18', '+21']
        },
        event_date:
        {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        //might want to change this to string
        //if string, will ONLY do validation on the front end
        //need to choose time formatting
        event_time:
        {
            type: DataTypes.DATE,
            allowNull: false
        },
        location_name:
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
            allowNull: true
        },
        addr3:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        city:
        {
            type: DataTypes.TEXT,
            allowNull: false

        },
        state:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        zip_code:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        country:
        {
            type: DataTypes.TEXT,
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

    return event;
  };