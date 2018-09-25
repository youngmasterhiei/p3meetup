module.exports = function(sequelize, DataTypes) 
{
    var Post = sequelize.define("post",
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
        userid:
        {
            type: DataTypes.UUID,
            allowNull: false
        },
        title:
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        content:
        {
            type: DataTypes.TEXT,
            allowNull: false
        },
        status:
        {
            type: DataTypes.ENUM,
            values: ['Approved', 'Rejected', 'In Review']
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

    return Post;
  };