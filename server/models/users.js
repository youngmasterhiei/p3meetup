module.exports = function(sequelize, DataTypes) 
{
    const user = sequelize.define("user",
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
        fname:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            notEmpty: true,
            validate: 
            {
                len: [1,50]
            }
        },
        lname:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            notEmpty: true,
            validate: 
            {
                len: [1,50]
            } 
        },
        email:
        {
            type: DataTypes.TEXT,
            allowNull: false,
            notEmpty: true,
            validate:
            {
                isEmail: true
            }
        },
        password: 
        {
            type: DataTypes.STRING,
            allowNull: false,
            notEmpty: true
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
    //this requires snake casing
    underscored: true
    });

  return user;
};