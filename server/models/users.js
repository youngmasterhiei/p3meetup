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
        age:
        {
            type: DataTypes.INTEGER,
            validate:
            {
                len: [1,2]
            },
            allowNull: true
        },
        gender:
        {
            type: DataTypes.ENUM,
            values: ['Male', 'Female', 'Trans-gender', 'Non-Binary'],
            allowNull: true
        },
        phone:
        {
            //would like front end validation for this value
            //need to decide how to store, likely need to normalize
            //thinking (xxx) xxx-xxxx
            type: DataTypes.STRING,
            validate:
            {
                len: [10,20]
            },
            allowNull: true
        },
        city:
        {
            type: DataTypes.UUID,
            allowNull: true
        },
        state:
        {
            type: DataTypes.UUID,
            allowNull: true
        },
        country:
        {
            type: DataTypes.UUID,
            allowNull: true
        },
        github:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        linkedin:
        {
            type: DataTypes.STRING,
            allowNull: true
        },
        avatar:
        {
            type: DataTypes.BLOB
        },
        //need query place averaged value of entries from reputation into this field
        rating:
        {
            type: DataTypes.DECIMAL(10,2),
            allowNull: true
        },
        status:
        {
            type: DataTypes.ENUM,
            allowNull: false,
            values: ['Active', 'Inactive']
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