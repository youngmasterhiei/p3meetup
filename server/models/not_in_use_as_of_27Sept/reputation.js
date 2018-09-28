module.exports = function(sequelize, DataTypes) 
{
    const reputation = sequelize.define("reputation",
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
        reviewed_user_id:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        reviewer_user_id:
        {
            type: DataTypes.UUID,
            allowNull: false,
        },
        rating:
        {
            type: DataTypes.DECIMAL(10,2),
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

    return reputation;
  };