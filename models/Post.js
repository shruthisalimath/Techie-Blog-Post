const { Model, DataType, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNUll: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNUll: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
          timestamps: false,
          freezeTableName: true,
          underscored: true,
          modelName: 'Post',
    } 
);

module.exports = Post;