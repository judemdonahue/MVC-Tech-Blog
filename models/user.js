const { Sequelize, Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        body: {

        }
    },
    {
        sequelize
    }
);

module.exports = User;