module.exports = function(sequelize, DataTypes) 
{
    const profile = sequelize.define("profile",
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
            type: DataTypes.STRING
          
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
            type: DataTypes.TEXT,
            allowNull: true
        },
        state:
        {
            type: DataTypes.TEXT,
            allowNull: true
        },
        zip_code:
        {
            type: DataTypes.TEXT,
            allowNull: true
        },
        country:
        {
            type: DataTypes.TEXT,
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
            type: DataTypes.BLOB,
            allowNull: true
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
            allowNull: true,
            values: ['Active', 'Inactive']
        }
      },
      {
        //this requires snake casing
        underscored: true
      });
   

    return profile;
  };

