const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model

class User extends Model {}

// define table columns and configurations
User.init(
    {
        // user id
        id: {
            // sequelize data types
            type: DataTypes.INTEGER,
            // equivalent of SQL's 'NOT NULL' option
            allowNull: false,
            // instruct that this is the primary key
            primaryKey: true,
            // turn on auto-increment
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            // no duplicates
            unique: true,
            // if allowNull is set to false, we can run our data
            // through a validator
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                // means password must have at least four characters
                len: [4]
            }
        }
    },
    {
        // TABLE CONFIG OPS HERE

        // pass our imported sequelize connection
        sequelize,
        // don't automatically make createdAt/updatedAt timestamps
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel case
        underscored: true,
        // make model name stay lowercase
        modelName: 'user'
    }
);

module.exports = User;