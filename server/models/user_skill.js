module.exports = function(sequelize, DataTypes) 
{
    var User_Skill = sequelize.define("user_skill",
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
        updated_at:  DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, 
    {
        underscored: true
    });

    return User_Skill;
  };